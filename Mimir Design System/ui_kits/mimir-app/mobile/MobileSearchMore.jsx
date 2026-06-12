/* global React, MM_ENTRIES, MM_TYPE_COLOR */
const { useState: useStateSearch } = React;

const MM_RECENT_ITEMS = [
  { id:"sigrun",    name:"Sigrun Ulfsdottir",  meta:"Character · Iron Crown",   c:"#d99366" },
  { id:"caernarfon",name:"Caernarfon",         meta:"Place · capital",          c:"#7da265" },
  { id:"burning",   name:"Burning of Hellas",  meta:"Event · Yr 23",            c:"#8d8478" },
];

const MM_ACTIONS = [
  { glyph:"+", label:"New character",       meta:"⌘N" },
  { glyph:"↗", label:"Open in editor",      meta:"" },
  { glyph:"⊕", label:"Run validation",      meta:"" },
  { glyph:"⤓", label:"Export to Unreal",    meta:"" },
];

const MM_NAV = [
  { glyph:"⏳", label:"Timeline" },
  { glyph:"❦", label:"Family tree" },
  { glyph:"❛", label:"Ask Mimir" },
];

function MobileSearch({ onBack, onOpenEntry }) {
  const [q, setQ] = useStateSearch("");
  const filtered = q
    ? MM_ENTRIES.filter(e =>
        e.name.toLowerCase().includes(q.toLowerCase()) ||
        (e.aliases || "").toLowerCase().includes(q.toLowerCase())
      ).slice(0, 8)
    : [];

  return (
    <div className="mm-screen">
      <div className="mm-search-bar">
        <button className="mm-icon-btn" onClick={onBack} aria-label="Close">←</button>
        <input
          autoFocus
          className="mm-search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Find anywhere in your world…"
        />
        {q && <button className="mm-icon-btn" onClick={() => setQ("")} aria-label="Clear">×</button>}
      </div>

      <div className="mm-body">
        <div className="mm-search-body">
          {q && (
            <div className="mm-search-group">
              <span className="mm-eyebrow">Entries · {filtered.length}</span>
              {filtered.length === 0 && (
                <p style={{padding:"12px 0", color:"var(--fg-3)", fontFamily:"var(--font-serif)", fontStyle:"italic"}}>
                  Nothing under that name yet. Try a different spelling, or ask Mimir.
                </p>
              )}
              {filtered.map(e => (
                <div key={e.id} className="mm-search-row" onClick={() => onOpenEntry(e)}>
                  <div className="mm-search-icon" style={{color: e.color}}>○</div>
                  <div className="mm-search-name">{e.name}</div>
                  <div className="mm-search-meta">{e.type}</div>
                </div>
              ))}
            </div>
          )}

          {!q && (
            <>
              <div className="mm-search-group">
                <span className="mm-eyebrow">Recently opened</span>
                {MM_RECENT_ITEMS.map(r => (
                  <div key={r.id} className="mm-search-row">
                    <div className="mm-search-icon" style={{color: r.c}}>○</div>
                    <div className="mm-search-name">{r.name}</div>
                    <div className="mm-search-meta">{r.meta}</div>
                  </div>
                ))}
              </div>
              <div className="mm-search-group">
                <span className="mm-eyebrow">Actions</span>
                {MM_ACTIONS.map((a, i) => (
                  <div key={i} className="mm-search-row">
                    <div className="mm-search-icon">{a.glyph}</div>
                    <div className="mm-search-name">{a.label}</div>
                    <div className="mm-search-meta">{a.meta}</div>
                  </div>
                ))}
              </div>
              <div className="mm-search-group">
                <span className="mm-eyebrow">Navigate</span>
                {MM_NAV.map((n, i) => (
                  <div key={i} className="mm-search-row">
                    <div className="mm-search-icon">{n.glyph}</div>
                    <div className="mm-search-name">{n.label}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMore() {
  return (
    <div className="mm-screen">
      <div className="mm-body">
        <div className="mm-more-head">
          <div className="mm-more-avatar">AG</div>
          <div className="mm-more-user">
            <div className="mm-more-name">Astrid Greycloak</div>
            <div className="mm-more-sync">
              <span className="mm-more-sync-dot"/>
              Synced · 2 mins ago
            </div>
          </div>
          <button className="mm-icon-btn">⋯</button>
        </div>

        <div className="mm-list">
          <div className="mm-list-group">
            <span className="mm-eyebrow">World</span>
            <div className="mm-list-row">
              <div className="mm-list-row-icon" style={{color:"var(--accent)"}}>●</div>
              <div className="mm-list-row-label">Shieldwall Saga</div>
              <div className="mm-list-row-meta">/Worlds/Shieldwall</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">⌂</div>
              <div className="mm-list-row-label">Switch world</div>
              <div className="mm-list-row-meta">4 others</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
          </div>

          <div className="mm-list-group">
            <span className="mm-eyebrow">Library</span>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">⤓</div>
              <div className="mm-list-row-label">Offline copy</div>
              <div className="mm-list-row-meta">312 entries</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">★</div>
              <div className="mm-list-row-label">Pinned</div>
              <div className="mm-list-row-meta">8</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">⤴</div>
              <div className="mm-list-row-label">Recent edits</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
          </div>

          <div className="mm-list-group">
            <span className="mm-eyebrow">App</span>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">◐</div>
              <div className="mm-list-row-label">Theme</div>
              <div className="mm-list-row-meta">Atelier dark</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">𝐀</div>
              <div className="mm-list-row-label">Reading size</div>
              <div className="mm-list-row-meta">Medium</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">⚙</div>
              <div className="mm-list-row-label">Settings</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
            <div className="mm-list-row">
              <div className="mm-list-row-icon">?</div>
              <div className="mm-list-row-label">Help &amp; about</div>
              <div className="mm-list-row-meta">v1.4</div>
              <span className="mm-linklist-arrow">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.MobileSearch = MobileSearch;
window.MobileMore = MobileMore;
