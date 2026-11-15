# Shieldwall Games — corrected Stage 10B implementation handover

**THE ONLY SITE TO IMPLEMENT NOW: SHIELDWALL GAMES.** This revision corrects the previous handover, which mistakenly requested redevelopment of BOTH Shieldwall and Vitus.

## Important: exact approved design is preserved

- `01_APPROVED_DESIGN/Shieldwall_Games_Stage10B_Alive_Landscape_Mockup.html` is the exact approved Stage 10B HTML file, **copied unchanged, byte-for-byte**.
- **Open it in a browser before modifying code.** Its composition, hero, section structure, colour tokens, spacing, typography intent and interaction behavior are binding design references. The `REFERENCE_PREVIEWS` screenshots show original desktop/mobile structure but intentionally contain placeholder background art and fallback typography.
- The supplied Shieldwall `mockup_assets/Shieldwall Games logo.png` is **preview-only** and not authoritative: use the **current logos already present in the repository**.
- The prototype's landscape backgrounds are placeholders, because final user-provided art has not yet arrived. Use existing artwork from the repo as temporary full-bleed section imagery, with gradient fades for contrast.
- The prototype includes a visually illustrative newsletter form only; replace it with the real existing MailerLite integration.

## Work only on Shieldwall

- Build the one-page studio website with anchored areas: Hero, Studio, Vitus, Roadmap, Future, Newsletter, Footer. The *entire page composition* must change to Stage 10B, not simply the text and screenshots.
- Preserve current Shieldwall branding: **current logo** and **Njord font**, which lives in the codebase. Do not invent new brand marks or fonts.
- Keep existing integration/SEO/consent/legal/support/social behavior, adapting structure and styles as needed.
- Author final British English copy and use real current Vitus screenshots only when representing the app; otherwise use appropriately credited existing artwork.
- Preserve Vitus site/pages without redesigning them. **Do not implement any of the Vitus HTML prototypes in this task**.

## The archive files are NOT scope

The `90_ARCHIVE_ONLY` directory contains older Vitus design mock-ups and rejected Shieldwall directions. It exists solely to preserve our historical work and background, **not as a list of work items for this implementation**. Do not spend time implementing Vitus or resurrect the rejected Shieldwall Stage 10/10A layouts.

## Order of operations

1. Read `CLAUDE_PROMPT.md` and both briefs under `02_IMPLEMENTATION_BRIEFS/`.
2. Open and inspect `01_APPROVED_DESIGN/Shieldwall_Games_Stage10B_Alive_Landscape_Mockup.html` at desktop and mobile widths.
3. Inspect current `AlexGoldsmithUnrealDev/ShieldwalllGames` HEAD, production logo, fonts, existing URLs and existing MailerLite/consent/analytics infrastructure.
4. Build Stage10B into the site, source current screenshots and temporary artwork, and make the genuine integration functional.
5. Run the acceptance checklist and show visual evidence against Stage 10B before claiming completion. **No deployment or merge without Alex's approval.**

## Deliberate unresolved items

The final hero/section landscape artwork, final product screenshots and copy require real assets/current verification. Consequently, the approved layout can be faithfully implemented now, but an exact final-image pixel match is impossible until the new artwork is provided. Do not imply otherwise.
