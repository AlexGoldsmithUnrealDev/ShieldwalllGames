# Mimir Design System

A unified visual language for **Mimir** (the worldbuilding app), the **Mimir
marketing site**, **Shield Wall Games** (parent studio), and **Ashborn: Halls
of Saga** (the studio's debut Viking Age tabletop wargame).

The brief: *crafted, not corporate*. Heavy and warm. Mythic, not LARP. Every
property should feel like it came from the same hand — a scholar's atelier
with a fire going, walls covered in pinned sketches and family trees, a half-
told story pulling you in.

This design system is the source of truth for that feeling.

---

## What's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. Brand context, content + visual fundamentals, iconography, manifest. |
| `SKILL.md` | Agent-skill front matter — drop this folder into Claude Code as a skill. |
| `colors_and_type.css` | All design tokens. Base palette → semantic vars → element baselines. |
| `fonts/` | `Njord-Regular.otf`, `Njord-Alternate.otf` (display). Source Serif 4 + Inter via Google Fonts. |
| `assets/logos/` | Mimir mark (well silhouette), well-of-wisdom plate. |
| `assets/icons/` | The 16 entry-type icons used in the app browser. |
| `assets/plates/` | Themed location plates — kingdoms, biomes, atmospheric scenes. |
| `assets/characters/` | Character art used as drop-ins, empty states, hero accents. |
| `preview/` | Design-system review cards (one HTML file per token cluster). |
| `ui_kits/mimir-app/` | Hi-fi recreation of the Electron worldbuilding app. |
| `ui_kits/mimir-site/` | Marketing site for Mimir. |
| `ui_kits/shieldwall-site/` | Shield Wall Games studio site. |
| `ui_kits/ashborn-site/` | Ashborn: Halls of Saga landing. |

---

## The four properties

### Mimir (app) — *the scholar's atelier*
Local-first Electron + React + TypeScript. Worldbuilders' single source of
truth, stored as plain markdown files. The biggest redesign target — the
existing app reads as "generic dark-mode CMS" and needs to feel like the
thing it's a tool for.

Direction: warm dark canvas with subtle vellum/leather grain, sidebar framed
like a binding, illuminated-codex serif for entry titles, ergonomic sans for
UI. The themed location plates (Avalon, Forest, Fairy Ring, Hellas, etc.)
become zone headers tonally adjusted to sit *inside* the dark UI rather than
punching out of it. Character art is used as accents only — drop-caps, tree-
node ornaments, empty-state illustrations.

### Mimir website
Bridge between the app aesthetic and a public marketing voice. More
breathing room, fewer chrome surfaces, one strong character or vista plate
per fold. Same palette, same type pair.

### Shield Wall Games (studio site)
The parent brand. Confident, low-key, a touch dangerous. Pulled slightly
more architectural / restrained — stone and iron over ember and parchment.
Big considered typography, generous negative space.

### Ashborn: Halls of Saga
Heaviest of the four. Ember, oxblood, smoke, frost. Set design over UI
design — feels more like a poster than a product page. Full-bleed
atmospheric hero. Buy / newsletter present but never competing with the
atmosphere.

---

## Sources we drew from

| Source | Location | Notes |
|---|---|---|
| Lorekeeper codebase (the running app) | `Lorekeeper/` (mounted local folder) | Tailwind theme, route structure, entry-colour map, AppHeader, schemas, accessibility CSS variables. |
| `CLAUDE.md` | `Lorekeeper/CLAUDE.md` | Persistent product brief — tech stack, commercial model, V1 scope, Stage 25-32 tree architecture. |
| Lorebible content | `Lorekeeper/Shieldwall_LoreKeeper/` | Real entry markdown — characters, factions, places, events. Used to generate realistic copy in the UI kits. |
| Per-entry colours | `Lorekeeper/src/theme/entryColors.ts` | The 13-type palette (warm orange, teal, gold, crimson…) we pull forward and re-tune for dark warm surfaces. |
| Uploaded brand art | `uploads/*.png` + `uploads/Njord*.otf` | Logo, type, atmospheric plates, character spritework. The palette is *extracted from* this art. |
| GitHub repos | `AlexGoldsmithUnrealDev/Lorekeeper`, `AlexGoldsmithUnrealDev/ShieldwalllGames` | Listed in the brief. Not pulled — local mount is the canonical copy and the public Shieldwall site doesn't exist yet (we're designing it). |

---

## CONTENT FUNDAMENTALS

How copy is written across all four properties.

