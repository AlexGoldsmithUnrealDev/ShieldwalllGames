/* global React */
const { useState: useStateCmd, useEffect: useEffectCmd } = React;

function CommandPalette({ open, onClose, onPick }) {
  const [q, setQ] = useStateCmd("");
  useEffectCmd(() => { if (open) setQ(""); }, [open]);

  if (!open) return null;
  const groups = [
    { name: "Recently opened", items: [
      { icon: "○", color: "#d99366", label: "Sigrun Ulfsdottir", meta: "Character · Iron Crown" },
      { icon: "○", color: "#7da265", label: "Caernarfon", meta: "Place · capital" },
      { icon: "○", color: "#8d8478", label: "Burning of Hellas", meta: "Event · Yr 26" },
    ]},
    { name: "Actions", items: [
      { icon: "+", label: "New character",         meta: "⌘N" },
      { icon: "↗", label: "Open in editor",        meta: "⌘E" },
      { icon: "⊕", label: "Run validation",        meta: "⌘⇧V" },
      { icon: "⤓", label: "Export to Unreal",      meta: "" },
    ]},
    { name: "Navigate", items: [
      { icon: "▤", label: "Timeline", meta: "" },
      { icon: "❦", label: "Family tree", meta: "" },
      { icon: "❛", label: "Ask Mimir", meta: "⌘J" },
    ]},
  ];
  return (
    <div className="mim-cmd-scrim" onClick={onClose}>
      <div className="mim-cmd" onClick={e => e.stopPropagation()}>
        <div className="mim-cmd-input">
          <span className="mim-cmd-glyph">⌕</span>
          <input
            autoFocus
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Find anywhere in your world…"
          />
          <span className="mim-cmd-kbd">esc</span>
        </div>
        <div className="mim-cmd-results">
          {groups.map(g => (
            <div key={g.name} className="mim-cmd-group">
              <span className="mim-eyebrow">{g.name}</span>
              {g.items.map((it, i) => (
                <button key={i} className="mim-cmd-row" onClick={() => onPick?.(it)}>
                  <span className="mim-cmd-icon" style={{color: it.color || "var(--fg-3)"}}>{it.icon}</span>
                  <span className="mim-cmd-label">{it.label}</span>
                  <span className="mim-cmd-meta">{it.meta}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.CommandPalette = CommandPalette;
