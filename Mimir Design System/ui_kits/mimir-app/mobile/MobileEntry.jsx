/* global React */
const { useState: useStateEv } = React;

// Type profile data — abridged from desktop EntryView.jsx. Keeps the same
// shape so the mobile view reads naturally for every entry kind.
const MM_TYPE_PROFILES = {
  Character: {
    idPrefix: "char",
    front: [
      ["born",   "3rd Yr. of the Long Frost"],
      ["died",   "—"],
      ["father", { link: "Ulf the Wolf-Father" }],
      ["mother", { link: "Hilda Steel-Eye" }],
      ["faction",{ fromEntry: "faction" }],
      ["seat",   { link: "Caernarfon" }],
      ["banner", "Black wolf, ember field"],
    ],
    conflict: (e) => `Ulf has no record of ${e.name.split(" ")[0]} as a child. Resolve?`,
    links: [
      { c: "#d99366", t: "Ulf the Wolf-Father" },
      { c: "#d99366", t: "Hilda Steel-Eye" },
      { c: "#7da265", t: "Caernarfon" },
      { c: "#c43a4e", t: "Iron Crown" },
      { c: "#8d8478", t: "Burning of Hellas" },
      { c: "#a8814d", t: "The wolf-banner" },
    ],
    timeline: [
      { yr: "Yr 3",  ev: "Born at Caernarfon" },
      { yr: "Yr 18", ev: "Takes the oath" },
      { yr: "Yr 26", ev: "Crown at Caernarfon", now: true },
      { yr: "Yr 31", ev: "Treaty of Avalon" },
    ],
  },
  Place: {
    idPrefix: "place",
    front: [
      ["type",       { fromEntry: "faction" }],
      ["region",     "Northern reaches"],
      ["coordinates","53° 14' N · 4° 16' W"],
      ["founded",    "Yr — (before reckoning)"],
      ["inhabitants",{ link: "Hornfolke" }],
      ["governs",    { link: "Iron Crown" }],
    ],
    conflict: () => "Two sources name this place; the Treaty calls it 'Caer-na-Carn'.",
    links: [
      { c: "#d99366", t: "Sigrun Ulfsdottir" },
      { c: "#d99366", t: "Ulf the Wolf-Father" },
      { c: "#a07cc8", t: "Hornfolke" },
      { c: "#c43a4e", t: "Iron Crown" },
      { c: "#8d8478", t: "The Long War" },
    ],
    timeline: [
      { yr: "Before", ev: "Founded by the first jarls" },
      { yr: "Yr 3",   ev: "Sigrun born here" },
      { yr: "Yr 23",  ev: "Standard raised", now: true },
      { yr: "Yr 31",  ev: "Treaty signed at the gate" },
    ],
  },
  Faction: {
    idPrefix: "faction",
    front: [
      ["type",    "Confederation"],
      ["seat",    { link: "Caernarfon" }],
      ["leader",  { link: "Sigrun Ulfsdottir" }],
      ["culture", { link: "Hornfolke" }],
      ["founded", "Yr 14 — Long Frost" ],
      ["members", "Seven jarldoms · three fallen"],
      ["banner",  "Black wolf, ember field"],
    ],
    conflict: () => "Membership list disagrees with the Treaty witnesses.",
    links: [
      { c: "#d99366", t: "Sigrun Ulfsdottir" },
      { c: "#d99366", t: "Ulf the Wolf-Father" },
      { c: "#7da265", t: "Caernarfon" },
      { c: "#a07cc8", t: "Hornfolke" },
      { c: "#a8814d", t: "The Iron Crown (relic)" },
    ],
    timeline: [
      { yr: "Yr 14", ev: "Founded by Ulf" },
      { yr: "Yr 18", ev: "Seven oaths sworn" },
      { yr: "Yr 23", ev: "Crown passes to Sigrun", now: true },
      { yr: "Yr 31", ev: "Treaty of Avalon" },
    ],
  },
  Culture: {
    idPrefix: "culture",
    front: [
      ["primary species", { link: "Human" }],
      ["region",          { link: "Petty Kingdoms" }],
      ["government",      "Tribal kingdoms"],
      ["religion",        "Norse gods · ancestor-spirits"],
      ["parent culture",  { link: "The Winter Kings" }],
      ["language",        { link: "Low Speech" }],
    ],
    conflict: () => "Schema asks for a parent culture; the elder branch is contested.",
    links: [
      { c: "#7da265", t: "Petty Kingdoms" },
      { c: "#a07cc8", t: "The Winter Kings" },
      { c: "#8aa0ab", t: "Low Speech" },
      { c: "#c43a4e", t: "Iron Crown" },
    ],
    timeline: [
      { yr: "Before", ev: "Splits from the Winter Kings" },
      { yr: "Yr 3",   ev: "First sea-raids south" },
      { yr: "Yr 23",  ev: "Iron Crown forged", now: true },
    ],
  },
  Event: {
    idPrefix: "event",
    front: [
      ["date",         { fromEntry: "faction" }],
      ["location",     { link: "Hellas" }],
      ["type",         "War · turning"],
      ["caused by",    { link: "The Long War" }],
      ["participants", { link: "Sigrun Ulfsdottir" }],
      ["outcome",      "Decisive — crown passes" ],
    ],
    conflict: () => "Year disagrees by one between Hornfolke and Kernow reckonings.",
    links: [
      { c: "#d99366", t: "Sigrun Ulfsdottir" },
      { c: "#d99366", t: "Ulf the Wolf-Father" },
      { c: "#7da265", t: "Hellas" },
      { c: "#c43a4e", t: "Iron Crown" },
    ],
    timeline: [
      { yr: "Yr 22", ev: "Long war turns south" },
      { yr: "Yr 23", ev: "The event itself", now: true },
      { yr: "Yr 23", ev: "Crown passes to Sigrun" },
      { yr: "Yr 31", ev: "Treaty of Avalon" },
    ],
  },
  Language: {
    idPrefix: "lang",
    front: [
      ["status",       "Living"],
      ["speakers",     "Dragons · descendants of Nidhoggr"],
      ["registers",    "High · Low · Void"],
      ["script",       "Latin (no native script)"],
      ["inspirations", "Welsh, Old Norse"],
      ["translator",   "Enabled"],
    ],
    conflict: () => "Naming rules not yet formalised; consistency may vary.",
    links: [
      { c: "#d99366", t: "Nidhoggr" },
      { c: "#a07cc8", t: "The Dragon-kin" },
      { c: "#c9a227", t: "Runadhrimir (related)" },
      { c: "#6b89c2", t: "Void-speech rites" },
    ],
    timeline: [
      { yr: "Before", ev: "Spoken before the first dawn" },
      { yr: "Age I",  ev: "Taught to the first riders" },
      { yr: "Now",    ev: "Living — three registers", now: true },
    ],
  },
  Spell: {
    idPrefix: "spell",
    front: [
      ["caster",     "Skald · rune-bearer"],
      ["medium",     "Voice + birch-bark"],
      ["components", "3 runes, 3 drops, 1 true name"],
      ["duration",   "One crossing"],
      ["cost",       "The caster's voice, day for day"],
      ["taught by",  { link: "Njordr" }],
    ],
    conflict: () => "Effect verified by 1 source; second account contradicts the cost.",
    links: [
      { c: "#d99366", t: "Njordr" },
      { c: "#c9a227", t: "Isa — Stillness" },
      { c: "#a8814d", t: "Mímir's Horn" },
      { c: "#8aa0ab", t: "Runadhrimir" },
    ],
    timeline: [
      { yr: "Age I", ev: "Taught at the well" },
      { yr: "Yr 12", ev: "First written down" },
      { yr: "Yr 26", ev: "Used at the crossing", now: true },
    ],
  },
  Rune: {
    idPrefix: "rune",
    front: [
      ["row",     "Elder — first row"],
      ["glyph",   "ᚠ"],
      ["meaning", "Cattle · wealth · the open hand"],
      ["element", "Earth · hearth"],
      ["god",     { link: "Freyr" }],
      ["used in", { link: "The Iron Oath" }],
    ],
    conflict: () => "Reversed reading is attested in 2 sources, denied in a third.",
    links: [
      { c: "#d99366", t: "Freyr" },
      { c: "#6b89c2", t: "The Iron Oath" },
      { c: "#a8814d", t: "The Iron Crown (relic)" },
      { c: "#8aa0ab", t: "Runadhrimir" },
    ],
    timeline: [
      { yr: "Before", ev: "Cut by the first scribe" },
      { yr: "Age I",  ev: "Joined to the elder row" },
      { yr: "Yr 23",  ev: "Set inside the Iron Crown", now: true },
    ],
  },
  Artefact: {
    idPrefix: "art",
    front: [
      ["type",        "Relic · regalia"],
      ["materials",   "Black iron, prow-nails of seven ships"],
      ["creator",     { link: "Ulf the Wolf-Father" }],
      ["created",     "Yr 14 — Long Frost"],
      ["holder",      { link: "Sigrun Ulfsdottir" }],
      ["location",    { link: "Caernarfon" }],
      ["inscription", { link: "Tiwaz" }],
    ],
    conflict: () => "Provenance disputed: a Kernow source claims Bran's smith forged it.",
    links: [
      { c: "#d99366", t: "Ulf the Wolf-Father" },
      { c: "#d99366", t: "Sigrun Ulfsdottir" },
      { c: "#7da265", t: "Caernarfon" },
      { c: "#c9a227", t: "Tiwaz — God-Spear" },
      { c: "#c43a4e", t: "Iron Crown (faction)" },
    ],
    timeline: [
      { yr: "Yr 14", ev: "Forged by Ulf" },
      { yr: "Yr 18", ev: "First worn at the oath-ring" },
      { yr: "Yr 23", ev: "Passes to Sigrun", now: true },
      { yr: "Yr 31", ev: "Worn at Avalon" },
    ],
  },
};