### Voice
- **First-person plural for the studio** (*"we built Mimir because…"*) and
  **second-person singular for the user** (*"your world", "you'll find"*).
- **Honest, direct, unhedged.** No marketing fluff, no "revolutionary",
  "delightful", "seamless". If a feature is in beta, the copy says beta.
- **Scholar's tone** for the app — restrained, quietly confident, never
  cute. The way a librarian explains a card catalogue.
- **Saga tone** for Ashborn — terse, weighted, present-tense. Sentence
  fragments are fine. *"The longships make landfall at dawn."*
- **Studio tone** for Shield Wall Games — plainspoken, a little dry. Like
  game-makers writing for game-makers.

### Casing
- **Sentence case for every UI label and heading.** Never Title Case
  Buttons, never `ALL CAPS` outside of small-cap eyebrows / kickers.
- Display headlines in `Njord` retain natural casing — they read as a
  single carved word, not a banner shout.
- Eyebrows / section kickers ARE small-caps with `letter-spacing: 0.08em` —
  borrowed from book chapter pages. *"chapter ii — the fall of dumnonia"*.

### Punctuation
- Em dash with hairline spaces (` — `) is the house punctuation.
- Single curly quotes for in-world voices, double for UI strings.
- Use the Oxford comma. Use semicolons; they're earned here.
- Numerals: words for one-through-nine in prose, digits everywhere else.

### Examples (real, lifted from the app + brief)
| Surface | Copy |
|---|---|
| App empty state, no entries | *"Your library is empty. Pick a folder to begin, or open one of the templates."* |
| Validation panel | *"Sigrun's father is listed as Ulf, but Ulf has no record of Sigrun as a child."* (specific, no jargon) |
| Stub banner | *"This is a stub. Mark complete when you're ready."* |
| Marketing hero (Mimir) | *"A library for the world you're building."* |
| Studio tagline | *"We make games and the tools we wish we had."* |
| Ashborn hero | *"The hall is burning. Pick a side."* |

### Tone anti-patterns (do not write like this)
- *"Unleash your creativity"* / *"Supercharge your worldbuilding"* — empty.
- *"Mimir is an AI-powered next-generation platform…"* — feature soup.
- *"Welcome, hero!"* / *"Embark on your journey"* — LARP whimsy.
- Sentences with three commas dressed up as one statement. Cut.

### Emoji
**Effectively never.** No flame, no scroll, no sparkle. Iconography is the
job of the icon set, not Unicode. The one exception is small marginalia
glyphs as section ornaments (✦, ⚜, ❦) used at most once per fold and never
inside running prose.

---

## VISUAL FOUNDATIONS

The atomic vocabulary every property speaks.

### Palette
Extracted from the art, not invented. Hex values defined in
`colors_and_type.css`.

- **Warm darks** — `--color-ink-800` (`#1c1814`) is canvas. Never flat
  `#1a1a1a`. Surfaces step *up* with warmth (`--color-ink-700` → `-600` →
  `-500`), not toward grey.
- **Parchment / vellum neutrals** — `--color-vellum-50` to `-500`. The
  scholar's reading surface; primary text on dark is vellum-100 (`#d6c9a8`)
  not white.
- **Ember accent** — `--color-ember-500` (`#b85a2c`). The hearth. CTAs,
  active selections, the lit-from-within glow on a focused entry.
- **Oxblood** — `--color-oxblood-500` (`#7a1f2b`). Heaviest emphasis,
  Ashborn-leaning surfaces, danger states.
- **Cool support** — `--color-frost-500` (`#4f6573`). Steel / mist. Info
  states, the Shield Wall Games studio site's lean direction.
- **Gilt** — `--color-gilt-500` (`#c9a227`). Sparingly. Rune highlights,
  premium tier.
- **Per-entry-type colours** — kept (the 13 from `entryColors.ts`) but
  re-tuned to live on warm dark backgrounds. See the entry-type swatches
  preview card.

### Typography
- **Njord** (custom OTF, regular + alternate) — display only. Hero
  headlines, posters, the brand mark. Has *personality* — angled cuts,
  saga-carved feel. Never set below 28px.
- **Source Serif 4** — workhorse serif. Entry titles, longform reading,
  marketing body. Optical-size aware (loads `8..60` axis); use larger
  optical sizes for display, smaller for body.
- **Inter** — UI sans. Labels, buttons, nav, table cells, anything dense.
- **JetBrains Mono** — IDs, code, frontmatter previews, terminal-shaped
  surfaces.
- **Noto Sans Runic** — preserved from the existing app for runes content.

