/* global React */
/*
 * SchemasView — /schemas route.
 *
 * Two-level shape:
 *   1. List of all schemas in the lorebible (built-in + custom).
 *      Each row: icon, name, custom/built-in badge, entry count,
 *      description, Duplicate, Edit.
 *   2. Editor for a single schema. Header (icon picker, name,
 *      description, danger zone). Field list with drag handles.
 *      Per-field row: id (mono), display name, type select,
 *      required toggle, hint, type-specific config (max_length,
 *      target_type, choices, etc.), delete.
 *
 * Field-type vocabulary (10): text, long_text, number, date,
 *   link, link_list, tags, boolean, choice, relationship_list.
 */

const { useState } = React;

const FIELD_TYPES = [
  { id: "text",              label: "Text",              glyph: "T",  hint: "Short single-line string" },
  { id: "long_text",         label: "Long text",         glyph: "¶",  hint: "Multi-line, optionally markdown" },
  { id: "number",            label: "Number",            glyph: "#",  hint: "Integer or float" },
  { id: "date",              label: "Date",              glyph: "◷",  hint: "Calendar-aware date" },
  { id: "link",              label: "Link",              glyph: "↗",  hint: "Reference to another entry" },
  { id: "link_list",         label: "Link list",         glyph: "↗↗", hint: "Many references, ordered" },
  { id: "tags",              label: "Tags",              glyph: "#·", hint: "Free-form tag list" },
  { id: "boolean",           label: "Boolean",           glyph: "◐",  hint: "Yes / no toggle" },
  { id: "choice",            label: "Choice",            glyph: "◇",  hint: "Pick one from a list" },
  { id: "relationship_list", label: "Relationship list", glyph: "⋈",  hint: "Typed edges with affinity score" },
];

// Bundled schemas, mirroring the real Lorekeeper defaults.
const INITIAL_SCHEMAS = [
  {
    id: "characters",
    name: "Character",
    icon: "👤",
    description: "Named people, gods, beasts. Anything with a voice and a fate.",
    custom: false,
    entryCount: 47,
    sortOrder: 10,
    fields: [
      { id: "title",         name: "Title",          type: "text",              required: false, hint: "Honorific or epithet, e.g. \"The Stone-Eater\"" },
      { id: "aliases",       name: "Aliases",        type: "tags",              required: false },
      { id: "born",          name: "Born",           type: "date",              required: false, calendarAware: true },
      { id: "died",          name: "Died",           type: "date",              required: false, calendarAware: true },
      { id: "culture",       name: "Culture",        type: "link",              required: false, targetType: "cultures" },
      { id: "faction",       name: "Faction",        type: "link",              required: false, targetType: "factions" },
      { id: "biography",     name: "Biography",      type: "long_text",         required: true,  allowMarkdown: true, hint: "The body of the entry." },
      { id: "relationships", name: "Relationships",  type: "relationship_list", required: false },
      { id: "tags",          name: "Tags",           type: "tags",              required: false },
    ],
  },
  { id: "places",    name: "Place",    icon: "🗺",  description: "Hearths, holds, ruins, roads. Anywhere a story can land.",        custom: false, entryCount: 23, sortOrder: 20, fields: PLACES_FIELDS() },
  { id: "factions",  name: "Faction",  icon: "⚔",  description: "Banners, cults, councils, warbands. Any organised body.",          custom: false, entryCount: 11, sortOrder: 30, fields: FACTION_FIELDS() },
  { id: "cultures",  name: "Culture",  icon: "ᚱ",  description: "Peoples, tongues, customs. The shared way a folk lives.",          custom: false, entryCount: 6,  sortOrder: 40, fields: SIMPLE_FIELDS(["origin", "language", "values", "notes"]) },
  { id: "events",    name: "Event",    icon: "✦",  description: "Battles, oaths, omens. Moments the chronicle remembers.",          custom: false, entryCount: 38, sortOrder: 50, fields: EVENT_FIELDS() },
  { id: "languages", name: "Language", icon: "𐌀",  description: "Tongues spoken across the saga, with their glyph systems.",       custom: false, entryCount: 4,  sortOrder: 60, fields: SIMPLE_FIELDS(["speakers", "writing_system", "phonology", "notes"]) },
  { id: "spells",    name: "Spell",    icon: "✶",  description: "Workings of will and word. Each with components and a cost.",     custom: false, entryCount: 17, sortOrder: 70, fields: SIMPLE_FIELDS(["school", "components", "cost", "effect"]) },
  { id: "runes",     name: "Rune",     icon: "ᚷ",  description: "The carved letters. Each holds a mantle and an ascension path.", custom: false, entryCount: 24, sortOrder: 80, fields: SIMPLE_FIELDS(["glyph", "mantle", "ascension_paths", "first_carved"]) },
  { id: "artefacts", name: "Artefact", icon: "⚒",  description: "Wrought things of legend. Held by someone, somewhere, always.",  custom: false, entryCount: 19, sortOrder: 90, fields: SIMPLE_FIELDS(["maker", "current_holder", "powers", "history"]) },
  { id: "prophecy",  name: "Prophecy", icon: "☼",  description: "Author-added. Foretellings, dooms, and their failed readings.",   custom: true,  entryCount: 3,  sortOrder: 100, fields: SIMPLE_FIELDS(["uttered_by", "verse", "interpretation", "outcome"]) },
];

