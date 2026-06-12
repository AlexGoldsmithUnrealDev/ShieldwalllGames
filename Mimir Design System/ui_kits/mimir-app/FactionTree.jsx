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

const { useState, useMemo } = React;

// ─── Factions (Shieldwall Saga vocabulary) ──────────────────────
const FX_FACTIONS = [
  {
    id: 'iron-crown',
    name: 'The Iron Crown',
    type: 'noble-house',
    founded: 'AoY 280',
    dissolved: null,
    motto: 'By iron and oath.',
    purpose: 'Hold the shieldwall against the giant-tide; keep the long pact unbroken.',
    ideology: 'Honour-bound monarchy; loyalty over law, oath over kin.',
    heraldry: { description: 'A black iron crown ringed with thorns on a field of blood.', colours: ['#c43a4e', '#1a1410', '#c9a227'], symbol: 'crown-of-thorns' },
    allies: ['Hornfolke Skalds', 'Stoneborn Holds', 'The Long Pact'],
    rivals: ['Cult of Mimir', 'Frost-jötnar', 'The Voidwyrm-faithful'],
  },
  {
    id: 'hornfolke-skalds',
    name: 'Hornfolke Skalds',
    type: 'guild',
    founded: 'AoY ~100',
    dissolved: null,
    motto: 'Sing it true, sing it twice.',
    purpose: 'Chronicle the chronicle; bind cultural memory through oral tradition and rune-stone.',
    ideology: 'Truth-by-repetition; nothing is real until it is sung.',
    heraldry: { description: 'A horn crossed with a quill, on field of bleached linen.', colours: ['#d6c9a8', '#8d8478', '#c9a227'], symbol: 'horn-quill' },
    allies: ['The Iron Crown', 'Stoneborn Holds'],
    rivals: [],
  },
  {
    id: 'cult-of-mimir',
    name: 'Cult of Mimir',
    type: 'cult',
    founded: 'AoY 88',
    dissolved: null,
    motto: 'The well does not refuse.',
    purpose: 'Tend the wellhead; speak prophecy to anyone who pays the bone-price.',
    ideology: 'Fated, void-touched, transactional. Knowledge has a weight.',
    heraldry: { description: 'An open well-mouth ringed by nine runes, on void-black.', colours: ['#a07cc8', '#1a1410', '#5fa394'], symbol: 'well-and-rune' },
    allies: ['The Voidwyrm-faithful'],
    rivals: ['The Iron Crown', 'Hornfolke Skalds'],
  },
  {
    id: 'stoneborn-holds',
    name: 'Stoneborn Holds',
    type: 'clan',
    founded: 'AoY 12',
    dissolved: null,
    motto: 'Older than the iron.',
    purpose: 'Hold the mountain-gates; trade ore, runestone, and patience downhill.',
    ideology: 'Slow, kin-bound, durable. The mountain remembers.',
    heraldry: { description: 'A square-cut anvil under a triangle of mountain, on grey.', colours: ['#8aa0ab', '#5a5650', '#c9a227'], symbol: 'anvil-and-peak' },
    allies: ['The Iron Crown', 'Hornfolke Skalds'],
    rivals: ['Frost-jötnar'],
  },
  {
    id: 'embertongue-watch',
    name: 'Embertongue Watch',
    type: 'order',
    founded: 'AoY 198',
    dissolved: null,
    motto: 'Wake the wyrm, name the wyrm.',
    purpose: 'Track and name every Drakenthar greatwyrm; broker their passage.',
    ideology: 'Naming-as-binding; observation as devotion.',
    heraldry: { description: 'A dragon\u2019s eye inside a wreath of ember, on caldera-black.', colours: ['#b85a2c', '#1a1410', '#d99366'], symbol: 'eye-and-ember' },
    allies: ['Cult of Mimir'],
    rivals: [],
  },
];