Type scale and line-heights are in `colors_and_type.css` (`--fs-*`,
`--lh-*`). The base body is `15px / 1.55`; longform is `17px / 1.75`.

> **Substitution flag:** in production, host **Source Serif 4** locally to
> avoid the Google Fonts CDN — we ship it via `@import` here for speed of
> setup. **Inter** is widely available, fine to keep on CDN. Njord is the
> only first-party font and ships in `fonts/`.

### Spacing & layout
- Spacing scale: `--space-1` (4) → `--space-10` (128). 4px base, doubling.
- Container widths: app shell is fluid (no max-width); marketing pages cap
  at `1080px` for body, `1440px` for full-bleed plates.
- **Asymmetry is intentional.** Off-centre headlines, plates that bleed
  past the gutter, side-running rules. Never centre-everything-cards-grid.
- **Generous negative space on marketing**, dense on the app — the app is
  content-first. Hierarchy beats atmosphere when content is dense.

### Backgrounds
- **No gradients** as primary surfaces. The "magic" gradient is banned.
- **Grain overlay** at 4-6% opacity, mix-blend-mode overlay, applied to
  every surface — defined as a single inline-SVG turbulence pattern in
  `--grain-svg`. This is where most of the warmth comes from.
- **Themed plates** (the location PNGs) are used full-bleed for marketing
  heroes, cropped + colour-toned-down for app zone headers. They are
  *never* the only thing on a fold; they always pair with type and a hairline.
- Full-bleed gradients: forbidden unless deeply dimensional and grained.

### Animation
- **Slow, weighted easing.** Cubic-beziers in
  `--easing-settle / -pull / -emerge`. Things settle, they don't spring.
- Default transition: `240ms` for hover, `420ms` for layout, `700ms` for
  page transitions. Never under `140ms`.
- No bounces. No springs. Subtle dissolves and translation.
- Reduced-motion: respected via `@media (prefers-reduced-motion)` — strip
  all `transition` and `animation` properties.

### Hover / press
- **Hover on dark surfaces** = brighten the surface by stepping the ink
  scale (e.g. `ink-600` → `ink-500`), plus a 1px ember-tinted hairline.
- **Hover on accent** = subtle inner glow (`box-shadow:
  inset 0 0 0 1px rgba(255,240,210,0.08)`).
- **Press** = drop the surface one ink step further and reduce y-offset
  shadow by 1px. Never scale-down — this is software for serious creators,
  not a toy.

### Borders & rules
- **Hairlines, not boxes.** Most "borders" are 1px linear-gradient rules
  that fade to transparent at the ends — the `ms-rule` pattern. They feel
  *scribed*, not drawn-with-a-ruler.
- Real container borders use `var(--border)` (`rgba(214,201,168,0.14)`).
- **Emboss treatment** for the deepest cards: 1px highlight on top, 1px
  shadow on bottom — see `--border-emboss-top/-bottom`.

### Shadows
- **Lantern-light, never neutral.** All shadows are warm-shifted
  near-blacks. `--shadow-md` is the default surface elevation.
- **Glow-ember** (`--shadow-glow-ember`) is reserved for the *one* lit-up
  thing on a screen — the focused entry, the active CTA. Do not stack it.

### Transparency & blur
- Used sparingly. The overlay (`--bg-overlay`, 74% opacity) sits over the
  page beneath modals and the command palette. `backdrop-filter: blur(8px)
  saturate(120%)` on overlays only, never on regular UI.
- No frosted-glass cards stacked on each other.

### Corner radii
- Cards: `--radius-md` (6px) — the default.
- Pills / chips: `--radius-pill`.
- Hero plates and image frames: `--radius-lg` (10px) max.
- The app shell is mostly *rectangular* — strong corners read as a
  bound-book edge. Avoid `rounded-2xl` SaaS feel.

### Cards
A card in this system has:
- A surface (`--bg-surface`) with grain overlay (`::before`).
- A `1px var(--border)` rule, hairline weight.
- `--shadow-sm` resting, `--shadow-md` on hover.
- An eyebrow / kicker in `--font-sans` `--fs-2xs` small-caps.
- A title in `--font-serif`.
- Body in `--font-sans` for dense rows, `--font-serif` for excerpts.

### Imagery vibe
- **Warm, painterly.** All character and location art is the studio's own
  AI-aided concept work, kept warm-tone, never cool-blue blockbuster.
- Tone-down character art with a slight darken + grain when it lands
  inside the dark UI so it doesn't punch out.
- Kept colour-graded toward ember / oxblood / parchment to stay in family
  with the palette.

