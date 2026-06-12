/* global React, MM_ENTRIES, MM_FILTERS, MM_ZONE_HEADERS, MM_ZONE_PLATES */

function MobileEntryRow({ entry, onOpen }) {
  return (
    <button
      onClick={() => onOpen(entry)}
      className="mm-entry"
      style={{ "--entry-c": entry.color }}
    >
      <div className="mm-entry-thumb">
        {entry.thumb && <img src={entry.thumb} alt=""/>}
      </div>
      <div className="mm-entry-body">
        <div className="mm-entry-eye">
          <span className="mm-entry-dot"/>
          {entry.type}{entry.faction ? ` · ${entry.faction}` : ""}
        </div>
        <h3 className="mm-entry-title">{entry.name}</h3>
        {entry.aliases && <p className="mm-entry-aliases">{entry.aliases}</p>}
        <p className="mm-entry-snippet">{entry.snippet}</p>
        <div className="mm-entry-meta">
          {entry.status && <span className="mm-entry-tag">{entry.status}</span>}
          <span className="mm-entry-tag">↳ {entry.links}</span>
          <span className="mm-entry-tag">edited {entry.edited}</span>
        </div>
      </div>
    </button>
  );
}

const MM_NEW_LABELS = {
  all: "+ New", characters: "+ Character", places: "+ Place",
  factions: "+ Faction", cultures: "+ Culture", events: "+ Event",
  languages: "+ Language", spells: "+ Spell", runes: "+ Rune",
  artefacts: "+ Artefact",
};

function MobileLibrary({ activeFilter, onFilter, onOpenEntry }) {
  const filterId = activeFilter || "characters";
  const visible = filterId === "all"
    ? MM_ENTRIES
    : MM_ENTRIES.filter(e => e.filter === filterId);
  const header = MM_ZONE_HEADERS[filterId] || MM_ZONE_HEADERS.all;
  const plate  = MM_ZONE_PLATES[filterId]  || MM_ZONE_PLATES.all;
  const newLabel = MM_NEW_LABELS[filterId] || "+ New";

  return (
    <div className="mm-screen">
      {/* Zone plate */}
      <div className="mm-zone">
        <div className="mm-zone-plate" style={{ backgroundImage: `url('${plate}')` }}/>
        <div className="mm-zone-fade"/>
        <div className="mm-zone-body">
          <span className="mm-eyebrow">{header.eyebrow}</span>
          <h1 className="mm-zone-title">{header.title}</h1>
          <p className="mm-zone-sub">{header.sub(visible.length)}</p>
        </div>
      </div>

      <div className="mm-zone-actions">
        <button className="mm-btn-ghost">Sort: recent</button>
        <button className="mm-btn-primary">{newLabel}</button>
      </div>

      {/* Filter chips — horizontal scroll */}
      <div className="mm-chips">
        {MM_FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => onFilter(f.id)}
            className={"mm-chip" + (filterId === f.id ? " is-active" : "")}
            style={{ "--chip-c": f.color || "var(--fg-2)" }}
          >
            {f.color && <span className="mm-chip-dot"/>}
            {f.label}
            <span className="mm-chip-count">{f.count}</span>
          </button>
        ))}
      </div>

      {/* Entry rows */}
      <div className="mm-body">
        <div className="mm-entries">
          {visible.map(entry => (
            <MobileEntryRow key={entry.id} entry={entry} onOpen={onOpenEntry}/>
          ))}
        </div>
      </div>
    </div>
  );
}

window.MobileLibrary = MobileLibrary;
window.MobileEntryRow = MobileEntryRow;
