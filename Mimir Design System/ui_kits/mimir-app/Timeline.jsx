/* global React */
const { useState, useMemo } = React;

// Event-types from defaultEventTypes.ts
const TIMELINE_EVENT_TYPES = [
  { id: 'battle',     name: 'Battle',     fill: '#DDCC77', stroke: '#885500' },
  { id: 'festival',   name: 'Festival',   fill: '#88CCEE', stroke: '#336699' },
  { id: 'coronation', name: 'Coronation', fill: '#CC6677', stroke: '#771133' },
  { id: 'disaster',   name: 'Disaster',   fill: '#EE6677', stroke: '#AA2233' },
  { id: 'political',  name: 'Political',  fill: '#117733', stroke: '#004422' },
  { id: 'personal',   name: 'Personal',   fill: '#AA4499', stroke: '#661155' },
  { id: 'religious',  name: 'Religious',  fill: '#999933', stroke: '#555522' },
  { id: 'era',        name: 'Era',        fill: '#332288', stroke: '#110055' },
  { id: 'wonder',     name: 'Wonder',     fill: '#D55E00', stroke: '#8B3D00' }
];

// Synthetic events on a saga-flavoured timeline. Year ranges are in
// the AOY ('After Old Years') calendar that the lorebible uses;
// negative years are pre-AOY. Mix of point + bar events.
const TIMELINE_EVENTS = [
  { id: 'world-tree-planted',     name: 'Odin plants the Yggdrasil seed', type: 'wonder',     start: -812, end: -812 },
  { id: 'yggdrasil-fruit',        name: 'Yggdrasil bears fruit',           type: 'wonder',     start: -780, end: -780 },
  { id: 'first-frost',            name: 'The first long frost',            type: 'era',        start: -640, end: -610 },
  { id: 'aesir-vanir',            name: 'War of the Aesir and Vanir',      type: 'battle',     start: -522, end: -511 },
  { id: 'thor-coronation',        name: 'Thor takes the storm-mantle',     type: 'coronation', start: -388, end: -388 },
  { id: 'baldr-feast',            name: 'Baldr\u2019s feast at Breidablik', type: 'festival',  start: -340, end: -337 },
  { id: 'baldr-death',            name: 'The death of Baldr',              type: 'disaster',   start: -312, end: -312 },
  { id: 'fimbul-winter',          name: 'Fimbulwinter',                    type: 'era',        start: -280, end: -257 },
  { id: 'shieldwall-rises',       name: 'The Shieldwall rises in Caer Ys', type: 'political',  start: -180, end: -180 },
  { id: 'sigrun-oath',            name: 'Sigrun\u2019s oath at Hjalmar',    type: 'personal',  start: -64,  end: -64 },
  { id: 'kernow-stand',           name: 'Stand at Tintagel',               type: 'battle',     start: -44,  end: -42 },
  { id: 'crown-iron',             name: 'The Iron Crown is forged',        type: 'wonder',     start: -8,   end: 0 },
  { id: 'long-passage',           name: 'The long passage through Niflheim', type: 'religious', start: 12,   end: 78 },
  { id: 'jorth-stoneage',         name: 'Jörð enters the Stone Age',       type: 'era',        start: 80,   end: 220 },
  { id: 'wolfmoot',               name: 'Wolfmoot at the high pass',       type: 'political',  start: 156,  end: 158 },
  { id: 'dagr-funeral',           name: 'Dagr\u2019s funeral procession',  type: 'personal',   start: 184,  end: 185 },
  { id: 'thrymr-rising',          name: 'Thrymr\u2019s rising',            type: 'battle',     start: 211,  end: 217 },
];

const ZOOM_PRESETS = ['decade','century','millennium','epoch'];

