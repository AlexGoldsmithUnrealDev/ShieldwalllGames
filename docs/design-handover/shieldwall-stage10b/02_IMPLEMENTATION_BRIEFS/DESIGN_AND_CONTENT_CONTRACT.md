# Binding Stage 10B design and content contract — SHIELDWALL ONLY

## Where the design comes from

`../01_APPROVED_DESIGN/Shieldwall_Games_Stage10B_Alive_Landscape_Mockup.html` is the exact, originally approved interactive page and CSS. Reuse its composition and intentional details; adapt to existing production architecture, not vice versa. The existing Shieldwall site is a *functional baseline*, not visual authority. A reskin of old HTML is a failure.

## Main look and feel

- **Atmosphere:** imaginative, world-led, alive and active, not corporate, dashboard-like or generic SaaS; distinguish visually from Vitus's medieval *Iron & Ink* website. Build a gallery of landscapes as the user supplies them.
- **Hero:** approximately viewport-high, wide cinematic background, dark layered top/bottom fades; prominent Njord-style headline **“One world. Many games.”**, introductory paragraph, prominent **Explore Vitus** and **See the roadmap** buttons; darker readable area around text.
- **Background imagery:** every major section has a full-bleed landscape artwork layer behind a subtle contrast fade. Use existing repo images temporarily; no text labelled “ARTWORK SLOT” in production. Keep the artwork visible, not crushed under an opaque black veil. Different sections can have different art and tonal crops.
- **UI:** translucent glass-like dark panels over landscapes, occasional amber highlights, frost-like blue support, generous spacing, organically rising motion rather than sterile card-heavy layouts. Preserve access to all content on reduced motion.
- **Stage10B tokens:** `#0C0F13` primary background, `#141922` softer background, `#EEF3FB` primary text, `#C5CFDD` muted text, `#D98D43` amber accent, `#F1BE7F` soft accent, `#9AB7D8` frost, `rgba(11,14,18,.58)` glass panel and `rgba(8,10,14,.76)` stronger glass. These are studio-specific, **not** Vitus's Iron & Ink colours.
- **Typography:** existing repo's *Njord* is the display/brand font. Reuse existing body stack (Inter/system fallbacks). The prototype may fall back to a generic font when opened without the repo font; production must use the real one.
- **Logo:** current production Shieldwall logo(s) from repository. The bundled preview PNG is not necessarily the latest.

## Page structure — one approved studio homepage

1. **Header** — existing production logo + Njord, sticky/translucent nav, anchors for Studio / Vitus / Roadmap / Future / Newsletter, accessible mobile menu.
2. **`#hero`** — tall imaginative **One world. Many games.** hero, landscape, gradients, intro, CTAs. Not the existing short corporate masthead.
3. **`#studio`** — independent studio introduction, creativity philosophy, frosted overlay copy, supporting art.
4. **`#vitus`** — our first product; local-first worldbuilding and ownership, accurate genuine app imagery where shown; supports a route to full Vitus site, not a duplicate of its homepage.
5. **`#roadmap`** — visible narrative/timeline: Vitus launch → ~6 months beta → 1.0 targeted 2027; development of Ashborn CCG concurrently, targeted late 2027; after that Ashborn — Saga's Tavern (no firm date). Clearly label estimates as targets.
6. **`#future`** — at least two planned narrative trilogies, one shared-world creative vision, tools before our games so players can write their own stories while waiting.
7. **`#newsletter`** — welcoming atmospheric MailerLite signup and clear expectation of announcements; use the *existing actual* form, gated by the current consent flow; no placeholder `href="#"`.
8. **Footer** — current production social/legal/support links and privacy/terms/cookie controls preserved.

Only the *studio homepage* has an approved detailed visual mock-up. Existing privacy/terms/support pages should remain available and functional. Do not invent separate approved page specifications.

## Product and story accuracy

- Vitus is the **first product**; do not fabricate a vast catalogue.
- Ashborn CCG is in development; label 2027 timing as a goal, not a guaranteed release.
- Saga's Tavern is a **future** standalone GM-led RPG simulator with deep Vitus integration: GMs shape their friends' experience through encounters and scenarios. Its mechanics and release year are not final. Do not promise them.
- At least two trilogies of stories are planned; they are *plans*, not products ready for pre-order.
- Use user's founding concept: **“Creativity should never be held back.”** You can polish copy while keeping that meaning.
