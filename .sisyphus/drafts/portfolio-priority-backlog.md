# Portfolio Priority Backlog

This backlog prioritizes actions to evolve the portfolio into a high-signal professional platform. It focuses on immediate trust fixes, identity clarity, and evidence depth.

## Now

### 1. Mobile Navigation (IA Parity)
- **Surface**: `src/components/MobileBottomNav.tsx`, `src/components/MobileShell.tsx`
- **Why**: The blog is currently unreachable on mobile devices. This hides a key thought leadership signal from recruiters.
- **Dependency**: None.
- **Expected Outcome**: Blog tab added to mobile navigation and reachable in the mobile shell.

### 2. Metadata and Canonical URLs
- **Surface**: `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`
- **Why**: Current SEO targets GitHub Pages while the site uses a custom domain. This creates trust and indexing risks.
- **Dependency**: None.
- **Expected Outcome**: All metadata, canonicals, and sitemap URLs updated to `https://me.rockerdx.site`.

### 3. Hero Section (Identity Compression)
- **Surface**: `src/components/Hero.tsx`
- **Why**: The current hero lacks the speed and clarity of senior-level references.
- **Dependency**: None.
- **Expected Outcome**: Compact summary with a "Senior Backend & Product Engineer" headline and prominent CTAs.

### 4. Data Robustness (Static Fallbacks)
- **Surface**: `src/lib/api-data.ts`, `src/lib/blog-data.ts`
- **Why**: API failures remove trust signals instead of showing evergreen content.
- **Dependency**: None.
- **Expected Outcome**: Static fallback articles implemented for the blog section to ensure the signal is always present.

## Next

### 5. Projects Section (Decision-Led Narratives)
- **Surface**: `src/components/Projects.tsx`, `src/lib/data.ts`
- **Why**: Repository cards show code but not the technical judgment required for senior roles.
- **Dependency**: Hero Section (for consistent positioning).
- **Expected Outcome**: Project descriptions updated to include the problem, technical trade-offs, and outcomes.

### 6. Experience Timeline (Tech Visibility)
- **Surface**: `src/components/Experience.tsx`
- **Why**: Tech stacks are buried in descriptions. This slows down technical fit validation.
- **Dependency**: None.
- **Expected Outcome**: Tech stack for each role is instantly visible in the experience timeline.

### 7. Asset Quality (Placeholder Removal)
- **Surface**: `src/lib/data.ts`
- **Why**: Placeholder links and example data damage professional credibility.
- **Dependency**: None.
- **Expected Outcome**: All placeholder URLs and data replaced with live, professional links.

## Later

### 8. GitHub Stats (Secondary Signal)
- **Surface**: `src/components/GitHubStats.tsx`
- **Why**: Validates active development without distracting from the primary project narratives.
- **Dependency**: Projects Section.
- **Expected Outcome**: GitHub stats styled as a subtle, secondary validation surface.

### 9. SEO and Structured Data
- **Surface**: `src/components/StructuredData.tsx`
- **Why**: Ensures the new positioning is correctly parsed by search engines.
- **Dependency**: Metadata and Canonical URLs.
- **Expected Outcome**: Updated structured data with specific Person and ProfessionalService schemas.

### 10. Testimonials (Ready State)
- **Surface**: `src/components/TestimonialsSection.tsx`, `src/lib/data.ts`
- **Why**: Prepares the site for social proof without exposing current placeholder risks.
- **Dependency**: Asset Quality.
- **Expected Outcome**: Section logic remains hidden but is refactored to support verifiable LinkedIn attributions.
