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

const { useEffect, useMemo, useRef, useState } = React;

// ─── Sample languages ───────────────────────────────────────────
const LANGUAGES = [
  { id: "english", name: "English", isEnglish: true, registers: [], modes: [], hasScript: false },
  {
    id: "drakenthar",
    name: "Drakenthar",
    isEnglish: false,
    registers: [
      { id: "high-speech", name: "High Speech",  hint: "Declarative · used between dragons" },
      { id: "low-speech",  name: "Low Speech",   hint: "Cruel · used toward lesser beings" },
      { id: "void-speech", name: "Void Speech",  hint: "Ritual · prophecy · ancient" },
    ],
    modes: [
      { id: "standard",  name: "Standard",  hint: "Balanced; preserves tone." },
      { id: "dominant",  name: "Dominant",  hint: "Asserts authority; reframes weakness as inevitability." },
      { id: "ritual",    name: "Ritual",    hint: "Symbolic; ancient cadence." },
      { id: "brutal",    name: "Brutal",    hint: "Short, threatening, absolute." },
      { id: "prophecy",  name: "Prophecy",  hint: "Abstract; fated; subject-omitted." },
    ],
    hasScript: false,
  },
  {
    id: "runadhrimir",
    name: "Rúnadhrímir",
    isEnglish: false,
    registers: [
      { id: "carved",   name: "Carved",   hint: "Inscriptions, stone, oath" },
      { id: "spoken",   name: "Spoken",   hint: "Daily speech" },
    ],
    modes: [
      { id: "standard",   name: "Standard",   hint: "Balanced." },
      { id: "formal",     name: "Formal",     hint: "Court, oath-ring, treaty." },
      { id: "kenning",    name: "Kenning",    hint: "Compounds + skaldic metaphor." },
    ],
    hasScript: true,
  },
];

const QUALITY_LABELS = {
  fast:     "Fast · Haiku",
  quality:  "Quality · Sonnet",
  ultimate: "Ultimate · Opus",
};

// ─── Sample history ─────────────────────────────────────────────
const HISTORY = [
  { id: "h1", group: "Today",     time: "11:14",  source: "english", target: "drakenthar", register: "high-speech", mode: "dominant", title: "Hear me, child of frost — your fire will outlast every law that was ever spoken." },
  { id: "h2", group: "Today",     time: "10:42",  source: "english", target: "drakenthar", register: "low-speech",  mode: "brutal",   title: "Open the gate." },
  { id: "h3", group: "Today",     time: "09:55",  source: "english", target: "drakenthar", register: "void-speech", mode: "prophecy", title: "When the eighth winter passes, the shieldwall breaks; the wolf finds its mother." },
  { id: "h4", group: "Yesterday", time: "Yest.",  source: "english", target: "runadhrimir", register: "carved",     mode: "formal",   title: "Sworn on iron, sworn on salt, sworn on the ember-red banner." },
  { id: "h5", group: "Yesterday", time: "Yest.",  source: "english", target: "drakenthar", register: "high-speech", mode: "ritual",   title: "The world-ash drinks of the well. The well does not refuse it." },
  { id: "h6", group: "Last week", time: "May 8",  source: "drakenthar", target: "english", register: "high-speech", mode: "standard", title: "Krath-vaen ulgor sothren·" },
  { id: "h7", group: "Last week", time: "May 6",  source: "english", target: "drakenthar", register: "low-speech",  mode: "dominant", title: "I will not bow." },
];

