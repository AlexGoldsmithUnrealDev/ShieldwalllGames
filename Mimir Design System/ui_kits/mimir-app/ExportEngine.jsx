/* global React, MIM_ENTRIES, MIM_TYPE_COLOR */
const { useState: useStateExp, useMemo: useMemoExp } = React;

// Targets the writer can hand the bundle to. The Lorekeeper bundle today
// is markdown + manifest + images; engines below are surfaced as presets
// that map the bundle into engine-native tables / data assets.
const EXPORT_TARGETS = [
  { id: "folder",  name: "Bundle to folder",   sub: "Markdown + frontmatter + manifest.json", icon: "📁" },
  { id: "unreal",  name: "Unreal — DataTable", sub: "DT_Lore.* + UAssets · UE 5.4+",          icon: "U" },
  { id: "unity",   name: "Unity — ScriptableObject", sub: "LoreEntry.asset · Unity 2022+",   icon: "▣" },
  { id: "godot",   name: "Godot — Resource",   sub: ".tres files · Godot 4",                  icon: "◆" },
  { id: "json",    name: "Plain JSON",         sub: "One file per type · UTF-8",              icon: "{}" },
];

const TYPES = [
  { id: "Character", folder: "characters" },
  { id: "Place",     folder: "places" },
  { id: "Faction",   folder: "factions" },
  { id: "Culture",   folder: "cultures" },
  { id: "Event",     folder: "events" },
  { id: "Language",  folder: "languages" },
  { id: "Spell",     folder: "spells" },
  { id: "Rune",      folder: "runes" },
  { id: "Artefact",  folder: "artefacts" },
];

const SPOILER_LEVELS = [
  { id: "public",   label: "Public",   sub: "Safe for players & wiki" },
  { id: "draft",    label: "Draft",    sub: "Public + work-in-progress" },
  { id: "all",      label: "All",      sub: "Including spoilers & GM notes" },
];

