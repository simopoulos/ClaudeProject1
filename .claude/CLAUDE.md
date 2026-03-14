# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Three-file static website for **Art of Smile Dentistry** (Yonge & Eglinton, Toronto):
- `index.html` — all markup
- `css/styles.css` — all styles (design tokens, components, animations, responsive)
- `js/main.js` — all interactivity (vanilla JS, no libraries or frameworks)

No build tools. Open `index.html` directly in a browser.

## Aesthetic

**"Warm Clinical Luxury"** — premium warm editorial feel, not cold/corporate.
- Fonts: `Cormorant Garamond` (display headings) + `DM Sans` (body/UI)
- Base background: `#fdfaf6` (warm off-white)
- Primary accent: `#f7521b` (orange) · Secondary: `#1baaf7` (blue) · Gold: `#d4a853`
- See `.claude/rules/design-system.md` for full token reference

## Real clinic data

- **Name:** Art of Smile Dentistry — Yonge & Eglinton
- **Address:** 2527 Yonge St, Main Floor, Toronto, ON M4P 2H9
- **Phone:** (416) 932-9179
- **Hours:** Mon–Thu 8am–7pm · Fri 8am–5pm · Sat 7am–5pm · Sun Closed
- **Doctors:** Dr. Hermina Battaglin (General, Founder), Dr. Peter Kim (Oral Surgery & Implants), Dr. Jovanna Wong (General & Cosmetic)
- **Since:** 2001 · 4.7★ · 462+ reviews
- See `.claude/rules/clinic-content.md` for full doctor bios, service details, and image URLs

## Page layout (top → bottom)

Nav → Hero → Services → Why Us → Team → Testimonials → FAQ → Contact & Booking → Footer Stats → Footer Nav

## Key JS patterns

- **Service modals:** Each `.service-card` has `data-service="<key>"`. Content comes from the `services` object in `main.js`.
- **Team modals:** Each `.team-card` has `data-doctor="<key>"`. Content comes from the `doctors` object in `main.js`.
- **Scroll animations:** Add `.reveal` class to any element — JS adds `.visible` when it enters the viewport.
- **Carousel:** 5 testimonial slides, auto-rotates every 5s, pauses on hover.
- **FAQ:** `.faq-item.open` controls accordion state, only one open at a time.

## Git workflow

```bash
git add index.html css/styles.css js/main.js
git commit -m "description of change"
git push
```
Remote: `https://github.com/simopoulos/ClaudeProject1.git`
