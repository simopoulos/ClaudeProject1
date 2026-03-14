## Design system

All tokens live in `:root` at the top of `nexa.html`. Never hardcode colors elsewhere.

**Fonts:** `Inter` (body/UI) + `Barlow Condensed` (display headings) — Google Fonts CDN.

**Theme:** Light/white — white backgrounds, dark text, colorful accents.

**Colors:**
- Backgrounds: `#ffffff` (primary), `#f8fafc` (secondary), `#f1f5f9` (surface)
- Text: `#0f172a` → `#475569` → `#94a3b8` (primary → secondary → muted)
- Accent orange: `#f7521b` (CTA, Dr. Kim highlight)
- Accent blue: `#1baaf7` (tech, nav actions)
- Accent green: `#10b981` (success, implants)
- Accent purple: `#8b5cf6` (Invisalign, ortho)
- Border: `#e2e8f0`
- Footer background: `#0f172a` (dark)

**Badge helpers:** `.badge-orange` / `.badge-blue` / `.badge-green` / `.badge-purple` — pill-shaped colored labels.

**Logo:** "Art Of Smile✦" — each word is its own span: `.word-art` (blue), `.word-of` (muted), `.word-smile` (orange), `.word-star` (green). Always Title Case.

**Spacing scale (4px base):** xs=4 / sm=8 / md=16 / lg=24 / xl=48 / 2xl=80 / 3xl=120

**Radius:** sm=4px / md=8px / lg=16px / full=9999px
