/* global React, MM_PAST_CONVOS */
const { useState: useStateAsk } = React;

const MM_ASK_SEED = [
  { role: "user",  text: "Who killed Baldr?" },
  { role: "mimir", text:
    "Höðr loosed the killing shaft, but the hand was guided. Baldr the Bright was beloved of all things — Frigg, his mother, had walked the nine worlds and taken oaths from fire and iron, from sickness and stone, that none of them would ever wound her son. From all things save one. The mistletoe she passed over, calling it too young and too soft to swear.\n\nLoki, who had measured this gap as a smith measures a seam, plucked a sprig and shaped it into a dart. At the assembly on Iðavöllr the gods made a game of Baldr's invulnerability; Loki put the mistletoe shaft into Höðr's hand and aimed his arm. The dart flew true. Baldr fell, and the bright went out of the world.",
    sources: [
      { id:"baldr",   t:"Baldr",       c:"#d99366" },
      { id:"hodr",    t:"Höðr",        c:"#d99366" },
      { id:"loki",    t:"Loki",        c:"#d99366" },
      { id:"frigg",   t:"Frigg",       c:"#d99366" },
      { id:"baldr-d", t:"Death of Baldr", c:"#8d8478" },
      { id:"idav",    t:"Iðavöllr",    c:"#7da265" },
    ],
  },
];

const MM_SUGGESTIONS = [
  "What happened at Fimbulwinter?",
  "How is the Iron Crown forged?",
  "Who serves the All-Father in Asgardr?",
  "Where do the dvergr keep the seed-time?",
];

function MobileAsk({ onBack, withHistory = false }) {
  const [thread, setThread] = useStateAsk(MM_ASK_SEED);
  const [draft, setDraft]   = useStateAsk("");

  function send() {
    if (!draft.trim()) return;
    setThread(prev => [
      ...prev,
      { role: "user", text: draft },
      { role: "mimir", text: "The well does not yet answer that question — but a scholar might. The threads you have given me run thin here. Could you tell me more about who is asking, and why?" },
    ]);
    setDraft("");
  }

  if (withHistory && thread === MM_ASK_SEED) {
    // Empty / starting state: show past conversations + suggestions
    return (
      <div className="mm-ask mm-screen">
        <header className="mm-ev-nav">
          <button className="mm-icon-btn" onClick={onBack} aria-label="Back">←</button>
          <span className="mm-ev-nav-title">Ask Mimir</span>
          <button className="mm-icon-btn" aria-label="New">+</button>
        </header>
        <div className="mm-ask-head">
          <h1 className="mm-ask-head-title">The well will answer.</h1>
          <p className="mm-ask-head-sub">If the price is paid, and the question is true.</p>
        </div>
        <div className="mm-ask-suggestions">
          {MM_SUGGESTIONS.map(s => (
            <button key={s} className="mm-ask-sugg" onClick={() => { setDraft(s); }}>{s}</button>
          ))}
        </div>
        <div className="mm-ask-recent">
          <span className="mm-eyebrow">Recent conversations</span>
          {MM_PAST_CONVOS.map(c => (
            <div key={c.id} className="mm-ask-recent-row">
              <span style={{color:"var(--accent)"}}>❛</span>
              <span style={{flex:1}}>{c.title}</span>
              <span className="mm-ask-recent-when">{c.when}</span>
            </div>
          ))}
        </div>
        <div className="mm-ask-input">
          <input
            className="mm-ask-input-field"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask the well…"
          />
          <button className="mm-ask-send" onClick={send} aria-label="Send">↑</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mm-ask mm-screen">
      <header className="mm-ev-nav">
        <button className="mm-icon-btn" onClick={onBack} aria-label="Back">←</button>
        <span className="mm-ev-nav-title">Who killed Baldr?</span>
        <button className="mm-icon-btn" aria-label="History">☰</button>
      </header>

      <div className="mm-ask-thread">
        {thread.map((m, i) => (
          <div key={i} className={"mm-ask-msg " + m.role}>
            {m.role === "mimir" && <div className="mm-ask-glyph">M</div>}
            <div className="mm-ask-bubble">
              {m.text.split("\n\n").map((p, j) => (
                <p key={j} className="mm-ask-text">{p}</p>
              ))}
              {m.sources && (
                <div className="mm-ask-sources">
                  {m.sources.map(s => (
                    <span key={s.id} className="mm-ask-source">
                      <span className="mm-ask-source-dot" style={{background:s.c}}/>
                      {s.t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mm-ask-suggestions">
        {MM_SUGGESTIONS.slice(0, 3).map(s => (
          <button key={s} className="mm-ask-sugg" onClick={() => setDraft(s)}>{s}</button>
        ))}
      </div>

      <div className="mm-ask-input">
        <input
          className="mm-ask-input-field"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask follow-up…"
        />
        <button className="mm-ask-send" onClick={send} aria-label="Send">↑</button>
      </div>
    </div>
  );
}

window.MobileAsk = MobileAsk;