function PLACES_FIELDS() {
  return [
    { id: "region",     name: "Region",     type: "text",      required: false },
    { id: "population", name: "Population", type: "number",    required: false, integerOnly: true, min: 0 },
    { id: "rulers",     name: "Rulers",     type: "link_list", required: false, targetType: "characters" },
    { id: "description",name: "Description",type: "long_text", required: true, allowMarkdown: true },
    { id: "tags",       name: "Tags",       type: "tags",      required: false },
  ];
}
function FACTION_FIELDS() {
  return [
    { id: "banner",       name: "Banner",       type: "text",              required: false },
    { id: "stronghold",   name: "Stronghold",   type: "link",              required: false, targetType: "places" },
    { id: "leader",       name: "Leader",       type: "link",              required: false, targetType: "characters" },
    { id: "alignment",    name: "Alignment",    type: "choice",            required: false, choices: ["Loyal", "Rebel", "Neutral", "Unknown"] },
    { id: "active",       name: "Active",       type: "boolean",           required: false },
    { id: "description",  name: "Description",  type: "long_text",         required: true, allowMarkdown: true },
    { id: "relationships",name: "Relationships",type: "relationship_list", required: false },
  ];
}
function EVENT_FIELDS() {
  return [
    { id: "date",        name: "Date",        type: "date",      required: true, calendarAware: true },
    { id: "location",    name: "Location",    type: "link",      required: false, targetType: "places" },
    { id: "participants",name: "Participants",type: "link_list", required: false, targetType: "characters" },
    { id: "description", name: "Description", type: "long_text", required: true, allowMarkdown: true },
  ];
}
function SIMPLE_FIELDS(ids) {
  return ids.map(id => ({
    id,
    name: id.split("_").map(w => w[0].toUpperCase() + w.slice(1)).join(" "),
    type: id === "notes" || id === "description" || id === "interpretation" || id === "outcome" || id === "verse"
          ? "long_text"
          : (id.endsWith("s") && id !== "values") ? "tags" : "text",
    required: false,
    allowMarkdown: id === "notes" || id === "description",
  }));
}

