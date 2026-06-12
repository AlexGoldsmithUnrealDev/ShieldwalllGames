/* global React */
/*
 * RelationshipsWeb — /relationships route.
 *
 * The HEAVY tree. Force-directed graph of every typed relationship
 * across the world. Mirrors the real route's architecture
 * (src/routes/Relationships.tsx + Phase A item 7-5+ engine):
 *
 *   • Pure force layout — k/d² repulsion + spring attraction + a
 *     gentle center pull. Runs once at mount on the FULL dataset
 *     so layout stays stable across filter changes (filters dim,
 *     don't relayout).
 *
 *   • Three render layers, all togglable:
 *       - TYPED       — relationship edges (per-type colour;
 *                       width tracks |score|).
 *       - KINSHIP     — family edges walked from character
 *                       relationships[] (muted dashed grey).
 *       - WIKI-LINKS  — frontmatter + body wiki-link cross-refs
 *                       (faint grey, very thin).
 *
 *   • Filter pipeline (matches relationshipsFilters.ts):
 *       applyEdgeFilters → applyNodeFilters → applyFocus.
 *       - type ids (per-edge)
 *       - score min/max
 *       - entity type (Character / Faction / Place / Culture /
 *         Species)
 *       - tags
 *       - focus anchor (1-hop, then 2-hop subgraph)
 *
 *   • View-mode toggle: GRAPH (default) ↔ MATRIX (read-only
 *     entities × entities table with type-colour cells +
 *     score text; matches sub-stage 7-6d).
 */

const { useState, useMemo, useRef, useEffect, useCallback } = React;

// ─── Relationship type catalogue (14 bundled defaults) ──────────
const RW_TYPES = [
  // political (warm reds + greens)
  { id: 'allied',         label: 'Allied',         category: 'political',    color: '#5fa394', bias: '+' },
  { id: 'at-war',         label: 'At war',         category: 'political',    color: '#c43a4e', bias: '−' },
  { id: 'trade-partner',  label: 'Trade partner',  category: 'political',    color: '#7da265', bias: '+' },
  { id: 'neutral',        label: 'Neutral',        category: 'political',    color: '#8aa0ab', bias: '·' },
  // organisational (yellows / golds)
  { id: 'sworn-to',       label: 'Sworn to',       category: 'organisational', color: '#c9a227', bias: '+' },
  { id: 'liege-of',       label: 'Liege of',       category: 'organisational', color: '#b87f10', bias: '+' },
  { id: 'vassal',         label: 'Vassal of',      category: 'organisational', color: '#d6b35a', bias: '+' },
  // personal (warm oranges)
  { id: 'friendship',     label: 'Friendship',     category: 'personal',     color: '#d99366', bias: '+' },
  { id: 'lover',          label: 'Lover',          category: 'personal',     color: '#e58da0', bias: '+' },
  { id: 'mentor',         label: 'Mentor of',      category: 'personal',     color: '#a07cc8', bias: '+' },
  { id: 'apprentice',     label: 'Apprentice of',  category: 'personal',     color: '#8a6cad', bias: '+' },
  { id: 'rivalry',        label: 'Rivalry',        category: 'personal',     color: '#b85a2c', bias: '−' },
  // ideological (cold)
  { id: 'enemy',          label: 'Enemy',          category: 'ideological',  color: '#902434', bias: '−' },
  { id: 'oath-broken',    label: 'Oath broken',    category: 'ideological',  color: '#5a5650', bias: '−' },
];
const RW_TYPE_MAP = Object.fromEntries(RW_TYPES.map(t => [t.id, t]));
const RW_CATEGORIES = ['political', 'organisational', 'personal', 'ideological'];

// ─── Entity-type palette ────────────────────────────────────────
const RW_ENTITY_PALETTE = {
  character: { color: '#d99366', label: 'Character' },
  faction:   { color: '#c43a4e', label: 'Faction'   },
  place:     { color: '#7da265', label: 'Place'     },
  culture:   { color: '#a07cc8', label: 'Culture'   },
  species:   { color: '#5fa394', label: 'Species'   },
  event:     { color: '#8d8478', label: 'Event'     },
};

