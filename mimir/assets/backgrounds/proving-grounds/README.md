# Proving Grounds Well backgrounds

The Proving Grounds page is ready for six dedicated dark/lit background pairs. Until these files exist, `proving-grounds-chapters.js` keeps `assetReady: false` and supplies the atmospheric gradient environments used by the live page.

## Source masters

- Desktop: 3840 × 2400
- Mobile: 1440 × 2560
- Deliver compressed AVIF files using the exact names below.
- Dark and lit versions must share the same composition so the shared Well controller can cross-fade illumination without a visible jump.
- Keep the central reading zones quieter than the edges. Decorative paths must never compete with page text or conceptual demonstrations.

## Required files

### 01 - Test before canon

- `01-experiment-dark.avif`
- `01-experiment-lit.avif`
- `01-experiment-dark-mobile.avif`
- `01-experiment-lit-mobile.avif`

Scene: a stable carved chamber where one clear rune path enters a temporary testing circle. The lit version reveals a second boundary around the experiment so canon and test state remain visually distinct.

### 02 - Conversations

- `02-conversation-dark.avif`
- `02-conversation-lit.avif`
- `02-conversation-dark-mobile.avif`
- `02-conversation-lit-mobile.avif`

Scene: two facing carved forms or rune clusters with several faint response paths between them. The lit version should illuminate one branch while alternatives remain visible but dim.

### 03 - Quests and choices

- `03-choices-dark.avif`
- `03-choices-lit.avif`
- `03-choices-dark-mobile.avif`
- `03-choices-lit-mobile.avif`

Scene: a more complex network of branching stone paths with an obvious start and several possible outcomes. The lit version should reveal conditions or blocked branches without becoming a flowchart.

### 04 - World state

- `04-state-dark.avif`
- `04-state-lit.avif`
- `04-state-dark-mobile.avif`
- `04-state-lit-mobile.avif`

Scene: carved state markers around a central well chamber, with some dormant and others active. The lit version should show energy travelling between changed markers.

### 05 - Sessions, systems and simulation

- `05-simulation-dark.avif`
- `05-simulation-lit.avif`
- `05-simulation-dark-mobile.avif`
- `05-simulation-lit-mobile.avif`

Scene: the deepest and most active experimental chamber, with several interconnected rune paths and faint reflected alternatives. The lit version can be brighter and more complex while keeping a medieval stone language rather than a holographic interface.

### 06 - The creator decides

- `06-decision-dark.avif`
- `06-decision-lit.avif`
- `06-decision-dark-mobile.avif`
- `06-decision-lit-mobile.avif`

Scene: alternative paths return to one calm decision point above dark water. The lit version should introduce restrained warm gold, suggesting judgement and authorship rather than a system-selected answer.

## Enabling artwork

After all four files for one chapter have been added, set that chapter's `assetReady` field to `true` in `mimir/scripts/proving-grounds-chapters.js`. Focal positions, accent colours, text accents, frame colours, navigation markers and glow are configured there per chapter.

The shared controller initially loads only the active chapter and preloads its immediate neighbours. Later chapters remain lazy.
