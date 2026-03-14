## Design system

All tokens live in `:root` at the top of `css/styles.css`. Never hardcode colors elsewhere.

**Fonts:** `Cormorant Garamond` (display headings — editorial serif) + `DM Sans` (body/UI — modern sans) — loaded via Google Fonts CDN.

**Theme:** "Warm Clinical Luxury" — warm off-white backgrounds, charcoal text, gold accents.

**Colors:**
- Background: `#fdfaf6` (primary warm off-white), `#f5f0e8` (alt/sections)
- Text: `#1a1a1a` (primary) → `#4a4a4a` (secondary) → `#8a8a8a` (muted)
- Border: `#e8e0d5`
- Brand orange: `#f7521b` (CTA, primary accent) · dark: `#d63c09` · light bg: `#fff3ee`
- Brand blue: `#1baaf7` (secondary, nav active) · light bg: `#e8f6ff`
- Forest green: `#1a3a2e` (feature tags, modal specialties) · light bg: `#e8f0ec`
- Warm gold: `#d4a853` (hero stats, carousel, footer nums) · light bg: `#faf3e0`
- Purple: `#8b5cf6` (Invisalign, Dr. Wong) · light bg: `#ede9fe`
- Green: `#10b981` (success, implants) · light bg: `#d1fae5`
- Footer backgrounds: `#1a1a1a` (stats bar) · `#111111` (nav footer)

**Logo:** "Art Of Smile✦" — each word is its own span: `.word-art` (blue), `.word-of` (muted), `.word-smile` (orange), `.word-star` (green). Always Title Case.

**Service icon color classes:** `.icon-blue` / `.icon-orange` / `.icon-green` / `.icon-purple` / `.icon-gold` / `.icon-forest`

**Spacing scale (4px base):** xs=4 / sm=8 / md=16 / lg=24 / xl=48 / 2xl=80 / 3xl=120

**Radius:** sm=4px / md=8px / lg=16px / xl=24px / full=9999px

**Scroll animations:** Add class `.reveal` to any element to get fade+slide-in on scroll. JS adds `.visible` via IntersectionObserver. Stagger delay is auto-applied in groups of 4.

**Modals:** `.modal-overlay` + `.modal-panel` pattern. Open with `.open` class on the overlay. Use `.modal-tag`, `.modal-title`, `.modal-desc`, `.modal-list`, `.modal-cta` for content structure.