---

## ICONOGRAPHY

Mimir uses **two parallel icon systems** — chosen deliberately, not by accident.

### 1. Entry-type plates (proprietary, painterly)
The 16 painted PNG icons in `assets/icons/` (`character.png`, `place.png`,
`faction.png`, etc.) are the *brand expression* of the entry types.
Black-on-white silhouettes — Viking helmet for `character`, mountain for
`place`, crossed swords + crown for `faction`, mead-horn for `culture`,
and so on. These are large, hero-sized icons used in:

- Empty-state illustrations
- Entry-type filter chips
- Onboarding cards
- Marketing-site feature blocks
- The "new entry" menu

In the dark UI we tone them by inverting (`filter: invert() opacity(0.7)`)
or recolouring to vellum tints so they sit inside the canvas. Never use
them as small inline glyphs — they need 48px+ to read.

### 2. Lucide (UI utility icons)
For dense UI — buttons, menu rows, table actions, breadcrumbs — we use
**Lucide** (`https://unpkg.com/lucide@latest`). Stroke-based, 1.5px,
24×24 grid. Loaded via CDN.

> **Substitution flag:** Lucide is a *substitution* for Mimir — the
> existing Lorekeeper codebase uses unicode glyphs (`⚙`, `?`, `ℹ`, `⚔`,
> `📍`, `◈`, `❝`) inline in JSX. We're upgrading to Lucide for fidelity
> and consistency, but the Stage 25+ tree-node ornament glyphs (⚔, 📍, ◈)
> are *kept* because they're already established product vocabulary in
> the app.

### Logo / brand mark
The well-of-wisdom (`assets/logos/mimir-mark.png`,
`assets/logos/mimir-well.png`) is the singular brand mark. It pairs
silently next to the wordmark "Mimir" set in Njord. The well image is also
the empty-state illustration on the app's onboarding screen — your
worldbuilding library is the well.

### Unicode in copy
- Em dash (`—`), bullet (`•`), and hairline arrow (`→`) are allowed in
  prose and UI labels.
- Runic characters (U+16A0–U+16FF) appear *only* inside runes content,
  set in Noto Sans Runic.
- No emoji. (See Content Fundamentals.)

### Ornaments
Three reusable hairline ornaments live in the system:
1. **Hairline rule** (`.ms-rule`) — divider that fades at the ends.
2. **Corner motif** — small `Njord` bracket character, used on poster-
   style headings.
3. **Torn-edge mask** — used on hero plates to dissolve into background.

---

## File index

```
README.md                       you are here
SKILL.md                        agent-skill manifest
colors_and_type.css             all design tokens

fonts/
  Njord-Regular.otf
  Njord-Alternate.otf

assets/
  logos/                        mimir-mark.png, mimir-well.png
  icons/                        16 entry-type plates
  plates/                       location + biome plates
  characters/                   character art accents

preview/                        design-system review cards (registered)
  type-display.html             Njord display specimen
  type-serif.html               Source Serif 4 specimen
  type-sans.html                Inter specimen
  type-scale.html               full type scale
  color-darks.html              warm darks
  color-vellum.html             parchment neutrals
  color-ember.html              ember + oxblood
  color-frost.html              frost + gilt
  color-entry.html              13 entry-type swatches
  color-semantic.html           bg-page / fg-1 / accent etc
  spacing-scale.html            --space-1 → --space-10
  radii-shadows.html            radii + shadow ladder
  motion-easing.html            easing curves + durations
  texture-grain.html            grain overlay swatch
  components-buttons.html
  components-fields.html
  components-card.html
  components-chip.html
  components-entry-card.html    the app's signature card
  brand-logo.html
  brand-iconography.html
  brand-plates.html

ui_kits/
  mimir-app/                    Electron app recreation
  mimir-site/                   Marketing site
  shieldwall-site/              Studio site
  ashborn-site/                 Game landing
```

---

## How to use this system

If you're an agent designing for Mimir / Shield Wall / Ashborn:
1. Link `colors_and_type.css` and use the semantic tokens — `--bg-page`,
   `--fg-1`, `--accent`, never raw hex.
2. Read the relevant ui_kit before designing a new screen on that property
   — components are in there.
3. Match the property's tonal weight: app = warm + dense, marketing = warm
   + airy, studio = cool + restrained, Ashborn = heavy + smoky.
4. Use plates and character art **as accents**, not as wallpaper.
5. When in doubt: a hairline rule, a kicker in small-caps, a serif
   headline, and breathing room.