function SchemasView() {
  const [schemas, setSchemas] = useState(INITIAL_SCHEMAS);
  const [editingId, setEditingId] = useState(null);

  const editing = schemas.find(s => s.id === editingId);

  function updateSchema(next) {
    setSchemas(list => list.map(s => s.id === next.id ? next : s));
  }

  function duplicate(s) {
    const copy = {
      ...s,
      id: s.id + "-copy",
      name: s.name + " (copy)",
      custom: true,
      entryCount: 0,
      sortOrder: 200,
      fields: s.fields.map(f => ({ ...f })),
    };
    setSchemas(list => [...list, copy]);
  }

  if (editing) {
    return <SchemaEditor schema={editing} onChange={updateSchema} onBack={() => setEditingId(null)}/>;
  }

  return (
    <div className="sch">
      <div className="val-banner">
        <div className="val-banner-body">
          <span className="mim-eyebrow">Tools · Structure</span>
          <h1 className="val-title">Schemas</h1>
          <p className="val-sub">The shape of every entry in the chronicle. Add fields, change types, mark them required.</p>
        </div>
        <div className="val-banner-stats">
          <div className="val-stat">
            <span className="val-stat-num">{schemas.length}</span>
            <span className="val-stat-lbl">Schemas</span>
          </div>
          <div className="val-stat">
            <span className="val-stat-num">{schemas.filter(s => s.custom).length}</span>
            <span className="val-stat-lbl">Custom</span>
          </div>
          <button className="mim-btn-primary"><span>+</span> New schema</button>
        </div>
      </div>

      <ul className="sch-list">
        {schemas.sort((a, b) => a.sortOrder - b.sortOrder).map(s => (
          <li key={s.id} className="sch-row">
            <span className="sch-row-icon">{s.icon}</span>
            <div className="sch-row-body">
              <div className="sch-row-line">
                <span className="sch-row-name">{s.name}</span>
                <span className={"sch-badge " + (s.custom ? "sch-badge-custom" : "sch-badge-builtin")}>
                  {s.custom ? "custom" : "built-in"}
                </span>
                <code className="sch-row-id">{s.id}</code>
                <span className="sch-row-spacer"/>
                <span className="sch-row-count">{s.entryCount} {s.entryCount === 1 ? "entry" : "entries"}</span>
                <span className="sch-row-count">·</span>
                <span className="sch-row-count">{s.fields.length} fields</span>
              </div>
              {s.description && <p className="sch-row-desc">{s.description}</p>}
            </div>
            <button className="val-action" onClick={() => duplicate(s)}>Duplicate</button>
            <button className="val-action val-action-primary" onClick={() => setEditingId(s.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SchemaEditor({ schema, onChange, onBack }) {
  const [editingField, setEditingField] = useState(null);

  function patchField(idx, patch) {
    const fields = schema.fields.map((f, i) => i === idx ? { ...f, ...patch } : f);
    onChange({ ...schema, fields });
  }
  function changeFieldType(idx, nextType) {
    // Drop type-specific keys on change; reset to vanilla shape.
    const old = schema.fields[idx];
    const fresh = { id: old.id, name: old.name, type: nextType, required: old.required, hint: old.hint };
    const fields = schema.fields.map((f, i) => i === idx ? fresh : f);
    onChange({ ...schema, fields });
  }
  function addField() {
    const id = "new_field_" + (schema.fields.length + 1);
    onChange({ ...schema, fields: [...schema.fields, { id, name: "New field", type: "text", required: false }] });
    setEditingField(schema.fields.length);
  }
  function deleteField(idx) {
    onChange({ ...schema, fields: schema.fields.filter((_, i) => i !== idx) });
  }
  function moveField(idx, dir) {
    const j = idx + dir;
    if (j < 0 || j >= schema.fields.length) return;
    const fields = [...schema.fields];
    [fields[idx], fields[j]] = [fields[j], fields[idx]];
    onChange({ ...schema, fields });
  }

  return (
    <div className="sch">
      <button className="ft-back" onClick={onBack}>← Back to schemas</button>

      {/* Header card */}
      <div className="sch-edit-head">
        <div className="sch-edit-icon">{schema.icon}</div>
        <div className="sch-edit-meta">
          <input
            className="sch-edit-name"
            value={schema.name}
            onChange={e => onChange({ ...schema, name: e.target.value })}
          />
          <div className="sch-edit-id-row">
            <code className="sch-edit-id">{schema.id}</code>
            <span className={"sch-badge " + (schema.custom ? "sch-badge-custom" : "sch-badge-builtin")}>
              {schema.custom ? "custom" : "built-in"}
            </span>
            <span className="sch-edit-count">· {schema.entryCount} entries use this schema</span>
          </div>
          <textarea
            className="sch-edit-desc"
            placeholder="One-line description shown in the schema list."
            value={schema.description || ""}
            onChange={e => onChange({ ...schema, description: e.target.value })}
            rows={2}
          />
        </div>
      </div>

      {/* Field list */}
      <div className="sch-fields-head">
        <h3 className="mim-prose-h2 sch-fields-title">Fields</h3>
        <span className="sch-fields-sub">Drag to reorder. The first field with a long_text type is treated as the entry body.</span>
        <span className="sch-fields-spacer"/>
        <button className="mim-btn-secondary" onClick={addField}>+ Add field</button>
      </div>

      <ul className="sch-fields">
        {schema.fields.map((f, i) => (
          <SchemaFieldRow
            key={i}
            field={f}
            isOpen={editingField === i}
            onToggle={() => setEditingField(editingField === i ? null : i)}
            onPatch={(patch) => patchField(i, patch)}
            onChangeType={(t) => changeFieldType(i, t)}
            onDelete={() => deleteField(i)}
            onMoveUp={() => moveField(i, -1)}
            onMoveDown={() => moveField(i, 1)}
            canMoveUp={i > 0}
            canMoveDown={i < schema.fields.length - 1}
          />
        ))}
      </ul>

      {/* Danger zone (custom only) */}
      {schema.custom && (
        <div className="sch-danger">
          <div className="sch-danger-body">
            <h4 className="sch-danger-h">Delete schema</h4>
            <p className="sch-danger-p">Deleting will fail if any entries still use this schema. Migrate or delete entries first.</p>
          </div>
          <button className="val-action">Delete schema</button>
        </div>
      )}
    </div>
  );
}

function SchemaFieldRow({ field, isOpen, onToggle, onPatch, onChangeType, onDelete, onMoveUp, onMoveDown, canMoveUp, canMoveDown }) {
  const typeMeta = FIELD_TYPES.find(t => t.id === field.type) || FIELD_TYPES[0];
  return (
    <li className={"sch-field" + (isOpen ? " is-open" : "")}>
      <div className="sch-field-head" onClick={onToggle}>
        <span className="sch-field-grip">⋮⋮</span>
        <span className="sch-field-type-glyph" title={typeMeta.label}>{typeMeta.glyph}</span>
        <span className="sch-field-name">{field.name}</span>
        <code className="sch-field-id">{field.id}</code>
        <span className="sch-field-type-pill">{typeMeta.label}</span>
        {field.required && <span className="sch-field-req">required</span>}
        <span className="sch-row-spacer"/>
        <div className="sch-field-move" onClick={e => e.stopPropagation()}>
          <button className="sch-mini" onClick={onMoveUp} disabled={!canMoveUp}>▲</button>
          <button className="sch-mini" onClick={onMoveDown} disabled={!canMoveDown}>▼</button>
        </div>
        <span className="sch-field-caret">{isOpen ? "▾" : "▸"}</span>
      </div>

      {isOpen && (
        <div className="sch-field-body">
          <div className="sch-field-grid">
            <label className="sch-fl">
              <span className="sch-fl-lbl">Display name</span>
              <input value={field.name} onChange={e => onPatch({ name: e.target.value })}/>
            </label>
            <label className="sch-fl">
              <span className="sch-fl-lbl">Field id</span>
              <input value={field.id} onChange={e => onPatch({ id: e.target.value })} className="sch-mono"/>
            </label>
            <label className="sch-fl">
              <span className="sch-fl-lbl">Type</span>
              <select value={field.type} onChange={e => onChangeType(e.target.value)}>
                {FIELD_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </label>
            <label className="sch-fl sch-fl-toggle">
              <input type="checkbox" checked={!!field.required} onChange={e => onPatch({ required: e.target.checked })}/>
              <span>Required</span>
            </label>
            <label className="sch-fl sch-fl-wide">
              <span className="sch-fl-lbl">Hint</span>
              <input
                value={field.hint || ""}
                onChange={e => onPatch({ hint: e.target.value })}
                placeholder="Help text shown under the field in the editor."
              />
            </label>
          </div>

          {/* Type-specific config */}
          <TypeConfig field={field} onPatch={onPatch}/>

          <div className="sch-field-actions">
            <button className="val-action val-action-ghost" onClick={onDelete}>Delete field</button>
          </div>
        </div>
      )}
    </li>
  );
}

function TypeConfig({ field, onPatch }) {
  if (field.type === "text") {
    return (
      <div className="sch-typecfg">
        <span className="sch-typecfg-lbl">Text options</span>
        <label className="sch-fl">
          <span className="sch-fl-lbl">Max length</span>
          <input type="number" value={field.maxLength || ""} onChange={e => onPatch({ maxLength: +e.target.value || null })}/>
        </label>
        <label className="sch-fl">
          <span className="sch-fl-lbl">Placeholder</span>
          <input value={field.placeholder || ""} onChange={e => onPatch({ placeholder: e.target.value })}/>
        </label>
      </div>
    );
  }
  if (field.type === "long_text") {
    return (
      <div className="sch-typecfg">
        <span className="sch-typecfg-lbl">Long-text options</span>
        <label className="sch-fl sch-fl-toggle">
          <input type="checkbox" checked={field.allowMarkdown !== false} onChange={e => onPatch({ allowMarkdown: e.target.checked })}/>
          <span>Allow markdown (Tiptap editor)</span>
        </label>
      </div>
    );
  }
  if (field.type === "number") {
    return (
      <div className="sch-typecfg">
        <span className="sch-typecfg-lbl">Number options</span>
        <label className="sch-fl sch-fl-toggle">
          <input type="checkbox" checked={!!field.integerOnly} onChange={e => onPatch({ integerOnly: e.target.checked })}/>
          <span>Integer only</span>
        </label>
        <label className="sch-fl"><span className="sch-fl-lbl">Min</span><input type="number" value={field.min ?? ""} onChange={e => onPatch({ min: e.target.value === "" ? null : +e.target.value })}/></label>
        <label className="sch-fl"><span className="sch-fl-lbl">Max</span><input type="number" value={field.max ?? ""} onChange={e => onPatch({ max: e.target.value === "" ? null : +e.target.value })}/></label>
      </div>
    );
  }
  if (field.type === "date") {
    return (
      <div className="sch-typecfg">
        <span className="sch-typecfg-lbl">Date options</span>
        <label className="sch-fl sch-fl-toggle">
          <input type="checkbox" checked={field.calendarAware !== false} onChange={e => onPatch({ calendarAware: e.target.checked })}/>
          <span>Use lorebible's calendar (CALENDAR.md). Off → ISO 8601.</span>
        </label>
      </div>
    );
  }
  if (field.type === "link" || field.type === "link_list") {
    return (
      <div className="sch-typecfg">
        <span className="sch-typecfg-lbl">Link target</span>
        <label className="sch-fl">
          <span className="sch-fl-lbl">Target schema</span>
          <select value={field.targetType || ""} onChange={e => onPatch({ targetType: e.target.value || null })}>
            <option value="">Any entry type</option>
            {INITIAL_SCHEMAS.map(s => <option key={s.id} value={s.id}>{s.name} ({s.id})</option>)}
          </select>
        </label>
        {field.type === "link_list" && (
          <label className="sch-fl">
            <span className="sch-fl-lbl">Max items</span>
            <input type="number" value={field.maxItems || ""} onChange={e => onPatch({ maxItems: +e.target.value || null })}/>
          </label>
        )}
      </div>
    );
  }
  if (field.type === "choice") {
    const choices = field.choices || [];
    return (
      <div className="sch-typecfg">
        <span className="sch-typecfg-lbl">Choices</span>
        <div className="sch-choices">
          {choices.map((c, i) => (
            <span key={i} className="sch-choice">
              {c}
              <button className="sch-choice-x" onClick={() => onPatch({ choices: choices.filter((_, j) => j !== i) })}>×</button>
            </span>
          ))}
          <button className="sch-choice-add" onClick={() => {
            const next = prompt("New choice value:");
            if (next) onPatch({ choices: [...choices, next] });
          }}>+ Add choice</button>
        </div>
      </div>
    );
  }
  if (field.type === "relationship_list") {
    return (
      <div className="sch-typecfg sch-typecfg-note">
        <span className="sch-typecfg-lbl">Relationship list</span>
        <p>Typed edges drawn from <code>_relationship-types.yaml</code>. Each edge carries a target, type, and affinity score (-100 → 100). Mirror edges are kept in sync.</p>
      </div>
    );
  }
  return null;
}

window.SchemasView = SchemasView;