// Two-paragraph mobile prose, type-aware.
const MM_TYPE_PROSE = {
  Character: (e) => ({
    lead: `Daughter of Ulf, jarl of Caernarfon, born in the third year of the Long Frost. She took the oath at fifteen and the crown at twenty-three, after her father fell at the burning of Hellas.`,
    sections: [
      { h: "The early years", p: `${e.name.split(" ")[0]} was raised in the great hall at Caernarfon, set apart from her brothers by her father's quiet insistence that she sit at every council. She learned the seven oaths before she could ride, and could read three runes by her seventh winter.` },
      { h: "The taking of the crown", p: `When the longships came up the Caernarfon estuary in the spring of the third year, ${e.name.split(" ")[0]} was the first into the water. Her father had been dead nine days; the crown was hers by oath and by sword both.` },
    ],
  }),
  Place: (e) => ({
    lead: `${e.name} sits where the old roads meet the cold sea. It has been a hall, a market, a refuge, and twice a graveyard, and the stones know which is which.`,
    sections: [
      { h: "The lay of the land", p: `Three rivers feed the bay below the keep, and one of them — the Carn — runs warm even in the deepest frost. The townspeople say it is the breath of a sleeping giant; the scribes say it is a hot spring.` },
      { h: "Who keeps it", p: `The hall is held now by the Iron Crown, but the older stones underneath are older than the Crown by a thousand winters. Whoever sits the high seat sits on top of someone else's bones.` },
    ],
  }),
  Faction: (e) => ({
    lead: `${e.name} was not born; it was sworn into being. Seven jarls, one circle of black iron, and the long winter of the third year — that is the whole of its founding.`,
    sections: [
      { h: "The seven oaths", p: `Each jarl swore on a single iron link: not for the crown, not for the war, not for the gold, but for the next jarl in the ring. The oaths are remembered in order, and broken in the same order.` },
      { h: "The shape of it now", p: `Of the seven, three are dead and one is missing. The Crown holds, but the iron grows thin where the oaths once sat. Sigrun has not yet replaced any of the fallen.` },
    ],
  }),
  Culture: (e) => ({
    lead: `The ${e.name} are not one people but a habit of being a people: a way of reckoning the year, a way of sitting at the fire, a way of saying yes that means no.`,
    sections: [
      { h: "The reckoning", p: `They count the year in frosts, not in months. Each frost is named for the dead it took: the Cold-of-Asgeir, the Cold-of-the-Long-Hall, the Cold-of-No-One — that last one is the year nobody died, and the only one feared.` },
      { h: "The threshold", p: `A guest is sworn to the door, not the host. To cross the threshold is to be one of the household for the duration of the meal; to leave it is to be a stranger again.` },
    ],
  }),
  Event: (e) => ({
    lead: `${e.name} is the day everything afterwards is reckoned from. Before it, there were many small wars; after it, only one — and only one ending.`,
    sections: [
      { h: "The morning of", p: `The fleet had been at anchor for nine nights. The wind turned at dawn and they were inside the harbour wall before the watch could light the second beacon. By the time the first horn sounded the keep was already taking water.` },
      { h: "What was lost", p: `Three jarls, two ships, and the older of the two libraries. The Crown remembers the jarls; the smaller library was the one that mattered, and only the Crown knows that.` },
    ],
  }),
  Language: (e) => ({
    lead: `${e.name} is not a tongue you learn so much as a tongue you submit to. Its grammar prefers the powerful; its vocabulary prefers the inevitable.`,
    sections: [
      { h: "The three registers", p: `High Speech is for declarations: prophecies, claims, the names of gods. Low Speech is for everything that must be said to a lesser thing — short, direct, cruel. Void-speech is for the ritual.` },
      { h: "What cannot be said", p: `There are no native words for apology, for begging, for uncertainty. Politeness is a foreign idea, and the language treats it as one.` },
    ],
  }),
  Spell: (e) => ({
    lead: `${e.name} is a small rite, written down in three lines and remembered in three more. It is not powerful by itself; it is powerful when the moment is.`,
    sections: [
      { h: "The casting", p: `Three runes scored into birch bark, three drops of the caster's blood, and the true name of the thing being asked spoken once into the wind. The runes are burned afterwards.` },
      { h: "The cost", p: `The caster pays in voice, day for day with the asking. A small spell takes a morning; a long one can take a winter. Skalds will not take this rite.` },
    ],
  }),
  Rune: (e) => ({
    lead: `${e.name} is a single mark and a long argument. Each cut is the same; each meaning is what the cutter brings to it.`,
    sections: [
      { h: "The cut", p: `The stroke is made downward and finished without lifting the knife. If the knife lifts, the rune is unfinished — and an unfinished rune is read as a question, not an answer.` },
      { h: "The reversed reading", p: `Cut backwards, the rune means its opposite, but only if the cutter intended it. Intent is the difference between a misspelling and a curse.` },
    ],
  }),
  Artefact: (e) => ({
    lead: `${e.name} is older than its current keeper, which is the only thing that matters about an artefact: not who holds it now, but how many have held it before.`,
    sections: [
      { h: "The making", p: `Forged by Ulf in the deep of the Long Frost, from the prow-nails of the seven first ships. Beaten cold, never heated — the iron is said to have remembered the sea ever since.` },
      { h: "The bearing of it", p: `It is worn at council, at oath-ring, and at funerals — never at war. The Crown's whole point is that the oath decides, not the battle.` },
    ],
  }),
};