function Timeline() {
  const [zoom, setZoom] = useState('millennium');
  const [enabled, setEnabled] = useState(() => new Set(TIMELINE_EVENT_TYPES.map(t => t.id)));
  const [showArrows, setShowArrows] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [hover, setHover] = useState(null); // {evt, x, y}

  const visible = useMemo(
    () => TIMELINE_EVENTS.filter(e => enabled.has(e.type)),
    [enabled]
  );

  function toggleType(id) {
    setEnabled(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  // Compute scale across the whole canon range.
  const range = useMemo(() => {
    const all = TIMELINE_EVENTS;
    const min = Math.min(...all.map(e => e.start)) - 40;
    const max = Math.max(...all.map(e => e.end)) + 40;
    return { min, max, span: max - min };
  }, []);

  const W = 1320; // intrinsic canvas width — scrolls if narrower
  const xFor = (year) => ((year - range.min) / range.span) * W;

  // Anchors (from anchors.json idea — saga waypoints)
  const anchors = [
    { year: -812, label: 'Yggdrasil planted' },
    { year: -312, label: 'Baldr falls' },
    { year:  0,   label: 'AOY 0 — present' },
    { year:  156, label: 'Wolfmoot' },
  ];

  // Tick marks based on zoom preset
  const ticks = useMemo(() => {
    const step = zoom === 'decade' ? 10
              : zoom === 'century' ? 50
              : zoom === 'millennium' ? 100
              : 200;
    const out = [];
    const start = Math.ceil(range.min / step) * step;
    for (let y = start; y <= range.max; y += step) {
      const major = (y % (step * 2) === 0);
      out.push({ year: y, major });
    }
    return out;
  }, [range, zoom]);

  // Lane assignment — group by type, one lane per enabled type
  const lanes = useMemo(() => {
    return TIMELINE_EVENT_TYPES.filter(t => enabled.has(t.id));
  }, [enabled]);

  return (
    <div className="tl">
      {/* === toolbar === */}
      <div className="tl-bar">
        <div className="tl-bar-left">
          <h2 className="tl-h">Timeline</h2>
          <span className="tl-sub">{visible.length} dated events visible of {TIMELINE_EVENTS.length} \u00b7 events-only view</span>
        </div>
        <div className="tl-bar-right">
          <button className="tl-btn tl-btn-ember">+ Quick-add event</button>
          <button
            className={"tl-chip" + (showArrows ? " is-active" : "")}
            onClick={() => setShowArrows(v => !v)}
          >→ arrows {showArrows ? "on" : "off"}</button>
          <button
            className={"tl-chip" + (editMode ? " is-edit" : "")}
            onClick={() => setEditMode(v => !v)}
          >{editMode ? "✎ edit mode" : "edit mode"}</button>
          <div className="tl-zooms">
            {ZOOM_PRESETS.map(p => (
              <button
                key={p}
                className={"tl-chip tl-zoom" + (zoom === p ? " is-active" : "")}
                onClick={() => setZoom(p)}
              >{p}</button>
            ))}
          </div>
        </div>
      </div>

      {/* === filter chips strip === */}
      <div className="tl-chips">
        <span className="tl-chip-label">Active filters</span>
        <span className="tl-fchip">World: Shieldwall <span className="tl-fchip-x">×</span></span>
        <span className="tl-fchip">From: 1000 BC <span className="tl-fchip-x">×</span></span>
        <span className="tl-fchip">To: 250 AOY <span className="tl-fchip-x">×</span></span>
        <button className="tl-clearall">Clear all</button>
      </div>

      {/* === anchors row === */}
      <div className="tl-anchors-bar">
        <span className="tl-eye">Anchors</span>
        {anchors.map(a => (
          <button key={a.label} className="tl-anchor-btn">
            <span className="tl-anchor-dot"/>
            {a.label}
          </button>
        ))}
        <button className="tl-anchor-btn is-add">+ Add anchor</button>
        <div className="tl-jump">
          <span>Jump to year</span>
          <input className="tl-jump-input" placeholder="0 AOY"/>
        </div>
      </div>

      {/* === main split: legend + canvas === */}
      <div className="tl-stage">
        <aside className="tl-legend">
          <div className="tl-legend-head">
            <span className="tl-eye">Event types</span>
            <div className="tl-legend-actions">
              <button className="tl-mini" onClick={() => setEnabled(new Set(TIMELINE_EVENT_TYPES.map(t=>t.id)))}>all</button>
              <button className="tl-mini" onClick={() => setEnabled(new Set())}>none</button>
            </div>
          </div>
          {TIMELINE_EVENT_TYPES.map(t => {
            const on = enabled.has(t.id);
            return (
              <button
                key={t.id}
                className={"tl-leg-row" + (on ? " is-on" : "")}
                onClick={() => toggleType(t.id)}
              >
                <span className="tl-swatch" style={{background: t.fill, borderColor: t.stroke}}/>
                <span className="tl-leg-name">{t.name}</span>
                <span className="tl-leg-count">{TIMELINE_EVENTS.filter(e => e.type === t.id).length}</span>
              </button>
            );
          })}

          <div className="tl-filters">
            <div className="tl-eye">Filters</div>
            <label className="tl-flbl">World</label>
            <select className="tl-fsel"><option>Shieldwall (canon)</option><option>Hidden draft</option></select>
            <label className="tl-flbl">Faction</label>
            <select className="tl-fsel"><option>— any —</option><option>The Aesir</option><option>The Shieldwall</option></select>
            <label className="tl-flbl">Character</label>
            <select className="tl-fsel"><option>— any —</option><option>Odin</option><option>Sigrun</option></select>
          </div>
        </aside>

        <div className={"tl-canvas-wrap" + (editMode ? " is-edit" : "")}>
          {editMode && (
            <div className="tl-edit-banner">
              <span><strong>Edit mode</strong> — click to select, shift-click to extend, drag to re-date. Press Esc to deselect.</span>
              <span className="tl-sel-count">0 selected</span>
            </div>
          )}
          <div className="tl-canvas-scroll">
            <svg className="tl-canvas" viewBox={`0 0 ${W} ${48 + lanes.length * 64}`} preserveAspectRatio="none">
              <defs>
                <pattern id="tl-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(214,201,168,0.04)" strokeWidth="1"/>
                </pattern>
                <linearGradient id="tl-fade" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(214,201,168,0.06)"/>
                  <stop offset="100%" stopColor="rgba(214,201,168,0)"/>
                </linearGradient>
                <marker id="tl-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(201,162,39,0.7)"/>
                </marker>
              </defs>
              <rect x="0" y="0" width={W} height={48 + lanes.length * 64} fill="url(#tl-grid)"/>

              {/* axis */}
              <g className="tl-axis">
                <line x1="0" y1="32" x2={W} y2="32" stroke="var(--border-strong-c)"/>
                {ticks.map(t => (
                  <g key={t.year} transform={`translate(${xFor(t.year)},32)`}>
                    <line y1="0" y2={t.major ? -8 : -4} stroke="rgba(214,201,168,0.4)"/>
                    {t.major && (
                      <text y="-12" textAnchor="middle" fill="var(--fg-3)" fontSize="10" fontFamily="var(--font-mono)">
                        {t.year > 0 ? `${t.year}` : t.year < 0 ? `${Math.abs(t.year)} BC` : '0 AOY'}
                      </text>
                    )}
                  </g>
                ))}
              </g>

              {/* anchor verticals */}
              {anchors.map(a => (
                <g key={a.label} className="tl-anchor-line">
                  <line x1={xFor(a.year)} x2={xFor(a.year)} y1="32" y2={48 + lanes.length * 64} stroke="var(--accent-gilt)" strokeWidth="0.7" strokeDasharray="2 4" opacity="0.5"/>
                </g>
              ))}

              {/* current year (AOY 0) */}
              <line x1={xFor(0)} x2={xFor(0)} y1="32" y2={48 + lanes.length * 64} stroke="var(--accent)" strokeWidth="1.2" opacity="0.7"/>
              <text x={xFor(0)+4} y="46" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">NOW</text>

              {/* lanes */}
              {lanes.map((lane, i) => {
                const y = 64 + i * 64;
                return (
                  <g key={lane.id}>
                    <rect x="0" y={y - 22} width={W} height="48" fill="url(#tl-fade)" opacity={i % 2 === 0 ? 0.7 : 0.3}/>
                    <text x="8" y={y - 8} fill="var(--fg-3)" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.18em" textTransform="uppercase">
                      {lane.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* events */}
              {visible.map(e => {
                const laneIdx = lanes.findIndex(l => l.id === e.type);
                if (laneIdx < 0) return null;
                const y = 64 + laneIdx * 64;
                const t = TIMELINE_EVENT_TYPES.find(x => x.id === e.type);
                const x1 = xFor(e.start);
                const x2 = xFor(e.end);
                const isPoint = (e.end - e.start) <= 2;
                return (
                  <g
                    key={e.id}
                    className="tl-evt"
                    onMouseEnter={(ev) => setHover({ evt: e, x: ev.clientX, y: ev.clientY })}
                    onMouseLeave={() => setHover(null)}
                    style={{cursor: editMode ? 'grab' : 'pointer'}}
                  >
                    {isPoint ? (
                      <>
                        <circle cx={x1} cy={y} r="6" fill={t.fill} stroke={t.stroke} strokeWidth="1.5"/>
                        <line x1={x1} y1={y-12} x2={x1} y2={y-22} stroke={t.stroke} strokeWidth="1"/>
                        <text x={x1+8} y={y-14} fill="var(--fg-1)" fontSize="11" fontFamily="var(--font-serif)" fontStyle="italic">
                          {e.name}
                        </text>
                      </>
                    ) : (
                      <>
                        <rect x={x1} y={y-10} width={Math.max(4, x2-x1)} height="20" rx="2"
                              fill={t.fill} stroke={t.stroke} strokeWidth="1" opacity="0.9"/>
                        <text x={x1 + 6} y={y+4} fill="#0e0b09" fontSize="11" fontFamily="var(--font-sans)" fontWeight="600">
                          {e.name}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}

              {/* cause-effect arrows (a couple of plausible ones) */}
              {showArrows && (() => {
                const pairs = [
                  ['baldr-feast', 'baldr-death'],
                  ['baldr-death', 'fimbul-winter'],
                  ['fimbul-winter', 'shieldwall-rises'],
                  ['sigrun-oath', 'kernow-stand'],
                ];
                return pairs.map(([a, b]) => {
                  const A = visible.find(e => e.id === a);
                  const B = visible.find(e => e.id === b);
                  if (!A || !B) return null;
                  const ax = xFor((A.start + A.end)/2);
                  const ay = 64 + lanes.findIndex(l => l.id === A.type) * 64;
                  const bx = xFor((B.start + B.end)/2);
                  const by = 64 + lanes.findIndex(l => l.id === B.type) * 64;
                  const cx = (ax + bx) / 2;
                  return (
                    <path key={a+b}
                      d={`M ${ax} ${ay} C ${cx} ${ay - 24}, ${cx} ${by - 24}, ${bx} ${by}`}
                      fill="none" stroke="rgba(201,162,39,0.55)" strokeWidth="1" strokeDasharray="2 3"
                      markerEnd="url(#tl-arrow)"
                    />
                  );
                });
              })()}
            </svg>
          </div>

          {hover && (
            <div className="tl-tip" style={{left: hover.x + 14, top: hover.y + 14, position: 'fixed'}}>
              <div className="tl-tip-name">{hover.evt.name}</div>
              <div className="tl-tip-meta">
                {hover.evt.start === hover.evt.end
                  ? formatYear(hover.evt.start)
                  : `${formatYear(hover.evt.start)} \u2014 ${formatYear(hover.evt.end)}`}
                {' \u00b7 '}{hover.evt.type}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function formatYear(y) {
  if (y < 0) return `${Math.abs(y)} BC`;
  if (y === 0) return '0 AOY';
  return `${y} AOY`;
}

window.Timeline = Timeline;
