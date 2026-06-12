/* global React */
/*
 * ConnectionsGraph — /connections route.
 *
 * Merger of the two graph routes from docs/specs/relationships.md:
 *
 *   - /relationships    — typed semantic edges only (default).
 *   - /world-connections — every entry, every wiki-link, wide-angle.
 *
 * Both routes share one engine in the real codebase; here they share
 * one VIEW with a "scope" toggle at the top. Default layers per
 * scope mirror the spec:
 *
 *     relationships scope → typed-edges ON, kinship/wikilinks OFF
 *     world scope         → wikilinks ON, typed/kinship OFF
 *
 * The big upgrade vs the 2D version: layout is fully 3D and
 * interactive. Drag empty space to orbit the camera. Drag a node
 * to pull it through the web — when "physics" is on, the springs
 * propagate that pull to its neighbours so authors can literally
 * untangle clusters by hand.
 *
 * Engine:
 *
 *   • Per-node {x,y,z,vx,vy,vz,fixed}, mutated in a ref.
 *   • Force loop in requestAnimationFrame:
 *       O(N²) repulsion · spring attraction on typed edges ·
 *       gentle pull toward origin · velocity damping.
 *   • Perspective projection: yaw (around Y) then pitch (around X),
 *     translate by camera distance, divide.
 *   • Screen-drag inverse maps mouse delta into the camera's view
 *     plane (z-fixed at the node's depth).
 *   • Z-sort: nodes rendered back-to-front each frame; edges
 *     beneath nodes; depth fade for visual cue.
 *
 * Matrix view is preserved as a flat secondary surface for
 * dense authoring.
 */

const { useState, useMemo, useRef, useEffect, useCallback } = React;

// ─── Relationship type catalogue (14 bundled defaults) ──────────
const CX_TYPES = [
  { id: 'allied',         label: 'Allied',         category: 'political',      color: '#5fa394', bias: '+' },
  { id: 'at-war',         label: 'At war',         category: 'political',      color: '#c43a4e', bias: '−' },
  { id: 'trade-partner',  label: 'Trade partner',  category: 'political',      color: '#7da265', bias: '+' },
  { id: 'neutral',        label: 'Neutral',        category: 'political',      color: '#8aa0ab', bias: '·' },
  { id: 'sworn-to',       label: 'Sworn to',       category: 'organisational', color: '#c9a227', bias: '+' },
  { id: 'liege-of',       label: 'Liege of',       category: 'organisational', color: '#b87f10', bias: '+' },
  { id: 'vassal',         label: 'Vassal of',      category: 'organisational', color: '#d6b35a', bias: '+' },
  { id: 'friendship',     label: 'Friendship',     category: 'personal',       color: '#d99366', bias: '+' },
  { id: 'lover',          label: 'Lover',          category: 'personal',       color: '#e58da0', bias: '+' },
  { id: 'mentor',         label: 'Mentor of',      category: 'personal',       color: '#a07cc8', bias: '+' },
  { id: 'apprentice',     label: 'Apprentice of',  category: 'personal',       color: '#8a6cad', bias: '+' },
  { id: 'rivalry',        label: 'Rivalry',        category: 'personal',       color: '#b85a2c', bias: '−' },
  { id: 'enemy',          label: 'Enemy',          category: 'ideological',    color: '#902434', bias: '−' },
  { id: 'oath-broken',    label: 'Oath broken',    category: 'ideological',    color: '#5a5650', bias: '−' },
];
const CX_TYPE_MAP = Object.fromEntries(CX_TYPES.map(t => [t.id, t]));
const CX_CATEGORIES = ['political', 'organisational', 'personal', 'ideological'];

// ─── Entity-type palette (extended with non-character types) ───
const CX_ENTITY_PALETTE = {
  character: { color: '#d99366', label: 'Character', radius: 14 },
  faction:   { color: '#c43a4e', label: 'Faction',   radius: 18 },
  place:     { color: '#7da265', label: 'Place',     radius: 16 },
  culture:   { color: '#a07cc8', label: 'Culture',   radius: 16 },
  species:   { color: '#5fa394', label: 'Species',   radius: 15 },
  event:     { color: '#8d8478', label: 'Event',     radius: 13 },
  language:  { color: '#6b89c2', label: 'Language',  radius: 14 },
  rune:      { color: '#c9a227', label: 'Rune',      radius: 12 },
  spell:     { color: '#a8814d', label: 'Spell',     radius: 12 },
};

// ─── Nodes (28 across 9 entity types) ──────────────────────────
const CX_NODES = [
  // Characters
  { id: 'bjornar',    name: 'Bjornar',       type: 'character', tags: ['royal', 'iron-crown'],            stub: false },
  { id: 'sigrun',     name: 'Sigrun',        type: 'character', tags: ['shield-bearer', 'iron-crown'],    stub: false },
  { id: 'vaerin',     name: 'Vaerin',        type: 'character', tags: ['counsel', 'iron-crown'],          stub: false },
  { id: 'hjalmar',    name: 'Hjalmar',       type: 'character', tags: ['military', 'iron-crown'],         stub: false },
  { id: 'skaldyrn',   name: 'Skaldyrn',      type: 'character', tags: ['skald', 'deceased'],              stub: false },
  { id: 'ynla',       name: 'Ynla',          type: 'character', tags: ['cult', 'oracle'],                 stub: false },
  { id: 'thrain',     name: 'Thrain',        type: 'character', tags: ['cult', 'bone-priest'],            stub: false },
  { id: 'sothren',    name: 'Sothren',       type: 'character', tags: ['watch', 'embertongue'],           stub: false },
  { id: 'helka',      name: 'Helka',         type: 'character', tags: ['royal', 'iron-crown', 'heir'],    stub: true  },
  { id: 'vethren',    name: 'Vethren',       type: 'character', tags: ['watch', 'sky-scryer'],            stub: true  },
  // Factions
  { id: 'iron-crown', name: 'Iron Crown',         type: 'faction', tags: ['noble-house', 'iron-crown'],   stub: false },
  { id: 'cult-mimir', name: 'Cult of Mimir',      type: 'faction', tags: ['cult', 'void'],                stub: false },
  { id: 'skalds',     name: 'Hornfolke Skalds',   type: 'faction', tags: ['guild', 'lore'],               stub: false },
  { id: 'watch',      name: 'Embertongue Watch',  type: 'faction', tags: ['order', 'dragon'],             stub: false },
  { id: 'stoneborn',  name: 'Stoneborn Holds',    type: 'faction', tags: ['clan', 'mountain'],            stub: false },
  // Places
  { id: 'hearthstead',name: 'Hearthstead',        type: 'place',   tags: ['seat', 'iron-crown'],          stub: false },
  { id: 'well',       name: 'The Well',           type: 'place',   tags: ['sacred', 'mimir'],             stub: false },
  { id: 'frostholm',  name: 'Frostholm',          type: 'place',   tags: ['fortress', 'border'],          stub: true  },
  { id: 'bryn-hollow',name: 'Bryn Hollow',        type: 'place',   tags: ['battleground'],                stub: false },
  // Cultures
  { id: 'hornfolke',     name: 'Hornfolke',         type: 'culture', tags: ['northern'],                  stub: false },
  { id: 'iron-culture',  name: 'Iron Crown culture',type: 'culture', tags: ['lowland'],                   stub: false },
  // Species
  { id: 'drakenthar', name: 'Drakenthar',         type: 'species', tags: ['ancient'],                     stub: false },
  { id: 'frost-jot',  name: 'Frost-jötnar',       type: 'species', tags: ['giantkind'],                   stub: false },
  // World-scope extras: events, language, rune, spell
  { id: 'battle-bryn',  name: 'Battle of Bryn Hollow',  type: 'event',    tags: ['skirmish', 'border'],   stub: false },
  { id: 'treaty-avalon',name: 'Treaty of Avalon',       type: 'event',    tags: ['council', 'pact'],      stub: false },
  { id: 'lang-drakenthar', name: 'Drakenthar (tongue)', type: 'language', tags: ['ancient', 'dragon'],    stub: false },
  { id: 'rune-kraal',     name: 'Kraal-rune',           type: 'rune',     tags: ['binding'],              stub: false },
  { id: 'spell-binding',  name: 'Binding of the Wolf',  type: 'spell',    tags: ['prophecy', 'wolf'],     stub: true  },
];