// ─── Nodes (mixed entity types, Shieldwall vocabulary) ──────────
const RW_NODES = [
  // Characters
  { id: 'bjornar',    name: 'Bjornar',       type: 'character', tags: ['royal', 'iron-crown'],            stub: false, desc: 'King of the Iron Crown.' },
  { id: 'sigrun',     name: 'Sigrun',        type: 'character', tags: ['shield-bearer', 'iron-crown'],    stub: false, desc: 'Sworn shield-bearer.' },
  { id: 'vaerin',     name: 'Vaerin',        type: 'character', tags: ['counsel', 'iron-crown'],          stub: false, desc: 'Crown counsellor.' },
  { id: 'hjalmar',    name: 'Hjalmar',       type: 'character', tags: ['military', 'iron-crown'],         stub: false, desc: 'Marshal of the Wall.' },
  { id: 'skaldyrn',   name: 'Skaldyrn',      type: 'character', tags: ['skald', 'deceased'],              stub: false, desc: 'The crown-skald, deceased.' },
  { id: 'ynla',       name: 'Ynla',          type: 'character', tags: ['cult', 'oracle'],                 stub: false, desc: 'Oracle of the Well.' },
  { id: 'thrain',     name: 'Thrain',        type: 'character', tags: ['cult', 'bone-priest'],            stub: false, desc: 'Bone-priest of Mimir.' },
  { id: 'sothren',    name: 'Sothren',       type: 'character', tags: ['watch', 'embertongue'],           stub: false, desc: 'Watch-captain.' },
  { id: 'helka',      name: 'Helka',         type: 'character', tags: ['royal', 'iron-crown', 'heir'],    stub: true,  desc: 'Heir-apparent.' },
  { id: 'vethren',    name: 'Vethren',       type: 'character', tags: ['watch', 'sky-scryer'],            stub: true,  desc: 'Sky-scryer apprentice.' },

  // Factions
  { id: 'iron-crown', name: 'Iron Crown',         type: 'faction',  tags: ['noble-house', 'iron-crown'],  stub: false, desc: 'Noble house holding the shieldwall.' },
  { id: 'cult-mimir', name: 'Cult of Mimir',      type: 'faction',  tags: ['cult', 'void'],               stub: false, desc: 'Wellhead cult.' },
  { id: 'skalds',     name: 'Hornfolke Skalds',   type: 'faction',  tags: ['guild', 'lore'],              stub: false, desc: 'Chronicler-poets.' },
  { id: 'watch',      name: 'Embertongue Watch',  type: 'faction',  tags: ['order', 'dragon'],            stub: false, desc: 'Wyrm-trackers.' },
  { id: 'stoneborn',  name: 'Stoneborn Holds',    type: 'faction',  tags: ['clan', 'mountain'],           stub: false, desc: 'Mountain clan.' },

  // Places
  { id: 'hearthstead',name: 'Hearthstead',        type: 'place',    tags: ['seat', 'iron-crown'],         stub: false, desc: 'Crown seat-of-power.' },
  { id: 'well',       name: 'The Well',           type: 'place',    tags: ['sacred', 'mimir'],            stub: false, desc: "Mimir's wellhead." },
  { id: 'frostholm',  name: 'Frostholm',          type: 'place',    tags: ['fortress', 'border'],         stub: true,  desc: 'Frontier fortress.' },
  { id: 'bryn-hollow',name: 'Bryn Hollow',        type: 'place',    tags: ['battleground'],               stub: false, desc: 'Recent battleground.' },

  // Cultures
  { id: 'hornfolke',  name: 'Hornfolke',          type: 'culture',  tags: ['northern'],                   stub: false, desc: 'Northern-fell culture.' },
  { id: 'iron-culture',name:'Iron Crown culture', type: 'culture',  tags: ['lowland'],                    stub: false, desc: 'Lowland court culture.' },

  // Species
  { id: 'drakenthar', name: 'Drakenthar',         type: 'species',  tags: ['ancient'],                    stub: false, desc: 'Dragonkind clade.' },
  { id: 'frost-jot',  name: 'Frost-jötnar',       type: 'species',  tags: ['giantkind'],                  stub: false, desc: 'Frost giants.' },
];

