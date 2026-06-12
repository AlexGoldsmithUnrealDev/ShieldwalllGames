/* global React, PinchPanCanvas, MobileToolHeader */
const { useState: useStateTL } = React;

/*
 * Real visual timeline — horizontal SVG canvas.
 *
 * Layout (content): 2200 × 560.
 *   y =   0–60   : era band labels
 *   y =  60–100  : year axis
 *   y = 100–520  : 6 swimlanes (Cosmic, Magic, Founding, Politics, War, Calendar)
 *   y = 520–560  : era markers (Long War etc.)
 *
 * x is a "story position" 0–2200 that compresses the deep past (where
 * dates blur) and expands the recent reckoning (where every winter
 * matters). Auto-fit on mount; pan/pinch to explore.
 */

const TL_LANES = [
  { id: "Cosmic",   label: "Cosmic",   c: "#a07cc8" },
  { id: "Magic",    label: "Magic",    c: "#c9a227" },
  { id: "Founding", label: "Founding", c: "#7da265" },
  { id: "Politics", label: "Politics", c: "#c43a4e" },
  { id: "War",      label: "War",      c: "#b03a2e" },
  { id: "Calendar", label: "Calendar", c: "#8aa0ab" },
];
const LANE_H = 70;
const LANE_Y0 = 110;
function laneY(idx) { return LANE_Y0 + LANE_H / 2 + idx * LANE_H; }

const TL_ERAS = [
  { x0:   0, x1:  640, label: "Before-time",        c: "rgba(160,124,200,0.10)" },
  { x0: 640, x1: 1180, label: "Founding ages",      c: "rgba(125,162,101,0.10)" },
  { x0:1180, x1: 1820, label: "Long War",           c: "rgba(176,58,46,0.12)"  },
  { x0:1820, x1: 2200, label: "After-the-treaty",   c: "rgba(184,90,44,0.10)"  },
];

const TL_YEARS = [
  { x: 100,  label: "before-reckoning" },
  { x: 400,  label: "first dawn" },
  { x: 720,  label: "Yr -240" },
  { x: 920,  label: "Yr -120" },
  { x: 1100, label: "Yr -40" },
  { x: 1200, label: "Yr 0 AOY" },
  { x: 1340, label: "Yr 14" },
  { x: 1430, label: "Yr 18" },
  { x: 1520, label: "Yr 22" },
  { x: 1600, label: "Yr 23" },
  { x: 1700, label: "Yr 26" },
  { x: 1820, label: "Yr 31" },
  { x: 1960, label: "Yr 38" },
  { x: 2120, label: "now" },
];

const TL_EVENTS = [
  { x: 100,  lane: 0, title: "Yggdrasil bears fruit", note: "Four worlds shaped from the great ash." },
  { x: 250,  lane: 0, title: "Bor begets the Aesir",  note: "Odin, Vili, Vé — the first sons of god." },
  { x: 400,  lane: 1, title: "First runes cut",       note: "Mimir teaches the rune-rite at the well." },
  { x: 540,  lane: 1, title: "Drakenthar formalised", note: "Three registers: high, low, void." },
  { x: 720,  lane: 2, title: "Winter Kings claim Alba", note: "Twelve houses cross the high pass." },
  { x: 880,  lane: 2, title: "Hornfolke split south", note: "Half the people cross the wall in search of warmer hearths." },
  { x: 1080, lane: 2, title: "Twelve Towers raised",  note: "Bran's grandfather builds Kernow's seat." },
  { x: 1200, lane: 5, title: "First reckoning",       note: "Hornfolke count the year nobody died." },
  { x: 1340, lane: 2, title: "Iron Crown forged",     note: "Ulf beats seven prow-nails cold." },
  { x: 1430, lane: 3, title: "Seven oaths sworn",     note: "Seven jarls, one ring of black iron." },
  { x: 1520, lane: 4, title: "Long War turns south",  note: "Southern wall falls. Fleet rides winter winds." },
  { x: 1600, lane: 4, title: "Burning of Hellas",     note: "The city falls. Ulf among the dead by morning.", now: true },
  { x: 1700, lane: 3, title: "Sigrun crowned",        note: "Nine days after the fire. Caernarfon hall." },
  { x: 1820, lane: 3, title: "Treaty of Avalon",      note: "Eleven oaths on broken ice. Three jarls, one king." },
  { x: 1960, lane: 1, title: "Still the Tide cast",   note: "Astrid lays the fjord flat to cross." },
  { x: 2080, lane: 5, title: "Sigrun's nameday",      note: "Festival of First Salt — the present moment." },
];

const TL_W = 2200, TL_H = 560;

