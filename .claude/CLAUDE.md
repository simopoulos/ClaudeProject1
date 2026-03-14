# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Single-file static website: `nexa.html` — a **light-themed dental clinic homepage** for **Art of Smile Dentistry** (Yonge & Eglinton, Toronto). No build tools, no framework, no dependencies beyond Google Fonts. Open the file directly in a browser.

## Real clinic data

- **Name:** Art of Smile Dentistry — Yonge & Eglinton
- **Address:** 2527 Yonge St, Main Floor, Toronto, ON M4P 2H9
- **Phone:** (416) 932-9179
- **Hours:** Mon–Thu 8am–7pm · Fri 8am–5pm · Sat 7am–5pm
- **Doctors:** Dr. Hermina Battaglin (General), Dr. Peter Kim (Oral Surgery & Implants), Dr. Jovanna Wong (General & Cosmetic)
- **Since:** 2001
- **Social:** @artofsmiledentistry (Instagram), Facebook

## Real images (from artofsmile.ca)

- Hero photo: `https://artofsmile.ca/wp-content/uploads/2025/04/hero-1-e1743525507138.png`
- About/clinic photo: `https://artofsmile.ca/wp-content/uploads/2025/05/about.jpg`
- Team group photo: `https://artofsmile.ca/wp-content/smush-webp/2025/04/Group-1-1.png.webp`
- Testimonial background: `https://artofsmile.ca/wp-content/smush-webp/2025/04/testimonial-bg.png.webp`

## Page layout (top → bottom)

Nav → Hero → Services → Why Us (charts + about photo) → Team → Testimonials → Philosophy & Contact → Footer Stats → Footer Nav

## Design system

Everything lives in `:root` at the top of `nexa.html`. Never hardcode colors elsewhere.

**Fonts:** `Inter` (body/UI) + `Barlow Condensed` (display headings) — loaded via Google Fonts CDN.

**Theme:** Light/white — white backgrounds, dark text, colorful accents.

**Colors:**
- Backgrounds: `#ffffff` (primary), `#f8fafc` (secondary), `#f1f5f9` (surface)
- Text: `#0f172a` → `#475569` → `#94a3b8` (primary → secondary → muted)
- Accent orange: `#f7521b` (CTA, Dr. Kim highlight)
- Accent blue: `#1baaf7` (tech, nav actions)
- Accent green: `#10b981` (success, implants)
- Accent purple: `#8b5cf6` (Invisalign, ortho)
- Border: `#e2e8f0`
- Footer background: `#0f172a` (dark, for contrast)

**Badge helpers:** `.badge-orange` / `.badge-blue` / `.badge-green` / `.badge-purple` — pill-shaped colored labels.

**Logo:** "Art Of Smile✦" — each word is its own span: `.word-art` (blue), `.word-of` (muted), `.word-smile` (orange), `.word-star` (green). Always Title Case.

**Spacing scale (4px base):** xs=4 / sm=8 / md=16 / lg=24 / xl=48 / 2xl=80 / 3xl=120

**Radius:** sm=4px / md=8px / lg=16px / full=9999px

## Git workflow

After every change, commit and push to GitHub:
```bash
git add nexa.html
git commit -m "description of change"
git push
```
Remote: `https://github.com/simopoulos/ClaudeProject1.git`
