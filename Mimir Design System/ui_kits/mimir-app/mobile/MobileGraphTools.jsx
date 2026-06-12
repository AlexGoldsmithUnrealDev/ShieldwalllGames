/* global React, PinchPanCanvas, MobileToolHeader */
const { useState: useStateGT } = React;

/* ──────────────────────────────────────────────────────────────
   Shared SVG tree primitives — used by FamilyTree, GenusTree,
   FactionTree. Keeps the rendering consistent across all three.
   ────────────────────────────────────────────────────────────── */
function TreeNode({ id, x, y, r=28, name, sub, c, img, focus, dashed, deceased, onClick }) {
  const cid = `mm-clip-${id}`;
  return (
    <g style={{cursor: onClick ? "pointer" : "default"}} onClick={onClick}>
      <defs>
        <clipPath id={cid}>
          <circle cx={x} cy={y} r={r - 2}/>
        </clipPath>
      </defs>
      <circle cx={x} cy={y} r={r}
        fill="#1c1814"
        stroke={focus ? "#b85a2c" : c}
        strokeWidth={focus ? 2.5 : 1.5}
        strokeDasharray={dashed ? "4 3" : null}/>
      {img && (
        <image href={img} x={x - r + 2} y={y - r + 2}
          width={(r - 2) * 2} height={(r - 2) * 2}
          clipPath={`url(#${cid})`}
          preserveAspectRatio="xMidYMid slice"
          opacity={deceased ? 0.4 : 0.95}/>
      )}
      {!img && (
        <text x={x} y={y + 6} textAnchor="middle"
          fontSize={r > 28 ? 22 : 18}
          fontFamily="var(--font-display)"
          fill={c}>
          {name[0]}
        </text>
      )}
      {deceased && (
        <line x1={x - r} y1={y - r} x2={x + r} y2={y + r}
          stroke="rgba(20,16,13,0.85)" strokeWidth={1.5}/>
      )}
      <text x={x} y={y + r + 16} textAnchor="middle"
        className="mm-svg-name" fontSize={13}>
        {name}
      </text>
      {sub && (
        <text x={x} y={y + r + 30} textAnchor="middle"
          className="mm-svg-sub" fontSize={10}>
          {sub}
        </text>
      )}
    </g>
  );
}

// Render a path like M x0 y0 L x0 yMid L x1 yMid L x1 y1 (a "T" connector).
function TConnector({ x1, y1, x2, y2, yMid, dashed, strong }) {
  const d = `M ${x1} ${y1} L ${x1} ${yMid} L ${x2} ${yMid} L ${x2} ${y2}`;
  return <path d={d}
    className={"mm-svg-edge" + (dashed ? " dashed" : "") + (strong ? " strong" : "")}/>;
}

// Marriage line — short horizontal between two nodes at the same y.
function MarriageLine({ x1, x2, y, r=28 }) {
  return <line x1={x1 + r} y1={y} x2={x2 - r} y2={y}
    className="mm-svg-edge strong"/>;
}

/* ──────────────────────────────────────────────────────────────
   FAMILY TREE — House of Ulf
   Real visual tree, pinch-zoom + pan. Tap a node to focus it.
   ────────────────────────────────────────────────────────────── */
