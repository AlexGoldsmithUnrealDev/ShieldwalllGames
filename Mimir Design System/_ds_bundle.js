/* @ds-bundle: {"format":3,"namespace":"MimirDesignSystem_019df6","components":[],"sourceHashes":{"ui_kits/mimir-app/AskMimir.jsx":"e7b131c5b7eb","ui_kits/mimir-app/AskMimirSanctum.jsx":"6c4e883191c4","ui_kits/mimir-app/CalendarView.jsx":"9fcd21d5517b","ui_kits/mimir-app/CommandPalette.jsx":"39f86f119f0f","ui_kits/mimir-app/ConnectionsGraph.jsx":"8fd4548e12bd","ui_kits/mimir-app/EntryCard.jsx":"1f7e60e00633","ui_kits/mimir-app/EntryView.jsx":"fcff98a8c7dc","ui_kits/mimir-app/ExportEngine.jsx":"711cfc56a789","ui_kits/mimir-app/FactionTree.jsx":"3ec85f275d51","ui_kits/mimir-app/FamilyTree.jsx":"5882352d61cd","ui_kits/mimir-app/GenusTree.jsx":"e19981cac000","ui_kits/mimir-app/LibraryBrowser.jsx":"502cca93b79f","ui_kits/mimir-app/RelationshipsWeb.jsx":"e890611dc99f","ui_kits/mimir-app/SchemasView.jsx":"fb76f7e8859b","ui_kits/mimir-app/Sidebar.jsx":"d052c98edd80","ui_kits/mimir-app/Timeline.jsx":"3a99e028d76d","ui_kits/mimir-app/TopBar.jsx":"c34774abcc7e","ui_kits/mimir-app/TranslatorView.jsx":"0cedebb50cfb","ui_kits/mimir-app/ValidationView.jsx":"e9e63e57230a","ui_kits/mimir-app/WellScene.jsx":"aad5c9858c75","ui_kits/mimir-app/mobile/MobileApp.jsx":"0fc9f1b5713f","ui_kits/mimir-app/mobile/MobileAsk.jsx":"863e48d91bef","ui_kits/mimir-app/mobile/MobileCalendar.jsx":"274c8fc0c05a","ui_kits/mimir-app/mobile/MobileEntry.jsx":"25bd09341cd2","ui_kits/mimir-app/mobile/MobileGraphTools.jsx":"58d406b276c1","ui_kits/mimir-app/mobile/MobileLibrary.jsx":"09136e32a6c2","ui_kits/mimir-app/mobile/MobileSchemas.jsx":"c3669037ee1b","ui_kits/mimir-app/mobile/MobileSearchMore.jsx":"963d06f8157c","ui_kits/mimir-app/mobile/MobileTimeline.jsx":"200b4537bb84","ui_kits/mimir-app/mobile/MobileToolsMenu.jsx":"85c56ede1058","ui_kits/mimir-app/mobile/MobileTranslator.jsx":"cefaba343a95","ui_kits/mimir-app/mobile/MobileValidation.jsx":"9c65bb585cf7","ui_kits/mimir-app/mobile/design-canvas.jsx":"fb642362a04d","ui_kits/mimir-app/mobile/ios-frame.jsx":"d67eb3ffe562","ui_kits/mimir-app/mobile/mobile-canvas.jsx":"afca9b437143","ui_kits/mimir-app/mobile/mobile-data.jsx":"eacecdc17ecb","ui_kits/mimir-app/tweaks-panel.jsx":"a1107c630a56","ui_kits/mimir-site/components.jsx":"ddfde8414d22"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MimirDesignSystem_019df6 = window.MimirDesignSystem_019df6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/mimir-app/AskMimir.jsx
try { (() => {
/* global React */
const {
  useState: useStateAsk
} = React;
function AskMimir({
  open,
  onClose,
  entry
}) {
  const [thread] = useStateAsk([{
    who: "user",
    text: "What does Sigrun think of her father?"
  }, {
    who: "mimir",
    text: "Drawing from your library — Sigrun's eight character entries describe Ulf in three modes. In her early years he is 'the warm one at the head of the hall'; after the oath at fifteen he becomes 'the quiet weight beside her'; after Hellas he is 'the ash she carries'.",
    sources: ["Sigrun Ulfsdottir", "Ulf the Wolf-Father", "Burning of Hellas", "The seven oaths"]
  }, {
    who: "user",
    text: "Write a line of dialogue she'd say to him in private, after his death."
  }, {
    who: "mimir",
    text: "\"You taught me to read three runes before I could ride. You did not teach me how to read a hall without you in it.\"",
    sources: ["Sigrun (voice)", "The seven oaths"]
  }]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("aside", {
    className: "mim-ask"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mim-ask-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-ask-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mimir-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Ask Mimir \xB7 drawing from ", entry?.name || "your library")), /*#__PURE__*/React.createElement("button", {
    className: "mim-icon-btn",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "mim-ask-thread"
  }, thread.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mim-ask-msg mim-ask-msg-" + m.who
  }, m.who === "mimir" && /*#__PURE__*/React.createElement("span", {
    className: "mim-ask-glyph"
  }, "M"), /*#__PURE__*/React.createElement("div", {
    className: "mim-ask-bubble"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mim-ask-text"
  }, m.text), m.sources && /*#__PURE__*/React.createElement("div", {
    className: "mim-ask-sources"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Sources"), m.sources.map((s, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "mim-tag mim-tag-sm"
  }, "\u21B3 ", s))))))), /*#__PURE__*/React.createElement("div", {
    className: "mim-ask-input"
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Ask about your world\u2026",
    rows: 2
  }), /*#__PURE__*/React.createElement("div", {
    className: "mim-ask-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-ask-mode"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-ask-dot"
  }), " grounded \xB7 this world only"), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary"
  }, "Send \u2192"))));
}
window.AskMimir = AskMimir;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/AskMimir.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/AskMimirSanctum.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// === Default look (tweakable) =======================================
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "spiritHue": 28,
  "audioSensitivity": 1.0,
  "parallax": true,
  "typewriter": true,
  "mistDensity": 0.35,
  "emberDensity": 0.6,
  "godrayBrightness": 0.9
} /*EDITMODE-END*/;

// === The example thread =============================================
const SEED_THREAD = [{
  id: "q1",
  role: "user",
  text: "Who killed Baldr?"
}, {
  id: "a1",
  role: "mimir",
  text: "Höðr loosed the killing shaft, but the hand was guided. Baldr the Bright was beloved of all things — Frigg, his mother, had walked the nine worlds and taken oaths from fire and iron, from sickness and stone, that none of them would ever wound her son. From all things save one. The mistletoe she passed over, calling it too young and too soft to swear.\n\nLoki, who had measured this gap as a smith measures a seam, plucked a sprig and shaped it into a dart. At the assembly on Iðavöllr the gods made a game of Baldr's invulnerability — they hurled stones, they struck him with axes, and the weapons turned aside in mid-air. Höðr, who was blind, stood apart from the sport. Loki put the mistletoe shaft into Höðr's hand and aimed his arm. The dart flew true. Baldr fell, and the bright went out of the world.\n\nFrigg's grief sent Hermóðr riding to Hel to bargain for his return; the bargain was broken by a giantess who would not weep. Höðr was killed in vengeance by Váli, born for that one purpose, only a night old. Loki was bound beneath the earth with a serpent above him, and there he stays — until he doesn't.",
  sources: [{
    id: "baldr",
    label: "Baldr",
    type: "character"
  }, {
    id: "hodr",
    label: "Höðr",
    type: "character"
  }, {
    id: "loki",
    label: "Loki",
    type: "character"
  }, {
    id: "frigg",
    label: "Frigg",
    type: "character"
  }, {
    id: "vali",
    label: "Váli",
    type: "character"
  }, {
    id: "hermodr",
    label: "Hermóðr",
    type: "character"
  }, {
    id: "baldr-death",
    label: "The death of Baldr",
    type: "event"
  }, {
    id: "idavollr",
    label: "Iðavöllr",
    type: "place"
  }]
}];
const SUGGESTIONS = ["What happened at Fimbulwinter?", "How is the Iron Crown forged?", "Who serves the All-Father in Asgardr?", "Where do the dvergr keep the seed-time?"];

// Past conversations for the left rail
const PAST_CONVOS = [{
  id: "c1",
  title: "Who killed Baldr?",
  when: "Just now",
  active: true
}, {
  id: "c2",
  title: "The fall of Caernarfon",
  when: "2h ago"
}, {
  id: "c3",
  title: "Frigg's oaths — what she missed",
  when: "Yesterday"
}, {
  id: "c4",
  title: "Where the dvergr forge the seed-time",
  when: "3d ago"
}, {
  id: "c5",
  title: "Háloga lineage from Aud the Deep",
  when: "Last week"
}, {
  id: "c6",
  title: "On the burning of Avalon",
  when: "Last week"
}, {
  id: "c7",
  title: "Mistletoe, and what it remembers",
  when: "2w ago"
}, {
  id: "c8",
  title: "Why Loki is bound",
  when: "Apr 14"
}];
function AskMimir() {
  // tweaks state
  const [tweaks, setTweaks] = useState(DEFAULTS);
  function setTweak(k, v) {
    setTweaks(prev => {
      const next = typeof k === 'object' ? {
        ...prev,
        ...k
      } : {
        ...prev,
        [k]: v
      };
      window.parent?.postMessage({
        type: '__edit_mode_set_keys',
        edits: next
      }, '*');
      return next;
    });
  }
  const [tweaksOpen, setTweaksOpen] = useState(false);
  useEffect(() => {
    const onMsg = e => {
      const d = e?.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') setTweaksOpen(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent?.postMessage({
      type: '__edit_mode_available'
    }, '*');
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
      setTypedChars(prev => ({
        ...prev,
        [todo.id]: Math.min(cur + 6, todo.text.length)
      }));
    }, 14);
    return () => clearTimeout(id);
  }, [thread, typedChars, tweaks.typewriter]);

  // mark seed answers fully typed initially (so they appear instantly)
  useEffect(() => {
    setTypedChars(prev => {
      const next = {
        ...prev
      };
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
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true
        });
        if (cancelled) {
          stream.getTracks().forEach(t => t.stop());
          return;
        }
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
      try {
        audioCtxRef.current?.close();
      } catch {}
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
        lvl = Math.min(1, sum / 64 * 4 * tweaks.audioSensitivity);
        wave = w;
      } else if (speakingId || thinking) {
        // synthetic "speaking" — overlapping sines
        const a = (Math.sin(t * 4.1) + Math.sin(t * 6.7) * 0.5) * 0.5 + 0.5;
        const noise = Math.sin(t * 19) * 0.15;
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
  const [parallax, setParallax] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (!tweaks.parallax) {
      setParallax({
        x: 0,
        y: 0
      });
      return;
    }
    const onMove = e => {
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width - 0.5;
      const cy = (e.clientY - r.top) / r.height - 0.5;
      setParallax({
        x: cx,
        y: cy
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [tweaks.parallax]);

  // === Ask flow =====================================================
  function askQuestion(text) {
    if (!text.trim()) return;
    const qid = "q" + Date.now();
    const aid = "a" + Date.now();
    setThread(prev => [...prev, {
      id: qid,
      role: 'user',
      text
    }, {
      id: aid,
      role: 'mimir',
      text: '',
      pending: true
    }]);
    setDraft("");
    setThinking(true);
    // Simulate streaming response
    setTimeout(() => {
      const reply = "I draw from the well, but the waters are still. This is a demo — wire me to your model, and I will answer in earnest. " + "Until then: ask me anything about the Shieldwall Saga, and I'll cite which entries I'd lean on.";
      setThread(prev => prev.map(m => m.id === aid ? {
        ...m,
        text: reply,
        pending: false,
        sources: [{
          id: 'mimir',
          label: 'Mimir',
          type: 'character'
        }]
      } : m));
      setTypedChars(prev => ({
        ...prev,
        [aid]: 0
      }));
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
      "--spirit-glow": `oklch(82% 0.18 ${h} / 0.65)`
    };
  }, [tweaks.spiritHue]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ask",
    "data-screen-label": "06 Ask Mimir",
    style: spiritStyle
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ask-past" + (pastOpen ? " is-open" : " is-collapsed")
  }, /*#__PURE__*/React.createElement("div", {
    className: "ask-past-head"
  }, pastOpen && /*#__PURE__*/React.createElement("span", {
    className: "ask-past-eye"
  }, "Past consultations"), /*#__PURE__*/React.createElement("button", {
    className: "ask-past-toggle",
    onClick: () => setPastOpen(v => !v),
    title: pastOpen ? "Collapse" : "Expand"
  }, pastOpen ? "‹" : "›")), pastOpen && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "ask-past-new",
    onClick: () => {
      setThread([]);
      setActiveConvoId(null);
    }
  }, "+ New question"), /*#__PURE__*/React.createElement("div", {
    className: "ask-past-list"
  }, PAST_CONVOS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: "ask-past-row" + (c.id === activeConvoId ? " is-active" : ""),
    onClick: () => setActiveConvoId(c.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ask-past-title"
  }, c.title), /*#__PURE__*/React.createElement("span", {
    className: "ask-past-when"
  }, c.when)))))), /*#__PURE__*/React.createElement("div", {
    className: "ask-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ask-stage",
    ref: stageRef
  }, /*#__PURE__*/React.createElement(WellScene, {
    hue: tweaks.spiritHue,
    mistDensity: tweaks.mistDensity,
    emberDensity: tweaks.emberDensity,
    godrayBrightness: tweaks.godrayBrightness,
    intensity: 1 + level * 0.6,
    thinking: thinking,
    speaking: !!speakingId,
    parallax: parallax
  })), /*#__PURE__*/React.createElement("div", {
    className: "ask-input-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ask-wave"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 320 40",
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("polyline", {
    fill: "none",
    stroke: "var(--spirit-c1)",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: 0.35 + level * 0.55,
    points: waveform.map((v, i) => `${i / (waveform.length - 1) * 320},${20 - (v - 0.5) * 36}`).join(' ')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ask-input"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ask-mic" + (listening ? " is-on" : ""),
    onClick: () => setListening(v => !v),
    title: listening ? "Stop listening" : "Speak to Mimir"
  }, listening ? "■" : "◉"), /*#__PURE__*/React.createElement("input", {
    className: "ask-text",
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') askQuestion(draft);
    },
    placeholder: "Speak your question to the well\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    className: "ask-send",
    onClick: () => askQuestion(draft)
  }, "Ask")), /*#__PURE__*/React.createElement("div", {
    className: "ask-suggestions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ask-sug-eye"
  }, "Try:"), SUGGESTIONS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "ask-sug",
    onClick: () => askQuestion(s)
  }, s))))), /*#__PURE__*/React.createElement("aside", {
    className: "ask-chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ask-chat-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ask-past-eye"
  }, "The well remembers")), /*#__PURE__*/React.createElement("div", {
    className: "ask-thread",
    ref: threadRef
  }, thread.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "ask-empty"
  }, /*#__PURE__*/React.createElement("p", null, "Speak your question to the well below.")), thread.map(m => {
    if (m.role === 'user') {
      return /*#__PURE__*/React.createElement("div", {
        key: m.id,
        className: "ask-turn ask-turn-user"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ask-q"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ask-q-mark"
      }, "?"), /*#__PURE__*/React.createElement("p", null, m.text)));
    }
    const typed = m.text.slice(0, typedChars[m.id] ?? m.text.length);
    const isStreaming = (typedChars[m.id] ?? m.text.length) < m.text.length;
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: "ask-turn ask-turn-mimir"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ask-a"
    }, m.pending ? /*#__PURE__*/React.createElement("p", {
      className: "ask-pending"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ask-dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ask-dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ask-dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ask-pending-text"
    }, "Mimir gazes into the well\u2026")) : /*#__PURE__*/React.createElement(React.Fragment, null, typed.split('\n\n').map((para, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "ask-para"
    }, para, isStreaming && i === typed.split('\n\n').length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "ask-caret"
    }))), !isStreaming && m.sources && /*#__PURE__*/React.createElement("div", {
      className: "ask-sources"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ask-src-eye"
    }, "Drawn from"), m.sources.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      className: `ask-src ask-src-${s.type}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "ask-src-dot"
    }), s.label))))));
  }))), tweaksOpen && /*#__PURE__*/React.createElement("div", {
    className: "ask-tweaks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ask-tweaks-head"
  }, /*#__PURE__*/React.createElement("span", null, "Tweaks \xB7 The Spirit"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setTweaksOpen(false);
      window.parent?.postMessage({
        type: '__edit_mode_dismissed'
      }, '*');
    }
  }, "\xD7")), /*#__PURE__*/React.createElement(Slider, {
    label: "Hue",
    min: 0,
    max: 60,
    step: 1,
    value: tweaks.spiritHue,
    onChange: v => setTweak('spiritHue', v),
    hint: "0 = ember red, 30 = gold, 60 = green-gold"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Mist density",
    min: 0,
    max: 2.5,
    step: 0.05,
    value: tweaks.mistDensity,
    onChange: v => setTweak('mistDensity', v)
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Embers",
    min: 0,
    max: 2.5,
    step: 0.05,
    value: tweaks.emberDensity,
    onChange: v => setTweak('emberDensity', v)
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "God-ray",
    min: 0,
    max: 1.8,
    step: 0.05,
    value: tweaks.godrayBrightness,
    onChange: v => setTweak('godrayBrightness', v)
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Audio sensitivity",
    min: 0,
    max: 2.5,
    step: 0.1,
    value: tweaks.audioSensitivity,
    onChange: v => setTweak('audioSensitivity', v)
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "Camera parallax",
    value: tweaks.parallax,
    onChange: v => setTweak('parallax', v)
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "Typewriter answer",
    value: tweaks.typewriter,
    onChange: v => setTweak('typewriter', v)
  })));
}
function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
  hint
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "ask-tweak-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ask-tweak-label"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "ask-tweak-val"
  }, typeof value === 'number' ? value.toFixed(step < 1 ? 2 : 0) : value)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(parseFloat(e.target.value))
  }), hint && /*#__PURE__*/React.createElement("div", {
    className: "ask-tweak-hint"
  }, hint));
}
function Toggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "ask-tweak-row ask-tweak-toggle"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ask-toggle" + (value ? " is-on" : ""),
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("span", null)));
}
window.AskMimirSanctum = AskMimir;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/AskMimirSanctum.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/CalendarView.jsx
try { (() => {
/* global React */
/*
 * CalendarView — /calendar route.
 *
 * Month grid for the lorebible's active calendar. Renders:
 *   • Custom month/weekday structure (Hornfolke calendar, 10 months ×
 *     36 days × 5 weekdays + a closing 5-day "Embers" month).
 *   • Moon phases (two moons, distinct phase glyphs).
 *   • Festivals (recurring, tied to cultures).
 *   • Events (one-off, sourced from the timeline).
 *
 * View modes:
 *   - month   (default)
 *   - year    (12 tiny month grids; chosen for at-a-glance)
 *   - agenda  (chronological list of upcoming entries)
 *
 * Right rail: filters per kind, legend for moons + festivals, and a
 * "next-up" list anchored to the current viewport.
 *
 * Data is fully synthetic; matches the shape of
 * src/lorebible/calendarsTypes.ts so Claude Code can drop a real
 * calendar in without restructuring the view.
 */

const {
  useMemo,
  useState
} = React;

// ─── Hornfolke calendar (synthetic) ─────────────────────────────
const CALENDAR = {
  id: "hornfolke",
  name: "Hornfolke Reckoning",
  era_markers: {
    positive: "AoY",
    negative: "BoY"
  },
  weekdays: ["Lonsday", "Frostday", "Spearday", "Hearthsday", "Sealday"],
  months: [{
    name: "Þorri",
    season: "Deep Frost",
    days: 36
  }, {
    name: "Góa",
    season: "Late Frost",
    days: 36
  }, {
    name: "Einmánuðr",
    season: "First Thaw",
    days: 36
  }, {
    name: "Harpa",
    season: "Hare-Moon",
    days: 36
  }, {
    name: "Skerpla",
    season: "Greening",
    days: 36
  }, {
    name: "Sólmánuðr",
    season: "Sun-month",
    days: 36
  }, {
    name: "Heyannir",
    season: "Hay-bringing",
    days: 36
  }, {
    name: "Tvímánuðr",
    season: "Twin-month",
    days: 36
  }, {
    name: "Haustmánuðr",
    season: "Harvest",
    days: 36
  }, {
    name: "Gormánuðr",
    season: "Slaughter",
    days: 36
  }, {
    name: "Embers",
    season: "Year's-End",
    days: 5
  } // intercalary
  ],
  moons: [{
    id: "wolf",
    name: "The Wolf-Moon",
    cycle_days: 31,
    color: "#d6c9a8",
    glyphs: {
      new: "○",
      first_quarter: "◐",
      full: "●",
      last_quarter: "◑"
    }
  }, {
    id: "bear",
    name: "The Bear-Moon",
    cycle_days: 22,
    color: "#c9a227",
    glyphs: {
      new: "ᛟ",
      first_quarter: "ᚦ",
      full: "ᛒ",
      last_quarter: "ᚦ"
    }
  }]
};

// ─── Event types ────────────────────────────────────────────────
const EVENT_TYPES = [{
  id: "battle",
  name: "Battle",
  fill: "#c43a4e",
  letter: "B"
}, {
  id: "festival",
  name: "Festival",
  fill: "#c9a227",
  letter: "F"
}, {
  id: "rite",
  name: "Rite",
  fill: "#a07cc8",
  letter: "R"
}, {
  id: "council",
  name: "Council",
  fill: "#7da265",
  letter: "C"
}, {
  id: "wonder",
  name: "Wonder",
  fill: "#d99366",
  letter: "W"
}, {
  id: "personal",
  name: "Personal",
  fill: "#8aa0ab",
  letter: "P"
}];

// ─── Festivals & events for AoY 412 ────────────────────────────
// Day-of-year reckoning makes layout trivial; months are 36×10 + 5.
const ENTRIES = [
// Recurring festivals (yearly)
{
  id: "f-mid-frost",
  kind: "festival",
  type: "festival",
  day: 18,
  name: "Mid-Frost Vigil",
  sub: "Hornfolke",
  culture: "hornfolke"
}, {
  id: "f-thaw",
  kind: "festival",
  type: "festival",
  day: 72,
  name: "First Thaw Feast",
  sub: "Hornfolke"
}, {
  id: "f-spear-rite",
  kind: "festival",
  type: "rite",
  day: 144,
  name: "Spear-Rite",
  sub: "Iron Crown"
}, {
  id: "f-sunbearing",
  kind: "festival",
  type: "festival",
  day: 180,
  name: "Sun-Bearing Day",
  sub: "Hornfolke / Alba"
}, {
  id: "f-harvest",
  kind: "festival",
  type: "festival",
  day: 288,
  name: "Harvest's Eve",
  sub: "Hornfolke"
}, {
  id: "f-ember-night",
  kind: "festival",
  type: "rite",
  day: 362,
  name: "Ember Night",
  sub: "Sacred to Mimir"
},
// Events (single-instance this year)
{
  id: "e-burning-1",
  kind: "event",
  type: "battle",
  day: 24,
  name: "Skirmish at Frostholm",
  sub: "Iron Crown / Stoneborn"
}, {
  id: "e-treaty",
  kind: "event",
  type: "council",
  day: 95,
  name: "Treaty of Avalon",
  sub: "Sworn this morning"
}, {
  id: "e-wedding",
  kind: "event",
  type: "personal",
  day: 121,
  name: "Vaerin & Hjalmar wed",
  sub: "At Hearthstead"
}, {
  id: "e-coronation",
  kind: "event",
  type: "wonder",
  day: 198,
  name: "Bjornar takes the Iron Crown",
  sub: "Year of the Iron Hand"
}, {
  id: "e-funeral",
  kind: "event",
  type: "personal",
  day: 234,
  name: "Funeral procession of Skaldyrn",
  sub: "Three-day rite"
}, {
  id: "e-skirmish",
  kind: "event",
  type: "battle",
  day: 252,
  name: "Skirmish at Bryn Hollow",
  sub: "12 dead, 3 captured"
}, {
  id: "e-yule-feast",
  kind: "event",
  type: "festival",
  day: 359,
  name: "Yule of the Long Pact",
  sub: "Open feast"
}];
const YEAR = 412;
const TODAY = 138; // day-of-year — sits in Skerpla, 30th (Greening)
const TOTAL_DAYS = CALENDAR.months.reduce((n, m) => n + m.days, 0); // 365

// ─── Helpers ────────────────────────────────────────────────────
function dayToMonthDay(dayOfYear) {
  let d = dayOfYear;
  for (let i = 0; i < CALENDAR.months.length; i++) {
    const m = CALENDAR.months[i];
    if (d <= m.days) return {
      monthIdx: i,
      day: d
    };
    d -= m.days;
  }
  return {
    monthIdx: CALENDAR.months.length - 1,
    day: 1
  };
}
function monthDayToDay(monthIdx, day) {
  let n = 0;
  for (let i = 0; i < monthIdx; i++) n += CALENDAR.months[i].days;
  return n + day;
}
function moonPhaseOnDay(moon, dayOfYear) {
  // Stable seed so phases are deterministic; arbitrary epoch.
  const cyclePos = dayOfYear * 1.0 % moon.cycle_days;
  const targets = [{
    key: "new",
    at: 0
  }, {
    key: "first_quarter",
    at: moon.cycle_days * 0.25
  }, {
    key: "full",
    at: moon.cycle_days * 0.5
  }, {
    key: "last_quarter",
    at: moon.cycle_days * 0.75
  }];
  for (const t of targets) {
    const d = Math.min(Math.abs(cyclePos - t.at), moon.cycle_days - Math.abs(cyclePos - t.at));
    if (d < 0.5) return t.key;
  }
  return null;
}

// ─── Component ──────────────────────────────────────────────────
function CalendarView() {
  const todayMD = dayToMonthDay(TODAY);
  const [monthIdx, setMonthIdx] = useState(todayMD.monthIdx);
  const [viewMode, setViewMode] = useState("month"); // month | year | agenda
  const [enabledTypes, setEnabledTypes] = useState(new Set(EVENT_TYPES.map(t => t.id)));
  const [enabledMoons, setEnabledMoons] = useState(new Set(CALENDAR.moons.map(m => m.id)));
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const month = CALENDAR.months[monthIdx];
  const monthStart = monthDayToDay(monthIdx, 1);
  const visible = useMemo(() => ENTRIES.filter(e => enabledTypes.has(e.type)), [enabledTypes]);
  const inMonth = visible.filter(e => {
    const md = dayToMonthDay(e.day);
    return md.monthIdx === monthIdx;
  });

  // Group days into weeks of 5 (custom weekday count)
  const wdCount = CALENDAR.weekdays.length;
  const weeks = useMemo(() => {
    const out = [];
    let week = [];
    // Hornfolke calendar treats day 1 of each month as Lonsday — no leading blanks
    for (let d = 1; d <= month.days; d++) {
      week.push(d);
      if (week.length === wdCount) {
        out.push(week);
        week = [];
      }
    }
    if (week.length) {
      while (week.length < wdCount) week.push(null);
      out.push(week);
    }
    return out;
  }, [monthIdx, month.days, wdCount]);
  function toggleType(id) {
    const next = new Set(enabledTypes);
    if (next.has(id)) next.delete(id);else next.add(id);
    setEnabledTypes(next);
  }
  function toggleMoon(id) {
    const next = new Set(enabledMoons);
    if (next.has(id)) next.delete(id);else next.add(id);
    setEnabledMoons(next);
  }
  const selectedMD = selectedDay ? dayToMonthDay(selectedDay) : null;
  const selectedEntries = selectedDay ? visible.filter(e => e.day === selectedDay) : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Tools \xB7 Reckoning"), /*#__PURE__*/React.createElement("h1", {
    className: "val-title"
  }, "Calendar"), /*#__PURE__*/React.createElement("p", {
    className: "val-sub"
  }, "The chronicler's year. Moons, festivals, councils, and the days the chronicle would have you remember.")), /*#__PURE__*/React.createElement("div", {
    className: "val-banner-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, ENTRIES.filter(e => e.kind === "festival").length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Festivals")), /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, ENTRIES.filter(e => e.kind === "event").length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Events")), /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, CALENDAR.moons.length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Moons")))), /*#__PURE__*/React.createElement("div", {
    className: "cal-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cal-nav-btn",
    onClick: () => setMonthIdx(Math.max(0, monthIdx - 1)),
    disabled: monthIdx === 0
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    className: "cal-nav-lbl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cal-nav-month"
  }, month.name), /*#__PURE__*/React.createElement("span", {
    className: "cal-nav-meta"
  }, /*#__PURE__*/React.createElement("em", null, month.season), " \xB7 ", CALENDAR.era_markers.positive, " ", YEAR)), /*#__PURE__*/React.createElement("button", {
    className: "cal-nav-btn",
    onClick: () => setMonthIdx(Math.min(CALENDAR.months.length - 1, monthIdx + 1)),
    disabled: monthIdx === CALENDAR.months.length - 1
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    className: "cal-today",
    onClick: () => {
      setMonthIdx(todayMD.monthIdx);
      setSelectedDay(TODAY);
    }
  }, "Today")), /*#__PURE__*/React.createElement("span", {
    className: "cal-bar-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cal-view-toggle"
  }, ["month", "year", "agenda"].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    className: "cal-view-btn" + (viewMode === m ? " is-on" : ""),
    onClick: () => setViewMode(m)
  }, m))), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary cal-add"
  }, "+ Add event")), /*#__PURE__*/React.createElement("div", {
    className: "cal-body"
  }, /*#__PURE__*/React.createElement("main", {
    className: "cal-main"
  }, viewMode === "month" && /*#__PURE__*/React.createElement(MonthGrid, {
    month: month,
    monthIdx: monthIdx,
    monthStart: monthStart,
    weeks: weeks,
    enabledMoons: enabledMoons,
    visible: visible,
    selectedDay: selectedDay,
    onSelectDay: setSelectedDay
  }), viewMode === "year" && /*#__PURE__*/React.createElement(YearGrid, {
    enabledMoons: enabledMoons,
    visible: visible,
    onPickMonth: i => {
      setMonthIdx(i);
      setViewMode("month");
    }
  }), viewMode === "agenda" && /*#__PURE__*/React.createElement(Agenda, {
    visible: visible,
    onPickDay: d => {
      setSelectedDay(d);
      setMonthIdx(dayToMonthDay(d).monthIdx);
      setViewMode("month");
    }
  })), /*#__PURE__*/React.createElement("aside", {
    className: "cal-rail"
  }, selectedDay && /*#__PURE__*/React.createElement("section", {
    className: "cal-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Selected day")), /*#__PURE__*/React.createElement("div", {
    className: "cal-sel-day"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cal-sel-num"
  }, selectedMD.day), /*#__PURE__*/React.createElement("div", {
    className: "cal-sel-meta"
  }, /*#__PURE__*/React.createElement("span", null, CALENDAR.months[selectedMD.monthIdx].name), /*#__PURE__*/React.createElement("span", {
    className: "cal-sel-sub"
  }, CALENDAR.weekdays[(selectedMD.day - 1) % wdCount], " \xB7 ", CALENDAR.era_markers.positive, " ", YEAR))), /*#__PURE__*/React.createElement("div", {
    className: "cal-sel-moons"
  }, CALENDAR.moons.map(moon => {
    const phase = moonPhaseOnDay(moon, selectedDay);
    return /*#__PURE__*/React.createElement("div", {
      key: moon.id,
      className: "cal-sel-moon"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-moon-glyph",
      style: {
        color: moon.color
      }
    }, phase ? moon.glyphs[phase] : "·"), /*#__PURE__*/React.createElement("div", {
      className: "cal-sel-moon-meta"
    }, /*#__PURE__*/React.createElement("span", null, moon.name), /*#__PURE__*/React.createElement("span", {
      className: "cal-sel-sub"
    }, phase ? phase.replace("_", " ") : "between phases")));
  })), selectedEntries.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "cal-sel-events"
  }, selectedEntries.map(e => {
    const type = EVENT_TYPES.find(t => t.id === e.type);
    return /*#__PURE__*/React.createElement("li", {
      key: e.id
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-bullet",
      style: {
        background: type.fill
      }
    }, type.letter), /*#__PURE__*/React.createElement("div", {
      className: "cal-sel-event-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-sel-event-name"
    }, e.name), e.sub && /*#__PURE__*/React.createElement("span", {
      className: "cal-sel-sub"
    }, e.sub)));
  })), selectedEntries.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "cal-sel-empty"
  }, "Nothing chronicled.")), /*#__PURE__*/React.createElement("section", {
    className: "cal-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Event types"), /*#__PURE__*/React.createElement("div", {
    className: "cal-card-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-mini",
    onClick: () => setEnabledTypes(new Set(EVENT_TYPES.map(t => t.id)))
  }, "all"), /*#__PURE__*/React.createElement("button", {
    className: "tl-mini",
    onClick: () => setEnabledTypes(new Set())
  }, "none"))), /*#__PURE__*/React.createElement("ul", {
    className: "cal-legend"
  }, EVENT_TYPES.map(t => {
    const on = enabledTypes.has(t.id);
    const count = ENTRIES.filter(e => e.type === t.id).length;
    return /*#__PURE__*/React.createElement("li", {
      key: t.id,
      className: "cal-legend-row" + (on ? " is-on" : ""),
      onClick: () => toggleType(t.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-swatch",
      style: {
        background: t.fill
      }
    }, t.letter), /*#__PURE__*/React.createElement("span", {
      className: "cal-legend-name"
    }, t.name), /*#__PURE__*/React.createElement("span", {
      className: "cal-legend-count"
    }, count));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "cal-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Moons")), /*#__PURE__*/React.createElement("ul", {
    className: "cal-legend"
  }, CALENDAR.moons.map(m => {
    const on = enabledMoons.has(m.id);
    return /*#__PURE__*/React.createElement("li", {
      key: m.id,
      className: "cal-legend-row" + (on ? " is-on" : ""),
      onClick: () => toggleMoon(m.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-moon-swatch",
      style: {
        color: m.color
      }
    }, m.glyphs.full), /*#__PURE__*/React.createElement("span", {
      className: "cal-legend-name"
    }, m.name), /*#__PURE__*/React.createElement("span", {
      className: "cal-legend-count"
    }, m.cycle_days, "d"));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "cal-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-card-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Coming up")), /*#__PURE__*/React.createElement("ul", {
    className: "cal-upcoming"
  }, visible.filter(e => e.day >= TODAY).slice(0, 5).map(e => {
    const type = EVENT_TYPES.find(t => t.id === e.type);
    const md = dayToMonthDay(e.day);
    return /*#__PURE__*/React.createElement("li", {
      key: e.id,
      className: "cal-up-row",
      onClick: () => {
        setSelectedDay(e.day);
        setMonthIdx(md.monthIdx);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cal-up-date"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-up-day"
    }, md.day), /*#__PURE__*/React.createElement("span", {
      className: "cal-up-month"
    }, CALENDAR.months[md.monthIdx].name.slice(0, 3))), /*#__PURE__*/React.createElement("div", {
      className: "cal-up-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-up-name"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-bullet-sm",
      style: {
        background: type.fill
      }
    }), e.name), e.sub && /*#__PURE__*/React.createElement("span", {
      className: "cal-sel-sub"
    }, e.sub)));
  }))))));
}
function MonthGrid({
  month,
  monthStart,
  weeks,
  enabledMoons,
  visible,
  selectedDay,
  onSelectDay
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cal-grid-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cal-weekdays"
  }, CALENDAR.weekdays.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    className: "cal-wd"
  }, w))), /*#__PURE__*/React.createElement("div", {
    className: "cal-grid"
  }, weeks.map((week, wi) => /*#__PURE__*/React.createElement("div", {
    key: wi,
    className: "cal-week"
  }, week.map((d, di) => {
    if (d === null) return /*#__PURE__*/React.createElement("div", {
      key: di,
      className: "cal-day cal-day-empty"
    });
    const doy = monthStart + d - 1;
    const dayEntries = visible.filter(e => e.day === doy);
    const moonPhases = CALENDAR.moons.filter(m => enabledMoons.has(m.id)).map(m => ({
      moon: m,
      phase: moonPhaseOnDay(m, doy)
    })).filter(p => p.phase);
    const isToday = doy === TODAY;
    const isSelected = doy === selectedDay;
    return /*#__PURE__*/React.createElement("button", {
      key: di,
      className: "cal-day" + (isToday ? " is-today" : "") + (isSelected ? " is-selected" : ""),
      onClick: () => onSelectDay(doy)
    }, /*#__PURE__*/React.createElement("div", {
      className: "cal-day-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-day-num"
    }, d), /*#__PURE__*/React.createElement("div", {
      className: "cal-day-moons"
    }, moonPhases.map(({
      moon,
      phase
    }) => /*#__PURE__*/React.createElement("span", {
      key: moon.id,
      className: "cal-day-moon",
      style: {
        color: moon.color
      },
      title: `${moon.name} — ${phase.replace("_", " ")}`
    }, moon.glyphs[phase])))), /*#__PURE__*/React.createElement("div", {
      className: "cal-day-events"
    }, dayEntries.slice(0, 3).map(e => {
      const type = EVENT_TYPES.find(t => t.id === e.type);
      return /*#__PURE__*/React.createElement("div", {
        key: e.id,
        className: "cal-evt",
        style: {
          "--evt-c": type.fill
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "cal-evt-bar"
      }), /*#__PURE__*/React.createElement("span", {
        className: "cal-evt-name"
      }, e.name));
    }), dayEntries.length > 3 && /*#__PURE__*/React.createElement("div", {
      className: "cal-evt-more"
    }, "+ ", dayEntries.length - 3, " more")));
  })))));
}
function YearGrid({
  enabledMoons,
  visible,
  onPickMonth
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cal-year"
  }, CALENDAR.months.map((m, mi) => {
    const start = monthDayToDay(mi, 1);
    const inMonth = visible.filter(e => {
      const md = dayToMonthDay(e.day);
      return md.monthIdx === mi;
    });
    const days = [];
    for (let d = 1; d <= m.days; d++) days.push(start + d - 1);
    return /*#__PURE__*/React.createElement("button", {
      key: mi,
      className: "cal-year-card",
      onClick: () => onPickMonth(mi)
    }, /*#__PURE__*/React.createElement("div", {
      className: "cal-year-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-year-name"
    }, m.name), /*#__PURE__*/React.createElement("span", {
      className: "cal-year-sub"
    }, m.season), /*#__PURE__*/React.createElement("span", {
      className: "cal-year-count"
    }, inMonth.length)), /*#__PURE__*/React.createElement("div", {
      className: "cal-year-cells"
    }, days.map(doy => {
      const has = inMonth.find(e => e.day === doy);
      const isToday = doy === TODAY;
      const moonHit = CALENDAR.moons.find(m2 => enabledMoons.has(m2.id) && moonPhaseOnDay(m2, doy));
      return /*#__PURE__*/React.createElement("span", {
        key: doy,
        className: "cal-year-cell" + (isToday ? " is-today" : "") + (has ? " has-event" : ""),
        style: has ? {
          "--evt-c": EVENT_TYPES.find(t => t.id === has.type).fill
        } : null
      }, moonHit && /*#__PURE__*/React.createElement("span", {
        className: "cal-year-moon",
        style: {
          color: moonHit.color
        }
      }, moonHit.glyphs[moonPhaseOnDay(moonHit, doy)]));
    })));
  }));
}
function Agenda({
  visible,
  onPickDay
}) {
  // Group by month
  const byMonth = useMemo(() => {
    const map = new Map();
    for (const e of visible) {
      const md = dayToMonthDay(e.day);
      if (!map.has(md.monthIdx)) map.set(md.monthIdx, []);
      map.get(md.monthIdx).push({
        ...e,
        dayInMonth: md.day
      });
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, [visible]);
  return /*#__PURE__*/React.createElement("div", {
    className: "cal-agenda"
  }, byMonth.map(([mi, items]) => /*#__PURE__*/React.createElement("section", {
    key: mi,
    className: "cal-agenda-group"
  }, /*#__PURE__*/React.createElement("header", {
    className: "cal-agenda-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cal-agenda-h"
  }, CALENDAR.months[mi].name), /*#__PURE__*/React.createElement("span", {
    className: "cal-agenda-sub"
  }, CALENDAR.months[mi].season), /*#__PURE__*/React.createElement("span", {
    className: "cal-agenda-count"
  }, items.length)), /*#__PURE__*/React.createElement("ul", {
    className: "cal-agenda-list"
  }, items.map(e => {
    const type = EVENT_TYPES.find(t => t.id === e.type);
    const wd = CALENDAR.weekdays[(e.dayInMonth - 1) % CALENDAR.weekdays.length];
    return /*#__PURE__*/React.createElement("li", {
      key: e.id,
      className: "cal-agenda-row",
      onClick: () => onPickDay(e.day)
    }, /*#__PURE__*/React.createElement("div", {
      className: "cal-agenda-date"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-agenda-day"
    }, e.dayInMonth), /*#__PURE__*/React.createElement("span", {
      className: "cal-agenda-wd"
    }, wd.slice(0, 3))), /*#__PURE__*/React.createElement("span", {
      className: "cal-bullet",
      style: {
        background: type.fill
      }
    }, type.letter), /*#__PURE__*/React.createElement("div", {
      className: "cal-agenda-body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cal-agenda-name"
    }, e.name), e.sub && /*#__PURE__*/React.createElement("span", {
      className: "cal-sel-sub"
    }, e.sub)), /*#__PURE__*/React.createElement("span", {
      className: "cal-agenda-type"
    }, type.name));
  })))));
}
window.CalendarView = CalendarView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/CalendarView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/CommandPalette.jsx
try { (() => {
/* global React */
const {
  useState: useStateCmd,
  useEffect: useEffectCmd
} = React;
function CommandPalette({
  open,
  onClose,
  onPick
}) {
  const [q, setQ] = useStateCmd("");
  useEffectCmd(() => {
    if (open) setQ("");
  }, [open]);
  if (!open) return null;
  const groups = [{
    name: "Recently opened",
    items: [{
      icon: "○",
      color: "#d99366",
      label: "Sigrun Ulfsdottir",
      meta: "Character · Iron Crown"
    }, {
      icon: "○",
      color: "#7da265",
      label: "Caernarfon",
      meta: "Place · capital"
    }, {
      icon: "○",
      color: "#8d8478",
      label: "Burning of Hellas",
      meta: "Event · Yr 26"
    }]
  }, {
    name: "Actions",
    items: [{
      icon: "+",
      label: "New character",
      meta: "⌘N"
    }, {
      icon: "↗",
      label: "Open in editor",
      meta: "⌘E"
    }, {
      icon: "⊕",
      label: "Run validation",
      meta: "⌘⇧V"
    }, {
      icon: "⤓",
      label: "Export to Unreal",
      meta: ""
    }]
  }, {
    name: "Navigate",
    items: [{
      icon: "▤",
      label: "Timeline",
      meta: ""
    }, {
      icon: "❦",
      label: "Family tree",
      meta: ""
    }, {
      icon: "❛",
      label: "Ask Mimir",
      meta: "⌘J"
    }]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "mim-cmd-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-cmd",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-cmd-input"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-cmd-glyph"
  }, "\u2315"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Find anywhere in your world\u2026"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mim-cmd-kbd"
  }, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "mim-cmd-results"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.name,
    className: "mim-cmd-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, g.name), g.items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "mim-cmd-row",
    onClick: () => onPick?.(it)
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-cmd-icon",
    style: {
      color: it.color || "var(--fg-3)"
    }
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    className: "mim-cmd-label"
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "mim-cmd-meta"
  }, it.meta))))))));
}
window.CommandPalette = CommandPalette;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/ConnectionsGraph.jsx
try { (() => {
/* global React */
/*
 * ConnectionsGraph — /connections route.
 *
 * Merger of the two graph routes from docs/specs/relationships.md:
 *
 *   - /relationships    — typed semantic edges only (default).
 *   - /world-connections — every entry, every wiki-link, wide-angle.
 *
 * Both routes share one engine in the real codebase; here they share
 * one VIEW with a "scope" toggle at the top. Default layers per
 * scope mirror the spec:
 *
 *     relationships scope → typed-edges ON, kinship/wikilinks OFF
 *     world scope         → wikilinks ON, typed/kinship OFF
 *
 * The big upgrade vs the 2D version: layout is fully 3D and
 * interactive. Drag empty space to orbit the camera. Drag a node
 * to pull it through the web — when "physics" is on, the springs
 * propagate that pull to its neighbours so authors can literally
 * untangle clusters by hand.
 *
 * Engine:
 *
 *   • Per-node {x,y,z,vx,vy,vz,fixed}, mutated in a ref.
 *   • Force loop in requestAnimationFrame:
 *       O(N²) repulsion · spring attraction on typed edges ·
 *       gentle pull toward origin · velocity damping.
 *   • Perspective projection: yaw (around Y) then pitch (around X),
 *     translate by camera distance, divide.
 *   • Screen-drag inverse maps mouse delta into the camera's view
 *     plane (z-fixed at the node's depth).
 *   • Z-sort: nodes rendered back-to-front each frame; edges
 *     beneath nodes; depth fade for visual cue.
 *
 * Matrix view is preserved as a flat secondary surface for
 * dense authoring.
 */

const {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback
} = React;

// ─── Relationship type catalogue (14 bundled defaults) ──────────
const CX_TYPES = [{
  id: 'allied',
  label: 'Allied',
  category: 'political',
  color: '#5fa394',
  bias: '+'
}, {
  id: 'at-war',
  label: 'At war',
  category: 'political',
  color: '#c43a4e',
  bias: '−'
}, {
  id: 'trade-partner',
  label: 'Trade partner',
  category: 'political',
  color: '#7da265',
  bias: '+'
}, {
  id: 'neutral',
  label: 'Neutral',
  category: 'political',
  color: '#8aa0ab',
  bias: '·'
}, {
  id: 'sworn-to',
  label: 'Sworn to',
  category: 'organisational',
  color: '#c9a227',
  bias: '+'
}, {
  id: 'liege-of',
  label: 'Liege of',
  category: 'organisational',
  color: '#b87f10',
  bias: '+'
}, {
  id: 'vassal',
  label: 'Vassal of',
  category: 'organisational',
  color: '#d6b35a',
  bias: '+'
}, {
  id: 'friendship',
  label: 'Friendship',
  category: 'personal',
  color: '#d99366',
  bias: '+'
}, {
  id: 'lover',
  label: 'Lover',
  category: 'personal',
  color: '#e58da0',
  bias: '+'
}, {
  id: 'mentor',
  label: 'Mentor of',
  category: 'personal',
  color: '#a07cc8',
  bias: '+'
}, {
  id: 'apprentice',
  label: 'Apprentice of',
  category: 'personal',
  color: '#8a6cad',
  bias: '+'
}, {
  id: 'rivalry',
  label: 'Rivalry',
  category: 'personal',
  color: '#b85a2c',
  bias: '−'
}, {
  id: 'enemy',
  label: 'Enemy',
  category: 'ideological',
  color: '#902434',
  bias: '−'
}, {
  id: 'oath-broken',
  label: 'Oath broken',
  category: 'ideological',
  color: '#5a5650',
  bias: '−'
}];
const CX_TYPE_MAP = Object.fromEntries(CX_TYPES.map(t => [t.id, t]));
const CX_CATEGORIES = ['political', 'organisational', 'personal', 'ideological'];

// ─── Entity-type palette (extended with non-character types) ───
const CX_ENTITY_PALETTE = {
  character: {
    color: '#d99366',
    label: 'Character',
    radius: 14
  },
  faction: {
    color: '#c43a4e',
    label: 'Faction',
    radius: 18
  },
  place: {
    color: '#7da265',
    label: 'Place',
    radius: 16
  },
  culture: {
    color: '#a07cc8',
    label: 'Culture',
    radius: 16
  },
  species: {
    color: '#5fa394',
    label: 'Species',
    radius: 15
  },
  event: {
    color: '#8d8478',
    label: 'Event',
    radius: 13
  },
  language: {
    color: '#6b89c2',
    label: 'Language',
    radius: 14
  },
  rune: {
    color: '#c9a227',
    label: 'Rune',
    radius: 12
  },
  spell: {
    color: '#a8814d',
    label: 'Spell',
    radius: 12
  }
};

// ─── Nodes (28 across 9 entity types) ──────────────────────────
const CX_NODES = [
// Characters
{
  id: 'bjornar',
  name: 'Bjornar',
  type: 'character',
  tags: ['royal', 'iron-crown'],
  stub: false
}, {
  id: 'sigrun',
  name: 'Sigrun',
  type: 'character',
  tags: ['shield-bearer', 'iron-crown'],
  stub: false
}, {
  id: 'vaerin',
  name: 'Vaerin',
  type: 'character',
  tags: ['counsel', 'iron-crown'],
  stub: false
}, {
  id: 'hjalmar',
  name: 'Hjalmar',
  type: 'character',
  tags: ['military', 'iron-crown'],
  stub: false
}, {
  id: 'skaldyrn',
  name: 'Skaldyrn',
  type: 'character',
  tags: ['skald', 'deceased'],
  stub: false
}, {
  id: 'ynla',
  name: 'Ynla',
  type: 'character',
  tags: ['cult', 'oracle'],
  stub: false
}, {
  id: 'thrain',
  name: 'Thrain',
  type: 'character',
  tags: ['cult', 'bone-priest'],
  stub: false
}, {
  id: 'sothren',
  name: 'Sothren',
  type: 'character',
  tags: ['watch', 'embertongue'],
  stub: false
}, {
  id: 'helka',
  name: 'Helka',
  type: 'character',
  tags: ['royal', 'iron-crown', 'heir'],
  stub: true
}, {
  id: 'vethren',
  name: 'Vethren',
  type: 'character',
  tags: ['watch', 'sky-scryer'],
  stub: true
},
// Factions
{
  id: 'iron-crown',
  name: 'Iron Crown',
  type: 'faction',
  tags: ['noble-house', 'iron-crown'],
  stub: false
}, {
  id: 'cult-mimir',
  name: 'Cult of Mimir',
  type: 'faction',
  tags: ['cult', 'void'],
  stub: false
}, {
  id: 'skalds',
  name: 'Hornfolke Skalds',
  type: 'faction',
  tags: ['guild', 'lore'],
  stub: false
}, {
  id: 'watch',
  name: 'Embertongue Watch',
  type: 'faction',
  tags: ['order', 'dragon'],
  stub: false
}, {
  id: 'stoneborn',
  name: 'Stoneborn Holds',
  type: 'faction',
  tags: ['clan', 'mountain'],
  stub: false
},
// Places
{
  id: 'hearthstead',
  name: 'Hearthstead',
  type: 'place',
  tags: ['seat', 'iron-crown'],
  stub: false
}, {
  id: 'well',
  name: 'The Well',
  type: 'place',
  tags: ['sacred', 'mimir'],
  stub: false
}, {
  id: 'frostholm',
  name: 'Frostholm',
  type: 'place',
  tags: ['fortress', 'border'],
  stub: true
}, {
  id: 'bryn-hollow',
  name: 'Bryn Hollow',
  type: 'place',
  tags: ['battleground'],
  stub: false
},
// Cultures
{
  id: 'hornfolke',
  name: 'Hornfolke',
  type: 'culture',
  tags: ['northern'],
  stub: false
}, {
  id: 'iron-culture',
  name: 'Iron Crown culture',
  type: 'culture',
  tags: ['lowland'],
  stub: false
},
// Species
{
  id: 'drakenthar',
  name: 'Drakenthar',
  type: 'species',
  tags: ['ancient'],
  stub: false
}, {
  id: 'frost-jot',
  name: 'Frost-jötnar',
  type: 'species',
  tags: ['giantkind'],
  stub: false
},
// World-scope extras: events, language, rune, spell
{
  id: 'battle-bryn',
  name: 'Battle of Bryn Hollow',
  type: 'event',
  tags: ['skirmish', 'border'],
  stub: false
}, {
  id: 'treaty-avalon',
  name: 'Treaty of Avalon',
  type: 'event',
  tags: ['council', 'pact'],
  stub: false
}, {
  id: 'lang-drakenthar',
  name: 'Drakenthar (tongue)',
  type: 'language',
  tags: ['ancient', 'dragon'],
  stub: false
}, {
  id: 'rune-kraal',
  name: 'Kraal-rune',
  type: 'rune',
  tags: ['binding'],
  stub: false
}, {
  id: 'spell-binding',
  name: 'Binding of the Wolf',
  type: 'spell',
  tags: ['prophecy', 'wolf'],
  stub: true
}];

// ─── Typed edges (with score [-100, 100]) ───────────────────────
const CX_EDGES = [
// char ↔ char
{
  s: 'sigrun',
  t: 'bjornar',
  type: 'sworn-to',
  score: 95
}, {
  s: 'helka',
  t: 'bjornar',
  type: 'sworn-to',
  score: 90
}, {
  s: 'vaerin',
  t: 'bjornar',
  type: 'mentor',
  score: 75
}, {
  s: 'bjornar',
  t: 'skaldyrn',
  type: 'apprentice',
  score: 70
}, {
  s: 'thrain',
  t: 'ynla',
  type: 'sworn-to',
  score: 85
}, {
  s: 'vethren',
  t: 'sothren',
  type: 'apprentice',
  score: 80
}, {
  s: 'sothren',
  t: 'vethren',
  type: 'mentor',
  score: 80
}, {
  s: 'bjornar',
  t: 'ynla',
  type: 'rivalry',
  score: -70
}, {
  s: 'bjornar',
  t: 'sothren',
  type: 'friendship',
  score: 55
}, {
  s: 'vaerin',
  t: 'ynla',
  type: 'friendship',
  score: 42
}, {
  s: 'hjalmar',
  t: 'ynla',
  type: 'enemy',
  score: -82
}, {
  s: 'sigrun',
  t: 'helka',
  type: 'friendship',
  score: 60
}, {
  s: 'vaerin',
  t: 'skaldyrn',
  type: 'mentor',
  score: 65
},
// faction ↔ faction
{
  s: 'iron-crown',
  t: 'stoneborn',
  type: 'allied',
  score: 85
}, {
  s: 'iron-crown',
  t: 'skalds',
  type: 'allied',
  score: 75
}, {
  s: 'iron-crown',
  t: 'cult-mimir',
  type: 'at-war',
  score: -80
}, {
  s: 'iron-crown',
  t: 'stoneborn',
  type: 'trade-partner',
  score: 50
}, {
  s: 'cult-mimir',
  t: 'iron-crown',
  type: 'enemy',
  score: -95
}, {
  s: 'cult-mimir',
  t: 'watch',
  type: 'allied',
  score: 60
}, {
  s: 'watch',
  t: 'skalds',
  type: 'trade-partner',
  score: 30
}, {
  s: 'skalds',
  t: 'stoneborn',
  type: 'allied',
  score: 55
},
// char ↔ faction
{
  s: 'bjornar',
  t: 'iron-crown',
  type: 'liege-of',
  score: 100
}, {
  s: 'ynla',
  t: 'cult-mimir',
  type: 'liege-of',
  score: 95
}, {
  s: 'sothren',
  t: 'watch',
  type: 'liege-of',
  score: 90
},
// place ↔ faction
{
  s: 'iron-crown',
  t: 'hearthstead',
  type: 'liege-of',
  score: 100
}, {
  s: 'cult-mimir',
  t: 'well',
  type: 'liege-of',
  score: 100
},
// cultural
{
  s: 'hornfolke',
  t: 'iron-culture',
  type: 'allied',
  score: 65
}, {
  s: 'hornfolke',
  t: 'skalds',
  type: 'allied',
  score: 80
},
// species enmity
{
  s: 'drakenthar',
  t: 'frost-jot',
  type: 'rivalry',
  score: -55
}, {
  s: 'drakenthar',
  t: 'iron-crown',
  type: 'oath-broken',
  score: -45
},
// place ↔ place
{
  s: 'frostholm',
  t: 'bryn-hollow',
  type: 'at-war',
  score: -40
}];

// ─── Kinship overlay ──────────────────────────────────────────
const CX_KINSHIP = [{
  s: 'bjornar',
  t: 'helka',
  label: 'parent'
}, {
  s: 'vaerin',
  t: 'helka',
  label: 'aunt'
}, {
  s: 'sigrun',
  t: 'hjalmar',
  label: 'sibling'
}, {
  s: 'skaldyrn',
  t: 'bjornar',
  label: 'mentor (kin)'
}, {
  s: 'ynla',
  t: 'thrain',
  label: 'aunt'
}];

// ─── Wiki-link layer (frontmatter + body refs) ─────────────────
const CX_WIKILINKS = [{
  s: 'bjornar',
  t: 'iron-crown'
}, {
  s: 'bjornar',
  t: 'hearthstead'
}, {
  s: 'sigrun',
  t: 'iron-crown'
}, {
  s: 'ynla',
  t: 'well'
}, {
  s: 'ynla',
  t: 'cult-mimir'
}, {
  s: 'sothren',
  t: 'watch'
}, {
  s: 'drakenthar',
  t: 'watch'
}, {
  s: 'hornfolke',
  t: 'skalds'
}, {
  s: 'frost-jot',
  t: 'frostholm'
}, {
  s: 'vaerin',
  t: 'iron-crown'
}, {
  s: 'hjalmar',
  t: 'frostholm'
}, {
  s: 'helka',
  t: 'hearthstead'
},
// World-scope wiki-link edges (events + language + rune + spell)
{
  s: 'battle-bryn',
  t: 'bryn-hollow'
}, {
  s: 'battle-bryn',
  t: 'iron-crown'
}, {
  s: 'battle-bryn',
  t: 'hjalmar'
}, {
  s: 'treaty-avalon',
  t: 'iron-crown'
}, {
  s: 'treaty-avalon',
  t: 'stoneborn'
}, {
  s: 'treaty-avalon',
  t: 'iron-culture'
}, {
  s: 'lang-drakenthar',
  t: 'drakenthar'
}, {
  s: 'lang-drakenthar',
  t: 'watch'
}, {
  s: 'lang-drakenthar',
  t: 'sothren'
}, {
  s: 'rune-kraal',
  t: 'sothren'
}, {
  s: 'rune-kraal',
  t: 'lang-drakenthar'
}, {
  s: 'spell-binding',
  t: 'ynla'
}, {
  s: 'spell-binding',
  t: 'rune-kraal'
}, {
  s: 'spell-binding',
  t: 'drakenthar'
}];

// ─── 3D MATH ───────────────────────────────────────────────────
// Project world (x,y,z) → screen (sx,sy) + depth + scale.
function project3D(p, cam, W, H) {
  const cy = Math.cos(cam.yaw),
    sy = Math.sin(cam.yaw);
  const cp = Math.cos(cam.pitch),
    sp = Math.sin(cam.pitch);
  // Yaw around Y
  const x1 = p.x * cy + p.z * sy;
  const y1 = p.y;
  const z1 = -p.x * sy + p.z * cy;
  // Pitch around X (view space)
  const x2 = x1;
  const y2 = y1 * cp - z1 * sp;
  const z2 = y1 * sp + z1 * cp;
  // Move camera back by cam.dist; near-plane clip
  const zCam = cam.dist - z2;
  if (zCam < 30) return null;
  const f = H * 0.7 * cam.zoom;
  const sxx = W / 2 + x2 * f / zCam;
  const syy = H / 2 - y2 * f / zCam;
  return {
    sx: sxx,
    sy: syy,
    depth: zCam,
    scale: f / zCam
  };
}

// Inverse: view-plane screen delta (dx,dy) at fixed depth → world delta.
function screenDeltaToWorld(dx_s, dy_s, zCam, cam, H) {
  const f = H * 0.7 * cam.zoom;
  const vx = dx_s * zCam / f;
  const vy = -dy_s * zCam / f;
  const cy = Math.cos(cam.yaw),
    sy = Math.sin(cam.yaw);
  const cp = Math.cos(cam.pitch),
    sp = Math.sin(cam.pitch);
  // Inverse-pitch then inverse-yaw applied to (vx, vy, 0)
  const wx = cy * vx + sy * sp * vy;
  const wy = cp * vy;
  const wz = sy * vx - cy * sp * vy;
  return {
    x: wx,
    y: wy,
    z: wz
  };
}

// ─── 3D force step (one iteration) ─────────────────────────────
function step3DForces(posRef, nodes, edges, params) {
  const {
    kRep,
    kSpring,
    springLen,
    center,
    damping
  } = params;
  const arr = nodes.map(n => posRef.current[n.id]).filter(Boolean);
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const a = arr[i],
        b = arr[j];
      const dx = b.x - a.x,
        dy = b.y - a.y,
        dz = b.z - a.z;
      const d2 = Math.max(900, dx * dx + dy * dy + dz * dz);
      const d = Math.sqrt(d2);
      const f = kRep / d2;
      const fx = dx / d * f,
        fy = dy / d * f,
        fz = dz / d * f;
      if (!a.fixed) {
        a.vx -= fx;
        a.vy -= fy;
        a.vz -= fz;
      }
      if (!b.fixed) {
        b.vx += fx;
        b.vy += fy;
        b.vz += fz;
      }
    }
  }
  for (const e of edges) {
    const a = posRef.current[e.s];
    const b = posRef.current[e.t];
    if (!a || !b) continue;
    const dx = b.x - a.x,
      dy = b.y - a.y,
      dz = b.z - a.z;
    const d = Math.max(1, Math.sqrt(dx * dx + dy * dy + dz * dz));
    const disp = d - springLen;
    const f = kSpring * disp;
    const fx = dx / d * f,
      fy = dy / d * f,
      fz = dz / d * f;
    if (!a.fixed) {
      a.vx += fx;
      a.vy += fy;
      a.vz += fz;
    }
    if (!b.fixed) {
      b.vx -= fx;
      b.vy -= fy;
      b.vz -= fz;
    }
  }
  for (const s of arr) {
    if (s.fixed) {
      s.vx = s.vy = s.vz = 0;
      continue;
    }
    s.vx += -s.x * center;
    s.vy += -s.y * center;
    s.vz += -s.z * center;
    s.x += s.vx;
    s.y += s.vy;
    s.z += s.vz;
    s.vx *= damping;
    s.vy *= damping;
    s.vz *= damping;
    // Soft bounds — keep the world a comfortable cube.
    const lim = 380;
    s.x = Math.max(-lim, Math.min(lim, s.x));
    s.y = Math.max(-lim, Math.min(lim, s.y));
    s.z = Math.max(-lim, Math.min(lim, s.z));
  }
}

// ─── Initial 3D seeding ───────────────────────────────────────
function init3DPositions(nodes) {
  const out = {};
  for (let i = 0; i < nodes.length; i++) {
    // Fibonacci sphere — even distribution, no two start coincident.
    const r = 240;
    const phi = Math.acos(1 - 2 * (i + 0.5) / nodes.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    out[nodes[i].id] = {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.cos(phi),
      z: r * Math.sin(phi) * Math.sin(theta),
      vx: 0,
      vy: 0,
      vz: 0,
      fixed: false
    };
  }
  return out;
}

// ─── Component ─────────────────────────────────────────────────
function ConnectionsGraph() {
  // Scope + view
  const [scope, setScope] = useState('relationships'); // 'relationships' | 'world'
  const [viewMode, setViewMode] = useState('graph3d'); // 'graph3d' | 'matrix'

  // Layers (defaults depend on scope)
  const [layers, setLayers] = useState({
    typed: true,
    kinship: false,
    wikilinks: false
  });

  // Filter state
  const [activeTypes, setActiveTypes] = useState(new Set(CX_TYPES.map(t => t.id)));
  const [scoreMin, setScoreMin] = useState(-100);
  const [scoreMax, setScoreMax] = useState(100);
  const [activeEntityTypes, setActiveEntityTypes] = useState(new Set(Object.keys(CX_ENTITY_PALETTE)));
  const [activeTags, setActiveTags] = useState(new Set());
  const [focusId, setFocusId] = useState(null);

  // 3D engine state
  const [cam, setCam] = useState({
    yaw: 0.5,
    pitch: -0.25,
    dist: 720,
    zoom: 1
  });
  const [physics, setPhysics] = useState(true);
  const [hoverEdge, setHoverEdge] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);
  const [selected, setSelected] = useState(null);
  const [overlayId, setOverlayId] = useState(null);

  // Positions live in a ref (60fps physics doesn't trigger React reconciles).
  const posRef = useRef(init3DPositions(CX_NODES));
  const [, force] = useState(0);
  const tickRef = useRef(0);

  // Drag state (in a ref so RAF handlers see live values).
  const dragRef = useRef({
    kind: null,
    nodeId: null,
    lastX: 0,
    lastY: 0,
    depth: 0
  });

  // === Scope: change defaults when scope flips ==================
  useEffect(() => {
    if (scope === 'relationships') {
      setLayers({
        typed: true,
        kinship: false,
        wikilinks: false
      });
      setActiveEntityTypes(new Set(['character', 'faction', 'place', 'culture', 'species']));
    } else {
      setLayers({
        typed: false,
        kinship: false,
        wikilinks: true
      });
      setActiveEntityTypes(new Set(Object.keys(CX_ENTITY_PALETTE)));
    }
  }, [scope]);

  // === Filter pipeline (same as 2D) =============================
  const filteredEdges = useMemo(() => {
    return CX_EDGES.filter(e => {
      if (e.s === e.t) return false;
      if (!activeTypes.has(e.type)) return false;
      if (e.score < scoreMin || e.score > scoreMax) return false;
      return true;
    });
  }, [activeTypes, scoreMin, scoreMax]);
  const participantIds = useMemo(() => {
    const s = new Set();
    if (layers.typed) for (const e of filteredEdges) {
      s.add(e.s);
      s.add(e.t);
    }
    if (layers.kinship) for (const e of CX_KINSHIP) {
      s.add(e.s);
      s.add(e.t);
    }
    if (layers.wikilinks) for (const e of CX_WIKILINKS) {
      s.add(e.s);
      s.add(e.t);
    }
    // World scope: every entry is visible by default (even orphans).
    if (scope === 'world') for (const n of CX_NODES) s.add(n.id);
    return s;
  }, [filteredEdges, layers, scope]);
  const filteredNodes = useMemo(() => CX_NODES.filter(n => {
    if (!participantIds.has(n.id)) return false;
    if (!activeEntityTypes.has(n.type)) return false;
    if (activeTags.size > 0 && !n.tags.some(t => activeTags.has(t))) return false;
    return true;
  }), [participantIds, activeEntityTypes, activeTags]);
  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);
  const focusReach = useMemo(() => {
    if (!focusId || !filteredNodeIds.has(focusId)) return null;
    let reach = new Set([focusId]);
    const allEdges = [...(layers.typed ? filteredEdges : []), ...(layers.kinship ? CX_KINSHIP : []), ...(layers.wikilinks ? CX_WIKILINKS : [])];
    for (let hop = 0; hop < 2; hop++) {
      const next = new Set(reach);
      for (const e of allEdges) {
        if (reach.has(e.s) && filteredNodeIds.has(e.t)) next.add(e.t);
        if (reach.has(e.t) && filteredNodeIds.has(e.s)) next.add(e.s);
      }
      reach = next;
    }
    return reach;
  }, [focusId, filteredEdges, layers, filteredNodeIds]);
  const visibleNodeIds = focusReach || filteredNodeIds;
  const visibleEdges = useMemo(() => layers.typed ? filteredEdges.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [], [layers.typed, filteredEdges, visibleNodeIds]);
  const visibleKinship = useMemo(() => layers.kinship ? CX_KINSHIP.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [], [layers.kinship, visibleNodeIds]);
  const visibleWikilink = useMemo(() => layers.wikilinks ? CX_WIKILINKS.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [], [layers.wikilinks, visibleNodeIds]);

  // Edge set used by physics (only spring on the visible typed edges).
  const physicsEdges = useMemo(() => visibleEdges, [visibleEdges]);
  const degreeMap = useMemo(() => {
    const m = {};
    for (const e of visibleEdges) {
      m[e.s] = (m[e.s] || 0) + 1;
      m[e.t] = (m[e.t] || 0) + 1;
    }
    return m;
  }, [visibleEdges]);

  // === RAF physics loop ==========================================
  useEffect(() => {
    let raf;
    const loop = () => {
      const dragging = dragRef.current.kind === 'node';
      if (physics) {
        step3DForces(posRef, CX_NODES, physicsEdges, {
          kRep: 24000,
          kSpring: 0.022,
          springLen: 170,
          center: 0.005,
          damping: 0.78
        });
      } else if (dragging) {
        // Even with physics off, decay velocity so dropped nodes settle.
        for (const id in posRef.current) {
          const s = posRef.current[id];
          s.vx *= 0.6;
          s.vy *= 0.6;
          s.vz *= 0.6;
        }
      }
      tickRef.current++;
      // Re-render at ~60fps while physics is on, on every tick while dragging.
      if (physics || dragging) force(tickRef.current);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [physics, physicsEdges]);

  // === Pointer handlers ==========================================
  const surfaceRef = useRef(null);
  const onPointerDownNode = useCallback((nodeId, e) => {
    e.stopPropagation();
    setSelected(nodeId);
    const node = posRef.current[nodeId];
    if (!node) return;
    node.fixed = true;
    node.vx = node.vy = node.vz = 0;
    // record current depth so screen-delta → world stays in plane
    const rect = surfaceRef.current.getBoundingClientRect();
    const proj = project3D(node, cam, rect.width, rect.height);
    dragRef.current = {
      kind: 'node',
      nodeId,
      lastX: e.clientX,
      lastY: e.clientY,
      depth: proj?.depth || cam.dist
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, [cam]);
  const onPointerDownBg = useCallback(e => {
    // Don't start orbit if click landed on a node group (they stopPropagation).
    dragRef.current = {
      kind: 'orbit',
      lastX: e.clientX,
      lastY: e.clientY
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, []);
  const onPointerMove = useCallback(e => {
    const d = dragRef.current;
    if (!d.kind) return;
    const dx = e.clientX - d.lastX;
    const dy = e.clientY - d.lastY;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    if (d.kind === 'orbit') {
      setCam(c => ({
        ...c,
        yaw: c.yaw + dx * 0.006,
        pitch: Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, c.pitch - dy * 0.006))
      }));
    } else if (d.kind === 'node') {
      const rect = surfaceRef.current.getBoundingClientRect();
      const worldDelta = screenDeltaToWorld(dx, dy, d.depth, cam, rect.height);
      const node = posRef.current[d.nodeId];
      if (node) {
        node.x += worldDelta.x;
        node.y += worldDelta.y;
        node.z += worldDelta.z;
        node.vx = node.vy = node.vz = 0;
      }
      force(tickRef.current++);
    }
  }, [cam]);
  const onPointerUp = useCallback(() => {
    const d = dragRef.current;
    if (d.kind === 'node' && d.nodeId) {
      // Release pin so physics can resume relaxing — but keep dropped position.
      const node = posRef.current[d.nodeId];
      if (node) node.fixed = false;
    }
    dragRef.current = {
      kind: null
    };
  }, []);
  const onWheel = useCallback(e => {
    e.preventDefault();
    const k = Math.pow(1.0015, -e.deltaY);
    setCam(c => ({
      ...c,
      zoom: Math.max(0.4, Math.min(2.4, c.zoom * k))
    }));
  }, []);

  // === Helpers ==================================================
  function toggle(setter, set, key) {
    const n = new Set(set);
    n.has(key) ? n.delete(key) : n.add(key);
    setter(n);
  }
  function toggleAll(setter, allKeys, currentSize) {
    setter(currentSize === allKeys.length ? new Set() : new Set(allKeys));
  }
  function reseed() {
    posRef.current = init3DPositions(CX_NODES);
    force(tickRef.current++);
  }
  function shake() {
    for (const id in posRef.current) {
      const s = posRef.current[id];
      s.vx += (Math.random() - 0.5) * 16;
      s.vy += (Math.random() - 0.5) * 16;
      s.vz += (Math.random() - 0.5) * 16;
    }
  }
  const allTags = useMemo(() => Array.from(new Set(CX_NODES.flatMap(n => n.tags))).sort(), []);
  const typeCounts = useMemo(() => {
    const m = {};
    for (const e of CX_EDGES) m[e.type] = (m[e.type] || 0) + 1;
    return m;
  }, []);
  const entityCounts = useMemo(() => {
    const m = {};
    for (const n of CX_NODES) m[n.type] = (m[n.type] || 0) + 1;
    return m;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ft rw cx"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-split rw-split"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ft-side rw-side cx-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-side-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Connections"), /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow cx-eye"
  }, "Tools \xB7 Graph (3D)")), /*#__PURE__*/React.createElement("div", {
    className: "cx-scope"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cx-scope-btn" + (scope === 'relationships' ? " is-on" : ""),
    onClick: () => setScope('relationships')
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-scope-head"
  }, "Relationships"), /*#__PURE__*/React.createElement("span", {
    className: "cx-scope-sub"
  }, "Typed edges only \xB7 semantic")), /*#__PURE__*/React.createElement("button", {
    className: "cx-scope-btn" + (scope === 'world' ? " is-on" : ""),
    onClick: () => setScope('world')
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-scope-head"
  }, "World"), /*#__PURE__*/React.createElement("span", {
    className: "cx-scope-sub"
  }, "Every entry, every wiki-link"))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Focus"), focusId && /*#__PURE__*/React.createElement("button", {
    className: "rw-clear",
    onClick: () => setFocusId(null)
  }, "clear")), !focusId ? /*#__PURE__*/React.createElement("select", {
    className: "rw-select",
    value: "",
    onChange: e => e.target.value && setFocusId(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 anchor a 2-hop subgraph \u2014"), CX_NODES.filter(n => filteredNodeIds.has(n.id)).map(n => /*#__PURE__*/React.createElement("option", {
    key: n.id,
    value: n.id
  }, n.name))) : /*#__PURE__*/React.createElement("div", {
    className: "rw-focus-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-dot",
    style: {
      background: CX_ENTITY_PALETTE[CX_NODES.find(n => n.id === focusId).type].color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-name"
  }, CX_NODES.find(n => n.id === focusId).name), /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-meta"
  }, focusReach?.size || 0, " nodes"))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Layers")), /*#__PURE__*/React.createElement("ul", {
    className: "rw-layer-list"
  }, [{
    id: 'typed',
    name: 'Typed edges',
    count: filteredEdges.length,
    color: '#5fa394'
  }, {
    id: 'kinship',
    name: 'Kinship overlay',
    count: CX_KINSHIP.length,
    color: '#8aa0ab'
  }, {
    id: 'wikilinks',
    name: 'Wiki-links overlay',
    count: CX_WIKILINKS.length,
    color: '#5a5650'
  }].map(L => /*#__PURE__*/React.createElement("li", {
    key: L.id,
    className: "rw-layer-row" + (layers[L.id] ? " is-on" : ""),
    onClick: () => setLayers(ls => ({
      ...ls,
      [L.id]: !ls[L.id]
    }))
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-bar",
    style: {
      background: L.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-name"
  }, L.name), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-count"
  }, L.count), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: layers[L.id],
    className: "rw-checkbox"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Relationship type"), /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => toggleAll(setActiveTypes, CX_TYPES.map(t => t.id), activeTypes.size)
  }, activeTypes.size === CX_TYPES.length ? 'none' : 'all')), CX_CATEGORIES.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat,
    className: "rw-cat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-cat-eye"
  }, cat), /*#__PURE__*/React.createElement("div", {
    className: "rw-type-grid"
  }, CX_TYPES.filter(t => t.category === cat).map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "rw-type-chip" + (activeTypes.has(t.id) ? " is-on" : ""),
    onClick: () => toggle(setActiveTypes, activeTypes, t.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-type-bar",
    style: {
      background: t.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-type-label"
  }, t.label), /*#__PURE__*/React.createElement("span", {
    className: "rw-type-bias"
  }, t.bias), /*#__PURE__*/React.createElement("span", {
    className: "rw-type-count"
  }, typeCounts[t.id] || 0))))))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Entity type"), /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => toggleAll(setActiveEntityTypes, Object.keys(CX_ENTITY_PALETTE), activeEntityTypes.size)
  }, activeEntityTypes.size === Object.keys(CX_ENTITY_PALETTE).length ? 'none' : 'all')), /*#__PURE__*/React.createElement("div", {
    className: "rw-ent-grid"
  }, Object.entries(CX_ENTITY_PALETTE).map(([id, p]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: "rw-ent-chip" + (activeEntityTypes.has(id) ? " is-on" : ""),
    onClick: () => toggle(setActiveEntityTypes, activeEntityTypes, id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-ent-dot",
    style: {
      background: p.color
    }
  }), /*#__PURE__*/React.createElement("span", null, p.label), /*#__PURE__*/React.createElement("span", {
    className: "rw-type-count"
  }, entityCounts[id] || 0))))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Tag"), activeTags.size > 0 && /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => setActiveTags(new Set())
  }, "clear")), /*#__PURE__*/React.createElement("div", {
    className: "rw-tag-flow"
  }, allTags.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "rw-tag" + (activeTags.has(t) ? " is-on" : ""),
    onClick: () => toggle(setActiveTags, activeTags, t)
  }, "#", t)))), /*#__PURE__*/React.createElement("div", {
    className: "ft-stats rw-stats"
  }, visibleNodeIds.size, "/", CX_NODES.length, " nodes \xB7", ' ', visibleEdges.length, " typed", layers.kinship && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", visibleKinship.length, " kin"), layers.wikilinks && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", visibleWikilink.length, " links"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-wrap rw-wrap cx-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-bar rw-bar cx-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-mode rw-mode"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (viewMode === 'graph3d' ? " is-active" : ""),
    onClick: () => setViewMode('graph3d')
  }, "3D graph"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (viewMode === 'matrix' ? " is-active" : ""),
    onClick: () => setViewMode('matrix')
  }, "matrix")), /*#__PURE__*/React.createElement("span", {
    className: "cx-scope-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-scope-dot",
    style: {
      background: scope === 'relationships' ? '#d99366' : '#5fa394'
    }
  }), scope === 'relationships' ? 'Relationships scope' : 'World scope'), /*#__PURE__*/React.createElement("span", {
    className: "gt-bar-spacer"
  }), viewMode === 'graph3d' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "cx-physics" + (physics ? " is-on" : ""),
    onClick: () => setPhysics(p => !p),
    title: "Toggle force simulation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-physics-dot"
  }), "physics ", physics ? 'on' : 'off'), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip cx-action",
    onClick: shake,
    title: "Jiggle nodes out of local minima"
  }, "shake"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip cx-action",
    onClick: reseed,
    title: "Reset positions to a fresh sphere"
  }, "reseed")), focusId && /*#__PURE__*/React.createElement("div", {
    className: "rw-focus-bread"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-bread-eye"
  }, "Focus"), /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-bread-name"
  }, CX_NODES.find(n => n.id === focusId).name), /*#__PURE__*/React.createElement("button", {
    className: "rw-focus-bread-x",
    onClick: () => setFocusId(null)
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas rw-canvas cx-canvas",
    "data-screen-label": "14 Connections (3D)"
  }, viewMode === 'graph3d' ? /*#__PURE__*/React.createElement(Graph3D, {
    surfaceRef: surfaceRef,
    cam: cam,
    posRef: posRef,
    nodes: CX_NODES,
    visibleNodeIds: visibleNodeIds,
    visibleEdges: visibleEdges,
    visibleKinship: visibleKinship,
    visibleWikilink: visibleWikilink,
    focusId: focusId,
    selected: selected,
    hoverNode: hoverNode,
    setHoverNode: setHoverNode,
    hoverEdge: hoverEdge,
    setHoverEdge: setHoverEdge,
    degreeMap: degreeMap,
    onPointerDownBg: onPointerDownBg,
    onPointerDownNode: onPointerDownNode,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onWheel: onWheel,
    onFocusNode: id => setFocusId(prev => prev === id ? null : id),
    onOpenOverlay: id => setOverlayId(id)
  }) : /*#__PURE__*/React.createElement(MatrixSurface, {
    nodes: CX_NODES,
    visibleNodeIds: visibleNodeIds,
    visibleEdges: visibleEdges
  })))), overlayId && /*#__PURE__*/React.createElement(EntryOverlay, {
    node: CX_NODES.find(n => n.id === overlayId),
    edges: CX_EDGES,
    kinship: CX_KINSHIP,
    wikilinks: CX_WIKILINKS,
    nodes: CX_NODES,
    onClose: () => setOverlayId(null),
    onFocus: id => {
      setFocusId(id);
      setOverlayId(null);
    },
    onPickNeighbor: id => setOverlayId(id)
  }));
}

// ─── 3D Graph surface ──────────────────────────────────────────
function Graph3D({
  surfaceRef,
  cam,
  posRef,
  nodes,
  visibleNodeIds,
  visibleEdges,
  visibleKinship,
  visibleWikilink,
  focusId,
  selected,
  hoverNode,
  setHoverNode,
  hoverEdge,
  setHoverEdge,
  degreeMap,
  onPointerDownBg,
  onPointerDownNode,
  onPointerMove,
  onPointerUp,
  onWheel,
  onFocusNode,
  onOpenOverlay
}) {
  const W = 1200,
    H = 760;

  // 1-hop neighborhood for hover halo
  const neighborhood = useMemo(() => {
    if (!hoverNode) return null;
    const s = new Set([hoverNode]);
    for (const e of visibleEdges) {
      if (e.s === hoverNode) s.add(e.t);
      if (e.t === hoverNode) s.add(e.s);
    }
    return s;
  }, [hoverNode, visibleEdges]);

  // Project every visible node ONCE per frame.
  const projected = {};
  for (const n of nodes) {
    if (!visibleNodeIds.has(n.id)) continue;
    const p = posRef.current[n.id];
    if (!p) continue;
    const pj = project3D(p, cam, W, H);
    if (pj) projected[n.id] = pj;
  }

  // Depth-fade helper: deeper nodes are slightly desaturated/faded.
  function depthAlpha(depth) {
    // depth ranges roughly cam.dist - 380 .. cam.dist + 380
    const lo = cam.dist - 380,
      hi = cam.dist + 380;
    const t = Math.max(0, Math.min(1, (depth - lo) / (hi - lo)));
    return 0.45 + 0.55 * (1 - t); // far = 0.45, near = 1
  }

  // Z-sort node list (back-to-front)
  const sortedNodes = nodes.filter(n => projected[n.id]).slice().sort((a, b) => projected[b.id].depth - projected[a.id].depth);
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-stage",
    ref: surfaceRef,
    onPointerDown: onPointerDownBg,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onPointerCancel: onPointerUp,
    onWheel: onWheel
  }, /*#__PURE__*/React.createElement("svg", {
    className: "rw-svg cx-svg",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "cx-grid",
    x: "0",
    y: "0",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "rgba(214,201,168,0.04)",
    strokeWidth: "0.5"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "cx-vignette",
    cx: "50%",
    cy: "50%",
    r: "70%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(0,0,0,0)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(0,0,0,0.55)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H,
    fill: "url(#cx-grid)"
  }), /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H,
    fill: "url(#cx-vignette)",
    pointerEvents: "none"
  }), visibleWikilink.map((e, i) => {
    const a = projected[e.s],
      b = projected[e.t];
    if (!a || !b) return null;
    const alpha = Math.min(depthAlpha(a.depth), depthAlpha(b.depth));
    return /*#__PURE__*/React.createElement("line", {
      key: `wl-${i}`,
      x1: a.sx,
      y1: a.sy,
      x2: b.sx,
      y2: b.sy,
      stroke: "rgba(141,132,120,0.45)",
      strokeWidth: "0.8",
      opacity: alpha
    });
  }), visibleKinship.map((e, i) => {
    const a = projected[e.s],
      b = projected[e.t];
    if (!a || !b) return null;
    const mx = (a.sx + b.sx) / 2;
    const my = (a.sy + b.sy) / 2;
    const alpha = Math.min(depthAlpha(a.depth), depthAlpha(b.depth));
    return /*#__PURE__*/React.createElement("g", {
      key: `kin-${i}`,
      opacity: alpha
    }, /*#__PURE__*/React.createElement("line", {
      x1: a.sx,
      y1: a.sy,
      x2: b.sx,
      y2: b.sy,
      stroke: "rgba(138,160,171,0.7)",
      strokeWidth: "1.1",
      strokeDasharray: "4 4"
    }), /*#__PURE__*/React.createElement("text", {
      x: mx,
      y: my - 4,
      fill: "rgba(138,160,171,0.85)",
      fontSize: "10",
      textAnchor: "middle",
      fontFamily: "var(--font-sans)",
      fontStyle: "italic"
    }, e.label));
  }), visibleEdges.map((e, i) => {
    const a = projected[e.s],
      b = projected[e.t];
    if (!a || !b) return null;
    const t = CX_TYPE_MAP[e.type];
    const isHovered = hoverEdge === i;
    const isFaded = hoverEdge !== null && !isHovered || neighborhood && !(neighborhood.has(e.s) && neighborhood.has(e.t));
    const alpha = Math.min(depthAlpha(a.depth), depthAlpha(b.depth));
    const widthByScore = Math.max(1.0, Math.abs(e.score) / 38);
    const mx = (a.sx + b.sx) / 2,
      my = (a.sy + b.sy) / 2;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      className: "rw-edge",
      style: {
        opacity: isFaded ? 0.16 : alpha
      },
      onMouseEnter: () => setHoverEdge(i),
      onMouseLeave: () => setHoverEdge(null)
    }, /*#__PURE__*/React.createElement("line", {
      x1: a.sx,
      y1: a.sy,
      x2: b.sx,
      y2: b.sy,
      stroke: "transparent",
      strokeWidth: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: a.sx,
      y1: a.sy,
      x2: b.sx,
      y2: b.sy,
      stroke: t.color,
      strokeWidth: isHovered ? widthByScore + 1 : widthByScore,
      strokeLinecap: "round"
    }), isHovered && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
      x: mx - 60,
      y: my - 22,
      width: "120",
      height: "32",
      rx: "4",
      fill: "rgba(14,11,9,0.95)",
      stroke: t.color,
      strokeWidth: "0.75"
    }), /*#__PURE__*/React.createElement("text", {
      x: mx,
      y: my - 8,
      textAnchor: "middle",
      fill: t.color,
      fontSize: "11",
      fontFamily: "var(--font-sans)",
      style: {
        fontWeight: 600
      }
    }, t.label), /*#__PURE__*/React.createElement("text", {
      x: mx,
      y: my + 5,
      textAnchor: "middle",
      fill: "var(--fg-3)",
      fontSize: "10",
      fontFamily: "var(--font-mono)"
    }, "score ", e.score > 0 ? '+' : '', e.score)));
  }), sortedNodes.map(n => {
    const p = projected[n.id];
    if (!p) return null;
    const isFocus = n.id === focusId;
    const isSel = n.id === selected;
    const isHover = n.id === hoverNode;
    const isFaded = neighborhood && !neighborhood.has(n.id);
    const palette = CX_ENTITY_PALETTE[n.type];
    const baseR = palette.radius;
    const deg = degreeMap[n.id] || 0;
    // Combine perspective scale + degree-driven size.
    const r = (baseR + Math.min(6, deg * 0.7)) * Math.max(0.3, p.scale * 0.6);
    const alpha = depthAlpha(p.depth) * (isFaded ? 0.4 : 1);
    return /*#__PURE__*/React.createElement("g", {
      key: n.id,
      className: "rw-node cx-node3d",
      transform: `translate(${p.sx}, ${p.sy})`,
      style: {
        opacity: alpha,
        cursor: 'grab'
      },
      onPointerDown: e => onPointerDownNode(n.id, e),
      onMouseEnter: () => setHoverNode(n.id),
      onMouseLeave: () => setHoverNode(null),
      onDoubleClick: () => onOpenOverlay(n.id)
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "0",
      cy: r + 4,
      rx: r * 0.75,
      ry: r * 0.18,
      fill: "rgba(0,0,0,0.45)",
      opacity: alpha * 0.6
    }), isFocus && /*#__PURE__*/React.createElement("circle", {
      r: r + 6,
      fill: "none",
      stroke: "#b85a2c",
      strokeWidth: "1.5",
      strokeDasharray: "3 3",
      opacity: alpha
    }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
      id: `cx-sph-${n.id}`,
      cx: "35%",
      cy: "30%",
      r: "70%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "rgba(255,255,255,0.55)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "35%",
      stopColor: palette.color
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: shade(palette.color, -0.55)
    }))), /*#__PURE__*/React.createElement("circle", {
      r: r,
      fill: `url(#cx-sph-${n.id})`,
      stroke: isFocus ? '#b85a2c' : isSel || isHover ? '#d6c9a8' : 'rgba(20,16,13,0.85)',
      strokeWidth: isFocus || isSel ? 2 : isHover ? 1.5 : 1
    }), n.stub && /*#__PURE__*/React.createElement("circle", {
      r: "3",
      cx: r * 0.55,
      cy: -r * 0.55,
      fill: "#c9a227",
      stroke: "rgba(0,0,0,0.5)",
      strokeWidth: "0.5"
    }), /*#__PURE__*/React.createElement("text", {
      y: r + 16,
      textAnchor: "middle",
      fill: isFocus || isSel || isHover ? 'var(--fg-1)' : 'var(--fg-2)',
      fontSize: Math.max(9, 11.5 * Math.max(0.7, p.scale * 0.8)),
      fontFamily: "var(--font-serif)",
      style: {
        fontWeight: isFocus ? 700 : 500,
        pointerEvents: 'none'
      }
    }, n.name), /*#__PURE__*/React.createElement("text", {
      y: r + 28,
      textAnchor: "middle",
      fill: "var(--fg-3)",
      fontSize: "9.5",
      fontFamily: "var(--font-mono)",
      style: {
        letterSpacing: 0.5,
        pointerEvents: 'none'
      }
    }, palette.label.toLowerCase()));
  }), /*#__PURE__*/React.createElement("g", {
    transform: `translate(${W - 80}, 60)`,
    className: "cx-compass"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "36",
    fill: "rgba(14,11,9,0.85)",
    stroke: "rgba(214,201,168,0.2)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "-30",
    x2: "0",
    y2: "30",
    stroke: "rgba(214,201,168,0.25)",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "-30",
    y1: "0",
    x2: "30",
    y2: "0",
    stroke: "rgba(214,201,168,0.25)",
    strokeWidth: "0.5"
  }), /*#__PURE__*/React.createElement("g", {
    transform: `rotate(${cam.yaw * 180 / Math.PI})`
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "-26",
    stroke: "#b85a2c",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,-30 -3,-22 3,-22",
    fill: "#b85a2c"
  })), /*#__PURE__*/React.createElement("text", {
    y: "48",
    textAnchor: "middle",
    fill: "var(--fg-3)",
    fontSize: "9",
    fontFamily: "var(--font-mono)"
  }, Math.round(cam.yaw * 180 / Math.PI), "\xB0 \xB7 ", Math.round(cam.pitch * 180 / Math.PI), "\xB0")), /*#__PURE__*/React.createElement("g", {
    transform: "translate(16, 16)",
    className: "rw-legend"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "190",
    height: "148",
    rx: "6",
    fill: "rgba(14,11,9,0.85)",
    stroke: "rgba(214,201,168,0.15)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "20",
    fill: "var(--fg-3)",
    fontSize: "9.5",
    fontFamily: "var(--font-sans)",
    style: {
      letterSpacing: 2,
      fontWeight: 600
    }
  }, "ENTITIES"), Object.entries(CX_ENTITY_PALETTE).map(([id, p], i) => /*#__PURE__*/React.createElement("g", {
    key: id,
    transform: `translate(12, ${36 + i * 12})`
  }, /*#__PURE__*/React.createElement("circle", {
    r: "3.5",
    cx: "4",
    cy: "-3",
    fill: p.color
  }), /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "0",
    fill: "var(--fg-2)",
    fontSize: "10.5",
    fontFamily: "var(--font-serif)"
  }, p.label)))), /*#__PURE__*/React.createElement("g", {
    transform: `translate(16, ${H - 76})`,
    className: "cx-help"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "320",
    height: "60",
    rx: "6",
    fill: "rgba(14,11,9,0.85)",
    stroke: "rgba(214,201,168,0.15)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "20",
    fill: "var(--fg-3)",
    fontSize: "9.5",
    fontFamily: "var(--font-sans)",
    style: {
      letterSpacing: 2,
      fontWeight: 600
    }
  }, "CONTROLS"), /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "36",
    fill: "var(--fg-2)",
    fontSize: "11",
    fontFamily: "var(--font-serif)"
  }, "drag space \u2014 orbit \xB7 drag node \u2014 pull through web"), /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "50",
    fill: "var(--fg-2)",
    fontSize: "11",
    fontFamily: "var(--font-serif)"
  }, "scroll \u2014 zoom \xB7 dbl-click node \u2014 open entry"))));
}

// Lighten/darken a hex colour by `amt` (range -1..1).
function shade(hex, amt) {
  const c = hex.replace('#', '');
  const num = parseInt(c, 16);
  let r = num >> 16 & 0xff,
    g = num >> 8 & 0xff,
    b = num & 0xff;
  const adj = x => Math.max(0, Math.min(255, Math.round(x + 255 * amt)));
  r = adj(r);
  g = adj(g);
  b = adj(b);
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

// ─── Matrix surface (unchanged from 2D) ────────────────────────
function MatrixSurface({
  nodes,
  visibleNodeIds,
  visibleEdges
}) {
  const visible = nodes.filter(n => visibleNodeIds.has(n.id));
  const byPair = useMemo(() => {
    const m = new Map();
    for (const e of visibleEdges) m.set(e.s + '|' + e.t, e);
    return m;
  }, [visibleEdges]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-matrix-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "rw-matrix"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "rw-mx-corner"
  }, "source \u2572 target"), visible.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.id,
    className: "rw-mx-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-mx-coltext"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-mx-dot",
    style: {
      background: CX_ENTITY_PALETTE[c.type].color
    }
  }), c.name))))), /*#__PURE__*/React.createElement("tbody", null, visible.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("th", {
    className: "rw-mx-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-mx-dot",
    style: {
      background: CX_ENTITY_PALETTE[r.type].color
    }
  }), r.name), visible.map(c => {
    if (r.id === c.id) return /*#__PURE__*/React.createElement("td", {
      key: c.id,
      className: "rw-mx-self"
    });
    const e = byPair.get(r.id + '|' + c.id);
    if (!e) return /*#__PURE__*/React.createElement("td", {
      key: c.id,
      className: "rw-mx-empty"
    });
    const t = CX_TYPE_MAP[e.type];
    return /*#__PURE__*/React.createElement("td", {
      key: c.id,
      className: "rw-mx-cell",
      style: {
        background: t.color + '38',
        borderColor: t.color
      },
      title: `${t.label} · score ${e.score > 0 ? '+' : ''}${e.score}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "rw-mx-score"
    }, e.score > 0 ? '+' : '', e.score), /*#__PURE__*/React.createElement("span", {
      className: "rw-mx-type",
      style: {
        color: t.color
      }
    }, t.label));
  }))))));
}

// ─── Entry overlay (opens on node dbl-click) ───────────────────
function EntryOverlay({
  node,
  edges,
  kinship,
  wikilinks,
  nodes,
  onClose,
  onFocus,
  onPickNeighbor
}) {
  if (!node) return null;
  const palette = CX_ENTITY_PALETTE[node.type];
  const nodeMap = useMemo(() => Object.fromEntries(nodes.map(n => [n.id, n])), [nodes]);

  // Outgoing / incoming typed edges
  const outgoing = edges.filter(e => e.s === node.id);
  const incoming = edges.filter(e => e.t === node.id);
  const kinEdges = kinship.filter(e => e.s === node.id || e.t === node.id);
  const wikiEdges = wikilinks.filter(e => e.s === node.id || e.t === node.id);

  // Aggregate per-type counts
  const typeBreakdown = useMemo(() => {
    const m = {};
    for (const e of [...outgoing, ...incoming]) m[e.type] = (m[e.type] || 0) + 1;
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  }, [outgoing, incoming]);

  // Score average
  const allTyped = [...outgoing, ...incoming];
  const avgScore = allTyped.length ? Math.round(allTyped.reduce((a, e) => a + e.score, 0) / allTyped.length) : null;
  const sentimentDot = avgScore == null ? '·' : avgScore > 20 ? '+' : avgScore < -20 ? '−' : '·';
  const sentimentColor = avgScore == null ? '#8aa0ab' : avgScore > 20 ? '#5fa394' : avgScore < -20 ? '#c43a4e' : '#8aa0ab';

  // Esc to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  function NeighborRow({
    otherId,
    label,
    color,
    score,
    dir
  }) {
    const other = nodeMap[otherId];
    if (!other) return null;
    const otherPal = CX_ENTITY_PALETTE[other.type];
    return /*#__PURE__*/React.createElement("li", {
      className: "cx-ov-edge",
      onClick: () => onPickNeighbor(otherId)
    }, /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-edge-bar",
      style: {
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-edge-dir"
    }, dir), /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-edge-name"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-ent-dot",
      style: {
        background: otherPal.color
      }
    }), other.name), /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-edge-type",
      style: {
        color
      }
    }, label), score != null && /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-edge-score",
      style: {
        color: score > 0 ? '#5fa394' : score < 0 ? '#c43a4e' : '#8aa0ab'
      }
    }, score > 0 ? '+' : '', score));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-card",
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cx-ov-close",
    onClick: onClose,
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("header", {
    className: "cx-ov-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-crest",
    style: {
      background: `radial-gradient(circle at 35% 30%, ${shade(palette.color, 0.3)} 0%, ${palette.color} 50%, ${shade(palette.color, -0.5)} 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-headtext"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow cx-ov-eye"
  }, palette.label, node.stub && /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stub-tag"
  }, "stub")), /*#__PURE__*/React.createElement("h2", {
    className: "cx-ov-name"
  }, node.name), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-tags"
  }, node.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "cx-ov-tag"
  }, "#", t))))), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-num"
  }, outgoing.length + incoming.length), /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-lbl"
  }, "typed edges")), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-num",
    style: {
      color: sentimentColor
    }
  }, sentimentDot, avgScore != null && ` ${avgScore > 0 ? '+' : ''}${avgScore}`), /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-lbl"
  }, "avg sentiment")), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-num"
  }, kinEdges.length), /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-lbl"
  }, "kinship")), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-num"
  }, wikiEdges.length), /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-stat-lbl"
  }, "wiki-links"))), typeBreakdown.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "cx-ov-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Relationship mix")), /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-mix"
  }, typeBreakdown.map(([typeId, count]) => {
    const t = CX_TYPE_MAP[typeId];
    return /*#__PURE__*/React.createElement("span", {
      key: typeId,
      className: "cx-ov-mix-chip"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-mix-bar",
      style: {
        background: t.color
      }
    }), /*#__PURE__*/React.createElement("span", null, t.label), /*#__PURE__*/React.createElement("span", {
      className: "cx-ov-mix-count"
    }, count));
  }))), (outgoing.length > 0 || incoming.length > 0) && /*#__PURE__*/React.createElement("section", {
    className: "cx-ov-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Typed edges \xB7 ", outgoing.length + incoming.length), /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-sec-hint"
  }, "click a neighbour to walk the web")), /*#__PURE__*/React.createElement("ul", {
    className: "cx-ov-edge-list"
  }, outgoing.map((e, i) => {
    const t = CX_TYPE_MAP[e.type];
    return /*#__PURE__*/React.createElement(NeighborRow, {
      key: `out-${i}`,
      otherId: e.t,
      label: t.label,
      color: t.color,
      score: e.score,
      dir: "\u2192"
    });
  }), incoming.map((e, i) => {
    const t = CX_TYPE_MAP[e.type];
    return /*#__PURE__*/React.createElement(NeighborRow, {
      key: `in-${i}`,
      otherId: e.s,
      label: t.label,
      color: t.color,
      score: e.score,
      dir: "\u2190"
    });
  }))), kinEdges.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "cx-ov-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Kinship \xB7 ", kinEdges.length)), /*#__PURE__*/React.createElement("ul", {
    className: "cx-ov-edge-list"
  }, kinEdges.map((e, i) => {
    const otherId = e.s === node.id ? e.t : e.s;
    const dir = e.s === node.id ? '→' : '←';
    return /*#__PURE__*/React.createElement(NeighborRow, {
      key: `kin-${i}`,
      otherId: otherId,
      label: e.label,
      color: "#8aa0ab",
      dir: dir
    });
  }))), wikiEdges.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "cx-ov-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cx-ov-sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Wiki-links \xB7 ", wikiEdges.length)), /*#__PURE__*/React.createElement("ul", {
    className: "cx-ov-edge-list"
  }, wikiEdges.map((e, i) => {
    const otherId = e.s === node.id ? e.t : e.s;
    const dir = e.s === node.id ? '→' : '←';
    return /*#__PURE__*/React.createElement(NeighborRow, {
      key: `wl-${i}`,
      otherId: otherId,
      label: "reference",
      color: "#5a5650",
      dir: dir
    });
  }))), /*#__PURE__*/React.createElement("footer", {
    className: "cx-ov-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary cx-ov-action",
    onClick: () => onFocus(node.id)
  }, "Focus 2-hop subgraph"), /*#__PURE__*/React.createElement("button", {
    className: "cx-ov-action cx-ov-action-ghost"
  }, "Open editor \u2192"), /*#__PURE__*/React.createElement("span", {
    className: "gt-bar-spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cx-ov-foot-hint"
  }, "Esc to close \xB7 click outside to dismiss"))));
}
window.ConnectionsGraph = ConnectionsGraph;
// Alias for backward-compat (the sidebar nav id is being swapped).
window.RelationshipsWeb = ConnectionsGraph;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/ConnectionsGraph.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/EntryCard.jsx
try { (() => {
/* global React */

function EntryCard({
  entry,
  focused,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "mim-entry" + (focused ? " is-focused" : ""),
    style: {
      "--entry-c": entry.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-entry-thumb"
  }, entry.thumb && /*#__PURE__*/React.createElement("img", {
    src: entry.thumb,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "mim-entry-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-entry-eye"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-entry-dot"
  }), entry.type, entry.faction ? ` · ${entry.faction}` : ""), /*#__PURE__*/React.createElement("h3", {
    className: "mim-entry-title"
  }, entry.name), entry.aliases && /*#__PURE__*/React.createElement("p", {
    className: "mim-entry-aliases"
  }, entry.aliases), /*#__PURE__*/React.createElement("p", {
    className: "mim-entry-snippet"
  }, entry.snippet), /*#__PURE__*/React.createElement("div", {
    className: "mim-entry-meta"
  }, entry.status && /*#__PURE__*/React.createElement("span", {
    className: "mim-entry-tag"
  }, entry.status), /*#__PURE__*/React.createElement("span", {
    className: "mim-entry-tag"
  }, "\u21B3 ", entry.links, " links"), /*#__PURE__*/React.createElement("span", {
    className: "mim-entry-tag"
  }, "edited ", entry.edited))));
}
window.EntryCard = EntryCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/EntryCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/EntryView.jsx
try { (() => {
/* global React */

// Per-type frontmatter, links and timeline. Keeps the same visual structure
// (left rail = frontmatter, centre = prose, right rail = links + mini-timeline)
// but swaps content so each entry kind reads naturally.
const TYPE_PROFILES = {
  Character: {
    idPrefix: "char",
    front: [["born", "3rd Yr. of the Long Frost"], ["died", "—"], ["father", {
      link: "Ulf the Wolf-Father"
    }], ["mother", {
      link: "Hilda Steel-Eye"
    }], ["faction", {
      fromEntry: "faction"
    }], ["seat", {
      link: "Caernarfon"
    }], ["banner", "Black wolf, ember field"]],
    conflict: e => `Ulf has no record of ${e.name.split(" ")[0]} as a child. Resolve?`,
    links: [{
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#d99366",
      t: "Hilda Steel-Eye"
    }, {
      c: "#7da265",
      t: "Caernarfon"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }, {
      c: "#8d8478",
      t: "Burning of Hellas"
    }, {
      c: "#a8814d",
      t: "The wolf-banner"
    }],
    timeline: [{
      yr: "Yr 3",
      ev: "Born at Caernarfon"
    }, {
      yr: "Yr 18",
      ev: "Takes the oath"
    }, {
      yr: "Yr 26",
      ev: "Crown at Caernarfon",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Treaty of Avalon"
    }]
  },
  Place: {
    idPrefix: "place",
    front: [["type", {
      fromEntry: "faction"
    }], ["region", "Northern reaches"], ["coordinates", "53° 14' N · 4° 16' W"], ["founded", "Yr — (before reckoning)"], ["destroyed", "—"], ["inhabitants", {
      link: "Hornfolke"
    }], ["governs", {
      link: "Iron Crown"
    }]],
    conflict: () => "Two sources name this place; the Treaty calls it 'Caer-na-Carn'. Reconcile?",
    links: [{
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#a07cc8",
      t: "Hornfolke"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }, {
      c: "#8d8478",
      t: "The Long War"
    }],
    timeline: [{
      yr: "Before",
      ev: "Founded by the first jarls"
    }, {
      yr: "Yr 3",
      ev: "Sigrun born here"
    }, {
      yr: "Yr 23",
      ev: "Standard raised",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Treaty signed at the gate"
    }]
  },
  Faction: {
    idPrefix: "faction",
    front: [["type", "Confederation"], ["seat", {
      link: "Caernarfon"
    }], ["leader", {
      link: "Sigrun Ulfsdottir"
    }], ["culture", {
      link: "Hornfolke"
    }], ["founded", "Yr 14 — Long Frost"], ["members", "Seven jarldoms · three fallen"], ["banner", "Black wolf, ember field"]],
    conflict: () => "Membership list disagrees with the Treaty witnesses. Resolve?",
    links: [{
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#7da265",
      t: "Caernarfon"
    }, {
      c: "#a07cc8",
      t: "Hornfolke"
    }, {
      c: "#a8814d",
      t: "The Iron Crown (relic)"
    }],
    timeline: [{
      yr: "Yr 14",
      ev: "Founded by Ulf"
    }, {
      yr: "Yr 18",
      ev: "Seven oaths sworn"
    }, {
      yr: "Yr 23",
      ev: "Crown passes to Sigrun",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Treaty of Avalon"
    }]
  },
  Culture: {
    idPrefix: "culture",
    front: [["primary species", {
      link: "Human"
    }], ["region", {
      link: "Petty Kingdoms"
    }], ["government", "Tribal kingdoms"], ["religion", "Norse gods · ancestor-spirits"], ["parent culture", {
      link: "The Winter Kings"
    }], ["language", {
      link: "Low Speech"
    }]],
    conflict: () => "Schema asks for a parent culture; the elder branch is contested.",
    links: [{
      c: "#7da265",
      t: "Petty Kingdoms"
    }, {
      c: "#a07cc8",
      t: "The Winter Kings"
    }, {
      c: "#8aa0ab",
      t: "Low Speech"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }],
    timeline: [{
      yr: "Before",
      ev: "Splits from the Winter Kings"
    }, {
      yr: "Yr 3",
      ev: "First sea-raids south"
    }, {
      yr: "Yr 23",
      ev: "Iron Crown forged",
      now: true
    }]
  },
  Event: {
    idPrefix: "event",
    front: [["date", {
      fromEntry: "faction"
    }], ["location", {
      link: "Hellas"
    }], ["type", "War · turning"], ["caused by", {
      link: "The Long War"
    }], ["participants", {
      link: "Sigrun Ulfsdottir"
    }], ["outcome", "Decisive — crown passes"]],
    conflict: () => "Year disagrees by one between the Hornfolke and Kernow reckonings.",
    links: [{
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#7da265",
      t: "Hellas"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }],
    timeline: [{
      yr: "Yr 22",
      ev: "Long war turns south"
    }, {
      yr: "Yr 23",
      ev: "The event itself",
      now: true
    }, {
      yr: "Yr 23",
      ev: "Crown passes to Sigrun"
    }, {
      yr: "Yr 31",
      ev: "Treaty of Avalon"
    }]
  },
  Language: {
    idPrefix: "lang",
    front: [["status", "Living"], ["speakers", "Dragons · descendants of Nidhoggr"], ["registers", "High · Low · Void"], ["script", "Latin (no native script)"], ["inspirations", "Welsh, Old Norse"], ["translator", "Enabled"]],
    conflict: () => "Naming rules are not yet formalised; consistency may vary.",
    links: [{
      c: "#d99366",
      t: "Nidhoggr"
    }, {
      c: "#a07cc8",
      t: "The Dragon-kin"
    }, {
      c: "#c9a227",
      t: "Runadhrimir (related)"
    }, {
      c: "#6b89c2",
      t: "Void-speech rites"
    }],
    timeline: [{
      yr: "Before",
      ev: "Spoken before the first dawn"
    }, {
      yr: "Age I",
      ev: "Taught to the first riders"
    }, {
      yr: "Now",
      ev: "Living — three registers",
      now: true
    }]
  },
  Spell: {
    idPrefix: "spell",
    front: [["caster", "Skald · rune-bearer"], ["medium", "Voice + birch-bark"], ["components", "3 runes, 3 drops, 1 true name"], ["duration", "One crossing"], ["cost", "The caster's voice, equal in days"], ["taught by", {
      link: "Njordr"
    }]],
    conflict: () => "Effect verified by 1 source; second account contradicts the cost.",
    links: [{
      c: "#d99366",
      t: "Njordr"
    }, {
      c: "#c9a227",
      t: "Isa — Stillness"
    }, {
      c: "#a8814d",
      t: "Mímir's Horn"
    }, {
      c: "#8aa0ab",
      t: "Runadhrimir"
    }],
    timeline: [{
      yr: "Age I",
      ev: "Taught at the well"
    }, {
      yr: "Yr 12",
      ev: "First written down"
    }, {
      yr: "Yr 26",
      ev: "Used at the crossing",
      now: true
    }]
  },
  Rune: {
    idPrefix: "rune",
    front: [["row", "Elder — first row"], ["glyph", "ᚠ"], ["meaning", "Cattle · wealth · the open hand"], ["element", "Earth · hearth"], ["god", {
      link: "Freyr"
    }], ["used in", {
      link: "The Iron Oath"
    }]],
    conflict: () => "Reversed reading is attested in 2 sources, denied in a third.",
    links: [{
      c: "#d99366",
      t: "Freyr"
    }, {
      c: "#6b89c2",
      t: "The Iron Oath"
    }, {
      c: "#a8814d",
      t: "The Iron Crown (relic)"
    }, {
      c: "#8aa0ab",
      t: "Runadhrimir"
    }],
    timeline: [{
      yr: "Before",
      ev: "Cut by the first scribe"
    }, {
      yr: "Age I",
      ev: "Joined to the elder row"
    }, {
      yr: "Yr 23",
      ev: "Set inside the Iron Crown",
      now: true
    }]
  },
  Artefact: {
    idPrefix: "art",
    front: [["type", "Relic · regalia"], ["materials", "Black iron, prow-nails of seven ships"], ["creator", {
      link: "Ulf the Wolf-Father"
    }], ["created", "Yr 14 — Long Frost"], ["holder", {
      link: "Sigrun Ulfsdottir"
    }], ["location", {
      link: "Caernarfon"
    }], ["inscription", {
      link: "Tiwaz"
    }]],
    conflict: () => "Provenance disputed: a Kernow source claims Bran's smith forged it.",
    links: [{
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#7da265",
      t: "Caernarfon"
    }, {
      c: "#c9a227",
      t: "Tiwaz — God-Spear"
    }, {
      c: "#c43a4e",
      t: "Iron Crown (faction)"
    }],
    timeline: [{
      yr: "Yr 14",
      ev: "Forged by Ulf"
    }, {
      yr: "Yr 18",
      ev: "First worn at the oath-ring"
    }, {
      yr: "Yr 23",
      ev: "Passes to Sigrun",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Worn at Avalon"
    }]
  }
};

// Type-keyed prose for the entry body. Two H2 sections each, written in the
// same Mimir voice as the original Sigrun text.
const TYPE_PROSE = {
  Character: e => ({
    lead: `Daughter of Ulf, jarl of Caernarfon, born in the third year of the Long Frost. She took the oath at fifteen and the crown at twenty-three, after her father fell at the burning of Hellas.`,
    sections: [{
      h: "The early years",
      p: `${e.name.split(" ")[0]} was raised in the great hall at Caernarfon, set apart from her brothers by her father's quiet insistence that she sit at every council. She learned the seven oaths before she could ride, and could read three runes by her seventh winter — gifts of the scribe Eorl, who came south with the first ships.`
    }, {
      h: "The taking of the crown",
      p: `When the longships came up the Caernarfon estuary in the spring of the third year, ${e.name.split(" ")[0]} was the first into the water. Her father had been dead nine days; the crown was hers by oath and by sword both, and she would later say she remembered nothing of that morning except the cold.`
    }]
  }),
  Place: e => ({
    lead: `${e.name} sits where the old roads meet the cold sea. It has been a hall, a market, a refuge, and twice a graveyard, and the stones know which is which.`,
    sections: [{
      h: "The lay of the land",
      p: `Three rivers feed the bay below the keep, and one of them — the Carn — runs warm even in the deepest frost. The townspeople will tell you it is the breath of a sleeping giant; the scribes will tell you it is a hot spring. They are not in disagreement.`
    }, {
      h: "Who keeps it",
      p: `The hall is held now by the Iron Crown, but the older stones underneath the keep are older than the Crown by a thousand winters. Whoever sits the high seat sits on top of someone else's bones, and the people of ${e.name} are not shy about reminding them.`
    }]
  }),
  Faction: e => ({
    lead: `${e.name} was not born; it was sworn into being. Seven jarls, one circle of black iron, and the long winter of the third year — that is the whole of its founding.`,
    sections: [{
      h: "The seven oaths",
      p: `Each jarl swore on a single iron link: not for the crown, not for the war, not for the gold, but for the next jarl in the ring. The oaths are remembered in this order, and broken in the same order — when one falls, the next must answer for him.`
    }, {
      h: "The shape of it now",
      p: `Of the seven, three are dead and one is missing. The Crown holds, but the iron grows thin where the oaths once sat. Sigrun has not yet replaced any of the fallen; the others suspect she will not, and that suspicion is the first crack in the ring.`
    }]
  }),
  Culture: e => ({
    lead: `The ${e.name} are not one people but a habit of being a people: a way of reckoning the year, a way of sitting at the fire, a way of saying yes that means no.`,
    sections: [{
      h: "The reckoning",
      p: `They count the year in frosts, not in months. Each frost is named for the dead it took: the Cold-of-Asgeir, the Cold-of-the-Long-Hall, the Cold-of-No-One — that last one is the year nobody died, and it is the only one feared.`
    }, {
      h: "The threshold",
      p: `A guest is sworn to the door, not the host. To cross the threshold is to be one of the household for the duration of the meal; to leave it is to be a stranger again. This is why the bargaining is always done outside.`
    }]
  }),
  Event: e => ({
    lead: `${e.name} is the day everything afterwards is reckoned from. Before it, there were many small wars; after it, only one — and only one ending.`,
    sections: [{
      h: "The morning of",
      p: `The fleet had been at anchor for nine nights. The wind turned at dawn and they were inside the harbour wall before the watch could light the second beacon. By the time the first horn sounded the keep was already taking water from the burning ships.`
    }, {
      h: "What was lost",
      p: `Three jarls, two ships, and the older of the two libraries. The Crown remembers the jarls; the smaller library was the one that mattered, and only the Crown knows that.`
    }]
  }),
  Language: e => ({
    lead: `${e.name} is not a tongue you learn so much as a tongue you submit to. Its grammar prefers the powerful; its vocabulary prefers the inevitable.`,
    sections: [{
      h: "The three registers",
      p: `High Speech is for declarations: prophecies, claims, the names of gods. Low Speech is for everything that must be said to a lesser thing — short, direct, cruel. Void-speech is for the ritual: timeless, abstract, never with a clear subject.`
    }, {
      h: "What cannot be said",
      p: `There are no native words for apology, for begging, for uncertainty. To translate "I am sorry" into ${e.name} is to translate it as "I have erred — and I will repair." Politeness is a foreign idea, and the language treats it as one.`
    }]
  }),
  Spell: e => ({
    lead: `${e.name} is a small rite, written down in three lines and remembered in three more. It is not powerful by itself; it is powerful when the moment is.`,
    sections: [{
      h: "The casting",
      p: `Three runes scored into birch bark, three drops of the caster's blood, and the true name of the thing being asked spoken once into the wind. The runes are burned afterwards. To keep them is to keep the bargain open, and the bargain prefers to close.`
    }, {
      h: "The cost",
      p: `The caster pays in voice, day for day with the asking. A small spell takes a morning; a long one can take a winter. Skalds will not take this rite, and that is how you know they understand it.`
    }]
  }),
  Rune: e => ({
    lead: `${e.name} is a single mark and a long argument. Each cut is the same; each meaning is what the cutter brings to it.`,
    sections: [{
      h: "The cut",
      p: `The stroke is made downward and finished without lifting the knife. If the knife lifts, the rune is unfinished — and an unfinished rune is read as a question, not an answer. Skalds read questions only when paid.`
    }, {
      h: "The reversed reading",
      p: `Cut backwards, the rune means its opposite, but only if the cutter intended it. Intent is the difference between a misspelling and a curse, and it is read by the gods, not by the reader.`
    }]
  }),
  Artefact: e => ({
    lead: `${e.name} is older than its current keeper, which is the only thing that matters about an artefact: not who holds it now, but how many have held it before.`,
    sections: [{
      h: "The making",
      p: `Forged by Ulf in the deep of the Long Frost, from the prow-nails of the seven first ships. Beaten cold, never heated — the iron is said to have remembered the sea ever since, and to grow heaviest at the turn of the tide.`
    }, {
      h: "The bearing of it",
      p: `It is worn at council, at oath-ring, and at funerals — never at war. To take it into a battle is to admit the battle decides everything; the Crown's whole point is that the oath does. So far, no Crown-holder has worn it into the field. Sigrun has been asked, and refused, twice.`
    }]
  })
};
function FrontField({
  label,
  value
}) {
  if (value && typeof value === "object" && value.link) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", {
      className: "mim-link"
    }, value.link));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", null, value));
}
function EntryView({
  entry,
  onClose,
  onAsk
}) {
  if (!entry) return null;
  const profile = TYPE_PROFILES[entry.type] || TYPE_PROFILES.Character;
  const proseFn = TYPE_PROSE[entry.type] || TYPE_PROSE.Character;
  const prose = proseFn(entry);

  // Resolve {fromEntry: 'faction'} field references against the current entry.
  const front = profile.front.map(([label, raw]) => {
    let v = raw;
    if (v && typeof v === "object" && v.fromEntry) v = entry[v.fromEntry] || "—";
    return [label, v];
  });
  return /*#__PURE__*/React.createElement("article", {
    className: "mim-entryview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-back"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-ghost",
    onClick: onClose
  }, "\u2190 back to library"), /*#__PURE__*/React.createElement("span", {
    className: "mim-ev-id"
  }, `${profile.idPrefix}_${entry.id}`)), /*#__PURE__*/React.createElement("header", {
    className: "mim-ev-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: entry.thumb,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow",
    style: {
      color: entry.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: entry.color,
      marginRight: 8,
      verticalAlign: "middle"
    }
  }), entry.type, entry.faction ? ` · ${entry.faction}` : ""), /*#__PURE__*/React.createElement("h1", {
    className: "mim-ev-title"
  }, entry.name), entry.aliases && /*#__PURE__*/React.createElement("p", {
    className: "mim-ev-aliases"
  }, entry.aliases), /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-tag"
  }, entry.status || "stub"), /*#__PURE__*/React.createElement("span", {
    className: "mim-tag"
  }, "\u21B3 ", entry.links, " links"), /*#__PURE__*/React.createElement("span", {
    className: "mim-tag"
  }, "edited ", entry.edited))), /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-secondary"
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary",
    onClick: onAsk
  }, "Ask Mimir"))), /*#__PURE__*/React.createElement("hr", {
    className: "ms-rule mim-ev-rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "mim-ev-front"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Frontmatter"), /*#__PURE__*/React.createElement("dl", {
    className: "mim-ev-dl"
  }, /*#__PURE__*/React.createElement("dt", null, "id"), /*#__PURE__*/React.createElement("dd", null, `${profile.idPrefix}_${entry.id}`), front.map(([label, value], i) => /*#__PURE__*/React.createElement(FrontField, {
    key: i,
    label: label,
    value: value
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-validate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow",
    style: {
      color: "#d6735c"
    }
  }, "Conflict"), /*#__PURE__*/React.createElement("p", {
    className: "mim-ev-validate-msg"
  }, profile.conflict(entry)))), /*#__PURE__*/React.createElement("div", {
    className: "mim-ev-prose"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mim-prose-lead"
  }, prose.lead), prose.sections.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mim-prose-h2"
  }, s.h), /*#__PURE__*/React.createElement("p", null, s.p)))), /*#__PURE__*/React.createElement("aside", {
    className: "mim-ev-links"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Links"), /*#__PURE__*/React.createElement("ul", {
    className: "mim-ev-linklist"
  }, profile.links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-ev-link-dot",
    style: {
      background: l.c
    }
  }), l.t))), /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow",
    style: {
      marginTop: 18,
      display: "block"
    }
  }, "In timeline"), /*#__PURE__*/React.createElement("div", {
    className: "mim-tl"
  }, profile.timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mim-tl-row" + (t.now ? " mim-tl-now" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-tl-yr"
  }, t.yr), /*#__PURE__*/React.createElement("span", {
    className: "mim-tl-evt"
  }, t.ev)))))));
}
window.EntryView = EntryView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/EntryView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/ExportEngine.jsx
try { (() => {
/* global React, MIM_ENTRIES, MIM_TYPE_COLOR */
const {
  useState: useStateExp,
  useMemo: useMemoExp
} = React;

// Targets the writer can hand the bundle to. The Lorekeeper bundle today
// is markdown + manifest + images; engines below are surfaced as presets
// that map the bundle into engine-native tables / data assets.
const EXPORT_TARGETS = [{
  id: "folder",
  name: "Bundle to folder",
  sub: "Markdown + frontmatter + manifest.json",
  icon: "📁"
}, {
  id: "unreal",
  name: "Unreal — DataTable",
  sub: "DT_Lore.* + UAssets · UE 5.4+",
  icon: "U"
}, {
  id: "unity",
  name: "Unity — ScriptableObject",
  sub: "LoreEntry.asset · Unity 2022+",
  icon: "▣"
}, {
  id: "godot",
  name: "Godot — Resource",
  sub: ".tres files · Godot 4",
  icon: "◆"
}, {
  id: "json",
  name: "Plain JSON",
  sub: "One file per type · UTF-8",
  icon: "{}"
}];
const TYPES = [{
  id: "Character",
  folder: "characters"
}, {
  id: "Place",
  folder: "places"
}, {
  id: "Faction",
  folder: "factions"
}, {
  id: "Culture",
  folder: "cultures"
}, {
  id: "Event",
  folder: "events"
}, {
  id: "Language",
  folder: "languages"
}, {
  id: "Spell",
  folder: "spells"
}, {
  id: "Rune",
  folder: "runes"
}, {
  id: "Artefact",
  folder: "artefacts"
}];
const SPOILER_LEVELS = [{
  id: "public",
  label: "Public",
  sub: "Safe for players & wiki"
}, {
  id: "draft",
  label: "Draft",
  sub: "Public + work-in-progress"
}, {
  id: "all",
  label: "All",
  sub: "Including spoilers & GM notes"
}];
function ExportEngine({
  onClose
}) {
  const entries = window.MIM_ENTRIES || [];
  const [target, setTarget] = useStateExp("folder");
  const [dest, setDest] = useStateExp("/Worlds/Shieldwall/_export");
  const [spoiler, setSpoiler] = useStateExp("public");
  const [includeImages, setIncludeImages] = useStateExp(true);
  const [stripStubs, setStripStubs] = useStateExp(false);
  const [resolveLinks, setResolveLinks] = useStateExp(true);
  const [emitManifest, setEmitManifest] = useStateExp(true);
  const [enabled, setEnabled] = useStateExp(() => new Set(TYPES.map(t => t.id)));
  function toggleType(id) {
    setEnabled(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  }

  // Counts per type, before/after filters
  const counts = useMemoExp(() => {
    const out = {};
    for (const t of TYPES) {
      const all = entries.filter(e => e.type === t.id);
      const kept = all.filter(e => {
        if (stripStubs && e.status === "stub") return false;
        return true;
      });
      out[t.id] = {
        total: all.length,
        kept: kept.length
      };
    }
    return out;
  }, [entries, stripStubs]);

  // Visible export plan
  const plan = useMemoExp(() => {
    const lines = [];
    const dropped = [];
    let totalKept = 0,
      totalDropped = 0;
    for (const t of TYPES) {
      const c = counts[t.id];
      if (!enabled.has(t.id)) {
        totalDropped += c.total;
        dropped.push({
          type: t.id,
          n: c.total,
          why: "type disabled"
        });
        continue;
      }
      lines.push({
        type: t.id,
        folder: t.folder,
        n: c.kept
      });
      totalKept += c.kept;
      if (c.kept < c.total) {
        totalDropped += c.total - c.kept;
        dropped.push({
          type: t.id,
          n: c.total - c.kept,
          why: stripStubs ? "stub status" : "filter"
        });
      }
    }
    return {
      lines,
      dropped,
      totalKept,
      totalDropped
    };
  }, [counts, enabled, stripStubs]);
  const target_ = EXPORT_TARGETS.find(t => t.id === target);

  // Manifest preview (synthetic — what the writer would emit)
  const manifest = {
    world: "shieldwall-saga",
    target: target,
    exported_at: "2026-05-07T14:22:00Z",
    spoiler_level: spoiler,
    counts: Object.fromEntries(plan.lines.map(l => [l.type.toLowerCase(), l.n])),
    images_included: includeImages,
    links_resolved: resolveLinks,
    schema_version: "stage-32"
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "exp"
  }, /*#__PURE__*/React.createElement("header", {
    className: "exp-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Tool \u2014 bundle for the engine"), /*#__PURE__*/React.createElement("h1", {
    className: "exp-title"
  }, "Export to engine"), /*#__PURE__*/React.createElement("p", {
    className: "exp-sub"
  }, "Take the world out of Mimir and into the game. Choose a target, pick what travels, and the writer will assemble the bundle.")), /*#__PURE__*/React.createElement("div", {
    className: "exp-head-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-head-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-key"
  }, "World"), /*#__PURE__*/React.createElement("span", {
    className: "exp-val"
  }, "Shieldwall Saga")), /*#__PURE__*/React.createElement("div", {
    className: "exp-head-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-key"
  }, "Schema"), /*#__PURE__*/React.createElement("span", {
    className: "exp-val"
  }, "stage-32")), /*#__PURE__*/React.createElement("div", {
    className: "exp-head-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-key"
  }, "Last export"), /*#__PURE__*/React.createElement("span", {
    className: "exp-val"
  }, "5 days ago \xB7 folder")))), /*#__PURE__*/React.createElement("div", {
    className: "exp-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-col"
  }, /*#__PURE__*/React.createElement("section", {
    className: "exp-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "i. Target"), /*#__PURE__*/React.createElement("div", {
    className: "exp-targets"
  }, EXPORT_TARGETS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "exp-target" + (target === t.id ? " is-on" : ""),
    onClick: () => setTarget(t.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-target-glyph"
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    className: "exp-target-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-target-name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "exp-target-sub"
  }, t.sub)), /*#__PURE__*/React.createElement("span", {
    className: "exp-target-radio"
  }, /*#__PURE__*/React.createElement("span", null)))))), /*#__PURE__*/React.createElement("section", {
    className: "exp-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "ii. Destination"), /*#__PURE__*/React.createElement("div", {
    className: "exp-path"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-path-glyph"
  }, "\u25B8"), /*#__PURE__*/React.createElement("input", {
    className: "exp-path-input",
    value: dest,
    onChange: e => setDest(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-secondary"
  }, "Choose\u2026")), /*#__PURE__*/React.createElement("p", {
    className: "exp-hint"
  }, "The writer will create this folder if it does not exist. A previous bundle in the same folder will be replaced.")), /*#__PURE__*/React.createElement("section", {
    className: "exp-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "iii. What travels"), /*#__PURE__*/React.createElement("div", {
    className: "exp-types"
  }, TYPES.map(t => {
    const on = enabled.has(t.id);
    const c = counts[t.id];
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "exp-type" + (on ? " is-on" : ""),
      onClick: () => toggleType(t.id),
      style: {
        "--swatch-c": (window.MIM_TYPE_COLOR || {})[t.id] || "var(--fg-2)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "exp-type-dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "exp-type-name"
    }, t.id, "s"), /*#__PURE__*/React.createElement("span", {
      className: "exp-type-folder"
    }, "/", t.folder), /*#__PURE__*/React.createElement("span", {
      className: "exp-type-count"
    }, c.kept, c.kept !== c.total ? /*#__PURE__*/React.createElement("span", {
      className: "exp-type-dropped"
    }, " /", c.total) : null), /*#__PURE__*/React.createElement("span", {
      className: "exp-type-check"
    }, on ? "✓" : ""));
  }))), /*#__PURE__*/React.createElement("section", {
    className: "exp-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "iv. Filters"), /*#__PURE__*/React.createElement("div", {
    className: "exp-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-row-label"
  }, "Spoiler level"), /*#__PURE__*/React.createElement("div", {
    className: "exp-seg"
  }, SPOILER_LEVELS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: "exp-seg-btn" + (spoiler === s.id ? " is-on" : ""),
    onClick: () => setSpoiler(s.id),
    title: s.sub
  }, s.label)))), /*#__PURE__*/React.createElement("label", {
    className: "exp-tog"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: stripStubs,
    onChange: e => setStripStubs(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Skip stub entries"), /*#__PURE__*/React.createElement("span", {
    className: "exp-tog-sub"
  }, "\u2014 don't ship anything still marked stub")), /*#__PURE__*/React.createElement("label", {
    className: "exp-tog"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: resolveLinks,
    onChange: e => setResolveLinks(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Resolve [[wikilinks]] to ids"), /*#__PURE__*/React.createElement("span", {
    className: "exp-tog-sub"
  }, "\u2014 makes the bundle engine-friendly")), /*#__PURE__*/React.createElement("label", {
    className: "exp-tog"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: includeImages,
    onChange: e => setIncludeImages(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Copy referenced images"), /*#__PURE__*/React.createElement("span", {
    className: "exp-tog-sub"
  }, "\u2014 portraits, plates, banners")), /*#__PURE__*/React.createElement("label", {
    className: "exp-tog"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: emitManifest,
    onChange: e => setEmitManifest(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Emit ", /*#__PURE__*/React.createElement("code", null, "export-manifest.json")), /*#__PURE__*/React.createElement("span", {
    className: "exp-tog-sub"
  }, "\u2014 for round-trip & diffing")))), /*#__PURE__*/React.createElement("aside", {
    className: "exp-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Bundle plan"), /*#__PURE__*/React.createElement("div", {
    className: "exp-plan-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-plan-num"
  }, plan.totalKept), /*#__PURE__*/React.createElement("span", {
    className: "exp-plan-lbl"
  }, "entries to write"), plan.totalDropped > 0 && /*#__PURE__*/React.createElement("span", {
    className: "exp-plan-drop"
  }, "\u2014 ", plan.totalDropped, " skipped")), /*#__PURE__*/React.createElement("ul", {
    className: "exp-plan"
  }, plan.lines.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.type
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-plan-dot",
    style: {
      background: (window.MIM_TYPE_COLOR || {})[l.type] || "#888"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "exp-plan-name"
  }, "/", l.folder), /*#__PURE__*/React.createElement("span", {
    className: "exp-plan-n"
  }, l.n)))), plan.dropped.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow",
    style: {
      display: "block",
      marginTop: 14
    }
  }, "Skipped"), /*#__PURE__*/React.createElement("ul", {
    className: "exp-skip"
  }, plan.dropped.map((d, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-skip-n"
  }, d.n), /*#__PURE__*/React.createElement("span", {
    className: "exp-skip-name"
  }, d.type), /*#__PURE__*/React.createElement("span", {
    className: "exp-skip-why"
  }, d.why)))))), /*#__PURE__*/React.createElement("div", {
    className: "exp-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Validation"), /*#__PURE__*/React.createElement("ul", {
    className: "exp-vali"
  }, /*#__PURE__*/React.createElement("li", {
    className: "is-ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-vali-dot"
  }), "Frontmatter \u2014 all entries valid against schema"), /*#__PURE__*/React.createElement("li", {
    className: "is-warn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-vali-dot"
  }), "3 entries link to a missing target ([[fenrir]], [[gungnir]], [[heror]])"), /*#__PURE__*/React.createElement("li", {
    className: "is-ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-vali-dot"
  }), "Image paths \u2014 27 of 27 found on disk"), /*#__PURE__*/React.createElement("li", {
    className: "is-warn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-vali-dot"
  }), "2 timeline events have no participants"), /*#__PURE__*/React.createElement("li", {
    className: "is-ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-vali-dot"
  }), "Spoiler-level filter \u2014 passes")), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-ghost exp-vali-fix"
  }, "Open validator \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "exp-card exp-card-manifest"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Manifest preview ", /*#__PURE__*/React.createElement("span", {
    className: "exp-card-meta"
  }, "export-manifest.json")), /*#__PURE__*/React.createElement("pre", {
    className: "exp-mani"
  }, JSON.stringify(manifest, null, 2))))), /*#__PURE__*/React.createElement("footer", {
    className: "exp-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "exp-foot-summary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-foot-target"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exp-foot-glyph"
  }, target_.icon), /*#__PURE__*/React.createElement("span", {
    className: "exp-foot-name"
  }, target_.name)), /*#__PURE__*/React.createElement("span", {
    className: "exp-foot-arrow"
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    className: "exp-foot-dest"
  }, /*#__PURE__*/React.createElement("code", null, dest)), /*#__PURE__*/React.createElement("span", {
    className: "exp-foot-meta"
  }, plan.totalKept, " entries", includeImages ? ` · ${27} images` : "", emitManifest ? " · manifest" : "")), /*#__PURE__*/React.createElement("div", {
    className: "exp-foot-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-ghost"
  }, "Dry run"), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-secondary"
  }, "Save preset"), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary exp-go"
  }, "Export bundle \u2197"))));
}
window.ExportEngine = ExportEngine;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/ExportEngine.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/FactionTree.jsx
try { (() => {
/* global React */
/*
 * FactionTree — /tree/faction route.
 *
 * Different model from family / genus / culture trees: faction
 * tree shows ONE faction's roster + the decorative connection
 * lines the user has drawn between its members. Members are
 * CHARACTERS, pulled from the lorebible by walking every
 * character whose `faction_memberships` references the focused
 * faction (matches buildFactionMembers() in factionData.ts).
 *
 * Edges aren't derived from frontmatter — they live in the
 * per-tree layout file as a `connections` array and carry a
 * type (sworn-to / reports-to / mentor / apprentice / rival /
 * heir). Crimson palette + ⚔ glyph from FactionMemberNode.tsx.
 *
 * Anatomy:
 *
 *   ┌──── side ─────────┬──── canvas ────────────────────────────┐
 *   │ Faction switcher  │ ┌──────────────────────────────────┐   │
 *   │ Heraldry block    │ │  faction emblem (trunk node)     │   │
 *   │ Roles legend      │ │       │  │  │  │   │   │         │   │
 *   │ Edge cheatsheet   │ │  member roster (10 nodes)        │   │
 *   │ Allies & rivals   │ │  · decorative lines: sworn,      │   │
 *   │                   │ │    mentor, reports-to, rival…   │   │
 *   └───────────────────┴────────────────────────────────────────┘
 */

const {
  useState,
  useMemo
} = React;

// ─── Factions (Shieldwall Saga vocabulary) ──────────────────────
const FX_FACTIONS = [{
  id: 'iron-crown',
  name: 'The Iron Crown',
  type: 'noble-house',
  founded: 'AoY 280',
  dissolved: null,
  motto: 'By iron and oath.',
  purpose: 'Hold the shieldwall against the giant-tide; keep the long pact unbroken.',
  ideology: 'Honour-bound monarchy; loyalty over law, oath over kin.',
  heraldry: {
    description: 'A black iron crown ringed with thorns on a field of blood.',
    colours: ['#c43a4e', '#1a1410', '#c9a227'],
    symbol: 'crown-of-thorns'
  },
  allies: ['Hornfolke Skalds', 'Stoneborn Holds', 'The Long Pact'],
  rivals: ['Cult of Mimir', 'Frost-jötnar', 'The Voidwyrm-faithful']
}, {
  id: 'hornfolke-skalds',
  name: 'Hornfolke Skalds',
  type: 'guild',
  founded: 'AoY ~100',
  dissolved: null,
  motto: 'Sing it true, sing it twice.',
  purpose: 'Chronicle the chronicle; bind cultural memory through oral tradition and rune-stone.',
  ideology: 'Truth-by-repetition; nothing is real until it is sung.',
  heraldry: {
    description: 'A horn crossed with a quill, on field of bleached linen.',
    colours: ['#d6c9a8', '#8d8478', '#c9a227'],
    symbol: 'horn-quill'
  },
  allies: ['The Iron Crown', 'Stoneborn Holds'],
  rivals: []
}, {
  id: 'cult-of-mimir',
  name: 'Cult of Mimir',
  type: 'cult',
  founded: 'AoY 88',
  dissolved: null,
  motto: 'The well does not refuse.',
  purpose: 'Tend the wellhead; speak prophecy to anyone who pays the bone-price.',
  ideology: 'Fated, void-touched, transactional. Knowledge has a weight.',
  heraldry: {
    description: 'An open well-mouth ringed by nine runes, on void-black.',
    colours: ['#a07cc8', '#1a1410', '#5fa394'],
    symbol: 'well-and-rune'
  },
  allies: ['The Voidwyrm-faithful'],
  rivals: ['The Iron Crown', 'Hornfolke Skalds']
}, {
  id: 'stoneborn-holds',
  name: 'Stoneborn Holds',
  type: 'clan',
  founded: 'AoY 12',
  dissolved: null,
  motto: 'Older than the iron.',
  purpose: 'Hold the mountain-gates; trade ore, runestone, and patience downhill.',
  ideology: 'Slow, kin-bound, durable. The mountain remembers.',
  heraldry: {
    description: 'A square-cut anvil under a triangle of mountain, on grey.',
    colours: ['#8aa0ab', '#5a5650', '#c9a227'],
    symbol: 'anvil-and-peak'
  },
  allies: ['The Iron Crown', 'Hornfolke Skalds'],
  rivals: ['Frost-jötnar']
}, {
  id: 'embertongue-watch',
  name: 'Embertongue Watch',
  type: 'order',
  founded: 'AoY 198',
  dissolved: null,
  motto: 'Wake the wyrm, name the wyrm.',
  purpose: 'Track and name every Drakenthar greatwyrm; broker their passage.',
  ideology: 'Naming-as-binding; observation as devotion.',
  heraldry: {
    description: 'A dragon\u2019s eye inside a wreath of ember, on caldera-black.',
    colours: ['#b85a2c', '#1a1410', '#d99366'],
    symbol: 'eye-and-ember'
  },
  allies: ['Cult of Mimir'],
  rivals: []
}];

// Members of the focused faction (Iron Crown by default).
// Each member is a character with role + status. Mirrors the
// FactionMember schema (character link + role + joined/left year).
const FX_MEMBERS = {
  'iron-crown': [{
    id: 'bjornar',
    name: 'Bjornar',
    role: 'King of the Crown',
    joined: 'AoY 391',
    tenure: '21 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'sigrun',
    name: 'Sigrun',
    role: 'Sworn shield-bearer',
    joined: 'AoY 395',
    tenure: '17 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'vaerin',
    name: 'Vaerin',
    role: 'Counsellor',
    joined: 'AoY 401',
    tenure: '11 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'hjalmar',
    name: 'Hjalmar',
    role: 'Marshal of the Wall',
    joined: 'AoY 388',
    tenure: '24 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'skaldyrn',
    name: 'Skaldyrn',
    role: 'Crown-skald (the late)',
    joined: 'AoY 312',
    tenure: '\u2014',
    status: 'deceased',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'vorthan',
    name: 'Vorthan',
    role: 'Spear-thane',
    joined: 'AoY 403',
    tenure: '9 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'helka',
    name: 'Helka',
    role: 'Heir-apparent',
    joined: 'AoY 408',
    tenure: '4 y',
    status: 'alive',
    stub: true,
    kind: 'aesir'
  }, {
    id: 'astrid',
    name: 'Astrid',
    role: 'Rune-warden',
    joined: 'AoY 404',
    tenure: '8 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'eira',
    name: 'Eira',
    role: 'Master-at-arms',
    joined: 'AoY 396',
    tenure: '16 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'ulf',
    name: 'Ulf the Elder',
    role: 'Bard-elder (emeritus)',
    joined: 'AoY 340',
    tenure: '60 y',
    status: 'alive',
    stub: true,
    kind: 'aesir'
  }],
  'hornfolke-skalds': [{
    id: 'old-aenir',
    name: 'Aenir the Older',
    role: 'Loremaster',
    joined: 'AoY 350',
    tenure: '62 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'velka',
    name: 'Velka',
    role: 'Wandering skald',
    joined: 'AoY 398',
    tenure: '14 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'old-skaldyrn',
    name: 'Skaldyrn',
    role: 'Court-skald',
    joined: 'AoY 312',
    tenure: '\u2014',
    status: 'deceased',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'rune-marit',
    name: 'Marit Rune-tongue',
    role: 'Rune-carver',
    joined: 'AoY 392',
    tenure: '20 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }],
  'cult-of-mimir': [{
    id: 'oracle-ynla',
    name: 'Ynla of the Well',
    role: 'Oracle-prime',
    joined: 'AoY 360',
    tenure: '52 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'mimir-mouth',
    name: 'The Mouth',
    role: 'Voice of Mimir',
    joined: 'AoY ???',
    tenure: '?',
    status: 'alive',
    stub: true,
    kind: 'unknown'
  }, {
    id: 'cult-thrain',
    name: 'Thrain',
    role: 'Bone-priest',
    joined: 'AoY 400',
    tenure: '12 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }],
  'stoneborn-holds': [{
    id: 'arnvid',
    name: 'Arnvid Stonewright',
    role: 'Hold-keeper',
    joined: 'AoY 372',
    tenure: '40 y',
    status: 'alive',
    stub: false,
    kind: 'stoneborn'
  }, {
    id: 'modir',
    name: 'Modir',
    role: 'Forge-mistress',
    joined: 'AoY 385',
    tenure: '27 y',
    status: 'alive',
    stub: false,
    kind: 'stoneborn'
  }, {
    id: 'olfr',
    name: 'Olfr Saltbeard',
    role: 'Trade-warden',
    joined: 'AoY 390',
    tenure: '22 y',
    status: 'alive',
    stub: true,
    kind: 'stoneborn'
  }],
  'embertongue-watch': [{
    id: 'sothren',
    name: 'Sothren-Who-Reads',
    role: 'Watch-captain',
    joined: 'AoY 401',
    tenure: '11 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'kraal',
    name: 'Kraal',
    role: 'Wyrm-namer',
    joined: 'AoY 405',
    tenure: '7 y',
    status: 'alive',
    stub: false,
    kind: 'aesir'
  }, {
    id: 'vethren',
    name: 'Vethren',
    role: 'Sky-scryer',
    joined: 'AoY 411',
    tenure: '1 y',
    status: 'alive',
    stub: true,
    kind: 'aesir'
  }]
};

// Decorative connection types — these are user-drawn lines on
// the canvas, not derived from frontmatter.
const FX_EDGE_TYPES = {
  'sworn': {
    stroke: '#c43a4e',
    dash: null,
    label: 'sworn to',
    cap: 'arrow'
  },
  'reports-to': {
    stroke: '#8aa0ab',
    dash: null,
    label: 'reports to',
    cap: 'arrow'
  },
  'mentor': {
    stroke: '#c9a227',
    dash: '5 4',
    label: 'mentor of',
    cap: 'arrow'
  },
  'apprentice': {
    stroke: '#5fa394',
    dash: '4 3',
    label: 'apprentice',
    cap: 'arrow'
  },
  'rival': {
    stroke: '#a07cc8',
    dash: '2 4',
    label: 'rival',
    cap: 'none'
  },
  'heir': {
    stroke: '#b85a2c',
    dash: null,
    label: 'heir of',
    cap: 'arrow'
  },
  'oath-broken': {
    stroke: '#5a5650',
    dash: '6 3 2 3',
    label: 'oath broken',
    cap: 'none'
  }
};

// Manually-drawn connection set per faction.
const FX_CONNECTIONS = {
  'iron-crown': [{
    s: 'sigrun',
    t: 'bjornar',
    type: 'sworn'
  }, {
    s: 'bjornar',
    t: 'vaerin',
    type: 'mentor'
  }, {
    s: 'astrid',
    t: 'vaerin',
    type: 'apprentice'
  }, {
    s: 'vorthan',
    t: 'hjalmar',
    type: 'reports-to'
  }, {
    s: 'eira',
    t: 'hjalmar',
    type: 'reports-to'
  }, {
    s: 'helka',
    t: 'bjornar',
    type: 'heir'
  }, {
    s: 'ulf',
    t: 'skaldyrn',
    type: 'mentor'
  }, {
    s: 'skaldyrn',
    t: 'bjornar',
    type: 'mentor'
  }, {
    s: 'vorthan',
    t: 'eira',
    type: 'rival'
  }],
  'hornfolke-skalds': [{
    s: 'velka',
    t: 'old-aenir',
    type: 'apprentice'
  }, {
    s: 'rune-marit',
    t: 'old-aenir',
    type: 'reports-to'
  }],
  'cult-of-mimir': [{
    s: 'cult-thrain',
    t: 'oracle-ynla',
    type: 'reports-to'
  }],
  'stoneborn-holds': [{
    s: 'modir',
    t: 'arnvid',
    type: 'reports-to'
  }, {
    s: 'olfr',
    t: 'arnvid',
    type: 'reports-to'
  }],
  'embertongue-watch': [{
    s: 'kraal',
    t: 'sothren',
    type: 'reports-to'
  }, {
    s: 'vethren',
    t: 'sothren',
    type: 'reports-to'
  }]
};

// Manual positions per faction (faction emblem at top center,
// members arranged below in a 5-column roster grid).
const FX_NODE_W = 200;
const FX_NODE_H = 86;
const FX_TRUNK_W = 280;
const FX_TRUNK_H = 130;
const STAGE_W = 1180;
const STAGE_H = 600;
const FX_TRUNK_POS = {
  x: (STAGE_W - FX_TRUNK_W) / 2,
  y: 14
};
const FX_POSITIONS = {
  'iron-crown': {
    bjornar: {
      x: 480,
      y: 200
    },
    sigrun: {
      x: 260,
      y: 200
    },
    vaerin: {
      x: 700,
      y: 200
    },
    hjalmar: {
      x: 40,
      y: 200
    },
    skaldyrn: {
      x: 920,
      y: 200
    },
    helka: {
      x: 480,
      y: 360
    },
    vorthan: {
      x: 40,
      y: 360
    },
    eira: {
      x: 260,
      y: 360
    },
    astrid: {
      x: 700,
      y: 360
    },
    ulf: {
      x: 920,
      y: 360
    }
  },
  'hornfolke-skalds': {
    'old-aenir': {
      x: 480,
      y: 200
    },
    velka: {
      x: 260,
      y: 200
    },
    'old-skaldyrn': {
      x: 700,
      y: 200
    },
    'rune-marit': {
      x: 480,
      y: 360
    }
  },
  'cult-of-mimir': {
    'oracle-ynla': {
      x: 480,
      y: 200
    },
    'mimir-mouth': {
      x: 260,
      y: 200
    },
    'cult-thrain': {
      x: 700,
      y: 200
    }
  },
  'stoneborn-holds': {
    arnvid: {
      x: 480,
      y: 200
    },
    modir: {
      x: 260,
      y: 200
    },
    olfr: {
      x: 700,
      y: 200
    }
  },
  'embertongue-watch': {
    sothren: {
      x: 480,
      y: 200
    },
    kraal: {
      x: 260,
      y: 200
    },
    vethren: {
      x: 700,
      y: 200
    }
  }
};

// ─── Component ──────────────────────────────────────────────────
function FactionTree() {
  const [factionId, setFactionId] = useState('iron-crown');
  const [enabledTypes, setEnabledTypes] = useState(new Set(Object.keys(FX_EDGE_TYPES)));
  const [hoveredEdge, setHoveredEdge] = useState(null);
  const [zoom, setZoom] = useState(0.85);
  const [showStubsOnly, setShowStubsOnly] = useState(false);
  const faction = FX_FACTIONS.find(f => f.id === factionId);
  const members = FX_MEMBERS[factionId] || [];
  const positions = FX_POSITIONS[factionId] || {};
  const connections = FX_CONNECTIONS[factionId] || [];
  const visibleConns = useMemo(() => connections.filter(c => enabledTypes.has(c.type)), [connections, enabledTypes]);

  // Roles legend (unique roles)
  const roleSet = useMemo(() => Array.from(new Set(members.map(m => m.role))), [members]);

  // Used-edge-types in this faction (filter the legend)
  const usedTypes = useMemo(() => {
    const s = new Set(connections.map(c => c.type));
    return Object.keys(FX_EDGE_TYPES).filter(t => s.has(t));
  }, [connections]);
  function toggleType(id) {
    const next = new Set(enabledTypes);
    if (next.has(id)) next.delete(id);else next.add(id);
    setEnabledTypes(next);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ft fx"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-split"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ft-side fx-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-side-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Faction tree"), /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow fx-eye"
  }, "Tools \xB7 Allegiance")), /*#__PURE__*/React.createElement("p", {
    className: "ft-hint"
  }, "One faction at a time. Members are pulled from every character whose ", /*#__PURE__*/React.createElement("em", null, "faction_memberships"), " references this faction. Drag between members to draw a connection \u2014 type set on release."), /*#__PURE__*/React.createElement("div", {
    className: "ft-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Active faction"), /*#__PURE__*/React.createElement("div", {
    className: "fx-fac-list"
  }, FX_FACTIONS.map(f => {
    const on = f.id === factionId;
    const memberCount = (FX_MEMBERS[f.id] || []).length;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      className: "fx-fac-row" + (on ? " is-active" : ""),
      onClick: () => setFactionId(f.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "fx-fac-crest",
      style: {
        background: `linear-gradient(135deg, ${f.heraldry.colours[0]} 0%, ${f.heraldry.colours[1]} 100%)`,
        boxShadow: `inset 0 0 0 1px ${f.heraldry.colours[2] || f.heraldry.colours[0]}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "fx-fac-glyph",
      style: {
        color: f.heraldry.colours[2] || '#d6c9a8'
      }
    }, "\u2694")), /*#__PURE__*/React.createElement("div", {
      className: "fx-fac-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fx-fac-name"
    }, f.name), /*#__PURE__*/React.createElement("span", {
      className: "fx-fac-type"
    }, f.type, " \xB7 ", memberCount)));
  }))), faction && /*#__PURE__*/React.createElement("div", {
    className: "fx-heraldry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx-her-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Heraldry"), /*#__PURE__*/React.createElement("div", {
    className: "fx-her-swatches"
  }, faction.heraldry.colours.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "fx-her-swatch",
    style: {
      background: c
    }
  })))), /*#__PURE__*/React.createElement("p", {
    className: "fx-her-desc"
  }, faction.heraldry.description), /*#__PURE__*/React.createElement("ul", {
    className: "gt-focus-fields fx-her-fields"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "type"), /*#__PURE__*/React.createElement("em", null, faction.type)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "founded"), /*#__PURE__*/React.createElement("em", null, faction.founded)), faction.dissolved && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "dissolved"), /*#__PURE__*/React.createElement("em", null, faction.dissolved)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "members"), /*#__PURE__*/React.createElement("em", null, members.length))), /*#__PURE__*/React.createElement("div", {
    className: "fx-her-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Motto"), /*#__PURE__*/React.createElement("p", {
    className: "fx-her-motto"
  }, "\"", faction.motto, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "fx-her-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Purpose"), /*#__PURE__*/React.createElement("p", {
    className: "fx-her-purpose"
  }, faction.purpose))), (faction.allies.length > 0 || faction.rivals.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "ft-block fx-ar"
  }, faction.allies.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fx-ar-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye fx-ar-eye fx-ar-ally"
  }, "Allies"), /*#__PURE__*/React.createElement("div", {
    className: "gt-chip-flow"
  }, faction.allies.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    className: "fx-ally-chip"
  }, a)))), faction.rivals.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fx-ar-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye fx-ar-eye fx-ar-rival"
  }, "Rivals"), /*#__PURE__*/React.createElement("div", {
    className: "gt-chip-flow"
  }, faction.rivals.map(r => /*#__PURE__*/React.createElement("span", {
    key: r,
    className: "fx-rival-chip"
  }, r))))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Connection types"), /*#__PURE__*/React.createElement("ul", {
    className: "fx-edge-legend"
  }, Object.entries(FX_EDGE_TYPES).map(([id, t]) => {
    const used = usedTypes.includes(id);
    const on = enabledTypes.has(id);
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: "fx-edge-row" + (on ? " is-on" : "") + (used ? "" : " is-unused"),
      onClick: () => used && toggleType(id)
    }, /*#__PURE__*/React.createElement("svg", {
      width: "36",
      height: "10"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "5",
      x2: "34",
      y2: "5",
      stroke: t.stroke,
      strokeWidth: "1.5",
      strokeDasharray: t.dash || undefined,
      markerEnd: t.cap === 'arrow' ? `url(#fx-arrow-${id})` : undefined
    }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
      id: `fx-arrow-${id}`,
      viewBox: "0 0 10 10",
      refX: "9",
      refY: "5",
      markerWidth: "6",
      markerHeight: "6",
      orient: "auto"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 0 0 L 10 5 L 0 10 z",
      fill: t.stroke
    })))), /*#__PURE__*/React.createElement("span", {
      className: "fx-edge-label"
    }, t.label), used && /*#__PURE__*/React.createElement("span", {
      className: "fx-edge-count"
    }, connections.filter(c => c.type === id).length));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block ft-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "View settings"), /*#__PURE__*/React.createElement("label", {
    className: "ft-toggle"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: showStubsOnly,
    onChange: e => setShowStubsOnly(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Highlight stub members only."))), /*#__PURE__*/React.createElement("div", {
    className: "ft-stats"
  }, members.length, " members \xB7 ", visibleConns.length, " connections"), /*#__PURE__*/React.createElement("button", {
    className: "ft-reset"
  }, "Reset layout")), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx-bar-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx-bar-glyph"
  }, "\u2694"), faction.name), /*#__PURE__*/React.createElement("span", {
    className: "fx-bar-meta"
  }, faction.type, " \xB7 ", faction.founded), /*#__PURE__*/React.createElement("span", {
    className: "gt-bar-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ft-zoom"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(2)))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setZoom(z => Math.min(1.5, +(z + 0.1).toFixed(2)))
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip",
    onClick: () => setZoom(0.85)
  }, "fit"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas",
    "data-screen-label": "13 Faction tree"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ft-bg",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "fx-dots",
    x: "0",
    y: "0",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(196,58,78,0.07)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#fx-dots)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ft-stage fx-stage",
    style: {
      transform: `scale(${zoom})`,
      transformOrigin: '0 0',
      width: STAGE_W,
      height: STAGE_H
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ft-edges",
    width: STAGE_W,
    height: STAGE_H,
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, Object.entries(FX_EDGE_TYPES).map(([id, t]) => /*#__PURE__*/React.createElement("marker", {
    key: id,
    id: `fx-edge-arrow-${id}`,
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: t.stroke
  })))), visibleConns.map((c, i) => {
    const a = positions[c.s];
    const b = positions[c.t];
    if (!a || !b) return null;
    const type = FX_EDGE_TYPES[c.type];
    // Quadratic curve between member centers — gives the
    // canvas the "hand-drawn relationship sketch" feel.
    const x1 = a.x + FX_NODE_W / 2;
    const y1 = a.y + FX_NODE_H / 2;
    const x2 = b.x + FX_NODE_W / 2;
    const y2 = b.y + FX_NODE_H / 2;
    const dx = x2 - x1,
      dy = y2 - y1;
    // small offset perpendicular to the direct line for a subtle curve
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const off = Math.min(40, len * 0.12) * (i % 2 === 0 ? 1 : -1);
    const cx = (x1 + x2) / 2 + -dy / len * off;
    const cy = (y1 + y2) / 2 + dx / len * off;
    const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
    const isHovered = hoveredEdge === i;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      className: "fx-edge",
      onMouseEnter: () => setHoveredEdge(i),
      onMouseLeave: () => setHoveredEdge(null)
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: "transparent",
      strokeWidth: "14",
      fill: "none",
      style: {
        pointerEvents: 'stroke'
      }
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: type.stroke,
      strokeWidth: isHovered ? 2.25 : 1.4,
      strokeDasharray: type.dash || undefined,
      opacity: isHovered ? 1 : 0.85,
      fill: "none",
      markerEnd: type.cap === 'arrow' ? `url(#fx-edge-arrow-${c.type})` : undefined
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 4,
      textAnchor: "middle",
      fill: type.stroke,
      opacity: isHovered ? 1 : 0.65,
      fontSize: "10.5",
      fontFamily: "var(--font-sans)",
      fontStyle: "italic"
    }, type.label));
  })), /*#__PURE__*/React.createElement("div", {
    className: "fx-trunk",
    style: {
      left: FX_TRUNK_POS.x,
      top: FX_TRUNK_POS.y,
      width: FX_TRUNK_W,
      height: FX_TRUNK_H,
      background: `linear-gradient(180deg, rgba(196,58,78,0.10) 0%, rgba(20,16,13,0.0) 100%)`,
      borderColor: faction.heraldry.colours[0]
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx-trunk-crest",
    style: {
      background: `linear-gradient(135deg, ${faction.heraldry.colours[0]} 0%, ${faction.heraldry.colours[1]} 100%)`,
      boxShadow: `inset 0 0 0 1px ${faction.heraldry.colours[2] || faction.heraldry.colours[0]}, 0 2px 8px rgba(0,0,0,0.5)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: faction.heraldry.colours[2] || '#d6c9a8'
    }
  }, "\u2694")), /*#__PURE__*/React.createElement("div", {
    className: "fx-trunk-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx-trunk-name"
  }, faction.name), /*#__PURE__*/React.createElement("span", {
    className: "fx-trunk-type"
  }, faction.type, " \xB7 founded ", faction.founded), /*#__PURE__*/React.createElement("span", {
    className: "fx-trunk-motto"
  }, "\"", faction.motto, "\""))), members.map(m => {
    const p = positions[m.id];
    if (!p) return null;
    const dim = showStubsOnly && !m.stub;
    const isDeceased = m.status === 'deceased';
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      className: "ft-node fx-node" + (m.stub ? " is-stub" : "") + (isDeceased ? " fx-deceased" : "") + (dim ? " fx-dimmed" : ""),
      style: {
        left: p.x,
        top: p.y,
        width: FX_NODE_W,
        height: FX_NODE_H
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-top"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-right"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-bottom"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-left"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ft-node-row fx-name-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fx-node-glyph"
    }, "\u2694"), /*#__PURE__*/React.createElement("span", {
      className: "ft-node-name"
    }, m.name), m.stub && /*#__PURE__*/React.createElement("span", {
      className: "gt-stub-pulse",
      title: "Stub member"
    }), isDeceased && /*#__PURE__*/React.createElement("span", {
      className: "fx-dagger",
      title: "Deceased"
    }, "\u2020")), /*#__PURE__*/React.createElement("div", {
      className: "fx-role"
    }, m.role), /*#__PURE__*/React.createElement("div", {
      className: "ft-node-meta fx-meta"
    }, "joined ", m.joined, " \xB7 ", m.tenure));
  })), /*#__PURE__*/React.createElement("div", {
    className: "fx-canvas-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Reading the lines"), /*#__PURE__*/React.createElement("span", {
    className: "fx-cl-row"
  }, "Hover an edge to highlight \xB7 Alt-click to remove \xB7 Right-click to retype"))))));
}
window.FactionTree = FactionTree;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/FactionTree.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/FamilyTree.jsx
try { (() => {
/* global React */
const {
  useState,
  useMemo
} = React;

// Cast — pulled from the actual lorebible (asgardian + jotnar branches).
// Each character carries the relationship payload the FamilyTree route
// reads from frontmatter `relationships:`.
const FT_CHARACTERS = [{
  id: 'borr',
  name: 'Borr',
  born: 5000200,
  died: 5000095,
  status: 'deceased',
  species: 'aesir'
}, {
  id: 'bestla',
  name: 'Bestla',
  born: 5000180,
  died: 5000050,
  status: 'deceased',
  species: 'jotnar'
}, {
  id: 'odin',
  name: 'Odin',
  born: 5000100,
  died: null,
  status: 'alive',
  species: 'aesir',
  focused: true
}, {
  id: 'vili',
  name: 'Vili',
  born: 5000098,
  died: null,
  status: 'alive',
  species: 'aesir'
}, {
  id: 've',
  name: 'Vé',
  born: 5000095,
  died: null,
  status: 'alive',
  species: 'aesir'
}, {
  id: 'frigg',
  name: 'Frigg',
  born: 5000080,
  died: null,
  status: 'alive',
  species: 'aesir'
}, {
  id: 'jord',
  name: 'Jörð',
  born: 5000060,
  died: null,
  status: 'alive',
  species: 'jotnar'
}, {
  id: 'thor',
  name: 'Thor',
  born: 4999800,
  died: null,
  status: 'alive',
  species: 'aesir'
}, {
  id: 'baldr',
  name: 'Baldr',
  born: 4999500,
  died: 4999188,
  status: 'deceased',
  species: 'aesir'
}, {
  id: 'hodr',
  name: 'Höðr',
  born: 4999500,
  died: null,
  status: 'alive',
  species: 'aesir'
}];

// (sourceId, targetId, type) — type drives stroke colour & label.
const FT_EDGES = [{
  s: 'borr',
  t: 'odin',
  type: 'parent-child'
}, {
  s: 'borr',
  t: 'vili',
  type: 'parent-child'
}, {
  s: 'borr',
  t: 've',
  type: 'parent-child'
}, {
  s: 'bestla',
  t: 'odin',
  type: 'parent-child'
}, {
  s: 'bestla',
  t: 'vili',
  type: 'parent-child'
}, {
  s: 'bestla',
  t: 've',
  type: 'parent-child'
}, {
  s: 'borr',
  t: 'bestla',
  type: 'spouse'
}, {
  s: 'odin',
  t: 'frigg',
  type: 'spouse'
}, {
  s: 'odin',
  t: 'jord',
  type: 'lover'
}, {
  s: 'odin',
  t: 'thor',
  type: 'parent-child'
}, {
  s: 'jord',
  t: 'thor',
  type: 'parent-child'
}, {
  s: 'odin',
  t: 'baldr',
  type: 'parent-child'
}, {
  s: 'frigg',
  t: 'baldr',
  type: 'parent-child'
}, {
  s: 'odin',
  t: 'hodr',
  type: 'parent-child'
}, {
  s: 'frigg',
  t: 'hodr',
  type: 'parent-child'
}];
const EDGE_STYLE = {
  'parent-child': {
    stroke: '#c9a227',
    dash: null,
    label: 'parent'
  },
  'spouse': {
    stroke: '#b85a2c',
    dash: null,
    label: 'spouse'
  },
  'lover': {
    stroke: '#b85a2c',
    dash: '4 4',
    label: 'lover'
  },
  'sibling': {
    stroke: '#8aa0ab',
    dash: '2 3',
    label: 'sibling'
  }
};

// Manually positioned for a clean 3-generation tree.
const POSITIONS = {
  borr: {
    x: 200,
    y: 60
  },
  bestla: {
    x: 470,
    y: 60
  },
  odin: {
    x: 200,
    y: 230
  },
  vili: {
    x: 460,
    y: 230
  },
  ve: {
    x: 670,
    y: 230
  },
  frigg: {
    x: -10,
    y: 230
  },
  jord: {
    x: 380,
    y: 380
  },
  thor: {
    x: 540,
    y: 530
  },
  baldr: {
    x: 130,
    y: 530
  },
  hodr: {
    x: 330,
    y: 530
  }
};
const NODE_W = 200;
const NODE_H = 86;
function FamilyTree() {
  const [mode, setMode] = useState('focused'); // 'chooser' | 'focused' | 'show-all'
  const [focusId, setFocusId] = useState('odin');
  const [cultureFilter, setCultureFilter] = useState(new Set());
  const [propagation, setPropagation] = useState(false);
  const [zoom, setZoom] = useState(1);
  const focused = FT_CHARACTERS.find(c => c.id === focusId);

  // CHOOSER
  if (mode === 'chooser') {
    return /*#__PURE__*/React.createElement("div", {
      className: "ft"
    }, /*#__PURE__*/React.createElement("header", {
      className: "ft-head"
    }, /*#__PURE__*/React.createElement("h2", null, "Family tree")), /*#__PURE__*/React.createElement("div", {
      className: "ft-chooser"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ft-chooser-card"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-eye"
    }, "Stage 25 \\u00b7 focus chooser"), /*#__PURE__*/React.createElement("h3", null, "Pick a character to anchor the tree on."), /*#__PURE__*/React.createElement("p", null, "Type a name to focus. Or open the full graph and let the layout breathe."), /*#__PURE__*/React.createElement("input", {
      className: "ft-search",
      placeholder: "Type a character\\u2019s name\\u2026"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ft-chooser-list"
    }, FT_CHARACTERS.slice(0, 6).map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "ft-chooser-row",
      onClick: () => {
        setFocusId(c.id);
        setMode('focused');
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ft-chooser-name"
    }, c.name), /*#__PURE__*/React.createElement("span", {
      className: "ft-chooser-meta"
    }, c.species === 'aesir' ? 'Aesir' : 'Jötnar', " \\u00b7 ", c.status)))), /*#__PURE__*/React.createElement("button", {
      className: "ft-chooser-all",
      onClick: () => setMode('show-all')
    }, "Show all characters \\u2192"))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "ft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-split"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ft-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-side-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Family tree"), /*#__PURE__*/React.createElement("button", {
    className: "ft-back",
    onClick: () => setMode('chooser')
  }, "\\u2190 Change focus")), /*#__PURE__*/React.createElement("p", {
    className: "ft-hint"
  }, "Drag between handles to add a relationship. Top \\u2192 parent; left/right \\u2192 spouse or sibling. Alt-click a line to remove it; right-click to change its type."), /*#__PURE__*/React.createElement("div", {
    className: "ft-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Focus on character"), /*#__PURE__*/React.createElement("div", {
    className: "ft-focus-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ft-focus-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ft-focus-name"
  }, focused?.name), /*#__PURE__*/React.createElement("button", {
    className: "ft-focus-x",
    onClick: () => setMode('show-all')
  }, "change"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Culture"), /*#__PURE__*/React.createElement("div", {
    className: "ft-chiprow"
  }, ['Asgardian', 'Jötnar', 'Vanir', 'Dvergr'].map(c => {
    const on = cultureFilter.has(c);
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      className: "ft-chip" + (on ? " is-on" : ""),
      onClick: () => setCultureFilter(prev => {
        const next = new Set(prev);
        if (next.has(c)) next.delete(c);else next.add(c);
        return next;
      })
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block ft-cheat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Connector cheatsheet"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "\\u2191"), " top \\u2014 parent"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "\\u2193"), " bottom \\u2014 child"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "\\u2190 \\u2192"), " sides \\u2014 spouse / sibling"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "Alt"), "+click line \\u2014 remove"), /*#__PURE__*/React.createElement("li", null, "Right-click line \\u2014 change type"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block ft-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Tree settings"), /*#__PURE__*/React.createElement("label", {
    className: "ft-toggle"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: propagation,
    onChange: e => setPropagation(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Prompt for inheritance when connecting parents."))), /*#__PURE__*/React.createElement("div", {
    className: "ft-stats"
  }, FT_CHARACTERS.length, " visible \\u00b7 ", FT_EDGES.length, " edges"), /*#__PURE__*/React.createElement("button", {
    className: "ft-reset"
  }, "Reset layout")), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-mode"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (mode === 'focused' ? " is-active" : ""),
    onClick: () => setMode('focused')
  }, "focused"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (mode === 'show-all' ? " is-active" : ""),
    onClick: () => setMode('show-all')
  }, "show all")), /*#__PURE__*/React.createElement("div", {
    className: "ft-zoom"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setZoom(z => Math.max(0.5, z - 0.1))
  }, "\\u2212"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setZoom(z => Math.min(1.5, z + 0.1))
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip"
  }, "fit"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas",
    "data-screen-label": "03 Family tree"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ft-bg",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "ft-dots",
    x: "0",
    y: "0",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(214,201,168,0.07)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#ft-dots)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ft-stage",
    style: {
      transform: `scale(${zoom})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ft-edges",
    width: "900",
    height: "660",
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "ft-arrow",
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: "#c9a227"
  }))), FT_EDGES.map(e => {
    const a = POSITIONS[e.s];
    const b = POSITIONS[e.t];
    if (!a || !b) return null;
    const style = EDGE_STYLE[e.type];
    // Parent-child edges leave from bottom of source, enter top of target.
    // Spouse / lover edges run between the inner sides.
    const isVertical = e.type === 'parent-child';
    const x1 = isVertical ? a.x + NODE_W / 2 : a.x < b.x ? a.x + NODE_W : a.x;
    const y1 = isVertical ? a.y + NODE_H : a.y + NODE_H / 2;
    const x2 = isVertical ? b.x + NODE_W / 2 : a.x < b.x ? b.x : b.x + NODE_W;
    const y2 = isVertical ? b.y : b.y + NODE_H / 2;
    const midY = (y1 + y2) / 2;
    const d = isVertical ? `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}` : `M ${x1} ${y1} L ${x2} ${y2}`;
    return /*#__PURE__*/React.createElement("g", {
      key: e.s + '-' + e.t,
      className: "ft-edge"
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: style.stroke,
      strokeWidth: "1.5",
      strokeDasharray: style.dash || undefined,
      fill: "none",
      markerEnd: isVertical ? 'url(#ft-arrow)' : undefined
    }), !isVertical && /*#__PURE__*/React.createElement("text", {
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2 - 6,
      textAnchor: "middle",
      fill: style.stroke,
      fontSize: "10",
      fontFamily: "var(--font-sans)",
      fontStyle: "italic"
    }, style.label));
  })), FT_CHARACTERS.map(c => {
    const p = POSITIONS[c.id];
    if (!p) return null;
    const isFocus = c.id === focusId;
    const stub = c.id === 've' || c.id === 'hodr'; // demo stubs
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "ft-node" + (isFocus ? " is-focus" : "") + (stub ? " is-stub" : ""),
      style: {
        left: p.x,
        top: p.y,
        width: NODE_W,
        height: NODE_H
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-top"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-right"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-bottom"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-left"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ft-node-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ft-node-name"
    }, c.name), stub && /*#__PURE__*/React.createElement("span", {
      className: "ft-node-stub",
      title: "Stub"
    }, "\u25CF"), /*#__PURE__*/React.createElement("span", {
      className: "ft-node-status"
    }, c.status === 'deceased' ? '\u2020' : c.status === 'missing' ? '?' : '')), /*#__PURE__*/React.createElement("div", {
      className: "ft-node-meta"
    }, formatLifespan(c.born, c.died)), /*#__PURE__*/React.createElement("a", {
      className: "ft-node-open",
      onClick: e => e.preventDefault()
    }, "open editor"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "ft-minimap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-mm-eye"
  }, "map"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 160",
    width: "100%",
    height: "100%"
  }, FT_EDGES.map(e => {
    const a = POSITIONS[e.s];
    const b = POSITIONS[e.t];
    if (!a || !b) return null;
    return /*#__PURE__*/React.createElement("line", {
      key: e.s + e.t,
      x1: a.x / 4.5 + 12,
      y1: a.y / 4.5 + 12,
      x2: b.x / 4.5 + 12,
      y2: b.y / 4.5 + 12,
      stroke: "rgba(201,162,39,0.4)",
      strokeWidth: "0.6"
    });
  }), FT_CHARACTERS.map(c => {
    const p = POSITIONS[c.id];
    if (!p) return null;
    return /*#__PURE__*/React.createElement("rect", {
      key: c.id,
      x: p.x / 4.5 + 8,
      y: p.y / 4.5 + 9,
      width: "10",
      height: "6",
      rx: "1",
      fill: c.id === focusId ? '#b85a2c' : '#c9a227'
    });
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "76",
    height: "56",
    fill: "none",
    stroke: "rgba(184,90,44,0.7)",
    strokeWidth: "1"
  })))))));
}
function formatLifespan(b, d) {
  const fy = y => y == null ? '' : y < 0 ? `${Math.abs(y)} BC` : y < 100 ? `${y} AOY` : `c. ${Math.round(y / 100) * 100} BC`;
  if (b == null && d == null) return '';
  if (b != null && d == null) return `${fy(b)} \u2014`;
  if (b == null && d != null) return `\u2014 ${fy(d)}`;
  return `${fy(b)} \u2014 ${fy(d)}`;
}
window.FamilyTree = FamilyTree;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/FamilyTree.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/GenusTree.jsx
try { (() => {
/* global React */
/*
 * GenusTree — /tree/genus route.
 *
 * Species/lineage tree. Single-parent hierarchy (every species
 * has at most one `parent_species`) plus optional `related_species`
 * cross-links rendered as dashed connectors. Visual chrome reuses
 * .ft-* classes from the family tree so the two graphs read as
 * siblings, but a `.gt` wrapper retunes the accent palette to
 * teal (matches ENTRY_COLORS.species in the real codebase) so
 * species and characters never get confused.
 *
 * Anatomy:
 *
 *   ┌──── side ─────────┬──── canvas ────────────────────────────┐
 *   │ Focus chooser     │  [focused] [show all]   zoom · fit     │
 *   │ Status filter     │ ┌──────────────────────────────────┐   │
 *   │ Realm filter      │ │  cladogram of species cards      │   │
 *   │ Focused species   │ │  · solid edges = parent_species  │   │
 *   │   detail card     │ │  · dashed edges = related        │   │
 *   │ Edge cheatsheet   │ └──────────────────────────────────┘   │
 *   └───────────────────┴────────────────────────────────────────┘
 *
 * Data shape mirrors the lorebible's SpeciesEntry: id, name,
 * parent (single), biology { diet, habitat, lifespan }, status,
 * abilities[], notable individuals[], cultures_associated[],
 * stub flag.
 */

const {
  useState,
  useMemo
} = React;

// ─── Sample species — Shieldwall Saga vocabulary ────────────────
const GT_SPECIES = [
// Mannkind clade
{
  id: 'mannkind',
  name: 'Mannkind',
  parent: null,
  status: 'extant',
  diet: 'omnivore',
  habitat: 'wide-ranging',
  lifespan: '70–90 y',
  pop: '9 cultures',
  stub: false,
  abilities: ['speech', 'tool-use'],
  notable: ['Bjornar', 'Sigrun'],
  cultures: ['Hornfolke', 'Iron Crown', 'Alba']
}, {
  id: 'hornfolke',
  name: 'Hornfolke',
  parent: 'mannkind',
  status: 'extant',
  diet: 'omnivore',
  habitat: 'northern fells',
  lifespan: '70 y',
  pop: 'common',
  stub: false,
  abilities: ['rune-binding', 'horn-call'],
  notable: ['Vaerin', 'Hjalmar'],
  cultures: ['Hornfolke']
}, {
  id: 'ironcrown',
  name: 'Iron-Crown stock',
  parent: 'mannkind',
  status: 'extant',
  diet: 'omnivore',
  habitat: 'lowlands',
  lifespan: '65 y',
  pop: 'common',
  stub: false,
  abilities: ['steel-craft', 'shieldwall'],
  notable: ['Bjornar'],
  cultures: ['Iron Crown']
}, {
  id: 'stoneborn',
  name: 'Stoneborn',
  parent: 'mannkind',
  status: 'extant',
  diet: 'omnivore',
  habitat: 'mountain holds',
  lifespan: '95 y',
  pop: 'rare',
  stub: true,
  abilities: ['stone-shaping'],
  notable: [],
  cultures: ['Stoneborn']
},
// Jötnarkind clade
{
  id: 'jotnarkind',
  name: 'Jötnarkind',
  parent: null,
  status: 'extant',
  diet: 'omnivore',
  habitat: 'world-periphery',
  lifespan: '300+ y',
  pop: '3 lineages',
  stub: false,
  abilities: ['cold-resist', 'glamour'],
  notable: ['Bestla', 'Jörð'],
  cultures: ['Niflheim', 'Muspell']
}, {
  id: 'frost-jot',
  name: 'Frost-jötnar',
  parent: 'jotnarkind',
  status: 'extant',
  diet: 'omnivore',
  habitat: 'Niflheim',
  lifespan: '400 y',
  pop: 'many',
  stub: false,
  abilities: ['ice-shaping', 'long-stride'],
  notable: ['Bestla'],
  cultures: ['Niflheim']
}, {
  id: 'fire-jot',
  name: 'Fire-jötnar',
  parent: 'jotnarkind',
  status: 'extant',
  diet: 'carnivore',
  habitat: 'Muspell',
  lifespan: '500 y',
  pop: 'few',
  stub: false,
  abilities: ['flame-skin', 'forge-song'],
  notable: ['Surtr'],
  cultures: ['Muspell']
}, {
  id: 'stone-jot',
  name: 'Stone-jötnar',
  parent: 'jotnarkind',
  status: 'extant',
  diet: 'lithovore',
  habitat: 'deep mountain',
  lifespan: 'unknown',
  pop: 'rumoured',
  stub: true,
  abilities: ['petrify-touch'],
  notable: [],
  cultures: []
},
// Drakenthar clade (focused)
{
  id: 'drakenthar',
  name: 'Drakenthar',
  parent: null,
  status: 'extant',
  diet: 'carnivore',
  habitat: 'untracked sky',
  lifespan: '1000+ y',
  pop: '4 known greatwyrms',
  stub: false,
  abilities: ['flight', 'High Speech', 'fire-breath'],
  notable: ['Vaethran the Ulgor'],
  cultures: []
}, {
  id: 'frostwyrm',
  name: 'Frostwyrm',
  parent: 'drakenthar',
  status: 'extant',
  diet: 'carnivore',
  habitat: 'glacial ridges',
  lifespan: '900 y',
  pop: '3 known',
  stub: false,
  abilities: ['frost-breath', 'storm-call'],
  notable: ['Kovrael'],
  cultures: []
}, {
  id: 'embertongue',
  name: 'Embertongue',
  parent: 'drakenthar',
  status: 'extant',
  diet: 'carnivore',
  habitat: 'caldera',
  lifespan: '1100 y',
  pop: '2 known',
  stub: false,
  abilities: ['lava-breath', 'oath-tongue'],
  notable: ['Sothren'],
  cultures: []
}, {
  id: 'voidwyrm',
  name: 'Voidwyrm',
  parent: 'drakenthar',
  status: 'mythic',
  diet: 'unknown',
  habitat: 'between',
  lifespan: 'eternal?',
  pop: 'unknown',
  stub: false,
  abilities: ['Void Speech', 'unmake'],
  notable: [],
  cultures: []
}, {
  id: 'sundrake',
  name: 'Sun-drake',
  parent: 'drakenthar',
  status: 'extinct',
  diet: 'carnivore',
  habitat: 'Alba uplands',
  lifespan: '—',
  pop: 'last seen Y198',
  stub: false,
  abilities: ['sun-flare'],
  notable: ['Helka the Last'],
  cultures: ['Alba']
},
// Wolfkind clade
{
  id: 'wolfkind',
  name: 'Wolfkind',
  parent: null,
  status: 'extant',
  diet: 'carnivore',
  habitat: 'wildlands',
  lifespan: '12 y',
  pop: 'common',
  stub: false,
  abilities: ['pack-bond', 'tracking'],
  notable: [],
  cultures: []
}, {
  id: 'hearthound',
  name: 'Hearthound',
  parent: 'wolfkind',
  status: 'extant',
  diet: 'carnivore',
  habitat: 'settlements',
  lifespan: '14 y',
  pop: 'common',
  stub: false,
  abilities: ['rune-sniff', 'hearth-bond'],
  notable: ['Hodr-of-Anvil'],
  cultures: ['Hornfolke', 'Iron Crown']
}, {
  id: 'icewolf',
  name: 'Ice-wolf',
  parent: 'wolfkind',
  status: 'extant',
  diet: 'carnivore',
  habitat: 'tundra',
  lifespan: '10 y',
  pop: 'common',
  stub: false,
  abilities: ['cold-resist'],
  notable: [],
  cultures: []
}, {
  id: 'skollwolf',
  name: 'Skoll-wolf',
  parent: 'wolfkind',
  status: 'mythic',
  diet: 'carnivore',
  habitat: 'prophecy',
  lifespan: 'foretold',
  pop: '1 (foretold)',
  stub: true,
  abilities: ['sun-eater'],
  notable: [],
  cultures: []
}];

// Related-species cross-links (dashed). Distinct from parent edges.
const GT_RELATED = [{
  s: 'frostwyrm',
  t: 'embertongue',
  label: 'rival-brood'
}, {
  s: 'hearthound',
  t: 'icewolf',
  label: 'crossbreeds'
}, {
  s: 'voidwyrm',
  t: 'skollwolf',
  label: 'prophesied to meet'
}];

// ─── Layout — 2×2 forest, manually positioned ───────────────────
const GT_NODE_W = 200;
const GT_NODE_H = 100;
const GT_POS = {
  // Top-left clade — Mannkind
  mannkind: {
    x: 120,
    y: 30
  },
  hornfolke: {
    x: -20,
    y: 220
  },
  ironcrown: {
    x: 200,
    y: 220
  },
  stoneborn: {
    x: 420,
    y: 220
  },
  // Top-right clade — Jötnarkind
  jotnarkind: {
    x: 860,
    y: 30
  },
  'frost-jot': {
    x: 720,
    y: 220
  },
  'fire-jot': {
    x: 940,
    y: 220
  },
  'stone-jot': {
    x: 1160,
    y: 220
  },
  // Bottom-left clade — Drakenthar (focused)
  drakenthar: {
    x: 240,
    y: 470
  },
  frostwyrm: {
    x: -20,
    y: 660
  },
  embertongue: {
    x: 200,
    y: 660
  },
  voidwyrm: {
    x: 420,
    y: 660
  },
  sundrake: {
    x: 640,
    y: 660
  },
  // Bottom-right clade — Wolfkind
  wolfkind: {
    x: 980,
    y: 470
  },
  hearthound: {
    x: 820,
    y: 660
  },
  icewolf: {
    x: 1040,
    y: 660
  },
  skollwolf: {
    x: 1260,
    y: 660
  }
};

// Status colors — picks border / dot per species. Teal is the
// species accent (matches Lorekeeper ENTRY_COLORS.species).
const GT_STATUS = {
  extant: {
    dot: '#5fa394',
    label: 'extant',
    border: '#5fa394'
  },
  mythic: {
    dot: '#a07cc8',
    label: 'mythic',
    border: '#a07cc8'
  },
  extinct: {
    dot: '#8d8478',
    label: 'extinct',
    border: '#5a5650'
  },
  endangered: {
    dot: '#c43a4e',
    label: 'endangered',
    border: '#c43a4e'
  }
};
const GT_REALMS = ['Mannkind', 'Jötnarkind', 'Drakenthar', 'Wolfkind'];
const GT_REALM_OF = {
  mannkind: 'Mannkind',
  hornfolke: 'Mannkind',
  ironcrown: 'Mannkind',
  stoneborn: 'Mannkind',
  jotnarkind: 'Jötnarkind',
  'frost-jot': 'Jötnarkind',
  'fire-jot': 'Jötnarkind',
  'stone-jot': 'Jötnarkind',
  drakenthar: 'Drakenthar',
  frostwyrm: 'Drakenthar',
  embertongue: 'Drakenthar',
  voidwyrm: 'Drakenthar',
  sundrake: 'Drakenthar',
  wolfkind: 'Wolfkind',
  hearthound: 'Wolfkind',
  icewolf: 'Wolfkind',
  skollwolf: 'Wolfkind'
};

// ─── Component ──────────────────────────────────────────────────
function GenusTree() {
  const [mode, setMode] = useState('show-all'); // 'focused' | 'show-all'
  const [focusId, setFocusId] = useState('drakenthar');
  const [statusFilter, setStatusFilter] = useState(new Set(['extant', 'mythic', 'extinct', 'endangered']));
  const [realmFilter, setRealmFilter] = useState(new Set(GT_REALMS));
  const [zoom, setZoom] = useState(0.85);
  const [showRelated, setShowRelated] = useState(true);
  const focused = GT_SPECIES.find(s => s.id === focusId);

  // Visible set — applies focus walk OR show-all + filters.
  const visibleSet = useMemo(() => {
    const idSet = new Set();
    for (const s of GT_SPECIES) {
      if (!statusFilter.has(s.status)) continue;
      if (!realmFilter.has(GT_REALM_OF[s.id])) continue;
      idSet.add(s.id);
    }
    if (mode === 'focused' && focusId) {
      // Walk ancestors + descendants + siblings (matches genusData.ts).
      const focusReach = new Set([focusId]);
      // ancestors
      let cur = focusId;
      for (let i = 0; i < 50 && cur; i++) {
        const node = GT_SPECIES.find(s => s.id === cur);
        if (!node?.parent) break;
        if (focusReach.has(node.parent)) break;
        focusReach.add(node.parent);
        cur = node.parent;
      }
      // descendants (BFS)
      const queue = [focusId];
      while (queue.length) {
        const next = queue.shift();
        for (const s of GT_SPECIES) if (s.parent === next && !focusReach.has(s.id)) {
          focusReach.add(s.id);
          queue.push(s.id);
        }
      }
      // siblings of focus
      const focusNode = GT_SPECIES.find(s => s.id === focusId);
      if (focusNode?.parent) {
        for (const s of GT_SPECIES) if (s.parent === focusNode.parent) focusReach.add(s.id);
      }
      const out = new Set();
      for (const id of focusReach) if (idSet.has(id)) out.add(id);
      return out;
    }
    return idSet;
  }, [mode, focusId, statusFilter, realmFilter]);
  function toggleSet(set, setter, key) {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);else next.add(key);
    setter(next);
  }

  // Counts for filter chips.
  const statusCounts = useMemo(() => {
    const m = {};
    for (const s of GT_SPECIES) m[s.status] = (m[s.status] || 0) + 1;
    return m;
  }, []);
  const visibleEdges = useMemo(() => {
    const out = [];
    for (const s of GT_SPECIES) {
      if (!s.parent) continue;
      if (!visibleSet.has(s.id) || !visibleSet.has(s.parent)) continue;
      out.push({
        s: s.parent,
        t: s.id,
        type: 'parent'
      });
    }
    if (showRelated) {
      for (const e of GT_RELATED) {
        if (!visibleSet.has(e.s) || !visibleSet.has(e.t)) continue;
        out.push({
          s: e.s,
          t: e.t,
          type: 'related',
          label: e.label
        });
      }
    }
    return out;
  }, [visibleSet, showRelated]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ft gt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-split"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ft-side gt-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-side-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Genus tree"), /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow gt-eye"
  }, "Tools \xB7 Lineage")), /*#__PURE__*/React.createElement("p", {
    className: "ft-hint"
  }, "Single-parent hierarchy. Drag from a species' bottom handle into another's top handle to set ", /*#__PURE__*/React.createElement("em", null, "parent_species"), ". Side handles add a ", /*#__PURE__*/React.createElement("em", null, "related_species"), " cross-link."), focused && /*#__PURE__*/React.createElement("div", {
    className: "gt-focus-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gt-focus-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gt-focus-dot",
    style: {
      background: GT_STATUS[focused.status].dot
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "gt-focus-name"
  }, /*#__PURE__*/React.createElement("span", null, focused.name), /*#__PURE__*/React.createElement("span", {
    className: "gt-focus-rank"
  }, focused.parent ? 'species' : 'clade')), focused.stub && /*#__PURE__*/React.createElement("span", {
    className: "gt-stub-pulse",
    title: "Stub entry"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "gt-focus-fields"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "diet"), /*#__PURE__*/React.createElement("em", null, focused.diet)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "habitat"), /*#__PURE__*/React.createElement("em", null, focused.habitat)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "lifespan"), /*#__PURE__*/React.createElement("em", null, focused.lifespan)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "population"), /*#__PURE__*/React.createElement("em", null, focused.pop)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, "status"), /*#__PURE__*/React.createElement("em", null, GT_STATUS[focused.status].label))), focused.abilities.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "gt-focus-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Abilities"), /*#__PURE__*/React.createElement("div", {
    className: "gt-chip-flow"
  }, focused.abilities.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    className: "gt-ability"
  }, a)))), focused.notable.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "gt-focus-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Notable individuals"), /*#__PURE__*/React.createElement("ul", {
    className: "gt-notable"
  }, focused.notable.map(n => /*#__PURE__*/React.createElement("li", {
    key: n
  }, n)))), focused.cultures.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "gt-focus-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Cultures associated"), /*#__PURE__*/React.createElement("div", {
    className: "gt-chip-flow"
  }, focused.cultures.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "gt-culture"
  }, c))))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Status"), /*#__PURE__*/React.createElement("div", {
    className: "ft-chiprow"
  }, Object.entries(GT_STATUS).map(([id, s]) => {
    const on = statusFilter.has(id);
    const n = statusCounts[id] || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "ft-chip gt-status-chip" + (on ? " is-on" : ""),
      onClick: () => toggleSet(statusFilter, setStatusFilter, id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "gt-chip-dot",
      style: {
        background: s.dot
      }
    }), s.label, /*#__PURE__*/React.createElement("span", {
      className: "gt-chip-count"
    }, n));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Clade"), /*#__PURE__*/React.createElement("div", {
    className: "ft-chiprow"
  }, GT_REALMS.map(r => {
    const on = realmFilter.has(r);
    return /*#__PURE__*/React.createElement("button", {
      key: r,
      className: "ft-chip" + (on ? " is-on" : ""),
      onClick: () => toggleSet(realmFilter, setRealmFilter, r)
    }, r);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block ft-settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Tree settings"), /*#__PURE__*/React.createElement("label", {
    className: "ft-toggle"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: showRelated,
    onChange: e => setShowRelated(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Show ", /*#__PURE__*/React.createElement("em", null, "related_species"), " cross-links."))), /*#__PURE__*/React.createElement("div", {
    className: "ft-block ft-cheat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Connector cheatsheet"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "\u2193"), " bottom \u2192 child (parent_species)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "\u2191"), " top \u2192 parent"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "\u2190 \u2192"), " sides \u2192 related (dashed)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("kbd", null, "Alt"), "+click line \u2014 remove"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-stats"
  }, visibleSet.size, "/", GT_SPECIES.length, " visible \xB7 ", visibleEdges.filter(e => e.type === 'parent').length, " hierarchy", showRelated && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", visibleEdges.filter(e => e.type === 'related').length, " related")), /*#__PURE__*/React.createElement("button", {
    className: "ft-reset"
  }, "Reset layout")), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-mode"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (mode === 'focused' ? " is-active" : ""),
    onClick: () => setMode('focused')
  }, "focused"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (mode === 'show-all' ? " is-active" : ""),
    onClick: () => setMode('show-all')
  }, "show all")), /*#__PURE__*/React.createElement("span", {
    className: "gt-bar-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ft-zoom"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(2)))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, Math.round(zoom * 100), "%"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setZoom(z => Math.min(1.5, +(z + 0.1).toFixed(2)))
  }, "+"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip",
    onClick: () => setZoom(0.85)
  }, "fit"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas",
    "data-screen-label": "12 Genus tree"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ft-bg",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "gt-dots",
    x: "0",
    y: "0",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(95,163,148,0.07)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#gt-dots)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ft-stage gt-stage",
    style: {
      transform: `scale(${zoom})`,
      transformOrigin: '0 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "ft-edges",
    width: "1500",
    height: "800",
    style: {
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "gt-arrow",
    viewBox: "0 0 10 10",
    refX: "9",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: "#5fa394"
  }))), visibleEdges.map(e => {
    const a = GT_POS[e.s];
    const b = GT_POS[e.t];
    if (!a || !b) return null;
    if (e.type === 'parent') {
      const x1 = a.x + GT_NODE_W / 2;
      const y1 = a.y + GT_NODE_H;
      const x2 = b.x + GT_NODE_W / 2;
      const y2 = b.y;
      const midY = (y1 + y2) / 2;
      const d = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
      return /*#__PURE__*/React.createElement("path", {
        key: e.s + '-' + e.t,
        d: d,
        stroke: "#5fa394",
        strokeWidth: "1.5",
        fill: "none",
        markerEnd: "url(#gt-arrow)"
      });
    }
    // related: a soft curve between centers
    const x1 = a.x + GT_NODE_W / 2;
    const y1 = a.y + GT_NODE_H / 2;
    const x2 = b.x + GT_NODE_W / 2;
    const y2 = b.y + GT_NODE_H / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx = (x1 + x2) / 2 + dy * 0.15;
    const cy = (y1 + y2) / 2 - dx * 0.15;
    const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
    return /*#__PURE__*/React.createElement("g", {
      key: e.s + '-' + e.t,
      className: "gt-edge-related"
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: "#8aa0ab",
      strokeWidth: "1.25",
      strokeDasharray: "4 4",
      fill: "none",
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 4,
      textAnchor: "middle",
      fill: "#8aa0ab",
      fontSize: "10",
      fontFamily: "var(--font-sans)",
      fontStyle: "italic"
    }, e.label));
  })), GT_SPECIES.map(s => {
    const p = GT_POS[s.id];
    if (!p) return null;
    const visible = visibleSet.has(s.id);
    const isFocus = s.id === focusId;
    const isRoot = s.parent == null;
    const status = GT_STATUS[s.status];
    const className = "ft-node gt-node" + (isFocus ? " is-focus" : "") + (s.stub ? " is-stub" : "") + (isRoot ? " gt-root" : "") + (!visible ? " gt-dimmed" : "");
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: className,
      style: {
        left: p.x,
        top: p.y,
        width: GT_NODE_W,
        height: GT_NODE_H,
        borderColor: isFocus ? '#5fa394' : status.border
      },
      onClick: () => setFocusId(s.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-top"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-right"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-bottom"
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-handle ft-h-left"
    }), /*#__PURE__*/React.createElement("div", {
      className: "ft-node-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "gt-rank-dot",
      style: {
        background: status.dot
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "ft-node-name"
    }, s.name), s.stub && /*#__PURE__*/React.createElement("span", {
      className: "gt-stub-pulse",
      title: "Stub"
    }), s.status === 'extinct' && /*#__PURE__*/React.createElement("span", {
      className: "gt-extinct",
      title: "Extinct"
    }, "\u2020"), s.status === 'mythic' && /*#__PURE__*/React.createElement("span", {
      className: "gt-mythic",
      title: "Mythic / unconfirmed"
    }, "\u2736")), /*#__PURE__*/React.createElement("div", {
      className: "gt-class-line"
    }, s.diet, " \xB7 ", s.habitat), /*#__PURE__*/React.createElement("div", {
      className: "ft-node-meta gt-meta"
    }, isRoot ? 'clade · ' : 'sp · ', s.pop), /*#__PURE__*/React.createElement("a", {
      className: "ft-node-open",
      onClick: e => e.preventDefault()
    }, "open editor"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "ft-minimap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-mm-eye"
  }, "map"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 220 160",
    width: "100%",
    height: "100%"
  }, visibleEdges.filter(e => e.type === 'parent').map(e => {
    const a = GT_POS[e.s];
    const b = GT_POS[e.t];
    if (!a || !b) return null;
    return /*#__PURE__*/React.createElement("line", {
      key: e.s + e.t,
      x1: a.x / 7 + 12,
      y1: a.y / 6 + 10,
      x2: b.x / 7 + 12,
      y2: b.y / 6 + 10,
      stroke: "rgba(95,163,148,0.45)",
      strokeWidth: "0.6"
    });
  }), GT_SPECIES.map(s => {
    const p = GT_POS[s.id];
    if (!p) return null;
    const visible = visibleSet.has(s.id);
    return /*#__PURE__*/React.createElement("rect", {
      key: s.id,
      x: p.x / 7 + 8,
      y: p.y / 6 + 7,
      width: "9",
      height: "6",
      rx: "1",
      fill: s.id === focusId ? '#b85a2c' : visible ? GT_STATUS[s.status].dot : '#3a3530',
      opacity: visible ? 1 : 0.4
    });
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "76",
    height: "56",
    fill: "none",
    stroke: "rgba(184,90,44,0.7)",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "gt-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Edges"), /*#__PURE__*/React.createElement("div", {
    className: "gt-leg-row"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "10"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "5",
    x2: "30",
    y2: "5",
    stroke: "#5fa394",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("span", null, "parent_species")), /*#__PURE__*/React.createElement("div", {
    className: "gt-leg-row"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "10"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "5",
    x2: "30",
    y2: "5",
    stroke: "#8aa0ab",
    strokeWidth: "1.25",
    strokeDasharray: "4 3"
  })), /*#__PURE__*/React.createElement("span", null, "related_species")))))));
}
window.GenusTree = GenusTree;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/GenusTree.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/LibraryBrowser.jsx
try { (() => {
/* global React, EntryCard */
const {
  useState: useStateLib
} = React;

// Type → swatch color (matches sidebar)
const TYPE_COLOR = {
  Character: "#d99366",
  Place: "#7da265",
  Faction: "#c43a4e",
  Culture: "#a07cc8",
  Event: "#8d8478",
  Language: "#8aa0ab",
  Spell: "#6b89c2",
  Rune: "#c9a227",
  Artefact: "#a8814d"
};
const ENTRIES = [
// ─── Characters ────────────────────────────────────────────────
{
  id: "sigrun",
  filter: "characters",
  type: "Character",
  name: "Sigrun Ulfsdottir",
  faction: "Iron Crown",
  aliases: "'The Iron-Crown' · 'Wolf of Kernow'",
  snippet: "Daughter of Ulf, jarl of Caernarfon. She took the oath at fifteen and the crown at twenty-three, after her father fell at the burning of Hellas.",
  thumb: "../../assets/characters/spearmaiden.png",
  status: "stub",
  links: 12,
  edited: "2 days ago"
}, {
  id: "ulf",
  filter: "characters",
  type: "Character",
  name: "Ulf the Wolf-Father",
  faction: "Iron Crown",
  aliases: "Ulf jarl Caernarfon · 'Wolf-Father'",
  snippet: "Founder of the Iron Crown confederation. Fell at the burning of Hellas in the third winter of the long war. Father of Sigrun.",
  thumb: "../../assets/characters/huskarl.png",
  status: "complete",
  links: 23,
  edited: "5 days ago"
}, {
  id: "kernow-king",
  filter: "characters",
  type: "Character",
  name: "Bran ap Cadwy",
  faction: "Kingdom of Kernow",
  aliases: "The Stone-King · Bran of the Twelve Towers",
  snippet: "King of Kernow at the time of the landing. A scholar before he was a king. Resisted the call to war until the third dawn of the siege.",
  thumb: "../../assets/characters/kernow-king.png",
  status: "draft",
  links: 18,
  edited: "1 week ago"
}, {
  id: "spearmaiden",
  filter: "characters",
  type: "Character",
  name: "Astrid Half-Hand",
  faction: "Iron Crown",
  aliases: "Astrid skjaldmaer",
  snippet: "Sigrun's shield-sister and second. Lost two fingers at the breaking of the Avalon ice. Refuses a bow, fights only with the spear.",
  thumb: "../../assets/characters/raider.png",
  status: "stub",
  links: 8,
  edited: "today"
}, {
  id: "young-raider",
  filter: "characters",
  type: "Character",
  name: "Hakon the Quiet",
  faction: "Iron Crown",
  aliases: null,
  snippet: "A boy of fourteen winters when Sigrun took him from the smoke of his village. He has not spoken since, but he hears every word said in the hall.",
  thumb: "../../assets/characters/young-raider.png",
  status: "stub",
  links: 4,
  edited: "yesterday"
}, {
  id: "bear",
  filter: "characters",
  type: "Character",
  name: "The Bear of Hornfolke",
  faction: "Hornfolke",
  aliases: "Skall \u2014 the brown one",
  snippet: "An ancestor-spirit who walks the high passes in the form of a great brown bear. Said to demand a name in trade for safe passage.",
  thumb: "../../assets/characters/bear.png",
  status: "draft",
  links: 7,
  edited: "3 days ago"
},
// ─── Places ────────────────────────────────────────────────────
{
  id: "caernarfon",
  filter: "places",
  type: "Place",
  name: "Caernarfon",
  faction: "Kingdom — seat of the Iron Crown",
  aliases: "Caer-na-Carn · 'The Hall on the Fjord'",
  snippet: "The longhall and stone-keep at the head of the Caernarfon estuary. Seat of Ulf, then Sigrun. Twelve hearths, three rune-walls, one well that has never frozen.",
  thumb: "../../assets/plates/kernow.png",
  status: "complete",
  links: 19,
  edited: "today"
}, {
  id: "alba",
  filter: "places",
  type: "Place",
  name: "Alba",
  faction: "Highland kingdoms",
  aliases: "The High Country · The North-Above",
  snippet: "The mountain country north of the wall, where the winter kings still keep the old fires. Few roads, fewer welcomes. A place that remembers names longer than people do.",
  thumb: "../../assets/plates/alba.png",
  status: "draft",
  links: 11,
  edited: "4 days ago"
}, {
  id: "yggdrasil",
  filter: "places",
  type: "Place",
  name: "Yggdrasil",
  faction: "Cosmic — the world-tree",
  aliases: "The Ash · The World-Spine",
  snippet: "The great ash that grew from the seed Odin planted in Niflheimr. Its roots span the Ginnungagap; four worlds were shaped from the fruit it bore on the first dawn.",
  thumb: "../../assets/plates/forest.png",
  status: "stub",
  links: 34,
  edited: "1 week ago"
}, {
  id: "hellas",
  filter: "places",
  type: "Place",
  name: "Hellas",
  faction: "Ruined city — Empire of the South",
  aliases: "The Burning · 'The Ash-Coast'",
  snippet: "Once the brightest of the southern cities, now a salt-glass ruin. Burned in the third winter of the long war. Ulf the Wolf-Father fell within its harbour walls.",
  thumb: "../../assets/plates/hellas.png",
  status: "draft",
  links: 16,
  edited: "5 days ago"
},
// ─── Factions ──────────────────────────────────────────────────
{
  id: "iron-crown",
  filter: "factions",
  type: "Faction",
  name: "The Iron Crown",
  faction: "Confederation of jarldoms",
  aliases: "Járnkróna · 'The Wolf-Banner'",
  snippet: "The confederation Ulf bound together with seven oaths and a circle of black iron. Sigrun wears the crown now; the oaths still hold, though three of the seven jarls are dead.",
  thumb: "../../assets/plates/hornfolke.png",
  status: "complete",
  links: 27,
  edited: "today"
}, {
  id: "asgardr",
  filter: "factions",
  type: "Faction",
  name: "Ásgarðr",
  faction: "Clan of the Aesir",
  aliases: "The Asgardians · 'The Hall-Above'",
  snippet: "The hall of the Aesir, seated above Midgard on the high branch of Yggdrasil. Odin sits at its head; Frigg keeps its threshold; Thor its outer wall.",
  thumb: "../../assets/plates/empire.png",
  status: "stub",
  links: 41,
  edited: "2 days ago"
}, {
  id: "kernow",
  filter: "factions",
  type: "Faction",
  name: "Kingdom of Kernow",
  faction: "Old kingdom of the south",
  aliases: "The Stone-Kingdom · Cair-now",
  snippet: "The oldest standing kingdom on the southern coast. Ruled from twelve towers. Refused the Iron Crown's hand twice; signed the Treaty of Avalon at the third asking.",
  thumb: "../../assets/plates/dumnonia.png",
  status: "draft",
  links: 14,
  edited: "6 days ago"
},
// ─── Cultures ──────────────────────────────────────────────────
{
  id: "hornfolke",
  filter: "cultures",
  type: "Culture",
  name: "The Hornfolke",
  faction: "Northmen of the petty kingdoms",
  aliases: "The Northmen · 'The Horn-Wearers'",
  snippet: "Tribal kingdoms of the long northern coast. They reckon the year by frosts, not by months. Their oaths are sworn on iron and remembered in ash.",
  thumb: "../../assets/plates/hornfolke.png",
  status: "complete",
  links: 22,
  edited: "today"
}, {
  id: "winter-kings",
  filter: "cultures",
  type: "Culture",
  name: "The Winter Kings",
  faction: "Highlanders of Alba",
  aliases: "Konunga vetrar · 'The Old Crowns'",
  snippet: "The parent culture of the Hornfolke. They keep the old fires above the wall, name their daughters for storms, and bury their dead standing.",
  thumb: "../../assets/plates/tundra.png",
  status: "draft",
  links: 9,
  edited: "3 days ago"
}, {
  id: "ice-jotnar",
  filter: "cultures",
  type: "Culture",
  name: "Ice Jotnar",
  faction: "Giants of the deep frost",
  aliases: "Hrímþursar · 'The First-Born'",
  snippet: "The eldest of the giant-kin, born of the frost in Niflheimr before the gods drew breath. They speak only in the older tongue, and only at the turning of the year.",
  thumb: "../../assets/plates/firefalls.png",
  status: "stub",
  links: 18,
  edited: "1 week ago"
},
// ─── Events ────────────────────────────────────────────────────
{
  id: "burning-hellas",
  filter: "events",
  type: "Event",
  name: "The Burning of Hellas",
  faction: "Yr 23 — Long War, third winter",
  aliases: "The Ash-Dawn",
  snippet: "The night the southern city fell to the long war. Ulf the Wolf-Father was among the dead by morning. Sigrun took the crown nine days later at Caernarfon.",
  thumb: "../../assets/plates/hellas.png",
  status: "complete",
  links: 31,
  edited: "yesterday"
}, {
  id: "yggdrasil-fruit",
  filter: "events",
  type: "Event",
  name: "Yggdrasil Bears Fruit",
  faction: "Before-time — first dawn",
  aliases: "The Four-Worlds Dawn",
  snippet: "The great ash bore four fruits, which the gods shaped into the four Middle Earths. Ymir's blood became the seas, his hair the forests, his teeth the mountains.",
  thumb: "../../assets/plates/forest.png",
  status: "draft",
  links: 28,
  edited: "2 days ago"
}, {
  id: "treaty-avalon",
  filter: "events",
  type: "Event",
  name: "The Treaty of Avalon",
  faction: "Yr 31 — Long War, fifth spring",
  aliases: "The Cold-Pact",
  snippet: "The pact sworn on the broken ice between Sigrun, Bran of Kernow, and the three remaining jarls. Eleven oaths, one circle of iron, no witnesses but the gulls.",
  thumb: "../../assets/plates/avalon.png",
  status: "stub",
  links: 17,
  edited: "today"
},
// ─── Languages ─────────────────────────────────────────────────
{
  id: "drakenthar",
  filter: "languages",
  type: "Language",
  name: "Drakenthar",
  faction: "Tongue of dragons",
  aliases: "High Speech · Dragon-tongue",
  snippet: "The dragon-tongue, in which the speaker is assumed to be a god. There is no word for 'please' and no grammar for 'perhaps'. Three registers: high, low, and the void.",
  thumb: "../../assets/plates/firefalls.png",
  status: "complete",
  links: 12,
  edited: "4 days ago"
}, {
  id: "runadhrimir",
  filter: "languages",
  type: "Language",
  name: "Runadhrimir",
  faction: "Old tongue of the rune-makers",
  aliases: "Rune-speech · 'The Carved Tongue'",
  snippet: "The first written speech, taught to men by Mimir at the well. Each word has a shape; each shape has a weight. To write it wrong is to be answered by the wrong god.",
  thumb: "../../assets/plates/coastal.png",
  status: "draft",
  links: 24,
  edited: "today"
}, {
  id: "low-speech",
  filter: "languages",
  type: "Language",
  name: "Low Speech",
  faction: "Common tongue of Midgard",
  aliases: "Midgardr-mál · 'Hearth-Tongue'",
  snippet: "The tongue spoken in every harbour and every hall from Alba to the southern wall. Borrowed from a hundred others; owes its grammar to the Hornfolke and its words to everyone else.",
  thumb: "../../assets/plates/grassland.png",
  status: "stub",
  links: 9,
  edited: "1 week ago"
},
// ─── Spells ────────────────────────────────────────────────────
{
  id: "spell-still-the-tide",
  filter: "spells",
  type: "Spell",
  name: "Still the Tide",
  faction: "Sea-rite · taught by Njordr",
  aliases: "Sjór-stilling",
  snippet: "A nine-line incantation that lays a fjord flat for the time it takes a longship to cross. Costs the caster their voice for as many days as the crossing takes hours.",
  thumb: "../../assets/plates/coastal.png",
  status: "draft",
  links: 7,
  edited: "today"
}, {
  id: "spell-name-the-bear",
  filter: "spells",
  type: "Spell",
  name: "Name the Bear",
  faction: "Hornfolke rune-rite",
  aliases: "Bjarn-nafn",
  snippet: "A binding that asks the bear-spirit of the high passes for safe passage. Three runes scored into birch, three drops of blood, one true name spoken aloud to the wind.",
  thumb: "../../assets/plates/mountains.png",
  status: "stub",
  links: 5,
  edited: "yesterday"
}, {
  id: "spell-iron-oath",
  filter: "spells",
  type: "Spell",
  name: "The Iron Oath",
  faction: "Binding-rite · Iron Crown",
  aliases: "Járn-eiðr",
  snippet: "The oath that binds a jarl to the Crown. Sworn on a circle of black iron, sealed in salt, and unbreakable except by death — the swearer's, or the crown-holder's.",
  thumb: "../../assets/plates/hornfolke.png",
  status: "complete",
  links: 19,
  edited: "2 days ago"
},
// ─── Runes ─────────────────────────────────────────────────────
{
  id: "rune-fehu",
  filter: "runes",
  type: "Rune",
  name: "Fehu — Cattle, Wealth",
  faction: "First of the elder row",
  aliases: "ᚠ · 'The Open Hand'",
  snippet: "The first rune. Cut into the lintel of a hall, it asks the gods to keep the herd fat and the door open. Cut backwards, it asks the same of an enemy's house, in mockery.",
  thumb: "../../assets/icons/rune.png",
  status: "draft",
  links: 11,
  edited: "3 days ago"
}, {
  id: "rune-isa",
  filter: "runes",
  type: "Rune",
  name: "Isa — Ice, Stillness",
  faction: "Eleventh of the elder row",
  aliases: "ᛁ · 'The Standing-Still'",
  snippet: "A single vertical stroke. The rune of held breath, of the frozen river, of the moment between the swing and the cut. Worn at the throat by oath-takers.",
  thumb: "../../assets/icons/rune.png",
  status: "stub",
  links: 8,
  edited: "today"
}, {
  id: "rune-tiwaz",
  filter: "runes",
  type: "Rune",
  name: "Tiwaz — The God-Spear",
  faction: "Seventeenth of the elder row",
  aliases: "ᛏ · 'Tyr's Mark'",
  snippet: "The rune of victory bought with sacrifice. Cut into spear-hafts before battle. The Iron Crown carries it on its inner band, where only the wearer can see it.",
  thumb: "../../assets/icons/rune.png",
  status: "complete",
  links: 14,
  edited: "yesterday"
},
// ─── Artefacts ─────────────────────────────────────────────────
{
  id: "iron-crown-relic",
  filter: "artefacts",
  type: "Artefact",
  name: "The Iron Crown",
  faction: "Relic — seat of the confederation",
  aliases: "Járnkróna · 'The Wolf-Crown'",
  snippet: "A circle of black iron, beaten cold, set with no jewel. Forged by Ulf from the prow-nails of the seven first ships. Bears the Tiwaz rune on its inner band.",
  thumb: "../../assets/icons/artefact.png",
  status: "complete",
  links: 22,
  edited: "today"
}, {
  id: "wolf-banner",
  filter: "artefacts",
  type: "Artefact",
  name: "The Wolf-Banner",
  faction: "Standard of the Iron Crown",
  aliases: "Vargs-merki",
  snippet: "Black wolf on a field of ember-red, woven by Hilda Steel-Eye in the year of the long frost. Carried before Sigrun at every council and every crossing.",
  thumb: "../../assets/icons/artefact.png",
  status: "draft",
  links: 13,
  edited: "4 days ago"
}, {
  id: "mimirs-horn",
  filter: "artefacts",
  type: "Artefact",
  name: "Mímir's Horn",
  faction: "Vessel · drawn from the well",
  aliases: "Gjallarhorn-bróðir · 'The Quiet Horn'",
  snippet: "The drinking-horn that Mimir keeps at the well. Whoever drinks from it tastes the water of the well — and pays the well its price. Odin paid an eye. No-one has paid less.",
  thumb: "../../assets/icons/artefact.png",
  status: "stub",
  links: 26,
  edited: "1 week ago"
}];

// Decorate every entry with its type color so EntryCard / EntryView keep working.
ENTRIES.forEach(e => {
  e.color = TYPE_COLOR[e.type] || "#d6c9a8";
});

// Pretty zone-header copy per filter.
const ZONE_HEADERS = {
  all: {
    eyebrow: "The library — every shelf",
    title: "All entries",
    sub: n => `${n} entries · across nine kinds`
  },
  characters: {
    eyebrow: "Chapter ii — the iron crown",
    title: "Characters",
    sub: n => `${n} entries · 6 highlighted`
  },
  places: {
    eyebrow: "Chapter iii — the nine worlds",
    title: "Places",
    sub: n => `${n} entries · 23 in the atlas`
  },
  factions: {
    eyebrow: "Chapter iv — banners & oaths",
    title: "Factions",
    sub: n => `${n} entries · 11 known houses`
  },
  cultures: {
    eyebrow: "Chapter v — the peoples",
    title: "Cultures",
    sub: n => `${n} entries · 6 living, 1 lost`
  },
  events: {
    eyebrow: "Chapter vi — the long reckoning",
    title: "Events",
    sub: n => `${n} entries · spanning four ages`
  },
  languages: {
    eyebrow: "Chapter vii — the carved tongues",
    title: "Languages",
    sub: n => `${n} entries · 4 still spoken`
  },
  spells: {
    eyebrow: "Chapter viii — the rites",
    title: "Spells",
    sub: n => `${n} entries · 17 drafted, 4 verified`
  },
  runes: {
    eyebrow: "Chapter ix — the elder row",
    title: "Runes",
    sub: n => `${n} entries · 24 of the elder row`
  },
  artefacts: {
    eyebrow: "Chapter x — relics & regalia",
    title: "Artefacts",
    sub: n => `${n} entries · 19 catalogued, 3 lost`
  }
};

// Per-filter zone-plate background
const ZONE_PLATES = {
  all: "../../assets/plates/coastal.png",
  characters: "../../assets/plates/kernow.png",
  places: "../../assets/plates/mountains.png",
  factions: "../../assets/plates/empire.png",
  cultures: "../../assets/plates/hornfolke.png",
  events: "../../assets/plates/hellas.png",
  languages: "../../assets/plates/avalon.png",
  spells: "../../assets/plates/firefalls.png",
  runes: "../../assets/plates/desert.png",
  artefacts: "../../assets/plates/dumnonia.png"
};

// Per-filter "+ New …" button label
const NEW_LABELS = {
  all: "+ New entry",
  characters: "+ New character",
  places: "+ New place",
  factions: "+ New faction",
  cultures: "+ New culture",
  events: "+ New event",
  languages: "+ New language",
  spells: "+ New spell",
  runes: "+ New rune",
  artefacts: "+ New artefact"
};
function LibraryBrowser({
  activeFilter,
  onFilter,
  onOpenEntry,
  focusedId
}) {
  const filters = [{
    id: "all",
    label: "All",
    color: null
  }, {
    id: "characters",
    label: "Characters",
    color: "#d99366"
  }, {
    id: "places",
    label: "Places",
    color: "#7da265"
  }, {
    id: "factions",
    label: "Factions",
    color: "#c43a4e"
  }, {
    id: "cultures",
    label: "Cultures",
    color: "#a07cc8"
  }, {
    id: "events",
    label: "Events",
    color: "#8d8478"
  }, {
    id: "languages",
    label: "Languages",
    color: "#8aa0ab"
  }, {
    id: "spells",
    label: "Spells",
    color: "#6b89c2"
  }, {
    id: "runes",
    label: "Runes",
    color: "#c9a227"
  }, {
    id: "artefacts",
    label: "Artefacts",
    color: "#a8814d"
  }];
  const filterId = activeFilter || "characters";
  const visible = filterId === "all" ? ENTRIES : ENTRIES.filter(e => e.filter === filterId);
  const header = ZONE_HEADERS[filterId] || ZONE_HEADERS.all;
  const plate = ZONE_PLATES[filterId] || ZONE_PLATES.all;
  const newLabel = NEW_LABELS[filterId] || "+ New entry";
  return /*#__PURE__*/React.createElement("section", {
    className: "mim-library"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-zone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-zone-plate",
    style: {
      backgroundImage: `url('${plate}')`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-zone-fade"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mim-zone-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, header.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "mim-zone-title"
  }, header.title), /*#__PURE__*/React.createElement("p", {
    className: "mim-zone-sub"
  }, header.sub(visible.length))), /*#__PURE__*/React.createElement("div", {
    className: "mim-zone-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-ghost"
  }, "Sort: recent"), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary"
  }, newLabel))), /*#__PURE__*/React.createElement("div", {
    className: "mim-filters"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => onFilter(f.id),
    className: "mim-chip" + (filterId === f.id ? " is-active" : ""),
    style: {
      "--chip-c": f.color || "var(--fg-2)"
    }
  }, f.color && /*#__PURE__*/React.createElement("span", {
    className: "mim-chip-dot"
  }), f.label)), /*#__PURE__*/React.createElement("span", {
    className: "mim-filter-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "mim-chip-ghost"
  }, "view: list"), /*#__PURE__*/React.createElement("button", {
    className: "mim-chip-ghost"
  }, "stub only")), /*#__PURE__*/React.createElement("div", {
    className: "mim-entries"
  }, visible.map(entry => /*#__PURE__*/React.createElement(EntryCard, {
    key: entry.id,
    entry: entry,
    focused: focusedId === entry.id,
    onClick: () => onOpenEntry(entry)
  }))));
}
window.LibraryBrowser = LibraryBrowser;
window.MIM_ENTRIES = ENTRIES;
window.MIM_TYPE_COLOR = TYPE_COLOR;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/LibraryBrowser.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/RelationshipsWeb.jsx
try { (() => {
/* global React */
/*
 * RelationshipsWeb — /relationships route.
 *
 * The HEAVY tree. Force-directed graph of every typed relationship
 * across the world. Mirrors the real route's architecture
 * (src/routes/Relationships.tsx + Phase A item 7-5+ engine):
 *
 *   • Pure force layout — k/d² repulsion + spring attraction + a
 *     gentle center pull. Runs once at mount on the FULL dataset
 *     so layout stays stable across filter changes (filters dim,
 *     don't relayout).
 *
 *   • Three render layers, all togglable:
 *       - TYPED       — relationship edges (per-type colour;
 *                       width tracks |score|).
 *       - KINSHIP     — family edges walked from character
 *                       relationships[] (muted dashed grey).
 *       - WIKI-LINKS  — frontmatter + body wiki-link cross-refs
 *                       (faint grey, very thin).
 *
 *   • Filter pipeline (matches relationshipsFilters.ts):
 *       applyEdgeFilters → applyNodeFilters → applyFocus.
 *       - type ids (per-edge)
 *       - score min/max
 *       - entity type (Character / Faction / Place / Culture /
 *         Species)
 *       - tags
 *       - focus anchor (1-hop, then 2-hop subgraph)
 *
 *   • View-mode toggle: GRAPH (default) ↔ MATRIX (read-only
 *     entities × entities table with type-colour cells +
 *     score text; matches sub-stage 7-6d).
 */

const {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback
} = React;

// ─── Relationship type catalogue (14 bundled defaults) ──────────
const RW_TYPES = [
// political (warm reds + greens)
{
  id: 'allied',
  label: 'Allied',
  category: 'political',
  color: '#5fa394',
  bias: '+'
}, {
  id: 'at-war',
  label: 'At war',
  category: 'political',
  color: '#c43a4e',
  bias: '−'
}, {
  id: 'trade-partner',
  label: 'Trade partner',
  category: 'political',
  color: '#7da265',
  bias: '+'
}, {
  id: 'neutral',
  label: 'Neutral',
  category: 'political',
  color: '#8aa0ab',
  bias: '·'
},
// organisational (yellows / golds)
{
  id: 'sworn-to',
  label: 'Sworn to',
  category: 'organisational',
  color: '#c9a227',
  bias: '+'
}, {
  id: 'liege-of',
  label: 'Liege of',
  category: 'organisational',
  color: '#b87f10',
  bias: '+'
}, {
  id: 'vassal',
  label: 'Vassal of',
  category: 'organisational',
  color: '#d6b35a',
  bias: '+'
},
// personal (warm oranges)
{
  id: 'friendship',
  label: 'Friendship',
  category: 'personal',
  color: '#d99366',
  bias: '+'
}, {
  id: 'lover',
  label: 'Lover',
  category: 'personal',
  color: '#e58da0',
  bias: '+'
}, {
  id: 'mentor',
  label: 'Mentor of',
  category: 'personal',
  color: '#a07cc8',
  bias: '+'
}, {
  id: 'apprentice',
  label: 'Apprentice of',
  category: 'personal',
  color: '#8a6cad',
  bias: '+'
}, {
  id: 'rivalry',
  label: 'Rivalry',
  category: 'personal',
  color: '#b85a2c',
  bias: '−'
},
// ideological (cold)
{
  id: 'enemy',
  label: 'Enemy',
  category: 'ideological',
  color: '#902434',
  bias: '−'
}, {
  id: 'oath-broken',
  label: 'Oath broken',
  category: 'ideological',
  color: '#5a5650',
  bias: '−'
}];
const RW_TYPE_MAP = Object.fromEntries(RW_TYPES.map(t => [t.id, t]));
const RW_CATEGORIES = ['political', 'organisational', 'personal', 'ideological'];

// ─── Entity-type palette ────────────────────────────────────────
const RW_ENTITY_PALETTE = {
  character: {
    color: '#d99366',
    label: 'Character'
  },
  faction: {
    color: '#c43a4e',
    label: 'Faction'
  },
  place: {
    color: '#7da265',
    label: 'Place'
  },
  culture: {
    color: '#a07cc8',
    label: 'Culture'
  },
  species: {
    color: '#5fa394',
    label: 'Species'
  },
  event: {
    color: '#8d8478',
    label: 'Event'
  }
};

// ─── Nodes (mixed entity types, Shieldwall vocabulary) ──────────
const RW_NODES = [
// Characters
{
  id: 'bjornar',
  name: 'Bjornar',
  type: 'character',
  tags: ['royal', 'iron-crown'],
  stub: false,
  desc: 'King of the Iron Crown.'
}, {
  id: 'sigrun',
  name: 'Sigrun',
  type: 'character',
  tags: ['shield-bearer', 'iron-crown'],
  stub: false,
  desc: 'Sworn shield-bearer.'
}, {
  id: 'vaerin',
  name: 'Vaerin',
  type: 'character',
  tags: ['counsel', 'iron-crown'],
  stub: false,
  desc: 'Crown counsellor.'
}, {
  id: 'hjalmar',
  name: 'Hjalmar',
  type: 'character',
  tags: ['military', 'iron-crown'],
  stub: false,
  desc: 'Marshal of the Wall.'
}, {
  id: 'skaldyrn',
  name: 'Skaldyrn',
  type: 'character',
  tags: ['skald', 'deceased'],
  stub: false,
  desc: 'The crown-skald, deceased.'
}, {
  id: 'ynla',
  name: 'Ynla',
  type: 'character',
  tags: ['cult', 'oracle'],
  stub: false,
  desc: 'Oracle of the Well.'
}, {
  id: 'thrain',
  name: 'Thrain',
  type: 'character',
  tags: ['cult', 'bone-priest'],
  stub: false,
  desc: 'Bone-priest of Mimir.'
}, {
  id: 'sothren',
  name: 'Sothren',
  type: 'character',
  tags: ['watch', 'embertongue'],
  stub: false,
  desc: 'Watch-captain.'
}, {
  id: 'helka',
  name: 'Helka',
  type: 'character',
  tags: ['royal', 'iron-crown', 'heir'],
  stub: true,
  desc: 'Heir-apparent.'
}, {
  id: 'vethren',
  name: 'Vethren',
  type: 'character',
  tags: ['watch', 'sky-scryer'],
  stub: true,
  desc: 'Sky-scryer apprentice.'
},
// Factions
{
  id: 'iron-crown',
  name: 'Iron Crown',
  type: 'faction',
  tags: ['noble-house', 'iron-crown'],
  stub: false,
  desc: 'Noble house holding the shieldwall.'
}, {
  id: 'cult-mimir',
  name: 'Cult of Mimir',
  type: 'faction',
  tags: ['cult', 'void'],
  stub: false,
  desc: 'Wellhead cult.'
}, {
  id: 'skalds',
  name: 'Hornfolke Skalds',
  type: 'faction',
  tags: ['guild', 'lore'],
  stub: false,
  desc: 'Chronicler-poets.'
}, {
  id: 'watch',
  name: 'Embertongue Watch',
  type: 'faction',
  tags: ['order', 'dragon'],
  stub: false,
  desc: 'Wyrm-trackers.'
}, {
  id: 'stoneborn',
  name: 'Stoneborn Holds',
  type: 'faction',
  tags: ['clan', 'mountain'],
  stub: false,
  desc: 'Mountain clan.'
},
// Places
{
  id: 'hearthstead',
  name: 'Hearthstead',
  type: 'place',
  tags: ['seat', 'iron-crown'],
  stub: false,
  desc: 'Crown seat-of-power.'
}, {
  id: 'well',
  name: 'The Well',
  type: 'place',
  tags: ['sacred', 'mimir'],
  stub: false,
  desc: "Mimir's wellhead."
}, {
  id: 'frostholm',
  name: 'Frostholm',
  type: 'place',
  tags: ['fortress', 'border'],
  stub: true,
  desc: 'Frontier fortress.'
}, {
  id: 'bryn-hollow',
  name: 'Bryn Hollow',
  type: 'place',
  tags: ['battleground'],
  stub: false,
  desc: 'Recent battleground.'
},
// Cultures
{
  id: 'hornfolke',
  name: 'Hornfolke',
  type: 'culture',
  tags: ['northern'],
  stub: false,
  desc: 'Northern-fell culture.'
}, {
  id: 'iron-culture',
  name: 'Iron Crown culture',
  type: 'culture',
  tags: ['lowland'],
  stub: false,
  desc: 'Lowland court culture.'
},
// Species
{
  id: 'drakenthar',
  name: 'Drakenthar',
  type: 'species',
  tags: ['ancient'],
  stub: false,
  desc: 'Dragonkind clade.'
}, {
  id: 'frost-jot',
  name: 'Frost-jötnar',
  type: 'species',
  tags: ['giantkind'],
  stub: false,
  desc: 'Frost giants.'
}];

// ─── Typed edges (with score [-100, 100]) ───────────────────────
const RW_EDGES = [
// Character ↔ character
{
  s: 'sigrun',
  t: 'bjornar',
  type: 'sworn-to',
  score: 95
}, {
  s: 'helka',
  t: 'bjornar',
  type: 'sworn-to',
  score: 90
}, {
  s: 'vaerin',
  t: 'bjornar',
  type: 'mentor',
  score: 75
}, {
  s: 'bjornar',
  t: 'skaldyrn',
  type: 'apprentice',
  score: 70
}, {
  s: 'thrain',
  t: 'ynla',
  type: 'sworn-to',
  score: 85
}, {
  s: 'vethren',
  t: 'sothren',
  type: 'apprentice',
  score: 80
}, {
  s: 'sothren',
  t: 'vethren',
  type: 'mentor',
  score: 80
}, {
  s: 'bjornar',
  t: 'ynla',
  type: 'rivalry',
  score: -70
}, {
  s: 'bjornar',
  t: 'sothren',
  type: 'friendship',
  score: 55
}, {
  s: 'vaerin',
  t: 'ynla',
  type: 'friendship',
  score: 42
}, {
  s: 'hjalmar',
  t: 'ynla',
  type: 'enemy',
  score: -82
}, {
  s: 'sigrun',
  t: 'helka',
  type: 'friendship',
  score: 60
}, {
  s: 'vaerin',
  t: 'skaldyrn',
  type: 'mentor',
  score: 65
},
// Faction ↔ faction
{
  s: 'iron-crown',
  t: 'stoneborn',
  type: 'allied',
  score: 85
}, {
  s: 'iron-crown',
  t: 'skalds',
  type: 'allied',
  score: 75
}, {
  s: 'iron-crown',
  t: 'cult-mimir',
  type: 'at-war',
  score: -80
}, {
  s: 'iron-crown',
  t: 'stoneborn',
  type: 'trade-partner',
  score: 50
}, {
  s: 'cult-mimir',
  t: 'iron-crown',
  type: 'enemy',
  score: -95
}, {
  s: 'cult-mimir',
  t: 'watch',
  type: 'allied',
  score: 60
}, {
  s: 'watch',
  t: 'skalds',
  type: 'trade-partner',
  score: 30
}, {
  s: 'skalds',
  t: 'stoneborn',
  type: 'allied',
  score: 55
},
// Mixed: character ↔ faction (sworn / vassal)
{
  s: 'bjornar',
  t: 'iron-crown',
  type: 'liege-of',
  score: 100
}, {
  s: 'ynla',
  t: 'cult-mimir',
  type: 'liege-of',
  score: 95
}, {
  s: 'sothren',
  t: 'watch',
  type: 'liege-of',
  score: 90
},
// Mixed: place ↔ faction (seat-of)
{
  s: 'iron-crown',
  t: 'hearthstead',
  type: 'liege-of',
  score: 100
}, {
  s: 'cult-mimir',
  t: 'well',
  type: 'liege-of',
  score: 100
},
// Cultural / political
{
  s: 'hornfolke',
  t: 'iron-culture',
  type: 'allied',
  score: 65
}, {
  s: 'hornfolke',
  t: 'skalds',
  type: 'allied',
  score: 80
},
// Species enmity (ancient)
{
  s: 'drakenthar',
  t: 'frost-jot',
  type: 'rivalry',
  score: -55
}, {
  s: 'drakenthar',
  t: 'iron-crown',
  type: 'oath-broken',
  score: -45
},
// Spillover
{
  s: 'frostholm',
  t: 'bryn-hollow',
  type: 'at-war',
  score: -40
}];

// ─── Kinship-layer edges (from character relationships[]) ───────
const RW_KINSHIP = [{
  s: 'bjornar',
  t: 'helka',
  label: 'parent'
}, {
  s: 'vaerin',
  t: 'helka',
  label: 'aunt'
}, {
  s: 'sigrun',
  t: 'hjalmar',
  label: 'sibling'
}, {
  s: 'skaldyrn',
  t: 'bjornar',
  label: 'mentor (kin)'
}, {
  s: 'ynla',
  t: 'thrain',
  label: 'aunt'
}];

// ─── Wiki-link layer (frontmatter + body refs) ──────────────────
const RW_WIKILINKS = [{
  s: 'bjornar',
  t: 'iron-crown'
}, {
  s: 'bjornar',
  t: 'hearthstead'
}, {
  s: 'sigrun',
  t: 'iron-crown'
}, {
  s: 'ynla',
  t: 'well'
}, {
  s: 'sothren',
  t: 'watch'
}, {
  s: 'drakenthar',
  t: 'watch'
}, {
  s: 'hornfolke',
  t: 'skalds'
}, {
  s: 'frost-jot',
  t: 'frostholm'
}, {
  s: 'vaerin',
  t: 'iron-crown'
}, {
  s: 'hjalmar',
  t: 'frostholm'
}, {
  s: 'helka',
  t: 'hearthstead'
}];

// ─── Tiny deterministic force-directed layout ───────────────────
function runForceLayout(nodes, edges, opts = {}) {
  const W = opts.width || 1140;
  const H = opts.height || 760;
  const iters = opts.iters || 320;
  const K_REP = 9500;
  const K_SPRING = 0.028;
  const SPRING_LEN = 145;
  const CENTER = 0.010;
  const DAMPING = 0.72;
  const N = nodes.length;
  // Deterministic seed — golden-angle spiral around center.
  const state = nodes.map((n, i) => {
    const a = i * 2.39996;
    const r = 70 + Math.sqrt(i) * 22;
    return {
      id: n.id,
      x: W / 2 + Math.cos(a) * r,
      y: H / 2 + Math.sin(a) * r,
      vx: 0,
      vy: 0
    };
  });
  const byId = new Map(state.map(s => [s.id, s]));
  for (let t = 0; t < iters; t++) {
    // O(N²) repulsion — fine for ~25 nodes.
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = state[j].x - state[i].x;
        const dy = state[j].y - state[i].y;
        const d2 = Math.max(64, dx * dx + dy * dy);
        const d = Math.sqrt(d2);
        const f = K_REP / d2;
        const fx = dx / d * f;
        const fy = dy / d * f;
        state[i].vx -= fx;
        state[i].vy -= fy;
        state[j].vx += fx;
        state[j].vy += fy;
      }
    }
    // Springs (typed edges only — kinship/wikilinks don't pull).
    for (const e of edges) {
      const a = byId.get(e.s);
      const b = byId.get(e.t);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      const disp = d - SPRING_LEN;
      const f = K_SPRING * disp;
      const fx = dx / d * f;
      const fy = dy / d * f;
      a.vx += fx;
      a.vy += fy;
      b.vx -= fx;
      b.vy -= fy;
    }
    // Center pull.
    for (const s of state) {
      s.vx += (W / 2 - s.x) * CENTER;
      s.vy += (H / 2 - s.y) * CENTER;
    }
    // Integrate + damp.
    for (const s of state) {
      s.x += s.vx;
      s.y += s.vy;
      s.vx *= DAMPING;
      s.vy *= DAMPING;
      s.x = Math.max(40, Math.min(W - 40, s.x));
      s.y = Math.max(40, Math.min(H - 40, s.y));
    }
  }
  const out = {};
  for (const s of state) out[s.id] = {
    x: s.x,
    y: s.y
  };
  return out;
}

// ─── Component ──────────────────────────────────────────────────
function RelationshipsWeb() {
  // View mode
  const [viewMode, setViewMode] = useState('graph'); // 'graph' | 'matrix'

  // Filter state
  const [activeTypes, setActiveTypes] = useState(new Set(RW_TYPES.map(t => t.id)));
  const [scoreMin, setScoreMin] = useState(-100);
  const [scoreMax, setScoreMax] = useState(100);
  const [activeEntityTypes, setActiveEntityTypes] = useState(new Set(Object.keys(RW_ENTITY_PALETTE)));
  const [activeTags, setActiveTags] = useState(new Set());

  // Layer toggles
  const [layers, setLayers] = useState({
    typed: true,
    kinship: false,
    wikilinks: false
  });

  // Focus + hover
  const [focusId, setFocusId] = useState(null);
  const [hoverEdge, setHoverEdge] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);

  // Layout: pre-compute once on full dataset so filters don't relayout.
  const layout = useMemo(() => runForceLayout(RW_NODES, RW_EDGES, {
    width: 1140,
    height: 760
  }), []);

  // === Filter pipeline =========================================
  const filteredEdges = useMemo(() => {
    return RW_EDGES.filter(e => {
      if (e.s === e.t) return false;
      if (!activeTypes.has(e.type)) return false;
      if (e.score < scoreMin) return false;
      if (e.score > scoreMax) return false;
      return true;
    });
  }, [activeTypes, scoreMin, scoreMax]);
  const participantIds = useMemo(() => {
    const s = new Set();
    for (const e of filteredEdges) {
      s.add(e.s);
      s.add(e.t);
    }
    return s;
  }, [filteredEdges]);
  const filteredNodes = useMemo(() => {
    return RW_NODES.filter(n => {
      if (!participantIds.has(n.id)) return false;
      if (!activeEntityTypes.has(n.type)) return false;
      if (activeTags.size > 0 && !n.tags.some(t => activeTags.has(t))) return false;
      return true;
    });
  }, [participantIds, activeEntityTypes, activeTags]);
  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  // Focus reduces to anchor + 2-hop neighborhood.
  const focusReach = useMemo(() => {
    if (!focusId || !filteredNodeIds.has(focusId)) return null;
    const reach = new Set([focusId]);
    for (let hop = 0; hop < 2; hop++) {
      const next = new Set(reach);
      for (const e of filteredEdges) {
        if (reach.has(e.s) && filteredNodeIds.has(e.t)) next.add(e.t);
        if (reach.has(e.t) && filteredNodeIds.has(e.s)) next.add(e.s);
      }
      reach.clear();
      for (const id of next) reach.add(id);
    }
    return reach;
  }, [focusId, filteredEdges, filteredNodeIds]);

  // Final visible sets
  const visibleNodeIds = useMemo(() => {
    if (focusReach) return focusReach;
    return filteredNodeIds;
  }, [focusReach, filteredNodeIds]);
  const visibleEdges = useMemo(() => {
    return filteredEdges.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t));
  }, [filteredEdges, visibleNodeIds]);

  // Degree (for node size)
  const degreeMap = useMemo(() => {
    const m = {};
    for (const e of visibleEdges) {
      m[e.s] = (m[e.s] || 0) + 1;
      m[e.t] = (m[e.t] || 0) + 1;
    }
    return m;
  }, [visibleEdges]);
  const visibleKinship = layers.kinship ? RW_KINSHIP.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [];
  const visibleWikilink = layers.wikilinks ? RW_WIKILINKS.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [];

  // Toggling helpers
  function toggle(setter, set, key) {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);else next.add(key);
    setter(next);
  }
  function toggleAll(setter, allKeys, currentSize) {
    setter(currentSize === allKeys.length ? new Set() : new Set(allKeys));
  }

  // Unique tag list
  const allTags = useMemo(() => {
    const s = new Set();
    for (const n of RW_NODES) for (const t of n.tags) s.add(t);
    return Array.from(s).sort();
  }, []);

  // Counts per axis
  const typeCounts = useMemo(() => {
    const m = {};
    for (const e of RW_EDGES) m[e.type] = (m[e.type] || 0) + 1;
    return m;
  }, []);
  const entityCounts = useMemo(() => {
    const m = {};
    for (const n of RW_NODES) m[n.type] = (m[n.type] || 0) + 1;
    return m;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "ft rw"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-split rw-split"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "ft-side rw-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-side-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Relationships"), /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow rw-eye"
  }, "Tools \xB7 Graph")), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Focus"), focusId && /*#__PURE__*/React.createElement("button", {
    className: "rw-clear",
    onClick: () => setFocusId(null)
  }, "clear")), !focusId ? /*#__PURE__*/React.createElement("select", {
    className: "rw-select",
    value: "",
    onChange: e => e.target.value && setFocusId(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 anchor a subgraph \u2014"), RW_NODES.filter(n => filteredNodeIds.has(n.id)).map(n => /*#__PURE__*/React.createElement("option", {
    key: n.id,
    value: n.id
  }, n.name))) : /*#__PURE__*/React.createElement("div", {
    className: "rw-focus-pill"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-dot",
    style: {
      background: RW_ENTITY_PALETTE[RW_NODES.find(n => n.id === focusId).type].color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-name"
  }, RW_NODES.find(n => n.id === focusId).name), /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-meta"
  }, "2-hop \xB7 ", focusReach?.size || 0, " nodes"))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Layers")), /*#__PURE__*/React.createElement("ul", {
    className: "rw-layer-list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "rw-layer-row" + (layers.typed ? " is-on" : ""),
    onClick: () => setLayers(l => ({
      ...l,
      typed: !l.typed
    }))
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-bar",
    style: {
      background: '#5fa394'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-name"
  }, "Typed edges"), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-count"
  }, filteredEdges.length), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: layers.typed,
    className: "rw-checkbox"
  })), /*#__PURE__*/React.createElement("li", {
    className: "rw-layer-row" + (layers.kinship ? " is-on" : ""),
    onClick: () => setLayers(l => ({
      ...l,
      kinship: !l.kinship
    }))
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-bar",
    style: {
      background: '#8aa0ab'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-name"
  }, "Kinship overlay"), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-count"
  }, RW_KINSHIP.length), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: layers.kinship,
    className: "rw-checkbox"
  })), /*#__PURE__*/React.createElement("li", {
    className: "rw-layer-row" + (layers.wikilinks ? " is-on" : ""),
    onClick: () => setLayers(l => ({
      ...l,
      wikilinks: !l.wikilinks
    }))
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-bar",
    style: {
      background: '#5a5650'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-name"
  }, "Wiki-links overlay"), /*#__PURE__*/React.createElement("span", {
    className: "rw-layer-count"
  }, RW_WIKILINKS.length), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    readOnly: true,
    checked: layers.wikilinks,
    className: "rw-checkbox"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Relationship type"), /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => toggleAll(setActiveTypes, RW_TYPES.map(t => t.id), activeTypes.size)
  }, activeTypes.size === RW_TYPES.length ? 'none' : 'all')), RW_CATEGORIES.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat,
    className: "rw-cat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-cat-eye"
  }, cat), /*#__PURE__*/React.createElement("div", {
    className: "rw-type-grid"
  }, RW_TYPES.filter(t => t.category === cat).map(t => {
    const on = activeTypes.has(t.id);
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "rw-type-chip" + (on ? " is-on" : ""),
      onClick: () => toggle(setActiveTypes, activeTypes, t.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "rw-type-bar",
      style: {
        background: t.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "rw-type-label"
    }, t.label), /*#__PURE__*/React.createElement("span", {
      className: "rw-type-bias"
    }, t.bias), /*#__PURE__*/React.createElement("span", {
      className: "rw-type-count"
    }, typeCounts[t.id] || 0));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Score range"), /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => {
      setScoreMin(-100);
      setScoreMax(100);
    }
  }, "reset")), /*#__PURE__*/React.createElement("div", {
    className: "rw-score"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-score-ruler"
  }, [-100, -50, 0, 50, 100].map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    className: "rw-score-tick"
  }, v))), /*#__PURE__*/React.createElement("div", {
    className: "rw-score-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-score-fill",
    style: {
      left: `${(scoreMin + 100) / 200 * 100}%`,
      right: `${100 - (scoreMax + 100) / 200 * 100}%`
    }
  }), RW_EDGES.map((e, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "rw-score-mark",
    style: {
      left: `${(e.score + 100) / 200 * 100}%`,
      background: RW_TYPE_MAP[e.type].color
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rw-score-inputs"
  }, /*#__PURE__*/React.createElement("label", null, "min", /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: scoreMin,
    min: -100,
    max: scoreMax,
    onChange: e => setScoreMin(Number(e.target.value))
  })), /*#__PURE__*/React.createElement("label", null, "max", /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: scoreMax,
    min: scoreMin,
    max: 100,
    onChange: e => setScoreMax(Number(e.target.value))
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Entity type"), /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => toggleAll(setActiveEntityTypes, Object.keys(RW_ENTITY_PALETTE), activeEntityTypes.size)
  }, activeEntityTypes.size === Object.keys(RW_ENTITY_PALETTE).length ? 'none' : 'all')), /*#__PURE__*/React.createElement("div", {
    className: "rw-ent-grid"
  }, Object.entries(RW_ENTITY_PALETTE).map(([id, p]) => {
    const on = activeEntityTypes.has(id);
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "rw-ent-chip" + (on ? " is-on" : ""),
      onClick: () => toggle(setActiveEntityTypes, activeEntityTypes, id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "rw-ent-dot",
      style: {
        background: p.color
      }
    }), /*#__PURE__*/React.createElement("span", null, p.label), /*#__PURE__*/React.createElement("span", {
      className: "rw-type-count"
    }, entityCounts[id] || 0));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rw-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-block-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Tag"), activeTags.size > 0 && /*#__PURE__*/React.createElement("button", {
    className: "rw-mini",
    onClick: () => setActiveTags(new Set())
  }, "clear")), /*#__PURE__*/React.createElement("div", {
    className: "rw-tag-flow"
  }, allTags.map(t => {
    const on = activeTags.has(t);
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      className: "rw-tag" + (on ? " is-on" : ""),
      onClick: () => toggle(setActiveTags, activeTags, t)
    }, "#", t);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ft-stats rw-stats"
  }, visibleNodeIds.size, "/", RW_NODES.length, " nodes \xB7", ' ', visibleEdges.length, "/", RW_EDGES.length, " edges", layers.kinship && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", visibleKinship.length, " kin"), layers.wikilinks && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", visibleWikilink.length, " links"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-wrap rw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas-bar rw-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ft-mode rw-mode"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (viewMode === 'graph' ? " is-active" : ""),
    onClick: () => setViewMode('graph')
  }, "graph"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (viewMode === 'matrix' ? " is-active" : ""),
    onClick: () => setViewMode('matrix')
  }, "matrix")), /*#__PURE__*/React.createElement("span", {
    className: "rw-bar-meta"
  }, "Force-directed \xB7 ", visibleEdges.length, " typed edges \xB7 ", visibleNodeIds.size, " entries"), /*#__PURE__*/React.createElement("span", {
    className: "gt-bar-spacer"
  }), focusId && /*#__PURE__*/React.createElement("div", {
    className: "rw-focus-bread"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-bread-eye"
  }, "Focused on"), /*#__PURE__*/React.createElement("span", {
    className: "rw-focus-bread-name"
  }, RW_NODES.find(n => n.id === focusId).name), /*#__PURE__*/React.createElement("button", {
    className: "rw-focus-bread-x",
    onClick: () => setFocusId(null)
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "ft-canvas rw-canvas",
    "data-screen-label": "14 Relationships web"
  }, viewMode === 'graph' ? /*#__PURE__*/React.createElement(GraphSurface, {
    nodes: RW_NODES,
    edges: RW_EDGES,
    kinship: RW_KINSHIP,
    wikilinks: RW_WIKILINKS,
    visibleNodeIds: visibleNodeIds,
    visibleEdges: visibleEdges,
    visibleKinship: visibleKinship,
    visibleWikilink: visibleWikilink,
    layout: layout,
    degreeMap: degreeMap,
    focusId: focusId,
    onFocus: setFocusId,
    hoverEdge: hoverEdge,
    setHoverEdge: setHoverEdge,
    hoverNode: hoverNode,
    setHoverNode: setHoverNode
  }) : /*#__PURE__*/React.createElement(MatrixSurface, {
    nodes: RW_NODES,
    visibleNodeIds: visibleNodeIds,
    visibleEdges: visibleEdges
  })))));
}

// ─── Graph surface ──────────────────────────────────────────────
function GraphSurface(props) {
  const {
    nodes,
    layout,
    degreeMap,
    visibleNodeIds,
    visibleEdges,
    visibleKinship,
    visibleWikilink,
    focusId,
    onFocus,
    hoverEdge,
    setHoverEdge,
    hoverNode,
    setHoverNode
  } = props;
  const W = 1140,
    H = 760;

  // 1-hop neighborhood for hover-node highlight
  const neighborhood = useMemo(() => {
    if (!hoverNode) return null;
    const s = new Set([hoverNode]);
    for (const e of visibleEdges) {
      if (e.s === hoverNode) s.add(e.t);
      if (e.t === hoverNode) s.add(e.s);
    }
    return s;
  }, [hoverNode, visibleEdges]);
  function edgePath(s, t, curveIdx = 0) {
    const a = layout[s];
    const b = layout[t];
    if (!a || !b) return '';
    const dx = b.x - a.x,
      dy = b.y - a.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const off = Math.min(28, len * 0.10) * (curveIdx % 2 === 0 ? 1 : -1);
    const cx = (a.x + b.x) / 2 + -dy / len * off;
    const cy = (a.y + b.y) / 2 + dx / len * off;
    return {
      d: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`,
      cx,
      cy
    };
  }
  return /*#__PURE__*/React.createElement("svg", {
    className: "rw-svg",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "rw-dots",
    x: "0",
    y: "0",
    width: "22",
    height: "22",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1",
    fill: "rgba(214,201,168,0.05)"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H,
    fill: "url(#rw-dots)"
  }), visibleWikilink.map((e, i) => {
    const {
      d
    } = edgePath(e.s, e.t, i);
    return /*#__PURE__*/React.createElement("path", {
      key: `wl-${i}`,
      d: d,
      stroke: "rgba(141,132,120,0.35)",
      strokeWidth: "0.8",
      fill: "none"
    });
  }), visibleKinship.map((e, i) => {
    const {
      d,
      cx,
      cy
    } = edgePath(e.s, e.t, i);
    return /*#__PURE__*/React.createElement("g", {
      key: `kin-${i}`
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: "rgba(138,160,171,0.55)",
      strokeWidth: "1.1",
      strokeDasharray: "4 4",
      fill: "none"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 4,
      fill: "rgba(138,160,171,0.7)",
      fontSize: "10",
      textAnchor: "middle",
      fontFamily: "var(--font-sans)",
      fontStyle: "italic"
    }, e.label));
  }), visibleEdges.map((e, i) => {
    const t = RW_TYPE_MAP[e.type];
    const {
      d,
      cx,
      cy
    } = edgePath(e.s, e.t, i);
    const isHovered = hoverEdge === i;
    const isFaded = hoverEdge !== null && !isHovered || neighborhood && !(neighborhood.has(e.s) && neighborhood.has(e.t));
    const widthByScore = Math.max(1.0, Math.abs(e.score) / 38);
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      className: "rw-edge",
      style: {
        opacity: isFaded ? 0.18 : 1
      },
      onMouseEnter: () => setHoverEdge(i),
      onMouseLeave: () => setHoverEdge(null)
    }, /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: "transparent",
      strokeWidth: "14",
      fill: "none",
      style: {
        pointerEvents: 'stroke'
      }
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: t.color,
      strokeWidth: widthByScore,
      fill: "none",
      strokeLinecap: "round",
      opacity: isHovered ? 1 : 0.82
    }), isHovered && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 7,
      textAnchor: "middle",
      fill: t.color,
      fontSize: "11",
      fontFamily: "var(--font-sans)",
      style: {
        fontWeight: 600
      }
    }, t.label), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 5,
      textAnchor: "middle",
      fill: "var(--fg-3)",
      fontSize: "9.5",
      fontFamily: "var(--font-mono)"
    }, "score ", e.score > 0 ? '+' : '', e.score)));
  }), nodes.map(n => {
    const p = layout[n.id];
    if (!p) return null;
    const visible = visibleNodeIds.has(n.id);
    const isFocus = n.id === focusId;
    const isHover = n.id === hoverNode;
    const isFaded = neighborhood && !neighborhood.has(n.id);
    const palette = RW_ENTITY_PALETTE[n.type];
    const deg = degreeMap[n.id] || 0;
    const r = 12 + Math.min(8, deg * 1.3);
    return /*#__PURE__*/React.createElement("g", {
      key: n.id,
      className: "rw-node",
      transform: `translate(${p.x}, ${p.y})`,
      style: {
        opacity: !visible ? 0.18 : isFaded ? 0.32 : 1,
        cursor: 'pointer'
      },
      onMouseEnter: () => setHoverNode(n.id),
      onMouseLeave: () => setHoverNode(null),
      onClick: () => onFocus(n.id === focusId ? null : n.id)
    }, isFocus && /*#__PURE__*/React.createElement("circle", {
      r: r + 6,
      fill: "none",
      stroke: "#b85a2c",
      strokeWidth: "1.5",
      strokeDasharray: "3 3",
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("circle", {
      r: r,
      fill: palette.color,
      stroke: isFocus ? '#b85a2c' : '#1a1410',
      strokeWidth: isFocus ? 2.5 : 1.5
    }), n.stub && /*#__PURE__*/React.createElement("circle", {
      r: 3.2,
      cx: r - 3,
      cy: -r + 3,
      fill: "#c9a227",
      opacity: "0.95"
    }), /*#__PURE__*/React.createElement("text", {
      y: r + 13,
      textAnchor: "middle",
      fill: isHover || isFocus ? 'var(--fg-1)' : 'var(--fg-2)',
      fontSize: "11.5",
      fontFamily: "var(--font-serif)",
      style: {
        fontWeight: isFocus ? 700 : 500,
        pointerEvents: 'none'
      }
    }, n.name), /*#__PURE__*/React.createElement("text", {
      y: r + 25,
      textAnchor: "middle",
      fill: "var(--fg-3)",
      fontSize: "9.5",
      fontFamily: "var(--font-mono)",
      style: {
        letterSpacing: 0.5,
        pointerEvents: 'none'
      }
    }, palette.label.toLowerCase()));
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(16, 16)",
    className: "rw-legend"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "220",
    height: "116",
    rx: "6",
    fill: "rgba(14,11,9,0.88)",
    stroke: "rgba(214,201,168,0.15)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "12",
    y: "20",
    fill: "var(--fg-3)",
    fontSize: "9.5",
    fontFamily: "var(--font-sans)",
    style: {
      letterSpacing: 0.18 * 10,
      textTransform: 'uppercase',
      fontWeight: 600
    }
  }, "ENTITIES"), Object.entries(RW_ENTITY_PALETTE).map(([id, p], i) => /*#__PURE__*/React.createElement("g", {
    key: id,
    transform: `translate(12, ${36 + i * 13})`
  }, /*#__PURE__*/React.createElement("circle", {
    r: "4",
    cx: "4",
    cy: "-3",
    fill: p.color
  }), /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "0",
    fill: "var(--fg-2)",
    fontSize: "11",
    fontFamily: "var(--font-serif)"
  }, p.label)))));
}

// ─── Matrix surface ─────────────────────────────────────────────
function MatrixSurface({
  nodes,
  visibleNodeIds,
  visibleEdges
}) {
  // Stable order: keep RW_NODES order for matching focused subgraph
  const visible = nodes.filter(n => visibleNodeIds.has(n.id));
  const byPair = useMemo(() => {
    const m = new Map();
    for (const e of visibleEdges) m.set(e.s + '|' + e.t, e);
    return m;
  }, [visibleEdges]);
  return /*#__PURE__*/React.createElement("div", {
    className: "rw-matrix-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "rw-matrix"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "rw-mx-corner"
  }, "source \u2572 target"), visible.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.id,
    className: "rw-mx-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rw-mx-coltext"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-mx-dot",
    style: {
      background: RW_ENTITY_PALETTE[c.type].color
    }
  }), c.name))))), /*#__PURE__*/React.createElement("tbody", null, visible.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("th", {
    className: "rw-mx-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rw-mx-dot",
    style: {
      background: RW_ENTITY_PALETTE[r.type].color
    }
  }), r.name), visible.map(c => {
    if (r.id === c.id) return /*#__PURE__*/React.createElement("td", {
      key: c.id,
      className: "rw-mx-self"
    });
    const e = byPair.get(r.id + '|' + c.id);
    if (!e) return /*#__PURE__*/React.createElement("td", {
      key: c.id,
      className: "rw-mx-empty"
    });
    const t = RW_TYPE_MAP[e.type];
    return /*#__PURE__*/React.createElement("td", {
      key: c.id,
      className: "rw-mx-cell",
      style: {
        background: t.color + '38',
        borderColor: t.color
      },
      title: `${t.label} · score ${e.score > 0 ? '+' : ''}${e.score}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "rw-mx-score"
    }, e.score > 0 ? '+' : '', e.score), /*#__PURE__*/React.createElement("span", {
      className: "rw-mx-type",
      style: {
        color: t.color
      }
    }, t.label));
  }))))));
}
window.RelationshipsWeb = RelationshipsWeb;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/RelationshipsWeb.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/SchemasView.jsx
try { (() => {
/* global React */
/*
 * SchemasView — /schemas route.
 *
 * Two-level shape:
 *   1. List of all schemas in the lorebible (built-in + custom).
 *      Each row: icon, name, custom/built-in badge, entry count,
 *      description, Duplicate, Edit.
 *   2. Editor for a single schema. Header (icon picker, name,
 *      description, danger zone). Field list with drag handles.
 *      Per-field row: id (mono), display name, type select,
 *      required toggle, hint, type-specific config (max_length,
 *      target_type, choices, etc.), delete.
 *
 * Field-type vocabulary (10): text, long_text, number, date,
 *   link, link_list, tags, boolean, choice, relationship_list.
 */

const {
  useState
} = React;
const FIELD_TYPES = [{
  id: "text",
  label: "Text",
  glyph: "T",
  hint: "Short single-line string"
}, {
  id: "long_text",
  label: "Long text",
  glyph: "¶",
  hint: "Multi-line, optionally markdown"
}, {
  id: "number",
  label: "Number",
  glyph: "#",
  hint: "Integer or float"
}, {
  id: "date",
  label: "Date",
  glyph: "◷",
  hint: "Calendar-aware date"
}, {
  id: "link",
  label: "Link",
  glyph: "↗",
  hint: "Reference to another entry"
}, {
  id: "link_list",
  label: "Link list",
  glyph: "↗↗",
  hint: "Many references, ordered"
}, {
  id: "tags",
  label: "Tags",
  glyph: "#·",
  hint: "Free-form tag list"
}, {
  id: "boolean",
  label: "Boolean",
  glyph: "◐",
  hint: "Yes / no toggle"
}, {
  id: "choice",
  label: "Choice",
  glyph: "◇",
  hint: "Pick one from a list"
}, {
  id: "relationship_list",
  label: "Relationship list",
  glyph: "⋈",
  hint: "Typed edges with affinity score"
}];

// Bundled schemas, mirroring the real Lorekeeper defaults.
const INITIAL_SCHEMAS = [{
  id: "characters",
  name: "Character",
  icon: "👤",
  description: "Named people, gods, beasts. Anything with a voice and a fate.",
  custom: false,
  entryCount: 47,
  sortOrder: 10,
  fields: [{
    id: "title",
    name: "Title",
    type: "text",
    required: false,
    hint: "Honorific or epithet, e.g. \"The Stone-Eater\""
  }, {
    id: "aliases",
    name: "Aliases",
    type: "tags",
    required: false
  }, {
    id: "born",
    name: "Born",
    type: "date",
    required: false,
    calendarAware: true
  }, {
    id: "died",
    name: "Died",
    type: "date",
    required: false,
    calendarAware: true
  }, {
    id: "culture",
    name: "Culture",
    type: "link",
    required: false,
    targetType: "cultures"
  }, {
    id: "faction",
    name: "Faction",
    type: "link",
    required: false,
    targetType: "factions"
  }, {
    id: "biography",
    name: "Biography",
    type: "long_text",
    required: true,
    allowMarkdown: true,
    hint: "The body of the entry."
  }, {
    id: "relationships",
    name: "Relationships",
    type: "relationship_list",
    required: false
  }, {
    id: "tags",
    name: "Tags",
    type: "tags",
    required: false
  }]
}, {
  id: "places",
  name: "Place",
  icon: "🗺",
  description: "Hearths, holds, ruins, roads. Anywhere a story can land.",
  custom: false,
  entryCount: 23,
  sortOrder: 20,
  fields: PLACES_FIELDS()
}, {
  id: "factions",
  name: "Faction",
  icon: "⚔",
  description: "Banners, cults, councils, warbands. Any organised body.",
  custom: false,
  entryCount: 11,
  sortOrder: 30,
  fields: FACTION_FIELDS()
}, {
  id: "cultures",
  name: "Culture",
  icon: "ᚱ",
  description: "Peoples, tongues, customs. The shared way a folk lives.",
  custom: false,
  entryCount: 6,
  sortOrder: 40,
  fields: SIMPLE_FIELDS(["origin", "language", "values", "notes"])
}, {
  id: "events",
  name: "Event",
  icon: "✦",
  description: "Battles, oaths, omens. Moments the chronicle remembers.",
  custom: false,
  entryCount: 38,
  sortOrder: 50,
  fields: EVENT_FIELDS()
}, {
  id: "languages",
  name: "Language",
  icon: "𐌀",
  description: "Tongues spoken across the saga, with their glyph systems.",
  custom: false,
  entryCount: 4,
  sortOrder: 60,
  fields: SIMPLE_FIELDS(["speakers", "writing_system", "phonology", "notes"])
}, {
  id: "spells",
  name: "Spell",
  icon: "✶",
  description: "Workings of will and word. Each with components and a cost.",
  custom: false,
  entryCount: 17,
  sortOrder: 70,
  fields: SIMPLE_FIELDS(["school", "components", "cost", "effect"])
}, {
  id: "runes",
  name: "Rune",
  icon: "ᚷ",
  description: "The carved letters. Each holds a mantle and an ascension path.",
  custom: false,
  entryCount: 24,
  sortOrder: 80,
  fields: SIMPLE_FIELDS(["glyph", "mantle", "ascension_paths", "first_carved"])
}, {
  id: "artefacts",
  name: "Artefact",
  icon: "⚒",
  description: "Wrought things of legend. Held by someone, somewhere, always.",
  custom: false,
  entryCount: 19,
  sortOrder: 90,
  fields: SIMPLE_FIELDS(["maker", "current_holder", "powers", "history"])
}, {
  id: "prophecy",
  name: "Prophecy",
  icon: "☼",
  description: "Author-added. Foretellings, dooms, and their failed readings.",
  custom: true,
  entryCount: 3,
  sortOrder: 100,
  fields: SIMPLE_FIELDS(["uttered_by", "verse", "interpretation", "outcome"])
}];
function PLACES_FIELDS() {
  return [{
    id: "region",
    name: "Region",
    type: "text",
    required: false
  }, {
    id: "population",
    name: "Population",
    type: "number",
    required: false,
    integerOnly: true,
    min: 0
  }, {
    id: "rulers",
    name: "Rulers",
    type: "link_list",
    required: false,
    targetType: "characters"
  }, {
    id: "description",
    name: "Description",
    type: "long_text",
    required: true,
    allowMarkdown: true
  }, {
    id: "tags",
    name: "Tags",
    type: "tags",
    required: false
  }];
}
function FACTION_FIELDS() {
  return [{
    id: "banner",
    name: "Banner",
    type: "text",
    required: false
  }, {
    id: "stronghold",
    name: "Stronghold",
    type: "link",
    required: false,
    targetType: "places"
  }, {
    id: "leader",
    name: "Leader",
    type: "link",
    required: false,
    targetType: "characters"
  }, {
    id: "alignment",
    name: "Alignment",
    type: "choice",
    required: false,
    choices: ["Loyal", "Rebel", "Neutral", "Unknown"]
  }, {
    id: "active",
    name: "Active",
    type: "boolean",
    required: false
  }, {
    id: "description",
    name: "Description",
    type: "long_text",
    required: true,
    allowMarkdown: true
  }, {
    id: "relationships",
    name: "Relationships",
    type: "relationship_list",
    required: false
  }];
}
function EVENT_FIELDS() {
  return [{
    id: "date",
    name: "Date",
    type: "date",
    required: true,
    calendarAware: true
  }, {
    id: "location",
    name: "Location",
    type: "link",
    required: false,
    targetType: "places"
  }, {
    id: "participants",
    name: "Participants",
    type: "link_list",
    required: false,
    targetType: "characters"
  }, {
    id: "description",
    name: "Description",
    type: "long_text",
    required: true,
    allowMarkdown: true
  }];
}
function SIMPLE_FIELDS(ids) {
  return ids.map(id => ({
    id,
    name: id.split("_").map(w => w[0].toUpperCase() + w.slice(1)).join(" "),
    type: id === "notes" || id === "description" || id === "interpretation" || id === "outcome" || id === "verse" ? "long_text" : id.endsWith("s") && id !== "values" ? "tags" : "text",
    required: false,
    allowMarkdown: id === "notes" || id === "description"
  }));
}
function SchemasView() {
  const [schemas, setSchemas] = useState(INITIAL_SCHEMAS);
  const [editingId, setEditingId] = useState(null);
  const editing = schemas.find(s => s.id === editingId);
  function updateSchema(next) {
    setSchemas(list => list.map(s => s.id === next.id ? next : s));
  }
  function duplicate(s) {
    const copy = {
      ...s,
      id: s.id + "-copy",
      name: s.name + " (copy)",
      custom: true,
      entryCount: 0,
      sortOrder: 200,
      fields: s.fields.map(f => ({
        ...f
      }))
    };
    setSchemas(list => [...list, copy]);
  }
  if (editing) {
    return /*#__PURE__*/React.createElement(SchemaEditor, {
      schema: editing,
      onChange: updateSchema,
      onBack: () => setEditingId(null)
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "sch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Tools \xB7 Structure"), /*#__PURE__*/React.createElement("h1", {
    className: "val-title"
  }, "Schemas"), /*#__PURE__*/React.createElement("p", {
    className: "val-sub"
  }, "The shape of every entry in the chronicle. Add fields, change types, mark them required.")), /*#__PURE__*/React.createElement("div", {
    className: "val-banner-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, schemas.length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Schemas")), /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, schemas.filter(s => s.custom).length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Custom")), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary"
  }, /*#__PURE__*/React.createElement("span", null, "+"), " New schema"))), /*#__PURE__*/React.createElement("ul", {
    className: "sch-list"
  }, schemas.sort((a, b) => a.sortOrder - b.sortOrder).map(s => /*#__PURE__*/React.createElement("li", {
    key: s.id,
    className: "sch-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-row-icon"
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "sch-row-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sch-row-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-row-name"
  }, s.name), /*#__PURE__*/React.createElement("span", {
    className: "sch-badge " + (s.custom ? "sch-badge-custom" : "sch-badge-builtin")
  }, s.custom ? "custom" : "built-in"), /*#__PURE__*/React.createElement("code", {
    className: "sch-row-id"
  }, s.id), /*#__PURE__*/React.createElement("span", {
    className: "sch-row-spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sch-row-count"
  }, s.entryCount, " ", s.entryCount === 1 ? "entry" : "entries"), /*#__PURE__*/React.createElement("span", {
    className: "sch-row-count"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "sch-row-count"
  }, s.fields.length, " fields")), s.description && /*#__PURE__*/React.createElement("p", {
    className: "sch-row-desc"
  }, s.description)), /*#__PURE__*/React.createElement("button", {
    className: "val-action",
    onClick: () => duplicate(s)
  }, "Duplicate"), /*#__PURE__*/React.createElement("button", {
    className: "val-action val-action-primary",
    onClick: () => setEditingId(s.id)
  }, "Edit")))));
}
function SchemaEditor({
  schema,
  onChange,
  onBack
}) {
  const [editingField, setEditingField] = useState(null);
  function patchField(idx, patch) {
    const fields = schema.fields.map((f, i) => i === idx ? {
      ...f,
      ...patch
    } : f);
    onChange({
      ...schema,
      fields
    });
  }
  function changeFieldType(idx, nextType) {
    // Drop type-specific keys on change; reset to vanilla shape.
    const old = schema.fields[idx];
    const fresh = {
      id: old.id,
      name: old.name,
      type: nextType,
      required: old.required,
      hint: old.hint
    };
    const fields = schema.fields.map((f, i) => i === idx ? fresh : f);
    onChange({
      ...schema,
      fields
    });
  }
  function addField() {
    const id = "new_field_" + (schema.fields.length + 1);
    onChange({
      ...schema,
      fields: [...schema.fields, {
        id,
        name: "New field",
        type: "text",
        required: false
      }]
    });
    setEditingField(schema.fields.length);
  }
  function deleteField(idx) {
    onChange({
      ...schema,
      fields: schema.fields.filter((_, i) => i !== idx)
    });
  }
  function moveField(idx, dir) {
    const j = idx + dir;
    if (j < 0 || j >= schema.fields.length) return;
    const fields = [...schema.fields];
    [fields[idx], fields[j]] = [fields[j], fields[idx]];
    onChange({
      ...schema,
      fields
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "sch"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ft-back",
    onClick: onBack
  }, "\u2190 Back to schemas"), /*#__PURE__*/React.createElement("div", {
    className: "sch-edit-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sch-edit-icon"
  }, schema.icon), /*#__PURE__*/React.createElement("div", {
    className: "sch-edit-meta"
  }, /*#__PURE__*/React.createElement("input", {
    className: "sch-edit-name",
    value: schema.name,
    onChange: e => onChange({
      ...schema,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "sch-edit-id-row"
  }, /*#__PURE__*/React.createElement("code", {
    className: "sch-edit-id"
  }, schema.id), /*#__PURE__*/React.createElement("span", {
    className: "sch-badge " + (schema.custom ? "sch-badge-custom" : "sch-badge-builtin")
  }, schema.custom ? "custom" : "built-in"), /*#__PURE__*/React.createElement("span", {
    className: "sch-edit-count"
  }, "\xB7 ", schema.entryCount, " entries use this schema")), /*#__PURE__*/React.createElement("textarea", {
    className: "sch-edit-desc",
    placeholder: "One-line description shown in the schema list.",
    value: schema.description || "",
    onChange: e => onChange({
      ...schema,
      description: e.target.value
    }),
    rows: 2
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sch-fields-head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mim-prose-h2 sch-fields-title"
  }, "Fields"), /*#__PURE__*/React.createElement("span", {
    className: "sch-fields-sub"
  }, "Drag to reorder. The first field with a long_text type is treated as the entry body."), /*#__PURE__*/React.createElement("span", {
    className: "sch-fields-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-secondary",
    onClick: addField
  }, "+ Add field")), /*#__PURE__*/React.createElement("ul", {
    className: "sch-fields"
  }, schema.fields.map((f, i) => /*#__PURE__*/React.createElement(SchemaFieldRow, {
    key: i,
    field: f,
    isOpen: editingField === i,
    onToggle: () => setEditingField(editingField === i ? null : i),
    onPatch: patch => patchField(i, patch),
    onChangeType: t => changeFieldType(i, t),
    onDelete: () => deleteField(i),
    onMoveUp: () => moveField(i, -1),
    onMoveDown: () => moveField(i, 1),
    canMoveUp: i > 0,
    canMoveDown: i < schema.fields.length - 1
  }))), schema.custom && /*#__PURE__*/React.createElement("div", {
    className: "sch-danger"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sch-danger-body"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "sch-danger-h"
  }, "Delete schema"), /*#__PURE__*/React.createElement("p", {
    className: "sch-danger-p"
  }, "Deleting will fail if any entries still use this schema. Migrate or delete entries first.")), /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Delete schema")));
}
function SchemaFieldRow({
  field,
  isOpen,
  onToggle,
  onPatch,
  onChangeType,
  onDelete,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown
}) {
  const typeMeta = FIELD_TYPES.find(t => t.id === field.type) || FIELD_TYPES[0];
  return /*#__PURE__*/React.createElement("li", {
    className: "sch-field" + (isOpen ? " is-open" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "sch-field-head",
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-field-grip"
  }, "\u22EE\u22EE"), /*#__PURE__*/React.createElement("span", {
    className: "sch-field-type-glyph",
    title: typeMeta.label
  }, typeMeta.glyph), /*#__PURE__*/React.createElement("span", {
    className: "sch-field-name"
  }, field.name), /*#__PURE__*/React.createElement("code", {
    className: "sch-field-id"
  }, field.id), /*#__PURE__*/React.createElement("span", {
    className: "sch-field-type-pill"
  }, typeMeta.label), field.required && /*#__PURE__*/React.createElement("span", {
    className: "sch-field-req"
  }, "required"), /*#__PURE__*/React.createElement("span", {
    className: "sch-row-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sch-field-move",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sch-mini",
    onClick: onMoveUp,
    disabled: !canMoveUp
  }, "\u25B2"), /*#__PURE__*/React.createElement("button", {
    className: "sch-mini",
    onClick: onMoveDown,
    disabled: !canMoveDown
  }, "\u25BC")), /*#__PURE__*/React.createElement("span", {
    className: "sch-field-caret"
  }, isOpen ? "▾" : "▸")), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "sch-field-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sch-field-grid"
  }, /*#__PURE__*/React.createElement("label", {
    className: "sch-fl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-fl-lbl"
  }, "Display name"), /*#__PURE__*/React.createElement("input", {
    value: field.name,
    onChange: e => onPatch({
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("label", {
    className: "sch-fl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-fl-lbl"
  }, "Field id"), /*#__PURE__*/React.createElement("input", {
    value: field.id,
    onChange: e => onPatch({
      id: e.target.value
    }),
    className: "sch-mono"
  })), /*#__PURE__*/React.createElement("label", {
    className: "sch-fl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-fl-lbl"
  }, "Type"), /*#__PURE__*/React.createElement("select", {
    value: field.type,
    onChange: e => onChangeType(e.target.value)
  }, FIELD_TYPES.map(t => /*#__PURE__*/React.createElement("option", {
    key: t.id,
    value: t.id
  }, t.label)))), /*#__PURE__*/React.createElement("label", {
    className: "sch-fl sch-fl-toggle"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!field.required,
    onChange: e => onPatch({
      required: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", null, "Required")), /*#__PURE__*/React.createElement("label", {
    className: "sch-fl sch-fl-wide"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sch-fl-lbl"
  }, "Hint"), /*#__PURE__*/React.createElement("input", {
    value: field.hint || "",
    onChange: e => onPatch({
      hint: e.target.value
    }),
    placeholder: "Help text shown under the field in the editor."
  }))), /*#__PURE__*/React.createElement(TypeConfig, {
    field: field,
    onPatch: onPatch
  }), /*#__PURE__*/React.createElement("div", {
    className: "sch-field-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "val-action val-action-ghost",
    onClick: onDelete
  }, "Delete field"))));
}
function TypeConfig({
  field,
  onPatch
}) {
  if (field.type === "text") {
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Text options"), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-fl-lbl"
    }, "Max length"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: field.maxLength || "",
      onChange: e => onPatch({
        maxLength: +e.target.value || null
      })
    })), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-fl-lbl"
    }, "Placeholder"), /*#__PURE__*/React.createElement("input", {
      value: field.placeholder || "",
      onChange: e => onPatch({
        placeholder: e.target.value
      })
    })));
  }
  if (field.type === "long_text") {
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Long-text options"), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl sch-fl-toggle"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: field.allowMarkdown !== false,
      onChange: e => onPatch({
        allowMarkdown: e.target.checked
      })
    }), /*#__PURE__*/React.createElement("span", null, "Allow markdown (Tiptap editor)")));
  }
  if (field.type === "number") {
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Number options"), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl sch-fl-toggle"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !!field.integerOnly,
      onChange: e => onPatch({
        integerOnly: e.target.checked
      })
    }), /*#__PURE__*/React.createElement("span", null, "Integer only")), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-fl-lbl"
    }, "Min"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: field.min ?? "",
      onChange: e => onPatch({
        min: e.target.value === "" ? null : +e.target.value
      })
    })), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-fl-lbl"
    }, "Max"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: field.max ?? "",
      onChange: e => onPatch({
        max: e.target.value === "" ? null : +e.target.value
      })
    })));
  }
  if (field.type === "date") {
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Date options"), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl sch-fl-toggle"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: field.calendarAware !== false,
      onChange: e => onPatch({
        calendarAware: e.target.checked
      })
    }), /*#__PURE__*/React.createElement("span", null, "Use lorebible's calendar (CALENDAR.md). Off \u2192 ISO 8601.")));
  }
  if (field.type === "link" || field.type === "link_list") {
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Link target"), /*#__PURE__*/React.createElement("label", {
      className: "sch-fl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-fl-lbl"
    }, "Target schema"), /*#__PURE__*/React.createElement("select", {
      value: field.targetType || "",
      onChange: e => onPatch({
        targetType: e.target.value || null
      })
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Any entry type"), INITIAL_SCHEMAS.map(s => /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name, " (", s.id, ")")))), field.type === "link_list" && /*#__PURE__*/React.createElement("label", {
      className: "sch-fl"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-fl-lbl"
    }, "Max items"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: field.maxItems || "",
      onChange: e => onPatch({
        maxItems: +e.target.value || null
      })
    })));
  }
  if (field.type === "choice") {
    const choices = field.choices || [];
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Choices"), /*#__PURE__*/React.createElement("div", {
      className: "sch-choices"
    }, choices.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "sch-choice"
    }, c, /*#__PURE__*/React.createElement("button", {
      className: "sch-choice-x",
      onClick: () => onPatch({
        choices: choices.filter((_, j) => j !== i)
      })
    }, "\xD7"))), /*#__PURE__*/React.createElement("button", {
      className: "sch-choice-add",
      onClick: () => {
        const next = prompt("New choice value:");
        if (next) onPatch({
          choices: [...choices, next]
        });
      }
    }, "+ Add choice")));
  }
  if (field.type === "relationship_list") {
    return /*#__PURE__*/React.createElement("div", {
      className: "sch-typecfg sch-typecfg-note"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sch-typecfg-lbl"
    }, "Relationship list"), /*#__PURE__*/React.createElement("p", null, "Typed edges drawn from ", /*#__PURE__*/React.createElement("code", null, "_relationship-types.yaml"), ". Each edge carries a target, type, and affinity score (-100 \u2192 100). Mirror edges are kept in sync."));
  }
  return null;
}
window.SchemasView = SchemasView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/SchemasView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/Sidebar.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    group: "Library",
    rows: [{
      id: "characters",
      label: "Characters",
      count: 47,
      color: "#d99366"
    }, {
      id: "places",
      label: "Places",
      count: 23,
      color: "#7da265"
    }, {
      id: "factions",
      label: "Factions",
      count: 11,
      color: "#c43a4e"
    }, {
      id: "cultures",
      label: "Cultures",
      count: 6,
      color: "#a07cc8"
    }, {
      id: "events",
      label: "Events",
      count: 38,
      color: "#8d8478"
    }, {
      id: "languages",
      label: "Languages",
      count: 4,
      color: "#8aa0ab"
    }, {
      id: "spells",
      label: "Spells",
      count: 17,
      color: "#6b89c2"
    }, {
      id: "runes",
      label: "Runes",
      count: 24,
      color: "#c9a227"
    }, {
      id: "artefacts",
      label: "Artefacts",
      count: 19,
      color: "#a8814d"
    }]
  }, {
    group: "Tools",
    rows: [{
      id: "timeline",
      label: "Timeline"
    }, {
      id: "tree",
      label: "Family tree"
    }, {
      id: "genus",
      label: "Genus tree"
    }, {
      id: "factiontree",
      label: "Faction tree"
    }, {
      id: "relationships",
      label: "Connections (3D)",
      color: "#d99366"
    }, {
      id: "validation",
      label: "Validation"
    }, {
      id: "schemas",
      label: "Schemas"
    }, {
      id: "translator",
      label: "Translator",
      color: "#c9a227"
    }, {
      id: "calendar",
      label: "Calendar"
    }, {
      id: "ask",
      label: "Ask Mimir",
      color: "#c9a227"
    }, {
      id: "export",
      label: "Export to engine"
    }]
  }, {
    group: "World",
    rows: [{
      id: "shieldwall",
      label: "Shieldwall Saga",
      muted: true
    }, {
      id: "settings",
      label: "Settings",
      muted: true
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "mim-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mimir-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "mim-brand-word"
  }, "Mimir"), /*#__PURE__*/React.createElement("span", {
    className: "mim-brand-meta"
  }, "v1.4")), /*#__PURE__*/React.createElement("div", {
    className: "mim-world"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "World"), /*#__PURE__*/React.createElement("button", {
    className: "mim-world-btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-world-dot"
  }), "Shieldwall Saga", /*#__PURE__*/React.createElement("span", {
    className: "mim-world-caret"
  }, "\u2304"))), items.map(group => /*#__PURE__*/React.createElement("div", {
    key: group.group,
    className: "mim-side-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, group.group), group.rows.map(row => /*#__PURE__*/React.createElement("button", {
    key: row.id,
    onClick: () => onNav?.(row.id),
    className: "mim-side-row" + (active === row.id ? " is-active" : "") + (row.muted ? " is-muted" : "")
  }, row.color && /*#__PURE__*/React.createElement("span", {
    className: "mim-side-dot",
    style: {
      background: row.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mim-side-label"
  }, row.label), row.count != null && /*#__PURE__*/React.createElement("span", {
    className: "mim-side-count"
  }, row.count))))), /*#__PURE__*/React.createElement("div", {
    className: "mim-side-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mim-foot-rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mim-foot-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-foot-mono"
  }, "/Worlds/Shieldwall")), /*#__PURE__*/React.createElement("div", {
    className: "mim-foot-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-foot-status"
  }, "\u25CF"), /*#__PURE__*/React.createElement("span", {
    className: "mim-foot-text"
  }, "Synced \xB7 2 mins ago"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/Timeline.jsx
try { (() => {
/* global React */
const {
  useState,
  useMemo
} = React;

// Event-types from defaultEventTypes.ts
const TIMELINE_EVENT_TYPES = [{
  id: 'battle',
  name: 'Battle',
  fill: '#DDCC77',
  stroke: '#885500'
}, {
  id: 'festival',
  name: 'Festival',
  fill: '#88CCEE',
  stroke: '#336699'
}, {
  id: 'coronation',
  name: 'Coronation',
  fill: '#CC6677',
  stroke: '#771133'
}, {
  id: 'disaster',
  name: 'Disaster',
  fill: '#EE6677',
  stroke: '#AA2233'
}, {
  id: 'political',
  name: 'Political',
  fill: '#117733',
  stroke: '#004422'
}, {
  id: 'personal',
  name: 'Personal',
  fill: '#AA4499',
  stroke: '#661155'
}, {
  id: 'religious',
  name: 'Religious',
  fill: '#999933',
  stroke: '#555522'
}, {
  id: 'era',
  name: 'Era',
  fill: '#332288',
  stroke: '#110055'
}, {
  id: 'wonder',
  name: 'Wonder',
  fill: '#D55E00',
  stroke: '#8B3D00'
}];

// Synthetic events on a saga-flavoured timeline. Year ranges are in
// the AOY ('After Old Years') calendar that the lorebible uses;
// negative years are pre-AOY. Mix of point + bar events.
const TIMELINE_EVENTS = [{
  id: 'world-tree-planted',
  name: 'Odin plants the Yggdrasil seed',
  type: 'wonder',
  start: -812,
  end: -812
}, {
  id: 'yggdrasil-fruit',
  name: 'Yggdrasil bears fruit',
  type: 'wonder',
  start: -780,
  end: -780
}, {
  id: 'first-frost',
  name: 'The first long frost',
  type: 'era',
  start: -640,
  end: -610
}, {
  id: 'aesir-vanir',
  name: 'War of the Aesir and Vanir',
  type: 'battle',
  start: -522,
  end: -511
}, {
  id: 'thor-coronation',
  name: 'Thor takes the storm-mantle',
  type: 'coronation',
  start: -388,
  end: -388
}, {
  id: 'baldr-feast',
  name: 'Baldr\u2019s feast at Breidablik',
  type: 'festival',
  start: -340,
  end: -337
}, {
  id: 'baldr-death',
  name: 'The death of Baldr',
  type: 'disaster',
  start: -312,
  end: -312
}, {
  id: 'fimbul-winter',
  name: 'Fimbulwinter',
  type: 'era',
  start: -280,
  end: -257
}, {
  id: 'shieldwall-rises',
  name: 'The Shieldwall rises in Caer Ys',
  type: 'political',
  start: -180,
  end: -180
}, {
  id: 'sigrun-oath',
  name: 'Sigrun\u2019s oath at Hjalmar',
  type: 'personal',
  start: -64,
  end: -64
}, {
  id: 'kernow-stand',
  name: 'Stand at Tintagel',
  type: 'battle',
  start: -44,
  end: -42
}, {
  id: 'crown-iron',
  name: 'The Iron Crown is forged',
  type: 'wonder',
  start: -8,
  end: 0
}, {
  id: 'long-passage',
  name: 'The long passage through Niflheim',
  type: 'religious',
  start: 12,
  end: 78
}, {
  id: 'jorth-stoneage',
  name: 'Jörð enters the Stone Age',
  type: 'era',
  start: 80,
  end: 220
}, {
  id: 'wolfmoot',
  name: 'Wolfmoot at the high pass',
  type: 'political',
  start: 156,
  end: 158
}, {
  id: 'dagr-funeral',
  name: 'Dagr\u2019s funeral procession',
  type: 'personal',
  start: 184,
  end: 185
}, {
  id: 'thrymr-rising',
  name: 'Thrymr\u2019s rising',
  type: 'battle',
  start: 211,
  end: 217
}];
const ZOOM_PRESETS = ['decade', 'century', 'millennium', 'epoch'];
function Timeline() {
  const [zoom, setZoom] = useState('millennium');
  const [enabled, setEnabled] = useState(() => new Set(TIMELINE_EVENT_TYPES.map(t => t.id)));
  const [showArrows, setShowArrows] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [hover, setHover] = useState(null); // {evt, x, y}

  const visible = useMemo(() => TIMELINE_EVENTS.filter(e => enabled.has(e.type)), [enabled]);
  function toggleType(id) {
    setEnabled(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  }

  // Compute scale across the whole canon range.
  const range = useMemo(() => {
    const all = TIMELINE_EVENTS;
    const min = Math.min(...all.map(e => e.start)) - 40;
    const max = Math.max(...all.map(e => e.end)) + 40;
    return {
      min,
      max,
      span: max - min
    };
  }, []);
  const W = 1320; // intrinsic canvas width — scrolls if narrower
  const xFor = year => (year - range.min) / range.span * W;

  // Anchors (from anchors.json idea — saga waypoints)
  const anchors = [{
    year: -812,
    label: 'Yggdrasil planted'
  }, {
    year: -312,
    label: 'Baldr falls'
  }, {
    year: 0,
    label: 'AOY 0 — present'
  }, {
    year: 156,
    label: 'Wolfmoot'
  }];

  // Tick marks based on zoom preset
  const ticks = useMemo(() => {
    const step = zoom === 'decade' ? 10 : zoom === 'century' ? 50 : zoom === 'millennium' ? 100 : 200;
    const out = [];
    const start = Math.ceil(range.min / step) * step;
    for (let y = start; y <= range.max; y += step) {
      const major = y % (step * 2) === 0;
      out.push({
        year: y,
        major
      });
    }
    return out;
  }, [range, zoom]);

  // Lane assignment — group by type, one lane per enabled type
  const lanes = useMemo(() => {
    return TIMELINE_EVENT_TYPES.filter(t => enabled.has(t.id));
  }, [enabled]);
  return /*#__PURE__*/React.createElement("div", {
    className: "tl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-bar-left"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tl-h"
  }, "Timeline"), /*#__PURE__*/React.createElement("span", {
    className: "tl-sub"
  }, visible.length, " dated events visible of ", TIMELINE_EVENTS.length, " \\u00b7 events-only view")), /*#__PURE__*/React.createElement("div", {
    className: "tl-bar-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-btn tl-btn-ember"
  }, "+ Quick-add event"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (showArrows ? " is-active" : ""),
    onClick: () => setShowArrows(v => !v)
  }, "\u2192 arrows ", showArrows ? "on" : "off"), /*#__PURE__*/React.createElement("button", {
    className: "tl-chip" + (editMode ? " is-edit" : ""),
    onClick: () => setEditMode(v => !v)
  }, editMode ? "✎ edit mode" : "edit mode"), /*#__PURE__*/React.createElement("div", {
    className: "tl-zooms"
  }, ZOOM_PRESETS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: "tl-chip tl-zoom" + (zoom === p ? " is-active" : ""),
    onClick: () => setZoom(p)
  }, p))))), /*#__PURE__*/React.createElement("div", {
    className: "tl-chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-chip-label"
  }, "Active filters"), /*#__PURE__*/React.createElement("span", {
    className: "tl-fchip"
  }, "World: Shieldwall ", /*#__PURE__*/React.createElement("span", {
    className: "tl-fchip-x"
  }, "\xD7")), /*#__PURE__*/React.createElement("span", {
    className: "tl-fchip"
  }, "From: 1000 BC ", /*#__PURE__*/React.createElement("span", {
    className: "tl-fchip-x"
  }, "\xD7")), /*#__PURE__*/React.createElement("span", {
    className: "tl-fchip"
  }, "To: 250 AOY ", /*#__PURE__*/React.createElement("span", {
    className: "tl-fchip-x"
  }, "\xD7")), /*#__PURE__*/React.createElement("button", {
    className: "tl-clearall"
  }, "Clear all")), /*#__PURE__*/React.createElement("div", {
    className: "tl-anchors-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Anchors"), anchors.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    className: "tl-anchor-btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-anchor-dot"
  }), a.label)), /*#__PURE__*/React.createElement("button", {
    className: "tl-anchor-btn is-add"
  }, "+ Add anchor"), /*#__PURE__*/React.createElement("div", {
    className: "tl-jump"
  }, /*#__PURE__*/React.createElement("span", null, "Jump to year"), /*#__PURE__*/React.createElement("input", {
    className: "tl-jump-input",
    placeholder: "0 AOY"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tl-stage"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "tl-legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-legend-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-eye"
  }, "Event types"), /*#__PURE__*/React.createElement("div", {
    className: "tl-legend-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tl-mini",
    onClick: () => setEnabled(new Set(TIMELINE_EVENT_TYPES.map(t => t.id)))
  }, "all"), /*#__PURE__*/React.createElement("button", {
    className: "tl-mini",
    onClick: () => setEnabled(new Set())
  }, "none"))), TIMELINE_EVENT_TYPES.map(t => {
    const on = enabled.has(t.id);
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "tl-leg-row" + (on ? " is-on" : ""),
      onClick: () => toggleType(t.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "tl-swatch",
      style: {
        background: t.fill,
        borderColor: t.stroke
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "tl-leg-name"
    }, t.name), /*#__PURE__*/React.createElement("span", {
      className: "tl-leg-count"
    }, TIMELINE_EVENTS.filter(e => e.type === t.id).length));
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-eye"
  }, "Filters"), /*#__PURE__*/React.createElement("label", {
    className: "tl-flbl"
  }, "World"), /*#__PURE__*/React.createElement("select", {
    className: "tl-fsel"
  }, /*#__PURE__*/React.createElement("option", null, "Shieldwall (canon)"), /*#__PURE__*/React.createElement("option", null, "Hidden draft")), /*#__PURE__*/React.createElement("label", {
    className: "tl-flbl"
  }, "Faction"), /*#__PURE__*/React.createElement("select", {
    className: "tl-fsel"
  }, /*#__PURE__*/React.createElement("option", null, "\u2014 any \u2014"), /*#__PURE__*/React.createElement("option", null, "The Aesir"), /*#__PURE__*/React.createElement("option", null, "The Shieldwall")), /*#__PURE__*/React.createElement("label", {
    className: "tl-flbl"
  }, "Character"), /*#__PURE__*/React.createElement("select", {
    className: "tl-fsel"
  }, /*#__PURE__*/React.createElement("option", null, "\u2014 any \u2014"), /*#__PURE__*/React.createElement("option", null, "Odin"), /*#__PURE__*/React.createElement("option", null, "Sigrun")))), /*#__PURE__*/React.createElement("div", {
    className: "tl-canvas-wrap" + (editMode ? " is-edit" : "")
  }, editMode && /*#__PURE__*/React.createElement("div", {
    className: "tl-edit-banner"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Edit mode"), " \u2014 click to select, shift-click to extend, drag to re-date. Press Esc to deselect."), /*#__PURE__*/React.createElement("span", {
    className: "tl-sel-count"
  }, "0 selected")), /*#__PURE__*/React.createElement("div", {
    className: "tl-canvas-scroll"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "tl-canvas",
    viewBox: `0 0 ${W} ${48 + lanes.length * 64}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "tl-grid",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "rgba(214,201,168,0.04)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "tl-fade",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(214,201,168,0.06)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(214,201,168,0)"
  })), /*#__PURE__*/React.createElement("marker", {
    id: "tl-arrow",
    viewBox: "0 0 10 10",
    refX: "8",
    refY: "5",
    markerWidth: "7",
    markerHeight: "7",
    orient: "auto-start-reverse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z",
    fill: "rgba(201,162,39,0.7)"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: W,
    height: 48 + lanes.length * 64,
    fill: "url(#tl-grid)"
  }), /*#__PURE__*/React.createElement("g", {
    className: "tl-axis"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "32",
    x2: W,
    y2: "32",
    stroke: "var(--border-strong-c)"
  }), ticks.map(t => /*#__PURE__*/React.createElement("g", {
    key: t.year,
    transform: `translate(${xFor(t.year)},32)`
  }, /*#__PURE__*/React.createElement("line", {
    y1: "0",
    y2: t.major ? -8 : -4,
    stroke: "rgba(214,201,168,0.4)"
  }), t.major && /*#__PURE__*/React.createElement("text", {
    y: "-12",
    textAnchor: "middle",
    fill: "var(--fg-3)",
    fontSize: "10",
    fontFamily: "var(--font-mono)"
  }, t.year > 0 ? `${t.year}` : t.year < 0 ? `${Math.abs(t.year)} BC` : '0 AOY')))), anchors.map(a => /*#__PURE__*/React.createElement("g", {
    key: a.label,
    className: "tl-anchor-line"
  }, /*#__PURE__*/React.createElement("line", {
    x1: xFor(a.year),
    x2: xFor(a.year),
    y1: "32",
    y2: 48 + lanes.length * 64,
    stroke: "var(--accent-gilt)",
    strokeWidth: "0.7",
    strokeDasharray: "2 4",
    opacity: "0.5"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: xFor(0),
    x2: xFor(0),
    y1: "32",
    y2: 48 + lanes.length * 64,
    stroke: "var(--accent)",
    strokeWidth: "1.2",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("text", {
    x: xFor(0) + 4,
    y: "46",
    fill: "var(--accent)",
    fontSize: "9",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.1em"
  }, "NOW"), lanes.map((lane, i) => {
    const y = 64 + i * 64;
    return /*#__PURE__*/React.createElement("g", {
      key: lane.id
    }, /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: y - 22,
      width: W,
      height: "48",
      fill: "url(#tl-fade)",
      opacity: i % 2 === 0 ? 0.7 : 0.3
    }), /*#__PURE__*/React.createElement("text", {
      x: "8",
      y: y - 8,
      fill: "var(--fg-3)",
      fontSize: "10",
      fontFamily: "var(--font-sans)",
      letterSpacing: "0.18em",
      textTransform: "uppercase"
    }, lane.name.toUpperCase()));
  }), visible.map(e => {
    const laneIdx = lanes.findIndex(l => l.id === e.type);
    if (laneIdx < 0) return null;
    const y = 64 + laneIdx * 64;
    const t = TIMELINE_EVENT_TYPES.find(x => x.id === e.type);
    const x1 = xFor(e.start);
    const x2 = xFor(e.end);
    const isPoint = e.end - e.start <= 2;
    return /*#__PURE__*/React.createElement("g", {
      key: e.id,
      className: "tl-evt",
      onMouseEnter: ev => setHover({
        evt: e,
        x: ev.clientX,
        y: ev.clientY
      }),
      onMouseLeave: () => setHover(null),
      style: {
        cursor: editMode ? 'grab' : 'pointer'
      }
    }, isPoint ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: x1,
      cy: y,
      r: "6",
      fill: t.fill,
      stroke: t.stroke,
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: x1,
      y1: y - 12,
      x2: x1,
      y2: y - 22,
      stroke: t.stroke,
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: x1 + 8,
      y: y - 14,
      fill: "var(--fg-1)",
      fontSize: "11",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic"
    }, e.name)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: x1,
      y: y - 10,
      width: Math.max(4, x2 - x1),
      height: "20",
      rx: "2",
      fill: t.fill,
      stroke: t.stroke,
      strokeWidth: "1",
      opacity: "0.9"
    }), /*#__PURE__*/React.createElement("text", {
      x: x1 + 6,
      y: y + 4,
      fill: "#0e0b09",
      fontSize: "11",
      fontFamily: "var(--font-sans)",
      fontWeight: "600"
    }, e.name)));
  }), showArrows && (() => {
    const pairs = [['baldr-feast', 'baldr-death'], ['baldr-death', 'fimbul-winter'], ['fimbul-winter', 'shieldwall-rises'], ['sigrun-oath', 'kernow-stand']];
    return pairs.map(([a, b]) => {
      const A = visible.find(e => e.id === a);
      const B = visible.find(e => e.id === b);
      if (!A || !B) return null;
      const ax = xFor((A.start + A.end) / 2);
      const ay = 64 + lanes.findIndex(l => l.id === A.type) * 64;
      const bx = xFor((B.start + B.end) / 2);
      const by = 64 + lanes.findIndex(l => l.id === B.type) * 64;
      const cx = (ax + bx) / 2;
      return /*#__PURE__*/React.createElement("path", {
        key: a + b,
        d: `M ${ax} ${ay} C ${cx} ${ay - 24}, ${cx} ${by - 24}, ${bx} ${by}`,
        fill: "none",
        stroke: "rgba(201,162,39,0.55)",
        strokeWidth: "1",
        strokeDasharray: "2 3",
        markerEnd: "url(#tl-arrow)"
      });
    });
  })())), hover && /*#__PURE__*/React.createElement("div", {
    className: "tl-tip",
    style: {
      left: hover.x + 14,
      top: hover.y + 14,
      position: 'fixed'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-tip-name"
  }, hover.evt.name), /*#__PURE__*/React.createElement("div", {
    className: "tl-tip-meta"
  }, hover.evt.start === hover.evt.end ? formatYear(hover.evt.start) : `${formatYear(hover.evt.start)} \u2014 ${formatYear(hover.evt.end)}`, ' \u00b7 ', hover.evt.type)))));
}
function formatYear(y) {
  if (y < 0) return `${Math.abs(y)} BC`;
  if (y === 0) return '0 AOY';
  return `${y} AOY`;
}
window.Timeline = Timeline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/Timeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/TopBar.jsx
try { (() => {
/* global React */
const {
  useState: useStateTopBar
} = React;
function TopBar({
  breadcrumbs,
  onCommand
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "mim-topbar"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "mim-crumbs"
  }, breadcrumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-crumb" + (i === breadcrumbs.length - 1 ? " is-current" : "")
  }, c), i < breadcrumbs.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "mim-crumb-sep"
  }, "/")))), /*#__PURE__*/React.createElement("div", {
    className: "mim-top-right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mim-search",
    onClick: onCommand
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-search-glyph"
  }, "\u2315"), /*#__PURE__*/React.createElement("span", {
    className: "mim-search-placeholder"
  }, "Find a character, place, faction\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "mim-search-kbd"
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    className: "mim-icon-btn",
    title: "Validate"
  }, "\u2696"), /*#__PURE__*/React.createElement("button", {
    className: "mim-icon-btn",
    title: "Notifications"
  }, "\u2691"), /*#__PURE__*/React.createElement("div", {
    className: "mim-avatar"
  }, "AG")));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/TranslatorView.jsx
try { (() => {
/* global React */
/*
 * TranslatorView — /translator route.
 *
 * Mimir's translator surface. Real implementation calls into the
 * lorebible's translator broker; this UI-kit version is fully static
 * with seeded sample data so Claude Code can read off the layout.
 *
 * Anatomy:
 *
 *   ┌─────────────────────────────────────────────────────────────┐
 *   │ Banner: title + subtitle + active language meta             │
 *   ├─── Control bar ─────────────────────────────────────────────┤
 *   │ [source ▾] ⇄ [target ▾]  ·  Register [ ▾ ]  Mode [ ▾ ]      │
 *   │                          ·  Quality [ ▾ ]   [ Translate ↵ ] │
 *   ├──── History (rail) ──┬─── Input ──────────┬─── Output ──────┤
 *   │ Today                │ Speak your text.   │ Latin / Runic   │
 *   │ · "Hear me, child"   │                    │ Translation     │
 *   │ Yesterday            │                    │ · gloss · notes │
 *   │ · …                  │                    │ New words       │
 *   └──────────────────────┴────────────────────┴─────────────────┘
 *
 * Sample language is Drakenthar (from the Lorekeeper canon): three
 * registers (high / low / void), five modes (standard / dominant /
 * ritual / brutal / prophecy). Runic transliteration is faked via a
 * tiny Latin→Elder-Futhark map so the toggle has something to show.
 */

const {
  useEffect,
  useMemo,
  useRef,
  useState
} = React;

// ─── Sample languages ───────────────────────────────────────────
const LANGUAGES = [{
  id: "english",
  name: "English",
  isEnglish: true,
  registers: [],
  modes: [],
  hasScript: false
}, {
  id: "drakenthar",
  name: "Drakenthar",
  isEnglish: false,
  registers: [{
    id: "high-speech",
    name: "High Speech",
    hint: "Declarative · used between dragons"
  }, {
    id: "low-speech",
    name: "Low Speech",
    hint: "Cruel · used toward lesser beings"
  }, {
    id: "void-speech",
    name: "Void Speech",
    hint: "Ritual · prophecy · ancient"
  }],
  modes: [{
    id: "standard",
    name: "Standard",
    hint: "Balanced; preserves tone."
  }, {
    id: "dominant",
    name: "Dominant",
    hint: "Asserts authority; reframes weakness as inevitability."
  }, {
    id: "ritual",
    name: "Ritual",
    hint: "Symbolic; ancient cadence."
  }, {
    id: "brutal",
    name: "Brutal",
    hint: "Short, threatening, absolute."
  }, {
    id: "prophecy",
    name: "Prophecy",
    hint: "Abstract; fated; subject-omitted."
  }],
  hasScript: false
}, {
  id: "runadhrimir",
  name: "Rúnadhrímir",
  isEnglish: false,
  registers: [{
    id: "carved",
    name: "Carved",
    hint: "Inscriptions, stone, oath"
  }, {
    id: "spoken",
    name: "Spoken",
    hint: "Daily speech"
  }],
  modes: [{
    id: "standard",
    name: "Standard",
    hint: "Balanced."
  }, {
    id: "formal",
    name: "Formal",
    hint: "Court, oath-ring, treaty."
  }, {
    id: "kenning",
    name: "Kenning",
    hint: "Compounds + skaldic metaphor."
  }],
  hasScript: true
}];
const QUALITY_LABELS = {
  fast: "Fast · Haiku",
  quality: "Quality · Sonnet",
  ultimate: "Ultimate · Opus"
};

// ─── Sample history ─────────────────────────────────────────────
const HISTORY = [{
  id: "h1",
  group: "Today",
  time: "11:14",
  source: "english",
  target: "drakenthar",
  register: "high-speech",
  mode: "dominant",
  title: "Hear me, child of frost — your fire will outlast every law that was ever spoken."
}, {
  id: "h2",
  group: "Today",
  time: "10:42",
  source: "english",
  target: "drakenthar",
  register: "low-speech",
  mode: "brutal",
  title: "Open the gate."
}, {
  id: "h3",
  group: "Today",
  time: "09:55",
  source: "english",
  target: "drakenthar",
  register: "void-speech",
  mode: "prophecy",
  title: "When the eighth winter passes, the shieldwall breaks; the wolf finds its mother."
}, {
  id: "h4",
  group: "Yesterday",
  time: "Yest.",
  source: "english",
  target: "runadhrimir",
  register: "carved",
  mode: "formal",
  title: "Sworn on iron, sworn on salt, sworn on the ember-red banner."
}, {
  id: "h5",
  group: "Yesterday",
  time: "Yest.",
  source: "english",
  target: "drakenthar",
  register: "high-speech",
  mode: "ritual",
  title: "The world-ash drinks of the well. The well does not refuse it."
}, {
  id: "h6",
  group: "Last week",
  time: "May 8",
  source: "drakenthar",
  target: "english",
  register: "high-speech",
  mode: "standard",
  title: "Krath-vaen ulgor sothren·"
}, {
  id: "h7",
  group: "Last week",
  time: "May 6",
  source: "english",
  target: "drakenthar",
  register: "low-speech",
  mode: "dominant",
  title: "I will not bow."
}];

// ─── Tiny Latin → Elder Futhark map for the runic preview ──────
const RUNES = {
  th: "ᚦ",
  ng: "ᛜ",
  a: "ᚨ",
  b: "ᛒ",
  c: "ᚲ",
  d: "ᛞ",
  e: "ᛖ",
  f: "ᚠ",
  g: "ᚷ",
  h: "ᚺ",
  i: "ᛁ",
  j: "ᛃ",
  k: "ᚲ",
  l: "ᛚ",
  m: "ᛗ",
  n: "ᚾ",
  o: "ᛟ",
  p: "ᛈ",
  q: "ᚲᚹ",
  r: "ᚱ",
  s: "ᛋ",
  t: "ᛏ",
  u: "ᚢ",
  v: "ᚹ",
  w: "ᚹ",
  x: "ᚲᛋ",
  y: "ᛇ",
  z: "ᛉ"
};
function transliterate(text) {
  const t = (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let i = 0;
  let out = "";
  while (i < t.length) {
    const ch = t[i];
    if (!/[a-zA-Z]/.test(ch)) {
      out += ch;
      i++;
      continue;
    }
    const lower = ch.toLowerCase();
    const two = t.substr(i, 2).toLowerCase();
    if (RUNES[two]) {
      out += RUNES[two];
      i += 2;
      continue;
    }
    out += RUNES[lower] || ch;
    i++;
  }
  return out;
}

// ─── Sample translations (used as canned output for the demo) ──
const SAMPLE_TRANSLATIONS = {
  drakenthar: {
    "high-speech|dominant": {
      input: "Hear me, child of frost — your fire will outlast every law that was ever spoken.",
      translation: "Vaethran sothren · Brath-kraan ulgor vorthan, kovrael sa veth-haan.",
      gloss: "[ATTEND-IMP] [child-of-frost] · [your-fire] [outlast-FUT] [every-law] [ever-spoken].",
      notes: "Dominant register reframes \"will outlast\" as inevitability; \"law\" softened to \"veth\" (binding), not \"kraal\" (decree)."
    },
    "high-speech|ritual": {
      input: "The world-ash drinks of the well. The well does not refuse it.",
      translation: "Yggvor-haethrin sothra vael · Vael sa neth-volthan.",
      gloss: "[world-ash] [drinks-from] [well] · [well] [NEG-refuses-it].",
      notes: "Ritual mode preserves the parallel structure; void-omitted subject in the second clause."
    }
  }
};

// ─── Component ─────────────────────────────────────────────────
function TranslatorView() {
  const enabledLangs = LANGUAGES.filter(l => !l.isEnglish);
  const [sourceId, setSourceId] = useState("english");
  const [targetId, setTargetId] = useState("drakenthar");
  const target = LANGUAGES.find(l => l.id === targetId) || LANGUAGES[1];
  const source = LANGUAGES.find(l => l.id === sourceId) || LANGUAGES[0];
  const [registerId, setRegisterId] = useState(target.registers[0]?.id || "");
  const [modeId, setModeId] = useState(target.modes[0]?.id || "");
  const [quality, setQuality] = useState("quality");
  const [display, setDisplay] = useState("latin"); // latin | runic | both
  const [activeHistId, setActiveHistId] = useState("h1");
  useEffect(() => {
    setRegisterId(target.registers[0]?.id || "");
    setModeId(target.modes[0]?.id || "");
    if (!target.hasScript) setDisplay("latin");
  }, [targetId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Seed input/output from sample so the page reads "complete"
  const seed = SAMPLE_TRANSLATIONS.drakenthar["high-speech|dominant"];
  const [input, setInput] = useState(seed.input);
  const [output, setOutput] = useState({
    translation: seed.translation,
    gloss: seed.gloss,
    notes: seed.notes,
    model: "claude-sonnet-4-6",
    newWords: [{
      id: "nw-1",
      headword: "vaethran",
      english: "attend (imperative)",
      part: "verb",
      ipa: "/ˈvɛθ.rɑn/",
      note: "Imperative form of vaeth- (to listen, mark). Authority-implied."
    }, {
      id: "nw-2",
      headword: "brath-kraan",
      english: "your fire",
      part: "noun",
      ipa: "/braθ.krɑːn/",
      note: "Compound: brath (fire) + -kraan (2sg possessive)."
    }, {
      id: "nw-3",
      headword: "ulgor",
      english: "outlast",
      part: "verb",
      ipa: "/ˈʊl.ɡor/",
      note: "Future-tense root; carries connotation of erosion, not survival."
    }, {
      id: "nw-4",
      headword: "veth-haan",
      english: "(ever) spoken",
      part: "adj",
      ipa: "/vɛθ.hɑːn/",
      note: "Passive-participle of vethan (to bind in word)."
    }]
  });
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);
  function swap() {
    const s = sourceId;
    setSourceId(targetId);
    setTargetId(s);
  }
  function pretendTranslate() {
    setBusy(true);
    setTimeout(() => setBusy(false), 900);
  }

  // Latin / runic / both renderer
  function renderTranslation() {
    if (!output) return null;
    const latin = output.translation;
    const runic = transliterate(latin);
    return /*#__PURE__*/React.createElement("div", {
      className: "tr-translation"
    }, (display === "latin" || display === "both") && /*#__PURE__*/React.createElement("p", {
      className: "tr-latin"
    }, latin.split(/(\s+|·)/).map((tok, i) => {
      if (!tok.trim() || tok === " " || tok === "·") return /*#__PURE__*/React.createElement("span", {
        key: i
      }, tok);
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        className: "tr-word"
      }, tok);
    })), (display === "runic" || display === "both") && target.hasScript && /*#__PURE__*/React.createElement("p", {
      className: "tr-runic"
    }, runic), (display === "runic" || display === "both") && !target.hasScript && display === "runic" && /*#__PURE__*/React.createElement("p", {
      className: "tr-runic-fallback"
    }, "Latin only \u2014 this language has no native script. Switch back to Latin or Both."));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "tr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Tools \xB7 Translator"), /*#__PURE__*/React.createElement("h1", {
    className: "val-title"
  }, "Translator"), /*#__PURE__*/React.createElement("p", {
    className: "val-sub"
  }, "Run text through the chronicled tongues. Sourced from the lorebible's languages, with their registers and modes.")), /*#__PURE__*/React.createElement("div", {
    className: "val-banner-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, enabledLangs.length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Enabled languages")), /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num"
  }, HISTORY.length), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Recent")))), /*#__PURE__*/React.createElement("div", {
    className: "tr-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-bar-pair"
  }, /*#__PURE__*/React.createElement(LangSelect, {
    value: sourceId,
    onChange: setSourceId,
    label: "From"
  }), /*#__PURE__*/React.createElement("button", {
    className: "tr-swap",
    onClick: swap,
    title: "Swap (Ctrl+K)"
  }, "\u21C4"), /*#__PURE__*/React.createElement(LangSelect, {
    value: targetId,
    onChange: setTargetId,
    label: "To"
  })), target.registers.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tr-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-bar-lbl"
  }, "Register"), /*#__PURE__*/React.createElement("select", {
    className: "tr-select",
    value: registerId,
    onChange: e => setRegisterId(e.target.value)
  }, target.registers.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.id,
    value: r.id
  }, r.name)))), target.modes.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "tr-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-bar-lbl"
  }, "Mode"), /*#__PURE__*/React.createElement("select", {
    className: "tr-select",
    value: modeId,
    onChange: e => setModeId(e.target.value)
  }, target.modes.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.id,
    value: m.id
  }, m.name)))), /*#__PURE__*/React.createElement("div", {
    className: "tr-bar-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-bar-lbl"
  }, "Quality"), /*#__PURE__*/React.createElement("select", {
    className: "tr-select",
    value: quality,
    onChange: e => setQuality(e.target.value)
  }, Object.entries(QUALITY_LABELS).map(([id, label]) => /*#__PURE__*/React.createElement("option", {
    key: id,
    value: id
  }, label)))), /*#__PURE__*/React.createElement("span", {
    className: "tr-bar-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-primary tr-translate",
    onClick: pretendTranslate,
    disabled: busy || !input.trim()
  }, busy ? "Translating…" : "Translate", /*#__PURE__*/React.createElement("span", {
    className: "tr-shortcut"
  }, "\u2318\u21B5"))), /*#__PURE__*/React.createElement("div", {
    className: "tr-body"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "tr-history"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-hist-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "History"), /*#__PURE__*/React.createElement("button", {
    className: "val-clear"
  }, "Clear all")), ["Today", "Yesterday", "Last week"].map(group => {
    const rows = HISTORY.filter(h => h.group === group);
    if (rows.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: group,
      className: "tr-hist-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-hist-grouph"
    }, group), rows.map(h => {
      const tgt = LANGUAGES.find(l => l.id === h.target);
      return /*#__PURE__*/React.createElement("button", {
        key: h.id,
        className: "tr-hist-row" + (h.id === activeHistId ? " is-active" : ""),
        onClick: () => setActiveHistId(h.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: "tr-hist-pair"
      }, /*#__PURE__*/React.createElement("span", {
        className: "tr-hist-mini"
      }, (LANGUAGES.find(l => l.id === h.source) || {}).name), /*#__PURE__*/React.createElement("span", {
        className: "tr-hist-arrow"
      }, "\u2192"), /*#__PURE__*/React.createElement("span", {
        className: "tr-hist-mini tr-hist-target"
      }, tgt?.name), /*#__PURE__*/React.createElement("span", {
        className: "tr-hist-time"
      }, h.time)), /*#__PURE__*/React.createElement("div", {
        className: "tr-hist-title"
      }, h.title), /*#__PURE__*/React.createElement("div", {
        className: "tr-hist-tags"
      }, h.register && /*#__PURE__*/React.createElement("span", {
        className: "tr-tag"
      }, h.register.replace("-speech", "")), h.mode && /*#__PURE__*/React.createElement("span", {
        className: "tr-tag"
      }, h.mode)));
    }));
  })), /*#__PURE__*/React.createElement("section", {
    className: "tr-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-pane-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-pane-eye"
  }, "Input \u2014 ", source.name), /*#__PURE__*/React.createElement("span", {
    className: "tr-pane-meta"
  }, input.length, " chars \xB7 \u2318\u21B5 to translate")), /*#__PURE__*/React.createElement("textarea", {
    ref: inputRef,
    className: "tr-input",
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: "Speak your text to the well\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tr-pane-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tr-iconbtn",
    title: "Speak (voice input)"
  }, "\uD83C\uDF99"), /*#__PURE__*/React.createElement("button", {
    className: "tr-iconbtn",
    title: "Paste from clipboard"
  }, "\u2398"), /*#__PURE__*/React.createElement("button", {
    className: "tr-iconbtn",
    title: "Clear",
    onClick: () => setInput("")
  }, "\u2715"), /*#__PURE__*/React.createElement("span", {
    className: "tr-pane-spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tr-pane-meta"
  }, source.isEnglish ? "Auto-detect off" : "Word-by-word echo available"))), /*#__PURE__*/React.createElement("section", {
    className: "tr-pane tr-pane-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-pane-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-pane-eye"
  }, "Output \u2014 ", target.name), target.hasScript && /*#__PURE__*/React.createElement("div", {
    className: "tr-display"
  }, ["latin", "runic", "both"].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    className: "tr-disp-btn" + (display === m ? " is-on" : ""),
    onClick: () => setDisplay(m)
  }, m))), /*#__PURE__*/React.createElement("span", {
    className: "tr-pane-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "tr-iconbtn",
    title: "Copy"
  }, "\uD83D\uDCCB"), /*#__PURE__*/React.createElement("button", {
    className: "tr-iconbtn",
    title: "Read aloud"
  }, "\uD83D\uDD0A")), /*#__PURE__*/React.createElement("div", {
    className: "tr-output"
  }, busy && /*#__PURE__*/React.createElement("div", {
    className: "tr-busy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-busy-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tr-busy-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tr-busy-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tr-busy-text"
  }, "Mimir consults the well\u2026")), !busy && renderTranslation(), !busy && output && /*#__PURE__*/React.createElement(React.Fragment, null, output.gloss && /*#__PURE__*/React.createElement("section", {
    className: "tr-aux"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-aux-eye"
  }, "Literal gloss"), /*#__PURE__*/React.createElement("p", {
    className: "tr-aux-body"
  }, output.gloss)), output.notes && /*#__PURE__*/React.createElement("section", {
    className: "tr-aux"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-aux-eye"
  }, "Translator's note"), /*#__PURE__*/React.createElement("p", {
    className: "tr-aux-body tr-aux-italic"
  }, output.notes)), output.newWords?.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "tr-newwords"
  }, /*#__PURE__*/React.createElement("header", {
    className: "tr-nw-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-eye"
  }, "New words added to vocabulary"), /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-count"
  }, output.newWords.length)), /*#__PURE__*/React.createElement("ul", {
    className: "tr-nw-list"
  }, output.newWords.map(w => /*#__PURE__*/React.createElement("li", {
    key: w.id,
    className: "tr-nw-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-nw-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-head-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-headword"
  }, w.headword), target.hasScript && /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-runic"
  }, transliterate(w.headword)), /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-part"
  }, w.part), /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-ipa"
  }, w.ipa)), /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-english"
  }, w.english), w.note && /*#__PURE__*/React.createElement("span", {
    className: "tr-nw-note"
  }, w.note)), /*#__PURE__*/React.createElement("div", {
    className: "tr-nw-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Regenerate"), /*#__PURE__*/React.createElement("button", {
    className: "val-action val-action-ghost"
  }, "Reject")))))), /*#__PURE__*/React.createElement("footer", {
    className: "tr-out-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-out-model"
  }, output.model), /*#__PURE__*/React.createElement("span", {
    className: "tr-out-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, output.newWords.length, " new word", output.newWords.length === 1 ? "" : "s", " saved"), /*#__PURE__*/React.createElement("span", {
    className: "tr-out-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("button", {
    className: "tr-text-link"
  }, "Open vocabulary \u2192")))))));
}
function LangSelect({
  value,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tr-lang"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tr-bar-lbl"
  }, label), /*#__PURE__*/React.createElement("select", {
    className: "tr-select tr-lang-select",
    value: value,
    onChange: e => onChange(e.target.value)
  }, LANGUAGES.map(l => /*#__PURE__*/React.createElement("option", {
    key: l.id,
    value: l.id
  }, l.name))));
}
window.TranslatorView = TranslatorView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/TranslatorView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/ValidationView.jsx
try { (() => {
/* global React */
/*
 * ValidationView — /validation route.
 *
 * Surfaces every rule-driven warning the engine has emitted: relationship
 * edge issues, naming-consistency near-duplicates, canon orphans, schema
 * required-field misses, calendar date-format mismatches, etc.
 *
 * Layout vocabulary:
 *   ┌── Zone banner (title + subtitle + rescan / stats) ──┐
 *   │ Filter bar: Group by / Severity / Rule / Type        │
 *   ├──────────────────────────────────────────────────────┤
 *   │ Grouped sections — heading is the group key, count   │
 *   │ on the right. Rows: type chip · entry link · field · │
 *   │ rule (mono) · severity · message. Optional inline    │
 *   │ "Open entry" / "Auto-fix" actions per row.           │
 *   └──────────────────────────────────────────────────────┘
 *
 * The data shape matches src/lorebible/validate.ts's ValidationWarning:
 *   { rule, severity, entryType, entryId, entryName, field?, message,
 *     hint?, fix? }
 */

const {
  useMemo,
  useState
} = React;
const ENTRY_COLORS = {
  characters: "#d99366",
  places: "#7da265",
  factions: "#c43a4e",
  cultures: "#a07cc8",
  events: "#8d8478",
  languages: "#8aa0ab",
  spells: "#6b89c2",
  runes: "#c9a227",
  artefacts: "#a8814d",
  species: "#a07cc8",
  schemas: "#9b8b6e"
};

// Sample dataset — concrete enough to read like Shieldwall canon but
// covers every shape Claude Code needs to render. Order matters: when
// grouped by "rule", the engine reports by rule-name a→z; when grouped
// by "type" or "entry", the entries already cluster.
const WARNINGS = [{
  rule: "relationship-edge-self-reference",
  severity: "warning",
  entryType: "characters",
  entryId: "chr-bjornar",
  entryName: "Bjornar Ironhand",
  field: "relationships[3]",
  message: 'An entry cannot be in a relationship with itself. The edge "rival_of → Bjornar Ironhand" is self-referential.',
  fix: "remove-edge"
}, {
  rule: "relationship-edge-missing-to-entry",
  severity: "warning",
  entryType: "characters",
  entryId: "chr-skaldyrn",
  entryName: "Skaldyrn the Bard",
  field: "relationships[1]",
  message: 'Target entry "vargheim-the-old" does not exist in the canon. The edge will be skipped at render time.',
  fix: "delete-orphan"
}, {
  rule: "relationship-edge-missing-to-entry",
  severity: "warning",
  entryType: "factions",
  entryId: "fac-emberhand",
  entryName: "Order of the Emberhand",
  field: "relationships[7]",
  message: 'Target entry "the-grey-circle" does not exist in the canon.',
  fix: "delete-orphan"
}, {
  rule: "relationship-edge-score-out-of-range",
  severity: "warning",
  entryType: "factions",
  entryId: "fac-ember-cult",
  entryName: "Order of the Emberhand",
  field: "relationships[2].score",
  message: "Affinity score 150 is outside the allowed range [-100, 100]."
}, {
  rule: "relationship-edge-mirror-divergence",
  severity: "info",
  entryType: "characters",
  entryId: "chr-vaerin",
  entryName: "Vaerin Pale-Mother",
  field: "relationships[4]",
  message: 'Mirror edge disagrees: Vaerin marks Hjalmar as "ally" (score 60) but Hjalmar marks Vaerin as "rival" (score -40). One side is wrong.'
}, {
  rule: "naming-consistency-near-duplicate",
  severity: "warning",
  entryType: "characters",
  entryId: "chr-stone-eater",
  entryName: "The Stone-Eater",
  message: 'Name closely resembles existing entry "Stoneater" (94% match). If these are the same entity, add one as an alias of the other.',
  hint: "Add as alias"
}, {
  rule: "naming-consistency-near-duplicate",
  severity: "info",
  entryType: "places",
  entryId: "loc-frosthowl",
  entryName: "Frosthowl Pass",
  message: 'Name closely resembles existing entry "Frosthowl-Pass" (98% match). Likely a slug/display mismatch.',
  hint: "Reconcile"
}, {
  rule: "canon-orphan-reference",
  severity: "warning",
  entryType: "events",
  entryId: "evt-hjalmars-saga",
  entryName: "Hjalmar's Saga",
  field: "body",
  message: 'Wikilink [[Vael Ruined-Crown]] points to a deleted entry. The link will render as red text in the reader.'
}, {
  rule: "canon-orphan-reference",
  severity: "warning",
  entryType: "spells",
  entryId: "spl-binding-of-marrow",
  entryName: "Binding of Marrow",
  field: "components",
  message: 'Component reference [[bone-of-the-thrice-born]] does not resolve. Did you mean "Bone of the Thrice-Born Calf"?',
  hint: "Did you mean…"
}, {
  rule: "canon-date-format",
  severity: "warning",
  entryType: "events",
  entryId: "evt-frosthowl",
  entryName: "Battle of Frosthowl Pass",
  field: "date",
  message: 'Date "Year of Wolves 12" does not match the Drakenthar calendar format (expected "AoY 412.7.14").'
}, {
  rule: "circular-parent-species",
  severity: "warning",
  entryType: "species",
  entryId: "spc-mountain-trolls",
  entryName: "Mountain Trolls",
  field: "parent_species",
  message: "Parent-species chain forms a cycle: Mountain Trolls → Hill Trolls → Mountain Trolls. Genus tree will not render this branch."
}, {
  rule: "schema-required-field-missing",
  severity: "warning",
  entryType: "languages",
  entryId: "lng-drakenthar",
  entryName: "Drakenthar",
  field: "speakers",
  message: 'Required field "speakers" is empty. Schema languages.yaml v3 marks this field as required.'
}, {
  rule: "schema-required-field-missing",
  severity: "warning",
  entryType: "artefacts",
  entryId: "art-shieldwall-banner",
  entryName: "The Shieldwall Banner",
  field: "current_holder",
  message: 'Required field "current_holder" is empty.'
}, {
  rule: "mantle-ascension-paths-unresolved",
  severity: "info",
  entryType: "runes",
  entryId: "rne-iss-mantle",
  entryName: "Mantle of Iss",
  field: "ascension_paths[2]",
  message: 'Path requires runemark "Eihwaz-Reversed" but no runemark by that name exists.'
}, {
  rule: "variable-undeclared",
  severity: "warning",
  entryType: "events",
  entryId: "evt-the-naming",
  entryName: "The Naming of the Bound",
  field: "body",
  message: 'Expression "{{player.warband_size}}" references undeclared variable "player.warband_size". Declare it in Variables or remove the token.'
}];
function timeAgo(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr ago`;
  return `${Math.floor(h / 24)} d ago`;
}
function ValidationView({
  onOpenEntry
}) {
  const [groupBy, setGroupBy] = useState("rule"); // rule | type | entry
  const [severities, setSeverities] = useState(new Set(["warning", "info"]));
  const [activeRules, setActiveRules] = useState(new Set());
  const [activeTypes, setActiveTypes] = useState(new Set());
  const [scanning, setScanning] = useState(false);
  const [lastScanAt] = useState(Date.now() - 1000 * 60 * 4); // 4 min ago

  const availableRules = useMemo(() => [...new Set(WARNINGS.map(w => w.rule))].sort(), []);
  const availableTypes = useMemo(() => [...new Set(WARNINGS.map(w => w.entryType))].sort(), []);
  const counts = useMemo(() => ({
    warning: WARNINGS.filter(w => w.severity === "warning").length,
    info: WARNINGS.filter(w => w.severity === "info").length,
    total: WARNINGS.length
  }), []);
  const filtered = useMemo(() => WARNINGS.filter(w => {
    if (!severities.has(w.severity)) return false;
    if (activeRules.size > 0 && !activeRules.has(w.rule)) return false;
    if (activeTypes.size > 0 && !activeTypes.has(w.entryType)) return false;
    return true;
  }), [severities, activeRules, activeTypes]);
  const grouped = useMemo(() => {
    const map = new Map();
    for (const w of filtered) {
      const key = groupBy === "rule" ? w.rule : groupBy === "type" ? w.entryType : `${w.entryType}|${w.entryId}|${w.entryName}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(w);
    }
    return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [filtered, groupBy]);
  function toggle(set, value, setter) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);else next.add(value);
    setter(next);
  }
  function resetFilters() {
    setSeverities(new Set(["warning", "info"]));
    setActiveRules(new Set());
    setActiveTypes(new Set());
  }
  function rescan() {
    setScanning(true);
    setTimeout(() => setScanning(false), 1100);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-banner-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mim-eyebrow"
  }, "Tools \xB7 Audit"), /*#__PURE__*/React.createElement("h1", {
    className: "val-title"
  }, "Validation"), /*#__PURE__*/React.createElement("p", {
    className: "val-sub"
  }, "The canon checks its own work. Warnings and quiet inconsistencies, gathered by rule.")), /*#__PURE__*/React.createElement("div", {
    className: "val-banner-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num val-stat-warn"
  }, counts.warning), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Warnings")), /*#__PURE__*/React.createElement("div", {
    className: "val-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-num val-stat-info"
  }, counts.info), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Info")), /*#__PURE__*/React.createElement("div", {
    className: "val-stat val-stat-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-stat-when"
  }, timeAgo(Date.now() - lastScanAt)), /*#__PURE__*/React.createElement("span", {
    className: "val-stat-lbl"
  }, "Last scan")), /*#__PURE__*/React.createElement("button", {
    className: "mim-btn-secondary val-rescan" + (scanning ? " is-scanning" : ""),
    onClick: rescan
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-rescan-glyph"
  }, scanning ? "◐" : "↻"), scanning ? "Scanning…" : "Rescan"))), /*#__PURE__*/React.createElement("div", {
    className: "val-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-filter-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-flbl"
  }, "Group by"), /*#__PURE__*/React.createElement("div", {
    className: "val-segment"
  }, ["rule", "type", "entry"].map(g => /*#__PURE__*/React.createElement("button", {
    key: g,
    className: "val-seg" + (groupBy === g ? " is-on" : ""),
    onClick: () => setGroupBy(g)
  }, g))), /*#__PURE__*/React.createElement("span", {
    className: "val-filter-sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "val-flbl"
  }, "Severity"), ["warning", "info"].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "val-sev-chip val-sev-" + s + (severities.has(s) ? " is-on" : ""),
    onClick: () => toggle(severities, s, setSeverities)
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-sev-dot"
  }), s, /*#__PURE__*/React.createElement("span", {
    className: "val-sev-count"
  }, WARNINGS.filter(w => w.severity === s).length))), /*#__PURE__*/React.createElement("span", {
    className: "val-filter-spacer"
  }), (activeRules.size > 0 || activeTypes.size > 0 || severities.size < 2) && /*#__PURE__*/React.createElement("button", {
    className: "val-clear",
    onClick: resetFilters
  }, "Clear filters")), /*#__PURE__*/React.createElement("div", {
    className: "val-filter-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-flbl"
  }, "Type"), availableTypes.map(t => {
    const active = activeTypes.has(t);
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      className: "mim-chip" + (active ? " is-active" : ""),
      style: {
        "--chip-c": ENTRY_COLORS[t] || "#9b8b6e"
      },
      onClick: () => toggle(activeTypes, t, setActiveTypes)
    }, /*#__PURE__*/React.createElement("span", {
      className: "mim-chip-dot"
    }), t);
  })), /*#__PURE__*/React.createElement("div", {
    className: "val-filter-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-flbl"
  }, "Rule"), availableRules.map(r => {
    const active = activeRules.has(r);
    const count = WARNINGS.filter(w => w.rule === r).length;
    return /*#__PURE__*/React.createElement("button", {
      key: r,
      className: "val-rule-chip" + (active ? " is-on" : ""),
      onClick: () => toggle(activeRules, r, setActiveRules),
      title: r
    }, /*#__PURE__*/React.createElement("code", null, r), /*#__PURE__*/React.createElement("span", {
      className: "val-rule-count"
    }, count));
  }))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "val-empty"
  }, WARNINGS.length === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "val-empty-glyph"
  }, "\u16E3"), /*#__PURE__*/React.createElement("h3", null, "The canon is at peace."), /*#__PURE__*/React.createElement("p", null, "No warnings, no inconsistencies. The chronicle reads clean.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "No warnings match the current filters."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "mim-link",
    onClick: resetFilters
  }, "Clear filters"), " to see everything."))) : /*#__PURE__*/React.createElement("div", {
    className: "val-groups"
  }, grouped.map(([key, items]) => /*#__PURE__*/React.createElement(ValGroup, {
    key: key,
    groupKey: key,
    groupBy: groupBy,
    items: items,
    onOpenEntry: onOpenEntry
  }))));
}
function ValGroup({
  groupKey,
  groupBy,
  items,
  onOpenEntry
}) {
  const [open, setOpen] = useState(true);
  let heading, sub, accent;
  if (groupBy === "rule") {
    heading = /*#__PURE__*/React.createElement("code", {
      className: "val-grp-code"
    }, groupKey);
    sub = RULE_DESCRIPTIONS[groupKey] || "—";
    accent = items.some(w => w.severity === "warning") ? "warn" : "info";
  } else if (groupBy === "type") {
    heading = /*#__PURE__*/React.createElement("span", {
      className: "val-grp-type"
    }, groupKey);
    sub = `${items.length} warning${items.length === 1 ? "" : "s"} across this entry type.`;
    accent = ENTRY_COLORS[groupKey] || "#9b8b6e";
  } else {
    const [type,, name] = groupKey.split("|");
    heading = /*#__PURE__*/React.createElement("span", {
      className: "val-grp-entry"
    }, /*#__PURE__*/React.createElement("span", {
      className: "val-grp-type-dot",
      style: {
        background: ENTRY_COLORS[type]
      }
    }), name);
    sub = `${items.length} warning${items.length === 1 ? "" : "s"} on this entry.`;
    accent = ENTRY_COLORS[type] || "#9b8b6e";
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "val-group" + (open ? "" : " is-collapsed")
  }, /*#__PURE__*/React.createElement("header", {
    className: "val-grp-head",
    onClick: () => setOpen(o => !o),
    style: groupBy === "type" || groupBy === "entry" ? {
      borderLeftColor: accent
    } : null
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-grp-toggle"
  }, open ? "▾" : "▸"), /*#__PURE__*/React.createElement("div", {
    className: "val-grp-titles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-grp-h"
  }, heading), /*#__PURE__*/React.createElement("div", {
    className: "val-grp-sub"
  }, sub)), /*#__PURE__*/React.createElement("span", {
    className: "val-grp-count"
  }, items.length)), open && /*#__PURE__*/React.createElement("ul", {
    className: "val-list"
  }, items.map((w, i) => /*#__PURE__*/React.createElement(ValRow, {
    key: i,
    w: w,
    onOpenEntry: onOpenEntry
  }))));
}
function ValRow({
  w,
  onOpenEntry
}) {
  const palette = ENTRY_COLORS[w.entryType] || "#9b8b6e";
  return /*#__PURE__*/React.createElement("li", {
    className: "val-row val-sev-" + w.severity
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-row-bar",
    style: {
      background: palette
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "val-row-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "val-row-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val-type-chip",
    style: {
      background: palette
    }
  }, w.entryType), /*#__PURE__*/React.createElement("button", {
    className: "val-entry-link",
    onClick: () => onOpenEntry?.(w)
  }, w.entryName), w.field && /*#__PURE__*/React.createElement("code", {
    className: "val-field"
  }, w.field), /*#__PURE__*/React.createElement("span", {
    className: "val-row-spacer"
  }), /*#__PURE__*/React.createElement("code", {
    className: "val-rule"
  }, w.rule), /*#__PURE__*/React.createElement("span", {
    className: "val-sev-badge val-sev-" + w.severity
  }, w.severity)), /*#__PURE__*/React.createElement("p", {
    className: "val-msg"
  }, w.message), (w.hint || w.fix) && /*#__PURE__*/React.createElement("div", {
    className: "val-row-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "val-action val-action-primary"
  }, "Open entry"), w.fix === "remove-edge" && /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Remove edge"), w.fix === "delete-orphan" && /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Delete orphan"), w.hint === "Add as alias" && /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Add as alias"), w.hint === "Reconcile" && /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Reconcile slugs"), w.hint === "Did you mean…" && /*#__PURE__*/React.createElement("button", {
    className: "val-action"
  }, "Did you mean\u2026"), /*#__PURE__*/React.createElement("button", {
    className: "val-action val-action-ghost"
  }, "Suppress this warning"))));
}
const RULE_DESCRIPTIONS = {
  "relationship-edge-self-reference": "An entry has a relationship edge pointing at itself.",
  "relationship-edge-missing-to-entry": "A relationship edge points at an entry that no longer exists.",
  "relationship-edge-score-out-of-range": "An affinity score lies outside the allowed [-100, 100] range.",
  "relationship-edge-mirror-divergence": "Two entries describe their shared relationship in conflicting ways.",
  "naming-consistency-near-duplicate": "Two entries have suspiciously similar names. Likely the same thing.",
  "canon-orphan-reference": "A wikilink or component reference points at a deleted entry.",
  "canon-date-format": "A date string doesn't parse against the active calendar.",
  "circular-parent-species": "A species' parent-chain forms a cycle and cannot be drawn as a tree.",
  "schema-required-field-missing": "A field marked required in the entry's schema is empty.",
  "mantle-ascension-paths-unresolved": "A mantle's ascension path requires a runemark that doesn't exist.",
  "variable-undeclared": "A quest/dialogue expression uses a variable that hasn't been declared."
};
window.ValidationView = ValidationView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/ValidationView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/WellScene.jsx
try { (() => {
/* global React */
// The well scene: back wall · god-ray · mist + embers (canvas) · front wall · rim shimmer.
// Particles are sandwiched between the two well halves so the front facade
// naturally masks the lower edge — mist appears to rise FROM inside.

const {
  useRef,
  useEffect,
  useMemo
} = React;

// Pre-rendered soft brush — much faster than rebuilding a radial gradient per particle.
function makeBrush(size, r, g, b, peakA) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, `rgba(${r},${g},${b},${peakA})`);
  grad.addColorStop(0.4, `rgba(${r},${g},${b},${peakA * 0.32})`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return c;
}

// Convert hue (0-60 in our app) into a warm RGB for embers / mist tint
function hueRGB(h, sat) {
  // Approximate warm palette: 0=red, 30=gold, 60=green-gold
  const t = Math.max(0, Math.min(1, h / 60));
  const r = Math.round(255 * (1 - 0.05 * t));
  const g = Math.round(155 + 90 * t);
  const b = Math.round(100 + 40 * t);
  return {
    r,
    g,
    b
  };
}

// Runic codepoints used by the drifting rune particles
const RUNE_CODEPOINTS = [0x16A0, 0x16A2, 0x16A6, 0x16A8, 0x16B1, 0x16B7, 0x16BE, 0x16C1, 0x16C7, 0x16CF, 0x16D2, 0x16DA, 0x16B3, 0x16AB, 0x16C3, 0x16D7];
function WellScene({
  hue = 28,
  mistDensity = 1.0,
  emberDensity = 1.0,
  godrayBrightness = 1.0,
  intensity = 1.0,
  // audio level (0..~1.5)
  thinking = false,
  // surge mist + runes
  speaking = false,
  // surge embers + slower runes timed with text
  parallax = {
    x: 0,
    y: 0
  }
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const stateRef = useRef({
    mist: [],
    embers: [],
    runes: [],
    lastMist: 0,
    lastEmber: 0,
    lastRune: 0,
    started: performance.now()
  });
  const propsRef = useRef({
    mistDensity,
    emberDensity,
    intensity,
    thinking,
    speaking
  });
  propsRef.current = {
    mistDensity,
    emberDensity,
    intensity,
    thinking,
    speaking
  };

  // Brushes — recolored when hue changes.
  const brushes = useMemo(() => {
    const warm = hueRGB(hue);
    return {
      mist: makeBrush(128, 245, 240, 230, 0.65),
      ember: makeBrush(48, warm.r, warm.g, warm.b, 0.95),
      emberRGB: warm
    };
  }, [hue]);
  useEffect(() => {
    // Pre-load the runic font for canvas rendering — canvas fillText
    // does not wait for fonts the way DOM text does.
    if (document.fonts && document.fonts.load) {
      document.fonts.load('32px "Noto Sans Runic"').catch(() => {});
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let alive = true;
    function resize() {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * dpr));
      canvas.height = Math.max(1, Math.round(r.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Rim emission band — well image is 1109×1418, rim sits ~y=620 → 0.44 of height.
    // Container has same aspect, so we use ratios.
    const RIM_Y = 0.46;
    const RIM_SPAN = 0.16; // narrow band — keeps mist over the well, not the empty stage
    const MIST_CAP = 60; // hard ceiling on live mist particles

    function emitMist(w, h, dt) {
      if (stateRef.current.mist.length >= MIST_CAP) return;
      const p = propsRef.current;
      // Thinking surges mist 3×, speaking 1.6×. Audio level adds a little.
      const surge = p.thinking ? 3.0 : p.speaking ? 1.6 : 1.0;
      const rate = 10 * p.mistDensity * surge * (0.85 + p.intensity * 0.3);
      stateRef.current.lastMist += rate * dt;
      const n = Math.min(Math.floor(stateRef.current.lastMist), MIST_CAP - stateRef.current.mist.length);
      stateRef.current.lastMist -= n;
      for (let i = 0; i < n; i++) {
        const cx = w * 0.5;
        const offset = (Math.random() - 0.5) * 2 * RIM_SPAN * w * (0.3 + Math.random() * 0.7);
        stateRef.current.mist.push({
          x: cx + offset,
          y: RIM_Y * h + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 4,
          vy: -(6 + Math.random() * 12),
          life: 0,
          maxLife: 5 + Math.random() * 3,
          size: 38 + Math.random() * 60,
          phase: Math.random() * Math.PI * 2,
          seed: Math.random()
        });
      }
    }
    function emitEmbers(w, h, dt) {
      const p = propsRef.current;
      // Speaking surges embers 4× — the "voice" of the well. Thinking 1.8×.
      const surge = p.speaking ? 4.0 : p.thinking ? 1.8 : 1.0;
      const rate = 3 * p.emberDensity * surge * (0.8 + p.intensity * 0.4);
      stateRef.current.lastEmber += rate * dt;
      const n = Math.floor(stateRef.current.lastEmber);
      stateRef.current.lastEmber -= n;
      for (let i = 0; i < n; i++) {
        const cx = w * 0.5;
        const offset = (Math.random() - 0.5) * 2 * RIM_SPAN * w * 0.7;
        stateRef.current.embers.push({
          x: cx + offset,
          y: RIM_Y * h + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 14,
          vy: -(40 + Math.random() * 50),
          life: 0,
          maxLife: 1.4 + Math.random() * 1.6,
          size: 1.5 + Math.random() * 2.2,
          twinkle: Math.random() * Math.PI * 2
        });
      }
    }
    function emitRunes(w, h, dt) {
      const p = propsRef.current;
      // Runes only when Mimir is thinking or speaking.
      if (!p.thinking && !p.speaking) return;
      // Thinking: ~2.25 runes/sec (+50%). Speaking: ~1.05 runes/sec.
      const rate = p.thinking ? 2.25 : 1.05;
      stateRef.current.lastRune += rate * dt;
      const n = Math.floor(stateRef.current.lastRune);
      stateRef.current.lastRune -= n;
      for (let i = 0; i < n; i++) {
        const cx = w * 0.5;
        const offset = (Math.random() - 0.5) * 2 * RIM_SPAN * w * 0.9;
        // Longer lifespan when thinking so runes climb the empty space above
        // the well; size shrunk 25% (was 18-32 → 13.5-24).
        const longLife = p.thinking;
        stateRef.current.runes.push({
          glyph: String.fromCodePoint(RUNE_CODEPOINTS[Math.floor(Math.random() * RUNE_CODEPOINTS.length)]),
          x: cx + offset,
          y: RIM_Y * h + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 4,
          vy: -(48 + Math.random() * 24),
          life: 0,
          maxLife: longLife ? 8 + Math.random() * 4 : 4 + Math.random() * 2,
          size: 13.5 + Math.random() * 10.5,
          rot: (Math.random() - 0.5) * 0.4,
          rotV: (Math.random() - 0.5) * 0.5,
          seed: Math.random()
        });
      }
    }
    let last = performance.now();
    function frame(now) {
      if (!alive) return;
      window.__wellTick = (window.__wellTick || 0) + 1;
      const dtMs = Math.min(64, now - last);
      const dt = dtMs / 1000;
      last = now;
      const t = (now - stateRef.current.started) / 1000;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width,
        h = rect.height;
      if (w < 4 || h < 4) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }
      ctx.clearRect(0, 0, w, h);

      // ============ MIST PASS ============
      emitMist(w, h, dt, t);
      const mist = stateRef.current.mist;
      ctx.globalCompositeOperation = 'screen';
      for (let i = mist.length - 1; i >= 0; i--) {
        const p = mist[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          mist.splice(i, 1);
          continue;
        }
        // Curl-noise–ish horizontal sway
        const sway = Math.sin(t * 0.5 + p.phase + p.y * 0.01) * 6 + Math.sin(t * 1.3 + p.seed * 10) * 2;
        p.x += (p.vx + sway) * dt;
        p.y += p.vy * dt;
        // Mist accelerates upward slightly then decays
        p.vy *= 0.995;
        p.size += 18 * dt; // expand as it rises
        // Fade in fast, out slow
        const u = p.life / p.maxLife;
        const fadeIn = Math.min(1, p.life / 0.8);
        const fadeOut = 1 - Math.pow(u, 2.2);
        // Fade more aggressively as the particle drifts toward the canvas edges
        const edgeFade = 1 - Math.min(1, Math.pow(Math.abs(p.x - w * 0.5) / (w * 0.5), 2));
        const alpha = fadeIn * fadeOut * edgeFade * 0.14; // dialed way back
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.drawImage(brushes.mist, p.x - p.size, p.y - p.size, p.size * 2, p.size * 2);
      }

      // ============ RUNE PASS ============
      emitRunes(w, h, dt);
      const runes = stateRef.current.runes;
      ctx.globalCompositeOperation = 'lighter';
      const er = brushes.emberRGB;
      const runeFill = `rgb(${Math.min(255, er.r + 10)},${Math.min(255, er.g + 30)},${Math.min(255, er.b + 10)})`;
      ctx.font = `400 32px "Noto Sans Runic", "Source Serif 4", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = runes.length - 1; i >= 0; i--) {
        const p = runes[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          runes.splice(i, 1);
          continue;
        }
        const sway = Math.sin(t * 0.7 + p.seed * 6) * 8;
        p.x += (p.vx + sway * 0.2) * dt;
        p.y += p.vy * dt;
        // Very light damping so runes keep rising through the full height
        p.vy *= 0.998;
        p.rot += p.rotV * dt;
        const u = p.life / p.maxLife;
        const fadeIn = Math.min(1, p.life / 0.8);
        const fadeOut = 1 - Math.pow(u, 1.4);
        const edgeFade = 1 - Math.min(1, Math.pow(Math.abs(p.x - w * 0.5) / (w * 0.5), 2));
        const a = fadeIn * fadeOut * edgeFade;
        ctx.globalAlpha = Math.max(0, Math.min(1, a * 0.85));
        ctx.fillStyle = runeFill;
        ctx.shadowColor = `rgb(${er.r},${er.g},${er.b})`;
        ctx.shadowBlur = 18 * a;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        const scale = p.size / 32;
        ctx.scale(scale, scale);
        ctx.fillText(p.glyph, 0, 0);
        ctx.restore();
      }
      ctx.shadowBlur = 0;

      // ============ EMBER PASS ============
      emitEmbers(w, h, dt);
      const embers = stateRef.current.embers;
      ctx.globalCompositeOperation = 'lighter';
      for (let i = embers.length - 1; i >= 0; i--) {
        const p = embers[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          embers.splice(i, 1);
          continue;
        }
        p.x += (p.vx + Math.sin(t * 3 + p.twinkle) * 6) * dt;
        p.y += p.vy * dt;
        p.vy *= 0.985;
        const u = p.life / p.maxLife;
        const fadeIn = Math.min(1, p.life / 0.15);
        const fadeOut = 1 - Math.pow(u, 1.6);
        const twinkle = 0.7 + 0.3 * Math.sin(t * 8 + p.twinkle);
        ctx.globalAlpha = Math.max(0, Math.min(1, fadeIn * fadeOut * twinkle));
        const halo = p.size * 8; // brush radius around hot core
        ctx.drawImage(brushes.ember, p.x - halo, p.y - halo, halo * 2, halo * 2);
        // hot core dot
        ctx.globalAlpha = Math.max(0, Math.min(1, fadeIn * fadeOut));
        const er = brushes.emberRGB;
        ctx.fillStyle = `rgb(${Math.min(255, er.r + 30)},${Math.min(255, er.g + 50)},${Math.min(255, er.b + 30)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);
    return () => {
      alive = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [brushes, hue]);

  // Background sky tint matched to hue
  const sceneStyle = useMemo(() => ({
    "--well-hue": hue,
    "--well-godray-a": (0.55 * godrayBrightness).toFixed(3)
  }), [hue, godrayBrightness]);
  const px = parallax.x * 6;
  const py = parallax.y * 4;
  return /*#__PURE__*/React.createElement("div", {
    className: "well-scene" + (thinking ? " is-thinking" : "") + (speaking ? " is-speaking" : ""),
    style: {
      ...sceneStyle,
      transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "well-sky"
  }), /*#__PURE__*/React.createElement("img", {
    className: "well-layer well-layer-back",
    src: "../../assets/logos/mimir-well-back.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "well-godray"
  }), /*#__PURE__*/React.createElement("div", {
    className: "well-godray well-godray-soft"
  }), /*#__PURE__*/React.createElement("canvas", {
    className: "well-canvas",
    ref: canvasRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "well-rim-shimmer"
  }), /*#__PURE__*/React.createElement("img", {
    className: "well-layer well-layer-front",
    src: "../../assets/logos/mimir-well-front.png",
    alt: "The well of Mimir"
  }));
}
window.WellScene = WellScene;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/WellScene.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileApp.jsx
try { (() => {
/* global React, MM_ENTRIES,
   MobileLibrary, MobileEntry, MobileToolsMenu, MobileAsk, MobileSearch, MobileMore,
   MobileTimeline, MobileCalendar, MobileValidation, MobileSchemas, MobileTranslator,
   MobileFamilyTree, MobileGenusTree, MobileFactionTree, MobileRelationships, MobileExport
 */
const {
  useState: useStateApp,
  useMemo: useMemoApp
} = React;
const MM_TABS = [{
  id: "library",
  label: "Library",
  glyph: "❡"
}, {
  id: "tools",
  label: "Tools",
  glyph: "⚒"
}, {
  id: "ask",
  label: "Ask",
  glyph: "❛"
}, {
  id: "search",
  label: "Search",
  glyph: "⌕"
}, {
  id: "more",
  label: "More",
  glyph: "☰"
}];
const MM_TOOL_VIEWS = {
  timeline: props => /*#__PURE__*/React.createElement(MobileTimeline, props),
  calendar: props => /*#__PURE__*/React.createElement(MobileCalendar, props),
  validation: props => /*#__PURE__*/React.createElement(MobileValidation, props),
  schemas: props => /*#__PURE__*/React.createElement(MobileSchemas, props),
  translator: props => /*#__PURE__*/React.createElement(MobileTranslator, props),
  tree: props => /*#__PURE__*/React.createElement(MobileFamilyTree, props),
  genus: props => /*#__PURE__*/React.createElement(MobileGenusTree, props),
  factiontree: props => /*#__PURE__*/React.createElement(MobileFactionTree, props),
  relationships: props => /*#__PURE__*/React.createElement(MobileRelationships, props),
  export: props => /*#__PURE__*/React.createElement(MobileExport, props)
};
function MobileApp({
  initialView,
  initialEntryId,
  initialFilter,
  initialTool,
  initialAskMode
}) {
  // Top-level routing:
  //   view ∈ "library" | "tools" | "ask" | "search" | "more" | "entry" | "tool"
  // The bottom tab bar pushes the 5 root views; tapping an entry pushes
  // "entry", tapping a tool card pushes "tool".
  const [view, setView] = useStateApp(initialView || "library");
  const [filter, setFilter] = useStateApp(initialFilter || "characters");
  const [openEntry, setOpenEntry] = useStateApp(() => {
    if (initialEntryId) return MM_ENTRIES.find(e => e.id === initialEntryId) || null;
    return null;
  });
  const [activeTool, setActiveTool] = useStateApp(initialTool || null);
  const [askWithHistory, setAskWithHistory] = useStateApp(initialAskMode === "history");

  // Which tab is highlighted in the bottom bar
  const activeTab = useMemoApp(() => {
    if (view === "entry") return "library";
    if (view === "tool") return "tools";
    if (view === "search") return "search";
    if (view === "ask") return "ask";
    if (view === "more") return "more";
    if (view === "tools") return "tools";
    return "library";
  }, [view]);
  function navTab(id) {
    if (id === "library") {
      setView("library");
      setOpenEntry(null);
      return;
    }
    if (id === "tools") {
      setView("tools");
      setActiveTool(null);
      return;
    }
    if (id === "ask") {
      setAskWithHistory(true);
      setView("ask");
      return;
    }
    if (id === "search") {
      setView("search");
      return;
    }
    if (id === "more") {
      setView("more");
      return;
    }
  }
  function openEntryFromAnywhere(entry) {
    setOpenEntry(entry);
    setView("entry");
  }
  function openToolFromMenu(toolId) {
    if (toolId === "ask") {
      setAskWithHistory(false);
      setView("ask");
      return;
    }
    if (MM_TOOL_VIEWS[toolId]) {
      setActiveTool(toolId);
      setView("tool");
      return;
    }
    // Fallback for unknown tools — just bounce back
    setActiveTool(null);
    setView("tools");
  }

  // Show top header on root views only (entry / tool / ask have their own)
  const showHeader = view === "library" || view === "tools" || view === "more" || view === "search";
  const showTabBar = view !== "ask" || askWithHistory; // Hide tab bar in an active chat conversation

  return /*#__PURE__*/React.createElement("div", {
    className: "mm-app mm-app--in-frame"
  }, showHeader && /*#__PURE__*/React.createElement("header", {
    className: "mm-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-header-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../../assets/logos/mimir-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Mimir")), /*#__PURE__*/React.createElement("button", {
    className: "mm-header-world",
    onClick: () => setView("more")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-header-world-dot"
  }), "Shieldwall", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)"
    }
  }, "\u2304")), /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: () => setView("search"),
    "aria-label": "Search"
  }, "\u2315"), /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    "aria-label": "Notifications"
  }, "\u2691")), view === "library" && /*#__PURE__*/React.createElement(MobileLibrary, {
    activeFilter: filter,
    onFilter: setFilter,
    onOpenEntry: openEntryFromAnywhere
  }), view === "entry" && openEntry && /*#__PURE__*/React.createElement(MobileEntry, {
    entry: openEntry,
    onBack: () => {
      setOpenEntry(null);
      setView("library");
    },
    onAsk: () => {
      setAskWithHistory(false);
      setView("ask");
    }
  }), view === "tools" && /*#__PURE__*/React.createElement(MobileToolsMenu, {
    onOpen: openToolFromMenu
  }), view === "tool" && activeTool && MM_TOOL_VIEWS[activeTool] && MM_TOOL_VIEWS[activeTool]({
    onBack: () => {
      setActiveTool(null);
      setView("tools");
    }
  }), view === "ask" && /*#__PURE__*/React.createElement(MobileAsk, {
    withHistory: askWithHistory,
    onBack: () => {
      // From an active chat, go to history; from history, go to library
      if (!askWithHistory) {
        setAskWithHistory(true);
        return;
      }
      setView("library");
    }
  }), view === "search" && /*#__PURE__*/React.createElement(MobileSearch, {
    onBack: () => setView("library"),
    onOpenEntry: e => {
      setOpenEntry(e);
      setView("entry");
    }
  }), view === "more" && /*#__PURE__*/React.createElement(MobileMore, null), view === "library" && /*#__PURE__*/React.createElement("button", {
    className: "mm-fab",
    "aria-label": "New entry"
  }, "+"), showTabBar && /*#__PURE__*/React.createElement("nav", {
    className: "mm-tabbar"
  }, MM_TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "mm-tab" + (activeTab === t.id ? " is-active" : ""),
    onClick: () => navTab(t.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-tab-glyph"
  }, t.glyph), /*#__PURE__*/React.createElement("span", null, t.label)))));
}
window.MobileApp = MobileApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileAsk.jsx
try { (() => {
/* global React, MM_PAST_CONVOS */
const {
  useState: useStateAsk
} = React;
const MM_ASK_SEED = [{
  role: "user",
  text: "Who killed Baldr?"
}, {
  role: "mimir",
  text: "Höðr loosed the killing shaft, but the hand was guided. Baldr the Bright was beloved of all things — Frigg, his mother, had walked the nine worlds and taken oaths from fire and iron, from sickness and stone, that none of them would ever wound her son. From all things save one. The mistletoe she passed over, calling it too young and too soft to swear.\n\nLoki, who had measured this gap as a smith measures a seam, plucked a sprig and shaped it into a dart. At the assembly on Iðavöllr the gods made a game of Baldr's invulnerability; Loki put the mistletoe shaft into Höðr's hand and aimed his arm. The dart flew true. Baldr fell, and the bright went out of the world.",
  sources: [{
    id: "baldr",
    t: "Baldr",
    c: "#d99366"
  }, {
    id: "hodr",
    t: "Höðr",
    c: "#d99366"
  }, {
    id: "loki",
    t: "Loki",
    c: "#d99366"
  }, {
    id: "frigg",
    t: "Frigg",
    c: "#d99366"
  }, {
    id: "baldr-d",
    t: "Death of Baldr",
    c: "#8d8478"
  }, {
    id: "idav",
    t: "Iðavöllr",
    c: "#7da265"
  }]
}];
const MM_SUGGESTIONS = ["What happened at Fimbulwinter?", "How is the Iron Crown forged?", "Who serves the All-Father in Asgardr?", "Where do the dvergr keep the seed-time?"];
function MobileAsk({
  onBack,
  withHistory = false
}) {
  const [thread, setThread] = useStateAsk(MM_ASK_SEED);
  const [draft, setDraft] = useStateAsk("");
  function send() {
    if (!draft.trim()) return;
    setThread(prev => [...prev, {
      role: "user",
      text: draft
    }, {
      role: "mimir",
      text: "The well does not yet answer that question — but a scholar might. The threads you have given me run thin here. Could you tell me more about who is asking, and why?"
    }]);
    setDraft("");
  }
  if (withHistory && thread === MM_ASK_SEED) {
    // Empty / starting state: show past conversations + suggestions
    return /*#__PURE__*/React.createElement("div", {
      className: "mm-ask mm-screen"
    }, /*#__PURE__*/React.createElement("header", {
      className: "mm-ev-nav"
    }, /*#__PURE__*/React.createElement("button", {
      className: "mm-icon-btn",
      onClick: onBack,
      "aria-label": "Back"
    }, "\u2190"), /*#__PURE__*/React.createElement("span", {
      className: "mm-ev-nav-title"
    }, "Ask Mimir"), /*#__PURE__*/React.createElement("button", {
      className: "mm-icon-btn",
      "aria-label": "New"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "mm-ask-head"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "mm-ask-head-title"
    }, "The well will answer."), /*#__PURE__*/React.createElement("p", {
      className: "mm-ask-head-sub"
    }, "If the price is paid, and the question is true.")), /*#__PURE__*/React.createElement("div", {
      className: "mm-ask-suggestions"
    }, MM_SUGGESTIONS.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      className: "mm-ask-sugg",
      onClick: () => {
        setDraft(s);
      }
    }, s))), /*#__PURE__*/React.createElement("div", {
      className: "mm-ask-recent"
    }, /*#__PURE__*/React.createElement("span", {
      className: "mm-eyebrow"
    }, "Recent conversations"), MM_PAST_CONVOS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "mm-ask-recent-row"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)"
      }
    }, "\u275B"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, c.title), /*#__PURE__*/React.createElement("span", {
      className: "mm-ask-recent-when"
    }, c.when)))), /*#__PURE__*/React.createElement("div", {
      className: "mm-ask-input"
    }, /*#__PURE__*/React.createElement("input", {
      className: "mm-ask-input-field",
      value: draft,
      onChange: e => setDraft(e.target.value),
      onKeyDown: e => e.key === "Enter" && send(),
      placeholder: "Ask the well\u2026"
    }), /*#__PURE__*/React.createElement("button", {
      className: "mm-ask-send",
      onClick: send,
      "aria-label": "Send"
    }, "\u2191")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-ask mm-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mm-ev-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: onBack,
    "aria-label": "Back"
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    className: "mm-ev-nav-title"
  }, "Who killed Baldr?"), /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    "aria-label": "History"
  }, "\u2630")), /*#__PURE__*/React.createElement("div", {
    className: "mm-ask-thread"
  }, thread.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mm-ask-msg " + m.role
  }, m.role === "mimir" && /*#__PURE__*/React.createElement("div", {
    className: "mm-ask-glyph"
  }, "M"), /*#__PURE__*/React.createElement("div", {
    className: "mm-ask-bubble"
  }, m.text.split("\n\n").map((p, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    className: "mm-ask-text"
  }, p)), m.sources && /*#__PURE__*/React.createElement("div", {
    className: "mm-ask-sources"
  }, m.sources.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.id,
    className: "mm-ask-source"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-ask-source-dot",
    style: {
      background: s.c
    }
  }), s.t))))))), /*#__PURE__*/React.createElement("div", {
    className: "mm-ask-suggestions"
  }, MM_SUGGESTIONS.slice(0, 3).map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "mm-ask-sugg",
    onClick: () => setDraft(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "mm-ask-input"
  }, /*#__PURE__*/React.createElement("input", {
    className: "mm-ask-input-field",
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    placeholder: "Ask follow-up\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    className: "mm-ask-send",
    onClick: send,
    "aria-label": "Send"
  }, "\u2191")));
}
window.MobileAsk = MobileAsk;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileAsk.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileCalendar.jsx
try { (() => {
/* global React, MobileToolHeader */
const {
  useState: useStateCal
} = React;

// Hornfolke 9-month calendar (compressed). Days per month is small enough
// to render in a 6×7 grid with festivals as gilt dots.
const MM_CAL_MONTHS = [{
  name: "Frost-Tide",
  days: 30
}, {
  name: "Wolfsmoon",
  days: 30
}, {
  name: "Iron-Watch",
  days: 30
}, {
  name: "Sea-Mend",
  days: 30
}, {
  name: "Long-Light",
  days: 30
}, {
  name: "Hearth-Wane",
  days: 30
}, {
  name: "Harvest-Bond",
  days: 30
}, {
  name: "Ember-Fall",
  days: 30
}, {
  name: "Dark-Hold",
  days: 32
}];
const MM_CAL_EVENTS = {
  0: [4, 17],
  1: [9, 23, 28],
  2: [1, 14, 25],
  3: [7],
  4: [15, 22],
  5: [3, 19],
  6: [8, 14, 21, 30],
  7: [5, 18],
  8: [1, 16, 28]
};
const MM_MOON_GLYPH = ["●", "◐", "○", "◑"];
function MobileCalendar({
  onBack
}) {
  const [monthIdx, setMonthIdx] = useStateCal(2); // Iron-Watch
  const month = MM_CAL_MONTHS[monthIdx];
  const events = new Set(MM_CAL_EVENTS[monthIdx] || []);
  const today = 14;

  // 6×7 grid (no week start offset — Hornfolke weeks are uniform)
  const cells = [];
  for (let d = 1; d <= month.days; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Calendar \xB7 Hornfolke reckoning",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-cal-controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: () => setMonthIdx((monthIdx + MM_CAL_MONTHS.length - 1) % MM_CAL_MONTHS.length)
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    className: "mm-cal-month"
  }, month.name, " \xB7 ", month.days, " days"), /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: () => setMonthIdx((monthIdx + 1) % MM_CAL_MONTHS.length)
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-body",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-cal-grid"
  }, ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "mm-cal-h"
  }, d[0])), cells.map((d, i) => {
    if (d == null) return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "mm-cal-cell is-empty"
    });
    const classes = ["mm-cal-cell"];
    if (d === today && monthIdx === 2) classes.push("is-today");
    if (events.has(d)) classes.push("is-event");
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: classes.join(" ")
    }, /*#__PURE__*/React.createElement("span", {
      className: "mm-cal-d"
    }, d), /*#__PURE__*/React.createElement("span", {
      className: "mm-cal-moon"
    }, MM_MOON_GLYPH[d % 4]));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mm-cal-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "var(--accent)",
      marginRight: 4
    }
  }), "today"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "var(--color-gilt-500)",
      marginRight: 4
    }
  }), "festival"), /*#__PURE__*/React.createElement("span", null, "\u25CF new \u25D0 wax \u25CB full \u25D1 wane")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px"
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "mm-rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "This month"), /*#__PURE__*/React.createElement("ul", {
    className: "mm-linklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "var(--color-gilt-500)"
    }
  }), "1st \xB7 Festival of First Salt", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "var(--color-gilt-500)"
    }
  }), "14th \xB7 Sigrun's nameday (today)", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "var(--color-gilt-500)"
    }
  }), "25th \xB7 Black-Iron Vigil", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A"))))));
}
window.MobileCalendar = MobileCalendar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileCalendar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileEntry.jsx
try { (() => {
/* global React */
const {
  useState: useStateEv
} = React;

// Type profile data — abridged from desktop EntryView.jsx. Keeps the same
// shape so the mobile view reads naturally for every entry kind.
const MM_TYPE_PROFILES = {
  Character: {
    idPrefix: "char",
    front: [["born", "3rd Yr. of the Long Frost"], ["died", "—"], ["father", {
      link: "Ulf the Wolf-Father"
    }], ["mother", {
      link: "Hilda Steel-Eye"
    }], ["faction", {
      fromEntry: "faction"
    }], ["seat", {
      link: "Caernarfon"
    }], ["banner", "Black wolf, ember field"]],
    conflict: e => `Ulf has no record of ${e.name.split(" ")[0]} as a child. Resolve?`,
    links: [{
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#d99366",
      t: "Hilda Steel-Eye"
    }, {
      c: "#7da265",
      t: "Caernarfon"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }, {
      c: "#8d8478",
      t: "Burning of Hellas"
    }, {
      c: "#a8814d",
      t: "The wolf-banner"
    }],
    timeline: [{
      yr: "Yr 3",
      ev: "Born at Caernarfon"
    }, {
      yr: "Yr 18",
      ev: "Takes the oath"
    }, {
      yr: "Yr 26",
      ev: "Crown at Caernarfon",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Treaty of Avalon"
    }]
  },
  Place: {
    idPrefix: "place",
    front: [["type", {
      fromEntry: "faction"
    }], ["region", "Northern reaches"], ["coordinates", "53° 14' N · 4° 16' W"], ["founded", "Yr — (before reckoning)"], ["inhabitants", {
      link: "Hornfolke"
    }], ["governs", {
      link: "Iron Crown"
    }]],
    conflict: () => "Two sources name this place; the Treaty calls it 'Caer-na-Carn'.",
    links: [{
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#a07cc8",
      t: "Hornfolke"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }, {
      c: "#8d8478",
      t: "The Long War"
    }],
    timeline: [{
      yr: "Before",
      ev: "Founded by the first jarls"
    }, {
      yr: "Yr 3",
      ev: "Sigrun born here"
    }, {
      yr: "Yr 23",
      ev: "Standard raised",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Treaty signed at the gate"
    }]
  },
  Faction: {
    idPrefix: "faction",
    front: [["type", "Confederation"], ["seat", {
      link: "Caernarfon"
    }], ["leader", {
      link: "Sigrun Ulfsdottir"
    }], ["culture", {
      link: "Hornfolke"
    }], ["founded", "Yr 14 — Long Frost"], ["members", "Seven jarldoms · three fallen"], ["banner", "Black wolf, ember field"]],
    conflict: () => "Membership list disagrees with the Treaty witnesses.",
    links: [{
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#7da265",
      t: "Caernarfon"
    }, {
      c: "#a07cc8",
      t: "Hornfolke"
    }, {
      c: "#a8814d",
      t: "The Iron Crown (relic)"
    }],
    timeline: [{
      yr: "Yr 14",
      ev: "Founded by Ulf"
    }, {
      yr: "Yr 18",
      ev: "Seven oaths sworn"
    }, {
      yr: "Yr 23",
      ev: "Crown passes to Sigrun",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Treaty of Avalon"
    }]
  },
  Culture: {
    idPrefix: "culture",
    front: [["primary species", {
      link: "Human"
    }], ["region", {
      link: "Petty Kingdoms"
    }], ["government", "Tribal kingdoms"], ["religion", "Norse gods · ancestor-spirits"], ["parent culture", {
      link: "The Winter Kings"
    }], ["language", {
      link: "Low Speech"
    }]],
    conflict: () => "Schema asks for a parent culture; the elder branch is contested.",
    links: [{
      c: "#7da265",
      t: "Petty Kingdoms"
    }, {
      c: "#a07cc8",
      t: "The Winter Kings"
    }, {
      c: "#8aa0ab",
      t: "Low Speech"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }],
    timeline: [{
      yr: "Before",
      ev: "Splits from the Winter Kings"
    }, {
      yr: "Yr 3",
      ev: "First sea-raids south"
    }, {
      yr: "Yr 23",
      ev: "Iron Crown forged",
      now: true
    }]
  },
  Event: {
    idPrefix: "event",
    front: [["date", {
      fromEntry: "faction"
    }], ["location", {
      link: "Hellas"
    }], ["type", "War · turning"], ["caused by", {
      link: "The Long War"
    }], ["participants", {
      link: "Sigrun Ulfsdottir"
    }], ["outcome", "Decisive — crown passes"]],
    conflict: () => "Year disagrees by one between Hornfolke and Kernow reckonings.",
    links: [{
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#7da265",
      t: "Hellas"
    }, {
      c: "#c43a4e",
      t: "Iron Crown"
    }],
    timeline: [{
      yr: "Yr 22",
      ev: "Long war turns south"
    }, {
      yr: "Yr 23",
      ev: "The event itself",
      now: true
    }, {
      yr: "Yr 23",
      ev: "Crown passes to Sigrun"
    }, {
      yr: "Yr 31",
      ev: "Treaty of Avalon"
    }]
  },
  Language: {
    idPrefix: "lang",
    front: [["status", "Living"], ["speakers", "Dragons · descendants of Nidhoggr"], ["registers", "High · Low · Void"], ["script", "Latin (no native script)"], ["inspirations", "Welsh, Old Norse"], ["translator", "Enabled"]],
    conflict: () => "Naming rules not yet formalised; consistency may vary.",
    links: [{
      c: "#d99366",
      t: "Nidhoggr"
    }, {
      c: "#a07cc8",
      t: "The Dragon-kin"
    }, {
      c: "#c9a227",
      t: "Runadhrimir (related)"
    }, {
      c: "#6b89c2",
      t: "Void-speech rites"
    }],
    timeline: [{
      yr: "Before",
      ev: "Spoken before the first dawn"
    }, {
      yr: "Age I",
      ev: "Taught to the first riders"
    }, {
      yr: "Now",
      ev: "Living — three registers",
      now: true
    }]
  },
  Spell: {
    idPrefix: "spell",
    front: [["caster", "Skald · rune-bearer"], ["medium", "Voice + birch-bark"], ["components", "3 runes, 3 drops, 1 true name"], ["duration", "One crossing"], ["cost", "The caster's voice, day for day"], ["taught by", {
      link: "Njordr"
    }]],
    conflict: () => "Effect verified by 1 source; second account contradicts the cost.",
    links: [{
      c: "#d99366",
      t: "Njordr"
    }, {
      c: "#c9a227",
      t: "Isa — Stillness"
    }, {
      c: "#a8814d",
      t: "Mímir's Horn"
    }, {
      c: "#8aa0ab",
      t: "Runadhrimir"
    }],
    timeline: [{
      yr: "Age I",
      ev: "Taught at the well"
    }, {
      yr: "Yr 12",
      ev: "First written down"
    }, {
      yr: "Yr 26",
      ev: "Used at the crossing",
      now: true
    }]
  },
  Rune: {
    idPrefix: "rune",
    front: [["row", "Elder — first row"], ["glyph", "ᚠ"], ["meaning", "Cattle · wealth · the open hand"], ["element", "Earth · hearth"], ["god", {
      link: "Freyr"
    }], ["used in", {
      link: "The Iron Oath"
    }]],
    conflict: () => "Reversed reading is attested in 2 sources, denied in a third.",
    links: [{
      c: "#d99366",
      t: "Freyr"
    }, {
      c: "#6b89c2",
      t: "The Iron Oath"
    }, {
      c: "#a8814d",
      t: "The Iron Crown (relic)"
    }, {
      c: "#8aa0ab",
      t: "Runadhrimir"
    }],
    timeline: [{
      yr: "Before",
      ev: "Cut by the first scribe"
    }, {
      yr: "Age I",
      ev: "Joined to the elder row"
    }, {
      yr: "Yr 23",
      ev: "Set inside the Iron Crown",
      now: true
    }]
  },
  Artefact: {
    idPrefix: "art",
    front: [["type", "Relic · regalia"], ["materials", "Black iron, prow-nails of seven ships"], ["creator", {
      link: "Ulf the Wolf-Father"
    }], ["created", "Yr 14 — Long Frost"], ["holder", {
      link: "Sigrun Ulfsdottir"
    }], ["location", {
      link: "Caernarfon"
    }], ["inscription", {
      link: "Tiwaz"
    }]],
    conflict: () => "Provenance disputed: a Kernow source claims Bran's smith forged it.",
    links: [{
      c: "#d99366",
      t: "Ulf the Wolf-Father"
    }, {
      c: "#d99366",
      t: "Sigrun Ulfsdottir"
    }, {
      c: "#7da265",
      t: "Caernarfon"
    }, {
      c: "#c9a227",
      t: "Tiwaz — God-Spear"
    }, {
      c: "#c43a4e",
      t: "Iron Crown (faction)"
    }],
    timeline: [{
      yr: "Yr 14",
      ev: "Forged by Ulf"
    }, {
      yr: "Yr 18",
      ev: "First worn at the oath-ring"
    }, {
      yr: "Yr 23",
      ev: "Passes to Sigrun",
      now: true
    }, {
      yr: "Yr 31",
      ev: "Worn at Avalon"
    }]
  }
};

// Two-paragraph mobile prose, type-aware.
const MM_TYPE_PROSE = {
  Character: e => ({
    lead: `Daughter of Ulf, jarl of Caernarfon, born in the third year of the Long Frost. She took the oath at fifteen and the crown at twenty-three, after her father fell at the burning of Hellas.`,
    sections: [{
      h: "The early years",
      p: `${e.name.split(" ")[0]} was raised in the great hall at Caernarfon, set apart from her brothers by her father's quiet insistence that she sit at every council. She learned the seven oaths before she could ride, and could read three runes by her seventh winter.`
    }, {
      h: "The taking of the crown",
      p: `When the longships came up the Caernarfon estuary in the spring of the third year, ${e.name.split(" ")[0]} was the first into the water. Her father had been dead nine days; the crown was hers by oath and by sword both.`
    }]
  }),
  Place: e => ({
    lead: `${e.name} sits where the old roads meet the cold sea. It has been a hall, a market, a refuge, and twice a graveyard, and the stones know which is which.`,
    sections: [{
      h: "The lay of the land",
      p: `Three rivers feed the bay below the keep, and one of them — the Carn — runs warm even in the deepest frost. The townspeople say it is the breath of a sleeping giant; the scribes say it is a hot spring.`
    }, {
      h: "Who keeps it",
      p: `The hall is held now by the Iron Crown, but the older stones underneath are older than the Crown by a thousand winters. Whoever sits the high seat sits on top of someone else's bones.`
    }]
  }),
  Faction: e => ({
    lead: `${e.name} was not born; it was sworn into being. Seven jarls, one circle of black iron, and the long winter of the third year — that is the whole of its founding.`,
    sections: [{
      h: "The seven oaths",
      p: `Each jarl swore on a single iron link: not for the crown, not for the war, not for the gold, but for the next jarl in the ring. The oaths are remembered in order, and broken in the same order.`
    }, {
      h: "The shape of it now",
      p: `Of the seven, three are dead and one is missing. The Crown holds, but the iron grows thin where the oaths once sat. Sigrun has not yet replaced any of the fallen.`
    }]
  }),
  Culture: e => ({
    lead: `The ${e.name} are not one people but a habit of being a people: a way of reckoning the year, a way of sitting at the fire, a way of saying yes that means no.`,
    sections: [{
      h: "The reckoning",
      p: `They count the year in frosts, not in months. Each frost is named for the dead it took: the Cold-of-Asgeir, the Cold-of-the-Long-Hall, the Cold-of-No-One — that last one is the year nobody died, and the only one feared.`
    }, {
      h: "The threshold",
      p: `A guest is sworn to the door, not the host. To cross the threshold is to be one of the household for the duration of the meal; to leave it is to be a stranger again.`
    }]
  }),
  Event: e => ({
    lead: `${e.name} is the day everything afterwards is reckoned from. Before it, there were many small wars; after it, only one — and only one ending.`,
    sections: [{
      h: "The morning of",
      p: `The fleet had been at anchor for nine nights. The wind turned at dawn and they were inside the harbour wall before the watch could light the second beacon. By the time the first horn sounded the keep was already taking water.`
    }, {
      h: "What was lost",
      p: `Three jarls, two ships, and the older of the two libraries. The Crown remembers the jarls; the smaller library was the one that mattered, and only the Crown knows that.`
    }]
  }),
  Language: e => ({
    lead: `${e.name} is not a tongue you learn so much as a tongue you submit to. Its grammar prefers the powerful; its vocabulary prefers the inevitable.`,
    sections: [{
      h: "The three registers",
      p: `High Speech is for declarations: prophecies, claims, the names of gods. Low Speech is for everything that must be said to a lesser thing — short, direct, cruel. Void-speech is for the ritual.`
    }, {
      h: "What cannot be said",
      p: `There are no native words for apology, for begging, for uncertainty. Politeness is a foreign idea, and the language treats it as one.`
    }]
  }),
  Spell: e => ({
    lead: `${e.name} is a small rite, written down in three lines and remembered in three more. It is not powerful by itself; it is powerful when the moment is.`,
    sections: [{
      h: "The casting",
      p: `Three runes scored into birch bark, three drops of the caster's blood, and the true name of the thing being asked spoken once into the wind. The runes are burned afterwards.`
    }, {
      h: "The cost",
      p: `The caster pays in voice, day for day with the asking. A small spell takes a morning; a long one can take a winter. Skalds will not take this rite.`
    }]
  }),
  Rune: e => ({
    lead: `${e.name} is a single mark and a long argument. Each cut is the same; each meaning is what the cutter brings to it.`,
    sections: [{
      h: "The cut",
      p: `The stroke is made downward and finished without lifting the knife. If the knife lifts, the rune is unfinished — and an unfinished rune is read as a question, not an answer.`
    }, {
      h: "The reversed reading",
      p: `Cut backwards, the rune means its opposite, but only if the cutter intended it. Intent is the difference between a misspelling and a curse.`
    }]
  }),
  Artefact: e => ({
    lead: `${e.name} is older than its current keeper, which is the only thing that matters about an artefact: not who holds it now, but how many have held it before.`,
    sections: [{
      h: "The making",
      p: `Forged by Ulf in the deep of the Long Frost, from the prow-nails of the seven first ships. Beaten cold, never heated — the iron is said to have remembered the sea ever since.`
    }, {
      h: "The bearing of it",
      p: `It is worn at council, at oath-ring, and at funerals — never at war. The Crown's whole point is that the oath decides, not the battle.`
    }]
  })
};
function MobileEntry({
  entry,
  onBack,
  onAsk
}) {
  const [tab, setTab] = useStateEv("read"); // read | about | links | timeline
  if (!entry) return null;
  const profile = MM_TYPE_PROFILES[entry.type] || MM_TYPE_PROFILES.Character;
  const proseFn = MM_TYPE_PROSE[entry.type] || MM_TYPE_PROSE.Character;
  const prose = proseFn(entry);
  const front = profile.front.map(([label, raw]) => {
    let v = raw;
    if (v && typeof v === "object" && v.fromEntry) v = entry[v.fromEntry] || "—";
    return [label, v];
  });
  const tabs = [{
    id: "read",
    label: "Read"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "links",
    label: `Links · ${entry.links}`
  }, {
    id: "timeline",
    label: "Timeline"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-ev mm-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mm-ev-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: onBack,
    "aria-label": "Back"
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    className: "mm-ev-nav-title"
  }, entry.name), /*#__PURE__*/React.createElement("span", {
    className: "mm-ev-nav-id"
  }, `${profile.idPrefix}_${entry.id}`)), /*#__PURE__*/React.createElement("div", {
    className: "mm-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-portrait"
  }, entry.thumb && /*#__PURE__*/React.createElement("img", {
    src: entry.thumb,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-portrait-fade"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-ev-eyebrow",
    style: {
      color: entry.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: entry.color
    }
  }), entry.type, entry.faction ? ` · ${entry.faction}` : ""), /*#__PURE__*/React.createElement("h1", {
    className: "mm-ev-title"
  }, entry.name), entry.aliases && /*#__PURE__*/React.createElement("p", {
    className: "mm-ev-aliases"
  }, entry.aliases), /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-tag"
  }, entry.status || "stub"), /*#__PURE__*/React.createElement("span", {
    className: "mm-tag"
  }, "\u21B3 ", entry.links, " links"), /*#__PURE__*/React.createElement("span", {
    className: "mm-tag"
  }, "edited ", entry.edited))), /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    className: "mm-ev-tab" + (tab === t.id ? " is-active" : "")
  }, t.label))), tab === "read" && /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-section"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mm-prose-lead"
  }, prose.lead), prose.sections.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mm-prose-h2"
  }, s.h), /*#__PURE__*/React.createElement("p", {
    className: "mm-prose-p"
  }, s.p)))), tab === "about" && /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Frontmatter"), /*#__PURE__*/React.createElement("dl", {
    className: "mm-dl"
  }, /*#__PURE__*/React.createElement("dt", null, "id"), /*#__PURE__*/React.createElement("dd", {
    className: "mm-mono"
  }, `${profile.idPrefix}_${entry.id}`), front.map(([label, value], i) => {
    if (value && typeof value === "object" && value.link) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
        className: "mm-link"
      }, value.link)));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", null, value));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mm-conflict"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow",
    style: {
      color: "#d6735c"
    }
  }, "Conflict"), /*#__PURE__*/React.createElement("p", {
    className: "mm-conflict-msg"
  }, profile.conflict(entry)))), tab === "links" && /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Linked entries"), /*#__PURE__*/React.createElement("ul", {
    className: "mm-linklist"
  }, profile.links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: l.c
    }
  }), l.t, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A"))))), tab === "timeline" && /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "In the chronicle"), /*#__PURE__*/React.createElement("div", {
    className: "mm-tl",
    style: {
      marginTop: 8
    }
  }, profile.timeline.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mm-tl-row" + (t.now ? " is-now" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-tl-yr"
  }, t.yr), /*#__PURE__*/React.createElement("span", {
    className: "mm-tl-evt"
  }, t.ev)))))), /*#__PURE__*/React.createElement("div", {
    className: "mm-ev-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-btn-secondary"
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    className: "mm-btn-primary",
    onClick: onAsk
  }, "\u275B Ask Mimir")));
}
window.MobileEntry = MobileEntry;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileEntry.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileGraphTools.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, PinchPanCanvas, MobileToolHeader */
const {
  useState: useStateGT
} = React;

/* ──────────────────────────────────────────────────────────────
   Shared SVG tree primitives — used by FamilyTree, GenusTree,
   FactionTree. Keeps the rendering consistent across all three.
   ────────────────────────────────────────────────────────────── */
function TreeNode({
  id,
  x,
  y,
  r = 28,
  name,
  sub,
  c,
  img,
  focus,
  dashed,
  deceased,
  onClick
}) {
  const cid = `mm-clip-${id}`;
  return /*#__PURE__*/React.createElement("g", {
    style: {
      cursor: onClick ? "pointer" : "default"
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: cid
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r - 2
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: r,
    fill: "#1c1814",
    stroke: focus ? "#b85a2c" : c,
    strokeWidth: focus ? 2.5 : 1.5,
    strokeDasharray: dashed ? "4 3" : null
  }), img && /*#__PURE__*/React.createElement("image", {
    href: img,
    x: x - r + 2,
    y: y - r + 2,
    width: (r - 2) * 2,
    height: (r - 2) * 2,
    clipPath: `url(#${cid})`,
    preserveAspectRatio: "xMidYMid slice",
    opacity: deceased ? 0.4 : 0.95
  }), !img && /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + 6,
    textAnchor: "middle",
    fontSize: r > 28 ? 22 : 18,
    fontFamily: "var(--font-display)",
    fill: c
  }, name[0]), deceased && /*#__PURE__*/React.createElement("line", {
    x1: x - r,
    y1: y - r,
    x2: x + r,
    y2: y + r,
    stroke: "rgba(20,16,13,0.85)",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + r + 16,
    textAnchor: "middle",
    className: "mm-svg-name",
    fontSize: 13
  }, name), sub && /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + r + 30,
    textAnchor: "middle",
    className: "mm-svg-sub",
    fontSize: 10
  }, sub));
}

// Render a path like M x0 y0 L x0 yMid L x1 yMid L x1 y1 (a "T" connector).
function TConnector({
  x1,
  y1,
  x2,
  y2,
  yMid,
  dashed,
  strong
}) {
  const d = `M ${x1} ${y1} L ${x1} ${yMid} L ${x2} ${yMid} L ${x2} ${y2}`;
  return /*#__PURE__*/React.createElement("path", {
    d: d,
    className: "mm-svg-edge" + (dashed ? " dashed" : "") + (strong ? " strong" : "")
  });
}

// Marriage line — short horizontal between two nodes at the same y.
function MarriageLine({
  x1,
  x2,
  y,
  r = 28
}) {
  return /*#__PURE__*/React.createElement("line", {
    x1: x1 + r,
    y1: y,
    x2: x2 - r,
    y2: y,
    className: "mm-svg-edge strong"
  });
}

/* ──────────────────────────────────────────────────────────────
   FAMILY TREE — House of Ulf
   Real visual tree, pinch-zoom + pan. Tap a node to focus it.
   ────────────────────────────────────────────────────────────── */
const FT_W = 640,
  FT_H = 760;
const FT_NODES = [{
  id: "olaf",
  x: 240,
  y: 90,
  name: "Olaf Sea-Wolf",
  sub: "d. before reckoning",
  c: "#d99366"
}, {
  id: "bera",
  x: 400,
  y: 90,
  name: "Bera the Old",
  sub: "the last winter-queen",
  c: "#d99366"
}, {
  id: "erik",
  x: 80,
  y: 260,
  name: "Erik the Quiet",
  sub: "Ulf's brother",
  c: "#d99366"
}, {
  id: "ulf",
  x: 240,
  y: 260,
  name: "Ulf the Wolf-Father",
  sub: "d. Yr 23 — Hellas",
  c: "#d99366",
  img: "../../../assets/characters/huskarl.png",
  deceased: true
}, {
  id: "hilda",
  x: 400,
  y: 260,
  name: "Hilda Steel-Eye",
  sub: "wove the wolf-banner",
  c: "#d99366"
}, {
  id: "astrid",
  x: 80,
  y: 430,
  name: "Astrid Half-Hand",
  sub: "shield-sister (sworn)",
  c: "#d99366",
  img: "../../../assets/characters/raider.png",
  dashed: true
}, {
  id: "sigrun",
  x: 240,
  y: 430,
  name: "Sigrun Ulfsdottir",
  sub: "b. Yr 3 — wears the crown",
  c: "#d99366",
  img: "../../../assets/characters/spearmaiden.png",
  focus: true,
  r: 34
}, {
  id: "bjorn",
  x: 400,
  y: 430,
  name: "Bjorn Ulfsson",
  sub: "d. Yr 22 — Hellas",
  c: "#d99366",
  deceased: true
}, {
  id: "hakon",
  x: 240,
  y: 620,
  name: "Hakon the Quiet",
  sub: "ward of Sigrun",
  c: "#d99366",
  img: "../../../assets/characters/young-raider.png",
  dashed: true
}];
// Marriages & parent→child edges
const FT_EDGES = [{
  kind: "marriage",
  a: "olaf",
  b: "bera"
}, {
  kind: "marriage",
  a: "ulf",
  b: "hilda"
},
// Children of Olaf+Bera (marriage midpoint at x=320, y=90)
{
  kind: "child",
  from: [320, 90],
  to: [80, 260]
},
// Erik
{
  kind: "child",
  from: [320, 90],
  to: [240, 260]
},
// Ulf

// Children of Ulf+Hilda (mid at x=320, y=260)
{
  kind: "child",
  from: [320, 260],
  to: [240, 430]
},
// Sigrun
{
  kind: "child",
  from: [320, 260],
  to: [400, 430]
},
// Bjorn

// Sworn-sister (Astrid) — dashed horizontal
{
  kind: "sworn",
  from: [80, 430],
  to: [240, 430]
},
// Ward (Hakon) — dashed vertical
{
  kind: "ward",
  from: [240, 430],
  to: [240, 620]
}];
function MobileFamilyTree({
  onBack
}) {
  const [selectedId, setSelectedId] = useStateGT("sigrun");
  const selected = FT_NODES.find(n => n.id === selectedId);
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "House of Ulf \xB7 family tree",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "3",
    x2: "22",
    y2: "3",
    stroke: "rgba(214,201,168,0.55)",
    strokeWidth: "2"
  })), "line of blood"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "3",
    x2: "22",
    y2: "3",
    stroke: "rgba(214,201,168,0.45)",
    strokeWidth: "1.5",
    strokeDasharray: "4 3"
  })), "sworn / ward"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "14",
    y2: "14",
    stroke: "rgba(176,58,46,0.7)",
    strokeWidth: "1.5"
  })), "fallen")), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-canvas"
  }, /*#__PURE__*/React.createElement(PinchPanCanvas, {
    contentWidth: FT_W,
    contentHeight: FT_H,
    minScale: 0.25,
    maxScale: 3,
    initialFocus: {
      x: 240,
      y: 430,
      scale: 0.55
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: FT_W,
    height: FT_H,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("line", {
    x1: 320,
    y1: 0,
    x2: 320,
    y2: 58,
    className: "mm-svg-edge dashed",
    strokeOpacity: 0.5
  }), /*#__PURE__*/React.createElement("text", {
    x: 320,
    y: 20,
    textAnchor: "middle",
    className: "mm-svg-sub"
  }, "\u2191 mythic lineage continues"), FT_EDGES.map((e, i) => {
    if (e.kind === "marriage") {
      const a = FT_NODES.find(n => n.id === e.a);
      const b = FT_NODES.find(n => n.id === e.b);
      return /*#__PURE__*/React.createElement(MarriageLine, {
        key: i,
        x1: a.x,
        x2: b.x,
        y: a.y,
        r: 28
      });
    }
    if (e.kind === "child") {
      const yMid = (e.from[1] + e.to[1]) / 2;
      return /*#__PURE__*/React.createElement(TConnector, {
        key: i,
        x1: e.from[0],
        y1: e.from[1],
        x2: e.to[0],
        y2: e.to[1] - 28,
        yMid: yMid
      });
    }
    if (e.kind === "sworn") {
      return /*#__PURE__*/React.createElement("line", {
        key: i,
        x1: e.from[0] + 28,
        y1: e.from[1],
        x2: e.to[0] - 28,
        y2: e.to[1],
        className: "mm-svg-edge dashed"
      });
    }
    if (e.kind === "ward") {
      return /*#__PURE__*/React.createElement("line", {
        key: i,
        x1: e.from[0],
        y1: e.from[1] + 34,
        x2: e.to[0],
        y2: e.to[1] - 28,
        className: "mm-svg-edge dashed"
      });
    }
    return null;
  }), FT_NODES.map(n => /*#__PURE__*/React.createElement(TreeNode, _extends({
    key: n.id
  }, n, {
    focus: n.id === selectedId,
    onClick: () => setSelectedId(n.id)
  }))))), selected && /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-detail"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-canvas-detail-close",
    onClick: () => setSelectedId(null),
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-detail-eyebrow",
    style: {
      color: selected.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: selected.c
    }
  }), selected.deceased ? "fallen" : selected.dashed ? "sworn / ward" : "living · house of Ulf"), /*#__PURE__*/React.createElement("h3", {
    className: "mm-canvas-detail-title"
  }, selected.name), /*#__PURE__*/React.createElement("p", {
    className: "mm-canvas-detail-sub"
  }, selected.sub))));
}

/* ──────────────────────────────────────────────────────────────
   GENUS TREE — hierarchical layout from Yggdrasil
   ────────────────────────────────────────────────────────────── */
const GT_W = 1100,
  GT_H = 760;
const GT_NODES = [
// root
{
  id: "ygg",
  x: 550,
  y: 80,
  name: "Yggdrasil",
  sub: "world-tree",
  c: "#c9a227",
  r: 38
},
// first branch
{
  id: "aesir",
  x: 140,
  y: 240,
  name: "Aesir",
  sub: "the hall-above",
  c: "#a07cc8",
  r: 30
}, {
  id: "vanir",
  x: 320,
  y: 240,
  name: "Vanir",
  sub: "sea-kin",
  c: "#6fa39d",
  r: 30
}, {
  id: "jotnar",
  x: 500,
  y: 240,
  name: "Jotnar",
  sub: "giant-kin",
  c: "#8aa0ab",
  r: 30
}, {
  id: "dragon",
  x: 680,
  y: 240,
  name: "Dragon-kin",
  sub: "of Niðhögg",
  c: "#b85a2c",
  r: 30
}, {
  id: "dvergr",
  x: 860,
  y: 240,
  name: "Dvergr",
  sub: "seven smith-clans",
  c: "#a8814d",
  r: 30
}, {
  id: "human",
  x: 1020,
  y: 240,
  name: "Humanity",
  sub: "Midgard-kin",
  c: "#d99366",
  r: 30
},
// second branch — selected branches expanded
{
  id: "odin",
  x: 60,
  y: 420,
  name: "Odin",
  sub: "All-Father",
  c: "#a07cc8"
}, {
  id: "thor",
  x: 160,
  y: 420,
  name: "Thor",
  sub: "Thunder-Hand",
  c: "#a07cc8"
}, {
  id: "frigg",
  x: 260,
  y: 420,
  name: "Frigg",
  sub: "Hall-Keeper",
  c: "#a07cc8"
}, {
  id: "ice-jotn",
  x: 440,
  y: 420,
  name: "Ice Jotnar",
  sub: "Hrímþursar",
  c: "#8aa0ab"
}, {
  id: "fire-jotn",
  x: 560,
  y: 420,
  name: "Fire Jotnar",
  sub: "Múspell-kin",
  c: "#8aa0ab"
}, {
  id: "nidhogg",
  x: 680,
  y: 420,
  name: "Niðhögg",
  sub: "root-gnawer",
  c: "#b85a2c"
}, {
  id: "hornfolke",
  x: 900,
  y: 420,
  name: "Hornfolke",
  sub: "northmen",
  c: "#d99366"
}, {
  id: "kernow",
  x: 1020,
  y: 420,
  name: "Kernow",
  sub: "twelve towers",
  c: "#d99366"
}, {
  id: "winter",
  x: 1140,
  y: 420,
  name: "Winter Kings",
  sub: "highlands",
  c: "#d99366"
},
// third branch
{
  id: "sigrun-g",
  x: 840,
  y: 600,
  name: "Sigrun",
  sub: "Iron Crown",
  c: "#d99366",
  img: "../../../assets/characters/spearmaiden.png"
}, {
  id: "ulf-g",
  x: 960,
  y: 600,
  name: "Ulf",
  sub: "Wolf-Father",
  c: "#d99366",
  img: "../../../assets/characters/huskarl.png",
  deceased: true
}, {
  id: "bran-g",
  x: 1080,
  y: 600,
  name: "Bran",
  sub: "the Stone-King",
  c: "#d99366",
  img: "../../../assets/characters/kernow-king.png"
}];
const GT_EDGES = [
// ygg → six kindred
["ygg", "aesir"], ["ygg", "vanir"], ["ygg", "jotnar"], ["ygg", "dragon"], ["ygg", "dvergr"], ["ygg", "human"],
// aesir → odin/thor/frigg
["aesir", "odin"], ["aesir", "thor"], ["aesir", "frigg"],
// jotnar → ice/fire
["jotnar", "ice-jotn"], ["jotnar", "fire-jotn"],
// dragon → nidhogg
["dragon", "nidhogg"],
// human → hornfolke/kernow/winter
["human", "hornfolke"], ["human", "kernow"], ["human", "winter"],
// hornfolke → sigrun/ulf
["hornfolke", "sigrun-g"], ["hornfolke", "ulf-g"],
// kernow → bran
["kernow", "bran-g"]];
function MobileGenusTree({
  onBack
}) {
  const [selectedId, setSelectedId] = useStateGT("hornfolke");
  const selected = GT_NODES.find(n => n.id === selectedId);
  const byId = id => GT_NODES.find(n => n.id === id);
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Genus tree \xB7 life of Yggdrasil",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-legend"
  }, [{
    l: "Aesir",
    c: "#a07cc8"
  }, {
    l: "Jotnar",
    c: "#8aa0ab"
  }, {
    l: "Dragon",
    c: "#b85a2c"
  }, {
    l: "Dvergr",
    c: "#a8814d"
  }, {
    l: "Human",
    c: "#d99366"
  }].map(x => /*#__PURE__*/React.createElement("span", {
    key: x.l,
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-dot",
    style: {
      background: x.c
    }
  }), x.l))), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-canvas"
  }, /*#__PURE__*/React.createElement(PinchPanCanvas, {
    contentWidth: GT_W,
    contentHeight: GT_H,
    minScale: 0.18,
    maxScale: 3,
    initialFocus: {
      x: 550,
      y: 360,
      scale: 0.42
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: GT_W,
    height: GT_H,
    xmlns: "http://www.w3.org/2000/svg"
  }, GT_EDGES.map(([fromId, toId], i) => {
    const a = byId(fromId);
    const b = byId(toId);
    const yMid = (a.y + b.y) / 2;
    return /*#__PURE__*/React.createElement(TConnector, {
      key: i,
      x1: a.x,
      y1: a.y + (a.r || 28),
      x2: b.x,
      y2: b.y - (b.r || 28),
      yMid: yMid
    });
  }), GT_NODES.map(n => /*#__PURE__*/React.createElement(TreeNode, _extends({
    key: n.id
  }, n, {
    focus: n.id === selectedId,
    onClick: () => setSelectedId(n.id)
  }))))), selected && /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-detail"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-canvas-detail-close",
    onClick: () => setSelectedId(null),
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-detail-eyebrow",
    style: {
      color: selected.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: selected.c
    }
  }), "kindred \xB7 genus"), /*#__PURE__*/React.createElement("h3", {
    className: "mm-canvas-detail-title"
  }, selected.name), /*#__PURE__*/React.createElement("p", {
    className: "mm-canvas-detail-sub"
  }, selected.sub))));
}

/* ──────────────────────────────────────────────────────────────
   FACTION TREE — banners & oaths
   ────────────────────────────────────────────────────────────── */
const FAT_W = 1100,
  FAT_H = 720;
const FAT_NODES = [
// root banners
{
  id: "iron",
  x: 220,
  y: 100,
  name: "Iron Crown",
  sub: "confederation",
  c: "#c43a4e",
  r: 34
}, {
  id: "kernow",
  x: 560,
  y: 100,
  name: "Kernow",
  sub: "twelve towers",
  c: "#a07cc8",
  r: 34
}, {
  id: "asgardr",
  x: 880,
  y: 100,
  name: "Ásgarðr",
  sub: "the hall-above",
  c: "#6b89c2",
  r: 34
},
// Iron Crown — seven jarldoms (3 fallen, 4 standing)
{
  id: "caer",
  x: 60,
  y: 320,
  name: "Caernarfon",
  sub: "seat — standing",
  c: "#c43a4e"
}, {
  id: "horn",
  x: 160,
  y: 320,
  name: "Hornfolke",
  sub: "confederate",
  c: "#c43a4e"
}, {
  id: "hellas-j",
  x: 260,
  y: 320,
  name: "Hellas-jarl",
  sub: "FALLEN · Yr 23",
  c: "#c43a4e",
  deceased: true
}, {
  id: "avalon-j",
  x: 360,
  y: 320,
  name: "Avalon-jarl",
  sub: "standing",
  c: "#c43a4e"
},
// (3 more nodes implied but kept off-canvas for readability)

// Kernow — three towers
{
  id: "high",
  x: 460,
  y: 320,
  name: "High Tower",
  sub: "seat of Bran",
  c: "#a07cc8"
}, {
  id: "sea",
  x: 560,
  y: 320,
  name: "Sea Tower",
  sub: "harbour-wall",
  c: "#a07cc8"
}, {
  id: "stone",
  x: 660,
  y: 320,
  name: "Stone Tower",
  sub: "old keep",
  c: "#a07cc8"
},
// Asgardr
{
  id: "odin-f",
  x: 780,
  y: 320,
  name: "Odin's hall",
  sub: "high seat",
  c: "#6b89c2"
}, {
  id: "frigg-f",
  x: 880,
  y: 320,
  name: "Frigg's threshold",
  sub: "keeper",
  c: "#6b89c2"
}, {
  id: "thor-f",
  x: 980,
  y: 320,
  name: "Thor's wall",
  sub: "outer guard",
  c: "#6b89c2"
},
// Iron Crown leaders
{
  id: "sigrun-f",
  x: 110,
  y: 540,
  name: "Sigrun",
  sub: "crown-holder",
  c: "#c43a4e",
  img: "../../../assets/characters/spearmaiden.png",
  r: 30
}, {
  id: "astrid-f",
  x: 230,
  y: 540,
  name: "Astrid",
  sub: "shield-sister",
  c: "#c43a4e",
  img: "../../../assets/characters/raider.png"
}, {
  id: "ulf-f",
  x: 340,
  y: 540,
  name: "Ulf",
  sub: "founder, fallen",
  c: "#c43a4e",
  img: "../../../assets/characters/huskarl.png",
  deceased: true
},
// Kernow leaders
{
  id: "bran-f",
  x: 560,
  y: 540,
  name: "Bran",
  sub: "the Stone-King",
  c: "#a07cc8",
  img: "../../../assets/characters/kernow-king.png"
}];
const FAT_EDGES = [["iron", "caer"], ["iron", "horn"], ["iron", "hellas-j"], ["iron", "avalon-j"], ["kernow", "high"], ["kernow", "sea"], ["kernow", "stone"], ["asgardr", "odin-f"], ["asgardr", "frigg-f"], ["asgardr", "thor-f"],
// leaders
["caer", "sigrun-f"], ["caer", "astrid-f"], ["caer", "ulf-f"], ["high", "bran-f"]];
function MobileFactionTree({
  onBack
}) {
  const [selectedId, setSelectedId] = useStateGT("iron");
  const selected = FAT_NODES.find(n => n.id === selectedId);
  const byId = id => FAT_NODES.find(n => n.id === id);
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Faction tree \xB7 banners & oaths",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-dot",
    style: {
      background: "#c43a4e"
    }
  }), "Iron Crown"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-dot",
    style: {
      background: "#a07cc8"
    }
  }), "Kernow"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-dot",
    style: {
      background: "#6b89c2"
    }
  }), "\xC1sgar\xF0r")), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-canvas"
  }, /*#__PURE__*/React.createElement(PinchPanCanvas, {
    contentWidth: FAT_W,
    contentHeight: FAT_H,
    minScale: 0.2,
    maxScale: 3,
    initialFocus: {
      x: 220,
      y: 360,
      scale: 0.48
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: FAT_W,
    height: FAT_H,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("rect", {
    x: 20,
    y: 60,
    width: 400,
    height: 520,
    rx: 12,
    fill: "rgba(196,58,78,0.04)",
    stroke: "rgba(196,58,78,0.18)",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 440,
    y: 60,
    width: 260,
    height: 520,
    rx: 12,
    fill: "rgba(160,124,200,0.04)",
    stroke: "rgba(160,124,200,0.18)",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 720,
    y: 60,
    width: 340,
    height: 300,
    rx: 12,
    fill: "rgba(107,137,194,0.04)",
    stroke: "rgba(107,137,194,0.18)",
    strokeDasharray: "4 4"
  }), FAT_EDGES.map(([fromId, toId], i) => {
    const a = byId(fromId);
    const b = byId(toId);
    const yMid = (a.y + b.y) / 2;
    return /*#__PURE__*/React.createElement(TConnector, {
      key: i,
      x1: a.x,
      y1: a.y + (a.r || 28),
      x2: b.x,
      y2: b.y - (b.r || 28),
      yMid: yMid
    });
  }), FAT_NODES.map(n => /*#__PURE__*/React.createElement(TreeNode, _extends({
    key: n.id
  }, n, {
    focus: n.id === selectedId,
    onClick: () => setSelectedId(n.id)
  }))))), selected && /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-detail"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-canvas-detail-close",
    onClick: () => setSelectedId(null),
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-detail-eyebrow",
    style: {
      color: selected.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: selected.c
    }
  }), selected.deceased ? "fallen banner" : "banner · oath-bound"), /*#__PURE__*/React.createElement("h3", {
    className: "mm-canvas-detail-title"
  }, selected.name), /*#__PURE__*/React.createElement("p", {
    className: "mm-canvas-detail-sub"
  }, selected.sub))));
}

/* ──────────────────────────────────────────────────────────────
   CONNECTIONS — 2D force-graph (pre-computed positions)
   Honest mobile downgrade from the desktop's 3D web.
   ────────────────────────────────────────────────────────────── */
const CN_W = 1000,
  CN_H = 800;
const CN_NODES = [
// people
{
  id: "sigrun",
  x: 500,
  y: 400,
  name: "Sigrun",
  type: "Character",
  c: "#d99366",
  r: 30,
  img: "../../../assets/characters/spearmaiden.png",
  focus: true
}, {
  id: "ulf",
  x: 360,
  y: 280,
  name: "Ulf",
  type: "Character",
  c: "#d99366",
  img: "../../../assets/characters/huskarl.png",
  deceased: true
}, {
  id: "astrid",
  x: 360,
  y: 540,
  name: "Astrid",
  type: "Character",
  c: "#d99366",
  img: "../../../assets/characters/raider.png"
}, {
  id: "hakon",
  x: 580,
  y: 580,
  name: "Hakon",
  type: "Character",
  c: "#d99366",
  img: "../../../assets/characters/young-raider.png"
}, {
  id: "bran",
  x: 700,
  y: 320,
  name: "Bran",
  type: "Character",
  c: "#d99366",
  img: "../../../assets/characters/kernow-king.png"
}, {
  id: "hilda",
  x: 220,
  y: 200,
  name: "Hilda",
  type: "Character",
  c: "#d99366"
},
// places
{
  id: "caer",
  x: 660,
  y: 480,
  name: "Caernarfon",
  type: "Place",
  c: "#7da265"
}, {
  id: "hellas",
  x: 200,
  y: 380,
  name: "Hellas",
  type: "Place",
  c: "#7da265"
}, {
  id: "alba",
  x: 100,
  y: 180,
  name: "Alba",
  type: "Place",
  c: "#7da265"
}, {
  id: "avalon",
  x: 820,
  y: 600,
  name: "Avalon",
  type: "Place",
  c: "#7da265"
},
// factions
{
  id: "iron",
  x: 380,
  y: 100,
  name: "Iron Crown",
  type: "Faction",
  c: "#c43a4e",
  r: 30
}, {
  id: "kernow",
  x: 800,
  y: 120,
  name: "Kernow",
  type: "Faction",
  c: "#c43a4e"
},
// events
{
  id: "burn",
  x: 140,
  y: 540,
  name: "Burn. Hellas",
  type: "Event",
  c: "#8d8478"
}, {
  id: "treaty",
  x: 900,
  y: 720,
  name: "Treaty Av.",
  type: "Event",
  c: "#8d8478"
},
// artefacts
{
  id: "crown",
  x: 600,
  y: 200,
  name: "Iron Crown",
  type: "Artefact",
  c: "#a8814d"
}, {
  id: "banner",
  x: 260,
  y: 100,
  name: "Wolf-banner",
  type: "Artefact",
  c: "#a8814d"
},
// runes
{
  id: "tiwaz",
  x: 760,
  y: 220,
  name: "Tiwaz",
  type: "Rune",
  c: "#c9a227"
}];
const CN_EDGES = [
// kin
["ulf", "sigrun", "kin"], ["hilda", "sigrun", "kin"], ["ulf", "hilda", "kin"],
// sworn / ward
["astrid", "sigrun", "sworn"], ["hakon", "sigrun", "ward"],
// seat
["sigrun", "caer", "seat"], ["ulf", "caer", "seat"], ["bran", "kernow", "seat"],
// origin / fell
["ulf", "hellas", "fell"], ["sigrun", "alba", "origin"],
// banner / faction
["sigrun", "iron", "leads"], ["ulf", "iron", "founded"], ["bran", "kernow", "leads"],
// events
["burn", "hellas", "at"], ["burn", "ulf", "killed"], ["treaty", "avalon", "at"], ["treaty", "sigrun", "party"],
// artefacts
["crown", "iron", "emblem"], ["crown", "sigrun", "held"], ["banner", "sigrun", "carried"], ["banner", "hilda", "wove"],
// rune
["tiwaz", "crown", "inscribed"]];
function MobileRelationships({
  onBack
}) {
  const [selectedId, setSelectedId] = useStateGT("sigrun");
  const selected = CN_NODES.find(n => n.id === selectedId);
  const byId = id => CN_NODES.find(n => n.id === id);

  // Which edges touch the selected node — highlight them
  const touches = e => e[0] === selectedId || e[1] === selectedId;
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Connections \xB7 312 edges",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-legend"
  }, [{
    l: "Character",
    c: "#d99366"
  }, {
    l: "Place",
    c: "#7da265"
  }, {
    l: "Faction",
    c: "#c43a4e"
  }, {
    l: "Event",
    c: "#8d8478"
  }, {
    l: "Artefact",
    c: "#a8814d"
  }, {
    l: "Rune",
    c: "#c9a227"
  }].map(x => /*#__PURE__*/React.createElement("span", {
    key: x.l,
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-dot",
    style: {
      background: x.c
    }
  }), x.l))), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-canvas"
  }, /*#__PURE__*/React.createElement(PinchPanCanvas, {
    contentWidth: CN_W,
    contentHeight: CN_H,
    minScale: 0.2,
    maxScale: 4,
    initialFocus: {
      x: 500,
      y: 400,
      scale: 0.55
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: CN_W,
    height: CN_H,
    xmlns: "http://www.w3.org/2000/svg"
  }, CN_EDGES.map((e, i) => {
    const a = byId(e[0]);
    const b = byId(e[1]);
    if (!a || !b) return null;
    const hot = touches(e);
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      stroke: hot ? "#b85a2c" : "rgba(214,201,168,0.22)",
      strokeWidth: hot ? 2 : 1
    }), hot && /*#__PURE__*/React.createElement("text", {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2 - 4,
      textAnchor: "middle",
      className: "mm-svg-sub",
      fill: "#f3c8a3",
      style: {
        textTransform: "none"
      }
    }, e[2]));
  }), CN_NODES.map(n => /*#__PURE__*/React.createElement(TreeNode, _extends({
    key: n.id
  }, n, {
    focus: n.id === selectedId,
    onClick: () => setSelectedId(n.id)
  }))))), selected && /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-detail"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-canvas-detail-close",
    onClick: () => setSelectedId(null),
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-detail-eyebrow",
    style: {
      color: selected.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: selected.c
    }
  }), selected.type, " \xB7 ", CN_EDGES.filter(touches).length, " connections"), /*#__PURE__*/React.createElement("h3", {
    className: "mm-canvas-detail-title"
  }, selected.name), /*#__PURE__*/React.createElement("p", {
    className: "mm-canvas-detail-sub"
  }, "Tap a connected node to follow its edges, or pinch out to see the whole web."))));
}

/* ──────────────────────────────────────────────────────────────
   EXPORT — unchanged form, still the list view
   ────────────────────────────────────────────────────────────── */
function MobileExport({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Export to engine",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Target"), /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-pane",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-schema-icon",
    style: {
      fontSize: 14
    }
  }, "\u2913"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-vt-title"
  }, "Unreal Engine 5.4"), /*#__PURE__*/React.createElement("div", {
    className: "mm-vt-yr"
  }, "Last build \xB7 2 mins ago \xB7 clean")), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow",
    style: {
      marginTop: 14,
      display: "block"
    }
  }, "Scope"), /*#__PURE__*/React.createElement("ul", {
    className: "mm-linklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#d99366"
    }
  }), "Characters \xB7 47 entries", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u2713")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#7da265"
    }
  }), "Places \xB7 23 entries", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u2713")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#c43a4e"
    }
  }), "Factions \xB7 11 entries", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u2713")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#8d8478"
    }
  }), "Events \xB7 38 entries", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u25CB")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#c9a227"
    }
  }), "Runes \xB7 24 entries", /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u25CB"))), /*#__PURE__*/React.createElement("button", {
    className: "mm-btn-primary",
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 14,
      padding: "12px"
    }
  }, "Build & sync \xB7 ~90s")));
}
window.MobileFamilyTree = MobileFamilyTree;
window.MobileGenusTree = MobileGenusTree;
window.MobileFactionTree = MobileFactionTree;
window.MobileRelationships = MobileRelationships;
window.MobileExport = MobileExport;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileGraphTools.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileLibrary.jsx
try { (() => {
/* global React, MM_ENTRIES, MM_FILTERS, MM_ZONE_HEADERS, MM_ZONE_PLATES */

function MobileEntryRow({
  entry,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(entry),
    className: "mm-entry",
    style: {
      "--entry-c": entry.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-entry-thumb"
  }, entry.thumb && /*#__PURE__*/React.createElement("img", {
    src: entry.thumb,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "mm-entry-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-entry-eye"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-entry-dot"
  }), entry.type, entry.faction ? ` · ${entry.faction}` : ""), /*#__PURE__*/React.createElement("h3", {
    className: "mm-entry-title"
  }, entry.name), entry.aliases && /*#__PURE__*/React.createElement("p", {
    className: "mm-entry-aliases"
  }, entry.aliases), /*#__PURE__*/React.createElement("p", {
    className: "mm-entry-snippet"
  }, entry.snippet), /*#__PURE__*/React.createElement("div", {
    className: "mm-entry-meta"
  }, entry.status && /*#__PURE__*/React.createElement("span", {
    className: "mm-entry-tag"
  }, entry.status), /*#__PURE__*/React.createElement("span", {
    className: "mm-entry-tag"
  }, "\u21B3 ", entry.links), /*#__PURE__*/React.createElement("span", {
    className: "mm-entry-tag"
  }, "edited ", entry.edited))));
}
const MM_NEW_LABELS = {
  all: "+ New",
  characters: "+ Character",
  places: "+ Place",
  factions: "+ Faction",
  cultures: "+ Culture",
  events: "+ Event",
  languages: "+ Language",
  spells: "+ Spell",
  runes: "+ Rune",
  artefacts: "+ Artefact"
};
function MobileLibrary({
  activeFilter,
  onFilter,
  onOpenEntry
}) {
  const filterId = activeFilter || "characters";
  const visible = filterId === "all" ? MM_ENTRIES : MM_ENTRIES.filter(e => e.filter === filterId);
  const header = MM_ZONE_HEADERS[filterId] || MM_ZONE_HEADERS.all;
  const plate = MM_ZONE_PLATES[filterId] || MM_ZONE_PLATES.all;
  const newLabel = MM_NEW_LABELS[filterId] || "+ New";
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-zone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-zone-plate",
    style: {
      backgroundImage: `url('${plate}')`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-zone-fade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-zone-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, header.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "mm-zone-title"
  }, header.title), /*#__PURE__*/React.createElement("p", {
    className: "mm-zone-sub"
  }, header.sub(visible.length)))), /*#__PURE__*/React.createElement("div", {
    className: "mm-zone-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-btn-ghost"
  }, "Sort: recent"), /*#__PURE__*/React.createElement("button", {
    className: "mm-btn-primary"
  }, newLabel)), /*#__PURE__*/React.createElement("div", {
    className: "mm-chips"
  }, MM_FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    onClick: () => onFilter(f.id),
    className: "mm-chip" + (filterId === f.id ? " is-active" : ""),
    style: {
      "--chip-c": f.color || "var(--fg-2)"
    }
  }, f.color && /*#__PURE__*/React.createElement("span", {
    className: "mm-chip-dot"
  }), f.label, /*#__PURE__*/React.createElement("span", {
    className: "mm-chip-count"
  }, f.count)))), /*#__PURE__*/React.createElement("div", {
    className: "mm-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-entries"
  }, visible.map(entry => /*#__PURE__*/React.createElement(MobileEntryRow, {
    key: entry.id,
    entry: entry,
    onOpen: onOpenEntry
  })))));
}
window.MobileLibrary = MobileLibrary;
window.MobileEntryRow = MobileEntryRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileLibrary.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileSchemas.jsx
try { (() => {
/* global React, MobileToolHeader */

const MM_SCHEMAS = [{
  id: "characters",
  name: "Character",
  icon: "👤",
  desc: "Named people, gods, beasts. Anything with a voice and a fate.",
  count: 47,
  custom: false
}, {
  id: "places",
  name: "Place",
  icon: "🗺",
  desc: "Hearths, holds, ruins, roads. Anywhere a story can land.",
  count: 23,
  custom: false
}, {
  id: "factions",
  name: "Faction",
  icon: "⚔",
  desc: "Banners, cults, councils, warbands. Any organised body.",
  count: 11,
  custom: false
}, {
  id: "cultures",
  name: "Culture",
  icon: "ᚱ",
  desc: "Peoples, tongues, customs. The shared way a folk lives.",
  count: 6,
  custom: false
}, {
  id: "events",
  name: "Event",
  icon: "✦",
  desc: "Battles, oaths, omens. Moments the chronicle remembers.",
  count: 38,
  custom: false
}, {
  id: "languages",
  name: "Language",
  icon: "𐌀",
  desc: "Tongues spoken across the saga, with their glyph systems.",
  count: 4,
  custom: false
}, {
  id: "spells",
  name: "Spell",
  icon: "❛",
  desc: "Rites, bindings, summonings.",
  count: 17,
  custom: false
}, {
  id: "runes",
  name: "Rune",
  icon: "ᚠ",
  desc: "The elder row and its derivatives.",
  count: 24,
  custom: false
}, {
  id: "artefacts",
  name: "Artefact",
  icon: "⚒",
  desc: "Crowns, relics, weapons-of-record.",
  count: 19,
  custom: false
}, {
  id: "warbands",
  name: "Warband",
  icon: "⊕",
  desc: "Custom — Iron Crown campaign rosters.",
  count: 5,
  custom: true
}, {
  id: "feasts",
  name: "Feast-Day",
  icon: "◷",
  desc: "Custom — Hornfolke festivals on the calendar.",
  count: 12,
  custom: true
}];
function MobileSchemas({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Schemas \xB7 9 built-in \xB7 2 custom",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-tools-header",
    style: {
      padding: "4px 0 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Lorebible \xB7 field shapes"), /*#__PURE__*/React.createElement("p", {
    className: "mm-tools-sub",
    style: {
      margin: "6px 0 0"
    }
  }, "Edit the field set for any entry kind. Custom schemas appear at the bottom.")), MM_SCHEMAS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "mm-schema-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-schema-icon"
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "mm-schema-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-schema-name"
  }, s.name, s.custom && /*#__PURE__*/React.createElement("span", {
    className: "mm-tag",
    style: {
      marginLeft: 8
    }
  }, "custom")), /*#__PURE__*/React.createElement("p", {
    className: "mm-schema-desc"
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    className: "mm-schema-meta"
  }, s.count, " entries \xB7 ", s.custom ? "user-defined" : "built-in")), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")))));
}
window.MobileSchemas = MobileSchemas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileSchemas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileSearchMore.jsx
try { (() => {
/* global React, MM_ENTRIES, MM_TYPE_COLOR */
const {
  useState: useStateSearch
} = React;
const MM_RECENT_ITEMS = [{
  id: "sigrun",
  name: "Sigrun Ulfsdottir",
  meta: "Character · Iron Crown",
  c: "#d99366"
}, {
  id: "caernarfon",
  name: "Caernarfon",
  meta: "Place · capital",
  c: "#7da265"
}, {
  id: "burning",
  name: "Burning of Hellas",
  meta: "Event · Yr 23",
  c: "#8d8478"
}];
const MM_ACTIONS = [{
  glyph: "+",
  label: "New character",
  meta: "⌘N"
}, {
  glyph: "↗",
  label: "Open in editor",
  meta: ""
}, {
  glyph: "⊕",
  label: "Run validation",
  meta: ""
}, {
  glyph: "⤓",
  label: "Export to Unreal",
  meta: ""
}];
const MM_NAV = [{
  glyph: "⏳",
  label: "Timeline"
}, {
  glyph: "❦",
  label: "Family tree"
}, {
  glyph: "❛",
  label: "Ask Mimir"
}];
function MobileSearch({
  onBack,
  onOpenEntry
}) {
  const [q, setQ] = useStateSearch("");
  const filtered = q ? MM_ENTRIES.filter(e => e.name.toLowerCase().includes(q.toLowerCase()) || (e.aliases || "").toLowerCase().includes(q.toLowerCase())).slice(0, 8) : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: onBack,
    "aria-label": "Close"
  }, "\u2190"), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    className: "mm-search-input",
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Find anywhere in your world\u2026"
  }), q && /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: () => setQ(""),
    "aria-label": "Clear"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "mm-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-body"
  }, q && /*#__PURE__*/React.createElement("div", {
    className: "mm-search-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Entries \xB7 ", filtered.length), filtered.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "12px 0",
      color: "var(--fg-3)",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic"
    }
  }, "Nothing under that name yet. Try a different spelling, or ask Mimir."), filtered.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    className: "mm-search-row",
    onClick: () => onOpenEntry(e)
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-icon",
    style: {
      color: e.color
    }
  }, "\u25CB"), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-name"
  }, e.name), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-meta"
  }, e.type)))), !q && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Recently opened"), MM_RECENT_ITEMS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    className: "mm-search-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-icon",
    style: {
      color: r.c
    }
  }, "\u25CB"), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-name"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-meta"
  }, r.meta)))), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Actions"), MM_ACTIONS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mm-search-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-icon"
  }, a.glyph), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-name"
  }, a.label), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-meta"
  }, a.meta)))), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Navigate"), MM_NAV.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mm-search-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-search-icon"
  }, n.glyph), /*#__PURE__*/React.createElement("div", {
    className: "mm-search-name"
  }, n.label))))))));
}
function MobileMore() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-more-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-more-avatar"
  }, "AG"), /*#__PURE__*/React.createElement("div", {
    className: "mm-more-user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-more-name"
  }, "Astrid Greycloak"), /*#__PURE__*/React.createElement("div", {
    className: "mm-more-sync"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-more-sync-dot"
  }), "Synced \xB7 2 mins ago")), /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn"
  }, "\u22EF")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "World"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon",
    style: {
      color: "var(--accent)"
    }
  }, "\u25CF"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Shieldwall Saga"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "/Worlds/Shieldwall"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\u2302"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Switch world"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "4 others"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Library"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\u2913"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Offline copy"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "312 entries"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\u2605"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Pinned"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "8"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\u2934"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Recent edits"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "App"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\u25D0"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Theme"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "Atelier dark"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\uD835\uDC00"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Reading size"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "Medium"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "\u2699"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Settings"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-icon"
  }, "?"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-label"
  }, "Help & about"), /*#__PURE__*/React.createElement("div", {
    className: "mm-list-row-meta"
  }, "v1.4"), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A"))))));
}
window.MobileSearch = MobileSearch;
window.MobileMore = MobileMore;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileSearchMore.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileTimeline.jsx
try { (() => {
/* global React, PinchPanCanvas, MobileToolHeader */
const {
  useState: useStateTL
} = React;

/*
 * Real visual timeline — horizontal SVG canvas.
 *
 * Layout (content): 2200 × 560.
 *   y =   0–60   : era band labels
 *   y =  60–100  : year axis
 *   y = 100–520  : 6 swimlanes (Cosmic, Magic, Founding, Politics, War, Calendar)
 *   y = 520–560  : era markers (Long War etc.)
 *
 * x is a "story position" 0–2200 that compresses the deep past (where
 * dates blur) and expands the recent reckoning (where every winter
 * matters). Auto-fit on mount; pan/pinch to explore.
 */

const TL_LANES = [{
  id: "Cosmic",
  label: "Cosmic",
  c: "#a07cc8"
}, {
  id: "Magic",
  label: "Magic",
  c: "#c9a227"
}, {
  id: "Founding",
  label: "Founding",
  c: "#7da265"
}, {
  id: "Politics",
  label: "Politics",
  c: "#c43a4e"
}, {
  id: "War",
  label: "War",
  c: "#b03a2e"
}, {
  id: "Calendar",
  label: "Calendar",
  c: "#8aa0ab"
}];
const LANE_H = 70;
const LANE_Y0 = 110;
function laneY(idx) {
  return LANE_Y0 + LANE_H / 2 + idx * LANE_H;
}
const TL_ERAS = [{
  x0: 0,
  x1: 640,
  label: "Before-time",
  c: "rgba(160,124,200,0.10)"
}, {
  x0: 640,
  x1: 1180,
  label: "Founding ages",
  c: "rgba(125,162,101,0.10)"
}, {
  x0: 1180,
  x1: 1820,
  label: "Long War",
  c: "rgba(176,58,46,0.12)"
}, {
  x0: 1820,
  x1: 2200,
  label: "After-the-treaty",
  c: "rgba(184,90,44,0.10)"
}];
const TL_YEARS = [{
  x: 100,
  label: "before-reckoning"
}, {
  x: 400,
  label: "first dawn"
}, {
  x: 720,
  label: "Yr -240"
}, {
  x: 920,
  label: "Yr -120"
}, {
  x: 1100,
  label: "Yr -40"
}, {
  x: 1200,
  label: "Yr 0 AOY"
}, {
  x: 1340,
  label: "Yr 14"
}, {
  x: 1430,
  label: "Yr 18"
}, {
  x: 1520,
  label: "Yr 22"
}, {
  x: 1600,
  label: "Yr 23"
}, {
  x: 1700,
  label: "Yr 26"
}, {
  x: 1820,
  label: "Yr 31"
}, {
  x: 1960,
  label: "Yr 38"
}, {
  x: 2120,
  label: "now"
}];
const TL_EVENTS = [{
  x: 100,
  lane: 0,
  title: "Yggdrasil bears fruit",
  note: "Four worlds shaped from the great ash."
}, {
  x: 250,
  lane: 0,
  title: "Bor begets the Aesir",
  note: "Odin, Vili, Vé — the first sons of god."
}, {
  x: 400,
  lane: 1,
  title: "First runes cut",
  note: "Mimir teaches the rune-rite at the well."
}, {
  x: 540,
  lane: 1,
  title: "Drakenthar formalised",
  note: "Three registers: high, low, void."
}, {
  x: 720,
  lane: 2,
  title: "Winter Kings claim Alba",
  note: "Twelve houses cross the high pass."
}, {
  x: 880,
  lane: 2,
  title: "Hornfolke split south",
  note: "Half the people cross the wall in search of warmer hearths."
}, {
  x: 1080,
  lane: 2,
  title: "Twelve Towers raised",
  note: "Bran's grandfather builds Kernow's seat."
}, {
  x: 1200,
  lane: 5,
  title: "First reckoning",
  note: "Hornfolke count the year nobody died."
}, {
  x: 1340,
  lane: 2,
  title: "Iron Crown forged",
  note: "Ulf beats seven prow-nails cold."
}, {
  x: 1430,
  lane: 3,
  title: "Seven oaths sworn",
  note: "Seven jarls, one ring of black iron."
}, {
  x: 1520,
  lane: 4,
  title: "Long War turns south",
  note: "Southern wall falls. Fleet rides winter winds."
}, {
  x: 1600,
  lane: 4,
  title: "Burning of Hellas",
  note: "The city falls. Ulf among the dead by morning.",
  now: true
}, {
  x: 1700,
  lane: 3,
  title: "Sigrun crowned",
  note: "Nine days after the fire. Caernarfon hall."
}, {
  x: 1820,
  lane: 3,
  title: "Treaty of Avalon",
  note: "Eleven oaths on broken ice. Three jarls, one king."
}, {
  x: 1960,
  lane: 1,
  title: "Still the Tide cast",
  note: "Astrid lays the fjord flat to cross."
}, {
  x: 2080,
  lane: 5,
  title: "Sigrun's nameday",
  note: "Festival of First Salt — the present moment."
}];
const TL_W = 2200,
  TL_H = 560;
function MobileTimeline({
  onBack
}) {
  const [selected, setSelected] = useStateTL(null); // index or null
  const sel = selected != null ? TL_EVENTS[selected] : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Timeline \xB7 all eras",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-legend"
  }, TL_LANES.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.id,
    className: "mm-canvas-legend-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-legend-dot",
    style: {
      background: l.c
    }
  }), l.label))), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-canvas"
  }, /*#__PURE__*/React.createElement(PinchPanCanvas, {
    contentWidth: TL_W,
    contentHeight: TL_H,
    minScale: 0.18,
    maxScale: 3,
    initialFocus: {
      x: 1600,
      y: 280,
      scale: 0.5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: TL_W,
    height: TL_H,
    xmlns: "http://www.w3.org/2000/svg"
  }, TL_ERAS.map((e, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("rect", {
    x: e.x0,
    y: 0,
    width: e.x1 - e.x0,
    height: TL_H,
    fill: e.c
  }), /*#__PURE__*/React.createElement("text", {
    className: "mm-svg-era",
    x: e.x0 + 18,
    y: 48
  }, e.label))), /*#__PURE__*/React.createElement("line", {
    x1: 0,
    y1: 90,
    x2: TL_W,
    y2: 90,
    stroke: "rgba(214,201,168,0.28)",
    strokeWidth: 1
  }), TL_YEARS.map((y, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: y.x,
    y1: 86,
    x2: y.x,
    y2: 94,
    stroke: "rgba(214,201,168,0.5)",
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("text", {
    className: "mm-svg-yr",
    x: y.x,
    y: 78,
    textAnchor: "middle"
  }, y.label))), TL_LANES.map((l, i) => {
    const y = laneY(i);
    return /*#__PURE__*/React.createElement("g", {
      key: l.id
    }, /*#__PURE__*/React.createElement("line", {
      x1: 0,
      y1: y,
      x2: TL_W,
      y2: y,
      stroke: l.c,
      strokeOpacity: 0.18,
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("rect", {
      x: 4,
      y: y - 12,
      width: 94,
      height: 24,
      rx: 4,
      fill: "rgba(28,24,20,0.85)",
      stroke: l.c,
      strokeOpacity: 0.6
    }), /*#__PURE__*/React.createElement("text", {
      className: "mm-svg-sub",
      x: 50,
      y: y + 3.5,
      textAnchor: "middle",
      fill: l.c,
      style: {
        textTransform: "uppercase",
        letterSpacing: "0.16em"
      }
    }, l.label));
  }), /*#__PURE__*/React.createElement("line", {
    x1: 1600,
    y1: 90,
    x2: 1600,
    y2: TL_H - 30,
    stroke: "#b85a2c",
    strokeWidth: 1.5,
    strokeDasharray: "4 3",
    opacity: 0.7
  }), /*#__PURE__*/React.createElement("rect", {
    x: 1572,
    y: TL_H - 26,
    width: 56,
    height: 18,
    rx: 9,
    fill: "#b85a2c"
  }), /*#__PURE__*/React.createElement("text", {
    x: 1600,
    y: TL_H - 13,
    textAnchor: "middle",
    fill: "#f7f1e3",
    fontSize: 10,
    fontWeight: 600,
    style: {
      fontFamily: "var(--font-sans)",
      letterSpacing: "0.16em"
    }
  }, "NOW"), TL_EVENTS.map((ev, i) => {
    const y = laneY(ev.lane);
    const c = TL_LANES[ev.lane].c;
    const isSel = i === selected;
    const isNow = ev.now;
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      style: {
        cursor: "pointer"
      },
      onPointerDown: e => {
        e.stopPropagation();
      },
      onClick: () => setSelected(i)
    }, /*#__PURE__*/React.createElement("line", {
      x1: ev.x,
      y1: y - 12,
      x2: ev.x,
      y2: y - 26,
      stroke: c,
      strokeOpacity: 0.6,
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("text", {
      x: ev.x,
      y: y - 32,
      textAnchor: "middle",
      className: "mm-svg-name",
      fontSize: 13,
      fill: isNow ? "#f3c8a3" : "var(--fg-1)"
    }, ev.title), /*#__PURE__*/React.createElement("circle", {
      cx: ev.x,
      cy: y,
      r: isNow ? 11 : 8,
      fill: c,
      stroke: isSel || isNow ? "#f7f1e3" : "rgba(20,16,13,0.6)",
      strokeWidth: isSel || isNow ? 2.5 : 1.5
    }), isNow && /*#__PURE__*/React.createElement("circle", {
      cx: ev.x,
      cy: y,
      r: 18,
      fill: "none",
      stroke: c,
      strokeOpacity: 0.4,
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement("circle", {
      cx: ev.x,
      cy: y,
      r: 24,
      fill: "transparent"
    }));
  }))), sel && /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-detail"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-canvas-detail-close",
    onClick: () => setSelected(null),
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    className: "mm-canvas-detail-eyebrow",
    style: {
      color: TL_LANES[sel.lane].c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: 99,
      background: TL_LANES[sel.lane].c
    }
  }), TL_LANES[sel.lane].label), /*#__PURE__*/React.createElement("h3", {
    className: "mm-canvas-detail-title"
  }, sel.title), /*#__PURE__*/React.createElement("p", {
    className: "mm-canvas-detail-sub"
  }, sel.note))));
}
window.MobileTimeline = MobileTimeline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileTimeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileToolsMenu.jsx
try { (() => {
/* global React, MM_TOOLS */

// Tools menu — grid of cards. Tapping opens a tool view.
function MobileToolsMenu({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-tools-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Tools"), /*#__PURE__*/React.createElement("h1", {
    className: "mm-tools-title"
  }, "The workshop"), /*#__PURE__*/React.createElement("p", {
    className: "mm-tools-sub"
  }, "Build, reckon, reconcile.")), /*#__PURE__*/React.createElement("div", {
    className: "mm-tools-grid"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-tool-card is-ask",
    onClick: () => onOpen("ask")
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-tool-glyph"
  }, "\u275B"), /*#__PURE__*/React.createElement("span", {
    className: "mm-tool-label"
  }, "Ask Mimir"), /*#__PURE__*/React.createElement("span", {
    className: "mm-tool-note"
  }, "The well will answer.")), MM_TOOLS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "mm-tool-card",
    onClick: () => onOpen(t.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-tool-glyph"
  }, t.glyph), /*#__PURE__*/React.createElement("span", {
    className: "mm-tool-label"
  }, t.label), /*#__PURE__*/React.createElement("span", {
    className: "mm-tool-note"
  }, t.note))))));
}

// Shared header used by every tool sub-view
function MobileToolHeader({
  title,
  onBack
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "mm-ev-nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mm-icon-btn",
    onClick: onBack,
    "aria-label": "Back"
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    className: "mm-ev-nav-title"
  }, title));
}
window.MobileToolsMenu = MobileToolsMenu;
window.MobileToolHeader = MobileToolHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileToolsMenu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileTranslator.jsx
try { (() => {
/* global React, MobileToolHeader */
const {
  useState: useStateTr
} = React;

// Tiny english → runic transliteration for the demo.
const MM_RUNIC = {
  a: "ᚨ",
  b: "ᛒ",
  c: "ᚲ",
  d: "ᛞ",
  e: "ᛖ",
  f: "ᚠ",
  g: "ᚷ",
  h: "ᚺ",
  i: "ᛁ",
  j: "ᛃ",
  k: "ᚲ",
  l: "ᛚ",
  m: "ᛗ",
  n: "ᚾ",
  o: "ᛟ",
  p: "ᛈ",
  q: "ᚲ",
  r: "ᚱ",
  s: "ᛊ",
  t: "ᛏ",
  u: "ᚢ",
  v: "ᚹ",
  w: "ᚹ",
  x: "ᚲᛊ",
  y: "ᛇ",
  z: "ᛉ"
};
function transliterateMM(text) {
  let out = "";
  for (const ch of (text || "").toLowerCase()) {
    if (MM_RUNIC[ch]) out += MM_RUNIC[ch];else out += ch;
  }
  return out;
}
const MM_LANGS = [{
  id: "english",
  name: "English",
  family: "Common"
}, {
  id: "runadhrimir",
  name: "Runadhrimir",
  family: "Carved"
}, {
  id: "drakenthar",
  name: "Drakenthar",
  family: "Dragon"
}, {
  id: "low-speech",
  name: "Low Speech",
  family: "Hearth"
}];
function MobileTranslator({
  onBack
}) {
  const [sourceId, setSourceId] = useStateTr("english");
  const [targetId, setTargetId] = useStateTr("runadhrimir");
  const [text, setText] = useStateTr("The oath holds, though the iron grows thin.");
  const src = MM_LANGS.find(l => l.id === sourceId);
  const tgt = MM_LANGS.find(l => l.id === targetId);
  const out = transliterateMM(text);
  function swap() {
    setSourceId(targetId);
    setTargetId(sourceId);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Translator",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-head"
  }, /*#__PURE__*/React.createElement("select", {
    value: sourceId,
    onChange: e => setSourceId(e.target.value),
    style: {
      background: "transparent",
      border: 0,
      color: "inherit",
      font: "inherit",
      flex: 1,
      outline: 0
    }
  }, MM_LANGS.map(l => /*#__PURE__*/React.createElement("option", {
    key: l.id,
    value: l.id,
    style: {
      background: "#25201a"
    }
  }, l.name))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      opacity: 0.7
    }
  }, src.family)), /*#__PURE__*/React.createElement("textarea", {
    className: "mm-tr-input",
    value: text,
    onChange: e => setText(e.target.value),
    rows: 3
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-foot"
  }, /*#__PURE__*/React.createElement("span", null, text.length, " chars"), /*#__PURE__*/React.createElement("span", null, "auto \xB7 1.0\xD7"))), /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-swap"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: swap,
    "aria-label": "Swap"
  }, "\u21C5")), /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-head"
  }, /*#__PURE__*/React.createElement("select", {
    value: targetId,
    onChange: e => setTargetId(e.target.value),
    style: {
      background: "transparent",
      border: 0,
      color: "inherit",
      font: "inherit",
      flex: 1,
      outline: 0
    }
  }, MM_LANGS.map(l => /*#__PURE__*/React.createElement("option", {
    key: l.id,
    value: l.id,
    style: {
      background: "#25201a"
    }
  }, l.name))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      opacity: 0.7
    }
  }, tgt.family)), /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-output"
  }, out), /*#__PURE__*/React.createElement("div", {
    className: "mm-tr-foot"
  }, /*#__PURE__*/React.createElement("span", null, out.length, " glyphs"), /*#__PURE__*/React.createElement("span", null, "copy \u29C9"))), /*#__PURE__*/React.createElement("div", {
    className: "mm-handoff",
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-eyebrow"
  }, "Phrasebook"), /*#__PURE__*/React.createElement("ul", {
    className: "mm-linklist"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#c9a227"
    }
  }), "Oath-greeting \xB7 \"iron remembers\""), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#c9a227"
    }
  }), "Hall-blessing \xB7 \"warm be your hearth\""), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-dot",
    style: {
      background: "#c9a227"
    }
  }), "Parting \xB7 \"until the next frost\"")))));
}
window.MobileTranslator = MobileTranslator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileTranslator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/MobileValidation.jsx
try { (() => {
/* global React, MobileToolHeader */
const {
  useState: useStateVal
} = React;
const MM_VAL_ITEMS = [{
  sev: "danger",
  rule: "broken-link",
  msg: "Sigrun Ulfsdottir → 'Hilda Steel-Eye' — target entry is missing.",
  c: "#d99366",
  entry: "Sigrun"
}, {
  sev: "warning",
  rule: "stub-too-long",
  msg: "Astrid Half-Hand has been a stub for 27 days.",
  c: "#d99366",
  entry: "Astrid"
}, {
  sev: "warning",
  rule: "missing-field",
  msg: "The Iron Crown (faction) is missing 'banner' field.",
  c: "#c43a4e",
  entry: "Iron Crown"
}, {
  sev: "info",
  rule: "circular-reference",
  msg: "Two characters list each other as 'sworn rival'. Resolve order?",
  c: "#d99366",
  entry: "Ulf · Bran"
}, {
  sev: "warning",
  rule: "date-conflict",
  msg: "The Burning of Hellas — year disagrees between Hornfolke and Kernow.",
  c: "#8d8478",
  entry: "Burning"
}, {
  sev: "info",
  rule: "naming-rule",
  msg: "Drakenthar names found in Low Speech entries (3 hits).",
  c: "#8aa0ab",
  entry: "Languages"
}, {
  sev: "danger",
  rule: "schema-required",
  msg: "Yggdrasil has no 'inhabitants' field — required by Place schema.",
  c: "#7da265",
  entry: "Yggdrasil"
}, {
  sev: "warning",
  rule: "orphan-entry",
  msg: "Three rune entries are not linked from any spell or artefact.",
  c: "#c9a227",
  entry: "Runes ×3"
}, {
  sev: "info",
  rule: "tag-inconsistency",
  msg: "Tag 'oath' appears as 'oaths' in 4 places.",
  c: "#8d8478",
  entry: "Tags"
}];
function MobileValidation({
  onBack
}) {
  const [tab, setTab] = useStateVal("all");
  const visible = tab === "all" ? MM_VAL_ITEMS : MM_VAL_ITEMS.filter(v => v.sev === tab);
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview mm-screen"
  }, /*#__PURE__*/React.createElement(MobileToolHeader, {
    title: "Validation \xB7 23 issues",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "mm-chips"
  }, [{
    id: "all",
    l: "All · 23"
  }, {
    id: "danger",
    l: "Errors · 3"
  }, {
    id: "warning",
    l: "Warnings · 14"
  }, {
    id: "info",
    l: "Info · 6"
  }].map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setTab(c.id),
    className: "mm-chip" + (tab === c.id ? " is-active" : "")
  }, c.l))), /*#__PURE__*/React.createElement("div", {
    className: "mm-toolview-body"
  }, visible.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mm-val-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-val-sev " + v.sev
  }, v.sev === "danger" ? "!" : v.sev === "warning" ? "⚠" : "i"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-val-msg"
  }, v.msg), /*#__PURE__*/React.createElement("div", {
    className: "mm-val-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-val-dot",
    style: {
      background: v.c
    }
  }), /*#__PURE__*/React.createElement("span", null, v.entry), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, v.rule))), /*#__PURE__*/React.createElement("span", {
    className: "mm-linklist-arrow"
  }, "\u203A")))));
}
window.MobileValidation = MobileValidation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/MobileValidation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/mobile-canvas.jsx
try { (() => {
/* global React */
const {
  useRef: useRefPP,
  useState: useStatePP,
  useEffect: useEffectPP,
  useLayoutEffect: useLayoutEffectPP
} = React;

/*
 * PinchPanCanvas
 *
 * Mobile-first pan + pinch-zoom container. Wraps an arbitrary fixed-size
 * inner element (typically an <svg> of contentWidth × contentHeight) and
 * applies a CSS transform to it based on touch/mouse gestures.
 *
 *   1 pointer  → pan
 *   2 pointers → pinch (zoom centered on the midpoint between fingers)
 *   wheel      → zoom (centered on the cursor) for desktop testing
 *
 * On mount the canvas auto-fits the content to the visible viewport (or
 * uses initialScale if provided). Floating bottom-right controls expose
 * zoom-in / zoom-out / fit-to-view buttons plus a live zoom readout.
 *
 * Why pointer events: unified touch + mouse path, pointerCapture lets us
 * track pointers across the iOS frame's nested scroll areas, and we can
 * keep `touch-action: none` on just the canvas surface so browsers don't
 * try to scroll the page while a pinch is in progress.
 */
function PinchPanCanvas({
  contentWidth,
  contentHeight,
  minScale = 0.4,
  maxScale = 5,
  initialScale,
  // override auto-fit if provided
  initialFocus,
  // {x, y, scale} — center this world-point on mount
  controls = true,
  // show floating zoom controls
  className = "",
  style = {},
  children
}) {
  const containerRef = useRefPP(null);
  const innerRef = useRefPP(null);
  const xformRef = useRefPP({
    s: 1,
    tx: 0,
    ty: 0
  });
  const [, force] = useStatePP(0);
  const tick = () => force(n => (n + 1) % 1_000_000);
  const pointersRef = useRefPP(new Map());
  const pinchRef = useRefPP(null);

  // Push transform straight to the DOM. Avoids React re-renders 60 times a
  // second during a drag — only the readout/controls trigger a re-render.
  function applyXform() {
    if (!innerRef.current) return;
    const {
      s,
      tx,
      ty
    } = xformRef.current;
    innerRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
  }
  function setXform(next, andTick = false) {
    xformRef.current = {
      ...xformRef.current,
      ...next
    };
    applyXform();
    if (andTick) tick();
  }
  function fit() {
    const c = containerRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;
    const pad = 24;
    const sX = (r.width - pad * 2) / contentWidth;
    const sY = (r.height - pad * 2) / contentHeight;
    const s = Math.max(minScale, Math.min(maxScale, Math.min(sX, sY)));
    const tx = (r.width - contentWidth * s) / 2;
    const ty = (r.height - contentHeight * s) / 2;
    setXform({
      s,
      tx,
      ty
    }, true);
  }

  // Auto-fit (or honour initialFocus / initialScale) once container is sized.
  useLayoutEffectPP(() => {
    const c = containerRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) {
      fit();
      return;
    }
    if (initialFocus) {
      const s = initialFocus.scale ?? 1;
      setXform({
        s,
        tx: r.width / 2 - initialFocus.x * s,
        ty: r.height / 2 - initialFocus.y * s
      }, true);
    } else if (initialScale != null) {
      const s = initialScale;
      setXform({
        s,
        tx: (r.width - contentWidth * s) / 2,
        ty: (r.height - contentHeight * s) / 2
      }, true);
    } else {
      fit();
    }
    // ResizeObserver so the canvas re-fits if the viewport shifts (rotate,
    // a sibling collapsing, the design canvas zooming).
    if (!containerRef.current) return;
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        // Only re-fit if we haven't been interacted with — preserves zoom
        // state on resize after the user has explored.
        // (Simple heuristic: bypass; let the user hit the fit button.)
      });
      ro.observe(containerRef.current);
    }
    return () => {
      if (ro) ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function pointFromEvent(e) {
    const r = containerRef.current.getBoundingClientRect();
    return {
      x: e.clientX - r.left,
      y: e.clientY - r.top
    };
  }
  function onPointerDown(e) {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, pointFromEvent(e));
    if (pointersRef.current.size === 2) {
      const pts = [...pointersRef.current.values()];
      const dx = pts[1].x - pts[0].x;
      const dy = pts[1].y - pts[0].y;
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      pinchRef.current = {
        dist: Math.hypot(dx, dy),
        cx,
        cy,
        ...xformRef.current
      };
    }
  }
  function onPointerMove(e) {
    if (!pointersRef.current.has(e.pointerId)) return;
    const prev = pointersRef.current.get(e.pointerId);
    const cur = pointFromEvent(e);
    pointersRef.current.set(e.pointerId, cur);
    if (pointersRef.current.size === 1) {
      // Pan — translate by raw pixel delta
      setXform({
        tx: xformRef.current.tx + (cur.x - prev.x),
        ty: xformRef.current.ty + (cur.y - prev.y)
      });
    } else if (pointersRef.current.size === 2 && pinchRef.current) {
      const pts = [...pointersRef.current.values()];
      const dx = pts[1].x - pts[0].x;
      const dy = pts[1].y - pts[0].y;
      const dist = Math.hypot(dx, dy);
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const p = pinchRef.current;
      const ratio = dist / p.dist;
      const targetS = Math.max(minScale, Math.min(maxScale, p.s * ratio));
      // World-space point under the pinch midpoint at gesture start:
      const wx = (p.cx - p.tx) / p.s;
      const wy = (p.cy - p.ty) / p.s;
      // Re-anchor: keep that world point under the CURRENT midpoint:
      const tx = cx - wx * targetS;
      const ty = cy - wy * targetS;
      setXform({
        s: targetS,
        tx,
        ty
      }, true);
    }
  }
  function onPointerUp(e) {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) pinchRef.current = null;
  }
  function onWheel(e) {
    e.preventDefault();
    const pt = pointFromEvent(e);
    const factor = e.deltaY < 0 ? 1.12 : 0.89;
    const {
      s,
      tx,
      ty
    } = xformRef.current;
    const newS = Math.max(minScale, Math.min(maxScale, s * factor));
    const wx = (pt.x - tx) / s;
    const wy = (pt.y - ty) / s;
    setXform({
      s: newS,
      tx: pt.x - wx * newS,
      ty: pt.y - wy * newS
    }, true);
  }
  function zoomBy(factor) {
    const c = containerRef.current;
    if (!c) return;
    const r = c.getBoundingClientRect();
    const cx = r.width / 2,
      cy = r.height / 2;
    const {
      s,
      tx,
      ty
    } = xformRef.current;
    const newS = Math.max(minScale, Math.min(maxScale, s * factor));
    const wx = (cx - tx) / s;
    const wy = (cy - ty) / s;
    setXform({
      s: newS,
      tx: cx - wx * newS,
      ty: cy - wy * newS
    }, true);
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "mm-canvas " + className,
    style: style,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onPointerCancel: onPointerUp,
    onWheel: onWheel
  }, /*#__PURE__*/React.createElement("div", {
    ref: innerRef,
    className: "mm-canvas-inner",
    style: {
      width: contentWidth,
      height: contentHeight,
      transformOrigin: "0 0",
      willChange: "transform"
    }
  }, children), controls && /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-controls"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => zoomBy(1.3),
    "aria-label": "Zoom in"
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: () => zoomBy(1 / 1.3),
    "aria-label": "Zoom out"
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    onClick: fit,
    "aria-label": "Fit"
  }, "\u22A1"), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-zoom"
  }, Math.round(xformRef.current.s * 100), "%")), /*#__PURE__*/React.createElement("div", {
    className: "mm-canvas-hint"
  }, "pinch \xB7 drag \xB7 \u22A1 to fit"));
}
window.PinchPanCanvas = PinchPanCanvas;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/mobile-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/mobile/mobile-data.jsx
try { (() => {
/* global window */
// Shared data for the mobile Mimir prototype. Mirrors LibraryBrowser.jsx so
// the mobile experience reads the exact same lore — but lives under window.MM_
// so it can't collide with the desktop kit when both are loaded.

const MM_TYPE_COLOR = {
  Character: "#d99366",
  Place: "#7da265",
  Faction: "#c43a4e",
  Culture: "#a07cc8",
  Event: "#8d8478",
  Language: "#8aa0ab",
  Spell: "#6b89c2",
  Rune: "#c9a227",
  Artefact: "#a8814d"
};
const MM_ENTRIES = [{
  id: "sigrun",
  filter: "characters",
  type: "Character",
  name: "Sigrun Ulfsdottir",
  faction: "Iron Crown",
  aliases: "'The Iron-Crown' · 'Wolf of Kernow'",
  snippet: "Daughter of Ulf, jarl of Caernarfon. She took the oath at fifteen and the crown at twenty-three, after her father fell at the burning of Hellas.",
  thumb: "../../../assets/characters/spearmaiden.png",
  status: "stub",
  links: 12,
  edited: "2 days ago"
}, {
  id: "ulf",
  filter: "characters",
  type: "Character",
  name: "Ulf the Wolf-Father",
  faction: "Iron Crown",
  aliases: "Ulf jarl Caernarfon · 'Wolf-Father'",
  snippet: "Founder of the Iron Crown confederation. Fell at the burning of Hellas in the third winter of the long war. Father of Sigrun.",
  thumb: "../../../assets/characters/huskarl.png",
  status: "complete",
  links: 23,
  edited: "5 days ago"
}, {
  id: "kernow-king",
  filter: "characters",
  type: "Character",
  name: "Bran ap Cadwy",
  faction: "Kingdom of Kernow",
  aliases: "The Stone-King · Bran of the Twelve Towers",
  snippet: "King of Kernow at the time of the landing. A scholar before he was a king. Resisted the call to war until the third dawn of the siege.",
  thumb: "../../../assets/characters/kernow-king.png",
  status: "draft",
  links: 18,
  edited: "1 week ago"
}, {
  id: "spearmaiden",
  filter: "characters",
  type: "Character",
  name: "Astrid Half-Hand",
  faction: "Iron Crown",
  aliases: "Astrid skjaldmaer",
  snippet: "Sigrun's shield-sister and second. Lost two fingers at the breaking of the Avalon ice. Refuses a bow, fights only with the spear.",
  thumb: "../../../assets/characters/raider.png",
  status: "stub",
  links: 8,
  edited: "today"
}, {
  id: "young-raider",
  filter: "characters",
  type: "Character",
  name: "Hakon the Quiet",
  faction: "Iron Crown",
  aliases: null,
  snippet: "A boy of fourteen winters when Sigrun took him from the smoke of his village. He has not spoken since, but he hears every word said in the hall.",
  thumb: "../../../assets/characters/young-raider.png",
  status: "stub",
  links: 4,
  edited: "yesterday"
}, {
  id: "bear",
  filter: "characters",
  type: "Character",
  name: "The Bear of Hornfolke",
  faction: "Hornfolke",
  aliases: "Skall — the brown one",
  snippet: "An ancestor-spirit who walks the high passes in the form of a great brown bear. Said to demand a name in trade for safe passage.",
  thumb: "../../../assets/characters/bear.png",
  status: "draft",
  links: 7,
  edited: "3 days ago"
}, {
  id: "caernarfon",
  filter: "places",
  type: "Place",
  name: "Caernarfon",
  faction: "Kingdom — seat of the Iron Crown",
  aliases: "Caer-na-Carn · 'The Hall on the Fjord'",
  snippet: "The longhall and stone-keep at the head of the Caernarfon estuary. Seat of Ulf, then Sigrun. Twelve hearths, three rune-walls, one well that has never frozen.",
  thumb: "../../../assets/plates/kernow.png",
  status: "complete",
  links: 19,
  edited: "today"
}, {
  id: "alba",
  filter: "places",
  type: "Place",
  name: "Alba",
  faction: "Highland kingdoms",
  aliases: "The High Country · The North-Above",
  snippet: "The mountain country north of the wall, where the winter kings still keep the old fires. Few roads, fewer welcomes. A place that remembers names longer than people do.",
  thumb: "../../../assets/plates/alba.png",
  status: "draft",
  links: 11,
  edited: "4 days ago"
}, {
  id: "yggdrasil",
  filter: "places",
  type: "Place",
  name: "Yggdrasil",
  faction: "Cosmic — the world-tree",
  aliases: "The Ash · The World-Spine",
  snippet: "The great ash that grew from the seed Odin planted in Niflheimr. Its roots span the Ginnungagap; four worlds were shaped from the fruit it bore on the first dawn.",
  thumb: "../../../assets/plates/forest.png",
  status: "stub",
  links: 34,
  edited: "1 week ago"
}, {
  id: "hellas",
  filter: "places",
  type: "Place",
  name: "Hellas",
  faction: "Ruined city — Empire of the South",
  aliases: "The Burning · 'The Ash-Coast'",
  snippet: "Once the brightest of the southern cities, now a salt-glass ruin. Burned in the third winter of the long war. Ulf the Wolf-Father fell within its harbour walls.",
  thumb: "../../../assets/plates/hellas.png",
  status: "draft",
  links: 16,
  edited: "5 days ago"
}, {
  id: "iron-crown",
  filter: "factions",
  type: "Faction",
  name: "The Iron Crown",
  faction: "Confederation of jarldoms",
  aliases: "Járnkróna · 'The Wolf-Banner'",
  snippet: "The confederation Ulf bound together with seven oaths and a circle of black iron. Sigrun wears the crown now; the oaths still hold, though three of the seven jarls are dead.",
  thumb: "../../../assets/plates/hornfolke.png",
  status: "complete",
  links: 27,
  edited: "today"
}, {
  id: "asgardr",
  filter: "factions",
  type: "Faction",
  name: "Ásgarðr",
  faction: "Clan of the Aesir",
  aliases: "The Asgardians · 'The Hall-Above'",
  snippet: "The hall of the Aesir, seated above Midgard on the high branch of Yggdrasil. Odin sits at its head; Frigg keeps its threshold; Thor its outer wall.",
  thumb: "../../../assets/plates/empire.png",
  status: "stub",
  links: 41,
  edited: "2 days ago"
}, {
  id: "kernow",
  filter: "factions",
  type: "Faction",
  name: "Kingdom of Kernow",
  faction: "Old kingdom of the south",
  aliases: "The Stone-Kingdom · Cair-now",
  snippet: "The oldest standing kingdom on the southern coast. Ruled from twelve towers. Refused the Iron Crown's hand twice; signed the Treaty of Avalon at the third asking.",
  thumb: "../../../assets/plates/dumnonia.png",
  status: "draft",
  links: 14,
  edited: "6 days ago"
}, {
  id: "hornfolke",
  filter: "cultures",
  type: "Culture",
  name: "The Hornfolke",
  faction: "Northmen of the petty kingdoms",
  aliases: "The Northmen · 'The Horn-Wearers'",
  snippet: "Tribal kingdoms of the long northern coast. They reckon the year by frosts, not by months. Their oaths are sworn on iron and remembered in ash.",
  thumb: "../../../assets/plates/hornfolke.png",
  status: "complete",
  links: 22,
  edited: "today"
}, {
  id: "winter-kings",
  filter: "cultures",
  type: "Culture",
  name: "The Winter Kings",
  faction: "Highlanders of Alba",
  aliases: "Konunga vetrar · 'The Old Crowns'",
  snippet: "The parent culture of the Hornfolke. They keep the old fires above the wall, name their daughters for storms, and bury their dead standing.",
  thumb: "../../../assets/plates/tundra.png",
  status: "draft",
  links: 9,
  edited: "3 days ago"
}, {
  id: "ice-jotnar",
  filter: "cultures",
  type: "Culture",
  name: "Ice Jotnar",
  faction: "Giants of the deep frost",
  aliases: "Hrímþursar · 'The First-Born'",
  snippet: "The eldest of the giant-kin, born of the frost in Niflheimr before the gods drew breath. They speak only in the older tongue, and only at the turning of the year.",
  thumb: "../../../assets/plates/firefalls.png",
  status: "stub",
  links: 18,
  edited: "1 week ago"
}, {
  id: "burning-hellas",
  filter: "events",
  type: "Event",
  name: "The Burning of Hellas",
  faction: "Yr 23 — Long War, third winter",
  aliases: "The Ash-Dawn",
  snippet: "The night the southern city fell to the long war. Ulf the Wolf-Father was among the dead by morning. Sigrun took the crown nine days later at Caernarfon.",
  thumb: "../../../assets/plates/hellas.png",
  status: "complete",
  links: 31,
  edited: "yesterday"
}, {
  id: "yggdrasil-fruit",
  filter: "events",
  type: "Event",
  name: "Yggdrasil Bears Fruit",
  faction: "Before-time — first dawn",
  aliases: "The Four-Worlds Dawn",
  snippet: "The great ash bore four fruits, which the gods shaped into the four Middle Earths. Ymir's blood became the seas, his hair the forests, his teeth the mountains.",
  thumb: "../../../assets/plates/forest.png",
  status: "draft",
  links: 28,
  edited: "2 days ago"
}, {
  id: "treaty-avalon",
  filter: "events",
  type: "Event",
  name: "The Treaty of Avalon",
  faction: "Yr 31 — Long War, fifth spring",
  aliases: "The Cold-Pact",
  snippet: "The pact sworn on the broken ice between Sigrun, Bran of Kernow, and the three remaining jarls. Eleven oaths, one circle of iron, no witnesses but the gulls.",
  thumb: "../../../assets/plates/avalon.png",
  status: "stub",
  links: 17,
  edited: "today"
}, {
  id: "drakenthar",
  filter: "languages",
  type: "Language",
  name: "Drakenthar",
  faction: "Tongue of dragons",
  aliases: "High Speech · Dragon-tongue",
  snippet: "The dragon-tongue, in which the speaker is assumed to be a god. There is no word for 'please' and no grammar for 'perhaps'. Three registers: high, low, and the void.",
  thumb: "../../../assets/plates/firefalls.png",
  status: "complete",
  links: 12,
  edited: "4 days ago"
}, {
  id: "runadhrimir",
  filter: "languages",
  type: "Language",
  name: "Runadhrimir",
  faction: "Old tongue of the rune-makers",
  aliases: "Rune-speech · 'The Carved Tongue'",
  snippet: "The first written speech, taught to men by Mimir at the well. Each word has a shape; each shape has a weight.",
  thumb: "../../../assets/plates/coastal.png",
  status: "draft",
  links: 24,
  edited: "today"
}, {
  id: "low-speech",
  filter: "languages",
  type: "Language",
  name: "Low Speech",
  faction: "Common tongue of Midgard",
  aliases: "Midgardr-mál · 'Hearth-Tongue'",
  snippet: "The tongue spoken in every harbour and every hall from Alba to the southern wall. Borrowed from a hundred others.",
  thumb: "../../../assets/plates/grassland.png",
  status: "stub",
  links: 9,
  edited: "1 week ago"
}, {
  id: "spell-still-the-tide",
  filter: "spells",
  type: "Spell",
  name: "Still the Tide",
  faction: "Sea-rite · taught by Njordr",
  aliases: "Sjór-stilling",
  snippet: "A nine-line incantation that lays a fjord flat for the time it takes a longship to cross. Costs the caster their voice for as many days as the crossing takes hours.",
  thumb: "../../../assets/plates/coastal.png",
  status: "draft",
  links: 7,
  edited: "today"
}, {
  id: "spell-name-the-bear",
  filter: "spells",
  type: "Spell",
  name: "Name the Bear",
  faction: "Hornfolke rune-rite",
  aliases: "Bjarn-nafn",
  snippet: "A binding that asks the bear-spirit of the high passes for safe passage. Three runes scored into birch, three drops of blood, one true name spoken aloud to the wind.",
  thumb: "../../../assets/plates/mountains.png",
  status: "stub",
  links: 5,
  edited: "yesterday"
}, {
  id: "spell-iron-oath",
  filter: "spells",
  type: "Spell",
  name: "The Iron Oath",
  faction: "Binding-rite · Iron Crown",
  aliases: "Járn-eiðr",
  snippet: "The oath that binds a jarl to the Crown. Sworn on a circle of black iron, sealed in salt, and unbreakable except by death.",
  thumb: "../../../assets/plates/hornfolke.png",
  status: "complete",
  links: 19,
  edited: "2 days ago"
}, {
  id: "rune-fehu",
  filter: "runes",
  type: "Rune",
  name: "Fehu — Cattle, Wealth",
  faction: "First of the elder row",
  aliases: "ᚠ · 'The Open Hand'",
  snippet: "The first rune. Cut into the lintel of a hall, it asks the gods to keep the herd fat and the door open.",
  thumb: "../../../assets/icons/rune.png",
  status: "draft",
  links: 11,
  edited: "3 days ago"
}, {
  id: "rune-isa",
  filter: "runes",
  type: "Rune",
  name: "Isa — Ice, Stillness",
  faction: "Eleventh of the elder row",
  aliases: "ᛁ · 'The Standing-Still'",
  snippet: "A single vertical stroke. The rune of held breath, of the frozen river, of the moment between the swing and the cut.",
  thumb: "../../../assets/icons/rune.png",
  status: "stub",
  links: 8,
  edited: "today"
}, {
  id: "rune-tiwaz",
  filter: "runes",
  type: "Rune",
  name: "Tiwaz — The God-Spear",
  faction: "Seventeenth of the elder row",
  aliases: "ᛏ · 'Tyr's Mark'",
  snippet: "The rune of victory bought with sacrifice. Cut into spear-hafts before battle. The Iron Crown carries it on its inner band.",
  thumb: "../../../assets/icons/rune.png",
  status: "complete",
  links: 14,
  edited: "yesterday"
}, {
  id: "iron-crown-relic",
  filter: "artefacts",
  type: "Artefact",
  name: "The Iron Crown",
  faction: "Relic — seat of the confederation",
  aliases: "Járnkróna · 'The Wolf-Crown'",
  snippet: "A circle of black iron, beaten cold, set with no jewel. Forged by Ulf from the prow-nails of the seven first ships. Bears the Tiwaz rune on its inner band.",
  thumb: "../../../assets/icons/artefact.png",
  status: "complete",
  links: 22,
  edited: "today"
}, {
  id: "wolf-banner",
  filter: "artefacts",
  type: "Artefact",
  name: "The Wolf-Banner",
  faction: "Standard of the Iron Crown",
  aliases: "Vargs-merki",
  snippet: "Black wolf on a field of ember-red, woven by Hilda Steel-Eye in the year of the long frost. Carried before Sigrun at every council and every crossing.",
  thumb: "../../../assets/icons/artefact.png",
  status: "draft",
  links: 13,
  edited: "4 days ago"
}, {
  id: "mimirs-horn",
  filter: "artefacts",
  type: "Artefact",
  name: "Mímir's Horn",
  faction: "Vessel · drawn from the well",
  aliases: "Gjallarhorn-bróðir · 'The Quiet Horn'",
  snippet: "The drinking-horn that Mimir keeps at the well. Whoever drinks from it tastes the water of the well — and pays the well its price.",
  thumb: "../../../assets/icons/artefact.png",
  status: "stub",
  links: 26,
  edited: "1 week ago"
}];
MM_ENTRIES.forEach(e => {
  e.color = MM_TYPE_COLOR[e.type] || "#d6c9a8";
});
const MM_FILTERS = [{
  id: "all",
  label: "All",
  color: null,
  count: MM_ENTRIES.length
}, {
  id: "characters",
  label: "Characters",
  color: "#d99366",
  count: 47
}, {
  id: "places",
  label: "Places",
  color: "#7da265",
  count: 23
}, {
  id: "factions",
  label: "Factions",
  color: "#c43a4e",
  count: 11
}, {
  id: "cultures",
  label: "Cultures",
  color: "#a07cc8",
  count: 6
}, {
  id: "events",
  label: "Events",
  color: "#8d8478",
  count: 38
}, {
  id: "languages",
  label: "Languages",
  color: "#8aa0ab",
  count: 4
}, {
  id: "spells",
  label: "Spells",
  color: "#6b89c2",
  count: 17
}, {
  id: "runes",
  label: "Runes",
  color: "#c9a227",
  count: 24
}, {
  id: "artefacts",
  label: "Artefacts",
  color: "#a8814d",
  count: 19
}];
const MM_ZONE_HEADERS = {
  all: {
    eyebrow: "The library — every shelf",
    title: "All entries",
    sub: n => `${n} entries · across nine kinds`
  },
  characters: {
    eyebrow: "Chapter ii — the iron crown",
    title: "Characters",
    sub: n => `${n} entries · 6 highlighted`
  },
  places: {
    eyebrow: "Chapter iii — the nine worlds",
    title: "Places",
    sub: n => `${n} entries · 23 in the atlas`
  },
  factions: {
    eyebrow: "Chapter iv — banners & oaths",
    title: "Factions",
    sub: n => `${n} entries · 11 known houses`
  },
  cultures: {
    eyebrow: "Chapter v — the peoples",
    title: "Cultures",
    sub: n => `${n} entries · 6 living, 1 lost`
  },
  events: {
    eyebrow: "Chapter vi — the long reckoning",
    title: "Events",
    sub: n => `${n} entries · spanning four ages`
  },
  languages: {
    eyebrow: "Chapter vii — the carved tongues",
    title: "Languages",
    sub: n => `${n} entries · 4 still spoken`
  },
  spells: {
    eyebrow: "Chapter viii — the rites",
    title: "Spells",
    sub: n => `${n} entries · 17 drafted, 4 verified`
  },
  runes: {
    eyebrow: "Chapter ix — the elder row",
    title: "Runes",
    sub: n => `${n} entries · 24 of the elder row`
  },
  artefacts: {
    eyebrow: "Chapter x — relics & regalia",
    title: "Artefacts",
    sub: n => `${n} entries · 19 catalogued, 3 lost`
  }
};
const MM_ZONE_PLATES = {
  all: "../../../assets/plates/coastal.png",
  characters: "../../../assets/plates/kernow.png",
  places: "../../../assets/plates/mountains.png",
  factions: "../../../assets/plates/empire.png",
  cultures: "../../../assets/plates/hornfolke.png",
  events: "../../../assets/plates/hellas.png",
  languages: "../../../assets/plates/avalon.png",
  spells: "../../../assets/plates/firefalls.png",
  runes: "../../../assets/plates/desert.png",
  artefacts: "../../../assets/plates/dumnonia.png"
};

// Tools list — sidebar Tools section, plus a mobile-friendly note for each
const MM_TOOLS = [{
  id: "timeline",
  label: "Timeline",
  glyph: "⏳",
  note: "Vertical scroll · pinch-zoom era"
}, {
  id: "calendar",
  label: "Calendar",
  glyph: "◷",
  note: "Month view · moons + festivals"
}, {
  id: "tree",
  label: "Family tree",
  glyph: "❦",
  note: "Lineage list · open desktop for canvas"
}, {
  id: "genus",
  label: "Genus tree",
  glyph: "𝟁",
  note: "Lineage list · open desktop for canvas"
}, {
  id: "factiontree",
  label: "Faction tree",
  glyph: "⚔",
  note: "Banner list · open desktop for canvas"
}, {
  id: "relationships",
  label: "Connections",
  glyph: "⌬",
  note: "Filter web · open desktop for 3D"
}, {
  id: "validation",
  label: "Validation",
  glyph: "⚖",
  note: "23 issues · 4 rules failing"
}, {
  id: "schemas",
  label: "Schemas",
  glyph: "▤",
  note: "9 built-in · 2 custom"
}, {
  id: "translator",
  label: "Translator",
  glyph: "𐌀",
  note: "Source → target · 4 tongues"
}, {
  id: "export",
  label: "Export to engine",
  glyph: "⤓",
  note: "Last build · 2 mins ago"
}];
const MM_PAST_CONVOS = [{
  id: "c1",
  title: "Who killed Baldr?",
  when: "Just now"
}, {
  id: "c2",
  title: "The fall of Caernarfon",
  when: "2h ago"
}, {
  id: "c3",
  title: "Frigg's oaths — what she missed",
  when: "Yesterday"
}, {
  id: "c4",
  title: "Where the dvergr forge the seed-time",
  when: "3d ago"
}, {
  id: "c5",
  title: "Háloga lineage from Aud the Deep",
  when: "Last week"
}];
window.MM_ENTRIES = MM_ENTRIES;
window.MM_TYPE_COLOR = MM_TYPE_COLOR;
window.MM_FILTERS = MM_FILTERS;
window.MM_ZONE_HEADERS = MM_ZONE_HEADERS;
window.MM_ZONE_PLATES = MM_ZONE_PLATES;
window.MM_TOOLS = MM_TOOLS;
window.MM_PAST_CONVOS = MM_PAST_CONVOS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/mobile/mobile-data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-app/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // Hide the toggle until the host has actually enabled the rail (the
  // __omelette_rail_enabled window message, posted only when the
  // omelette_deck_rail_enabled flag is on for this user). The initial read
  // covers TweaksPanel mounting after the message already arrived; the
  // listener covers the common case of mounting first.
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mimir-site/components.jsx
try { (() => {
/* global React */

function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "ms-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-wrap ms-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ms-nav-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/mimir-mark.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "ms-nav-brand-word"
  }, "Mimir")), /*#__PURE__*/React.createElement("div", {
    className: "ms-nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#docs"
  }, "Docs"), /*#__PURE__*/React.createElement("a", {
    href: "#changelog"
  }, "Changelog")), /*#__PURE__*/React.createElement("span", {
    className: "ms-nav-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ms-nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-ghost",
    href: "#"
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-primary",
    href: "#"
  }, "Download"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "ms-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-bg",
    style: {
      backgroundImage: "url('../../assets/plates/avalon.png')"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-fade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ms-wrap ms-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-eyebrow"
  }, "Mimir \xB7 v1.4 \xB7 for desktop"), /*#__PURE__*/React.createElement("h1", {
    className: "ms-hero-title"
  }, "A library for the world", /*#__PURE__*/React.createElement("br", null), "you're building.", /*#__PURE__*/React.createElement("em", null, "Owned by you. Read by your AI. Bound to your engine.")), /*#__PURE__*/React.createElement("p", {
    className: "ms-hero-sub"
  }, "Mimir keeps every character, faction, place, and event of your world in one structured library of plain markdown files. Your lore stops drifting away from your game."), /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-primary",
    href: "#"
  }, "Download for macOS"), /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-secondary",
    href: "#"
  }, "Watch the 90-second tour")), /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "v1.4.2"), "local-first \xB7 offline"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "macOS \xB7 Windows \xB7 Linux"), "Electron \xB7 64-bit"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Free tier"), "bring your own API key"))), /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-plate"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/characters/spearmaiden.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "ms-hero-plate-cap"
  }, "'Sigrun Ulfsdottir' \u2014 character entry from the Shieldwall Saga library"))));
}
function Features() {
  const items = [{
    icon: "../../assets/icons/character.png",
    title: "Structured entries",
    body: "Characters, factions, places, events, items, languages — and your own custom types. Every entry is a plain markdown file with consistent fields your AI can read reliably."
  }, {
    icon: "../../assets/icons/faction.png",
    title: "Relational linking",
    body: "Reference any entry by ID. Rename a character once, watch every mention update across the world. The more you link, the smarter Ask Mimir gets."
  }, {
    icon: "../../assets/icons/event.png",
    title: "Timeline & family trees",
    body: "Visualise centuries of in-world history and multi-generational character relationships. Your worldbuilding stops living in scattered docs."
  }, {
    icon: "../../assets/icons/dialogue.png",
    title: "Ask Mimir",
    body: "An AI that knows your world, not the open internet. Find inconsistencies, write dialogue in character, draft new entries — all grounded in your library."
  }, {
    icon: "../../assets/icons/spell.png",
    title: "Game engine integration",
    body: "Export the same lore that lives in your design doc straight into Unreal, Unity, or Godot. The runtime game and the writing room share one source of truth."
  }, {
    icon: "../../assets/icons/runemark.png",
    title: "Bring your own AI",
    body: "Drop the markdown library straight into Claude Projects, Cursor, ChatGPT — or use the managed AI on a paid tier. The files belong to you, not us."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ms-section ms-wrap",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "Chapter ii \u2014 what's in the well"), /*#__PURE__*/React.createElement("h2", {
    className: "ms-section-h2"
  }, "Everything that ", /*#__PURE__*/React.createElement("em", null, "matters"), " in your world. Linked."), /*#__PURE__*/React.createElement("p", {
    className: "ms-section-sub"
  }, "Most worldbuilders today scatter their lore across Word docs, wikis, Notion pages, and engine-specific data files. Mimir keeps it in one place \u2014 owned by you, queryable by your tools.")), /*#__PURE__*/React.createElement("div", {
    className: "ms-features"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    className: "ms-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-feat-icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: it.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ms-feat-title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "ms-feat-body"
  }, it.body)))));
}
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ms-section ms-wrap",
    id: "how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-how"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-how-plate"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/plates/kernow.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "Chapter iii \u2014 how it works"), /*#__PURE__*/React.createElement("h2", {
    className: "ms-section-h2"
  }, "Four steps to a ", /*#__PURE__*/React.createElement("em", null, "living"), " world."), /*#__PURE__*/React.createElement("ol", {
    className: "ms-how-list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "ms-how-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-how-num"
  }, "i"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Pick a folder."), /*#__PURE__*/React.createElement("p", null, "Mimir reads from a folder you choose. No proprietary database, no upload step. Your world lives on your machine."))), /*#__PURE__*/React.createElement("li", {
    className: "ms-how-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-how-num"
  }, "ii"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Write entries."), /*#__PURE__*/React.createElement("p", null, "Use the structured editor or write markdown directly. Either way, the same plain files end up on disk."))), /*#__PURE__*/React.createElement("li", {
    className: "ms-how-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-how-num"
  }, "iii"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Link everything."), /*#__PURE__*/React.createElement("p", null, "Reference a character, a faction, a place. The links light up the timeline, the family tree, and Ask Mimir."))), /*#__PURE__*/React.createElement("li", {
    className: "ms-how-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-how-num"
  }, "iv"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Ship to your engine."), /*#__PURE__*/React.createElement("p", null, "Export to Unreal, Unity, or Godot. Or point Claude Projects, Cursor, or ChatGPT at the folder. Your tools learn your world.")))))));
}
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ms-section ms-wrap",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms-eyebrow"
  }, "Chapter iv \u2014 the offering"), /*#__PURE__*/React.createElement("h2", {
    className: "ms-section-h2"
  }, "Honest pricing. Your ", /*#__PURE__*/React.createElement("em", null, "files"), " stay yours."), /*#__PURE__*/React.createElement("p", {
    className: "ms-section-sub"
  }, "Mimir is local-first; you can use it forever offline with your own API key. Paid tiers add managed AI, sync, and team libraries.")), /*#__PURE__*/React.createElement("div", {
    className: "ms-pricing-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-tier"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ms-tier-name"
  }, "Solo"), /*#__PURE__*/React.createElement("p", {
    className: "ms-tier-tag"
  }, "Free, forever. Bring your own API key."), /*#__PURE__*/React.createElement("div", {
    className: "ms-tier-price"
  }, "\xA30", /*#__PURE__*/React.createElement("small", null, " / forever")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Unlimited entries, local-first"), /*#__PURE__*/React.createElement("li", null, "Bring your own AI provider"), /*#__PURE__*/React.createElement("li", null, "Export to Unreal / Unity / Godot"), /*#__PURE__*/React.createElement("li", null, "One world")), /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-secondary",
    href: "#"
  }, "Download")), /*#__PURE__*/React.createElement("div", {
    className: "ms-tier is-featured"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ms-tier-name"
  }, "Scribe"), /*#__PURE__*/React.createElement("p", {
    className: "ms-tier-tag"
  }, "Managed AI. Unlimited worlds. The honest middle."), /*#__PURE__*/React.createElement("div", {
    className: "ms-tier-price"
  }, "\xA39", /*#__PURE__*/React.createElement("small", null, " / month")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Everything in Solo"), /*#__PURE__*/React.createElement("li", null, "Managed Claude / GPT-4 included"), /*#__PURE__*/React.createElement("li", null, "Unlimited worlds"), /*#__PURE__*/React.createElement("li", null, "Session capture (beta)"), /*#__PURE__*/React.createElement("li", null, "Priority support")), /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-primary",
    href: "#"
  }, "Start a 14-day trial")), /*#__PURE__*/React.createElement("div", {
    className: "ms-tier"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ms-tier-name"
  }, "Studio"), /*#__PURE__*/React.createElement("p", {
    className: "ms-tier-tag"
  }, "For small teams sharing a single source of truth."), /*#__PURE__*/React.createElement("div", {
    className: "ms-tier-price"
  }, "\xA329", /*#__PURE__*/React.createElement("small", null, " / seat / mo")), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Everything in Scribe"), /*#__PURE__*/React.createElement("li", null, "Shared team libraries"), /*#__PURE__*/React.createElement("li", null, "Engine plugin support"), /*#__PURE__*/React.createElement("li", null, "SSO + audit log")), /*#__PURE__*/React.createElement("a", {
    className: "ms-btn-secondary",
    href: "#"
  }, "Talk to us"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ms-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ms-foot-brand"
  }, "Mimir"), /*#__PURE__*/React.createElement("p", {
    className: "ms-foot-tag"
  }, "A library for the world you're building."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--fg-3)",
      margin: "14px 0 0"
    }
  }, "Made by Shield Wall Games \xB7 Cornwall, UK")), /*#__PURE__*/React.createElement("div", {
    className: "ms-foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Changelog"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Roadmap")), /*#__PURE__*/React.createElement("div", {
    className: "ms-foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Resources"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Docs"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Claude integration"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Unreal plugin"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Markdown spec")), /*#__PURE__*/React.createElement("div", {
    className: "ms-foot-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Shield Wall Games"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Ashborn"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Newsletter"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contact"))), /*#__PURE__*/React.createElement("div", {
    className: "ms-foot-base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Shield Wall Games Ltd."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Status")))));
}
Object.assign(window, {
  Nav,
  Hero,
  Features,
  HowItWorks,
  Pricing,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mimir-site/components.jsx", error: String((e && e.message) || e) }); }

})();
