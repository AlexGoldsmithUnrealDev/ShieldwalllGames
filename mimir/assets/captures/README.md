# Mimir website captures

Captured 21 Oct 2026 from the real Mimir app (v0.9.0, built from `main` at `45cac19`).

## How these were made

- **The world.** "Nine Realms" is the Norse demo world from the project's own population test (`npm run test:population`), with its 151 art images, 5 maps, a calendar, quests, dialogues and 2 campaigns. I removed the test-only `zz-test-*` entries and one test sentence from Óðinn's text. It is a copy at `/home/demo/Worlds/Nine Realms`, not Alex's lorebible.
- **The app.** The real Electron app, driven by Playwright. It used the Hearth theme, a 1600×1000 window and 2× pixels, so PNGs are 3200 px wide (or 2692 px when the sidebar is cropped off).
- **The plan.** The app ran with the test switch that reports the top plan (Loremaster), so paid screens open. That switch only works in a development build, never in an installed copy.
- **AI.** Turned off. AI features answer from canned test text in this setup, so **no AI output appears in any capture**. Every slot that needs a live AI answer is marked NEEDS ALEX.
- **Files.** Each slot comes as `png/`, `avif/` (primary) and `webp/` (fallback), with the same base name. The video is in `video/`.

### Status key

| Status | Meaning |
|---|---|
| **Captured** | Real screen, matches the slot. |
| **Closest** | Real screen, but not exactly what the slot asks for. The reason is given. |
| **Planned** | The slot is a Proving Grounds slot, so the site must show the "(planned)" label. |
| **NEEDS ALEX** | Can't be captured honestly here. The steps to capture it are given. |

## Priority 1: Homepage

| # | Files | Status | Description | Suggested alt text |
|---|---|---|---|---|
| 1 | `01-hero-workspace` | Captured (see note) | Home grid of every entry, with art and type filters | "The Mimir workspace showing a Norse mythology world: a grid of illustrated entries for characters, quests, dialogues, maps and events, with type filters along the top." |
| 1 alt | `01b-hero-alt-entry-odin` | Captured | Óðinn's entry: portrait, structured fields, relationships, classes and links | "Mimir's entry page for Óðinn, with his portrait, aliases, structured fields such as species and birthplace, family relationships, and a list of linked entries." |
| 1 alt | `01c-world-connections-graph` | Captured | Graph of every wiki-link in the world (873 links) | "A dense network graph in Mimir showing every cross-reference between entries in the world, coloured by entry type." |
| 2 | `video/02-core-workflow.mp4` / `.webm`, `.en.vtt` captions, `02-video-poster` | Captured (AI step partial) | 65 s: create entry → wiki-link it → open linked entry → family tree → relationships → map → timeline → type a question to Ask Mimir. **It stops before the answer.** | Poster: "Mimir's home screen showing an illustrated grid of world entries." |
| 3 | `03-family-tree` | Captured | Family tree focused on Óðinn: Frigg, six children, a grandchild | "Mimir's family tree for Óðinn, showing his spouse Frigg, their children Víðarr, Baldr, Þórr, Höðr, Nanna and Sif, and Baldr's son Forseti." |
| 4a | `04a-timeline` | Captured (thin) | Timeline at era zoom on the custom "Mythic Age" calendar | "Mimir's timeline at era zoom, with dated events along a line from year 1 to year 1001 of the Mythic Age, and event-type filters on the left." |
| 4b | `04b-map` | Captured | "The Nine Worlds" map with 6 pins | "An illustrated map of the Nine Realms around the world-tree Yggdrasil, open in Mimir with location pins." |
| 5 | none | **NEEDS ALEX** | A cited Ask Mimir answer needs a live AI answer. | |
| 6 | none | **NEEDS ALEX** | An Ask Mimir refusal needs a live AI answer. | |
| 7 | `07-closest-loremaster-laws` | Closest + **NEEDS ALEX** | The Loremaster screen with the world's 14 laws and the "Consult" panel, before any reading. A real contradiction finding needs a live AI reading. | "Mimir's Loremaster screen listing the world's laws, ready to read the world for broken laws and contradictions." |
| 8 | `08-proving-grounds-simulation-result-planned` | Planned (real screen) | Quest simulation finished: outcome "The wolf is bound; Týr is one-handed", 10 steps, 77% coverage | "(Planned) A quest graph test run in Mimir that reached the outcome 'The wolf is bound; Týr is one-handed', with step controls and path coverage." |
| 9 | `09-collab-gm-who-sees-what` | Captured (local GM view) | GM's "Who sees what": groups and players, each with the entries they have been granted | "The game master's 'Who sees what' screen in a Mimir campaign. The party, the Shield-wall, the Seers and individual players each hold only the entries the GM has granted." |
| 10 | `10-collab-player-view-preview` (+ `10b`) | Closest | The GM's own preview of player Sunniva's app ("What I know": 2 things), and the list of entries withheld from her. This is drawn from exactly what Mimir would send, but it is not a second machine. | "A preview of what one player can see: two shared entries, while a GM-only list shows everything withheld from her." |
| 11 | `11-ownership-app-beside-files` | Closest | Mimir open on Óðinn, beside a terminal listing the same world folder and showing the top of `characters/odin.md` | "Mimir open on Óðinn's entry, beside a terminal showing the world folder and the plain markdown file behind that entry." |

