/* global React, MobileToolHeader */
const { useState: useStateTr } = React;

// Tiny english → runic transliteration for the demo.
const MM_RUNIC = {
  a:"ᚨ", b:"ᛒ", c:"ᚲ", d:"ᛞ", e:"ᛖ", f:"ᚠ", g:"ᚷ", h:"ᚺ",
  i:"ᛁ", j:"ᛃ", k:"ᚲ", l:"ᛚ", m:"ᛗ", n:"ᚾ", o:"ᛟ", p:"ᛈ",
  q:"ᚲ", r:"ᚱ", s:"ᛊ", t:"ᛏ", u:"ᚢ", v:"ᚹ", w:"ᚹ", x:"ᚲᛊ",
  y:"ᛇ", z:"ᛉ",
};

function transliterateMM(text) {
  let out = "";
  for (const ch of (text || "").toLowerCase()) {
    if (MM_RUNIC[ch]) out += MM_RUNIC[ch];
    else out += ch;
  }
  return out;
}

const MM_LANGS = [
  { id:"english",     name:"English",     family:"Common"   },
  { id:"runadhrimir", name:"Runadhrimir", family:"Carved"   },
  { id:"drakenthar",  name:"Drakenthar",  family:"Dragon"   },
  { id:"low-speech",  name:"Low Speech",  family:"Hearth"   },
];

function MobileTranslator({ onBack }) {
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

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Translator" onBack={onBack}/>
      <div className="mm-toolview-body">

        <div className="mm-tr-pane">
          <div className="mm-tr-head">
            <select
              value={sourceId}
              onChange={(e) => setSourceId(e.target.value)}
              style={{ background:"transparent", border:0, color:"inherit", font:"inherit", flex:1, outline:0 }}>
              {MM_LANGS.map(l => <option key={l.id} value={l.id} style={{background:"#25201a"}}>{l.name}</option>)}
            </select>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:10, opacity:0.7 }}>{src.family}</span>
          </div>
          <textarea
            className="mm-tr-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
          />
          <div className="mm-tr-foot">
            <span>{text.length} chars</span>
            <span>auto · 1.0×</span>
          </div>
        </div>

        <div className="mm-tr-swap">
          <button onClick={swap} aria-label="Swap">⇅</button>
        </div>

        <div className="mm-tr-pane">
          <div className="mm-tr-head">
            <select
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              style={{ background:"transparent", border:0, color:"inherit", font:"inherit", flex:1, outline:0 }}>
              {MM_LANGS.map(l => <option key={l.id} value={l.id} style={{background:"#25201a"}}>{l.name}</option>)}
            </select>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:10, opacity:0.7 }}>{tgt.family}</span>
          </div>
          <div className="mm-tr-output">{out}</div>
          <div className="mm-tr-foot">
            <span>{out.length} glyphs</span>
            <span>copy ⧉</span>
          </div>
        </div>

        <div className="mm-handoff" style={{textAlign:"left"}}>
          <span className="mm-eyebrow">Phrasebook</span>
          <ul className="mm-linklist">
            <li><span className="mm-linklist-dot" style={{background:"#c9a227"}}/>Oath-greeting · "iron remembers"</li>
            <li><span className="mm-linklist-dot" style={{background:"#c9a227"}}/>Hall-blessing · "warm be your hearth"</li>
            <li><span className="mm-linklist-dot" style={{background:"#c9a227"}}/>Parting · "until the next frost"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

window.MobileTranslator = MobileTranslator;