function MobileEntry({ entry, onBack, onAsk }) {
  const [tab, setTab] = useStateEv("read"); // read | about | links | timeline
  if (!entry) return null;

  const profile = MM_TYPE_PROFILES[entry.type] || MM_TYPE_PROFILES.Character;
  const proseFn = MM_TYPE_PROSE[entry.type] || MM_TYPE_PROSE.Character;
  const prose   = proseFn(entry);

  const front = profile.front.map(([label, raw]) => {
    let v = raw;
    if (v && typeof v === "object" && v.fromEntry) v = entry[v.fromEntry] || "—";
    return [label, v];
  });

  const tabs = [
    { id: "read",     label: "Read" },
    { id: "about",    label: "About" },
    { id: "links",    label: `Links · ${entry.links}` },
    { id: "timeline", label: "Timeline" },
  ];

  return (
    <div className="mm-ev mm-screen">
      {/* Top nav */}
      <header className="mm-ev-nav">
        <button className="mm-icon-btn" onClick={onBack} aria-label="Back">←</button>
        <span className="mm-ev-nav-title">{entry.name}</span>
        <span className="mm-ev-nav-id">{`${profile.idPrefix}_${entry.id}`}</span>
      </header>

      {/* Scrolling content */}
      <div className="mm-body">
        {/* Portrait */}
        <div className="mm-ev-portrait">
          {entry.thumb && <img src={entry.thumb} alt=""/>}
          <div className="mm-ev-portrait-fade"/>
        </div>

        {/* Meta block */}
        <div className="mm-ev-meta">
          <span className="mm-ev-eyebrow" style={{ color: entry.color }}>
            <span style={{display:"inline-block",width:6,height:6,borderRadius:99,background:entry.color}}/>
            {entry.type}{entry.faction ? ` · ${entry.faction}` : ""}
          </span>
          <h1 className="mm-ev-title">{entry.name}</h1>
          {entry.aliases && <p className="mm-ev-aliases">{entry.aliases}</p>}
          <div className="mm-ev-tags">
            <span className="mm-tag">{entry.status || "stub"}</span>
            <span className="mm-tag">↳ {entry.links} links</span>
            <span className="mm-tag">edited {entry.edited}</span>
          </div>
        </div>

        {/* Section tab strip — sticky */}
        <div className="mm-ev-tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={"mm-ev-tab" + (tab === t.id ? " is-active" : "")}
            >{t.label}</button>
          ))}
        </div>

        {/* Section bodies */}
        {tab === "read" && (
          <div className="mm-ev-section">
            <p className="mm-prose-lead">{prose.lead}</p>
            {prose.sections.map((s, i) => (
              <React.Fragment key={i}>
                <h2 className="mm-prose-h2">{s.h}</h2>
                <p className="mm-prose-p">{s.p}</p>
              </React.Fragment>
            ))}
          </div>
        )}

        {tab === "about" && (
          <div className="mm-ev-section">
            <span className="mm-eyebrow">Frontmatter</span>
            <dl className="mm-dl">
              <dt>id</dt><dd className="mm-mono">{`${profile.idPrefix}_${entry.id}`}</dd>
              {front.map(([label, value], i) => {
                if (value && typeof value === "object" && value.link) {
                  return (
                    <React.Fragment key={i}>
                      <dt>{label}</dt>
                      <dd><span className="mm-link">{value.link}</span></dd>
                    </React.Fragment>
                  );
                }
                return (
                  <React.Fragment key={i}>
                    <dt>{label}</dt><dd>{value}</dd>
                  </React.Fragment>
                );
              })}
            </dl>
            <div className="mm-conflict">
              <span className="mm-eyebrow" style={{color:"#d6735c"}}>Conflict</span>
              <p className="mm-conflict-msg">{profile.conflict(entry)}</p>
            </div>
          </div>
        )}

        {tab === "links" && (
          <div className="mm-ev-section">
            <span className="mm-eyebrow">Linked entries</span>
            <ul className="mm-linklist">
              {profile.links.map((l, i) => (
                <li key={i}>
                  <span className="mm-linklist-dot" style={{background: l.c}}/>
                  {l.t}
                  <span className="mm-linklist-arrow">›</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "timeline" && (
          <div className="mm-ev-section">
            <span className="mm-eyebrow">In the chronicle</span>
            <div className="mm-tl" style={{marginTop: 8}}>
              {profile.timeline.map((t, i) => (
                <div key={i} className={"mm-tl-row" + (t.now ? " is-now" : "")}>
                  <span className="mm-tl-yr">{t.yr}</span>
                  <span className="mm-tl-evt">{t.ev}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky bottom actions */}
      <div className="mm-ev-actions">
        <button className="mm-btn-secondary">Edit</button>
        <button className="mm-btn-primary" onClick={onAsk}>❛ Ask Mimir</button>
      </div>
    </div>
  );
}

window.MobileEntry = MobileEntry;
