/* global React */
/*
 * CalendarView — /calendar route.
 *
 * Month grid for the lorebible's active calendar. Renders:
 *   • Custom month/weekday structure (Hornfolke calendar, 10 months ×
 *     36 days × 5 weekdays + a closing 5-day "Embers" month).
 *   • Moon phases (two moons, distinct phase glyphs).
 *   • Festivals (recurring, tied to cultures).
 *   • Events (one-off, sourced from the timeline).
 *
 * View modes:
 *   - month   (default)
 *   - year    (12 tiny month grids; chosen for at-a-glance)
 *   - agenda  (chronological list of upcoming entries)
 *
 * Right rail: filters per kind, legend for moons + festivals, and a
 * "next-up" list anchored to the current viewport.
 *
 * Data is fully synthetic; matches the shape of
 * src/lorebible/calendarsTypes.ts so Claude Code can drop a real
 * calendar in without restructuring the view.
 */

const { useMemo, useState } = React;

// ─── Hornfolke calendar (synthetic) ─────────────────────────────
const CALENDAR = {
  id: "hornfolke",
  name: "Hornfolke Reckoning",
  era_markers: { positive: "AoY", negative: "BoY" },
  weekdays: ["Lonsday", "Frostday", "Spearday", "Hearthsday", "Sealday"],
  months: [
    { name: "Þorri",      season: "Deep Frost",  days: 36 },
    { name: "Góa",        season: "Late Frost",  days: 36 },
    { name: "Einmánuðr",  season: "First Thaw",  days: 36 },
    { name: "Harpa",      season: "Hare-Moon",   days: 36 },
    { name: "Skerpla",    season: "Greening",    days: 36 },
    { name: "Sólmánuðr",  season: "Sun-month",   days: 36 },
    { name: "Heyannir",   season: "Hay-bringing",days: 36 },
    { name: "Tvímánuðr",  season: "Twin-month",  days: 36 },
    { name: "Haustmánuðr",season: "Harvest",     days: 36 },
    { name: "Gormánuðr",  season: "Slaughter",   days: 36 },
    { name: "Embers",     season: "Year's-End",  days: 5  }, // intercalary
  ],
  moons: [
    { id: "wolf", name: "The Wolf-Moon", cycle_days: 31, color: "#d6c9a8", glyphs: { new: "○", first_quarter: "◐", full: "●", last_quarter: "◑" } },
    { id: "bear", name: "The Bear-Moon", cycle_days: 22, color: "#c9a227", glyphs: { new: "ᛟ", first_quarter: "ᚦ", full: "ᛒ", last_quarter: "ᚦ" } },
  ],
};

// ─── Event types ────────────────────────────────────────────────
const EVENT_TYPES = [
  { id: "battle",     name: "Battle",     fill: "#c43a4e", letter: "B" },
  { id: "festival",   name: "Festival",   fill: "#c9a227", letter: "F" },
  { id: "rite",       name: "Rite",       fill: "#a07cc8", letter: "R" },
  { id: "council",    name: "Council",    fill: "#7da265", letter: "C" },
  { id: "wonder",     name: "Wonder",     fill: "#d99366", letter: "W" },
  { id: "personal",   name: "Personal",   fill: "#8aa0ab", letter: "P" },
];

