/* global React */
const { useState, useEffect, useRef, useMemo } = React;

// === Default look (tweakable) =======================================
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "spiritHue": 28,
  "audioSensitivity": 1.0,
  "parallax": true,
  "typewriter": true,
  "mistDensity": 0.35,
  "emberDensity": 0.6,
  "godrayBrightness": 0.9
}/*EDITMODE-END*/;

// === The example thread =============================================
const SEED_THREAD = [
  {
    id: "q1",
    role: "user",
    text: "Who killed Baldr?"
  },
  {
    id: "a1",
    role: "mimir",
    text:
      "Höðr loosed the killing shaft, but the hand was guided. Baldr the Bright was beloved of all things — Frigg, his mother, had walked the nine worlds and taken oaths from fire and iron, from sickness and stone, that none of them would ever wound her son. From all things save one. The mistletoe she passed over, calling it too young and too soft to swear.\n\nLoki, who had measured this gap as a smith measures a seam, plucked a sprig and shaped it into a dart. At the assembly on Iðavöllr the gods made a game of Baldr's invulnerability — they hurled stones, they struck him with axes, and the weapons turned aside in mid-air. Höðr, who was blind, stood apart from the sport. Loki put the mistletoe shaft into Höðr's hand and aimed his arm. The dart flew true. Baldr fell, and the bright went out of the world.\n\nFrigg's grief sent Hermóðr riding to Hel to bargain for his return; the bargain was broken by a giantess who would not weep. Höðr was killed in vengeance by Váli, born for that one purpose, only a night old. Loki was bound beneath the earth with a serpent above him, and there he stays — until he doesn't.",
    sources: [
      { id: "baldr",   label: "Baldr",   type: "character" },
      { id: "hodr",    label: "Höðr",    type: "character" },
      { id: "loki",    label: "Loki",    type: "character" },
      { id: "frigg",   label: "Frigg",   type: "character" },
      { id: "vali",    label: "Váli",    type: "character" },
      { id: "hermodr", label: "Hermóðr", type: "character" },
      { id: "baldr-death", label: "The death of Baldr", type: "event" },
      { id: "idavollr",    label: "Iðavöllr",          type: "place" }
    ]
  }
];

const SUGGESTIONS = [
  "What happened at Fimbulwinter?",
  "How is the Iron Crown forged?",
  "Who serves the All-Father in Asgardr?",
  "Where do the dvergr keep the seed-time?"
];

// Past conversations for the left rail
const PAST_CONVOS = [
  { id: "c1", title: "Who killed Baldr?",                    when: "Just now",   active: true },
  { id: "c2", title: "The fall of Caernarfon",               when: "2h ago" },
  { id: "c3", title: "Frigg's oaths — what she missed",      when: "Yesterday" },
  { id: "c4", title: "Where the dvergr forge the seed-time", when: "3d ago" },
  { id: "c5", title: "Háloga lineage from Aud the Deep",     when: "Last week" },
  { id: "c6", title: "On the burning of Avalon",             when: "Last week" },
  { id: "c7", title: "Mistletoe, and what it remembers",     when: "2w ago" },
  { id: "c8", title: "Why Loki is bound",                    when: "Apr 14" },
];

