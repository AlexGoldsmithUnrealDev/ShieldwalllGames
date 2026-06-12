/* global React */
/*
 * GenusTree — /tree/genus route.
 *
 * Species/lineage tree. Single-parent hierarchy (every species
 * has at most one `parent_species`) plus optional `related_species`
 * cross-links rendered as dashed connectors. Visual chrome reuses
 * .ft-* classes from the family tree so the two graphs read as
 * siblings, but a `.gt` wrapper retunes the accent palette to
 * teal (matches ENTRY_COLORS.species in the real codebase) so
 * species and characters never get confused.
 *
 * Anatomy:
 *
 *   ┌──── side ─────────┬──── canvas ────────────────────────────┐
 *   │ Focus chooser     │  [focused] [show all]   zoom · fit     │
 *   │ Status filter     │ ┌──────────────────────────────────┐   │
 *   │ Realm filter      │ │  cladogram of species cards      │   │
 *   │ Focused species   │ │  · solid edges = parent_species  │   │
 *   │   detail card     │ │  · dashed edges = related        │   │
 *   │ Edge cheatsheet   │ └──────────────────────────────────┘   │
 *   └───────────────────┴────────────────────────────────────────┘
 *
 * Data shape mirrors the lorebible's SpeciesEntry: id, name,
 * parent (single), biology { diet, habitat, lifespan }, status,
 * abilities[], notable individuals[], cultures_associated[],
 * stub flag.
 */

const { useState, useMemo } = React;