// ─── Typed edges (with score [-100, 100]) ───────────────────────
const RW_EDGES = [
  // Character ↔ character
  { s: 'sigrun',   t: 'bjornar',     type: 'sworn-to',   score: 95 },
  { s: 'helka',    t: 'bjornar',     type: 'sworn-to',   score: 90 },
  { s: 'vaerin',   t: 'bjornar',     type: 'mentor',     score: 75 },
  { s: 'bjornar',  t: 'skaldyrn',    type: 'apprentice', score: 70 },
  { s: 'thrain',   t: 'ynla',        type: 'sworn-to',   score: 85 },
  { s: 'vethren',  t: 'sothren',     type: 'apprentice', score: 80 },
  { s: 'sothren',  t: 'vethren',     type: 'mentor',     score: 80 },
  { s: 'bjornar',  t: 'ynla',        type: 'rivalry',    score: -70 },
  { s: 'bjornar',  t: 'sothren',     type: 'friendship', score: 55 },
  { s: 'vaerin',   t: 'ynla',        type: 'friendship', score: 42 },
  { s: 'hjalmar',  t: 'ynla',        type: 'enemy',      score: -82 },
  { s: 'sigrun',   t: 'helka',       type: 'friendship', score: 60 },
  { s: 'vaerin',   t: 'skaldyrn',    type: 'mentor',     score: 65 },

  // Faction ↔ faction
  { s: 'iron-crown', t: 'stoneborn', type: 'allied',        score: 85 },
  { s: 'iron-crown', t: 'skalds',    type: 'allied',        score: 75 },
  { s: 'iron-crown', t: 'cult-mimir',type: 'at-war',        score: -80 },
  { s: 'iron-crown', t: 'stoneborn', type: 'trade-partner', score: 50 },
  { s: 'cult-mimir', t: 'iron-crown',type: 'enemy',         score: -95 },
  { s: 'cult-mimir', t: 'watch',     type: 'allied',        score: 60 },
  { s: 'watch',      t: 'skalds',    type: 'trade-partner', score: 30 },
  { s: 'skalds',     t: 'stoneborn', type: 'allied',        score: 55 },

  // Mixed: character ↔ faction (sworn / vassal)
  { s: 'bjornar',  t: 'iron-crown',  type: 'liege-of',  score: 100 },
  { s: 'ynla',     t: 'cult-mimir',  type: 'liege-of',  score: 95 },
  { s: 'sothren',  t: 'watch',       type: 'liege-of',  score: 90 },

  // Mixed: place ↔ faction (seat-of)
  { s: 'iron-crown', t: 'hearthstead', type: 'liege-of', score: 100 },
  { s: 'cult-mimir', t: 'well',        type: 'liege-of', score: 100 },

  // Cultural / political
  { s: 'hornfolke', t: 'iron-culture', type: 'allied',  score: 65 },
  { s: 'hornfolke', t: 'skalds',       type: 'allied',  score: 80 },

  // Species enmity (ancient)
  { s: 'drakenthar', t: 'frost-jot',  type: 'rivalry', score: -55 },
  { s: 'drakenthar', t: 'iron-crown', type: 'oath-broken', score: -45 },

  // Spillover
  { s: 'frostholm',  t: 'bryn-hollow', type: 'at-war', score: -40 },
];

// ─── Kinship-layer edges (from character relationships[]) ───────
const RW_KINSHIP = [
  { s: 'bjornar', t: 'helka',    label: 'parent' },
  { s: 'vaerin',  t: 'helka',    label: 'aunt' },
  { s: 'sigrun',  t: 'hjalmar',  label: 'sibling' },
  { s: 'skaldyrn',t: 'bjornar',  label: 'mentor (kin)' },
  { s: 'ynla',    t: 'thrain',   label: 'aunt' },
];

// ─── Wiki-link layer (frontmatter + body refs) ──────────────────
const RW_WIKILINKS = [
  { s: 'bjornar',     t: 'iron-crown' },
  { s: 'bjornar',     t: 'hearthstead' },
  { s: 'sigrun',      t: 'iron-crown' },
  { s: 'ynla',        t: 'well' },
  { s: 'sothren',     t: 'watch' },
  { s: 'drakenthar',  t: 'watch' },
  { s: 'hornfolke',   t: 'skalds' },
  { s: 'frost-jot',   t: 'frostholm' },
  { s: 'vaerin',      t: 'iron-crown' },
  { s: 'hjalmar',     t: 'frostholm' },
  { s: 'helka',       t: 'hearthstead' },
];