const FT_W = 640, FT_H = 760;
const FT_NODES = [
  { id:"olaf",  x: 240, y:  90, name:"Olaf Sea-Wolf",      sub:"d. before reckoning", c:"#d99366" },
  { id:"bera",  x: 400, y:  90, name:"Bera the Old",       sub:"the last winter-queen", c:"#d99366" },

  { id:"erik",  x:  80, y: 260, name:"Erik the Quiet",     sub:"Ulf's brother",       c:"#d99366" },
  { id:"ulf",   x: 240, y: 260, name:"Ulf the Wolf-Father",sub:"d. Yr 23 — Hellas",   c:"#d99366",
    img:"../../../assets/characters/huskarl.png", deceased:true },
  { id:"hilda", x: 400, y: 260, name:"Hilda Steel-Eye",    sub:"wove the wolf-banner",c:"#d99366" },

  { id:"astrid",x:  80, y: 430, name:"Astrid Half-Hand",   sub:"shield-sister (sworn)", c:"#d99366",
    img:"../../../assets/characters/raider.png", dashed:true },
  { id:"sigrun",x: 240, y: 430, name:"Sigrun Ulfsdottir",  sub:"b. Yr 3 — wears the crown", c:"#d99366",
    img:"../../../assets/characters/spearmaiden.png", focus:true, r: 34 },
  { id:"bjorn", x: 400, y: 430, name:"Bjorn Ulfsson",      sub:"d. Yr 22 — Hellas",   c:"#d99366", deceased:true },

  { id:"hakon", x: 240, y: 620, name:"Hakon the Quiet",    sub:"ward of Sigrun",      c:"#d99366",
    img:"../../../assets/characters/young-raider.png", dashed:true },
];
// Marriages & parent→child edges
const FT_EDGES = [
  { kind:"marriage", a:"olaf",  b:"bera" },
  { kind:"marriage", a:"ulf",   b:"hilda" },

  // Children of Olaf+Bera (marriage midpoint at x=320, y=90)
  { kind:"child", from:[320, 90], to:[ 80, 260] }, // Erik
  { kind:"child", from:[320, 90], to:[240, 260] }, // Ulf

  // Children of Ulf+Hilda (mid at x=320, y=260)
  { kind:"child", from:[320, 260], to:[240, 430] }, // Sigrun
  { kind:"child", from:[320, 260], to:[400, 430] }, // Bjorn

  // Sworn-sister (Astrid) — dashed horizontal
  { kind:"sworn", from:[80, 430], to:[240, 430] },

  // Ward (Hakon) — dashed vertical
  { kind:"ward", from:[240, 430], to:[240, 620] },
];

