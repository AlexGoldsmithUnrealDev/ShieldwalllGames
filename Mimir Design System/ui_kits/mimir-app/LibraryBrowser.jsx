/* global React, EntryCard */
const { useState: useStateLib } = React;

// Type → swatch color (matches sidebar)
const TYPE_COLOR = {
  Character: "#d99366",
  Place:     "#7da265",
  Faction:   "#c43a4e",
  Culture:   "#a07cc8",
  Event:     "#8d8478",
  Language:  "#8aa0ab",
  Spell:     "#6b89c2",
  Rune:      "#c9a227",
  Artefact:  "#a8814d",
};

const ENTRIES = [
  // ─── Characters ────────────────────────────────────────────────
  {
    id: "sigrun", filter: "characters", type: "Character",
    name: "Sigrun Ulfsdottir", faction: "Iron Crown",
    aliases: "'The Iron-Crown' · 'Wolf of Kernow'",
    snippet: "Daughter of Ulf, jarl of Caernarfon. She took the oath at fifteen and the crown at twenty-three, after her father fell at the burning of Hellas.",
    thumb: "../../assets/characters/spearmaiden.png",
    status: "stub", links: 12, edited: "2 days ago",
  },
  {
    id: "ulf", filter: "characters", type: "Character",
    name: "Ulf the Wolf-Father", faction: "Iron Crown",
    aliases: "Ulf jarl Caernarfon · 'Wolf-Father'",
    snippet: "Founder of the Iron Crown confederation. Fell at the burning of Hellas in the third winter of the long war. Father of Sigrun.",
    thumb: "../../assets/characters/huskarl.png",
    status: "complete", links: 23, edited: "5 days ago",
  },
  {
    id: "kernow-king", filter: "characters", type: "Character",
    name: "Bran ap Cadwy", faction: "Kingdom of Kernow",
    aliases: "The Stone-King · Bran of the Twelve Towers",
    snippet: "King of Kernow at the time of the landing. A scholar before he was a king. Resisted the call to war until the third dawn of the siege.",
    thumb: "../../assets/characters/kernow-king.png",
    status: "draft", links: 18, edited: "1 week ago",
  },
  {
    id: "spearmaiden", filter: "characters", type: "Character",
    name: "Astrid Half-Hand", faction: "Iron Crown",
    aliases: "Astrid skjaldmaer",
    snippet: "Sigrun's shield-sister and second. Lost two fingers at the breaking of the Avalon ice. Refuses a bow, fights only with the spear.",
    thumb: "../../assets/characters/raider.png",
    status: "stub", links: 8, edited: "today",
  },
  {
    id: "young-raider", filter: "characters", type: "Character",
    name: "Hakon the Quiet", faction: "Iron Crown",
    aliases: null,
    snippet: "A boy of fourteen winters when Sigrun took him from the smoke of his village. He has not spoken since, but he hears every word said in the hall.",
    thumb: "../../assets/characters/young-raider.png",
    status: "stub", links: 4, edited: "yesterday",
  },
  {
    id: "bear", filter: "characters", type: "Character",
    name: "The Bear of Hornfolke", faction: "Hornfolke",
    aliases: "Skall \u2014 the brown one",
    snippet: "An ancestor-spirit who walks the high passes in the form of a great brown bear. Said to demand a name in trade for safe passage.",
    thumb: "../../assets/characters/bear.png",
    status: "draft", links: 7, edited: "3 days ago",
  },

  // ─── Places ────────────────────────────────────────────────────
  {
    id: "caernarfon", filter: "places", type: "Place",
    name: "Caernarfon", faction: "Kingdom — seat of the Iron Crown",
    aliases: "Caer-na-Carn · 'The Hall on the Fjord'",
    snippet: "The longhall and stone-keep at the head of the Caernarfon estuary. Seat of Ulf, then Sigrun. Twelve hearths, three rune-walls, one well that has never frozen.",
    thumb: "../../assets/plates/kernow.png",
    status: "complete", links: 19, edited: "today",
  },
  {
    id: "alba", filter: "places", type: "Place",
    name: "Alba", faction: "Highland kingdoms",
    aliases: "The High Country · The North-Above",
    snippet: "The mountain country north of the wall, where the winter kings still keep the old fires. Few roads, fewer welcomes. A place that remembers names longer than people do.",
    thumb: "../../assets/plates/alba.png",
    status: "draft", links: 11, edited: "4 days ago",
  },
  {
    id: "yggdrasil", filter: "places", type: "Place",
    name: "Yggdrasil", faction: "Cosmic — the world-tree",
    aliases: "The Ash · The World-Spine",
    snippet: "The great ash that grew from the seed Odin planted in Niflheimr. Its roots span the Ginnungagap; four worlds were shaped from the fruit it bore on the first dawn.",
    thumb: "../../assets/plates/forest.png",
    status: "stub", links: 34, edited: "1 week ago",
  },
  {
    id: "hellas", filter: "places", type: "Place",
    name: "Hellas", faction: "Ruined city — Empire of the South",
    aliases: "The Burning · 'The Ash-Coast'",
    snippet: "Once the brightest of the southern cities, now a salt-glass ruin. Burned in the third winter of the long war. Ulf the Wolf-Father fell within its harbour walls.",
    thumb: "../../assets/plates/hellas.png",
    status: "draft", links: 16, edited: "5 days ago",
  },

  // ─── Factions ──────────────────────────────────────────────────
  {
    id: "iron-crown", filter: "factions", type: "Faction",
    name: "The Iron Crown", faction: "Confederation of jarldoms",
    aliases: "Járnkróna · 'The Wolf-Banner'",
    snippet: "The confederation Ulf bound together with seven oaths and a circle of black iron. Sigrun wears the crown now; the oaths still hold, though three of the seven jarls are dead.",
    thumb: "../../assets/plates/hornfolke.png",
    status: "complete", links: 27, edited: "today",
  },
  {
    id: "asgardr", filter: "factions", type: "Faction",
    name: "Ásgarðr", faction: "Clan of the Aesir",
    aliases: "The Asgardians · 'The Hall-Above'",
    snippet: "The hall of the Aesir, seated above Midgard on the high branch of Yggdrasil. Odin sits at its head; Frigg keeps its threshold; Thor its outer wall.",
    thumb: "../../assets/plates/empire.png",
    status: "stub", links: 41, edited: "2 days ago",
  },
  {
    id: "kernow", filter: "factions", type: "Faction",
    name: "Kingdom of Kernow", faction: "Old kingdom of the south",
    aliases: "The Stone-Kingdom · Cair-now",
    snippet: "The oldest standing kingdom on the southern coast. Ruled from twelve towers. Refused the Iron Crown's hand twice; signed the Treaty of Avalon at the third asking.",
    thumb: "../../assets/plates/dumnonia.png",
    status: "draft", links: 14, edited: "6 days ago",
  },

  // ─── Cultures ──────────────────────────────────────────────────
  {
    id: "hornfolke", filter: "cultures", type: "Culture",
    name: "The Hornfolke", faction: "Northmen of the petty kingdoms",
    aliases: "The Northmen · 'The Horn-Wearers'",
    snippet: "Tribal kingdoms of the long northern coast. They reckon the year by frosts, not by months. Their oaths are sworn on iron and remembered in ash.",
    thumb: "../../assets/plates/hornfolke.png",
    status: "complete", links: 22, edited: "today",
  },
  {
    id: "winter-kings", filter: "cultures", type: "Culture",
    name: "The Winter Kings", faction: "Highlanders of Alba",
    aliases: "Konunga vetrar · 'The Old Crowns'",
    snippet: "The parent culture of the Hornfolke. They keep the old fires above the wall, name their daughters for storms, and bury their dead standing.",
    thumb: "../../assets/plates/tundra.png",
    status: "draft", links: 9, edited: "3 days ago",
  },
  {
    id: "ice-jotnar", filter: "cultures", type: "Culture",
    name: "Ice Jotnar", faction: "Giants of the deep frost",
    aliases: "Hrímþursar · 'The First-Born'",
    snippet: "The eldest of the giant-kin, born of the frost in Niflheimr before the gods drew breath. They speak only in the older tongue, and only at the turning of the year.",
    thumb: "../../assets/plates/firefalls.png",
    status: "stub", links: 18, edited: "1 week ago",
  },

  // ─── Events ────────────────────────────────────────────────────
  {
    id: "burning-hellas", filter: "events", type: "Event",
    name: "The Burning of Hellas", faction: "Yr 23 — Long War, third winter",
    aliases: "The Ash-Dawn",
    snippet: "The night the southern city fell to the long war. Ulf the Wolf-Father was among the dead by morning. Sigrun took the crown nine days later at Caernarfon.",
    thumb: "../../assets/plates/hellas.png",
    status: "complete", links: 31, edited: "yesterday",
  },
  {
    id: "yggdrasil-fruit", filter: "events", type: "Event",
    name: "Yggdrasil Bears Fruit", faction: "Before-time — first dawn",
    aliases: "The Four-Worlds Dawn",
    snippet: "The great ash bore four fruits, which the gods shaped into the four Middle Earths. Ymir's blood became the seas, his hair the forests, his teeth the mountains.",
    thumb: "../../assets/plates/forest.png",
    status: "draft", links: 28, edited: "2 days ago",
  },
  {
    id: "treaty-avalon", filter: "events", type: "Event",
    name: "The Treaty of Avalon", faction: "Yr 31 — Long War, fifth spring",
    aliases: "The Cold-Pact",
    snippet: "The pact sworn on the broken ice between Sigrun, Bran of Kernow, and the three remaining jarls. Eleven oaths, one circle of iron, no witnesses but the gulls.",
    thumb: "../../assets/plates/avalon.png",
    status: "stub", links: 17, edited: "today",
  },

  // ─── Languages ─────────────────────────────────────────────────
  {
    id: "drakenthar", filter: "languages", type: "Language",
    name: "Drakenthar", faction: "Tongue of dragons",
    aliases: "High Speech · Dragon-tongue",
    snippet: "The dragon-tongue, in which the speaker is assumed to be a god. There is no word for 'please' and no grammar for 'perhaps'. Three registers: high, low, and the void.",
    thumb: "../../assets/plates/firefalls.png",
    status: "complete", links: 12, edited: "4 days ago",
  },
  {
    id: "runadhrimir", filter: "languages", type: "Language",
    name: "Runadhrimir", faction: "Old tongue of the rune-makers",
    aliases: "Rune-speech · 'The Carved Tongue'",
    snippet: "The first written speech, taught to men by Mimir at the well. Each word has a shape; each shape has a weight. To write it wrong is to be answered by the wrong god.",
    thumb: "../../assets/plates/coastal.png",
    status: "draft", links: 24, edited: "today",
  },
  {
    id: "low-speech", filter: "languages", type: "Language",
    name: "Low Speech", faction: "Common tongue of Midgard",
    aliases: "Midgardr-mál · 'Hearth-Tongue'",
    snippet: "The tongue spoken in every harbour and every hall from Alba to the southern wall. Borrowed from a hundred others; owes its grammar to the Hornfolke and its words to everyone else.",
    thumb: "../../assets/plates/grassland.png",
    status: "stub", links: 9, edited: "1 week ago",
  },

  // ─── Spells ────────────────────────────────────────────────────
  {
    id: "spell-still-the-tide", filter: "spells", type: "Spell",
    name: "Still the Tide", faction: "Sea-rite · taught by Njordr",
    aliases: "Sjór-stilling",
    snippet: "A nine-line incantation that lays a fjord flat for the time it takes a longship to cross. Costs the caster their voice for as many days as the crossing takes hours.",
    thumb: "../../assets/plates/coastal.png",
    status: "draft", links: 7, edited: "today",
  },
  {
    id: "spell-name-the-bear", filter: "spells", type: "Spell",
    name: "Name the Bear", faction: "Hornfolke rune-rite",
    aliases: "Bjarn-nafn",
    snippet: "A binding that asks the bear-spirit of the high passes for safe passage. Three runes scored into birch, three drops of blood, one true name spoken aloud to the wind.",
    thumb: "../../assets/plates/mountains.png",
    status: "stub", links: 5, edited: "yesterday",
  },
  {
    id: "spell-iron-oath", filter: "spells", type: "Spell",
    name: "The Iron Oath", faction: "Binding-rite · Iron Crown",
    aliases: "Járn-eiðr",
    snippet: "The oath that binds a jarl to the Crown. Sworn on a circle of black iron, sealed in salt, and unbreakable except by death — the swearer's, or the crown-holder's.",
    thumb: "../../assets/plates/hornfolke.png",
    status: "complete", links: 19, edited: "2 days ago",
  },

  // ─── Runes ─────────────────────────────────────────────────────
  {
    id: "rune-fehu", filter: "runes", type: "Rune",
    name: "Fehu — Cattle, Wealth", faction: "First of the elder row",
    aliases: "ᚠ · 'The Open Hand'",
    snippet: "The first rune. Cut into the lintel of a hall, it asks the gods to keep the herd fat and the door open. Cut backwards, it asks the same of an enemy's house, in mockery.",
    thumb: "../../assets/icons/rune.png",
    status: "draft", links: 11, edited: "3 days ago",
  },
  {
    id: "rune-isa", filter: "runes", type: "Rune",
    name: "Isa — Ice, Stillness", faction: "Eleventh of the elder row",
    aliases: "ᛁ · 'The Standing-Still'",
    snippet: "A single vertical stroke. The rune of held breath, of the frozen river, of the moment between the swing and the cut. Worn at the throat by oath-takers.",
    thumb: "../../assets/icons/rune.png",
    status: "stub", links: 8, edited: "today",
  },
  {
    id: "rune-tiwaz", filter: "runes", type: "Rune",
    name: "Tiwaz — The God-Spear", faction: "Seventeenth of the elder row",
    aliases: "ᛏ · 'Tyr's Mark'",
    snippet: "The rune of victory bought with sacrifice. Cut into spear-hafts before battle. The Iron Crown carries it on its inner band, where only the wearer can see it.",
    thumb: "../../assets/icons/rune.png",
    status: "complete", links: 14, edited: "yesterday",
  },

  // ─── Artefacts ─────────────────────────────────────────────────
  {
    id: "iron-crown-relic", filter: "artefacts", type: "Artefact",
    name: "The Iron Crown", faction: "Relic — seat of the confederation",
    aliases: "Járnkróna · 'The Wolf-Crown'",
    snippet: "A circle of black iron, beaten cold, set with no jewel. Forged by Ulf from the prow-nails of the seven first ships. Bears the Tiwaz rune on its inner band.",
    thumb: "../../assets/icons/artefact.png",
    status: "complete", links: 22, edited: "today",
  },
  {
    id: "wolf-banner", filter: "artefacts", type: "Artefact",
    name: "The Wolf-Banner", faction: "Standard of the Iron Crown",
    aliases: "Vargs-merki",
    snippet: "Black wolf on a field of ember-red, woven by Hilda Steel-Eye in the year of the long frost. Carried before Sigrun at every council and every crossing.",
    thumb: "../../assets/icons/artefact.png",
    status: "draft", links: 13, edited: "4 days ago",
  },
  {
    id: "mimirs-horn", filter: "artefacts", type: "Artefact",
    name: "Mímir's Horn", faction: "Vessel · drawn from the well",
    aliases: "Gjallarhorn-bróðir · 'The Quiet Horn'",
    snippet: "The drinking-horn that Mimir keeps at the well. Whoever drinks from it tastes the water of the well — and pays the well its price. Odin paid an eye. No-one has paid less.",
    thumb: "../../assets/icons/artefact.png",
    status: "stub", links: 26, edited: "1 week ago",
  },
];