## Priority 2: Mimir AI page

| # | Files | Status | Description | Suggested alt text |
|---|---|---|---|---|
| 12 | none | **NEEDS ALEX** | Live answer with citations. | |
| 13 | `13b-closest-what-mimir-checks` (+ `13-closest-ask-mimir-empty`) | Closest + **NEEDS ALEX** | The "What Mimir checks" panel: limits of what the AI reads, pinned and retrieved entries, and "never uses outside knowledge". With no question asked, the retrieved list is empty. | "Mimir's 'What Mimir checks' panel, explaining that the assistant reads only entries in this world, with pinned and retrieved entry lists." |
| 14 | none | **NEEDS ALEX** | Refusal answer. | |
| 15 | `07-closest-loremaster-laws` (reuse) | Closest + **NEEDS ALEX** | As slot 7. | |
| 16 | `16a-ai-context-bundle-settings`, `16b-ai-context-bundle-preview-export` | Captured | World brief: scope, spoiler threshold, world filter, wrapper instructions, live preview, token count, Copy / Save to disk | "Mimir's World brief export: choose which entries and spoiler level to include, edit the instructions for another AI tool, and preview the markdown bundle before copying or saving it." |
| 17 | `17-closest-conlang-vocabulary` (+ `17b-closest-translator-empty`) | Closest + **NEEDS ALEX** | The Old Norse vocabulary (13 words, with registers "Common speech" and "Skaldic verse"), plus the Translator before a run. The translation itself is AI. There is no accepted-vs-proposed state in the code; AI-coined words just get an "AI" pill. | "The vocabulary of a language in Mimir, listing words such as eiðr (oath) and ragnarǫk (the doom of the gods), each tagged with its register." |

## Priority 3: Campaign page

| # | Files | Status | Description | Suggested alt text |
|---|---|---|---|---|
| 18 | `18-campaign-scene-preparation` (+ `18b-campaign-encounter-prep`) | Captured | Scene deck with acts, "Nothing is being shown to anybody", a random table, the last-session recap; plus encounter prep with GM-only real names vs what players see, and a map | "A game master preparing scenes in a Mimir campaign: a scene deck organised into acts, a random table roller, and a note that nothing is shown to players until they go live." |
| 19 | `19-campaign-visibility-controls` | Captured | Who sees what (same screen as slot 9, at a different scroll position) | "Mimir's visibility controls: entries from the world are granted to specific players or groups, and everything else stays private." |
| 20 | `20-campaign-player-companion-preview` | Closest + **NEEDS ALEX** | GM-side preview of Sunniva's "My character" page (stats, proficiencies, class features). The real phone or browser companion needs a hosted live table. | "A preview of a player's companion app in Mimir, showing her character's stats and abilities." |

