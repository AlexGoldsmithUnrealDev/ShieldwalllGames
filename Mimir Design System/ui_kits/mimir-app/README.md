# Mimir App — UI Kit

A hi-fi recreation of the Mimir worldbuilding app. Electron / React /
TypeScript in production; this kit is a click-thru visual prototype.

## What's here
- `index.html` — interactive prototype: library browser, an open entry,
  the Ask Mimir panel, command palette.
- `Sidebar.jsx` — the binding-bound left rail.
- `LibraryBrowser.jsx` — entry list + filter chips + zone header.
- `EntryView.jsx` — open entry: serif title, frontmatter, prose, links.
- `AskMimir.jsx` — slide-in AI panel.
- `CommandPalette.jsx` — ⌘K overlay.
- `TopBar.jsx` — breadcrumb + search.
- `EntryCard.jsx` — list row + focused state.
- `Chip.jsx`, `Button.jsx`, `Field.jsx` — primitives.

## Visual rules followed
1. Warm dark canvas, never `#1a1a1a`. Surfaces step warmth.
2. Grain overlay on every shell.
3. Sidebar bound by 3px ember edge.
4. Plates as zone headers, not wallpaper.
5. Character art only as accents.
6. Slow easing — 240/420/700ms.
7. Sentence case throughout.