// ─── Festivals & events for AoY 412 ────────────────────────────
// Day-of-year reckoning makes layout trivial; months are 36×10 + 5.
const ENTRIES = [
  // Recurring festivals (yearly)
  { id: "f-mid-frost",   kind: "festival", type: "festival",   day: 18,  name: "Mid-Frost Vigil",    sub: "Hornfolke", culture: "hornfolke" },
  { id: "f-thaw",        kind: "festival", type: "festival",   day: 72,  name: "First Thaw Feast",   sub: "Hornfolke" },
  { id: "f-spear-rite",  kind: "festival", type: "rite",       day: 144, name: "Spear-Rite",         sub: "Iron Crown" },
  { id: "f-sunbearing",  kind: "festival", type: "festival",   day: 180, name: "Sun-Bearing Day",    sub: "Hornfolke / Alba" },
  { id: "f-harvest",     kind: "festival", type: "festival",   day: 288, name: "Harvest's Eve",      sub: "Hornfolke" },
  { id: "f-ember-night", kind: "festival", type: "rite",       day: 362, name: "Ember Night",        sub: "Sacred to Mimir" },
  // Events (single-instance this year)
  { id: "e-burning-1",   kind: "event",    type: "battle",     day: 24,  name: "Skirmish at Frostholm", sub: "Iron Crown / Stoneborn" },
  { id: "e-treaty",      kind: "event",    type: "council",    day: 95,  name: "Treaty of Avalon",      sub: "Sworn this morning" },
  { id: "e-wedding",     kind: "event",    type: "personal",   day: 121, name: "Vaerin & Hjalmar wed", sub: "At Hearthstead" },
  { id: "e-coronation",  kind: "event",    type: "wonder",     day: 198, name: "Bjornar takes the Iron Crown", sub: "Year of the Iron Hand" },
  { id: "e-funeral",     kind: "event",    type: "personal",   day: 234, name: "Funeral procession of Skaldyrn", sub: "Three-day rite" },
  { id: "e-skirmish",    kind: "event",    type: "battle",     day: 252, name: "Skirmish at Bryn Hollow", sub: "12 dead, 3 captured" },
  { id: "e-yule-feast",  kind: "event",    type: "festival",   day: 359, name: "Yule of the Long Pact", sub: "Open feast" },
];

const YEAR = 412;
const TODAY = 138; // day-of-year — sits in Skerpla, 30th (Greening)
const TOTAL_DAYS = CALENDAR.months.reduce((n, m) => n + m.days, 0); // 365

// ─── Helpers ────────────────────────────────────────────────────
function dayToMonthDay(dayOfYear) {
  let d = dayOfYear;
  for (let i = 0; i < CALENDAR.months.length; i++) {
    const m = CALENDAR.months[i];
    if (d <= m.days) return { monthIdx: i, day: d };
    d -= m.days;
  }
  return { monthIdx: CALENDAR.months.length - 1, day: 1 };
}
function monthDayToDay(monthIdx, day) {
  let n = 0;
  for (let i = 0; i < monthIdx; i++) n += CALENDAR.months[i].days;
  return n + day;
}
function moonPhaseOnDay(moon, dayOfYear) {
  // Stable seed so phases are deterministic; arbitrary epoch.
  const cyclePos = (dayOfYear * 1.0) % moon.cycle_days;
  const targets = [
    { key: "new", at: 0 },
    { key: "first_quarter", at: moon.cycle_days * 0.25 },
    { key: "full", at: moon.cycle_days * 0.5 },
    { key: "last_quarter", at: moon.cycle_days * 0.75 },
  ];
  for (const t of targets) {
    const d = Math.min(Math.abs(cyclePos - t.at), moon.cycle_days - Math.abs(cyclePos - t.at));
    if (d < 0.5) return t.key;
  }
  return null;
}