function ExportEngine({ onClose }) {
  const entries = (window.MIM_ENTRIES || []);
  const [target,  setTarget]  = useStateExp("folder");
  const [dest,    setDest]    = useStateExp("/Worlds/Shieldwall/_export");
  const [spoiler, setSpoiler] = useStateExp("public");
  const [includeImages, setIncludeImages] = useStateExp(true);
  const [stripStubs,    setStripStubs]    = useStateExp(false);
  const [resolveLinks,  setResolveLinks]  = useStateExp(true);
  const [emitManifest,  setEmitManifest]  = useStateExp(true);
  const [enabled, setEnabled] = useStateExp(() => new Set(TYPES.map(t => t.id)));

  function toggleType(id) {
    setEnabled(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  // Counts per type, before/after filters
  const counts = useMemoExp(() => {
    const out = {};
    for (const t of TYPES) {
      const all = entries.filter(e => e.type === t.id);
      const kept = all.filter(e => {
        if (stripStubs && e.status === "stub") return false;
        return true;
      });
      out[t.id] = { total: all.length, kept: kept.length };
    }
    return out;
  }, [entries, stripStubs]);

  // Visible export plan
  const plan = useMemoExp(() => {
    const lines = [];
    const dropped = [];
    let totalKept = 0, totalDropped = 0;
    for (const t of TYPES) {
      const c = counts[t.id];
      if (!enabled.has(t.id)) {
        totalDropped += c.total;
        dropped.push({ type: t.id, n: c.total, why: "type disabled" });
        continue;
      }
      lines.push({ type: t.id, folder: t.folder, n: c.kept });
      totalKept += c.kept;
      if (c.kept < c.total) {
        totalDropped += c.total - c.kept;
        dropped.push({ type: t.id, n: c.total - c.kept, why: stripStubs ? "stub status" : "filter" });
      }
    }
    return { lines, dropped, totalKept, totalDropped };
  }, [counts, enabled, stripStubs]);

  const target_ = EXPORT_TARGETS.find(t => t.id === target);

  // Manifest preview (synthetic — what the writer would emit)
  const manifest = {
    world:  "shieldwall-saga",
    target: target,
    exported_at: "2026-05-07T14:22:00Z",
    spoiler_level: spoiler,
    counts: Object.fromEntries(plan.lines.map(l => [l.type.toLowerCase(), l.n])),
    images_included: includeImages,
    links_resolved:  resolveLinks,
    schema_version:  "stage-32",
  };

  return (
    <section className="exp">
      <header className="exp-head">
        <div>
          <span className="mim-eyebrow">Tool — bundle for the engine</span>
          <h1 className="exp-title">Export to engine</h1>
          <p className="exp-sub">
            Take the world out of Mimir and into the game. Choose a target, pick what travels,
            and the writer will assemble the bundle.
          </p>
        </div>
        <div className="exp-head-meta">
          <div className="exp-head-row"><span className="exp-key">World</span><span className="exp-val">Shieldwall Saga</span></div>
          <div className="exp-head-row"><span className="exp-key">Schema</span><span className="exp-val">stage-32</span></div>
          <div className="exp-head-row"><span className="exp-key">Last export</span><span className="exp-val">5 days ago · folder</span></div>
        </div>
      </header>

      <div className="exp-grid">
        {/* === LEFT: configurator ============================================ */}
        <div className="exp-col">
          <section className="exp-section">
            <span className="mim-eyebrow">i. Target</span>
            <div className="exp-targets">
              {EXPORT_TARGETS.map(t => (
                <button
                  key={t.id}
                  className={"exp-target" + (target === t.id ? " is-on" : "")}
                  onClick={() => setTarget(t.id)}
                >
                  <span className="exp-target-glyph">{t.icon}</span>
                  <span className="exp-target-body">
                    <span className="exp-target-name">{t.name}</span>
                    <span className="exp-target-sub">{t.sub}</span>
                  </span>
                  <span className="exp-target-radio"><span/></span>
                </button>
              ))}
            </div>
          </section>

          <section className="exp-section">
            <span className="mim-eyebrow">ii. Destination</span>
            <div className="exp-path">
              <span className="exp-path-glyph">▸</span>
              <input className="exp-path-input" value={dest} onChange={e => setDest(e.target.value)}/>
              <button className="mim-btn-secondary">Choose…</button>
            </div>
            <p className="exp-hint">The writer will create this folder if it does not exist. A previous bundle in the same folder will be replaced.</p>
          </section>

          <section className="exp-section">
            <span className="mim-eyebrow">iii. What travels</span>
            <div className="exp-types">
              {TYPES.map(t => {
                const on = enabled.has(t.id);
                const c = counts[t.id];
                return (
                  <button
                    key={t.id}
                    className={"exp-type" + (on ? " is-on" : "")}
                    onClick={() => toggleType(t.id)}
                    style={{ "--swatch-c": (window.MIM_TYPE_COLOR || {})[t.id] || "var(--fg-2)" }}
                  >
                    <span className="exp-type-dot"/>
                    <span className="exp-type-name">{t.id}s</span>
                    <span className="exp-type-folder">/{t.folder}</span>
                    <span className="exp-type-count">{c.kept}{c.kept !== c.total ? <span className="exp-type-dropped"> /{c.total}</span> : null}</span>
                    <span className="exp-type-check">{on ? "✓" : ""}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="exp-section">
            <span className="mim-eyebrow">iv. Filters</span>
            <div className="exp-row">
              <span className="exp-row-label">Spoiler level</span>
              <div className="exp-seg">
                {SPOILER_LEVELS.map(s => (
                  <button
                    key={s.id}
                    className={"exp-seg-btn" + (spoiler === s.id ? " is-on" : "")}
                    onClick={() => setSpoiler(s.id)}
                    title={s.sub}
                  >{s.label}</button>
                ))}
              </div>
            </div>
            <label className="exp-tog">
              <input type="checkbox" checked={stripStubs} onChange={e => setStripStubs(e.target.checked)}/>
              <span>Skip stub entries</span>
              <span className="exp-tog-sub">— don't ship anything still marked stub</span>
            </label>
            <label className="exp-tog">
              <input type="checkbox" checked={resolveLinks} onChange={e => setResolveLinks(e.target.checked)}/>
              <span>Resolve [[wikilinks]] to ids</span>
              <span className="exp-tog-sub">— makes the bundle engine-friendly</span>
            </label>
            <label className="exp-tog">
              <input type="checkbox" checked={includeImages} onChange={e => setIncludeImages(e.target.checked)}/>
              <span>Copy referenced images</span>
              <span className="exp-tog-sub">— portraits, plates, banners</span>
            </label>
            <label className="exp-tog">
              <input type="checkbox" checked={emitManifest} onChange={e => setEmitManifest(e.target.checked)}/>
              <span>Emit <code>export-manifest.json</code></span>
              <span className="exp-tog-sub">— for round-trip & diffing</span>
            </label>
          </section>
        </div>

        {/* === RIGHT: plan + manifest preview ================================ */}
        <aside className="exp-side">
          <div className="exp-card">
            <span className="mim-eyebrow">Bundle plan</span>
            <div className="exp-plan-stat">
              <span className="exp-plan-num">{plan.totalKept}</span>
              <span className="exp-plan-lbl">entries to write</span>
              {plan.totalDropped > 0 && (
                <span className="exp-plan-drop">— {plan.totalDropped} skipped</span>
              )}
            </div>
            <ul className="exp-plan">
              {plan.lines.map(l => (
                <li key={l.type}>
                  <span className="exp-plan-dot" style={{background: (window.MIM_TYPE_COLOR || {})[l.type] || "#888"}}/>
                  <span className="exp-plan-name">/{l.folder}</span>
                  <span className="exp-plan-n">{l.n}</span>
                </li>
              ))}
            </ul>
            {plan.dropped.length > 0 && (
              <>
                <span className="mim-eyebrow" style={{display:"block",marginTop:14}}>Skipped</span>
                <ul className="exp-skip">
                  {plan.dropped.map((d, i) => (
                    <li key={i}>
                      <span className="exp-skip-n">{d.n}</span>
                      <span className="exp-skip-name">{d.type}</span>
                      <span className="exp-skip-why">{d.why}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="exp-card">
            <span className="mim-eyebrow">Validation</span>
            <ul className="exp-vali">
              <li className="is-ok"><span className="exp-vali-dot"/>Frontmatter — all entries valid against schema</li>
              <li className="is-warn"><span className="exp-vali-dot"/>3 entries link to a missing target ([[fenrir]], [[gungnir]], [[heror]])</li>
              <li className="is-ok"><span className="exp-vali-dot"/>Image paths — 27 of 27 found on disk</li>
              <li className="is-warn"><span className="exp-vali-dot"/>2 timeline events have no participants</li>
              <li className="is-ok"><span className="exp-vali-dot"/>Spoiler-level filter — passes</li>
            </ul>
            <button className="mim-btn-ghost exp-vali-fix">Open validator →</button>
          </div>

          <div className="exp-card exp-card-manifest">
            <span className="mim-eyebrow">Manifest preview <span className="exp-card-meta">export-manifest.json</span></span>
            <pre className="exp-mani">{JSON.stringify(manifest, null, 2)}</pre>
          </div>
        </aside>
      </div>

      {/* === footer / primary action ========================================= */}
      <footer className="exp-foot">
        <div className="exp-foot-summary">
          <span className="exp-foot-target">
            <span className="exp-foot-glyph">{target_.icon}</span>
            <span className="exp-foot-name">{target_.name}</span>
          </span>
          <span className="exp-foot-arrow">→</span>
          <span className="exp-foot-dest"><code>{dest}</code></span>
          <span className="exp-foot-meta">{plan.totalKept} entries{includeImages ? ` · ${27} images` : ""}{emitManifest ? " · manifest" : ""}</span>
        </div>
        <div className="exp-foot-actions">
          <button className="mim-btn-ghost">Dry run</button>
          <button className="mim-btn-secondary">Save preset</button>
          <button className="mim-btn-primary exp-go">Export bundle ↗</button>
        </div>
      </footer>
    </section>
  );
}

window.ExportEngine = ExportEngine;