function MobileTimeline({ onBack }) {
  const [selected, setSelected] = useStateTL(null); // index or null
  const sel = selected != null ? TL_EVENTS[selected] : null;

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Timeline · all eras" onBack={onBack}/>
      <div className="mm-canvas-legend">
        {TL_LANES.map(l => (
          <span key={l.id} className="mm-canvas-legend-item">
            <span className="mm-canvas-legend-dot" style={{background: l.c}}/>
            {l.label}
          </span>
        ))}
      </div>
      <div className="mm-toolview-canvas">
        <PinchPanCanvas
          contentWidth={TL_W}
          contentHeight={TL_H}
          minScale={0.18}
          maxScale={3}
          initialFocus={{ x: 1600, y: 280, scale: 0.5 }}
        >
          <svg width={TL_W} height={TL_H} xmlns="http://www.w3.org/2000/svg">
            {/* Era bands */}
            {TL_ERAS.map((e, i) => (
              <g key={i}>
                <rect x={e.x0} y={0} width={e.x1 - e.x0} height={TL_H} fill={e.c}/>
                <text className="mm-svg-era" x={e.x0 + 18} y={48}>{e.label}</text>
              </g>
            ))}

            {/* Year axis baseline */}
            <line x1={0} y1={90} x2={TL_W} y2={90} stroke="rgba(214,201,168,0.28)" strokeWidth={1}/>
            {TL_YEARS.map((y, i) => (
              <g key={i}>
                <line x1={y.x} y1={86} x2={y.x} y2={94} stroke="rgba(214,201,168,0.5)" strokeWidth={1}/>
                <text className="mm-svg-yr" x={y.x} y={78} textAnchor="middle">{y.label}</text>
              </g>
            ))}

            {/* Swimlanes — horizontal guides */}
            {TL_LANES.map((l, i) => {
              const y = laneY(i);
              return (
                <g key={l.id}>
                  <line x1={0} y1={y} x2={TL_W} y2={y}
                    stroke={l.c} strokeOpacity={0.18} strokeWidth={1}/>
                  <rect x={4} y={y - 12} width={94} height={24} rx={4}
                    fill="rgba(28,24,20,0.85)" stroke={l.c} strokeOpacity={0.6}/>
                  <text className="mm-svg-sub" x={50} y={y + 3.5}
                    textAnchor="middle" fill={l.c}
                    style={{textTransform:"uppercase", letterSpacing: "0.16em"}}>
                    {l.label}
                  </text>
                </g>
              );
            })}

            {/* Now marker — full-height vertical line */}
            <line x1={1600} y1={90} x2={1600} y2={TL_H - 30}
              stroke="#b85a2c" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7}/>
            <rect x={1572} y={TL_H - 26} width={56} height={18} rx={9}
              fill="#b85a2c"/>
            <text x={1600} y={TL_H - 13} textAnchor="middle"
              fill="#f7f1e3" fontSize={10} fontWeight={600}
              style={{fontFamily:"var(--font-sans)", letterSpacing:"0.16em"}}>
              NOW
            </text>

            {/* Events */}
            {TL_EVENTS.map((ev, i) => {
              const y = laneY(ev.lane);
              const c = TL_LANES[ev.lane].c;
              const isSel = i === selected;
              const isNow = ev.now;
              return (
                <g key={i} style={{cursor:"pointer"}}
                  onPointerDown={(e) => { e.stopPropagation(); }}
                  onClick={() => setSelected(i)}
                >
                  {/* leader line from dot up to label */}
                  <line x1={ev.x} y1={y - 12} x2={ev.x} y2={y - 26}
                    stroke={c} strokeOpacity={0.6} strokeWidth={1}/>
                  {/* event title above */}
                  <text x={ev.x} y={y - 32} textAnchor="middle"
                    className="mm-svg-name"
                    fontSize={13}
                    fill={isNow ? "#f3c8a3" : "var(--fg-1)"}
                  >
                    {ev.title}
                  </text>
                  {/* dot */}
                  <circle cx={ev.x} cy={y} r={isNow ? 11 : 8}
                    fill={c}
                    stroke={isSel || isNow ? "#f7f1e3" : "rgba(20,16,13,0.6)"}
                    strokeWidth={isSel || isNow ? 2.5 : 1.5}
                  />
                  {isNow && (
                    <circle cx={ev.x} cy={y} r={18}
                      fill="none" stroke={c} strokeOpacity={0.4} strokeWidth={1.5}/>
                  )}
                  {/* invisible larger tap target for fat fingers */}
                  <circle cx={ev.x} cy={y} r={24} fill="transparent"/>
                </g>
              );
            })}
          </svg>
        </PinchPanCanvas>

        {sel && (
          <div className="mm-canvas-detail">
            <button className="mm-canvas-detail-close"
              onClick={() => setSelected(null)} aria-label="Close">×</button>
            <span className="mm-canvas-detail-eyebrow" style={{ color: TL_LANES[sel.lane].c }}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:TL_LANES[sel.lane].c}}/>
              {TL_LANES[sel.lane].label}
            </span>
            <h3 className="mm-canvas-detail-title">{sel.title}</h3>
            <p className="mm-canvas-detail-sub">{sel.note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

window.MobileTimeline = MobileTimeline;
