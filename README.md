# Shieldwall Games — Web Project

The official websites for Shieldwall Games and its debut title, Ashborn: Halls of Saga.

## Pages

| Page | File | Description |
|------|------|-------------|
| Shieldwall Games | `index.html` | Company homepage |
| Ashborn: Halls of Saga | `ashborn.html` | Product landing page |
| 404 | `404.html` | Custom not-found page |

## Tech Stack

- Vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no npm
- Files run directly in any browser — just open index.html
- Deployed via GitHub Pages

## Local Development

No setup required. Open any `.html` file directly in a browser, or use a simple local server:

```bash
# Using Python (built into macOS/Linux)
python3 -m http.server 8000

# Using Node.js (if installed)
npx serve .
```

Then visit `http://localhost:8000`

## Project Structure

```
/
├── index.html              # Shieldwall Games homepage
├── ashborn.html            # Ashborn: Halls of Saga landing page
├── 404.html                # Custom 404 page
├── styles/
│   ├── main.css            # Global design system — edit this for brand-wide changes
│   └── ashborn.css         # Ashborn-specific overrides only
├── scripts/
│   ├── main.js             # Shared JS — nav, scroll, reveal
│   └── ashborn.js          # Ashborn-specific interactions
├── assets/
│   ├── images/             # All imagery (WebP preferred)
│   ├── fonts/              # Self-hosted fonts when supplied
│   └── icons/              # SVG icons including favicon
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages auto-deploy
├── CLAUDE.md               # AI assistant brief — read before making changes
└── README.md               # This file
```

## Design System

All colours, spacing, and typography are defined as CSS custom properties in `styles/main.css`. Change a variable there and it updates across both pages.

Key variables:

- `--font-display` / `--font-body` — placeholder fonts, to be replaced with client-supplied fonts
- `--color-parchment` / `--color-near-black` — primary background tones
- `--color-aged-gold` / `--color-deep-red` — accent colours

## Deployment

This site deploys automatically to GitHub Pages on every push to `main`. No manual steps required.

To enable GitHub Pages on a new repository:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow handles the rest

## Before Launch Checklist

- [ ] Supply and integrate custom fonts (replace placeholder Google Fonts)
- [ ] Add real artwork and imagery to `/assets/images/`
- [ ] Confirm and update social media handles in footer on both pages
- [ ] Create OG images (1200×630px) for both pages
- [ ] Generate PNG favicon from `assets/icons/favicon.svg`
- [ ] Update OG URLs to live domain when confirmed
- [ ] Wire up email form submission on `ashborn.html`
- [ ] Confirm copyright year on both pages
- [ ] Review aged gold on parchment contrast (flagged in `main.css:28–35`) — consider darkening if needed

## Working with Claude Code

This project includes a `CLAUDE.md` file that acts as a persistent brief for AI-assisted development. Claude Code reads this file before every session. Do not delete it.

When asking Claude Code to make changes:

- Reference specific files and section names
- Check `CLAUDE.md` is still accurate after major changes
- Keep the Before Launch Checklist in both `CLAUDE.md` and `README.md` in sync
