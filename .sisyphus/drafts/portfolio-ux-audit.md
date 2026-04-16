# Portfolio UX Audit

Verification date: 2026-04-16

## Runtime Notes

- Task instructions targeted `http://localhost:3000`, but the observed runtime on that port was an unrelated Express service returning `Cannot GET /` rather than the portfolio app. This mismatch was captured at `.sisyphus/evidence/task-3-ux-error.png`.
- The local portfolio itself was already available on `http://localhost:3001` via a running `next-server`, so the live UX evidence below was captured from that local runtime.

## Desktop

- Viewport verified: `1280x800`
- Screenshot evidence: `.sisyphus/evidence/task-3-ux-desktop.png`
- Observed top heading: `Muhammad Rizki Putra`
- Observed `h2` order after the hero:
  1. `About`
  2. `GitHub Stats`
  3. `Experience`
  4. `Blog`
  5. `Skills`
  6. `Projects`
  7. `Get In Touch`
- Result: desktop runtime matches the expected stacked homepage order from `src/app/page.tsx`.

## Mobile

- Viewport verified: `390x844`
- Screenshot evidence: `.sisyphus/evidence/task-3-ux-mobile.png`
- Bottom-nav labels observed in order:
  1. `Home`
  2. `About`
  3. `Work`
  4. `Skills`
  5. `Projects`
  6. `Contact`
- Tabs reached successfully:
  - `Home` → hero/profile landing surface
  - `About` → `About Me`, `Education`, `Certifications`
  - `Work` → `Experience`
  - `Skills` → `Skills`
  - `Projects` → `Projects`
  - `Contact` → `Get In Touch`, `Send a Message`
- Reachability finding: `Blog` and `Testimonials` are not reachable in the current mobile information architecture. No `Blog` or `Testimonials` bottom-nav tab exists, and tapping through every available tab did not surface either section.
- Scroll behavior: long mobile content (for example, `Work`) scrolls vertically, and switching to another tab resets the page back to the top (`window.scrollY` returned from `815` to `0` during verification).

## Conclusion

- Desktop composition is live and ordered as expected today.
- Mobile IA is materially narrower than desktop: it exposes `Home/About/Work/Skills/Projects/Contact` only.
- Blog is available on desktop but not reachable through the current mobile nav.
- Testimonials remain unreachable in both the audit instructions' intended flow and the actual mobile tab flow observed today.
