/* global React */
const { useState, useMemo } = React;

// Cast — pulled from the actual lorebible (asgardian + jotnar branches).
// Each character carries the relationship payload the FamilyTree route
// reads from frontmatter `relationships:`.
const FT_CHARACTERS = [
  { id: 'borr',    name: 'Borr',    born: 5000200, died: 5000095, status: 'deceased', species: 'aesir' },
  { id: 'bestla',  name: 'Bestla',  born: 5000180, died: 5000050, status: 'deceased', species: 'jotnar' },
  { id: 'odin',    name: 'Odin',    born: 5000100, died: null,    status: 'alive',    species: 'aesir', focused: true },
  { id: 'vili',    name: 'Vili',    born: 5000098, died: null,    status: 'alive',    species: 'aesir' },
  { id: 've',      name: 'Vé',      born: 5000095, died: null,    status: 'alive',    species: 'aesir' },
  { id: 'frigg',   name: 'Frigg',   born: 5000080, died: null,    status: 'alive',    species: 'aesir' },
  { id: 'jord',    name: 'Jörð',    born: 5000060, died: null,    status: 'alive',    species: 'jotnar' },
  { id: 'thor',    name: 'Thor',    born: 4999800, died: null,    status: 'alive',    species: 'aesir' },
  { id: 'baldr',   name: 'Baldr',   born: 4999500, died: 4999188, status: 'deceased', species: 'aesir' },
  { id: 'hodr',    name: 'Höðr',    born: 4999500, died: null,    status: 'alive',    species: 'aesir' },
];

// (sourceId, targetId, type) — type drives stroke colour & label.
const FT_EDGES = [
  { s: 'borr',   t: 'odin',  type: 'parent-child' },
  { s: 'borr',   t: 'vili',  type: 'parent-child' },
  { s: 'borr',   t: 've',    type: 'parent-child' },
  { s: 'bestla', t: 'odin',  type: 'parent-child' },
  { s: 'bestla', t: 'vili',  type: 'parent-child' },
  { s: 'bestla', t: 've',    type: 'parent-child' },
  { s: 'borr',   t: 'bestla',type: 'spouse' },
  { s: 'odin',   t: 'frigg', type: 'spouse' },
  { s: 'odin',   t: 'jord',  type: 'lover' },
  { s: 'odin',   t: 'thor',  type: 'parent-child' },
  { s: 'jord',   t: 'thor',  type: 'parent-child' },
  { s: 'odin',   t: 'baldr', type: 'parent-child' },
  { s: 'frigg',  t: 'baldr', type: 'parent-child' },
  { s: 'odin',   t: 'hodr',  type: 'parent-child' },
  { s: 'frigg',  t: 'hodr',  type: 'parent-child' },
];

const EDGE_STYLE = {
  'parent-child': { stroke: '#c9a227', dash: null,    label: 'parent' },
  'spouse':       { stroke: '#b85a2c', dash: null,    label: 'spouse' },
  'lover':        { stroke: '#b85a2c', dash: '4 4',   label: 'lover'  },
  'sibling':      { stroke: '#8aa0ab', dash: '2 3',   label: 'sibling'},
};

// Manually positioned for a clean 3-generation tree.
const POSITIONS = {
  borr:    { x: 200, y:  60 },
  bestla:  { x: 470, y:  60 },
  odin:    { x: 200, y: 230 },
  vili:    { x: 460, y: 230 },
  ve:      { x: 670, y: 230 },
  frigg:   { x: -10, y: 230 },
  jord:    { x: 380, y: 380 },
  thor:    { x: 540, y: 530 },
  baldr:   { x: 130, y: 530 },
  hodr:    { x: 330, y: 530 },
};

const NODE_W = 200;
const NODE_H = 86;