// ─── Typed edges (with score [-100, 100]) ───────────────────────
const CX_EDGES = [
  // char ↔ char
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
  // faction ↔ faction
  { s: 'iron-crown', t: 'stoneborn', type: 'allied',        score: 85 },
  { s: 'iron-crown', t: 'skalds',    type: 'allied',        score: 75 },
  { s: 'iron-crown', t: 'cult-mimir',type: 'at-war',        score: -80 },
  { s: 'iron-crown', t: 'stoneborn', type: 'trade-partner', score: 50 },
  { s: 'cult-mimir', t: 'iron-crown',type: 'enemy',         score: -95 },
  { s: 'cult-mimir', t: 'watch',     type: 'allied',        score: 60 },
  { s: 'watch',      t: 'skalds',    type: 'trade-partner', score: 30 },
  { s: 'skalds',     t: 'stoneborn', type: 'allied',        score: 55 },
  // char ↔ faction
  { s: 'bjornar',  t: 'iron-crown',  type: 'liege-of', score: 100 },
  { s: 'ynla',     t: 'cult-mimir',  type: 'liege-of', score: 95  },
  { s: 'sothren',  t: 'watch',       type: 'liege-of', score: 90  },
  // place ↔ faction
  { s: 'iron-crown', t: 'hearthstead', type: 'liege-of', score: 100 },
  { s: 'cult-mimir', t: 'well',        type: 'liege-of', score: 100 },
  // cultural
  { s: 'hornfolke', t: 'iron-culture', type: 'allied',  score: 65 },
  { s: 'hornfolke', t: 'skalds',       type: 'allied',  score: 80 },
  // species enmity
  { s: 'drakenthar', t: 'frost-jot',   type: 'rivalry',     score: -55 },
  { s: 'drakenthar', t: 'iron-crown',  type: 'oath-broken', score: -45 },
  // place ↔ place
  { s: 'frostholm',  t: 'bryn-hollow', type: 'at-war', score: -40 },
];

// ─── Kinship overlay ──────────────────────────────────────────
const CX_KINSHIP = [
  { s: 'bjornar', t: 'helka',    label: 'parent' },
  { s: 'vaerin',  t: 'helka',    label: 'aunt' },
  { s: 'sigrun',  t: 'hjalmar',  label: 'sibling' },
  { s: 'skaldyrn',t: 'bjornar',  label: 'mentor (kin)' },
  { s: 'ynla',    t: 'thrain',   label: 'aunt' },
];

// ─── Wiki-link layer (frontmatter + body refs) ─────────────────
const CX_WIKILINKS = [
  { s: 'bjornar',     t: 'iron-crown' },
  { s: 'bjornar',     t: 'hearthstead' },
  { s: 'sigrun',      t: 'iron-crown' },
  { s: 'ynla',        t: 'well' },
  { s: 'ynla',        t: 'cult-mimir' },
  { s: 'sothren',     t: 'watch' },
  { s: 'drakenthar',  t: 'watch' },
  { s: 'hornfolke',   t: 'skalds' },
  { s: 'frost-jot',   t: 'frostholm' },
  { s: 'vaerin',      t: 'iron-crown' },
  { s: 'hjalmar',     t: 'frostholm' },
  { s: 'helka',       t: 'hearthstead' },
  // World-scope wiki-link edges (events + language + rune + spell)
  { s: 'battle-bryn',    t: 'bryn-hollow' },
  { s: 'battle-bryn',    t: 'iron-crown' },
  { s: 'battle-bryn',    t: 'hjalmar' },
  { s: 'treaty-avalon',  t: 'iron-crown' },
  { s: 'treaty-avalon',  t: 'stoneborn' },
  { s: 'treaty-avalon',  t: 'iron-culture' },
  { s: 'lang-drakenthar',t: 'drakenthar' },
  { s: 'lang-drakenthar',t: 'watch' },
  { s: 'lang-drakenthar',t: 'sothren' },
  { s: 'rune-kraal',     t: 'sothren' },
  { s: 'rune-kraal',     t: 'lang-drakenthar' },
  { s: 'spell-binding',  t: 'ynla' },
  { s: 'spell-binding',  t: 'rune-kraal' },
  { s: 'spell-binding',  t: 'drakenthar' },
];

// ─── 3D MATH ───────────────────────────────────────────────────
// Project world (x,y,z) → screen (sx,sy) + depth + scale.
function project3D(p, cam, W, H) {
  const cy = Math.cos(cam.yaw),   sy = Math.sin(cam.yaw);
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  // Yaw around Y
  const x1 =  p.x * cy + p.z * sy;
  const y1 =  p.y;
  const z1 = -p.x * sy + p.z * cy;
  // Pitch around X (view space)
  const x2 = x1;
  const y2 = y1 * cp - z1 * sp;
  const z2 = y1 * sp + z1 * cp;
  // Move camera back by cam.dist; near-plane clip
  const zCam = cam.dist - z2;
  if (zCam < 30) return null;
  const f = H * 0.7 * cam.zoom;
  const sxx = W / 2 + (x2 * f) / zCam;
  const syy = H / 2 - (y2 * f) / zCam;
  return { sx: sxx, sy: syy, depth: zCam, scale: f / zCam };
}

// Inverse: view-plane screen delta (dx,dy) at fixed depth → world delta.
function screenDeltaToWorld(dx_s, dy_s, zCam, cam, H) {
  const f = H * 0.7 * cam.zoom;
  const vx = (dx_s * zCam) / f;
  const vy = (-dy_s * zCam) / f;
  const cy = Math.cos(cam.yaw),   sy = Math.sin(cam.yaw);
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  // Inverse-pitch then inverse-yaw applied to (vx, vy, 0)
  const wx = cy * vx + sy * sp * vy;
  const wy = cp * vy;
  const wz = sy * vx - cy * sp * vy;
  return { x: wx, y: wy, z: wz };
}