## Priority 4: Proving Grounds page (all "(planned)")

| # | Files | Status | Description | Suggested alt text |
|---|---|---|---|---|
| 21 | `21-dialogue-graph-test-run-planned` | Planned (real screen) | "Þórr and the Ferryman" dialogue graph mid-run, waiting on the player's choice ("Threaten him with the hammer" / "Trade boasts of great deeds") | "(Planned) A dialogue graph being test-run in Mimir, paused at a player choice between threatening the ferryman and trading boasts." |
| 22 | `22a-quest-graph-planned`, `22b-quest-branch-choice-planned` | Planned (real screen) | "The Binding of Fenrir" quest graph; the run paused at the branch "Týr lays his hand in the wolf's jaws" / "No god will risk a hand" | "(Planned) A branching quest graph in Mimir, with the test run paused at the choice of who will risk a hand in the wolf's jaws." |
| 23 | `23a-variables-declarations`, `23b-state-inspector-planned` | Planned (real screens) | Two global variables declared through the real form (`fenrir_bound`, `gleipnir_forged`), and the live state inspector (variables plus 28 relationship scores) | "(Planned) The state inspector during a Mimir simulation, showing declared variables and the relationship scores between characters." |
| 24 / 33 | `24-proving-grounds-sim-setup-planned` | Planned (real screen) | Simulation setup: preset and subject character, Start simulation | "(Planned) Setting up a simulation run in Mimir by choosing a starting preset and a character." |
| 24 alt | `24b-proving-ground-ai-play-setup` | See note | The app's own "Proving Ground" screen, which is a different thing (see question 1 below) | |
| 25 | `25-simulation-coverage-path-planned` | Planned (real screen) | Coverage 10/13 (77%) with unreached nodes, and the inspector | "(Planned) Simulation results in Mimir showing which parts of a quest graph a test run reached and which it missed." |

## Priority 5: Migration page

| # | Files | Status | Description | Suggested alt text |
|---|---|---|---|---|
| 26 | `26-migration-csv-mapping` (+ `26b-closest-migration-other-tools`) | Captured | `artifacts.xlsx` mapped by hand: kind = Artifact, name column = "name", and fields type, materials, creator, current owner and magical effects mapped. Also shows the "Move from another tool" screen (Obsidian, Notion, World Anvil). | "Turning a spreadsheet into Mimir entries: each row becomes an Artifact, with spreadsheet columns matched to fields such as materials, creator and current owner." |
| 27 | none | **NEEDS ALEX** | AI prose extraction proposals need a live AI run. | |

## Priority 6: Features page

| # | Files | Status | Description | Suggested alt text |
|---|---|---|---|---|
| 28 | `28-build-entry-editor` | Captured | Óðinn in Edit mode: portrait, name, id, aliases, schema fields | "Editing Óðinn in Mimir: his portrait, name, aliases and structured fields from the character schema." |
| 29 | `29-connect-backlinks` (+ `29b-connect-appears-in`, `29c-connect-relationships-graph`) | Captured | Wiki-linked body text and the "Linked from" panel (61 backlinks, each marked body or frontmatter). Also "Appears in" for Frigg, and the typed relationships graph. | "Óðinn's entry text in Mimir with highlighted wiki-links, above a 'Linked from' panel listing the 61 entries that reference him." |
| 30 | `30-visualise-family-tree` (+ `30b-visualise-genus-tree`, `30c-visualise-culture-tree`) | Captured | Family, genus and culture trees | "Mimir's culture tree, with Proto-Norse branching into the Æsir, Jötnar and Vanir, and their descendant cultures." |
| 31 | `31-write-plan-narrative-planner` | Captured (thin) | "The Road to Ragnarök" narrative planner. Only 2 beats are seeded. | "A narrative planner in Mimir with story beats connected on a canvas." |
| 32 | `32-understand-library-home` (+ `32b-understand-browser-filters`) | Captured | Home grid, and the library browser with search, type filters and entry cards | "Mimir's library browser: search, entry-type filters, and cards for each entry showing type, summary and link counts." |
| 33 | reuse `24-proving-grounds-sim-setup-planned` | Planned | | |
| 34 | `34-history-version-restore` (+ `34b-history-commit-list`) | Closest | An earlier version of `odin.md` opened from History, with "Restore this version", plus the commit list. **There is no side-by-side version comparison in the app.** I cropped off the modal header because it shows this container's git author name. | "An earlier version of Óðinn's markdown file opened from Mimir's git-backed history, with a button to restore it." |
| 35 | `35-closest-campaign-players-groups` | Closest + **NEEDS ALEX** | The campaign Players tab (groups, invitations "appear once your table is open"). Writers' Room roles and invitations need a signed-in hosted account. | |

