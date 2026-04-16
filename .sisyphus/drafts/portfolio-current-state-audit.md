# Portfolio Current-State Audit

Build baseline: `npm run build` succeeded and was captured at `.sisyphus/evidence/task-1-current-state-build.log` (`.sisyphus/evidence/task-1-current-state-build.log:1-27`).

## Architecture Summary

- The homepage is assembled in `src/app/page.tsx` as a server component that parallel-fetches profile, experience, skills, projects, education, certifications, GitHub stats, and blog data via `Promise.all` (`src/app/page.tsx:37-56`).
- Data loading is API-first with per-resource fallback to static data for profile/experience/skills/projects/education/certifications/GitHub stats (`src/lib/api-data.ts:33-93`).
- Testimonials are static-only (`src/lib/api-data.ts:96-99`) and blog falls back to an empty array when fetch fails (`src/lib/api-data.ts:101-109`), which directly affects trust/content readiness.
- `MobileShell`, `BlogSection`, and `TestimonialsSection` are dynamically imported with `ssr: false` (`src/app/page.tsx:28-35`), so the route intentionally mixes server data assembly with client-only rendering surfaces.

## IA Divergence

- Homepage composition explicitly differs between mobile and desktop:
  - Mobile receives a keyed section map (`home`, `about`, `experience`, `skills`, `projects`, `blog`, `contact`) through `mobileSections` (`src/app/page.tsx:58-66`).
  - Desktop receives a stacked fragment in fixed order (`Hero`, `About`, `GitHubStats`, `Experience`, `BlogSection`, `Skills`, `Projects`, `Contact`) (`src/app/page.tsx:68-78`).
- Runtime split is viewport-controlled inside `MobileShell`: width `< 768` uses one-tab-at-a-time mobile shell; desktop renders all sections stacked (`src/components/MobileShell.tsx:50-58,73-83,85-119`).
- Mobile IA is constrained by bottom-nav tabs: `Home`, `About`, `Work`, `Skills`, `Projects`, `Contact` (`src/components/MobileBottomNav.tsx:21-28`) and tab order excludes blog/testimonials (`src/components/MobileShell.tsx:42`).
- Blog/testimonials are not equally surfaced across current IA:
  - Blog is present in mobile section definitions (`src/app/page.tsx:64`) but absent from the mobile bottom nav/tab order (`src/components/MobileBottomNav.tsx:21-28`, `src/components/MobileShell.tsx:42`), so it is not reachable via the current mobile IA.
  - Testimonials are imported but not rendered into either `mobileSections` or `desktopSections` (`src/app/page.tsx:35,58-78`), so they are currently unsurfaced in both IA paths.

## Trust/Proof Surfaces

- Primary proof surfaces currently include profile, experience, skills, projects, education/certifications, GitHub stats, and blog in homepage composition (`src/app/page.tsx:38-78`).
- Data robustness varies:
  - Core profile/work/project-type entities have static fallback coverage (`src/lib/api-data.ts:33-93`).
  - Blog has no static article fallback and returns `[]` on fetch failure (`src/lib/api-data.ts:101-109`), which can remove a trust signal.
  - Testimonials are static-only (`src/lib/api-data.ts:96-99`) and not surfaced in current homepage composition (`src/app/page.tsx:58-78`).

## Metadata/Domain Consistency

- App metadata, canonical, Open Graph URL, robots sitemap URL, and sitemap base URL all target GitHub Pages domain paths:
  - `metadataBase` = `https://rockerdx.github.io` (`src/app/layout.tsx:14`)
  - Open Graph `url` = `https://rockerdx.github.io/vibe-profile-site` (`src/app/layout.tsx:39`)
  - Canonical = `https://rockerdx.github.io/vibe-profile-site` (`src/app/layout.tsx:58-60`)
  - Robots sitemap = `https://rockerdx.github.io/vibe-profile-site/sitemap.xml`, host `rockerdx.github.io` (`src/app/robots.ts:10-11`)
  - Sitemap `baseUrl` = `https://rockerdx.github.io/vibe-profile-site` (`src/app/sitemap.ts:4`)
- README live-domain statements point to non-GitHub-Pages production URLs (`https://me.rockerdx.site`, homelab/localhost variants) (`README.md:109-114`), which is a documented mismatch with current SEO/canonical config.

## Constraints

- Recommendation work must account for split IA mechanics already encoded in `MobileShell` + `MobileBottomNav` (mobile tab model vs desktop stacked model) (`src/components/MobileShell.tsx:42-45,73-83,85-119`; `src/components/MobileBottomNav.tsx:21-28`).
- Blog and testimonial trust-surface recommendations are constrained by reachability and data behavior today (mobile blog not nav-reachable, testimonials not rendered, blog fallback empty array) (`src/app/page.tsx:35,58-78`; `src/lib/api-data.ts:96-109`; `src/components/MobileBottomNav.tsx:21-28`).
- Metadata/canonical recommendations must reconcile the current GitHub Pages metadata targets with README-stated live domain expectations (`src/app/layout.tsx:14,39,58-60`; `src/app/robots.ts:10-11`; `src/app/sitemap.ts:4`; `README.md:109-114`).
