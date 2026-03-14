## Project

Multi-file static website for **Art of Smile Dentistry** (Yonge & Eglinton, Toronto).

**Files:**
- `index.html` — all markup and page structure
- `css/styles.css` — all styles (design tokens in `:root`, component styles, animations, responsive)
- `js/main.js` — all interactivity (vanilla JS, no libraries)

No build tools, no framework, no dependencies beyond Google Fonts. Open `index.html` directly in a browser.

## Aesthetic: "Warm Clinical Luxury"

Premium and warm — high-end Toronto spa crossed with a clean editorial magazine. Not cold or corporate.

## Page layout (top → bottom)

Nav → Hero → Services → Why Us → Team → Testimonials → FAQ → Contact & Booking → Footer Stats → Footer Nav

## Section anchors

| Section | ID |
|---|---|
| Hero | `#hero` |
| Services | `#services` |
| Why Us | `#why-us` |
| Team | `#team` |
| Reviews | `#reviews` |
| FAQ | `#faq` |
| Contact | `#contact` |

## JavaScript behaviors (all in js/main.js)

1. Mobile hamburger nav toggle (animated bars, body scroll lock)
2. Scroll-spy — active nav link via IntersectionObserver
3. Nav shadow/blur after 60px scroll
4. Hero parallax (image moves at 0.35× scroll speed)
5. Service card modals — click any of 6 cards → modal with full description + checklist
6. Team bio modals — click any of 3 doctor cards → modal with full bio
7. Modal keyboard trap — ESC to close, Tab focus trap inside
8. Testimonials carousel — auto-rotates every 5s, prev/next arrows, dot indicators, pause on hover, arrow key support
9. Scroll reveal — `.reveal` elements animate in via IntersectionObserver → `.visible`
10. Count-up animation — Why Us stat numbers animate when section enters viewport
11. FAQ accordion — click to expand/collapse, only one open at a time
12. Contact form validation — required fields + email format check, success state on valid submit
13. Smooth scroll — all `a[href^="#"]` links

## Data objects in main.js

- `services` — keyed by `general | cosmetic | implants | invisalign | surgery | dentures`
- `doctors` — keyed by `battaglin | kim | wong`

Each service card has `data-service="<key>"`, each team card has `data-doctor="<key>"`.