// ─── Sample species — Shieldwall Saga vocabulary ────────────────
const GT_SPECIES = [
  // Mannkind clade
  { id: 'mannkind',   name: 'Mannkind',         parent: null,         status: 'extant',   diet: 'omnivore',  habitat: 'wide-ranging',     lifespan: '70–90 y',   pop: '9 cultures',     stub: false, abilities: ['speech', 'tool-use'],                       notable: ['Bjornar', 'Sigrun'],     cultures: ['Hornfolke', 'Iron Crown', 'Alba'] },
  { id: 'hornfolke',  name: 'Hornfolke',        parent: 'mannkind',   status: 'extant',   diet: 'omnivore',  habitat: 'northern fells',   lifespan: '70 y',      pop: 'common',          stub: false, abilities: ['rune-binding', 'horn-call'],                notable: ['Vaerin', 'Hjalmar'],     cultures: ['Hornfolke'] },
  { id: 'ironcrown',  name: 'Iron-Crown stock', parent: 'mannkind',   status: 'extant',   diet: 'omnivore',  habitat: 'lowlands',         lifespan: '65 y',      pop: 'common',          stub: false, abilities: ['steel-craft', 'shieldwall'],                notable: ['Bjornar'],               cultures: ['Iron Crown'] },
  { id: 'stoneborn',  name: 'Stoneborn',        parent: 'mannkind',   status: 'extant',   diet: 'omnivore',  habitat: 'mountain holds',   lifespan: '95 y',      pop: 'rare',            stub: true,  abilities: ['stone-shaping'],                            notable: [],                        cultures: ['Stoneborn'] },

  // Jötnarkind clade
  { id: 'jotnarkind', name: 'Jötnarkind',       parent: null,         status: 'extant',   diet: 'omnivore',  habitat: 'world-periphery',  lifespan: '300+ y',    pop: '3 lineages',     stub: false, abilities: ['cold-resist', 'glamour'],                   notable: ['Bestla', 'Jörð'],        cultures: ['Niflheim', 'Muspell'] },
  { id: 'frost-jot',  name: 'Frost-jötnar',     parent: 'jotnarkind', status: 'extant',   diet: 'omnivore',  habitat: 'Niflheim',         lifespan: '400 y',     pop: 'many',           stub: false, abilities: ['ice-shaping', 'long-stride'],               notable: ['Bestla'],                cultures: ['Niflheim'] },
  { id: 'fire-jot',   name: 'Fire-jötnar',      parent: 'jotnarkind', status: 'extant',   diet: 'carnivore', habitat: 'Muspell',          lifespan: '500 y',     pop: 'few',            stub: false, abilities: ['flame-skin', 'forge-song'],                 notable: ['Surtr'],                 cultures: ['Muspell'] },
  { id: 'stone-jot',  name: 'Stone-jötnar',     parent: 'jotnarkind', status: 'extant',   diet: 'lithovore', habitat: 'deep mountain',    lifespan: 'unknown',   pop: 'rumoured',       stub: true,  abilities: ['petrify-touch'],                            notable: [],                        cultures: [] },

  // Drakenthar clade (focused)
  { id: 'drakenthar', name: 'Drakenthar',       parent: null,         status: 'extant',   diet: 'carnivore', habitat: 'untracked sky',    lifespan: '1000+ y',   pop: '4 known greatwyrms', stub: false, abilities: ['flight', 'High Speech', 'fire-breath'],      notable: ['Vaethran the Ulgor'],    cultures: [] },
  { id: 'frostwyrm',  name: 'Frostwyrm',        parent: 'drakenthar', status: 'extant',   diet: 'carnivore', habitat: 'glacial ridges',   lifespan: '900 y',     pop: '3 known',        stub: false, abilities: ['frost-breath', 'storm-call'],               notable: ['Kovrael'],               cultures: [] },
  { id: 'embertongue',name: 'Embertongue',      parent: 'drakenthar', status: 'extant',   diet: 'carnivore', habitat: 'caldera',          lifespan: '1100 y',    pop: '2 known',        stub: false, abilities: ['lava-breath', 'oath-tongue'],               notable: ['Sothren'],               cultures: [] },
  { id: 'voidwyrm',   name: 'Voidwyrm',         parent: 'drakenthar', status: 'mythic',   diet: 'unknown',   habitat: 'between',          lifespan: 'eternal?',  pop: 'unknown',        stub: false, abilities: ['Void Speech', 'unmake'],                    notable: [],                        cultures: [] },
  { id: 'sundrake',   name: 'Sun-drake',        parent: 'drakenthar', status: 'extinct',  diet: 'carnivore', habitat: 'Alba uplands',     lifespan: '—',         pop: 'last seen Y198', stub: false, abilities: ['sun-flare'],                                notable: ['Helka the Last'],        cultures: ['Alba'] },

  // Wolfkind clade
  { id: 'wolfkind',   name: 'Wolfkind',         parent: null,         status: 'extant',   diet: 'carnivore', habitat: 'wildlands',        lifespan: '12 y',      pop: 'common',         stub: false, abilities: ['pack-bond', 'tracking'],                    notable: [],                        cultures: [] },
  { id: 'hearthound', name: 'Hearthound',       parent: 'wolfkind',   status: 'extant',   diet: 'carnivore', habitat: 'settlements',      lifespan: '14 y',      pop: 'common',         stub: false, abilities: ['rune-sniff', 'hearth-bond'],                notable: ['Hodr-of-Anvil'],         cultures: ['Hornfolke', 'Iron Crown'] },
  { id: 'icewolf',    name: 'Ice-wolf',         parent: 'wolfkind',   status: 'extant',   diet: 'carnivore', habitat: 'tundra',           lifespan: '10 y',      pop: 'common',         stub: false, abilities: ['cold-resist'],                              notable: [],                        cultures: [] },
  { id: 'skollwolf',  name: 'Skoll-wolf',       parent: 'wolfkind',   status: 'mythic',   diet: 'carnivore', habitat: 'prophecy',         lifespan: 'foretold',  pop: '1 (foretold)',   stub: true,  abilities: ['sun-eater'],                                notable: [],                        cultures: [] },
];

// Related-species cross-links (dashed). Distinct from parent edges.
const GT_RELATED = [
  { s: 'frostwyrm',  t: 'embertongue', label: 'rival-brood' },
  { s: 'hearthound', t: 'icewolf',     label: 'crossbreeds' },
  { s: 'voidwyrm',   t: 'skollwolf',   label: 'prophesied to meet' },
];