// Decorate every entry with its type color so EntryCard / EntryView keep working.
ENTRIES.forEach(e => { e.color = TYPE_COLOR[e.type] || "#d6c9a8"; });

// Pretty zone-header copy per filter.
const ZONE_HEADERS = {
  all:        { eyebrow: "The library — every shelf",        title: "All entries",  sub: (n) => `${n} entries · across nine kinds` },
  characters: { eyebrow: "Chapter ii — the iron crown",      title: "Characters",   sub: (n) => `${n} entries · 6 highlighted` },
  places:     { eyebrow: "Chapter iii — the nine worlds",    title: "Places",       sub: (n) => `${n} entries · 23 in the atlas` },
  factions:   { eyebrow: "Chapter iv — banners & oaths",     title: "Factions",     sub: (n) => `${n} entries · 11 known houses` },
  cultures:   { eyebrow: "Chapter v — the peoples",          title: "Cultures",     sub: (n) => `${n} entries · 6 living, 1 lost` },
  events:     { eyebrow: "Chapter vi — the long reckoning",  title: "Events",       sub: (n) => `${n} entries · spanning four ages` },
  languages:  { eyebrow: "Chapter vii — the carved tongues", title: "Languages",    sub: (n) => `${n} entries · 4 still spoken` },
  spells:     { eyebrow: "Chapter viii — the rites",         title: "Spells",       sub: (n) => `${n} entries · 17 drafted, 4 verified` },
  runes:      { eyebrow: "Chapter ix — the elder row",       title: "Runes",        sub: (n) => `${n} entries · 24 of the elder row` },
  artefacts:  { eyebrow: "Chapter x — relics & regalia",     title: "Artefacts",    sub: (n) => `${n} entries · 19 catalogued, 3 lost` },
};

