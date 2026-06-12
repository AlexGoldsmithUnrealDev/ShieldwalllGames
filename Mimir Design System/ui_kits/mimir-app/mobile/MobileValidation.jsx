/* global React, MobileToolHeader */
const { useState: useStateVal } = React;

const MM_VAL_ITEMS = [
  { sev: "danger",  rule: "broken-link",        msg: "Sigrun Ulfsdottir → 'Hilda Steel-Eye' — target entry is missing.", c: "#d99366", entry: "Sigrun" },
  { sev: "warning", rule: "stub-too-long",      msg: "Astrid Half-Hand has been a stub for 27 days.", c: "#d99366", entry: "Astrid" },
  { sev: "warning", rule: "missing-field",      msg: "The Iron Crown (faction) is missing 'banner' field.", c: "#c43a4e", entry: "Iron Crown" },
  { sev: "info",    rule: "circular-reference", msg: "Two characters list each other as 'sworn rival'. Resolve order?", c: "#d99366", entry: "Ulf · Bran" },
  { sev: "warning", rule: "date-conflict",      msg: "The Burning of Hellas — year disagrees between Hornfolke and Kernow.", c: "#8d8478", entry: "Burning" },
  { sev: "info",    rule: "naming-rule",        msg: "Drakenthar names found in Low Speech entries (3 hits).", c: "#8aa0ab", entry: "Languages" },
  { sev: "danger",  rule: "schema-required",    msg: "Yggdrasil has no 'inhabitants' field — required by Place schema.", c: "#7da265", entry: "Yggdrasil" },
  { sev: "warning", rule: "orphan-entry",       msg: "Three rune entries are not linked from any spell or artefact.", c: "#c9a227", entry: "Runes ×3" },
  { sev: "info",    rule: "tag-inconsistency",  msg: "Tag 'oath' appears as 'oaths' in 4 places.", c: "#8d8478", entry: "Tags" },
];

function MobileValidation({ onBack }) {
  const [tab, setTab] = useStateVal("all");
  const visible = tab === "all" ? MM_VAL_ITEMS : MM_VAL_ITEMS.filter(v => v.sev === tab);
  return (
    <div className="mm-toolview mm-screen">
      <MobileToolHeader title="Validation · 23 issues" onBack={onBack}/>
      <div className="mm-chips">
        {[
          {id:"all",   l:"All · 23"},
          {id:"danger",l:"Errors · 3"},
          {id:"warning",l:"Warnings · 14"},
          {id:"info",  l:"Info · 6"},
        ].map(c => (
          <button key={c.id} onClick={() => setTab(c.id)}
            className={"mm-chip" + (tab===c.id ? " is-active" : "")}>{c.l}</button>
        ))}
      </div>
      <div className="mm-toolview-body">
        {visible.map((v, i) => (
          <div key={i} className="mm-val-row">
            <div className={"mm-val-sev " + v.sev}>
              {v.sev === "danger" ? "!" : v.sev === "warning" ? "⚠" : "i"}
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div className="mm-val-msg">{v.msg}</div>
              <div className="mm-val-meta">
                <span className="mm-val-dot" style={{background:v.c}}/>
                <span>{v.entry}</span>
                <span>·</span>
                <span>{v.rule}</span>
              </div>
            </div>
            <span className="mm-linklist-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.MobileValidation = MobileValidation;