// ─── Layout — 2×2 forest, manually positioned ───────────────────
const GT_NODE_W = 200;
const GT_NODE_H = 100;
const GT_POS = {
  // Top-left clade — Mannkind
  mannkind:   { x: 120,  y: 30  },
  hornfolke:  { x: -20,  y: 220 },
  ironcrown:  { x: 200,  y: 220 },
  stoneborn:  { x: 420,  y: 220 },
  // Top-right clade — Jötnarkind
  jotnarkind: { x: 860,  y: 30  },
  'frost-jot': { x: 720, y: 220 },
  'fire-jot':  { x: 940, y: 220 },
  'stone-jot': { x: 1160,y: 220 },
  // Bottom-left clade — Drakenthar (focused)
  drakenthar: { x: 240,  y: 470 },
  frostwyrm:  { x: -20,  y: 660 },
  embertongue:{ x: 200,  y: 660 },
  voidwyrm:   { x: 420,  y: 660 },
  sundrake:   { x: 640,  y: 660 },
  // Bottom-right clade — Wolfkind
  wolfkind:   { x: 980,  y: 470 },
  hearthound: { x: 820,  y: 660 },
  icewolf:    { x: 1040, y: 660 },
  skollwolf:  { x: 1260, y: 660 },
};

// Status colors — picks border / dot per species. Teal is the
// species accent (matches Lorekeeper ENTRY_COLORS.species).
const GT_STATUS = {
  extant:   { dot: '#5fa394', label: 'extant',   border: '#5fa394' },
  mythic:   { dot: '#a07cc8', label: 'mythic',   border: '#a07cc8' },
  extinct:  { dot: '#8d8478', label: 'extinct',  border: '#5a5650' },
  endangered: { dot: '#c43a4e', label: 'endangered', border: '#c43a4e' },
};

const GT_REALMS = ['Mannkind', 'Jötnarkind', 'Drakenthar', 'Wolfkind'];
const GT_REALM_OF = {
  mannkind: 'Mannkind', hornfolke: 'Mannkind', ironcrown: 'Mannkind', stoneborn: 'Mannkind',
  jotnarkind: 'Jötnarkind', 'frost-jot': 'Jötnarkind', 'fire-jot': 'Jötnarkind', 'stone-jot': 'Jötnarkind',
  drakenthar: 'Drakenthar', frostwyrm: 'Drakenthar', embertongue: 'Drakenthar', voidwyrm: 'Drakenthar', sundrake: 'Drakenthar',
  wolfkind: 'Wolfkind', hearthound: 'Wolfkind', icewolf: 'Wolfkind', skollwolf: 'Wolfkind',
};