// ─── 3D force step (one iteration) ─────────────────────────────
function step3DForces(posRef, nodes, edges, params) {
  const { kRep, kSpring, springLen, center, damping } = params;
  const arr = nodes.map(n => posRef.current[n.id]).filter(Boolean);
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const a = arr[i], b = arr[j];
      const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
      const d2 = Math.max(900, dx * dx + dy * dy + dz * dz);
      const d  = Math.sqrt(d2);
      const f  = kRep / d2;
      const fx = (dx / d) * f, fy = (dy / d) * f, fz = (dz / d) * f;
      if (!a.fixed) { a.vx -= fx; a.vy -= fy; a.vz -= fz; }
      if (!b.fixed) { b.vx += fx; b.vy += fy; b.vz += fz; }
    }
  }
  for (const e of edges) {
    const a = posRef.current[e.s]; const b = posRef.current[e.t];
    if (!a || !b) continue;
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const d  = Math.max(1, Math.sqrt(dx * dx + dy * dy + dz * dz));
    const disp = d - springLen;
    const f = kSpring * disp;
    const fx = (dx / d) * f, fy = (dy / d) * f, fz = (dz / d) * f;
    if (!a.fixed) { a.vx += fx; a.vy += fy; a.vz += fz; }
    if (!b.fixed) { b.vx -= fx; b.vy -= fy; b.vz -= fz; }
  }
  for (const s of arr) {
    if (s.fixed) { s.vx = s.vy = s.vz = 0; continue; }
    s.vx += (-s.x) * center;
    s.vy += (-s.y) * center;
    s.vz += (-s.z) * center;
    s.x += s.vx; s.y += s.vy; s.z += s.vz;
    s.vx *= damping; s.vy *= damping; s.vz *= damping;
    // Soft bounds — keep the world a comfortable cube.
    const lim = 380;
    s.x = Math.max(-lim, Math.min(lim, s.x));
    s.y = Math.max(-lim, Math.min(lim, s.y));
    s.z = Math.max(-lim, Math.min(lim, s.z));
  }
}