function FamilyTree() {
  const [mode, setMode] = useState('focused'); // 'chooser' | 'focused' | 'show-all'
  const [focusId, setFocusId] = useState('odin');
  const [cultureFilter, setCultureFilter] = useState(new Set());
  const [propagation, setPropagation] = useState(false);
  const [zoom, setZoom] = useState(1);

  const focused = FT_CHARACTERS.find(c => c.id === focusId);

  // CHOOSER
  if (mode === 'chooser') {
    return (
      <div className="ft">
        <header className="ft-head">
          <h2>Family tree</h2>
        </header>
        <div className="ft-chooser">
          <div className="ft-chooser-card">
            <span className="tl-eye">Stage 25 \u00b7 focus chooser</span>
            <h3>Pick a character to anchor the tree on.</h3>
            <p>Type a name to focus. Or open the full graph and let the layout breathe.</p>
            <input className="ft-search" placeholder="Type a character\u2019s name\u2026"/>
            <div className="ft-chooser-list">
              {FT_CHARACTERS.slice(0, 6).map(c => (
                <button key={c.id} className="ft-chooser-row"
                        onClick={() => { setFocusId(c.id); setMode('focused'); }}>
                  <span className="ft-chooser-name">{c.name}</span>
                  <span className="ft-chooser-meta">
                    {c.species === 'aesir' ? 'Aesir' : 'Jötnar'} \u00b7 {c.status}
                  </span>
                </button>
              ))}
            </div>
            <button className="ft-chooser-all" onClick={() => setMode('show-all')}>
              Show all characters \u2192
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ft">
      <div className="ft-split">
        <aside className="ft-side">
          <div className="ft-side-head">
            <h2>Family tree</h2>
            <button className="ft-back" onClick={() => setMode('chooser')}>\u2190 Change focus</button>
          </div>
          <p className="ft-hint">
            Drag between handles to add a relationship. Top \u2192 parent;
            left/right \u2192 spouse or sibling. Alt-click a line to remove it;
            right-click to change its type.
          </p>

          <div className="ft-block">
            <div className="tl-eye">Focus on character</div>
            <div className="ft-focus-pill">
              <span className="ft-focus-dot"/>
              <span className="ft-focus-name">{focused?.name}</span>
              <button className="ft-focus-x" onClick={() => setMode('show-all')}>change</button>
            </div>
          </div>

          <div className="ft-block">
            <div className="tl-eye">Culture</div>
            <div className="ft-chiprow">
              {['Asgardian','Jötnar','Vanir','Dvergr'].map(c => {
                const on = cultureFilter.has(c);
                return (
                  <button key={c}
                    className={"ft-chip" + (on ? " is-on" : "")}
                    onClick={() => setCultureFilter(prev => {
                      const next = new Set(prev);
                      if (next.has(c)) next.delete(c); else next.add(c);
                      return next;
                    })}>{c}</button>
                );
              })}
            </div>
          </div>

          <div className="ft-block ft-cheat">
            <div className="tl-eye">Connector cheatsheet</div>
            <ul>
              <li><kbd>\u2191</kbd> top \u2014 parent</li>
              <li><kbd>\u2193</kbd> bottom \u2014 child</li>
              <li><kbd>\u2190 \u2192</kbd> sides \u2014 spouse / sibling</li>
              <li><kbd>Alt</kbd>+click line \u2014 remove</li>
              <li>Right-click line \u2014 change type</li>
            </ul>
          </div>

          <div className="ft-block ft-settings">
            <div className="tl-eye">Tree settings</div>
            <label className="ft-toggle">
              <input type="checkbox" checked={propagation} onChange={e => setPropagation(e.target.checked)}/>
              <span>Prompt for inheritance when connecting parents.</span>
            </label>
          </div>

          <div className="ft-stats">
            {FT_CHARACTERS.length} visible \u00b7 {FT_EDGES.length} edges
          </div>
          <button className="ft-reset">Reset layout</button>
        </aside>

        <div className="ft-canvas-wrap">
          {/* canvas chrome */}
          <div className="ft-canvas-bar">
            <div className="ft-mode">
              <button className={"tl-chip" + (mode==='focused' ? " is-active" : "")}
                      onClick={() => setMode('focused')}>focused</button>
              <button className={"tl-chip" + (mode==='show-all' ? " is-active" : "")}
                      onClick={() => setMode('show-all')}>show all</button>
            </div>
            <div className="ft-zoom">
              <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))}>\u2212</button>
              <span>{Math.round(zoom*100)}%</span>
              <button onClick={() => setZoom(z => Math.min(1.5, z + 0.1))}>+</button>
              <button className="tl-chip">fit</button>
            </div>
          </div>

          <div className="ft-canvas" data-screen-label="03 Family tree">
            {/* dotted background */}
            <svg className="ft-bg" width="100%" height="100%">
              <defs>
                <pattern id="ft-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(214,201,168,0.07)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ft-dots)"/>
            </svg>

            <div className="ft-stage" style={{transform: `scale(${zoom})`, transformOrigin: '0 0'}}>
              {/* edges layer (SVG) */}
              <svg className="ft-edges" width="900" height="660" style={{overflow: 'visible'}}>
                <defs>
                  <marker id="ft-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a227"/>
                  </marker>
                </defs>
                {FT_EDGES.map(e => {
                  const a = POSITIONS[e.s]; const b = POSITIONS[e.t];
                  if (!a || !b) return null;
                  const style = EDGE_STYLE[e.type];
                  // Parent-child edges leave from bottom of source, enter top of target.
                  // Spouse / lover edges run between the inner sides.
                  const isVertical = e.type === 'parent-child';
                  const x1 = isVertical ? a.x + NODE_W/2 : (a.x < b.x ? a.x + NODE_W : a.x);
                  const y1 = isVertical ? a.y + NODE_H : a.y + NODE_H/2;
                  const x2 = isVertical ? b.x + NODE_W/2 : (a.x < b.x ? b.x : b.x + NODE_W);
                  const y2 = isVertical ? b.y         : b.y + NODE_H/2;
                  const midY = (y1 + y2) / 2;
                  const d = isVertical
                    ? `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`
                    : `M ${x1} ${y1} L ${x2} ${y2}`;
                  return (
                    <g key={e.s + '-' + e.t} className="ft-edge">
                      <path d={d} stroke={style.stroke} strokeWidth="1.5"
                            strokeDasharray={style.dash || undefined}
                            fill="none"
                            markerEnd={isVertical ? 'url(#ft-arrow)' : undefined}/>
                      {!isVertical && (
                        <text x={(x1+x2)/2} y={(y1+y2)/2 - 6} textAnchor="middle"
                              fill={style.stroke} fontSize="10"
                              fontFamily="var(--font-sans)" fontStyle="italic">
                          {style.label}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* nodes layer */}
              {FT_CHARACTERS.map(c => {
                const p = POSITIONS[c.id]; if (!p) return null;
                const isFocus = c.id === focusId;
                const stub = c.id === 've' || c.id === 'hodr'; // demo stubs
                return (
                  <div key={c.id}
                       className={"ft-node" + (isFocus ? " is-focus" : "") + (stub ? " is-stub" : "")}
                       style={{left: p.x, top: p.y, width: NODE_W, height: NODE_H}}>
                    {/* handles (top/right/bottom/left) */}
                    <span className="ft-handle ft-h-top"/>
                    <span className="ft-handle ft-h-right"/>
                    <span className="ft-handle ft-h-bottom"/>
                    <span className="ft-handle ft-h-left"/>
                    <div className="ft-node-row">
                      <span className="ft-node-name">{c.name}</span>
                      {stub && <span className="ft-node-stub" title="Stub">●</span>}
                      <span className="ft-node-status">
                        {c.status === 'deceased' ? '\u2020' : c.status === 'missing' ? '?' : ''}
                      </span>
                    </div>
                    <div className="ft-node-meta">
                      {formatLifespan(c.born, c.died)}
                    </div>
                    <a className="ft-node-open" onClick={(e)=>e.preventDefault()}>open editor</a>
                  </div>
                );
              })}
            </div>

            {/* zoom + minimap (top-right) */}
            <div className="ft-minimap">
              <div className="ft-mm-eye">map</div>
              <svg viewBox="0 0 220 160" width="100%" height="100%">
                {FT_EDGES.map(e => {
                  const a = POSITIONS[e.s]; const b = POSITIONS[e.t];
                  if (!a || !b) return null;
                  return <line key={e.s+e.t} x1={a.x/4.5+12} y1={a.y/4.5+12} x2={b.x/4.5+12} y2={b.y/4.5+12} stroke="rgba(201,162,39,0.4)" strokeWidth="0.6"/>;
                })}
                {FT_CHARACTERS.map(c => {
                  const p = POSITIONS[c.id]; if (!p) return null;
                  return <rect key={c.id} x={p.x/4.5 + 8} y={p.y/4.5 + 9} width="10" height="6" rx="1"
                               fill={c.id === focusId ? '#b85a2c' : '#c9a227'}/>;
                })}
                <rect x="6" y="6" width="76" height="56" fill="none" stroke="rgba(184,90,44,0.7)" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatLifespan(b, d) {
  const fy = (y) => y == null ? '' : (y < 0 ? `${Math.abs(y)} BC` : y < 100 ? `${y} AOY` : `c. ${Math.round(y/100)*100} BC`);
  if (b == null && d == null) return '';
  if (b != null && d == null) return `${fy(b)} \u2014`;
  if (b == null && d != null) return `\u2014 ${fy(d)}`;
  return `${fy(b)} \u2014 ${fy(d)}`;
}

window.FamilyTree = FamilyTree;