// ─── Component ──────────────────────────────────────────────────
function GenusTree() {
  const [mode, setMode] = useState('show-all');           // 'focused' | 'show-all'
  const [focusId, setFocusId] = useState('drakenthar');
  const [statusFilter, setStatusFilter] = useState(new Set(['extant', 'mythic', 'extinct', 'endangered']));
  const [realmFilter,  setRealmFilter]  = useState(new Set(GT_REALMS));
  const [zoom, setZoom] = useState(0.85);
  const [showRelated, setShowRelated] = useState(true);

  const focused = GT_SPECIES.find(s => s.id === focusId);

  // Visible set — applies focus walk OR show-all + filters.
  const visibleSet = useMemo(() => {
    const idSet = new Set();
    for (const s of GT_SPECIES) {
      if (!statusFilter.has(s.status)) continue;
      if (!realmFilter.has(GT_REALM_OF[s.id])) continue;
      idSet.add(s.id);
    }
    if (mode === 'focused' && focusId) {
      // Walk ancestors + descendants + siblings (matches genusData.ts).
      const focusReach = new Set([focusId]);
      // ancestors
      let cur = focusId;
      for (let i = 0; i < 50 && cur; i++) {
        const node = GT_SPECIES.find(s => s.id === cur);
        if (!node?.parent) break;
        if (focusReach.has(node.parent)) break;
        focusReach.add(node.parent);
        cur = node.parent;
      }
      // descendants (BFS)
      const queue = [focusId];
      while (queue.length) {
        const next = queue.shift();
        for (const s of GT_SPECIES) if (s.parent === next && !focusReach.has(s.id)) { focusReach.add(s.id); queue.push(s.id); }
      }
      // siblings of focus
      const focusNode = GT_SPECIES.find(s => s.id === focusId);
      if (focusNode?.parent) {
        for (const s of GT_SPECIES) if (s.parent === focusNode.parent) focusReach.add(s.id);
      }
      const out = new Set();
      for (const id of focusReach) if (idSet.has(id)) out.add(id);
      return out;
    }
    return idSet;
  }, [mode, focusId, statusFilter, realmFilter]);

  function toggleSet(set, setter, key) {
    const next = new Set(set);
    if (next.has(key)) next.delete(key); else next.add(key);
    setter(next);
  }

  // Counts for filter chips.
  const statusCounts = useMemo(() => {
    const m = {};
    for (const s of GT_SPECIES) m[s.status] = (m[s.status] || 0) + 1;
    return m;
  }, []);

  const visibleEdges = useMemo(() => {
    const out = [];
    for (const s of GT_SPECIES) {
      if (!s.parent) continue;
      if (!visibleSet.has(s.id) || !visibleSet.has(s.parent)) continue;
      out.push({ s: s.parent, t: s.id, type: 'parent' });
    }
    if (showRelated) {
      for (const e of GT_RELATED) {
        if (!visibleSet.has(e.s) || !visibleSet.has(e.t)) continue;
        out.push({ s: e.s, t: e.t, type: 'related', label: e.label });
      }
    }
    return out;
  }, [visibleSet, showRelated]);

  return (
    <div className="ft gt">
      <div className="ft-split">
        {/* === SIDE ============================================ */}
        <aside className="ft-side gt-side">
          <div className="ft-side-head">
            <h2>Genus tree</h2>
            <span className="mim-eyebrow gt-eye">Tools · Lineage</span>
          </div>
          <p className="ft-hint">
            Single-parent hierarchy. Drag from a species' bottom handle
            into another's top handle to set <em>parent_species</em>.
            Side handles add a <em>related_species</em> cross-link.
          </p>

          {/* Focused species detail */}
          {focused && (
            <div className="gt-focus-card">
              <div className="gt-focus-top">
                <span className="gt-focus-dot" style={{ background: GT_STATUS[focused.status].dot }}/>
                <div className="gt-focus-name">
                  <span>{focused.name}</span>
                  <span className="gt-focus-rank">{focused.parent ? 'species' : 'clade'}</span>
                </div>
                {focused.stub && <span className="gt-stub-pulse" title="Stub entry"/>}
              </div>
              <ul className="gt-focus-fields">
                <li><span>diet</span><em>{focused.diet}</em></li>
                <li><span>habitat</span><em>{focused.habitat}</em></li>
                <li><span>lifespan</span><em>{focused.lifespan}</em></li>
                <li><span>population</span><em>{focused.pop}</em></li>
                <li><span>status</span><em>{GT_STATUS[focused.status].label}</em></li>
              </ul>
              {focused.abilities.length > 0 && (
                <div className="gt-focus-block">
                  <span className="tl-eye">Abilities</span>
                  <div className="gt-chip-flow">
                    {focused.abilities.map(a => <span key={a} className="gt-ability">{a}</span>)}
                  </div>
                </div>
              )}
              {focused.notable.length > 0 && (
                <div className="gt-focus-block">
                  <span className="tl-eye">Notable individuals</span>
                  <ul className="gt-notable">
                    {focused.notable.map(n => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              )}
              {focused.cultures.length > 0 && (
                <div className="gt-focus-block">
                  <span className="tl-eye">Cultures associated</span>
                  <div className="gt-chip-flow">
                    {focused.cultures.map(c => <span key={c} className="gt-culture">{c}</span>)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Status filter */}
          <div className="ft-block">
            <div className="tl-eye">Status</div>
            <div className="ft-chiprow">
              {Object.entries(GT_STATUS).map(([id, s]) => {
                const on = statusFilter.has(id);
                const n = statusCounts[id] || 0;
                return (
                  <button key={id}
                    className={"ft-chip gt-status-chip" + (on ? " is-on" : "")}
                    onClick={() => toggleSet(statusFilter, setStatusFilter, id)}>
                    <span className="gt-chip-dot" style={{ background: s.dot }}/>
                    {s.label}<span className="gt-chip-count">{n}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Realm filter */}
          <div className="ft-block">
            <div className="tl-eye">Clade</div>
            <div className="ft-chiprow">
              {GT_REALMS.map(r => {
                const on = realmFilter.has(r);
                return (
                  <button key={r}
                    className={"ft-chip" + (on ? " is-on" : "")}
                    onClick={() => toggleSet(realmFilter, setRealmFilter, r)}>
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="ft-block ft-settings">
            <div className="tl-eye">Tree settings</div>
            <label className="ft-toggle">
              <input type="checkbox" checked={showRelated} onChange={e => setShowRelated(e.target.checked)}/>
              <span>Show <em>related_species</em> cross-links.</span>
            </label>
          </div>

          <div className="ft-block ft-cheat">
            <div className="tl-eye">Connector cheatsheet</div>
            <ul>
              <li><kbd>↓</kbd> bottom → child (parent_species)</li>
              <li><kbd>↑</kbd> top → parent</li>
              <li><kbd>← →</kbd> sides → related (dashed)</li>
              <li><kbd>Alt</kbd>+click line — remove</li>
            </ul>
          </div>

          <div className="ft-stats">
            {visibleSet.size}/{GT_SPECIES.length} visible · {visibleEdges.filter(e => e.type === 'parent').length} hierarchy
            {showRelated && <> · {visibleEdges.filter(e => e.type === 'related').length} related</>}
          </div>
          <button className="ft-reset">Reset layout</button>
        </aside>

        {/* === CANVAS ========================================== */}
        <div className="ft-canvas-wrap">
          <div className="ft-canvas-bar">
            <div className="ft-mode">
              <button className={"tl-chip" + (mode === 'focused' ? " is-active" : "")}
                      onClick={() => setMode('focused')}>focused</button>
              <button className={"tl-chip" + (mode === 'show-all' ? " is-active" : "")}
                      onClick={() => setMode('show-all')}>show all</button>
            </div>
            <span className="gt-bar-spacer"/>
            <div className="ft-zoom">
              <button onClick={() => setZoom(z => Math.max(0.4, +(z - 0.1).toFixed(2)))}>−</button>
              <span>{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(1.5, +(z + 0.1).toFixed(2)))}>+</button>
              <button className="tl-chip" onClick={() => setZoom(0.85)}>fit</button>
            </div>
          </div>

          <div className="ft-canvas" data-screen-label="12 Genus tree">
            <svg className="ft-bg" width="100%" height="100%">
              <defs>
                <pattern id="gt-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(95,163,148,0.07)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gt-dots)"/>
            </svg>

            <div className="ft-stage gt-stage" style={{ transform: `scale(${zoom})`, transformOrigin: '0 0' }}>
              <svg className="ft-edges" width="1500" height="800" style={{ overflow: 'visible' }}>
                <defs>
                  <marker id="gt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#5fa394"/>
                  </marker>
                </defs>
                {visibleEdges.map(e => {
                  const a = GT_POS[e.s]; const b = GT_POS[e.t];
                  if (!a || !b) return null;
                  if (e.type === 'parent') {
                    const x1 = a.x + GT_NODE_W / 2;
                    const y1 = a.y + GT_NODE_H;
                    const x2 = b.x + GT_NODE_W / 2;
                    const y2 = b.y;
                    const midY = (y1 + y2) / 2;
                    const d = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
                    return (
                      <path key={e.s + '-' + e.t} d={d} stroke="#5fa394" strokeWidth="1.5"
                            fill="none" markerEnd="url(#gt-arrow)"/>
                    );
                  }
                  // related: a soft curve between centers
                  const x1 = a.x + GT_NODE_W / 2;
                  const y1 = a.y + GT_NODE_H / 2;
                  const x2 = b.x + GT_NODE_W / 2;
                  const y2 = b.y + GT_NODE_H / 2;
                  const dx = (x2 - x1);
                  const dy = (y2 - y1);
                  const cx = (x1 + x2) / 2 + dy * 0.15;
                  const cy = (y1 + y2) / 2 - dx * 0.15;
                  const d = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
                  return (
                    <g key={e.s + '-' + e.t} className="gt-edge-related">
                      <path d={d} stroke="#8aa0ab" strokeWidth="1.25"
                            strokeDasharray="4 4" fill="none" opacity="0.85"/>
                      <text x={cx} y={cy - 4} textAnchor="middle"
                            fill="#8aa0ab" fontSize="10"
                            fontFamily="var(--font-sans)" fontStyle="italic">
                        {e.label}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {GT_SPECIES.map(s => {
                const p = GT_POS[s.id]; if (!p) return null;
                const visible = visibleSet.has(s.id);
                const isFocus = s.id === focusId;
                const isRoot = s.parent == null;
                const status = GT_STATUS[s.status];
                const className = "ft-node gt-node"
                  + (isFocus ? " is-focus" : "")
                  + (s.stub ? " is-stub" : "")
                  + (isRoot ? " gt-root" : "")
                  + (!visible ? " gt-dimmed" : "");
                return (
                  <div key={s.id} className={className}
                       style={{
                         left: p.x, top: p.y,
                         width: GT_NODE_W, height: GT_NODE_H,
                         borderColor: isFocus ? '#5fa394' : status.border,
                       }}
                       onClick={() => setFocusId(s.id)}>
                    <span className="ft-handle ft-h-top"/>
                    <span className="ft-handle ft-h-right"/>
                    <span className="ft-handle ft-h-bottom"/>
                    <span className="ft-handle ft-h-left"/>

                    <div className="ft-node-row">
                      <span className="gt-rank-dot" style={{ background: status.dot }}/>
                      <span className="ft-node-name">{s.name}</span>
                      {s.stub && <span className="gt-stub-pulse" title="Stub"/>}
                      {s.status === 'extinct' && <span className="gt-extinct" title="Extinct">†</span>}
                      {s.status === 'mythic' && <span className="gt-mythic" title="Mythic / unconfirmed">✶</span>}
                    </div>
                    <div className="gt-class-line">
                      {s.diet} · {s.habitat}
                    </div>
                    <div className="ft-node-meta gt-meta">
                      {isRoot ? 'clade · ' : 'sp · '}{s.pop}
                    </div>
                    <a className="ft-node-open" onClick={e => e.preventDefault()}>open editor</a>
                  </div>
                );
              })}
            </div>

            {/* Minimap (top-right) */}
            <div className="ft-minimap">
              <div className="ft-mm-eye">map</div>
              <svg viewBox="0 0 220 160" width="100%" height="100%">
                {visibleEdges.filter(e => e.type === 'parent').map(e => {
                  const a = GT_POS[e.s]; const b = GT_POS[e.t];
                  if (!a || !b) return null;
                  return <line key={e.s + e.t}
                               x1={a.x / 7 + 12} y1={a.y / 6 + 10}
                               x2={b.x / 7 + 12} y2={b.y / 6 + 10}
                               stroke="rgba(95,163,148,0.45)" strokeWidth="0.6"/>;
                })}
                {GT_SPECIES.map(s => {
                  const p = GT_POS[s.id]; if (!p) return null;
                  const visible = visibleSet.has(s.id);
                  return <rect key={s.id}
                               x={p.x / 7 + 8} y={p.y / 6 + 7}
                               width="9" height="6" rx="1"
                               fill={s.id === focusId ? '#b85a2c' : (visible ? GT_STATUS[s.status].dot : '#3a3530')}
                               opacity={visible ? 1 : 0.4}/>;
                })}
                <rect x="6" y="6" width="76" height="56" fill="none" stroke="rgba(184,90,44,0.7)" strokeWidth="1"/>
              </svg>
            </div>

            {/* Legend (bottom-left) */}
            <div className="gt-legend">
              <span className="mim-eyebrow">Edges</span>
              <div className="gt-leg-row">
                <svg width="32" height="10"><line x1="2" y1="5" x2="30" y2="5" stroke="#5fa394" strokeWidth="1.5"/></svg>
                <span>parent_species</span>
              </div>
              <div className="gt-leg-row">
                <svg width="32" height="10"><line x1="2" y1="5" x2="30" y2="5" stroke="#8aa0ab" strokeWidth="1.25" strokeDasharray="4 3"/></svg>
                <span>related_species</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.GenusTree = GenusTree;