## Priority 7: Social preview images

| # | Files | Status | Notes |
|---|---|---|---|
| 36 | `36-og-shieldwall-home` (1200×630) | Captured (see note) | There is **no Shield Wall logo file** in the repo. I used the studio kit's own text wordmark ("Shield Wall", Njord display font, "Games · Cornwall"), stone-and-iron colours, and the site's title line as the tagline. Swap in a logo if one exists. |
| 37 | `37-og-mimir-landing` (1200×630) | Captured | Mimir well mark + rune wordmark (from `public/brand/logos/`) + "Local-first worldbuilding". |
| 38 | none | **NEEDS ALEX** | There is no Ashborn logo file. Also, the design kit (`ui_kits/ashborn-site`) describes Ashborn as "a two-player skirmish wargame", but the shot list says "Viking Age CCG". Alex needs to confirm the positioning and supply a logo. |

## NEEDS ALEX: how to capture these on your own machine

Use a copy of the demo world (or `npm run test:population`, then open the world folder), signed in on an account with AI credits.

1. **Slots 5 and 12, cited answer.** Open Ask Mimir and ask "Who bound Fenrir, and what did it cost?" Wait for the answer with its source chips. For slot 12, capture the whole column. For slot 13, open "What Mimir checks" afterwards: the Retrieved list then shows the entries it used.
2. **Slots 6 and 14, refusal.** Ask something the world never states, such as "What is Frigg's favourite colour?" Capture the reply that says the world does not establish it.
3. **Slots 7 and 15, Loremaster.** Open Tools → Loremaster, choose "Contradictions", then "Consult the Loremaster". Open a finding that names the entries involved. The population test seeds deliberate contradictions for this (`tests/observable/norse-consistency-fixtures.ts`). I removed the visibly test-named one from my copy, so use a freshly seeded world for this slot.
4. **Slot 17, translation.** In Translator, pick English → Old Norse, register "Skaldic verse", and type "The wolf will break his fetters at the end of days." Capture the result with any newly coined words, then open the vocabulary to show the new words with their AI pill.
5. **Slot 20, player companion.** Campaign → Scene → Go live. Open the player link on a phone or second browser, admit the player, and capture "What I know".
6. **Slot 27, prose extraction.** Import the sample prose file `tests/fixtures/import-samples/prose-places.md` through the prose importer. That folder's README says which importer each file targets; I did not check the exact menu path. Capture the AI proposals review before you press Create.
7. **Slot 35, permissions.** Signed in as a world owner: Collaborate → Writers' Room → Members. Invite one person, then capture the roles and invitations.
8. **Slot 2, video ending.** Re-record the last 8 seconds with a real answer arriving, or keep the video as it is. The current captions already avoid claiming an answer.
9. **Slot 38.** Supply the Ashborn logo and confirm the tagline.

## Questions for Alex

1. **Proving Grounds is partly built already.** The quest and dialogue graph test runs (choices, outcomes, coverage, state inspector, variables, presets) are real, shipped screens. The site calls them "(planned)". I kept the "(planned)" label in the file names as the brief said. Separately, the app's sidebar item "Proving Ground" is a different feature: an AI-refereed play space, "Needs LOREMASTER". Which one should the website mean?
2. **Slot 1** asks for entries, relationships, timeline and map "all visible in one view". No single screen does that. Use the home grid (`01`), or Óðinn's entry page (`01b`)? A labelled collage of real screens is also possible.