// Members of the focused faction (Iron Crown by default).
// Each member is a character with role + status. Mirrors the
// FactionMember schema (character link + role + joined/left year).
const FX_MEMBERS = {
  'iron-crown': [
    { id: 'bjornar',  name: 'Bjornar',        role: 'King of the Crown',     joined: 'AoY 391', tenure: '21 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'sigrun',   name: 'Sigrun',         role: 'Sworn shield-bearer',   joined: 'AoY 395', tenure: '17 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'vaerin',   name: 'Vaerin',         role: 'Counsellor',            joined: 'AoY 401', tenure: '11 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'hjalmar',  name: 'Hjalmar',        role: 'Marshal of the Wall',   joined: 'AoY 388', tenure: '24 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'skaldyrn', name: 'Skaldyrn',       role: 'Crown-skald (the late)',joined: 'AoY 312', tenure: '\u2014',status: 'deceased', stub: false, kind: 'aesir' },
    { id: 'vorthan',  name: 'Vorthan',        role: 'Spear-thane',           joined: 'AoY 403', tenure: '9 y',   status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'helka',    name: 'Helka',          role: 'Heir-apparent',         joined: 'AoY 408', tenure: '4 y',   status: 'alive',    stub: true,  kind: 'aesir' },
    { id: 'astrid',   name: 'Astrid',         role: 'Rune-warden',           joined: 'AoY 404', tenure: '8 y',   status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'eira',     name: 'Eira',           role: 'Master-at-arms',        joined: 'AoY 396', tenure: '16 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'ulf',      name: 'Ulf the Elder',  role: 'Bard-elder (emeritus)', joined: 'AoY 340', tenure: '60 y',  status: 'alive',    stub: true,  kind: 'aesir' },
  ],
  'hornfolke-skalds': [
    { id: 'old-aenir',  name: 'Aenir the Older', role: 'Loremaster',         joined: 'AoY 350', tenure: '62 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'velka',      name: 'Velka',           role: 'Wandering skald',    joined: 'AoY 398', tenure: '14 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'old-skaldyrn',name:'Skaldyrn',        role: 'Court-skald',        joined: 'AoY 312', tenure: '\u2014',status: 'deceased', stub: false, kind: 'aesir' },
    { id: 'rune-marit', name: 'Marit Rune-tongue', role: 'Rune-carver',      joined: 'AoY 392', tenure: '20 y',  status: 'alive',    stub: false, kind: 'aesir' },
  ],
  'cult-of-mimir': [
    { id: 'oracle-ynla', name: 'Ynla of the Well', role: 'Oracle-prime',     joined: 'AoY 360', tenure: '52 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'mimir-mouth', name: 'The Mouth',       role: 'Voice of Mimir',    joined: 'AoY ???', tenure: '?',     status: 'alive',    stub: true,  kind: 'unknown' },
    { id: 'cult-thrain', name: 'Thrain',          role: 'Bone-priest',       joined: 'AoY 400', tenure: '12 y',  status: 'alive',    stub: false, kind: 'aesir' },
  ],
  'stoneborn-holds':  [
    { id: 'arnvid',  name: 'Arnvid Stonewright', role: 'Hold-keeper',        joined: 'AoY 372', tenure: '40 y', status: 'alive',    stub: false, kind: 'stoneborn' },
    { id: 'modir',   name: 'Modir',              role: 'Forge-mistress',     joined: 'AoY 385', tenure: '27 y', status: 'alive',    stub: false, kind: 'stoneborn' },
    { id: 'olfr',    name: 'Olfr Saltbeard',     role: 'Trade-warden',       joined: 'AoY 390', tenure: '22 y', status: 'alive',    stub: true,  kind: 'stoneborn' },
  ],
  'embertongue-watch':[
    { id: 'sothren',  name: 'Sothren-Who-Reads', role: 'Watch-captain',      joined: 'AoY 401', tenure: '11 y', status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'kraal',    name: 'Kraal',             role: 'Wyrm-namer',         joined: 'AoY 405', tenure: '7 y',  status: 'alive',    stub: false, kind: 'aesir' },
    { id: 'vethren',  name: 'Vethren',           role: 'Sky-scryer',         joined: 'AoY 411', tenure: '1 y',  status: 'alive',    stub: true,  kind: 'aesir' },
  ],
};

// Decorative connection types — these are user-drawn lines on
// the canvas, not derived from frontmatter.
const FX_EDGE_TYPES = {
  'sworn':       { stroke: '#c43a4e', dash: null,    label: 'sworn to',    cap: 'arrow' },
  'reports-to':  { stroke: '#8aa0ab', dash: null,    label: 'reports to',  cap: 'arrow' },
  'mentor':      { stroke: '#c9a227', dash: '5 4',   label: 'mentor of',   cap: 'arrow' },
  'apprentice':  { stroke: '#5fa394', dash: '4 3',   label: 'apprentice',  cap: 'arrow' },
  'rival':       { stroke: '#a07cc8', dash: '2 4',   label: 'rival',       cap: 'none'  },
  'heir':        { stroke: '#b85a2c', dash: null,    label: 'heir of',     cap: 'arrow' },
  'oath-broken': { stroke: '#5a5650', dash: '6 3 2 3', label: 'oath broken', cap: 'none' },
};

// Manually-drawn connection set per faction.
const FX_CONNECTIONS = {
  'iron-crown': [
    { s: 'sigrun',  t: 'bjornar',  type: 'sworn' },
    { s: 'bjornar', t: 'vaerin',   type: 'mentor' },
    { s: 'astrid',  t: 'vaerin',   type: 'apprentice' },
    { s: 'vorthan', t: 'hjalmar',  type: 'reports-to' },
    { s: 'eira',    t: 'hjalmar',  type: 'reports-to' },
    { s: 'helka',   t: 'bjornar',  type: 'heir' },
    { s: 'ulf',     t: 'skaldyrn', type: 'mentor' },
    { s: 'skaldyrn',t: 'bjornar',  type: 'mentor' },
    { s: 'vorthan', t: 'eira',     type: 'rival' },
  ],
  'hornfolke-skalds': [
    { s: 'velka', t: 'old-aenir', type: 'apprentice' },
    { s: 'rune-marit', t: 'old-aenir', type: 'reports-to' },
  ],
  'cult-of-mimir': [
    { s: 'cult-thrain', t: 'oracle-ynla', type: 'reports-to' },
  ],
  'stoneborn-holds':  [
    { s: 'modir', t: 'arnvid', type: 'reports-to' },
    { s: 'olfr',  t: 'arnvid', type: 'reports-to' },
  ],
  'embertongue-watch':[
    { s: 'kraal',   t: 'sothren', type: 'reports-to' },
    { s: 'vethren', t: 'sothren', type: 'reports-to' },
  ],
};

// Manual positions per faction (faction emblem at top center,
// members arranged below in a 5-column roster grid).
const FX_NODE_W = 200;
const FX_NODE_H = 86;
const FX_TRUNK_W = 280;
const FX_TRUNK_H = 130;
const STAGE_W = 1180;
const STAGE_H = 600;
const FX_TRUNK_POS = { x: (STAGE_W - FX_TRUNK_W) / 2, y: 14 };

const FX_POSITIONS = {
  'iron-crown': {
    bjornar:  { x: 480, y: 200 },
    sigrun:   { x: 260, y: 200 },
    vaerin:   { x: 700, y: 200 },
    hjalmar:  { x: 40,  y: 200 },
    skaldyrn: { x: 920, y: 200 },
    helka:    { x: 480, y: 360 },
    vorthan:  { x: 40,  y: 360 },
    eira:     { x: 260, y: 360 },
    astrid:   { x: 700, y: 360 },
    ulf:      { x: 920, y: 360 },
  },
  'hornfolke-skalds': {
    'old-aenir':   { x: 480, y: 200 },
    velka:         { x: 260, y: 200 },
    'old-skaldyrn':{ x: 700, y: 200 },
    'rune-marit':  { x: 480, y: 360 },
  },
  'cult-of-mimir': {
    'oracle-ynla': { x: 480, y: 200 },
    'mimir-mouth': { x: 260, y: 200 },
    'cult-thrain': { x: 700, y: 200 },
  },
  'stoneborn-holds': {
    arnvid: { x: 480, y: 200 },
    modir:  { x: 260, y: 200 },
    olfr:   { x: 700, y: 200 },
  },
  'embertongue-watch': {
    sothren: { x: 480, y: 200 },
    kraal:   { x: 260, y: 200 },
    vethren: { x: 700, y: 200 },
  },
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

  const visibleConns = useMemo(
    () => connections.filter(c => enabledTypes.has(c.type)),
    [connections, enabledTypes]
  );

  // Roles legend (unique roles)
  const roleSet = useMemo(() => Array.from(new Set(members.map(m => m.role))), [members]);

  // Used-edge-types in this faction (filter the legend)
  const usedTypes = useMemo(() => {
    const s = new Set(connections.map(c => c.type));
    return Object.keys(FX_EDGE_TYPES).filter(t => s.has(t));
  }, [connections]);

  function toggleType(id) {
    const next = new Set(enabledTypes);
    if (next.has(id)) next.delete(id); else next.add(id);
    setEnabledTypes(next);
  }

  return (
    <div className="ft fx">
      <div className="ft-split">
        {/* === SIDE ============================================ */}
        <aside className="ft-side fx-side">
          <div className="ft-side-head">
            <h2>Faction tree</h2>
            <span className="mim-eyebrow fx-eye">Tools · Allegiance</span>
          </div>
          <p className="ft-hint">
            One faction at a time. Members are pulled from every character
            whose <em>faction_memberships</em> references this faction.
            Drag between members to draw a connection — type set on release.
          </p>

          {/* Faction switcher */}
          <div className="ft-block">
            <div className="tl-eye">Active faction</div>
            <div className="fx-fac-list">
              {FX_FACTIONS.map(f => {
                const on = f.id === factionId;
                const memberCount = (FX_MEMBERS[f.id] || []).length;
                return (
                  <button key={f.id}
                    className={"fx-fac-row" + (on ? " is-active" : "")}
                    onClick={() => setFactionId(f.id)}>
                    <span className="fx-fac-crest" style={{
                      background: `linear-gradient(135deg, ${f.heraldry.colours[0]} 0%, ${f.heraldry.colours[1]} 100%)`,
                      boxShadow: `inset 0 0 0 1px ${f.heraldry.colours[2] || f.heraldry.colours[0]}`
                    }}>
                      <span className="fx-fac-glyph" style={{ color: f.heraldry.colours[2] || '#d6c9a8' }}>⚔</span>
                    </span>
                    <div className="fx-fac-meta">
                      <span className="fx-fac-name">{f.name}</span>
                      <span className="fx-fac-type">{f.type} · {memberCount}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Heraldry block for active faction */}
          {faction && (
            <div className="fx-heraldry">
              <div className="fx-her-top">
                <span className="tl-eye">Heraldry</span>
                <div className="fx-her-swatches">
                  {faction.heraldry.colours.map((c, i) => (
                    <span key={i} className="fx-her-swatch" style={{ background: c }}/>
                  ))}
                </div>
              </div>
              <p className="fx-her-desc">{faction.heraldry.description}</p>
              <ul className="gt-focus-fields fx-her-fields">
                <li><span>type</span><em>{faction.type}</em></li>
                <li><span>founded</span><em>{faction.founded}</em></li>
                {faction.dissolved && <li><span>dissolved</span><em>{faction.dissolved}</em></li>}
                <li><span>members</span><em>{members.length}</em></li>
              </ul>
              <div className="fx-her-block">
                <span className="tl-eye">Motto</span>
                <p className="fx-her-motto">"{faction.motto}"</p>
              </div>
              <div className="fx-her-block">
                <span className="tl-eye">Purpose</span>
                <p className="fx-her-purpose">{faction.purpose}</p>
              </div>
            </div>
          )}

          {/* Allies / rivals */}
          {(faction.allies.length > 0 || faction.rivals.length > 0) && (
            <div className="ft-block fx-ar">
              {faction.allies.length > 0 && (
                <div className="fx-ar-group">
                  <span className="tl-eye fx-ar-eye fx-ar-ally">Allies</span>
                  <div className="gt-chip-flow">
                    {faction.allies.map(a => <span key={a} className="fx-ally-chip">{a}</span>)}
                  </div>
                </div>
              )}
              {faction.rivals.length > 0 && (
                <div className="fx-ar-group">
                  <span className="tl-eye fx-ar-eye fx-ar-rival">Rivals</span>
                  <div className="gt-chip-flow">
                    {faction.rivals.map(r => <span key={r} className="fx-rival-chip">{r}</span>)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Connection-type legend */}
          <div className="ft-block">
            <div className="tl-eye">Connection types</div>
            <ul className="fx-edge-legend">
              {Object.entries(FX_EDGE_TYPES).map(([id, t]) => {
                const used = usedTypes.includes(id);
                const on = enabledTypes.has(id);
                return (
                  <li key={id}
                      className={"fx-edge-row" + (on ? " is-on" : "") + (used ? "" : " is-unused")}
                      onClick={() => used && toggleType(id)}>
                    <svg width="36" height="10">
                      <line x1="2" y1="5" x2="34" y2="5"
                            stroke={t.stroke} strokeWidth="1.5"
                            strokeDasharray={t.dash || undefined}
                            markerEnd={t.cap === 'arrow' ? `url(#fx-arrow-${id})` : undefined}/>
                      <defs>
                        <marker id={`fx-arrow-${id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill={t.stroke}/>
                        </marker>
                      </defs>
                    </svg>
                    <span className="fx-edge-label">{t.label}</span>
                    {used && (
                      <span className="fx-edge-count">
                        {connections.filter(c => c.type === id).length}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="ft-block ft-settings">
            <div className="tl-eye">View settings</div>
            <label className="ft-toggle">
              <input type="checkbox" checked={showStubsOnly} onChange={e => setShowStubsOnly(e.target.checked)}/>
              <span>Highlight stub members only.</span>
            </label>
          </div>

          <div className="ft-stats">
            {members.length} members · {visibleConns.length} connections
          </div>
          <button className="ft-reset">Reset layout</button>
        </aside>

        {/* === CANVAS ========================================== */}
        <div className="ft-canvas-wrap">
          <div className="ft-canvas-bar">
            <span className="fx-bar-title">
              <span className="fx-bar-glyph">⚔</span>{faction.name}
            </span>
            <span className="fx-bar-meta">{faction.type} · {faction.founded}</span>
            <span className="gt-bar-spacer"/>
            <div className="ft-zoom">
              <button onClick={() => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(2)))}>−</button>
              <span>{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(1.5, +(z + 0.1).toFixed(2)))}>+</button>
              <button className="tl-chip" onClick={() => setZoom(0.85)}>fit</button>
            </div>
          </div>

          <div className="ft-canvas" data-screen-label="13 Faction tree">
            <svg className="ft-bg" width="100%" height="100%">
              <defs>
                <pattern id="fx-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(196,58,78,0.07)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#fx-dots)"/>
            </svg>

            <div className="ft-stage fx-stage" style={{ transform: `scale(${zoom})`, transformOrigin: '0 0', width: STAGE_W, height: STAGE_H }}>
              {/* Decorative connection edges */}
              <svg className="ft-edges" width={STAGE_W} height={STAGE_H} style={{ overflow: 'visible' }}>
                <defs>
                  {Object.entries(FX_EDGE_TYPES).map(([id, t]) => (
                    <marker key={id} id={`fx-edge-arrow-${id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill={t.stroke}/>
                    </marker>
                  ))}
                </defs>
                {visibleConns.map((c, i) => {
                  const a = positions[c.s]; const b = positions[c.t];
                  if (!a || !b) return null;
                  const type = FX_EDGE_TYPES[c.type];
                  // Quadratic curve between member centers — gives the
                  // canvas the "hand-drawn relationship sketch" feel.
                  const x1 = a.x + FX_NODE_W / 2;
                  const y1 = a.y + FX_NODE_H / 2;
                  const x2 = b.x + FX_NODE_W / 2;
                  const y2 = b.y + FX_NODE_H / 2;
                  const dx = x2 - x1, dy = y2 - y1;
                  // small offset perpendicular to the direct line for a subtle curve
                  const len = Math.sqrt(dx * dx + dy * dy) || 1;
                  const off = Math.min(40, len * 0.12) * (i % 2 === 0 ? 1 : -1);
                  const cx = (x1 + x2) / 2 + (-dy / len) * off;
                  const cy = (y1 + y2) / 2 + (dx / len) * off;
                  const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
                  const isHovered = hoveredEdge === i;
                  return (
                    <g key={i} className="fx-edge"
                       onMouseEnter={() => setHoveredEdge(i)}
                       onMouseLeave={() => setHoveredEdge(null)}>
                      {/* hit-target */}
                      <path d={d} stroke="transparent" strokeWidth="14" fill="none" style={{ pointerEvents: 'stroke' }}/>
                      <path d={d}
                            stroke={type.stroke}
                            strokeWidth={isHovered ? 2.25 : 1.4}
                            strokeDasharray={type.dash || undefined}
                            opacity={isHovered ? 1 : 0.85}
                            fill="none"
                            markerEnd={type.cap === 'arrow' ? `url(#fx-edge-arrow-${c.type})` : undefined}/>
                      <text x={cx} y={cy - 4} textAnchor="middle"
                            fill={type.stroke}
                            opacity={isHovered ? 1 : 0.65}
                            fontSize="10.5"
                            fontFamily="var(--font-sans)" fontStyle="italic">
                        {type.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Faction emblem — trunk node at top center */}
              <div className="fx-trunk"
                   style={{
                     left: FX_TRUNK_POS.x, top: FX_TRUNK_POS.y,
                     width: FX_TRUNK_W, height: FX_TRUNK_H,
                     background: `linear-gradient(180deg, rgba(196,58,78,0.10) 0%, rgba(20,16,13,0.0) 100%)`,
                     borderColor: faction.heraldry.colours[0],
                   }}>
                <div className="fx-trunk-crest" style={{
                  background: `linear-gradient(135deg, ${faction.heraldry.colours[0]} 0%, ${faction.heraldry.colours[1]} 100%)`,
                  boxShadow: `inset 0 0 0 1px ${faction.heraldry.colours[2] || faction.heraldry.colours[0]}, 0 2px 8px rgba(0,0,0,0.5)`,
                }}>
                  <span style={{ color: faction.heraldry.colours[2] || '#d6c9a8' }}>⚔</span>
                </div>
                <div className="fx-trunk-body">
                  <span className="fx-trunk-name">{faction.name}</span>
                  <span className="fx-trunk-type">{faction.type} · founded {faction.founded}</span>
                  <span className="fx-trunk-motto">"{faction.motto}"</span>
                </div>
              </div>

              {/* Member nodes */}
              {members.map(m => {
                const p = positions[m.id]; if (!p) return null;
                const dim = showStubsOnly && !m.stub;
                const isDeceased = m.status === 'deceased';
                return (
                  <div key={m.id}
                       className={"ft-node fx-node"
                         + (m.stub ? " is-stub" : "")
                         + (isDeceased ? " fx-deceased" : "")
                         + (dim ? " fx-dimmed" : "")}
                       style={{ left: p.x, top: p.y, width: FX_NODE_W, height: FX_NODE_H }}>
                    <span className="ft-handle ft-h-top"/>
                    <span className="ft-handle ft-h-right"/>
                    <span className="ft-handle ft-h-bottom"/>
                    <span className="ft-handle ft-h-left"/>
                    <div className="ft-node-row fx-name-row">
                      <span className="fx-node-glyph">⚔</span>
                      <span className="ft-node-name">{m.name}</span>
                      {m.stub && <span className="gt-stub-pulse" title="Stub member"/>}
                      {isDeceased && <span className="fx-dagger" title="Deceased">†</span>}
                    </div>
                    <div className="fx-role">{m.role}</div>
                    <div className="ft-node-meta fx-meta">joined {m.joined} · {m.tenure}</div>
                  </div>
                );
              })}
            </div>

            {/* Bottom-right legend recap */}
            <div className="fx-canvas-legend">
              <span className="mim-eyebrow">Reading the lines</span>
              <span className="fx-cl-row">Hover an edge to highlight · Alt-click to remove · Right-click to retype</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.FactionTree = FactionTree;