function AskMimir() {
  // tweaks state
  const [tweaks, setTweaks] = useState(DEFAULTS);
  function setTweak(k, v) {
    setTweaks(prev => {
      const next = typeof k === 'object' ? { ...prev, ...k } : { ...prev, [k]: v };
      window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
      return next;
    });
  }
  const [tweaksOpen, setTweaksOpen] = useState(false);
  useEffect(() => {
    const onMsg = (e) => {
      const d = e?.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode')   setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent?.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // thread state
  const [thread, setThread] = useState(SEED_THREAD);
  const [draft, setDraft] = useState("");
  const [listening, setListening] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [speakingId, setSpeakingId] = useState(null);
  const [typedChars, setTypedChars] = useState({}); // id -> char count
  const [pastOpen, setPastOpen] = useState(true);
  const [activeConvoId, setActiveConvoId] = useState("c1");
  const threadRef = useRef(null);

  // typewriter for any mimir messages whose typedChars < text length
  useEffect(() => {
    if (!tweaks.typewriter) return;
    const todo = thread.find(m => m.role === 'mimir' && (typedChars[m.id] ?? m.text.length) < m.text.length);
    if (!todo) return;
    const cur = typedChars[todo.id] ?? 0;
    const id = setTimeout(() => {
      setTypedChars(prev => ({ ...prev, [todo.id]: Math.min(cur + 6, todo.text.length) }));
    }, 14);
    return () => clearTimeout(id);
  }, [thread, typedChars, tweaks.typewriter]);

  // mark seed answers fully typed initially (so they appear instantly)
  useEffect(() => {
    setTypedChars(prev => {
      const next = { ...prev };
      SEED_THREAD.forEach(m => {
        if (m.role === 'mimir' && next[m.id] == null) next[m.id] = m.text.length;
      });
      return next;
    });
  }, []);

  // auto-scroll to bottom on new turns
  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [thread, typedChars]);

  // === Audio + breath ===============================================
  // Synthetic level driven by sine when no real audio. When listening,
  // tries to grab mic; when "speaking" (just-asked), uses a louder
  // synthetic curve to suggest output reactivity.
  const [level, setLevel] = useState(0.2);
  const [waveform, setWaveform] = useState(() => new Array(64).fill(0.5));
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);
  const startedAtRef = useRef(performance.now());

  useEffect(() => {
    let cancelled = false;
    async function startMic() {
      if (!listening) return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (cancelled) { stream.getTracks().forEach(t => t.stop()); return; }
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const src = ctx.createMediaStreamSource(stream);
        const an = ctx.createAnalyser();
        an.fftSize = 128;
        src.connect(an);
        audioCtxRef.current = ctx;
        analyserRef.current = an;
      } catch (e) {
        // mic denied — fall back to breathing sim
      }
    }
    startMic();
    return () => {
      cancelled = true;
      try { audioCtxRef.current?.close(); } catch {}
      audioCtxRef.current = null;
      analyserRef.current = null;
    };
  }, [listening]);

  useEffect(() => {
    function tick() {
      const now = performance.now();
      const t = (now - startedAtRef.current) / 1000;

      let lvl;
      let wave;
      const an = analyserRef.current;
      if (an && listening) {
        const arr = new Uint8Array(an.fftSize);
        an.getByteTimeDomainData(arr);
        let sum = 0;
        const w = new Array(64);
        for (let i = 0; i < 64; i++) {
          const v = (arr[i * 2] - 128) / 128;
          w[i] = 0.5 + v * 0.5;
          sum += Math.abs(v);
        }
        lvl = Math.min(1, (sum / 64) * 4 * tweaks.audioSensitivity);
        wave = w;
      } else if (speakingId || thinking) {
        // synthetic "speaking" — overlapping sines
        const a = (Math.sin(t * 4.1) + Math.sin(t * 6.7) * 0.5) * 0.5 + 0.5;
        const noise = (Math.sin(t * 19) * 0.15);
        lvl = Math.min(1, (a * 0.7 + noise + 0.2) * tweaks.audioSensitivity);
        wave = new Array(64).fill(0).map((_, i) => {
          const phase = t * 6 - i * 0.18;
          return 0.5 + (Math.sin(phase) * 0.35 + Math.sin(phase * 2.1) * 0.15) * (0.4 + lvl * 0.6);
        });
      } else {
        // idle breathing
        const breath = (Math.sin(t * 0.9) + 1) / 2; // 0..1
        lvl = 0.18 + breath * 0.22;
        wave = new Array(64).fill(0).map((_, i) => 0.5 + Math.sin(t * 1.4 - i * 0.1) * 0.05);
      }
      setLevel(lvl);
      setWaveform(wave);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [listening, speakingId, thinking, tweaks.audioSensitivity]);

  // === Parallax =====================================================
  const stageRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!tweaks.parallax) { setParallax({ x: 0, y: 0 }); return; }
    const onMove = (e) => {
      const el = stageRef.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      setParallax({ x: cx, y: cy });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [tweaks.parallax]);

  // === Ask flow =====================================================
  function askQuestion(text) {
    if (!text.trim()) return;
    const qid = "q" + Date.now();
    const aid = "a" + Date.now();
    setThread(prev => [...prev,
      { id: qid, role: 'user',  text },
      { id: aid, role: 'mimir', text: '', pending: true }
    ]);
    setDraft("");
    setThinking(true);
    // Simulate streaming response
    setTimeout(() => {
      const reply = "I draw from the well, but the waters are still. This is a demo — wire me to your model, and I will answer in earnest. " +
        "Until then: ask me anything about the Shieldwall Saga, and I'll cite which entries I'd lean on.";
      setThread(prev => prev.map(m => m.id === aid ? {
        ...m, text: reply, pending: false,
        sources: [{ id: 'mimir', label: 'Mimir', type: 'character' }]
      } : m));
      setTypedChars(prev => ({ ...prev, [aid]: 0 }));
      setSpeakingId(aid);
      setThinking(false);
    }, 1200);
  }

  // stop "speaking" animation when typing finishes
  useEffect(() => {
    if (!speakingId) return;
    const m = thread.find(x => x.id === speakingId);
    if (!m) return;
    if ((typedChars[speakingId] ?? 0) >= m.text.length) {
      const t = setTimeout(() => setSpeakingId(null), 800);
      return () => clearTimeout(t);
    }
  }, [speakingId, typedChars, thread]);

  // === Spirit colors from tweaks (kept for input/text accents) =======
  const spiritStyle = useMemo(() => {
    const h = tweaks.spiritHue;
    return {
      "--spirit-c1": `oklch(78% 0.16 ${h})`,
      "--spirit-c2": `oklch(64% 0.18 ${h - 8})`,
      "--spirit-c3": `oklch(50% 0.15 ${h + 12})`,
      "--spirit-glow": `oklch(82% 0.18 ${h} / 0.65)`,
    };
  }, [tweaks.spiritHue]);

  return (
    <div className="ask" data-screen-label="06 Ask Mimir" style={spiritStyle}>
      {/* === Left rail: past conversations =========================== */}
      <aside className={"ask-past" + (pastOpen ? " is-open" : " is-collapsed")}>
        <div className="ask-past-head">
          {pastOpen && <span className="ask-past-eye">Past consultations</span>}
          <button
            className="ask-past-toggle"
            onClick={() => setPastOpen(v => !v)}
            title={pastOpen ? "Collapse" : "Expand"}
          >{pastOpen ? "‹" : "›"}</button>
        </div>
        {pastOpen && (
          <>
            <button className="ask-past-new" onClick={() => {
              setThread([]); setActiveConvoId(null);
            }}>+ New question</button>
            <div className="ask-past-list">
              {PAST_CONVOS.map(c => (
                <button
                  key={c.id}
                  className={"ask-past-row" + (c.id === activeConvoId ? " is-active" : "")}
                  onClick={() => setActiveConvoId(c.id)}
                >
                  <span className="ask-past-title">{c.title}</span>
                  <span className="ask-past-when">{c.when}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </aside>

      {/* === Center: the well stage (above input, NOT behind it) ===== */}
      <div className="ask-center">
        <div className="ask-stage" ref={stageRef}>
          <WellScene
            hue={tweaks.spiritHue}
            mistDensity={tweaks.mistDensity}
            emberDensity={tweaks.emberDensity}
            godrayBrightness={tweaks.godrayBrightness}
            intensity={1 + level * 0.6}
            thinking={thinking}
            speaking={!!speakingId}
            parallax={parallax}
          />
        </div>

        {/* Input bar — sits BELOW the stage, not over it */}
        <div className="ask-input-wrap">
          <div className="ask-wave">
            <svg viewBox="0 0 320 40" preserveAspectRatio="none" width="100%" height="100%">
              <polyline
                fill="none"
                stroke="var(--spirit-c1)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.35 + level * 0.55}
                points={waveform.map((v, i) => `${(i / (waveform.length - 1)) * 320},${20 - (v - 0.5) * 36}`).join(' ')}
              />
            </svg>
          </div>
          <div className="ask-input">
            <button
              className={"ask-mic" + (listening ? " is-on" : "")}
              onClick={() => setListening(v => !v)}
              title={listening ? "Stop listening" : "Speak to Mimir"}
            >{listening ? "■" : "◉"}</button>
            <input
              className="ask-text"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') askQuestion(draft); }}
              placeholder="Speak your question to the well…"
            />
            <button className="ask-send" onClick={() => askQuestion(draft)}>Ask</button>
          </div>
          <div className="ask-suggestions">
            <span className="ask-sug-eye">Try:</span>
            {SUGGESTIONS.map(s => (
              <button key={s} className="ask-sug" onClick={() => askQuestion(s)}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* === Right rail: current conversation thread ================== */}
      <aside className="ask-chat">
        <div className="ask-chat-head">
          <span className="ask-past-eye">The well remembers</span>
        </div>
        <div className="ask-thread" ref={threadRef}>
          {thread.length === 0 && (
            <div className="ask-empty">
              <p>Speak your question to the well below.</p>
            </div>
          )}
          {thread.map(m => {
            if (m.role === 'user') {
              return (
                <div key={m.id} className="ask-turn ask-turn-user">
                  <div className="ask-q">
                    <span className="ask-q-mark">?</span>
                    <p>{m.text}</p>
                  </div>
                </div>
              );
            }
            const typed = m.text.slice(0, typedChars[m.id] ?? m.text.length);
            const isStreaming = (typedChars[m.id] ?? m.text.length) < m.text.length;
            return (
              <div key={m.id} className="ask-turn ask-turn-mimir">
                <div className="ask-a">
                  {m.pending ? (
                    <p className="ask-pending">
                      <span className="ask-dot"/><span className="ask-dot"/><span className="ask-dot"/>
                      <span className="ask-pending-text">Mimir gazes into the well…</span>
                    </p>
                  ) : (
                    <>
                      {typed.split('\n\n').map((para, i) => (
                        <p key={i} className="ask-para">
                          {para}
                          {isStreaming && i === typed.split('\n\n').length - 1 && <span className="ask-caret"/>}
                        </p>
                      ))}
                      {!isStreaming && m.sources && (
                        <div className="ask-sources">
                          <span className="ask-src-eye">Drawn from</span>
                          {m.sources.map(s => (
                            <button key={s.id} className={`ask-src ask-src-${s.type}`}>
                              <span className="ask-src-dot"/>
                              {s.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </aside>

      {/* === Tweaks panel ============================================== */}
      {tweaksOpen && (
        <div className="ask-tweaks">
          <div className="ask-tweaks-head">
            <span>Tweaks · The Spirit</span>
            <button onClick={() => {
              setTweaksOpen(false);
              window.parent?.postMessage({ type: '__edit_mode_dismissed' }, '*');
            }}>×</button>
          </div>
          <Slider label="Hue" min={0} max={60} step={1} value={tweaks.spiritHue}
                  onChange={v => setTweak('spiritHue', v)} hint="0 = ember red, 30 = gold, 60 = green-gold"/>
          <Slider label="Mist density" min={0} max={2.5} step={0.05} value={tweaks.mistDensity}
                  onChange={v => setTweak('mistDensity', v)}/>
          <Slider label="Embers" min={0} max={2.5} step={0.05} value={tweaks.emberDensity}
                  onChange={v => setTweak('emberDensity', v)}/>
          <Slider label="God-ray" min={0} max={1.8} step={0.05} value={tweaks.godrayBrightness}
                  onChange={v => setTweak('godrayBrightness', v)}/>
          <Slider label="Audio sensitivity" min={0} max={2.5} step={0.1} value={tweaks.audioSensitivity}
                  onChange={v => setTweak('audioSensitivity', v)}/>
          <Toggle label="Camera parallax" value={tweaks.parallax} onChange={v => setTweak('parallax', v)}/>
          <Toggle label="Typewriter answer" value={tweaks.typewriter} onChange={v => setTweak('typewriter', v)}/>
        </div>
      )}
    </div>
  );
}

function Slider({ label, min, max, step, value, onChange, hint }) {
  return (
    <label className="ask-tweak-row">
      <div className="ask-tweak-label">
        <span>{label}</span>
        <span className="ask-tweak-val">{typeof value === 'number' ? value.toFixed(step < 1 ? 2 : 0) : value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value))}/>
      {hint && <div className="ask-tweak-hint">{hint}</div>}
    </label>
  );
}

function Toggle({ label, value, onChange }) {
  return (
    <label className="ask-tweak-row ask-tweak-toggle">
      <span>{label}</span>
      <button type="button" className={"ask-toggle" + (value ? " is-on" : "")} onClick={() => onChange(!value)}>
        <span/>
      </button>
    </label>
  );
}

window.AskMimirSanctum = AskMimir;
