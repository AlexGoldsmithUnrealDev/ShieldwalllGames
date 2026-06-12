/* global React */
/*
 * ValidationView — /validation route.
 *
 * Surfaces every rule-driven warning the engine has emitted: relationship
 * edge issues, naming-consistency near-duplicates, canon orphans, schema
 * required-field misses, calendar date-format mismatches, etc.
 *
 * Layout vocabulary:
 *   ┌── Zone banner (title + subtitle + rescan / stats) ──┐
 *   │ Filter bar: Group by / Severity / Rule / Type        │
 *   ├──────────────────────────────────────────────────────┤
 *   │ Grouped sections — heading is the group key, count   │
 *   │ on the right. Rows: type chip · entry link · field · │
 *   │ rule (mono) · severity · message. Optional inline    │
 *   │ "Open entry" / "Auto-fix" actions per row.           │
 *   └──────────────────────────────────────────────────────┘
 *
 * The data shape matches src/lorebible/validate.ts's ValidationWarning:
 *   { rule, severity, entryType, entryId, entryName, field?, message,
 *     hint?, fix? }
 */

const { useMemo, useState } = React;

const ENTRY_COLORS = {
  characters: "#d99366",
  places:     "#7da265",
  factions:   "#c43a4e",
  cultures:   "#a07cc8",
  events:     "#8d8478",
  languages:  "#8aa0ab",
  spells:     "#6b89c2",
  runes:      "#c9a227",
  artefacts:  "#a8814d",
  species:    "#a07cc8",
  schemas:    "#9b8b6e",
};

// Sample dataset — concrete enough to read like Shieldwall canon but
// covers every shape Claude Code needs to render. Order matters: when
// grouped by "rule", the engine reports by rule-name a→z; when grouped
// by "type" or "entry", the entries already cluster.
const WARNINGS = [
  {
    rule: "relationship-edge-self-reference",
    severity: "warning",
    entryType: "characters", entryId: "chr-bjornar", entryName: "Bjornar Ironhand",
    field: "relationships[3]",
    message: 'An entry cannot be in a relationship with itself. The edge "rival_of → Bjornar Ironhand" is self-referential.',
    fix: "remove-edge",
  },
  {
    rule: "relationship-edge-missing-to-entry",
    severity: "warning",
    entryType: "characters", entryId: "chr-skaldyrn", entryName: "Skaldyrn the Bard",
    field: "relationships[1]",
    message: 'Target entry "vargheim-the-old" does not exist in the canon. The edge will be skipped at render time.',
    fix: "delete-orphan",
  },
  {
    rule: "relationship-edge-missing-to-entry",
    severity: "warning",
    entryType: "factions", entryId: "fac-emberhand", entryName: "Order of the Emberhand",
    field: "relationships[7]",
    message: 'Target entry "the-grey-circle" does not exist in the canon.',
    fix: "delete-orphan",
  },
  {
    rule: "relationship-edge-score-out-of-range",
    severity: "warning",
    entryType: "factions", entryId: "fac-ember-cult", entryName: "Order of the Emberhand",
    field: "relationships[2].score",
    message: "Affinity score 150 is outside the allowed range [-100, 100].",
  },
  {
    rule: "relationship-edge-mirror-divergence",
    severity: "info",
    entryType: "characters", entryId: "chr-vaerin", entryName: "Vaerin Pale-Mother",
    field: "relationships[4]",
    message: 'Mirror edge disagrees: Vaerin marks Hjalmar as "ally" (score 60) but Hjalmar marks Vaerin as "rival" (score -40). One side is wrong.',
  },
  {
    rule: "naming-consistency-near-duplicate",
    severity: "warning",
    entryType: "characters", entryId: "chr-stone-eater", entryName: "The Stone-Eater",
    message: 'Name closely resembles existing entry "Stoneater" (94% match). If these are the same entity, add one as an alias of the other.',
    hint: "Add as alias",
  },
  {
    rule: "naming-consistency-near-duplicate",
    severity: "info",
    entryType: "places", entryId: "loc-frosthowl", entryName: "Frosthowl Pass",
    message: 'Name closely resembles existing entry "Frosthowl-Pass" (98% match). Likely a slug/display mismatch.',
    hint: "Reconcile",
  },
  {
    rule: "canon-orphan-reference",
    severity: "warning",
    entryType: "events", entryId: "evt-hjalmars-saga", entryName: "Hjalmar's Saga",
    field: "body",
    message: 'Wikilink [[Vael Ruined-Crown]] points to a deleted entry. The link will render as red text in the reader.',
  },
  {
    rule: "canon-orphan-reference",
    severity: "warning",
    entryType: "spells", entryId: "spl-binding-of-marrow", entryName: "Binding of Marrow",
    field: "components",
    message: 'Component reference [[bone-of-the-thrice-born]] does not resolve. Did you mean "Bone of the Thrice-Born Calf"?',
    hint: "Did you mean…",
  },
  {
    rule: "canon-date-format",
    severity: "warning",
    entryType: "events", entryId: "evt-frosthowl", entryName: "Battle of Frosthowl Pass",
    field: "date",
    message: 'Date "Year of Wolves 12" does not match the Drakenthar calendar format (expected "AoY 412.7.14").',
  },
  {
    rule: "circular-parent-species",
    severity: "warning",
    entryType: "species", entryId: "spc-mountain-trolls", entryName: "Mountain Trolls",
    field: "parent_species",
    message: "Parent-species chain forms a cycle: Mountain Trolls → Hill Trolls → Mountain Trolls. Genus tree will not render this branch.",
  },
  {
    rule: "schema-required-field-missing",
    severity: "warning",
    entryType: "languages", entryId: "lng-drakenthar", entryName: "Drakenthar",
    field: "speakers",
    message: 'Required field "speakers" is empty. Schema languages.yaml v3 marks this field as required.',
  },
  {
    rule: "schema-required-field-missing",
    severity: "warning",
    entryType: "artefacts", entryId: "art-shieldwall-banner", entryName: "The Shieldwall Banner",
    field: "current_holder",
    message: 'Required field "current_holder" is empty.',
  },
  {
    rule: "mantle-ascension-paths-unresolved",
    severity: "info",
    entryType: "runes", entryId: "rne-iss-mantle", entryName: "Mantle of Iss",
    field: "ascension_paths[2]",
    message: 'Path requires runemark "Eihwaz-Reversed" but no runemark by that name exists.',
  },
  {
    rule: "variable-undeclared",
    severity: "warning",
    entryType: "events", entryId: "evt-the-naming", entryName: "The Naming of the Bound",
    field: "body",
    message: 'Expression "{{player.warband_size}}" references undeclared variable "player.warband_size". Declare it in Variables or remove the token.',
  },
];