// ─── Initial 3D seeding ───────────────────────────────────────
function init3DPositions(nodes) {
  const out = {};
  for (let i = 0; i < nodes.length; i++) {
    // Fibonacci sphere — even distribution, no two start coincident.
    const r = 240;
    const phi = Math.acos(1 - 2 * (i + 0.5) / nodes.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    out[nodes[i].id] = {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.cos(phi),
      z: r * Math.sin(phi) * Math.sin(theta),
      vx: 0, vy: 0, vz: 0,
      fixed: false,
    };
  }
  return out;
}

// ─── Component ─────────────────────────────────────────────────
function ConnectionsGraph() {
  // Scope + view
  const [scope,    setScope]    = useState('relationships'); // 'relationships' | 'world'
  const [viewMode, setViewMode] = useState('graph3d');       // 'graph3d' | 'matrix'

  // Layers (defaults depend on scope)
  const [layers, setLayers] = useState({ typed: true, kinship: false, wikilinks: false });

  // Filter state
  const [activeTypes,        setActiveTypes]        = useState(new Set(CX_TYPES.map(t => t.id)));
  const [scoreMin,           setScoreMin]           = useState(-100);
  const [scoreMax,           setScoreMax]           = useState(100);
  const [activeEntityTypes,  setActiveEntityTypes]  = useState(new Set(Object.keys(CX_ENTITY_PALETTE)));
  const [activeTags,         setActiveTags]         = useState(new Set());
  const [focusId,            setFocusId]            = useState(null);

  // 3D engine state
  const [cam,     setCam]     = useState({ yaw: 0.5, pitch: -0.25, dist: 720, zoom: 1 });
  const [physics, setPhysics] = useState(true);
  const [hoverEdge, setHoverEdge] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);
  const [selected,  setSelected]  = useState(null);
  const [overlayId, setOverlayId] = useState(null);

  // Positions live in a ref (60fps physics doesn't trigger React reconciles).
  const posRef   = useRef(init3DPositions(CX_NODES));
  const [, force] = useState(0);
  const tickRef  = useRef(0);

  // Drag state (in a ref so RAF handlers see live values).
  const dragRef = useRef({ kind: null, nodeId: null, lastX: 0, lastY: 0, depth: 0 });

  // === Scope: change defaults when scope flips ==================
  useEffect(() => {
    if (scope === 'relationships') {
      setLayers({ typed: true,  kinship: false, wikilinks: false });
      setActiveEntityTypes(new Set(['character','faction','place','culture','species']));
    } else {
      setLayers({ typed: false, kinship: false, wikilinks: true });
      setActiveEntityTypes(new Set(Object.keys(CX_ENTITY_PALETTE)));
    }
  }, [scope]);

  // === Filter pipeline (same as 2D) =============================
  const filteredEdges = useMemo(() => {
    return CX_EDGES.filter(e => {
      if (e.s === e.t) return false;
      if (!activeTypes.has(e.type)) return false;
      if (e.score < scoreMin || e.score > scoreMax) return false;
      return true;
    });
  }, [activeTypes, scoreMin, scoreMax]);

  const participantIds = useMemo(() => {
    const s = new Set();
    if (layers.typed)     for (const e of filteredEdges)  { s.add(e.s); s.add(e.t); }
    if (layers.kinship)   for (const e of CX_KINSHIP)     { s.add(e.s); s.add(e.t); }
    if (layers.wikilinks) for (const e of CX_WIKILINKS)   { s.add(e.s); s.add(e.t); }
    // World scope: every entry is visible by default (even orphans).
    if (scope === 'world') for (const n of CX_NODES) s.add(n.id);
    return s;
  }, [filteredEdges, layers, scope]);

  const filteredNodes = useMemo(() => CX_NODES.filter(n => {
    if (!participantIds.has(n.id)) return false;
    if (!activeEntityTypes.has(n.type)) return false;
    if (activeTags.size > 0 && !n.tags.some(t => activeTags.has(t))) return false;
    return true;
  }), [participantIds, activeEntityTypes, activeTags]);

  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map(n => n.id)), [filteredNodes]);

  const focusReach = useMemo(() => {
    if (!focusId || !filteredNodeIds.has(focusId)) return null;
    let reach = new Set([focusId]);
    const allEdges = [
      ...(layers.typed ? filteredEdges : []),
      ...(layers.kinship ? CX_KINSHIP : []),
      ...(layers.wikilinks ? CX_WIKILINKS : []),
    ];
    for (let hop = 0; hop < 2; hop++) {
      const next = new Set(reach);
      for (const e of allEdges) {
        if (reach.has(e.s) && filteredNodeIds.has(e.t)) next.add(e.t);
        if (reach.has(e.t) && filteredNodeIds.has(e.s)) next.add(e.s);
      }
      reach = next;
    }
    return reach;
  }, [focusId, filteredEdges, layers, filteredNodeIds]);

  const visibleNodeIds = focusReach || filteredNodeIds;
  const visibleEdges    = useMemo(() =>
    layers.typed ? filteredEdges.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : []
  , [layers.typed, filteredEdges, visibleNodeIds]);
  const visibleKinship  = useMemo(() =>
    layers.kinship ? CX_KINSHIP.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : []
  , [layers.kinship, visibleNodeIds]);
  const visibleWikilink = useMemo(() =>
    layers.wikilinks ? CX_WIKILINKS.filter(e => visibleNodeIds.has(e.s) && visibleNodeIds.has(e.t)) : []
  , [layers.wikilinks, visibleNodeIds]);

  // Edge set used by physics (only spring on the visible typed edges).
  const physicsEdges = useMemo(() => visibleEdges, [visibleEdges]);

  const degreeMap = useMemo(() => {
    const m = {};
    for (const e of visibleEdges) { m[e.s] = (m[e.s] || 0) + 1; m[e.t] = (m[e.t] || 0) + 1; }
    return m;
  }, [visibleEdges]);

  // === RAF physics loop ==========================================
  useEffect(() => {
    let raf;
    const loop = () => {
      const dragging = dragRef.current.kind === 'node';
      if (physics) {
        step3DForces(posRef, CX_NODES, physicsEdges, {
          kRep: 24000,
          kSpring: 0.022,
          springLen: 170,
          center: 0.005,
          damping: 0.78,
        });
      } else if (dragging) {
        // Even with physics off, decay velocity so dropped nodes settle.
        for (const id in posRef.current) {
          const s = posRef.current[id];
          s.vx *= 0.6; s.vy *= 0.6; s.vz *= 0.6;
        }
      }
      tickRef.current++;
      // Re-render at ~60fps while physics is on, on every tick while dragging.
      if (physics || dragging) force(tickRef.current);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [physics, physicsEdges]);

  // === Pointer handlers ==========================================
  const surfaceRef = useRef(null);

  const onPointerDownNode = useCallback((nodeId, e) => {
    e.stopPropagation();
    setSelected(nodeId);
    const node = posRef.current[nodeId];
    if (!node) return;
    node.fixed = true;
    node.vx = node.vy = node.vz = 0;
    // record current depth so screen-delta → world stays in plane
    const rect = surfaceRef.current.getBoundingClientRect();
    const proj = project3D(node, cam, rect.width, rect.height);
    dragRef.current = {
      kind: 'node',
      nodeId,
      lastX: e.clientX,
      lastY: e.clientY,
      depth: proj?.depth || cam.dist,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, [cam]);

  const onPointerDownBg = useCallback((e) => {
    // Don't start orbit if click landed on a node group (they stopPropagation).
    dragRef.current = { kind: 'orbit', lastX: e.clientX, lastY: e.clientY };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    const d = dragRef.current;
    if (!d.kind) return;
    const dx = e.clientX - d.lastX;
    const dy = e.clientY - d.lastY;
    d.lastX = e.clientX; d.lastY = e.clientY;
    if (d.kind === 'orbit') {
      setCam(c => ({
        ...c,
        yaw:   c.yaw   + dx * 0.006,
        pitch: Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, c.pitch - dy * 0.006)),
      }));
    } else if (d.kind === 'node') {
      const rect = surfaceRef.current.getBoundingClientRect();
      const worldDelta = screenDeltaToWorld(dx, dy, d.depth, cam, rect.height);
      const node = posRef.current[d.nodeId];
      if (node) {
        node.x += worldDelta.x;
        node.y += worldDelta.y;
        node.z += worldDelta.z;
        node.vx = node.vy = node.vz = 0;
      }
      force(tickRef.current++);
    }
  }, [cam]);

  const onPointerUp = useCallback(() => {
    const d = dragRef.current;
    if (d.kind === 'node' && d.nodeId) {
      // Release pin so physics can resume relaxing — but keep dropped position.
      const node = posRef.current[d.nodeId];
      if (node) node.fixed = false;
    }
    dragRef.current = { kind: null };
  }, []);

  const onWheel = useCallback((e) => {
    e.preventDefault();
    const k = Math.pow(1.0015, -e.deltaY);
    setCam(c => ({ ...c, zoom: Math.max(0.4, Math.min(2.4, c.zoom * k)) }));
  }, []);

  // === Helpers ==================================================
  function toggle(setter, set, key) { const n = new Set(set); n.has(key) ? n.delete(key) : n.add(key); setter(n); }
  function toggleAll(setter, allKeys, currentSize) {
    setter(currentSize === allKeys.length ? new Set() : new Set(allKeys));
  }

  function reseed() {
    posRef.current = init3DPositions(CX_NODES);
    force(tickRef.current++);
  }
  function shake() {
    for (const id in posRef.current) {
      const s = posRef.current[id];
      s.vx += (Math.random() - 0.5) * 16;
      s.vy += (Math.random() - 0.5) * 16;
      s.vz += (Math.random() - 0.5) * 16;
    }
  }

  const allTags = useMemo(() => Array.from(new Set(CX_NODES.flatMap(n => n.tags))).sort(), []);
  const typeCounts   = useMemo(() => { const m = {}; for (const e of CX_EDGES) m[e.type] = (m[e.type] || 0) + 1; return m; }, []);
  const entityCounts = useMemo(() => { const m = {}; for (const n of CX_NODES) m[n.type] = (m[n.type] || 0) + 1; return m; }, []);

  return (
    <div className="ft rw cx">
      <div className="ft-split rw-split">
        {/* === FILTER SIDEBAR ====================================== */}
        <aside className="ft-side rw-side cx-side">
          <div className="ft-side-head">
            <h2>Connections</h2>
            <span className="mim-eyebrow cx-eye">Tools · Graph (3D)</span>
          </div>

          {/* Scope toggle */}
          <div className="cx-scope">
            <button
              className={"cx-scope-btn" + (scope === 'relationships' ? " is-on" : "")}
              onClick={() => setScope('relationships')}>
              <span className="cx-scope-head">Relationships</span>
              <span className="cx-scope-sub">Typed edges only · semantic</span>
            </button>
            <button
              className={"cx-scope-btn" + (scope === 'world' ? " is-on" : "")}
              onClick={() => setScope('world')}>
              <span className="cx-scope-head">World</span>
              <span className="cx-scope-sub">Every entry, every wiki-link</span>
            </button>
          </div>

          {/* Focus */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Focus</span>
              {focusId && <button className="rw-clear" onClick={() => setFocusId(null)}>clear</button>}
            </div>
            {!focusId ? (
              <select className="rw-select" value="" onChange={e => e.target.value && setFocusId(e.target.value)}>
                <option value="">— anchor a 2-hop subgraph —</option>
                {CX_NODES.filter(n => filteredNodeIds.has(n.id)).map(n => (
                  <option key={n.id} value={n.id}>{n.name}</option>
                ))}
              </select>
            ) : (
              <div className="rw-focus-pill">
                <span className="rw-focus-dot" style={{ background: CX_ENTITY_PALETTE[CX_NODES.find(n => n.id === focusId).type].color }}/>
                <span className="rw-focus-name">{CX_NODES.find(n => n.id === focusId).name}</span>
                <span className="rw-focus-meta">{focusReach?.size || 0} nodes</span>
              </div>
            )}
          </div>

          {/* Layers */}
          <div className="rw-block">
            <div className="rw-block-head"><span className="tl-eye">Layers</span></div>
            <ul className="rw-layer-list">
              {[
                { id: 'typed',     name: 'Typed edges',       count: filteredEdges.length,    color: '#5fa394' },
                { id: 'kinship',   name: 'Kinship overlay',   count: CX_KINSHIP.length,       color: '#8aa0ab' },
                { id: 'wikilinks', name: 'Wiki-links overlay',count: CX_WIKILINKS.length,     color: '#5a5650' },
              ].map(L => (
                <li key={L.id}
                    className={"rw-layer-row" + (layers[L.id] ? " is-on" : "")}
                    onClick={() => setLayers(ls => ({ ...ls, [L.id]: !ls[L.id] }))}>
                  <span className="rw-layer-bar" style={{ background: L.color }}/>
                  <span className="rw-layer-name">{L.name}</span>
                  <span className="rw-layer-count">{L.count}</span>
                  <input type="checkbox" readOnly checked={layers[L.id]} className="rw-checkbox"/>
                </li>
              ))}
            </ul>
          </div>

          {/* Type filter (collapsed in world scope by default — kept visible always for now) */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Relationship type</span>
              <button className="rw-mini" onClick={() => toggleAll(setActiveTypes, CX_TYPES.map(t => t.id), activeTypes.size)}>
                {activeTypes.size === CX_TYPES.length ? 'none' : 'all'}
              </button>
            </div>
            {CX_CATEGORIES.map(cat => (
              <div key={cat} className="rw-cat">
                <span className="rw-cat-eye">{cat}</span>
                <div className="rw-type-grid">
                  {CX_TYPES.filter(t => t.category === cat).map(t => (
                    <button key={t.id}
                      className={"rw-type-chip" + (activeTypes.has(t.id) ? " is-on" : "")}
                      onClick={() => toggle(setActiveTypes, activeTypes, t.id)}>
                      <span className="rw-type-bar" style={{ background: t.color }}/>
                      <span className="rw-type-label">{t.label}</span>
                      <span className="rw-type-bias">{t.bias}</span>
                      <span className="rw-type-count">{typeCounts[t.id] || 0}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Entity type */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Entity type</span>
              <button className="rw-mini" onClick={() => toggleAll(setActiveEntityTypes, Object.keys(CX_ENTITY_PALETTE), activeEntityTypes.size)}>
                {activeEntityTypes.size === Object.keys(CX_ENTITY_PALETTE).length ? 'none' : 'all'}
              </button>
            </div>
            <div className="rw-ent-grid">
              {Object.entries(CX_ENTITY_PALETTE).map(([id, p]) => (
                <button key={id}
                  className={"rw-ent-chip" + (activeEntityTypes.has(id) ? " is-on" : "")}
                  onClick={() => toggle(setActiveEntityTypes, activeEntityTypes, id)}>
                  <span className="rw-ent-dot" style={{ background: p.color }}/>
                  <span>{p.label}</span>
                  <span className="rw-type-count">{entityCounts[id] || 0}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tag */}
          <div className="rw-block">
            <div className="rw-block-head">
              <span className="tl-eye">Tag</span>
              {activeTags.size > 0 && <button className="rw-mini" onClick={() => setActiveTags(new Set())}>clear</button>}
            </div>
            <div className="rw-tag-flow">
              {allTags.map(t => (
                <button key={t}
                  className={"rw-tag" + (activeTags.has(t) ? " is-on" : "")}
                  onClick={() => toggle(setActiveTags, activeTags, t)}>#{t}</button>
              ))}
            </div>
          </div>

          <div className="ft-stats rw-stats">
            {visibleNodeIds.size}/{CX_NODES.length} nodes ·
            {' '}{visibleEdges.length} typed
            {layers.kinship   && <> · {visibleKinship.length} kin</>}
            {layers.wikilinks && <> · {visibleWikilink.length} links</>}
          </div>
        </aside>

        {/* === CANVAS / MATRIX ==================================== */}
        <div className="ft-canvas-wrap rw-wrap cx-wrap">
          <div className="ft-canvas-bar rw-bar cx-bar">
            <div className="ft-mode rw-mode">
              <button className={"tl-chip" + (viewMode === 'graph3d' ? " is-active" : "")} onClick={() => setViewMode('graph3d')}>3D graph</button>
              <button className={"tl-chip" + (viewMode === 'matrix'  ? " is-active" : "")} onClick={() => setViewMode('matrix')}>matrix</button>
            </div>
            <span className="cx-scope-pill">
              <span className="cx-scope-dot" style={{ background: scope === 'relationships' ? '#d99366' : '#5fa394' }}/>
              {scope === 'relationships' ? 'Relationships scope' : 'World scope'}
            </span>
            <span className="gt-bar-spacer"/>

            {viewMode === 'graph3d' && (
              <>
                <button className={"cx-physics" + (physics ? " is-on" : "")} onClick={() => setPhysics(p => !p)} title="Toggle force simulation">
                  <span className="cx-physics-dot"/>physics {physics ? 'on' : 'off'}
                </button>
                <button className="tl-chip cx-action" onClick={shake} title="Jiggle nodes out of local minima">shake</button>
                <button className="tl-chip cx-action" onClick={reseed} title="Reset positions to a fresh sphere">reseed</button>
              </>
            )}

            {focusId && (
              <div className="rw-focus-bread">
                <span className="rw-focus-bread-eye">Focus</span>
                <span className="rw-focus-bread-name">{CX_NODES.find(n => n.id === focusId).name}</span>
                <button className="rw-focus-bread-x" onClick={() => setFocusId(null)}>×</button>
              </div>
            )}
          </div>

          <div className="ft-canvas rw-canvas cx-canvas" data-screen-label="14 Connections (3D)">
            {viewMode === 'graph3d' ? (
              <Graph3D
                surfaceRef={surfaceRef}
                cam={cam}
                posRef={posRef}
                nodes={CX_NODES}
                visibleNodeIds={visibleNodeIds}
                visibleEdges={visibleEdges}
                visibleKinship={visibleKinship}
                visibleWikilink={visibleWikilink}
                focusId={focusId}
                selected={selected}
                hoverNode={hoverNode}
                setHoverNode={setHoverNode}
                hoverEdge={hoverEdge}
                setHoverEdge={setHoverEdge}
                degreeMap={degreeMap}
                onPointerDownBg={onPointerDownBg}
                onPointerDownNode={onPointerDownNode}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onWheel={onWheel}
                onFocusNode={(id) => setFocusId(prev => prev === id ? null : id)}
                onOpenOverlay={(id) => setOverlayId(id)}
              />
            ) : (
              <MatrixSurface
                nodes={CX_NODES}
                visibleNodeIds={visibleNodeIds}
                visibleEdges={visibleEdges}
              />
            )}
          </div>
        </div>
      </div>

      {overlayId && (
        <EntryOverlay
          node={CX_NODES.find(n => n.id === overlayId)}
          edges={CX_EDGES}
          kinship={CX_KINSHIP}
          wikilinks={CX_WIKILINKS}
          nodes={CX_NODES}
          onClose={() => setOverlayId(null)}
          onFocus={(id) => { setFocusId(id); setOverlayId(null); }}
          onPickNeighbor={(id) => setOverlayId(id)}
        />
      )}
    </div>
  );
}

// ─── 3D Graph surface ──────────────────────────────────────────
function Graph3D({
  surfaceRef, cam, posRef, nodes, visibleNodeIds,
  visibleEdges, visibleKinship, visibleWikilink,
  focusId, selected, hoverNode, setHoverNode, hoverEdge, setHoverEdge,
  degreeMap, onPointerDownBg, onPointerDownNode, onPointerMove, onPointerUp, onWheel,
  onFocusNode, onOpenOverlay,
}) {
  const W = 1200, H = 760;

  // 1-hop neighborhood for hover halo
  const neighborhood = useMemo(() => {
    if (!hoverNode) return null;
    const s = new Set([hoverNode]);
    for (const e of visibleEdges) {
      if (e.s === hoverNode) s.add(e.t);
      if (e.t === hoverNode) s.add(e.s);
    }
    return s;
  }, [hoverNode, visibleEdges]);

  // Project every visible node ONCE per frame.
  const projected = {};
  for (const n of nodes) {
    if (!visibleNodeIds.has(n.id)) continue;
    const p = posRef.current[n.id];
    if (!p) continue;
    const pj = project3D(p, cam, W, H);
    if (pj) projected[n.id] = pj;
  }

  // Depth-fade helper: deeper nodes are slightly desaturated/faded.
  function depthAlpha(depth) {
    // depth ranges roughly cam.dist - 380 .. cam.dist + 380
    const lo = cam.dist - 380, hi = cam.dist + 380;
    const t = Math.max(0, Math.min(1, (depth - lo) / (hi - lo)));
    return 0.45 + 0.55 * (1 - t); // far = 0.45, near = 1
  }

  // Z-sort node list (back-to-front)
  const sortedNodes = nodes
    .filter(n => projected[n.id])
    .slice()
    .sort((a, b) => projected[b.id].depth - projected[a.id].depth);

  return (
    <div className="cx-stage"
         ref={surfaceRef}
         onPointerDown={onPointerDownBg}
         onPointerMove={onPointerMove}
         onPointerUp={onPointerUp}
         onPointerCancel={onPointerUp}
         onWheel={onWheel}>
      <svg className="rw-svg cx-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="cx-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(214,201,168,0.04)" strokeWidth="0.5"/>
          </pattern>
          <radialGradient id="cx-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)"/>
            <stop offset="100%" stopColor="rgba(0,0,0,0.55)"/>
          </radialGradient>
        </defs>
        <rect width={W} height={H} fill="url(#cx-grid)"/>
        <rect width={W} height={H} fill="url(#cx-vignette)" pointerEvents="none"/>

        {/* Wiki-link layer (faint) */}
        {visibleWikilink.map((e, i) => {
          const a = projected[e.s], b = projected[e.t];
          if (!a || !b) return null;
          const alpha = Math.min(depthAlpha(a.depth), depthAlpha(b.depth));
          return <line key={`wl-${i}`} x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy}
                       stroke="rgba(141,132,120,0.45)" strokeWidth="0.8" opacity={alpha}/>;
        })}

        {/* Kinship layer (dashed grey + label at midpoint) */}
        {visibleKinship.map((e, i) => {
          const a = projected[e.s], b = projected[e.t];
          if (!a || !b) return null;
          const mx = (a.sx + b.sx) / 2;
          const my = (a.sy + b.sy) / 2;
          const alpha = Math.min(depthAlpha(a.depth), depthAlpha(b.depth));
          return (
            <g key={`kin-${i}`} opacity={alpha}>
              <line x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy}
                    stroke="rgba(138,160,171,0.7)" strokeWidth="1.1" strokeDasharray="4 4"/>
              <text x={mx} y={my - 4} fill="rgba(138,160,171,0.85)" fontSize="10" textAnchor="middle"
                    fontFamily="var(--font-sans)" fontStyle="italic">{e.label}</text>
            </g>
          );
        })}

        {/* Typed edges */}
        {visibleEdges.map((e, i) => {
          const a = projected[e.s], b = projected[e.t];
          if (!a || !b) return null;
          const t = CX_TYPE_MAP[e.type];
          const isHovered = hoverEdge === i;
          const isFaded = (hoverEdge !== null && !isHovered)
                       || (neighborhood && !(neighborhood.has(e.s) && neighborhood.has(e.t)));
          const alpha = Math.min(depthAlpha(a.depth), depthAlpha(b.depth));
          const widthByScore = Math.max(1.0, Math.abs(e.score) / 38);
          const mx = (a.sx + b.sx) / 2, my = (a.sy + b.sy) / 2;
          return (
            <g key={i} className="rw-edge"
               style={{ opacity: isFaded ? 0.16 : alpha }}
               onMouseEnter={() => setHoverEdge(i)}
               onMouseLeave={() => setHoverEdge(null)}>
              <line x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy}
                    stroke="transparent" strokeWidth="12"/>
              <line x1={a.sx} y1={a.sy} x2={b.sx} y2={b.sy}
                    stroke={t.color}
                    strokeWidth={isHovered ? widthByScore + 1 : widthByScore}
                    strokeLinecap="round"/>
              {isHovered && (
                <g>
                  <rect x={mx - 60} y={my - 22} width="120" height="32" rx="4"
                        fill="rgba(14,11,9,0.95)" stroke={t.color} strokeWidth="0.75"/>
                  <text x={mx} y={my - 8} textAnchor="middle"
                        fill={t.color} fontSize="11" fontFamily="var(--font-sans)"
                        style={{ fontWeight: 600 }}>{t.label}</text>
                  <text x={mx} y={my + 5} textAnchor="middle"
                        fill="var(--fg-3)" fontSize="10" fontFamily="var(--font-mono)">
                    score {e.score > 0 ? '+' : ''}{e.score}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Nodes — z-sorted back-to-front */}
        {sortedNodes.map(n => {
          const p = projected[n.id]; if (!p) return null;
          const isFocus = n.id === focusId;
          const isSel   = n.id === selected;
          const isHover = n.id === hoverNode;
          const isFaded = neighborhood && !neighborhood.has(n.id);
          const palette = CX_ENTITY_PALETTE[n.type];
          const baseR = palette.radius;
          const deg = degreeMap[n.id] || 0;
          // Combine perspective scale + degree-driven size.
          const r = (baseR + Math.min(6, deg * 0.7)) * Math.max(0.3, p.scale * 0.6);
          const alpha = depthAlpha(p.depth) * (isFaded ? 0.4 : 1);

          return (
            <g key={n.id}
               className="rw-node cx-node3d"
               transform={`translate(${p.sx}, ${p.sy})`}
               style={{ opacity: alpha, cursor: 'grab' }}
               onPointerDown={(e) => onPointerDownNode(n.id, e)}
               onMouseEnter={() => setHoverNode(n.id)}
               onMouseLeave={() => setHoverNode(null)}
               onDoubleClick={() => onOpenOverlay(n.id)}>
              {/* depth shadow */}
              <ellipse cx="0" cy={r + 4} rx={r * 0.75} ry={r * 0.18}
                       fill="rgba(0,0,0,0.45)" opacity={alpha * 0.6}/>
              {/* focus ring */}
              {isFocus && (
                <circle r={r + 6} fill="none" stroke="#b85a2c" strokeWidth="1.5"
                        strokeDasharray="3 3" opacity={alpha}/>
              )}
              {/* sphere body — radial gradient gives volume */}
              <defs>
                <radialGradient id={`cx-sph-${n.id}`} cx="35%" cy="30%" r="70%">
                  <stop offset="0%"  stopColor="rgba(255,255,255,0.55)"/>
                  <stop offset="35%" stopColor={palette.color}/>
                  <stop offset="100%" stopColor={shade(palette.color, -0.55)}/>
                </radialGradient>
              </defs>
              <circle r={r}
                      fill={`url(#cx-sph-${n.id})`}
                      stroke={isFocus ? '#b85a2c' : (isSel || isHover ? '#d6c9a8' : 'rgba(20,16,13,0.85)')}
                      strokeWidth={isFocus || isSel ? 2 : (isHover ? 1.5 : 1)}/>
              {/* stub indicator */}
              {n.stub && (
                <circle r="3" cx={r * 0.55} cy={-r * 0.55} fill="#c9a227"
                        stroke="rgba(0,0,0,0.5)" strokeWidth="0.5"/>
              )}
              {/* name */}
              <text y={r + 16} textAnchor="middle"
                    fill={isFocus || isSel || isHover ? 'var(--fg-1)' : 'var(--fg-2)'}
                    fontSize={Math.max(9, 11.5 * Math.max(0.7, p.scale * 0.8))}
                    fontFamily="var(--font-serif)"
                    style={{ fontWeight: isFocus ? 700 : 500, pointerEvents: 'none' }}>
                {n.name}
              </text>
              <text y={r + 28} textAnchor="middle"
                    fill="var(--fg-3)" fontSize="9.5" fontFamily="var(--font-mono)"
                    style={{ letterSpacing: 0.5, pointerEvents: 'none' }}>
                {palette.label.toLowerCase()}
              </text>
            </g>
          );
        })}

        {/* Compass / camera HUD */}
        <g transform={`translate(${W - 80}, 60)`} className="cx-compass">
          <circle r="36" fill="rgba(14,11,9,0.85)" stroke="rgba(214,201,168,0.2)"/>
          <line x1="0" y1="-30" x2="0" y2="30" stroke="rgba(214,201,168,0.25)" strokeWidth="0.5"/>
          <line x1="-30" y1="0" x2="30" y2="0" stroke="rgba(214,201,168,0.25)" strokeWidth="0.5"/>
          {/* yaw needle */}
          <g transform={`rotate(${cam.yaw * 180 / Math.PI})`}>
            <line x1="0" y1="0" x2="0" y2="-26" stroke="#b85a2c" strokeWidth="1.5"/>
            <polygon points="0,-30 -3,-22 3,-22" fill="#b85a2c"/>
          </g>
          {/* pitch label */}
          <text y="48" textAnchor="middle" fill="var(--fg-3)" fontSize="9" fontFamily="var(--font-mono)">
            {Math.round(cam.yaw * 180 / Math.PI)}° · {Math.round(cam.pitch * 180 / Math.PI)}°
          </text>
        </g>

        {/* Entity legend (top-left) */}
        <g transform="translate(16, 16)" className="rw-legend">
          <rect width="190" height="148" rx="6" fill="rgba(14,11,9,0.85)" stroke="rgba(214,201,168,0.15)"/>
          <text x="12" y="20" fill="var(--fg-3)" fontSize="9.5" fontFamily="var(--font-sans)"
                style={{ letterSpacing: 2, fontWeight: 600 }}>
            ENTITIES
          </text>
          {Object.entries(CX_ENTITY_PALETTE).map(([id, p], i) => (
            <g key={id} transform={`translate(12, ${36 + i * 12})`}>
              <circle r="3.5" cx="4" cy="-3" fill={p.color}/>
              <text x="14" y="0" fill="var(--fg-2)" fontSize="10.5" fontFamily="var(--font-serif)">
                {p.label}
              </text>
            </g>
          ))}
        </g>

        {/* Help overlay (bottom-left) */}
        <g transform={`translate(16, ${H - 76})`} className="cx-help">
          <rect width="320" height="60" rx="6" fill="rgba(14,11,9,0.85)" stroke="rgba(214,201,168,0.15)"/>
          <text x="12" y="20" fill="var(--fg-3)" fontSize="9.5" fontFamily="var(--font-sans)"
                style={{ letterSpacing: 2, fontWeight: 600 }}>
            CONTROLS
          </text>
          <text x="12" y="36" fill="var(--fg-2)" fontSize="11" fontFamily="var(--font-serif)">
            drag space — orbit · drag node — pull through web
          </text>
          <text x="12" y="50" fill="var(--fg-2)" fontSize="11" fontFamily="var(--font-serif)">
            scroll — zoom · dbl-click node — open entry
          </text>
        </g>
      </svg>
    </div>
  );
}

// Lighten/darken a hex colour by `amt` (range -1..1).
function shade(hex, amt) {
  const c = hex.replace('#', '');
  const num = parseInt(c, 16);
  let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
  const adj = (x) => Math.max(0, Math.min(255, Math.round(x + 255 * amt)));
  r = adj(r); g = adj(g); b = adj(b);
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

// ─── Matrix surface (unchanged from 2D) ────────────────────────
function MatrixSurface({ nodes, visibleNodeIds, visibleEdges }) {
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
                  <span className="rw-mx-dot" style={{ background: CX_ENTITY_PALETTE[c.type].color }}/>
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
                <span className="rw-mx-dot" style={{ background: CX_ENTITY_PALETTE[r.type].color }}/>
                {r.name}
              </th>
              {visible.map(c => {
                if (r.id === c.id) return <td key={c.id} className="rw-mx-self"/>;
                const e = byPair.get(r.id + '|' + c.id);
                if (!e) return <td key={c.id} className="rw-mx-empty"/>;
                const t = CX_TYPE_MAP[e.type];
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

// ─── Entry overlay (opens on node dbl-click) ───────────────────
function EntryOverlay({ node, edges, kinship, wikilinks, nodes, onClose, onFocus, onPickNeighbor }) {
  if (!node) return null;
  const palette = CX_ENTITY_PALETTE[node.type];
  const nodeMap = useMemo(() => Object.fromEntries(nodes.map(n => [n.id, n])), [nodes]);

  // Outgoing / incoming typed edges
  const outgoing = edges.filter(e => e.s === node.id);
  const incoming = edges.filter(e => e.t === node.id);
  const kinEdges = kinship.filter(e => e.s === node.id || e.t === node.id);
  const wikiEdges = wikilinks.filter(e => e.s === node.id || e.t === node.id);

  // Aggregate per-type counts
  const typeBreakdown = useMemo(() => {
    const m = {};
    for (const e of [...outgoing, ...incoming]) m[e.type] = (m[e.type] || 0) + 1;
    return Object.entries(m).sort((a, b) => b[1] - a[1]);
  }, [outgoing, incoming]);

  // Score average
  const allTyped = [...outgoing, ...incoming];
  const avgScore = allTyped.length
    ? Math.round(allTyped.reduce((a, e) => a + e.score, 0) / allTyped.length)
    : null;
  const sentimentDot = avgScore == null ? '·' : (avgScore > 20 ? '+' : avgScore < -20 ? '−' : '·');
  const sentimentColor = avgScore == null ? '#8aa0ab' : (avgScore > 20 ? '#5fa394' : avgScore < -20 ? '#c43a4e' : '#8aa0ab');

  // Esc to close
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  function NeighborRow({ otherId, label, color, score, dir }) {
    const other = nodeMap[otherId];
    if (!other) return null;
    const otherPal = CX_ENTITY_PALETTE[other.type];
    return (
      <li className="cx-ov-edge" onClick={() => onPickNeighbor(otherId)}>
        <span className="cx-ov-edge-bar" style={{ background: color }}/>
        <span className="cx-ov-edge-dir">{dir}</span>
        <span className="cx-ov-edge-name">
          <span className="cx-ov-ent-dot" style={{ background: otherPal.color }}/>
          {other.name}
        </span>
        <span className="cx-ov-edge-type" style={{ color }}>{label}</span>
        {score != null && (
          <span className="cx-ov-edge-score" style={{ color: score > 0 ? '#5fa394' : score < 0 ? '#c43a4e' : '#8aa0ab' }}>
            {score > 0 ? '+' : ''}{score}
          </span>
        )}
      </li>
    );
  }

  return (
    <div className="cx-ov-backdrop" onClick={onClose}>
      <div className="cx-ov-card" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="cx-ov-close" onClick={onClose} aria-label="Close">×</button>

        <header className="cx-ov-head">
          <div className="cx-ov-crest" style={{
            background: `radial-gradient(circle at 35% 30%, ${shade(palette.color, 0.3)} 0%, ${palette.color} 50%, ${shade(palette.color, -0.5)} 100%)`,
          }}/>
          <div className="cx-ov-headtext">
            <span className="mim-eyebrow cx-ov-eye">
              {palette.label}{node.stub && <span className="cx-ov-stub-tag">stub</span>}
            </span>
            <h2 className="cx-ov-name">{node.name}</h2>
            <div className="cx-ov-tags">
              {node.tags.map(t => <span key={t} className="cx-ov-tag">#{t}</span>)}
            </div>
          </div>
        </header>

        <div className="cx-ov-summary">
          <div className="cx-ov-stat">
            <span className="cx-ov-stat-num">{outgoing.length + incoming.length}</span>
            <span className="cx-ov-stat-lbl">typed edges</span>
          </div>
          <div className="cx-ov-stat">
            <span className="cx-ov-stat-num" style={{ color: sentimentColor }}>{sentimentDot}{avgScore != null && ` ${avgScore > 0 ? '+' : ''}${avgScore}`}</span>
            <span className="cx-ov-stat-lbl">avg sentiment</span>
          </div>
          <div className="cx-ov-stat">
            <span className="cx-ov-stat-num">{kinEdges.length}</span>
            <span className="cx-ov-stat-lbl">kinship</span>
          </div>
          <div className="cx-ov-stat">
            <span className="cx-ov-stat-num">{wikiEdges.length}</span>
            <span className="cx-ov-stat-lbl">wiki-links</span>
          </div>
        </div>

        {typeBreakdown.length > 0 && (
          <section className="cx-ov-section">
            <div className="cx-ov-sec-head">
              <span className="tl-eye">Relationship mix</span>
            </div>
            <div className="cx-ov-mix">
              {typeBreakdown.map(([typeId, count]) => {
                const t = CX_TYPE_MAP[typeId];
                return (
                  <span key={typeId} className="cx-ov-mix-chip">
                    <span className="cx-ov-mix-bar" style={{ background: t.color }}/>
                    <span>{t.label}</span>
                    <span className="cx-ov-mix-count">{count}</span>
                  </span>
                );
              })}
            </div>
          </section>
        )}

        {(outgoing.length > 0 || incoming.length > 0) && (
          <section className="cx-ov-section">
            <div className="cx-ov-sec-head">
              <span className="tl-eye">Typed edges · {outgoing.length + incoming.length}</span>
              <span className="cx-ov-sec-hint">click a neighbour to walk the web</span>
            </div>
            <ul className="cx-ov-edge-list">
              {outgoing.map((e, i) => {
                const t = CX_TYPE_MAP[e.type];
                return <NeighborRow key={`out-${i}`} otherId={e.t} label={t.label} color={t.color} score={e.score} dir="→"/>;
              })}
              {incoming.map((e, i) => {
                const t = CX_TYPE_MAP[e.type];
                return <NeighborRow key={`in-${i}`} otherId={e.s} label={t.label} color={t.color} score={e.score} dir="←"/>;
              })}
            </ul>
          </section>
        )}

        {kinEdges.length > 0 && (
          <section className="cx-ov-section">
            <div className="cx-ov-sec-head">
              <span className="tl-eye">Kinship · {kinEdges.length}</span>
            </div>
            <ul className="cx-ov-edge-list">
              {kinEdges.map((e, i) => {
                const otherId = e.s === node.id ? e.t : e.s;
                const dir = e.s === node.id ? '→' : '←';
                return <NeighborRow key={`kin-${i}`} otherId={otherId} label={e.label} color="#8aa0ab" dir={dir}/>;
              })}
            </ul>
          </section>
        )}

        {wikiEdges.length > 0 && (
          <section className="cx-ov-section">
            <div className="cx-ov-sec-head">
              <span className="tl-eye">Wiki-links · {wikiEdges.length}</span>
            </div>
            <ul className="cx-ov-edge-list">
              {wikiEdges.map((e, i) => {
                const otherId = e.s === node.id ? e.t : e.s;
                const dir = e.s === node.id ? '→' : '←';
                return <NeighborRow key={`wl-${i}`} otherId={otherId} label="reference" color="#5a5650" dir={dir}/>;
              })}
            </ul>
          </section>
        )}

        <footer className="cx-ov-foot">
          <button className="mim-btn-primary cx-ov-action" onClick={() => onFocus(node.id)}>
            Focus 2-hop subgraph
          </button>
          <button className="cx-ov-action cx-ov-action-ghost">Open editor →</button>
          <span className="gt-bar-spacer"/>
          <span className="cx-ov-foot-hint">Esc to close · click outside to dismiss</span>
        </footer>
      </div>
    </div>
  );
}

window.ConnectionsGraph = ConnectionsGraph;
// Alias for backward-compat (the sidebar nav id is being swapped).
window.RelationshipsWeb = ConnectionsGraph;