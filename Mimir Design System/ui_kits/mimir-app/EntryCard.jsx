/* global React */

function EntryCard({ entry, focused, onClick }) {
  return (
    <button
      onClick={onClick}
      className={"mim-entry" + (focused ? " is-focused" : "")}
      style={{ "--entry-c": entry.color }}
    >
      <div className="mim-entry-thumb">
        {entry.thumb && <img src={entry.thumb} alt=""/>}
      </div>
      <div className="mim-entry-body">
        <div className="mim-entry-eye">
          <span className="mim-entry-dot"/>
          {entry.type}{entry.faction ? ` · ${entry.faction}` : ""}
        </div>
        <h3 className="mim-entry-title">{entry.name}</h3>
        {entry.aliases && <p className="mim-entry-aliases">{entry.aliases}</p>}
        <p className="mim-entry-snippet">{entry.snippet}</p>
        <div className="mim-entry-meta">
          {entry.status && <span className="mim-entry-tag">{entry.status}</span>}
          <span className="mim-entry-tag">↳ {entry.links} links</span>
          <span className="mim-entry-tag">edited {entry.edited}</span>
        </div>
      </div>
    </button>
  );
}

window.EntryCard = EntryCard;