// ─── Tiny deterministic force-directed layout ───────────────────
function runForceLayout(nodes, edges, opts = {}) {
  const W = opts.width  || 1140;
  const H = opts.height || 760;
  const iters = opts.iters || 320;
  const K_REP = 9500;
  const K_SPRING = 0.028;
  const SPRING_LEN = 145;
  const CENTER = 0.010;
  const DAMPING = 0.72;

  const N = nodes.length;
  // Deterministic seed — golden-angle spiral around center.
  const state = nodes.map((n, i) => {
    const a = i * 2.39996;
    const r = 70 + Math.sqrt(i) * 22;
    return {
      id: n.id,
      x: W / 2 + Math.cos(a) * r,
      y: H / 2 + Math.sin(a) * r,
      vx: 0, vy: 0,
    };
  });
  const byId = new Map(state.map(s => [s.id, s]));

  for (let t = 0; t < iters; t++) {
    // O(N²) repulsion — fine for ~25 nodes.
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = state[j].x - state[i].x;
        const dy = state[j].y - state[i].y;
        const d2 = Math.max(64, dx * dx + dy * dy);
        const d = Math.sqrt(d2);
        const f = K_REP / d2;
        const fx = (dx / d) * f;
        const fy = (dy / d) * f;
        state[i].vx -= fx; state[i].vy -= fy;
        state[j].vx += fx; state[j].vy += fy;
      }
    }
    // Springs (typed edges only — kinship/wikilinks don't pull).
    for (const e of edges) {
      const a = byId.get(e.s); const b = byId.get(e.t);
      if (!a || !b) continue;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      const disp = d - SPRING_LEN;
      const f = K_SPRING * disp;
      const fx = (dx / d) * f;
      const fy = (dy / d) * f;
      a.vx += fx; a.vy += fy;
      b.vx -= fx; b.vy -= fy;
    }
    // Center pull.
    for (const s of state) {
      s.vx += (W / 2 - s.x) * CENTER;
      s.vy += (H / 2 - s.y) * CENTER;
    }
    // Integrate + damp.
    for (const s of state) {
      s.x += s.vx; s.y += s.vy;
      s.vx *= DAMPING; s.vy *= DAMPING;
      s.x = Math.max(40, Math.min(W - 40, s.x));
      s.y = Math.max(40, Math.min(H - 40, s.y));
    }
  }
  const out = {};
  for (const s of state) out[s.id] = { x: s.x, y: s.y };
  return out;
}

