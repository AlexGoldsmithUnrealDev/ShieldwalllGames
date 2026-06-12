/* global React, MobileToolHeader */
const { useState: useStateCal } = React;

// Hornfolke 9-month calendar (compressed). Days per month is small enough
// to render in a 6×7 grid with festivals as gilt dots.
const MM_CAL_MONTHS = [
  { name: "Frost-Tide",   days: 30 },
  { name: "Wolfsmoon",    days: 30 },
  { name: "Iron-Watch",   days: 30 },
  { name: "Sea-Mend",     days: 30 },
  { name: "Long-Light",   days: 30 },
  { name: "Hearth-Wane",  days: 30 },
  { name: "Harvest-Bond", days: 30 },
  { name: "Ember-Fall",   days: 30 },
  { name: "Dark-Hold",    days: 32 },
];
const MM_CAL_EVENTS = {
  0: [4, 17],
  1: [9, 23, 28],
  2: [1, 14, 25],
  3: [7],
  4: [15, 22],
  5: [3, 19],
  6: [8, 14, 21, 30],
  7: [5, 18],
  8: [1, 16, 28],
};
const MM_MOON_GLYPH = ["●", "◐", "○", "◑"];

function MobileCalendar({ onBack }) {
  const [monthIdx, setMonthIdx] = useStateCal(2); // Iron-Watch
  const month = MM_CAL_MONTHS[monthIdx];
  const events = new Set(MM_CAL_EVENTS[monthIdx] || []);
  const today = 14;

  // 6×7 grid (no week start offset — Hornfolke weeks are uniform)
  const cells = [];
  for (let d = 1; d <= month.days; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  while (cells.length < 42) cells.push(null);

  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Calendar · Hornfolke reckoning" onBack={onBack}/>
      <div className="mm-cal-controls">
        <button className="mm-icon-btn"
          onClick={() => setMonthIdx((monthIdx + MM_CAL_MONTHS.length - 1) % MM_CAL_MONTHS.length)}>‹</button>
        <div className="mm-cal-month">{month.name} · {month.days} days</div>
        <button className="mm-icon-btn"
          onClick={() => setMonthIdx((monthIdx + 1) % MM_CAL_MONTHS.length)}>›</button>
      </div>
      <div className="mm-toolview-body" style={{padding: 0}}>
        <div className="mm-cal-grid">
          {["First","Second","Third","Fourth","Fifth","Sixth","Seventh"].map(d => (
            <div key={d} className="mm-cal-h">{d[0]}</div>
          ))}
          {cells.map((d, i) => {
            if (d == null) return <div key={i} className="mm-cal-cell is-empty"/>;
            const classes = ["mm-cal-cell"];
            if (d === today && monthIdx === 2) classes.push("is-today");
            if (events.has(d)) classes.push("is-event");
            return (
              <div key={i} className={classes.join(" ")}>
                <span className="mm-cal-d">{d}</span>
                <span className="mm-cal-moon">{MM_MOON_GLYPH[d % 4]}</span>
              </div>
            );
          })}
        </div>
        <div className="mm-cal-legend">
          <span><span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:"var(--accent)",marginRight:4}}/>today</span>
          <span><span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:"var(--color-gilt-500)",marginRight:4}}/>festival</span>
          <span>● new ◐ wax ○ full ◑ wane</span>
        </div>

        <div style={{padding:"0 14px"}}>
          <hr className="mm-rule"/>
          <span className="mm-eyebrow">This month</span>
          <ul className="mm-linklist">
            <li><span className="mm-linklist-dot" style={{background:"var(--color-gilt-500)"}}/>1st · Festival of First Salt<span className="mm-linklist-arrow">›</span></li>
            <li><span className="mm-linklist-dot" style={{background:"var(--color-gilt-500)"}}/>14th · Sigrun's nameday (today)<span className="mm-linklist-arrow">›</span></li>
            <li><span className="mm-linklist-dot" style={{background:"var(--color-gilt-500)"}}/>25th · Black-Iron Vigil<span className="mm-linklist-arrow">›</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

window.MobileCalendar = MobileCalendar;