function timeAgo(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr ago`;
  return `${Math.floor(h / 24)} d ago`;
}

function ValidationView({ onOpenEntry }) {
  const [groupBy, setGroupBy] = useState("rule"); // rule | type | entry
  const [severities, setSeverities] = useState(new Set(["warning", "info"]));
  const [activeRules, setActiveRules] = useState(new Set());
  const [activeTypes, setActiveTypes] = useState(new Set());
  const [scanning, setScanning] = useState(false);
  const [lastScanAt] = useState(Date.now() - 1000 * 60 * 4); // 4 min ago

  const availableRules = useMemo(
    () => [...new Set(WARNINGS.map(w => w.rule))].sort(),
    []
  );
  const availableTypes = useMemo(
    () => [...new Set(WARNINGS.map(w => w.entryType))].sort(),
    []
  );

  const counts = useMemo(() => ({
    warning: WARNINGS.filter(w => w.severity === "warning").length,
    info:    WARNINGS.filter(w => w.severity === "info").length,
    total:   WARNINGS.length,
  }), []);

  const filtered = useMemo(() => WARNINGS.filter(w => {
    if (!severities.has(w.severity)) return false;
    if (activeRules.size > 0 && !activeRules.has(w.rule)) return false;
    if (activeTypes.size > 0 && !activeTypes.has(w.entryType)) return false;
    return true;
  }), [severities, activeRules, activeTypes]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const w of filtered) {
      const key = groupBy === "rule"  ? w.rule
                : groupBy === "type"  ? w.entryType
                : `${w.entryType}|${w.entryId}|${w.entryName}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(w);
    }
    return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [filtered, groupBy]);

  function toggle(set, value, setter) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  }

  function resetFilters() {
    setSeverities(new Set(["warning", "info"]));
    setActiveRules(new Set());
    setActiveTypes(new Set());
  }

  function rescan() {
    setScanning(true);
    setTimeout(() => setScanning(false), 1100);
  }

  return (
    <div className="val">
      {/* === Banner ============================================== */}
      <div className="val-banner">
        <div className="val-banner-body">
          <span className="mim-eyebrow">Tools · Audit</span>
          <h1 className="val-title">Validation</h1>
          <p className="val-sub">The canon checks its own work. Warnings and quiet inconsistencies, gathered by rule.</p>
        </div>
        <div className="val-banner-stats">
          <div className="val-stat">
            <span className="val-stat-num val-stat-warn">{counts.warning}</span>
            <span className="val-stat-lbl">Warnings</span>
          </div>
          <div className="val-stat">
            <span className="val-stat-num val-stat-info">{counts.info}</span>
            <span className="val-stat-lbl">Info</span>
          </div>
          <div className="val-stat val-stat-meta">
            <span className="val-stat-when">{timeAgo(Date.now() - lastScanAt)}</span>
            <span className="val-stat-lbl">Last scan</span>
          </div>
          <button className={"mim-btn-secondary val-rescan" + (scanning ? " is-scanning" : "")} onClick={rescan}>
            <span className="val-rescan-glyph">{scanning ? "◐" : "↻"}</span>
            {scanning ? "Scanning…" : "Rescan"}
          </button>
        </div>
      </div>

      {/* === Filter bar ========================================== */}
      <div className="val-filters">
        <div className="val-filter-row">
          <span className="val-flbl">Group by</span>
          <div className="val-segment">
            {["rule", "type", "entry"].map(g => (
              <button
                key={g}
                className={"val-seg" + (groupBy === g ? " is-on" : "")}
                onClick={() => setGroupBy(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <span className="val-filter-sep"/>

          <span className="val-flbl">Severity</span>
          {["warning", "info"].map(s => (
            <button
              key={s}
              className={"val-sev-chip val-sev-" + s + (severities.has(s) ? " is-on" : "")}
              onClick={() => toggle(severities, s, setSeverities)}
            >
              <span className="val-sev-dot"/>
              {s}
              <span className="val-sev-count">
                {WARNINGS.filter(w => w.severity === s).length}
              </span>
            </button>
          ))}

          <span className="val-filter-spacer"/>

          {(activeRules.size > 0 || activeTypes.size > 0 || severities.size < 2) && (
            <button className="val-clear" onClick={resetFilters}>Clear filters</button>
          )}
        </div>

        <div className="val-filter-row">
          <span className="val-flbl">Type</span>
          {availableTypes.map(t => {
            const active = activeTypes.has(t);
            return (
              <button
                key={t}
                className={"mim-chip" + (active ? " is-active" : "")}
                style={{ "--chip-c": ENTRY_COLORS[t] || "#9b8b6e" }}
                onClick={() => toggle(activeTypes, t, setActiveTypes)}
              >
                <span className="mim-chip-dot"/>
                {t}
              </button>
            );
          })}
        </div>

        <div className="val-filter-row">
          <span className="val-flbl">Rule</span>
          {availableRules.map(r => {
            const active = activeRules.has(r);
            const count = WARNINGS.filter(w => w.rule === r).length;
            return (
              <button
                key={r}
                className={"val-rule-chip" + (active ? " is-on" : "")}
                onClick={() => toggle(activeRules, r, setActiveRules)}
                title={r}
              >
                <code>{r}</code>
                <span className="val-rule-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* === Result list ========================================= */}
      {filtered.length === 0 ? (
        <div className="val-empty">
          {WARNINGS.length === 0 ? (
            <>
              <div className="val-empty-glyph">ᛣ</div>
              <h3>The canon is at peace.</h3>
              <p>No warnings, no inconsistencies. The chronicle reads clean.</p>
            </>
          ) : (
            <>
              <h3>No warnings match the current filters.</h3>
              <p><button className="mim-link" onClick={resetFilters}>Clear filters</button> to see everything.</p>
            </>
          )}
        </div>
      ) : (
        <div className="val-groups">
          {grouped.map(([key, items]) => (
            <ValGroup
              key={key}
              groupKey={key}
              groupBy={groupBy}
              items={items}
              onOpenEntry={onOpenEntry}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ValGroup({ groupKey, groupBy, items, onOpenEntry }) {
  const [open, setOpen] = useState(true);

  let heading, sub, accent;
  if (groupBy === "rule") {
    heading = <code className="val-grp-code">{groupKey}</code>;
    sub = RULE_DESCRIPTIONS[groupKey] || "—";
    accent = items.some(w => w.severity === "warning") ? "warn" : "info";
  } else if (groupBy === "type") {
    heading = <span className="val-grp-type">{groupKey}</span>;
    sub = `${items.length} warning${items.length === 1 ? "" : "s"} across this entry type.`;
    accent = ENTRY_COLORS[groupKey] || "#9b8b6e";
  } else {
    const [type, , name] = groupKey.split("|");
    heading = <span className="val-grp-entry"><span className="val-grp-type-dot" style={{ background: ENTRY_COLORS[type] }}/>{name}</span>;
    sub = `${items.length} warning${items.length === 1 ? "" : "s"} on this entry.`;
    accent = ENTRY_COLORS[type] || "#9b8b6e";
  }

  return (
    <section className={"val-group" + (open ? "" : " is-collapsed")}>
      <header
        className="val-grp-head"
        onClick={() => setOpen(o => !o)}
        style={groupBy === "type" || groupBy === "entry" ? { borderLeftColor: accent } : null}
      >
        <span className="val-grp-toggle">{open ? "▾" : "▸"}</span>
        <div className="val-grp-titles">
          <div className="val-grp-h">{heading}</div>
          <div className="val-grp-sub">{sub}</div>
        </div>
        <span className="val-grp-count">{items.length}</span>
      </header>

      {open && (
        <ul className="val-list">
          {items.map((w, i) => (
            <ValRow key={i} w={w} onOpenEntry={onOpenEntry}/>
          ))}
        </ul>
      )}
    </section>
  );
}

function ValRow({ w, onOpenEntry }) {
  const palette = ENTRY_COLORS[w.entryType] || "#9b8b6e";
  return (
    <li className={"val-row val-sev-" + w.severity}>
      <span className="val-row-bar" style={{ background: palette }}/>
      <div className="val-row-main">
        <div className="val-row-line">
          <span className="val-type-chip" style={{ background: palette }}>{w.entryType}</span>
          <button className="val-entry-link" onClick={() => onOpenEntry?.(w)}>
            {w.entryName}
          </button>
          {w.field && <code className="val-field">{w.field}</code>}
          <span className="val-row-spacer"/>
          <code className="val-rule">{w.rule}</code>
          <span className={"val-sev-badge val-sev-" + w.severity}>{w.severity}</span>
        </div>
        <p className="val-msg">{w.message}</p>
        {(w.hint || w.fix) && (
          <div className="val-row-actions">
            <button className="val-action val-action-primary">Open entry</button>
            {w.fix === "remove-edge" && <button className="val-action">Remove edge</button>}
            {w.fix === "delete-orphan" && <button className="val-action">Delete orphan</button>}
            {w.hint === "Add as alias" && <button className="val-action">Add as alias</button>}
            {w.hint === "Reconcile" && <button className="val-action">Reconcile slugs</button>}
            {w.hint === "Did you mean…" && <button className="val-action">Did you mean…</button>}
            <button className="val-action val-action-ghost">Suppress this warning</button>
          </div>
        )}
      </div>
    </li>
  );
}

const RULE_DESCRIPTIONS = {
  "relationship-edge-self-reference": "An entry has a relationship edge pointing at itself.",
  "relationship-edge-missing-to-entry": "A relationship edge points at an entry that no longer exists.",
  "relationship-edge-score-out-of-range": "An affinity score lies outside the allowed [-100, 100] range.",
  "relationship-edge-mirror-divergence": "Two entries describe their shared relationship in conflicting ways.",
  "naming-consistency-near-duplicate": "Two entries have suspiciously similar names. Likely the same thing.",
  "canon-orphan-reference": "A wikilink or component reference points at a deleted entry.",
  "canon-date-format": "A date string doesn't parse against the active calendar.",
  "circular-parent-species": "A species' parent-chain forms a cycle and cannot be drawn as a tree.",
  "schema-required-field-missing": "A field marked required in the entry's schema is empty.",
  "mantle-ascension-paths-unresolved": "A mantle's ascension path requires a runemark that doesn't exist.",
  "variable-undeclared": "A quest/dialogue expression uses a variable that hasn't been declared.",
};

window.ValidationView = ValidationView;