// ─── Component ──────────────────────────────────────────────────
function RelationshipsWeb() {
  // View mode
  const [viewMode, setViewMode] = useState('graph');     // 'graph' | 'matrix'

  // Filter state
  const [activeTypes, setActiveTypes] = useState(new Set(RW_TYPES.map(t => t.id)));
  const [scoreMin, setScoreMin] = useState(-100);
  const [scoreMax, setScoreMax] = useState(100);
  const [activeEntityTypes, setActiveEntityTypes] = useState(new Set(Object.keys(RW_ENTITY_PALETTE)));
  const [activeTags, setActiveTags] = useState(new Set());

  // Layer toggles
  const [layers, setLayers] = useState({ typed: true, kinship: false, wikilinks: false });

  // Focus + hover
  const [focusId, setFocusId]   = useState(null);
  const [hoverEdge, setHoverEdge] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);

  // Layout: pre-compute once on full dataset so filters don't relayout.
  const layout = useMemo(() => runForceLayout(RW_NODES, RW_EDGES, { width: 1140, height: 760 }), []);

  // === Filter pipeline =========================================
  const filteredEdges = useMemo(() => {
    return RW_EDGES.filter(e => {
      if (e.s === e.t) return false;
      if (!activeTypes.has(e.type)) return false;
      if (e.score < scoreMin) return false;
      if (e.score > scoreMax) return false;
      return true;
    });
  }, [activeTypes, scoreMin, scoreMax]);

  const participantIds = useMemo(() => {
    const s = new Set();
    for (const e of filteredEdges) { s.add(e.s); s.add(e.t); }
    return s;
  }, [filteredEdges]);

  const filteredNodes = useMemo(() => {
    return RW_NODES.filter(n => {
      if (!participantIds.has(n.id)) return false;
      if (!activeEntityTypes.has(n.type)) return false;
      if (activeTags.size > 0 && !n.tags.some(t => activeTags.has(t))) return false;
      return true;
    });
  }, [participantIds, activeEntityTypes, activeTags]);

  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  // Focus reduces to anchor + 2-hop neighborhood.
  const focusReach = useMemo(() => {
    if (!focusId || !filteredNodeIds.has(focusId)) return null;
    const reach = new Set([focusId]);
    for (let hop = 0; hop < 2; hop++) {
      const next = new Set(reach);
      for (const e of filteredEdges) {
        if (reach.has(e.s) && filteredNodeIds.has(e.t)) next.add(e.t);
        if (reach.has(e.t) && filteredNodeIds.has(e.s)) next.add(e.s);
      }
      reach.clear();
      for (const id of next) reach.add(id);
    }
    return reach;
  }, [focusId, filteredEdges, filteredNodeIds]);

  // Final visible sets
  const visibleNodeIds = useMemo(() => {
    if (focusReach) return focusReach;
    return filteredNodeIds;
  }, [focusReach, filteredNodeIds]);
  const visibleEdges = useMemo(() => {
    return filteredEdges.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t));
  }, [filteredEdges, visibleNodeIds]);

  // Degree (for node size)
  const degreeMap = useMemo(() => {
    const m = {};
    for (const e of visibleEdges) { m[e.s] = (m[e.s] || 0) + 1; m[e.t] = (m[e.t] || 0) + 1; }
    return m;
  }, [visibleEdges]);

  const visibleKinship  = layers.kinship   ? RW_KINSHIP.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [];
  const visibleWikilink = layers.wikilinks ? RW_WIKILINKS.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : [];

  // Toggling helpers
  function toggle(setter, set, key) {
    const next = new Set(set);
    if (next.has(key)) next.delete(key); else next.add(key);
    setter(next);
  }
  function toggleAll(setter, allKeys, currentSize) {
    setter(currentSize === allKeys.length ? new Set() : new Set(allKeys));
  }

  // Unique tag list
  const allTags = useMemo(() => {
    const s = new Set();
    for (const n of RW_NODES) for (const t of n.tags) s.add(t);
    return Array.from(s).sort();
  }, []);

  // Counts per axis
  const typeCounts = useMemo(() => {
    const m = {};
    for (const e of RW_EDGES) m[e.type] = (m[e.type] || 0) + 1;
    return m;
  }, []);
  const entityCounts = useMemo(() => {
    const m = {};
    for (const n of RW_NODES) m[n.type] = (m[n.type] || 0) + 1;
    return m;
  }, []);

  return (
    <div className="ft rw">
      <div className="ft-split rw-split">
        {/* === FILTER SIDEBAR ================================== */}
        <aside className="ft-side rw-side">
          <div className="ft-side-head">
            <h2>Relationships</h2>
            <span className="mim-eyebrow rw-eye">Tools · Graph</span>
          </div>

          {/* Focus picker */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Focus</span>
              {focusId && <button className="rw-clear" onClick={() => setFocusId(null)}>clear</button>}
            </div>
            {!focusId ? (
              <select className="rw-select" value="" onChange={e => e.target.value && setFocusId(e.target.value)}>
                <option value="">— anchor a subgraph —</option>
                {RW_NODES.filter(n => filteredNodeIds.has(n.id)).map(n => (
                  <option key={n.id} value={n.id}>{n.name}</option>
                ))}
              </select>
            ) : (
              <div className="rw-focus-pill">
                <span className="rw-focus-dot" style={{ background: RW_ENTITY_PALETTE[RW_NODES.find(n => n.id === focusId).type].color }}/>
                <span className="rw-focus-name">{RW_NODES.find(n => n.id === focusId).name}</span>
                <span className="rw-focus-meta">2-hop · {focusReach?.size || 0} nodes</span>
              </div>
            )}
          </div>

          {/* Layer toggles */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Layers</span>
            </div>
            <ul className="rw-layer-list">
              <li className={"rw-layer-row" + (layers.typed ? " is-on" : "")}
                  onClick={() => setLayers(l => ({ ...l, typed: !l.typed }))}>
                <span className="rw-layer-bar" style={{ background: '#5fa394' }}/>
                <span className="rw-layer-name">Typed edges</span>
                <span className="rw-layer-count">{filteredEdges.length}</span>
                <input type="checkbox" readOnly checked={layers.typed} className="rw-checkbox"/>
              </li>
              <li className={"rw-layer-row" + (layers.kinship ? " is-on" : "")}
                  onClick={() => setLayers(l => ({ ...l, kinship: !l.kinship }))}>
                <span className="rw-layer-bar" style={{ background: '#8aa0ab' }}/>
                <span className="rw-layer-name">Kinship overlay</span>
                <span className="rw-layer-count">{RW_KINSHIP.length}</span>
                <input type="checkbox" readOnly checked={layers.kinship} className="rw-checkbox"/>
              </li>
              <li className={"rw-layer-row" + (layers.wikilinks ? " is-on" : "")}
                  onClick={() => setLayers(l => ({ ...l, wikilinks: !l.wikilinks }))}>
                <span className="rw-layer-bar" style={{ background: '#5a5650' }}/>
                <span className="rw-layer-name">Wiki-links overlay</span>
                <span className="rw-layer-count">{RW_WIKILINKS.length}</span>
                <input type="checkbox" readOnly checked={layers.wikilinks} className="rw-checkbox"/>
              </li>
            </ul>
          </div>

          {/* Relationship type filter (grouped by category) */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Relationship type</span>
              <button className="rw-mini" onClick={() => toggleAll(setActiveTypes, RW_TYPES.map(t => t.id), activeTypes.size)}>
                {activeTypes.size === RW_TYPES.length ? 'none' : 'all'}
              </button>
            </div>
            {RW_CATEGORIES.map(cat => (
              <div key={cat} className="rw-cat">
                <span className="rw-cat-eye">{cat}</span>
                <div className="rw-type-grid">
                  {RW_TYPES.filter(t => t.category === cat).map(t => {
                    const on = activeTypes.has(t.id);
                    return (
                      <button key={t.id}
                        className={"rw-type-chip" + (on ? " is-on" : "")}
                        onClick={() => toggle(setActiveTypes, activeTypes, t.id)}>
                        <span className="rw-type-bar" style={{ background: t.color }}/>
                        <span className="rw-type-label">{t.label}</span>
                        <span className="rw-type-bias">{t.bias}</span>
                        <span className="rw-type-count">{typeCounts[t.id] || 0}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Score range */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Score range</span>
              <button className="rw-mini" onClick={() => { setScoreMin(-100); setScoreMax(100); }}>reset</button>
            </div>
            <div className="rw-score">
              <div className="rw-score-ruler">
                {[-100, -50, 0, 50, 100].map(v => <span key={v} className="rw-score-tick">{v}</span>)}
              </div>
              <div className="rw-score-track">
                <div className="rw-score-fill" style={{
                  left:  `${(scoreMin + 100) / 200 * 100}%`,
                  right: `${100 - (scoreMax + 100) / 200 * 100}%`,
                }}/>
                {RW_EDGES.map((e, i) => (
                  <span key={i} className="rw-score-mark"
                        style={{
                          left: `${(e.score + 100) / 200 * 100}%`,
                          background: RW_TYPE_MAP[e.type].color,
                        }}/>
                ))}
              </div>
              <div className="rw-score-inputs">
                <label>min<input type="number" value={scoreMin} min={-100} max={scoreMax} onChange={e => setScoreMin(Number(e.target.value))}/></label>
                <label>max<input type="number" value={scoreMax} min={scoreMin} max={100}  onChange={e => setScoreMax(Number(e.target.value))}/></label>
              </div>
            </div>
          </div>

          {/* Entity-type filter */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Entity type</span>
              <button className="rw-mini" onClick={() => toggleAll(setActiveEntityTypes, Object.keys(RW_ENTITY_PALETTE), activeEntityTypes.size)}>
                {activeEntityTypes.size === Object.keys(RW_ENTITY_PALETTE).length ? 'none' : 'all'}
              </button>
            </div>
            <div className="rw-ent-grid">
              {Object.entries(RW_ENTITY_PALETTE).map(([id, p]) => {
                const on = activeEntityTypes.has(id);
                return (
                  <button key={id}
                    className={"rw-ent-chip" + (on ? " is-on" : "")}
                    onClick={() => toggle(setActiveEntityTypes, activeEntityTypes, id)}>
                    <span className="rw-ent-dot" style={{ background: p.color }}/>
                    <span>{p.label}</span>
                    <span className="rw-type-count">{entityCounts[id] || 0}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tag filter */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Tag</span>
              {activeTags.size > 0 && <button className="rw-mini" onClick={() => setActiveTags(new Set())}>clear</button>}
            </div>
            <div className="rw-tag-flow">
              {allTags.map(t => {
                const on = activeTags.has(t);
                return (
                  <button key={t}
                    className={"rw-tag" + (on ? " is-on" : "")}
                    onClick={() => toggle(setActiveTags, activeTags, t)}>
                    #{t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="ft-stats rw-stats">
            {visibleNodeIds.size}/{RW_NODES.length} nodes ·
            {' '}{visibleEdges.length}/{RW_EDGES.length} edges
            {layers.kinship   && <> · {visibleKinship.length} kin</>}
            {layers.wikilinks && <> · {visibleWikilink.length} links</>}
          </div>
        </aside>

        {/* === CANVAS / MATRIX ================================ */}
        <div className="ft-canvas-wrap rw-wrap">
          <div className="ft-canvas-bar rw-bar">
            <div className="ft-mode rw-mode">
              <button className={"tl-chip" + (viewMode === 'graph'  ? " is-active" : "")} onClick={() => setViewMode('graph')}>graph</button>
              <button className={"tl-chip" + (viewMode === 'matrix' ? " is-active" : "")} onClick={() => setViewMode('matrix')}>matrix</button>
            </div>
            <span className="rw-bar-meta">Force-directed · {visibleEdges.length} typed edges · {visibleNodeIds.size} entries</span>
            <span className="gt-bar-spacer"/>
            {focusId && (
              <div className="rw-focus-bread">
                <span className="rw-focus-bread-eye">Focused on</span>
                <span className="rw-focus-bread-name">{RW_NODES.find(n => n.id === focusId).name}</span>
                <button className="rw-focus-bread-x" onClick={() => setFocusId(null)}>×</button>
              </div>
            )}
          </div>

          <div className="ft-canvas rw-canvas" data-screen-label="14 Relationships web">
            {viewMode === 'graph' ? (
              <GraphSurface
                nodes={RW_NODES}
                edges={RW_EDGES}
                kinship={RW_KINSHIP}
                wikilinks={RW_WIKILINKS}
                visibleNodeIds={visibleNodeIds}
                visibleEdges={visibleEdges}
                visibleKinship={visibleKinship}
                visibleWikilink={visibleWikilink}
                layout={layout}
                degreeMap={degreeMap}
                focusId={focusId}
                onFocus={setFocusId}
                hoverEdge={hoverEdge}
                setHoverEdge={setHoverEdge}
                hoverNode={hoverNode}
                setHoverNode={setHoverNode}
              />
            ) : (
              <MatrixSurface
                nodes={RW_NODES}
                visibleNodeIds={visibleNodeIds}
                visibleEdges={visibleEdges}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Graph surface ──────────────────────────────────────────────
function GraphSurface(props) {
  const {
    nodes, layout, degreeMap,
    visibleNodeIds, visibleEdges, visibleKinship, visibleWikilink,
    focusId, onFocus, hoverEdge, setHoverEdge, hoverNode, setHoverNode,
  } = props;

  const W = 1140, H = 760;

  // 1-hop neighborhood for hover-node highlight
  const neighborhood = useMemo(() => {
    if (!hoverNode) return null;
    const s = new Set([hoverNode]);
    for (const e of visibleEdges) {
      if (e.s === hoverNode) s.add(e.t);
      if (e.t === hoverNode) s.add(e.s);
    }
    return s;
  }, [hoverNode, visibleEdges]);

  function edgePath(s, t, curveIdx = 0) {
    const a = layout[s]; const b = layout[t];
    if (!a || !b) return '';
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const off = Math.min(28, len * 0.10) * (curveIdx % 2 === 0 ? 1 : -1);
    const cx = (a.x + b.x) / 2 + (-dy / len) * off;
    const cy = (a.y + b.y) / 2 + (dx / len) * off;
    return { d: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`, cx, cy };
  }

  return (
    <svg className="rw-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="rw-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(214,201,168,0.05)"/>
        </pattern>
      </defs>
      <rect width={W} height={H} fill="url(#rw-dots)"/>

      {/* Wikilink layer (faint, very thin) */}
      {visibleWikilink.map((e, i) => {
        const { d } = edgePath(e.s, e.t, i);
        return <path key={`wl-${i}`} d={d} stroke="rgba(141,132,120,0.35)" strokeWidth="0.8" fill="none"/>;
      })}

      {/* Kinship layer (dashed grey) */}
      {visibleKinship.map((e, i) => {
        const { d, cx, cy } = edgePath(e.s, e.t, i);
        return (
          <g key={`kin-${i}`}>
            <path d={d} stroke="rgba(138,160,171,0.55)" strokeWidth="1.1" strokeDasharray="4 4" fill="none"/>
            <text x={cx} y={cy - 4} fill="rgba(138,160,171,0.7)" fontSize="10" textAnchor="middle"
                  fontFamily="var(--font-sans)" fontStyle="italic">{e.label}</text>
          </g>
        );
      })}

      {/* Typed edges */}
      {visibleEdges.map((e, i) => {
        const t = RW_TYPE_MAP[e.type];
        const { d, cx, cy } = edgePath(e.s, e.t, i);
        const isHovered = hoverEdge === i;
        const isFaded = (hoverEdge !== null && !isHovered)
                      || (neighborhood && !(neighborhood.has(e.s) && neighborhood.has(e.t)));
        const widthByScore = Math.max(1.0, Math.abs(e.score) / 38);
        return (
          <g key={i} className="rw-edge"
             style={{ opacity: isFaded ? 0.18 : 1 }}
             onMouseEnter={() => setHoverEdge(i)}
             onMouseLeave={() => setHoverEdge(null)}>
            <path d={d} stroke="transparent" strokeWidth="14" fill="none" style={{ pointerEvents: 'stroke' }}/>
            <path d={d} stroke={t.color} strokeWidth={widthByScore} fill="none"
                  strokeLinecap="round"
                  opacity={isHovered ? 1 : 0.82}/>
            {isHovered && (
              <g>
                <text x={cx} y={cy - 7} textAnchor="middle"
                      fill={t.color} fontSize="11" fontFamily="var(--font-sans)"
                      style={{ fontWeight: 600 }}>
                  {t.label}
                </text>
                <text x={cx} y={cy + 5} textAnchor="middle"
                      fill="var(--fg-3)" fontSize="9.5"
                      fontFamily="var(--font-mono)">
                  score {e.score > 0 ? '+' : ''}{e.score}
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map(n => {
        const p = layout[n.id]; if (!p) return null;
        const visible = visibleNodeIds.has(n.id);
        const isFocus = n.id === focusId;
        const isHover = n.id === hoverNode;
        const isFaded = neighborhood && !neighborhood.has(n.id);
        const palette = RW_ENTITY_PALETTE[n.type];
        const deg = degreeMap[n.id] || 0;
        const r = 12 + Math.min(8, deg * 1.3);
        return (
          <g key={n.id}
             className="rw-node"
             transform={`translate(${p.x}, ${p.y})`}
             style={{ opacity: !visible ? 0.18 : (isFaded ? 0.32 : 1), cursor: 'pointer' }}
             onMouseEnter={() => setHoverNode(n.id)}
             onMouseLeave={() => setHoverNode(null)}
             onClick={() => onFocus(n.id === focusId ? null : n.id)}>
            {isFocus && <circle r={r + 6} fill="none" stroke="#b85a2c" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85"/>}
            <circle r={r} fill={palette.color}
                    stroke={isFocus ? '#b85a2c' : '#1a1410'} strokeWidth={isFocus ? 2.5 : 1.5}/>
            {n.stub && <circle r={3.2} cx={r - 3} cy={-r + 3} fill="#c9a227" opacity="0.95"/>}
            <text y={r + 13} textAnchor="middle"
                  fill={isHover || isFocus ? 'var(--fg-1)' : 'var(--fg-2)'}
                  fontSize="11.5" fontFamily="var(--font-serif)"
                  style={{ fontWeight: isFocus ? 700 : 500, pointerEvents: 'none' }}>
              {n.name}
            </text>
            <text y={r + 25} textAnchor="middle"
                  fill="var(--fg-3)" fontSize="9.5" fontFamily="var(--font-mono)"
                  style={{ letterSpacing: 0.5, pointerEvents: 'none' }}>
              {palette.label.toLowerCase()}
            </text>
          </g>
        );
      })}

      {/* Legend overlay */}
      <g transform="translate(16, 16)" className="rw-legend">
        <rect width="220" height="116" rx="6" fill="rgba(14,11,9,0.88)" stroke="rgba(214,201,168,0.15)"/>
        <text x="12" y="20" fill="var(--fg-3)" fontSize="9.5" fontFamily="var(--font-sans)"
              style={{ letterSpacing: 0.18 * 10, textTransform: 'uppercase', fontWeight: 600 }}>
          ENTITIES
        </text>
        {Object.entries(RW_ENTITY_PALETTE).map(([id, p], i) => (
          <g key={id} transform={`translate(12, ${36 + i * 13})`}>
            <circle r="4" cx="4" cy="-3" fill={p.color}/>
            <text x="14" y="0" fill="var(--fg-2)" fontSize="11" fontFamily="var(--font-serif)">
              {p.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// ─── Matrix surface ─────────────────────────────────────────────
function MatrixSurface({ nodes, visibleNodeIds, visibleEdges }) {
  // Stable order: keep RW_NODES order for matching focused subgraph
  const visible = nodes.filter(n => visibleNodeIds.has(n.id));
  const byPair = useMemo(() => {
    const m = new Map();
    for (const e of visibleEdges) m.set(e.s + '|' + e.t, e);
    return m;
  }, [visibleEdges]);

  return (
    <div className="rw-matrix-wrap">
      <table className="rw-matrix">
        <thead>
          <tr>
            <th className="rw-mx-corner">source ╲ target</th>
            {visible.map(c => (
              <th key={c.id} className="rw-mx-col">
                <div className="rw-mx-coltext">
                  <span className="rw-mx-dot" style={{ background: RW_ENTITY_PALETTE[c.type].color }}/>
                  {c.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visible.map(r => (
            <tr key={r.id}>
              <th className="rw-mx-row">
                <span className="rw-mx-dot" style={{ background: RW_ENTITY_PALETTE[r.type].color }}/>
                {r.name}
              </th>
              {visible.map(c => {
                if (r.id === c.id) return <td key={c.id} className="rw-mx-self"/>;
                const e = byPair.get(r.id + '|' + c.id);
                if (!e) return <td key={c.id} className="rw-mx-empty"/>;
                const t = RW_TYPE_MAP[e.type];
                return (
                  <td key={c.id} className="rw-mx-cell"
                      style={{ background: t.color + '38', borderColor: t.color }}
                      title={`${t.label} · score ${e.score > 0 ? '+' : ''}${e.score}`}>
                    <span className="rw-mx-score">{e.score > 0 ? '+' : ''}{e.score}</span>
                    <span className="rw-mx-type" style={{ color: t.color }}>{t.label}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

window.RelationshipsWeb = RelationshipsWeb;
