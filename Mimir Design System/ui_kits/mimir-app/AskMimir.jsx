/* global React */
const { useState: useStateAsk } = React;

function AskMimir({ open, onClose, entry }) {
  const [thread] = useStateAsk([
    { who: "user", text: "What does Sigrun think of her father?" },
    { who: "mimir", text: "Drawing from your library — Sigrun's eight character entries describe Ulf in three modes. In her early years he is 'the warm one at the head of the hall'; after the oath at fifteen he becomes 'the quiet weight beside her'; after Hellas he is 'the ash she carries'.", sources: ["Sigrun Ulfsdottir", "Ulf the Wolf-Father", "Burning of Hellas", "The seven oaths"] },
    { who: "user", text: "Write a line of dialogue she'd say to him in private, after his death." },
    { who: "mimir", text: "\"You taught me to read three runes before I could ride. You did not teach me how to read a hall without you in it.\"", sources: ["Sigrun (voice)", "The seven oaths"] },
  ]);

  if (!open) return null;
  return (
    <aside className="mim-ask">
      <header className="mim-ask-head">
        <div className="mim-ask-brand">
          <img src="../../assets/logos/mimir-mark.png" alt=""/>
          <span className="mim-eyebrow">Ask Mimir · drawing from {entry?.name || "your library"}</span>
        </div>
        <button className="mim-icon-btn" onClick={onClose}>✕</button>
      </header>
      <div className="mim-ask-thread">
        {thread.map((m, i) => (
          <div key={i} className={"mim-ask-msg mim-ask-msg-" + m.who}>
            {m.who === "mimir" && <span className="mim-ask-glyph">M</span>}
            <div className="mim-ask-bubble">
              <p className="mim-ask-text">{m.text}</p>
              {m.sources && (
                <div className="mim-ask-sources">
                  <span className="mim-eyebrow">Sources</span>
                  {m.sources.map((s, j) => <span key={j} className="mim-tag mim-tag-sm">↳ {s}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mim-ask-input">
        <textarea placeholder="Ask about your world…" rows={2}/>
        <div className="mim-ask-foot">
          <span className="mim-ask-mode">
            <span className="mim-ask-dot"/> grounded · this world only
          </span>
          <button className="mim-btn-primary">Send →</button>
        </div>
      </div>
    </aside>
  );
}

window.AskMimir = AskMimir;