// Per-filter zone-plate background
const ZONE_PLATES = {
  all:        "../../assets/plates/coastal.png",
  characters: "../../assets/plates/kernow.png",
  places:     "../../assets/plates/mountains.png",
  factions:   "../../assets/plates/empire.png",
  cultures:   "../../assets/plates/hornfolke.png",
  events:     "../../assets/plates/hellas.png",
  languages:  "../../assets/plates/avalon.png",
  spells:     "../../assets/plates/firefalls.png",
  runes:      "../../assets/plates/desert.png",
  artefacts:  "../../assets/plates/dumnonia.png",
};

// Per-filter "+ New …" button label
const NEW_LABELS = {
  all: "+ New entry", characters: "+ New character", places: "+ New place",
  factions: "+ New faction", cultures: "+ New culture", events: "+ New event",
  languages: "+ New language", spells: "+ New spell", runes: "+ New rune",
  artefacts: "+ New artefact",
};

function LibraryBrowser({ activeFilter, onFilter, onOpenEntry, focusedId }) {
  const filters = [
    { id: "all",        label: "All",        color: null },
    { id: "characters", label: "Characters", color: "#d99366" },
    { id: "places",     label: "Places",     color: "#7da265" },
    { id: "factions",   label: "Factions",   color: "#c43a4e" },
    { id: "cultures",   label: "Cultures",   color: "#a07cc8" },
    { id: "events",     label: "Events",     color: "#8d8478" },
    { id: "languages",  label: "Languages",  color: "#8aa0ab" },
    { id: "spells",     label: "Spells",     color: "#6b89c2" },
    { id: "runes",      label: "Runes",      color: "#c9a227" },
    { id: "artefacts",  label: "Artefacts",  color: "#a8814d" },
  ];

  const filterId = activeFilter || "characters";
  const visible = filterId === "all"
    ? ENTRIES
    : ENTRIES.filter(e => e.filter === filterId);

  const header = ZONE_HEADERS[filterId] || ZONE_HEADERS.all;
  const plate  = ZONE_PLATES[filterId]  || ZONE_PLATES.all;
  const newLabel = NEW_LABELS[filterId] || "+ New entry";

  return (
    <section className="mim-library">
      <div className="mim-zone">
        <div className="mim-zone-plate" style={{ backgroundImage: `url('${plate}')` }}>
          <div className="mim-zone-fade"/>
        </div>
        <div className="mim-zone-body">
          <span className="mim-eyebrow">{header.eyebrow}</span>
          <h1 className="mim-zone-title">{header.title}</h1>
          <p className="mim-zone-sub">{header.sub(visible.length)}</p>
        </div>
        <div className="mim-zone-actions">
          <button className="mim-btn-ghost">Sort: recent</button>
          <button className="mim-btn-primary">{newLabel}</button>
        </div>
      </div>

      <div className="mim-filters">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => onFilter(f.id)}
            className={"mim-chip" + (filterId === f.id ? " is-active" : "")}
            style={{
              "--chip-c": f.color || "var(--fg-2)",
            }}
          >
            {f.color && <span className="mim-chip-dot"/>}
            {f.label}
          </button>
        ))}
        <span className="mim-filter-spacer"/>
        <button className="mim-chip-ghost">view: list</button>
        <button className="mim-chip-ghost">stub only</button>
      </div>

      <div className="mim-entries">
        {visible.map(entry => (
          <EntryCard
            key={entry.id}
            entry={entry}
            focused={focusedId === entry.id}
            onClick={() => onOpenEntry(entry)}
          />
        ))}
      </div>
    </section>
  );
}

window.LibraryBrowser = LibraryBrowser;
window.MIM_ENTRIES = ENTRIES;
window.MIM_TYPE_COLOR = TYPE_COLOR;