// ─── Component ──────────────────────────────────────────────────
function CalendarView() {
  const todayMD = dayToMonthDay(TODAY);
  const [monthIdx, setMonthIdx] = useState(todayMD.monthIdx);
  const [viewMode, setViewMode] = useState("month"); // month | year | agenda
  const [enabledTypes, setEnabledTypes] = useState(new Set(EVENT_TYPES.map(t => t.id)));
  const [enabledMoons, setEnabledMoons] = useState(new Set(CALENDAR.moons.map(m => m.id)));
  const [selectedDay, setSelectedDay] = useState(TODAY);

  const month = CALENDAR.months[monthIdx];
  const monthStart = monthDayToDay(monthIdx, 1);

  const visible = useMemo(
    () => ENTRIES.filter(e => enabledTypes.has(e.type)),
    [enabledTypes]
  );

  const inMonth = visible.filter(e => {
    const md = dayToMonthDay(e.day);
    return md.monthIdx === monthIdx;
  });

  // Group days into weeks of 5 (custom weekday count)
  const wdCount = CALENDAR.weekdays.length;
  const weeks = useMemo(() => {
    const out = [];
    let week = [];
    // Hornfolke calendar treats day 1 of each month as Lonsday — no leading blanks
    for (let d = 1; d <= month.days; d++) {
      week.push(d);
      if (week.length === wdCount) { out.push(week); week = []; }
    }
    if (week.length) {
      while (week.length < wdCount) week.push(null);
      out.push(week);
    }
    return out;
  }, [monthIdx, month.days, wdCount]);

  function toggleType(id) {
    const next = new Set(enabledTypes);
    if (next.has(id)) next.delete(id); else next.add(id);
    setEnabledTypes(next);
  }
  function toggleMoon(id) {
    const next = new Set(enabledMoons);
    if (next.has(id)) next.delete(id); else next.add(id);
    setEnabledMoons(next);
  }

  const selectedMD = selectedDay ? dayToMonthDay(selectedDay) : null;
  const selectedEntries = selectedDay ? visible.filter(e => e.day === selectedDay) : [];

  return (
    <div className="cal">
      {/* === Banner =============================================== */}
      <div className="val-banner">
        <div className="val-banner-body">
          <span className="mim-eyebrow">Tools · Reckoning</span>
          <h1 className="val-title">Calendar</h1>
          <p className="val-sub">The chronicler's year. Moons, festivals, councils, and the days the chronicle would have you remember.</p>
        </div>
        <div className="val-banner-stats">
          <div className="val-stat">
            <span className="val-stat-num">{ENTRIES.filter(e => e.kind === "festival").length}</span>
            <span className="val-stat-lbl">Festivals</span>
          </div>
          <div className="val-stat">
            <span className="val-stat-num">{ENTRIES.filter(e => e.kind === "event").length}</span>
            <span className="val-stat-lbl">Events</span>
          </div>
          <div className="val-stat">
            <span className="val-stat-num">{CALENDAR.moons.length}</span>
            <span className="val-stat-lbl">Moons</span>
          </div>
        </div>
      </div>

      {/* === Toolbar ============================================== */}
      <div className="cal-bar">
        <div className="cal-nav">
          <button className="cal-nav-btn" onClick={() => setMonthIdx(Math.max(0, monthIdx - 1))} disabled={monthIdx === 0}>‹</button>
          <div className="cal-nav-lbl">
            <span className="cal-nav-month">{month.name}</span>
            <span className="cal-nav-meta"><em>{month.season}</em> · {CALENDAR.era_markers.positive} {YEAR}</span>
          </div>
          <button className="cal-nav-btn" onClick={() => setMonthIdx(Math.min(CALENDAR.months.length - 1, monthIdx + 1))} disabled={monthIdx === CALENDAR.months.length - 1}>›</button>
          <button className="cal-today" onClick={() => { setMonthIdx(todayMD.monthIdx); setSelectedDay(TODAY); }}>Today</button>
        </div>

        <span className="cal-bar-spacer"/>

        <div className="cal-view-toggle">
          {["month", "year", "agenda"].map(m => (
            <button
              key={m}
              className={"cal-view-btn" + (viewMode === m ? " is-on" : "")}
              onClick={() => setViewMode(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <button className="mim-btn-primary cal-add">+ Add event</button>
      </div>

      {/* === Body ================================================= */}
      <div className="cal-body">
        <main className="cal-main">
          {viewMode === "month" && (
            <MonthGrid
              month={month}
              monthIdx={monthIdx}
              monthStart={monthStart}
              weeks={weeks}
              enabledMoons={enabledMoons}
              visible={visible}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
            />
          )}
          {viewMode === "year" && (
            <YearGrid
              enabledMoons={enabledMoons}
              visible={visible}
              onPickMonth={(i) => { setMonthIdx(i); setViewMode("month"); }}
            />
          )}
          {viewMode === "agenda" && (
            <Agenda visible={visible} onPickDay={(d) => { setSelectedDay(d); setMonthIdx(dayToMonthDay(d).monthIdx); setViewMode("month"); }}/>
          )}
        </main>

        {/* === Right rail ====================================== */}
        <aside className="cal-rail">
          {selectedDay && (
            <section className="cal-card">
              <div className="cal-card-head">
                <span className="mim-eyebrow">Selected day</span>
              </div>
              <div className="cal-sel-day">
                <span className="cal-sel-num">{selectedMD.day}</span>
                <div className="cal-sel-meta">
                  <span>{CALENDAR.months[selectedMD.monthIdx].name}</span>
                  <span className="cal-sel-sub">{CALENDAR.weekdays[(selectedMD.day - 1) % wdCount]} · {CALENDAR.era_markers.positive} {YEAR}</span>
                </div>
              </div>
              <div className="cal-sel-moons">
                {CALENDAR.moons.map(moon => {
                  const phase = moonPhaseOnDay(moon, selectedDay);
                  return (
                    <div key={moon.id} className="cal-sel-moon">
                      <span className="cal-moon-glyph" style={{ color: moon.color }}>
                        {phase ? moon.glyphs[phase] : "·"}
                      </span>
                      <div className="cal-sel-moon-meta">
                        <span>{moon.name}</span>
                        <span className="cal-sel-sub">{phase ? phase.replace("_", " ") : "between phases"}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {selectedEntries.length > 0 && (
                <ul className="cal-sel-events">
                  {selectedEntries.map(e => {
                    const type = EVENT_TYPES.find(t => t.id === e.type);
                    return (
                      <li key={e.id}>
                        <span className="cal-bullet" style={{ background: type.fill }}>{type.letter}</span>
                        <div className="cal-sel-event-body">
                          <span className="cal-sel-event-name">{e.name}</span>
                          {e.sub && <span className="cal-sel-sub">{e.sub}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              {selectedEntries.length === 0 && (
                <p className="cal-sel-empty">Nothing chronicled.</p>
              )}
            </section>
          )}

          <section className="cal-card">
            <div className="cal-card-head">
              <span className="mim-eyebrow">Event types</span>
              <div className="cal-card-actions">
                <button className="tl-mini" onClick={() => setEnabledTypes(new Set(EVENT_TYPES.map(t => t.id)))}>all</button>
                <button className="tl-mini" onClick={() => setEnabledTypes(new Set())}>none</button>
              </div>
            </div>
            <ul className="cal-legend">
              {EVENT_TYPES.map(t => {
                const on = enabledTypes.has(t.id);
                const count = ENTRIES.filter(e => e.type === t.id).length;
                return (
                  <li key={t.id} className={"cal-legend-row" + (on ? " is-on" : "")} onClick={() => toggleType(t.id)}>
                    <span className="cal-swatch" style={{ background: t.fill }}>{t.letter}</span>
                    <span className="cal-legend-name">{t.name}</span>
                    <span className="cal-legend-count">{count}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="cal-card">
            <div className="cal-card-head">
              <span className="mim-eyebrow">Moons</span>
            </div>
            <ul className="cal-legend">
              {CALENDAR.moons.map(m => {
                const on = enabledMoons.has(m.id);
                return (
                  <li key={m.id} className={"cal-legend-row" + (on ? " is-on" : "")} onClick={() => toggleMoon(m.id)}>
                    <span className="cal-moon-swatch" style={{ color: m.color }}>{m.glyphs.full}</span>
                    <span className="cal-legend-name">{m.name}</span>
                    <span className="cal-legend-count">{m.cycle_days}d</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="cal-card">
            <div className="cal-card-head">
              <span className="mim-eyebrow">Coming up</span>
            </div>
            <ul className="cal-upcoming">
              {visible.filter(e => e.day >= TODAY).slice(0, 5).map(e => {
                const type = EVENT_TYPES.find(t => t.id === e.type);
                const md = dayToMonthDay(e.day);
                return (
                  <li key={e.id} className="cal-up-row" onClick={() => { setSelectedDay(e.day); setMonthIdx(md.monthIdx); }}>
                    <div className="cal-up-date">
                      <span className="cal-up-day">{md.day}</span>
                      <span className="cal-up-month">{CALENDAR.months[md.monthIdx].name.slice(0, 3)}</span>
                    </div>
                    <div className="cal-up-body">
                      <span className="cal-up-name"><span className="cal-bullet-sm" style={{ background: type.fill }}/>{e.name}</span>
                      {e.sub && <span className="cal-sel-sub">{e.sub}</span>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}

function MonthGrid({ month, monthStart, weeks, enabledMoons, visible, selectedDay, onSelectDay }) {
  return (
    <div className="cal-grid-wrap">
      <div className="cal-weekdays">
        {CALENDAR.weekdays.map(w => <span key={w} className="cal-wd">{w}</span>)}
      </div>
      <div className="cal-grid">
        {weeks.map((week, wi) => (
          <div key={wi} className="cal-week">
            {week.map((d, di) => {
              if (d === null) return <div key={di} className="cal-day cal-day-empty"/>;
              const doy = monthStart + d - 1;
              const dayEntries = visible.filter(e => e.day === doy);
              const moonPhases = CALENDAR.moons
                .filter(m => enabledMoons.has(m.id))
                .map(m => ({ moon: m, phase: moonPhaseOnDay(m, doy) }))
                .filter(p => p.phase);
              const isToday = doy === TODAY;
              const isSelected = doy === selectedDay;
              return (
                <button
                  key={di}
                  className={
                    "cal-day"
                    + (isToday ? " is-today" : "")
                    + (isSelected ? " is-selected" : "")
                  }
                  onClick={() => onSelectDay(doy)}
                >
                  <div className="cal-day-head">
                    <span className="cal-day-num">{d}</span>
                    <div className="cal-day-moons">
                      {moonPhases.map(({ moon, phase }) => (
                        <span key={moon.id} className="cal-day-moon" style={{ color: moon.color }} title={`${moon.name} — ${phase.replace("_", " ")}`}>
                          {moon.glyphs[phase]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="cal-day-events">
                    {dayEntries.slice(0, 3).map(e => {
                      const type = EVENT_TYPES.find(t => t.id === e.type);
                      return (
                        <div key={e.id} className="cal-evt" style={{ "--evt-c": type.fill }}>
                          <span className="cal-evt-bar"/>
                          <span className="cal-evt-name">{e.name}</span>
                        </div>
                      );
                    })}
                    {dayEntries.length > 3 && <div className="cal-evt-more">+ {dayEntries.length - 3} more</div>}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function YearGrid({ enabledMoons, visible, onPickMonth }) {
  return (
    <div className="cal-year">
      {CALENDAR.months.map((m, mi) => {
        const start = monthDayToDay(mi, 1);
        const inMonth = visible.filter(e => {
          const md = dayToMonthDay(e.day);
          return md.monthIdx === mi;
        });
        const days = [];
        for (let d = 1; d <= m.days; d++) days.push(start + d - 1);
        return (
          <button key={mi} className="cal-year-card" onClick={() => onPickMonth(mi)}>
            <div className="cal-year-head">
              <span className="cal-year-name">{m.name}</span>
              <span className="cal-year-sub">{m.season}</span>
              <span className="cal-year-count">{inMonth.length}</span>
            </div>
            <div className="cal-year-cells">
              {days.map(doy => {
                const has = inMonth.find(e => e.day === doy);
                const isToday = doy === TODAY;
                const moonHit = CALENDAR.moons.find(m2 => enabledMoons.has(m2.id) && moonPhaseOnDay(m2, doy));
                return (
                  <span
                    key={doy}
                    className={"cal-year-cell" + (isToday ? " is-today" : "") + (has ? " has-event" : "")}
                    style={has ? { "--evt-c": EVENT_TYPES.find(t => t.id === has.type).fill } : null}
                  >
                    {moonHit && <span className="cal-year-moon" style={{ color: moonHit.color }}>{moonHit.glyphs[moonPhaseOnDay(moonHit, doy)]}</span>}
                  </span>
                );
              })}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function Agenda({ visible, onPickDay }) {
  // Group by month
  const byMonth = useMemo(() => {
    const map = new Map();
    for (const e of visible) {
      const md = dayToMonthDay(e.day);
      if (!map.has(md.monthIdx)) map.set(md.monthIdx, []);
      map.get(md.monthIdx).push({ ...e, dayInMonth: md.day });
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, [visible]);

  return (
    <div className="cal-agenda">
      {byMonth.map(([mi, items]) => (
        <section key={mi} className="cal-agenda-group">
          <header className="cal-agenda-head">
            <h3 className="cal-agenda-h">{CALENDAR.months[mi].name}</h3>
            <span className="cal-agenda-sub">{CALENDAR.months[mi].season}</span>
            <span className="cal-agenda-count">{items.length}</span>
          </header>
          <ul className="cal-agenda-list">
            {items.map(e => {
              const type = EVENT_TYPES.find(t => t.id === e.type);
              const wd = CALENDAR.weekdays[(e.dayInMonth - 1) % CALENDAR.weekdays.length];
              return (
                <li key={e.id} className="cal-agenda-row" onClick={() => onPickDay(e.day)}>
                  <div className="cal-agenda-date">
                    <span className="cal-agenda-day">{e.dayInMonth}</span>
                    <span className="cal-agenda-wd">{wd.slice(0, 3)}</span>
                  </div>
                  <span className="cal-bullet" style={{ background: type.fill }}>{type.letter}</span>
                  <div className="cal-agenda-body">
                    <span className="cal-agenda-name">{e.name}</span>
                    {e.sub && <span className="cal-sel-sub">{e.sub}</span>}
                  </div>
                  <span className="cal-agenda-type">{type.name}</span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

window.CalendarView = CalendarView;
