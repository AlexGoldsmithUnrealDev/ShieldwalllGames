/* global React */
const { useState } = React;

function Sidebar({ active, onNav }) {
  const items = [
    { group: "Library", rows: [
      { id: "characters", label: "Characters", count: 47, color: "#d99366" },
      { id: "places",     label: "Places",     count: 23, color: "#7da265" },
      { id: "factions",   label: "Factions",   count: 11, color: "#c43a4e" },
      { id: "cultures",   label: "Cultures",    count: 6, color: "#a07cc8" },
      { id: "events",     label: "Events",     count: 38, color: "#8d8478" },
      { id: "languages",  label: "Languages",   count: 4, color: "#8aa0ab" },
      { id: "spells",     label: "Spells",     count: 17, color: "#6b89c2" },
      { id: "runes",      label: "Runes",      count: 24, color: "#c9a227" },
      { id: "artefacts",  label: "Artefacts",  count: 19, color: "#a8814d" },
    ]},
    { group: "Tools", rows: [
      { id: "timeline", label: "Timeline" },
      { id: "tree",     label: "Family tree" },
      { id: "genus",    label: "Genus tree" },
      { id: "factiontree", label: "Faction tree" },
      { id: "relationships", label: "Connections (3D)", color: "#d99366" },
      { id: "validation", label: "Validation" },
      { id: "schemas",  label: "Schemas" },
      { id: "translator", label: "Translator", color: "#c9a227" },
      { id: "calendar", label: "Calendar" },
      { id: "ask",      label: "Ask Mimir", color: "#c9a227" },
      { id: "export",   label: "Export to engine" },
    ]},
    { group: "World", rows: [
      { id: "shieldwall", label: "Shieldwall Saga", muted: true },
      { id: "settings",   label: "Settings", muted: true },
    ]},
  ];
  return (
    <aside className="mim-side">
      <div className="mim-brand">
        <img src="../../assets/logos/mimir-mark.png" alt=""/>
        <span className="mim-brand-word">Mimir</span>
        <span className="mim-brand-meta">v1.4</span>
      </div>
      <div className="mim-world">
        <span className="mim-eyebrow">World</span>
        <button className="mim-world-btn">
          <span className="mim-world-dot"/>
          Shieldwall Saga
          <span className="mim-world-caret">⌄</span>
        </button>
      </div>
      {items.map(group => (
        <div key={group.group} className="mim-side-group">
          <span className="mim-eyebrow">{group.group}</span>
          {group.rows.map(row => (
            <button
              key={row.id}
              onClick={() => onNav?.(row.id)}
              className={"mim-side-row" + (active === row.id ? " is-active" : "") + (row.muted ? " is-muted" : "")}
            >
              {row.color && <span className="mim-side-dot" style={{background: row.color}}/>}
              <span className="mim-side-label">{row.label}</span>
              {row.count != null && <span className="mim-side-count">{row.count}</span>}
            </button>
          ))}
        </div>
      ))}
      <div className="mim-side-foot">
        <div className="mim-foot-rule"/>
        <div className="mim-foot-row">
          <span className="mim-foot-mono">/Worlds/Shieldwall</span>
        </div>
        <div className="mim-foot-row">
          <span className="mim-foot-status">●</span>
          <span className="mim-foot-text">Synced · 2 mins ago</span>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