// ─── Tiny Latin → Elder Futhark map for the runic preview ──────
const RUNES = {
  th: "ᚦ", ng: "ᛜ",
  a: "ᚨ", b: "ᛒ", c: "ᚲ", d: "ᛞ", e: "ᛖ", f: "ᚠ", g: "ᚷ", h: "ᚺ",
  i: "ᛁ", j: "ᛃ", k: "ᚲ", l: "ᛚ", m: "ᛗ", n: "ᚾ", o: "ᛟ", p: "ᛈ",
  q: "ᚲᚹ", r: "ᚱ", s: "ᛋ", t: "ᛏ", u: "ᚢ", v: "ᚹ", w: "ᚹ", x: "ᚲᛋ",
  y: "ᛇ", z: "ᛉ",
};
function transliterate(text) {
  const t = (text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let i = 0; let out = "";
  while (i < t.length) {
    const ch = t[i];
    if (!/[a-zA-Z]/.test(ch)) { out += ch; i++; continue; }
    const lower = ch.toLowerCase();
    const two = t.substr(i, 2).toLowerCase();
    if (RUNES[two]) { out += RUNES[two]; i += 2; continue; }
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
      notes: "Dominant register reframes \"will outlast\" as inevitability; \"law\" softened to \"veth\" (binding), not \"kraal\" (decree).",
    },
    "high-speech|ritual": {
      input: "The world-ash drinks of the well. The well does not refuse it.",
      translation: "Yggvor-haethrin sothra vael · Vael sa neth-volthan.",
      gloss: "[world-ash] [drinks-from] [well] · [well] [NEG-refuses-it].",
      notes: "Ritual mode preserves the parallel structure; void-omitted subject in the second clause.",
    },
  },
};