function MobileFamilyTree({ onBack }) {
  const [selectedId, setSelectedId] = useStateGT("sigrun");
  const selected = FT_NODES.find(n => n.id === selectedId);

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="House of Ulf · family tree" onBack={onBack}/>
      <div className="mm-canvas-legend">
        <span className="mm-canvas-legend-item">
          <svg width="22" height="6"><line x1="0" y1="3" x2="22" y2="3" stroke="rgba(214,201,168,0.55)" strokeWidth="2"/></svg>
          line of blood
        </span>
        <span className="mm-canvas-legend-item">
          <svg width="22" height="6"><line x1="0" y1="3" x2="22" y2="3" stroke="rgba(214,201,168,0.45)" strokeWidth="1.5" strokeDasharray="4 3"/></svg>
          sworn / ward
        </span>
        <span className="mm-canvas-legend-item">
          <svg width="14" height="14"><line x1="0" y1="0" x2="14" y2="14" stroke="rgba(176,58,46,0.7)" strokeWidth="1.5"/></svg>
          fallen
        </span>
      </div>
      <div className="mm-toolview-canvas">
        <PinchPanCanvas
          contentWidth={FT_W} contentHeight={FT_H}
          minScale={0.25} maxScale={3}
          initialFocus={{ x: 240, y: 430, scale: 0.55 }}
        >
          <svg width={FT_W} height={FT_H} xmlns="http://www.w3.org/2000/svg">
            {/* "ancestral line continues" stub at top */}
            <line x1={320} y1={0} x2={320} y2={58}
              className="mm-svg-edge dashed" strokeOpacity={0.5}/>
            <text x={320} y={20} textAnchor="middle" className="mm-svg-sub">
              ↑ mythic lineage continues
            </text>

            {/* Edges */}
            {FT_EDGES.map((e, i) => {
              if (e.kind === "marriage") {
                const a = FT_NODES.find(n => n.id === e.a);
                const b = FT_NODES.find(n => n.id === e.b);
                return <MarriageLine key={i} x1={a.x} x2={b.x} y={a.y} r={28}/>;
              }
              if (e.kind === "child") {
                const yMid = (e.from[1] + e.to[1]) / 2;
                return <TConnector key={i}
                  x1={e.from[0]} y1={e.from[1]}
                  x2={e.to[0]}   y2={e.to[1] - 28}
                  yMid={yMid} />;
              }
              if (e.kind === "sworn") {
                return <line key={i}
                  x1={e.from[0] + 28} y1={e.from[1]}
                  x2={e.to[0]   - 28} y2={e.to[1]}
                  className="mm-svg-edge dashed"/>;
              }
              if (e.kind === "ward") {
                return <line key={i}
                  x1={e.from[0]} y1={e.from[1] + 34}
                  x2={e.to[0]}   y2={e.to[1] - 28}
                  className="mm-svg-edge dashed"/>;
              }
              return null;
            })}

            {/* Nodes */}
            {FT_NODES.map(n => (
              <TreeNode
                key={n.id}
                {...n}
                focus={n.id === selectedId}
                onClick={() => setSelectedId(n.id)}
              />
            ))}
          </svg>
        </PinchPanCanvas>

        {selected && (
          <div className="mm-canvas-detail">
            <button className="mm-canvas-detail-close"
              onClick={() => setSelectedId(null)} aria-label="Close">×</button>
            <span className="mm-canvas-detail-eyebrow" style={{ color: selected.c }}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:selected.c}}/>
              {selected.deceased ? "fallen" : selected.dashed ? "sworn / ward" : "living · house of Ulf"}
            </span>
            <h3 className="mm-canvas-detail-title">{selected.name}</h3>
            <p className="mm-canvas-detail-sub">{selected.sub}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   GENUS TREE — hierarchical layout from Yggdrasil
   ────────────────────────────────────────────────────────────── */
const GT_W = 1100, GT_H = 760;
const GT_NODES = [
  // root
  { id:"ygg", x: 550, y:  80, name:"Yggdrasil", sub:"world-tree", c:"#c9a227", r: 38 },

  // first branch
  { id:"aesir",     x: 140, y: 240, name:"Aesir",      sub:"the hall-above",     c:"#a07cc8", r: 30 },
  { id:"vanir",     x: 320, y: 240, name:"Vanir",      sub:"sea-kin",            c:"#6fa39d", r: 30 },
  { id:"jotnar",    x: 500, y: 240, name:"Jotnar",     sub:"giant-kin",          c:"#8aa0ab", r: 30 },
  { id:"dragon",    x: 680, y: 240, name:"Dragon-kin", sub:"of Niðhögg",         c:"#b85a2c", r: 30 },
  { id:"dvergr",    x: 860, y: 240, name:"Dvergr",     sub:"seven smith-clans",  c:"#a8814d", r: 30 },
  { id:"human",     x:1020, y: 240, name:"Humanity",   sub:"Midgard-kin",        c:"#d99366", r: 30 },

  // second branch — selected branches expanded
  { id:"odin",      x:  60, y: 420, name:"Odin",     sub:"All-Father",     c:"#a07cc8" },
  { id:"thor",      x: 160, y: 420, name:"Thor",     sub:"Thunder-Hand",   c:"#a07cc8" },
  { id:"frigg",     x: 260, y: 420, name:"Frigg",    sub:"Hall-Keeper",    c:"#a07cc8" },

  { id:"ice-jotn",  x: 440, y: 420, name:"Ice Jotnar", sub:"Hrímþursar",   c:"#8aa0ab" },
  { id:"fire-jotn", x: 560, y: 420, name:"Fire Jotnar",sub:"Múspell-kin",  c:"#8aa0ab" },

  { id:"nidhogg",   x: 680, y: 420, name:"Niðhögg",   sub:"root-gnawer",  c:"#b85a2c" },

  { id:"hornfolke", x: 900, y: 420, name:"Hornfolke", sub:"northmen",     c:"#d99366" },
  { id:"kernow",    x:1020, y: 420, name:"Kernow",    sub:"twelve towers",c:"#d99366" },
  { id:"winter",    x:1140, y: 420, name:"Winter Kings", sub:"highlands", c:"#d99366" },

  // third branch
  { id:"sigrun-g",  x: 840, y: 600, name:"Sigrun", sub:"Iron Crown", c:"#d99366",
    img:"../../../assets/characters/spearmaiden.png" },
  { id:"ulf-g",     x: 960, y: 600, name:"Ulf",    sub:"Wolf-Father", c:"#d99366",
    img:"../../../assets/characters/huskarl.png", deceased:true },
  { id:"bran-g",    x:1080, y: 600, name:"Bran",   sub:"the Stone-King", c:"#d99366",
    img:"../../../assets/characters/kernow-king.png" },
];
const GT_EDGES = [
  // ygg → six kindred
  ["ygg","aesir"], ["ygg","vanir"], ["ygg","jotnar"],
  ["ygg","dragon"], ["ygg","dvergr"], ["ygg","human"],
  // aesir → odin/thor/frigg
  ["aesir","odin"], ["aesir","thor"], ["aesir","frigg"],
  // jotnar → ice/fire
  ["jotnar","ice-jotn"], ["jotnar","fire-jotn"],
  // dragon → nidhogg
  ["dragon","nidhogg"],
  // human → hornfolke/kernow/winter
  ["human","hornfolke"], ["human","kernow"], ["human","winter"],
  // hornfolke → sigrun/ulf
  ["hornfolke","sigrun-g"], ["hornfolke","ulf-g"],
  // kernow → bran
  ["kernow","bran-g"],
];

function MobileGenusTree({ onBack }) {
  const [selectedId, setSelectedId] = useStateGT("hornfolke");
  const selected = GT_NODES.find(n => n.id === selectedId);
  const byId = (id) => GT_NODES.find(n => n.id === id);

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Genus tree · life of Yggdrasil" onBack={onBack}/>
      <div className="mm-canvas-legend">
        {[
          {l:"Aesir",   c:"#a07cc8"},
          {l:"Jotnar",  c:"#8aa0ab"},
          {l:"Dragon",  c:"#b85a2c"},
          {l:"Dvergr",  c:"#a8814d"},
          {l:"Human",   c:"#d99366"},
        ].map(x => (
          <span key={x.l} className="mm-canvas-legend-item">
            <span className="mm-canvas-legend-dot" style={{background:x.c}}/>
            {x.l}
          </span>
        ))}
      </div>
      <div className="mm-toolview-canvas">
        <PinchPanCanvas
          contentWidth={GT_W} contentHeight={GT_H}
          minScale={0.18} maxScale={3}
          initialFocus={{ x: 550, y: 360, scale: 0.42 }}
        >
          <svg width={GT_W} height={GT_H} xmlns="http://www.w3.org/2000/svg">
            {GT_EDGES.map(([fromId, toId], i) => {
              const a = byId(fromId); const b = byId(toId);
              const yMid = (a.y + b.y) / 2;
              return <TConnector key={i}
                x1={a.x} y1={a.y + (a.r || 28)}
                x2={b.x} y2={b.y - (b.r || 28)}
                yMid={yMid} />;
            })}
            {GT_NODES.map(n => (
              <TreeNode key={n.id} {...n}
                focus={n.id === selectedId}
                onClick={() => setSelectedId(n.id)}/>
            ))}
          </svg>
        </PinchPanCanvas>

        {selected && (
          <div className="mm-canvas-detail">
            <button className="mm-canvas-detail-close"
              onClick={() => setSelectedId(null)} aria-label="Close">×</button>
            <span className="mm-canvas-detail-eyebrow" style={{ color: selected.c }}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:selected.c}}/>
              kindred · genus
            </span>
            <h3 className="mm-canvas-detail-title">{selected.name}</h3>
            <p className="mm-canvas-detail-sub">{selected.sub}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   FACTION TREE — banners & oaths
   ────────────────────────────────────────────────────────────── */
const FAT_W = 1100, FAT_H = 720;
const FAT_NODES = [
  // root banners
  { id:"iron",    x: 220, y: 100, name:"Iron Crown",   sub:"confederation",     c:"#c43a4e", r: 34 },
  { id:"kernow",  x: 560, y: 100, name:"Kernow",       sub:"twelve towers",     c:"#a07cc8", r: 34 },
  { id:"asgardr", x: 880, y: 100, name:"Ásgarðr",      sub:"the hall-above",    c:"#6b89c2", r: 34 },

  // Iron Crown — seven jarldoms (3 fallen, 4 standing)
  { id:"caer",    x:  60, y: 320, name:"Caernarfon",   sub:"seat — standing",   c:"#c43a4e" },
  { id:"horn",    x: 160, y: 320, name:"Hornfolke",    sub:"confederate",       c:"#c43a4e" },
  { id:"hellas-j",x: 260, y: 320, name:"Hellas-jarl",  sub:"FALLEN · Yr 23",    c:"#c43a4e", deceased:true },
  { id:"avalon-j",x: 360, y: 320, name:"Avalon-jarl",  sub:"standing",          c:"#c43a4e" },
  // (3 more nodes implied but kept off-canvas for readability)

  // Kernow — three towers
  { id:"high",    x: 460, y: 320, name:"High Tower",   sub:"seat of Bran",      c:"#a07cc8" },
  { id:"sea",     x: 560, y: 320, name:"Sea Tower",    sub:"harbour-wall",      c:"#a07cc8" },
  { id:"stone",   x: 660, y: 320, name:"Stone Tower",  sub:"old keep",          c:"#a07cc8" },

  // Asgardr
  { id:"odin-f",  x: 780, y: 320, name:"Odin's hall",  sub:"high seat",         c:"#6b89c2" },
  { id:"frigg-f", x: 880, y: 320, name:"Frigg's threshold", sub:"keeper",        c:"#6b89c2" },
  { id:"thor-f",  x: 980, y: 320, name:"Thor's wall",  sub:"outer guard",       c:"#6b89c2" },

  // Iron Crown leaders
  { id:"sigrun-f",x: 110, y: 540, name:"Sigrun",       sub:"crown-holder",      c:"#c43a4e",
    img:"../../../assets/characters/spearmaiden.png", r: 30 },
  { id:"astrid-f",x: 230, y: 540, name:"Astrid",       sub:"shield-sister",     c:"#c43a4e",
    img:"../../../assets/characters/raider.png" },
  { id:"ulf-f",   x: 340, y: 540, name:"Ulf",          sub:"founder, fallen",   c:"#c43a4e",
    img:"../../../assets/characters/huskarl.png", deceased:true },

  // Kernow leaders
  { id:"bran-f",  x: 560, y: 540, name:"Bran",         sub:"the Stone-King",    c:"#a07cc8",
    img:"../../../assets/characters/kernow-king.png" },
];
const FAT_EDGES = [
  ["iron","caer"], ["iron","horn"], ["iron","hellas-j"], ["iron","avalon-j"],
  ["kernow","high"], ["kernow","sea"], ["kernow","stone"],
  ["asgardr","odin-f"], ["asgardr","frigg-f"], ["asgardr","thor-f"],
  // leaders
  ["caer","sigrun-f"], ["caer","astrid-f"], ["caer","ulf-f"],
  ["high","bran-f"],
];

function MobileFactionTree({ onBack }) {
  const [selectedId, setSelectedId] = useStateGT("iron");
  const selected = FAT_NODES.find(n => n.id === selectedId);
  const byId = (id) => FAT_NODES.find(n => n.id === id);

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Faction tree · banners & oaths" onBack={onBack}/>
      <div className="mm-canvas-legend">
        <span className="mm-canvas-legend-item"><span className="mm-canvas-legend-dot" style={{background:"#c43a4e"}}/>Iron Crown</span>
        <span className="mm-canvas-legend-item"><span className="mm-canvas-legend-dot" style={{background:"#a07cc8"}}/>Kernow</span>
        <span className="mm-canvas-legend-item"><span className="mm-canvas-legend-dot" style={{background:"#6b89c2"}}/>Ásgarðr</span>
      </div>
      <div className="mm-toolview-canvas">
        <PinchPanCanvas
          contentWidth={FAT_W} contentHeight={FAT_H}
          minScale={0.2} maxScale={3}
          initialFocus={{ x: 220, y: 360, scale: 0.48 }}
        >
          <svg width={FAT_W} height={FAT_H} xmlns="http://www.w3.org/2000/svg">
            {/* Banner background fills, one per top-level house */}
            <rect x={20}  y={60} width={400} height={520} rx={12}
              fill="rgba(196,58,78,0.04)" stroke="rgba(196,58,78,0.18)" strokeDasharray="4 4"/>
            <rect x={440} y={60} width={260} height={520} rx={12}
              fill="rgba(160,124,200,0.04)" stroke="rgba(160,124,200,0.18)" strokeDasharray="4 4"/>
            <rect x={720} y={60} width={340} height={300} rx={12}
              fill="rgba(107,137,194,0.04)" stroke="rgba(107,137,194,0.18)" strokeDasharray="4 4"/>

            {FAT_EDGES.map(([fromId, toId], i) => {
              const a = byId(fromId); const b = byId(toId);
              const yMid = (a.y + b.y) / 2;
              return <TConnector key={i}
                x1={a.x} y1={a.y + (a.r || 28)}
                x2={b.x} y2={b.y - (b.r || 28)}
                yMid={yMid} />;
            })}

            {FAT_NODES.map(n => (
              <TreeNode key={n.id} {...n}
                focus={n.id === selectedId}
                onClick={() => setSelectedId(n.id)}/>
            ))}
          </svg>
        </PinchPanCanvas>

        {selected && (
          <div className="mm-canvas-detail">
            <button className="mm-canvas-detail-close"
              onClick={() => setSelectedId(null)} aria-label="Close">×</button>
            <span className="mm-canvas-detail-eyebrow" style={{ color: selected.c }}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:selected.c}}/>
              {selected.deceased ? "fallen banner" : "banner · oath-bound"}
            </span>
            <h3 className="mm-canvas-detail-title">{selected.name}</h3>
            <p className="mm-canvas-detail-sub">{selected.sub}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   CONNECTIONS — 2D force-graph (pre-computed positions)
   Honest mobile downgrade from the desktop's 3D web.
   ────────────────────────────────────────────────────────────── */
const CN_W = 1000, CN_H = 800;
const CN_NODES = [
  // people
  { id:"sigrun", x: 500, y: 400, name:"Sigrun",     type:"Character", c:"#d99366", r: 30,
    img:"../../../assets/characters/spearmaiden.png", focus:true },
  { id:"ulf",    x: 360, y: 280, name:"Ulf",        type:"Character", c:"#d99366",
    img:"../../../assets/characters/huskarl.png", deceased:true },
  { id:"astrid", x: 360, y: 540, name:"Astrid",     type:"Character", c:"#d99366",
    img:"../../../assets/characters/raider.png" },
  { id:"hakon",  x: 580, y: 580, name:"Hakon",      type:"Character", c:"#d99366",
    img:"../../../assets/characters/young-raider.png" },
  { id:"bran",   x: 700, y: 320, name:"Bran",       type:"Character", c:"#d99366",
    img:"../../../assets/characters/kernow-king.png" },
  { id:"hilda",  x: 220, y: 200, name:"Hilda",      type:"Character", c:"#d99366" },
  // places
  { id:"caer",   x: 660, y: 480, name:"Caernarfon", type:"Place",     c:"#7da265" },
  { id:"hellas", x: 200, y: 380, name:"Hellas",     type:"Place",     c:"#7da265" },
  { id:"alba",   x: 100, y: 180, name:"Alba",       type:"Place",     c:"#7da265" },
  { id:"avalon", x: 820, y: 600, name:"Avalon",     type:"Place",     c:"#7da265" },
  // factions
  { id:"iron",   x: 380, y: 100, name:"Iron Crown", type:"Faction",   c:"#c43a4e", r: 30 },
  { id:"kernow", x: 800, y: 120, name:"Kernow",     type:"Faction",   c:"#c43a4e" },
  // events
  { id:"burn",   x: 140, y: 540, name:"Burn. Hellas", type:"Event",  c:"#8d8478" },
  { id:"treaty", x: 900, y: 720, name:"Treaty Av.", type:"Event",    c:"#8d8478" },
  // artefacts
  { id:"crown",  x: 600, y: 200, name:"Iron Crown",  type:"Artefact",c:"#a8814d" },
  { id:"banner", x: 260, y: 100, name:"Wolf-banner", type:"Artefact",c:"#a8814d" },
  // runes
  { id:"tiwaz",  x: 760, y: 220, name:"Tiwaz",       type:"Rune",    c:"#c9a227" },
];
const CN_EDGES = [
  // kin
  ["ulf","sigrun","kin"], ["hilda","sigrun","kin"], ["ulf","hilda","kin"],
  // sworn / ward
  ["astrid","sigrun","sworn"], ["hakon","sigrun","ward"],
  // seat
  ["sigrun","caer","seat"], ["ulf","caer","seat"], ["bran","kernow","seat"],
  // origin / fell
  ["ulf","hellas","fell"], ["sigrun","alba","origin"],
  // banner / faction
  ["sigrun","iron","leads"], ["ulf","iron","founded"], ["bran","kernow","leads"],
  // events
  ["burn","hellas","at"], ["burn","ulf","killed"], ["treaty","avalon","at"], ["treaty","sigrun","party"],
  // artefacts
  ["crown","iron","emblem"], ["crown","sigrun","held"], ["banner","sigrun","carried"], ["banner","hilda","wove"],
  // rune
  ["tiwaz","crown","inscribed"],
];

function MobileRelationships({ onBack }) {
  const [selectedId, setSelectedId] = useStateGT("sigrun");
  const selected = CN_NODES.find(n => n.id === selectedId);
  const byId = (id) => CN_NODES.find(n => n.id === id);

  // Which edges touch the selected node — highlight them
  const touches = (e) => e[0] === selectedId || e[1] === selectedId;

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Connections · 312 edges" onBack={onBack}/>
      <div className="mm-canvas-legend">
        {[
          {l:"Character", c:"#d99366"},
          {l:"Place",     c:"#7da265"},
          {l:"Faction",   c:"#c43a4e"},
          {l:"Event",     c:"#8d8478"},
          {l:"Artefact",  c:"#a8814d"},
          {l:"Rune",      c:"#c9a227"},
        ].map(x => (
          <span key={x.l} className="mm-canvas-legend-item">
            <span className="mm-canvas-legend-dot" style={{background:x.c}}/>
            {x.l}
          </span>
        ))}
      </div>
      <div className="mm-toolview-canvas">
        <PinchPanCanvas
          contentWidth={CN_W} contentHeight={CN_H}
          minScale={0.2} maxScale={4}
          initialFocus={{ x: 500, y: 400, scale: 0.55 }}
        >
          <svg width={CN_W} height={CN_H} xmlns="http://www.w3.org/2000/svg">
            {/* Edges */}
            {CN_EDGES.map((e, i) => {
              const a = byId(e[0]); const b = byId(e[1]);
              if (!a || !b) return null;
              const hot = touches(e);
              return (
                <g key={i}>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke={hot ? "#b85a2c" : "rgba(214,201,168,0.22)"}
                    strokeWidth={hot ? 2 : 1}/>
                  {hot && (
                    <text
                      x={(a.x + b.x) / 2}
                      y={(a.y + b.y) / 2 - 4}
                      textAnchor="middle"
                      className="mm-svg-sub"
                      fill="#f3c8a3"
                      style={{textTransform:"none"}}>
                      {e[2]}
                    </text>
                  )}
                </g>
              );
            })}
            {/* Nodes */}
            {CN_NODES.map(n => (
              <TreeNode key={n.id} {...n}
                focus={n.id === selectedId}
                onClick={() => setSelectedId(n.id)}/>
            ))}
          </svg>
        </PinchPanCanvas>

        {selected && (
          <div className="mm-canvas-detail">
            <button className="mm-canvas-detail-close"
              onClick={() => setSelectedId(null)} aria-label="Close">×</button>
            <span className="mm-canvas-detail-eyebrow" style={{ color: selected.c }}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:selected.c}}/>
              {selected.type} · {CN_EDGES.filter(touches).length} connections
            </span>
            <h3 className="mm-canvas-detail-title">{selected.name}</h3>
            <p className="mm-canvas-detail-sub">
              Tap a connected node to follow its edges, or pinch out to see the whole web.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   EXPORT — unchanged form, still the list view
   ────────────────────────────────────────────────────────────── */
function MobileExport({ onBack }) {
  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Export to engine" onBack={onBack}/>
      <div className="mm-toolview-body">
        <span className="mm-eyebrow">Target</span>
        <div className="mm-tr-pane" style={{display:"flex", alignItems:"center", gap:10}}>
          <div className="mm-schema-icon" style={{fontSize:14}}>⤓</div>
          <div style={{flex:1}}>
            <div className="mm-vt-title">Unreal Engine 5.4</div>
            <div className="mm-vt-yr">Last build · 2 mins ago · clean</div>
          </div>
          <span className="mm-linklist-arrow">›</span>
        </div>

        <span className="mm-eyebrow" style={{marginTop:14, display:"block"}}>Scope</span>
        <ul className="mm-linklist">
          <li><span className="mm-linklist-dot" style={{background:"#d99366"}}/>Characters · 47 entries<span className="mm-linklist-arrow">✓</span></li>
          <li><span className="mm-linklist-dot" style={{background:"#7da265"}}/>Places · 23 entries<span className="mm-linklist-arrow">✓</span></li>
          <li><span className="mm-linklist-dot" style={{background:"#c43a4e"}}/>Factions · 11 entries<span className="mm-linklist-arrow">✓</span></li>
          <li><span className="mm-linklist-dot" style={{background:"#8d8478"}}/>Events · 38 entries<span className="mm-linklist-arrow">○</span></li>
          <li><span className="mm-linklist-dot" style={{background:"#c9a227"}}/>Runes · 24 entries<span className="mm-linklist-arrow">○</span></li>
        </ul>

        <button className="mm-btn-primary" style={{width:"100%", justifyContent:"center", marginTop:14, padding:"12px"}}>
          Build &amp; sync · ~90s
        </button>
      </div>
    </div>
  );
}

window.MobileFamilyTree     = MobileFamilyTree;
window.MobileGenusTree      = MobileGenusTree;
window.MobileFactionTree    = MobileFactionTree;
window.MobileRelationships  = MobileRelationships;
window.MobileExport         = MobileExport;