// ─── Component ─────────────────────────────────────────────────
function TranslatorView() {
  const enabledLangs = LANGUAGES.filter(l => !l.isEnglish);
  const [sourceId, setSourceId] = useState("english");
  const [targetId, setTargetId] = useState("drakenthar");
  const target = LANGUAGES.find(l => l.id === targetId) || LANGUAGES[1];
  const source = LANGUAGES.find(l => l.id === sourceId) || LANGUAGES[0];

  const [registerId, setRegisterId] = useState(target.registers[0]?.id || "");
  const [modeId,     setModeId]     = useState(target.modes[0]?.id     || "");
  const [quality,    setQuality]    = useState("quality");
  const [display,    setDisplay]    = useState("latin"); // latin | runic | both
  const [activeHistId, setActiveHistId] = useState("h1");

  useEffect(() => {
    setRegisterId(target.registers[0]?.id || "");
    setModeId(target.modes[0]?.id || "");
    if (!target.hasScript) setDisplay("latin");
  }, [targetId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Seed input/output from sample so the page reads "complete"
  const seed = SAMPLE_TRANSLATIONS.drakenthar["high-speech|dominant"];
  const [input,  setInput]  = useState(seed.input);
  const [output, setOutput] = useState({
    translation: seed.translation,
    gloss: seed.gloss,
    notes: seed.notes,
    model: "claude-sonnet-4-6",
    newWords: [
      { id: "nw-1", headword: "vaethran",  english: "attend (imperative)", part: "verb",  ipa: "/ˈvɛθ.rɑn/",   note: "Imperative form of vaeth- (to listen, mark). Authority-implied." },
      { id: "nw-2", headword: "brath-kraan", english: "your fire",         part: "noun",  ipa: "/braθ.krɑːn/", note: "Compound: brath (fire) + -kraan (2sg possessive)." },
      { id: "nw-3", headword: "ulgor",     english: "outlast",            part: "verb",  ipa: "/ˈʊl.ɡor/",    note: "Future-tense root; carries connotation of erosion, not survival." },
      { id: "nw-4", headword: "veth-haan", english: "(ever) spoken",      part: "adj",   ipa: "/vɛθ.hɑːn/",   note: "Passive-participle of vethan (to bind in word)." },
    ],
  });
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);

  function swap() {
    const s = sourceId; setSourceId(targetId); setTargetId(s);
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
    return (
      <div className="tr-translation">
        {(display === "latin" || display === "both") && (
          <p className="tr-latin">{latin.split(/(\s+|·)/).map((tok, i) => {
            if (!tok.trim() || tok === " " || tok === "·") return <span key={i}>{tok}</span>;
            return <button key={i} className="tr-word">{tok}</button>;
          })}</p>
        )}
        {(display === "runic" || display === "both") && target.hasScript && (
          <p className="tr-runic">{runic}</p>
        )}
        {(display === "runic" || display === "both") && !target.hasScript && display === "runic" && (
          <p className="tr-runic-fallback">Latin only — this language has no native script. Switch back to Latin or Both.</p>
        )}
      </div>
    );
  }

  return (
    <div className="tr">
      {/* === Banner ====================================================== */}
      <div className="val-banner">
        <div className="val-banner-body">
          <span className="mim-eyebrow">Tools · Translator</span>
          <h1 className="val-title">Translator</h1>
          <p className="val-sub">Run text through the chronicled tongues. Sourced from the lorebible's languages, with their registers and modes.</p>
        </div>
        <div className="val-banner-stats">
          <div className="val-stat">
            <span className="val-stat-num">{enabledLangs.length}</span>
            <span className="val-stat-lbl">Enabled languages</span>
          </div>
          <div className="val-stat">
            <span className="val-stat-num">{HISTORY.length}</span>
            <span className="val-stat-lbl">Recent</span>
          </div>
        </div>
      </div>

      {/* === Control bar ================================================= */}
      <div className="tr-bar">
        <div className="tr-bar-pair">
          <LangSelect value={sourceId} onChange={setSourceId} label="From"/>
          <button className="tr-swap" onClick={swap} title="Swap (Ctrl+K)">⇄</button>
          <LangSelect value={targetId} onChange={setTargetId} label="To"/>
        </div>

        {target.registers.length > 0 && (
          <div className="tr-bar-field">
            <span className="tr-bar-lbl">Register</span>
            <select className="tr-select" value={registerId} onChange={e => setRegisterId(e.target.value)}>
              {target.registers.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
            </select>
          </div>
        )}
        {target.modes.length > 0 && (
          <div className="tr-bar-field">
            <span className="tr-bar-lbl">Mode</span>
            <select className="tr-select" value={modeId} onChange={e => setModeId(e.target.value)}>
              {target.modes.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
            </select>
          </div>
        )}
        <div className="tr-bar-field">
          <span className="tr-bar-lbl">Quality</span>
          <select className="tr-select" value={quality} onChange={e => setQuality(e.target.value)}>
            {Object.entries(QUALITY_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </div>

        <span className="tr-bar-spacer"/>
        <button className="mim-btn-primary tr-translate" onClick={pretendTranslate} disabled={busy || !input.trim()}>
          {busy ? "Translating…" : "Translate"}
          <span className="tr-shortcut">⌘↵</span>
        </button>
      </div>

      {/* === Body: history / input / output ============================== */}
      <div className="tr-body">
        {/* HISTORY rail */}
        <aside className="tr-history">
          <div className="tr-hist-head">
            <span className="mim-eyebrow">History</span>
            <button className="val-clear">Clear all</button>
          </div>
          {["Today", "Yesterday", "Last week"].map(group => {
            const rows = HISTORY.filter(h => h.group === group);
            if (rows.length === 0) return null;
            return (
              <div key={group} className="tr-hist-group">
                <div className="tr-hist-grouph">{group}</div>
                {rows.map(h => {
                  const tgt = LANGUAGES.find(l => l.id === h.target);
                  return (
                    <button
                      key={h.id}
                      className={"tr-hist-row" + (h.id === activeHistId ? " is-active" : "")}
                      onClick={() => setActiveHistId(h.id)}
                    >
                      <div className="tr-hist-pair">
                        <span className="tr-hist-mini">{(LANGUAGES.find(l => l.id === h.source) || {}).name}</span>
                        <span className="tr-hist-arrow">→</span>
                        <span className="tr-hist-mini tr-hist-target">{tgt?.name}</span>
                        <span className="tr-hist-time">{h.time}</span>
                      </div>
                      <div className="tr-hist-title">{h.title}</div>
                      <div className="tr-hist-tags">
                        {h.register && <span className="tr-tag">{h.register.replace("-speech","")}</span>}
                        {h.mode && <span className="tr-tag">{h.mode}</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            );
          })}
        </aside>

        {/* INPUT pane */}
        <section className="tr-pane">
          <div className="tr-pane-head">
            <span className="tr-pane-eye">Input — {source.name}</span>
            <span className="tr-pane-meta">{input.length} chars · ⌘↵ to translate</span>
          </div>
          <textarea
            ref={inputRef}
            className="tr-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Speak your text to the well…"
          />
          <div className="tr-pane-foot">
            <button className="tr-iconbtn" title="Speak (voice input)">🎙</button>
            <button className="tr-iconbtn" title="Paste from clipboard">⎘</button>
            <button className="tr-iconbtn" title="Clear" onClick={() => setInput("")}>✕</button>
            <span className="tr-pane-spacer"/>
            <span className="tr-pane-meta">{source.isEnglish ? "Auto-detect off" : "Word-by-word echo available"}</span>
          </div>
        </section>

        {/* OUTPUT pane */}
        <section className="tr-pane tr-pane-out">
          <div className="tr-pane-head">
            <span className="tr-pane-eye">Output — {target.name}</span>
            {target.hasScript && (
              <div className="tr-display">
                {["latin", "runic", "both"].map(m => (
                  <button
                    key={m}
                    className={"tr-disp-btn" + (display === m ? " is-on" : "")}
                    onClick={() => setDisplay(m)}
                  >{m}</button>
                ))}
              </div>
            )}
            <span className="tr-pane-spacer"/>
            <button className="tr-iconbtn" title="Copy">📋</button>
            <button className="tr-iconbtn" title="Read aloud">🔊</button>
          </div>

          <div className="tr-output">
            {busy && (
              <div className="tr-busy">
                <span className="tr-busy-dot"/><span className="tr-busy-dot"/><span className="tr-busy-dot"/>
                <span className="tr-busy-text">Mimir consults the well…</span>
              </div>
            )}
            {!busy && renderTranslation()}

            {!busy && output && (
              <>
                {output.gloss && (
                  <section className="tr-aux">
                    <span className="tr-aux-eye">Literal gloss</span>
                    <p className="tr-aux-body">{output.gloss}</p>
                  </section>
                )}
                {output.notes && (
                  <section className="tr-aux">
                    <span className="tr-aux-eye">Translator's note</span>
                    <p className="tr-aux-body tr-aux-italic">{output.notes}</p>
                  </section>
                )}

                {output.newWords?.length > 0 && (
                  <section className="tr-newwords">
                    <header className="tr-nw-head">
                      <span className="tr-nw-eye">New words added to vocabulary</span>
                      <span className="tr-nw-count">{output.newWords.length}</span>
                    </header>
                    <ul className="tr-nw-list">
                      {output.newWords.map(w => (
                        <li key={w.id} className="tr-nw-row">
                          <div className="tr-nw-main">
                            <span className="tr-nw-head-line">
                              <span className="tr-nw-headword">{w.headword}</span>
                              {target.hasScript && <span className="tr-nw-runic">{transliterate(w.headword)}</span>}
                              <span className="tr-nw-part">{w.part}</span>
                              <span className="tr-nw-ipa">{w.ipa}</span>
                            </span>
                            <span className="tr-nw-english">{w.english}</span>
                            {w.note && <span className="tr-nw-note">{w.note}</span>}
                          </div>
                          <div className="tr-nw-actions">
                            <button className="val-action">Regenerate</button>
                            <button className="val-action val-action-ghost">Reject</button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <footer className="tr-out-foot">
                  <span className="tr-out-model">{output.model}</span>
                  <span className="tr-out-sep">·</span>
                  <span>{output.newWords.length} new word{output.newWords.length === 1 ? "" : "s"} saved</span>
                  <span className="tr-out-sep">·</span>
                  <button className="tr-text-link">Open vocabulary →</button>
                </footer>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function LangSelect({ value, onChange, label }) {
  return (
    <div className="tr-lang">
      <span className="tr-bar-lbl">{label}</span>
      <select className="tr-select tr-lang-select" value={value} onChange={e => onChange(e.target.value)}>
        {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
      </select>
    </div>
  );
}

window.TranslatorView = TranslatorView;
