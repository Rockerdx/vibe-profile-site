# Portfolio & Resume Optimization Plan

## TL;DR

> **Summary**: Optimize Muhammad Rizki Putra's portfolio site for maximum hiring conversion by implementing case studies for top 3 projects, adding verification to testimonials, creating a Speaking/Recognition section, building ATS-optimized resume variants, and enhancing overall UX with static GitHub stats, project categorization, and polish improvements.
>
> **Deliverables**:
> - 3 comprehensive case studies (MyPopularMoviesApps, FlutterPopularMoviesApp, KlinikApp)
> - LinkedIn-verified testimonials (2-3 with URLs)
> - Speaking/Recognition section with real content
> - ATS-optimized resume PDF + web variant with QR code
> - Static GitHub stats generation at build time
> - Project categorization (Android/Backend/Fullstack)
> - Enhanced hero with tech stack badges
> - UX improvements: Back to Top, loading states, mobile blog fix
>
> **Effort**: Medium-Large (15+ tasks)
> **Parallel Execution**: YES - 4 waves
> **Critical Path**: Content verification → Case studies → Resume → Final verification

---

## Context

### Original Request
User wants to update portfolio site content and research how to optimize portfolio and resume for better hiring outcomes.

### Interview Summary
- **Positioning**: Senior Backend Engineer (Go, Microservices, PostgreSQL)
- **Key differentiators**: Fintech experience (Stockbit), career pivot (Android→Backend), teaching/mentoring
- **Content availability**: Has speaking engagements/awards, detailed case study content for 3+ projects, 2-3 testimonial LinkedIn URLs
- **Project status**: All code-only (no live demos), focus on architecture/code quality for case studies
- **Resume needs**: Both optimize existing PDF and create web variant
- **GitHub stats**: Static generation at build time preferred

### Metis Review (gaps addressed)
- **Content verification**: Confirmed user has real content for Speaking/Recognition and case studies
- **Scope guardrails**: Start with 3 case studies (user has content), not expanding beyond
- **No placeholder policy**: All sections must have real content (verified)
- **Resume clarity**: Both ATS-optimized PDF + web variant with QR code
- **GitHub stats approach**: Static generation with ISR, not real-time API calls
- **Project demo reality**: Adjusted case study format for code-only projects (focus on architecture, not live demos)

---

## Work Objectives

### Core Objective
Transform the current portfolio from a "project list" to a "conversion-optimized credibility showcase" that positions Muhammad as a Senior Backend Engineer with system design expertise and quantified impact.

### Concrete Deliverables
1. **Case Studies** (3): MyPopularMoviesApps, FlutterPopularMoviesApp, KlinikApp with architecture diagrams, technical decisions, metrics
2. **Testimonials** (5): LinkedIn URLs added for 2-3 testimonials that have them
3. **Speaking/Recognition Section**: New section showcasing speaking engagements, awards, certifications with context
4. **Resume Variants**: 
   - ATS-optimized PDF (single-column, standard fonts, keyword-rich)
   - Web variant with QR code linking to portfolio
5. **Static GitHub Stats**: Build-time generation with ISR (Incremental Static Regeneration)
6. **Project Categorization**: Filter/tabs for Android, Backend, Fullstack
7. **Hero Enhancement**: Tech stack badges added to hero section
8. **UX Polish**: Back to Top button, loading states, mobile blog discoverability fix

### Definition of Done (verifiable conditions)
- All 3 case studies have: Problem statement, Solution approach, Technical decisions, Results, Architecture (text/code), Code quality highlights
- 2-3 testimonials have working LinkedIn URLs (validated with HTTP 200)
- Speaking/Recognition section displays real content with dates/context
- Resume PDF passes ATS scan (tested with free online checker)
- GitHub stats generate at build time and display within 2 seconds
- Project categorization allows filtering by type
- Hero displays 6-8 tech stack badges
- Mobile blog section is discoverable within 2 taps from hero
- All changes pass `npm run build` and `npm run lint`

### Must Have
- Real content in all new sections (no placeholders)
- Case studies with quantified results or explicit "data not available"
- LinkedIn URLs verified (return HTTP 200)
- ATS-optimized resume (single-column, no graphics that confuse parsers)
- Static GitHub stats (no client-side API calls on page load)
- Project categorization with actual filtering functionality
- Mobile-responsive all changes

### Must NOT Have (guardrails, AI slop patterns)
- **NO placeholder/fake content**: No fabricated speaking engagements, fake "As Seen In", invented metrics
- **NO over-engineering**: Simple implementations over complex infrastructure
- **NO real-time GitHub API calls**: Static generation only
- **NO animated QR codes or resume graphics**: Keep ATS-friendly
- **NO more than 3 case studies**: Even if user has content, cap at 3 for this iteration
- **NO loading skeletons for static content**: Only for API-dependent sections
- **NO WebSockets or real-time features**: Static site only
- **NO blog CMS**: Keep current Medium RSS integration
- **NO admin dashboard**: Edit data.ts directly for content updates

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed. No exceptions.

### Test Decision
- **Test infrastructure**: Existing Next.js with TypeScript
- **Automated tests**: Build verification (`npm run build`), lint (`npm run lint`)
- **QA policy**: Every task includes agent-executed verification and evidence capture
- **Evidence**: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

### QA Policy
Every task MUST include agent-executed QA scenarios:
- **Frontend/UI**: Use Playwright - Navigate, interact, assert DOM, screenshot
- **API/Backend**: Use Bash (curl) - Test endpoints, validate responses
- **Static content**: Use Read - Verify file content matches requirements
- **Links**: Use Bash (curl -I) - Validate HTTP 200 responses

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation - Start Immediately):
├── Task 1: Content audit & verification
├── Task 2: Create CaseStudy component architecture
├── Task 3: Add project categorization system
├── Task 4: Set up static GitHub stats generation
└── Task 5: Resume content audit & ATS analysis

Wave 2 (Core Content - After Wave 1):
├── Task 6: Case study #1 (MyPopularMoviesApps)
├── Task 7: Case study #2 (FlutterPopularMoviesApp)
├── Task 8: Case study #3 (KlinikApp)
├── Task 9: Add LinkedIn URLs to testimonials
└── Task 10: Create Speaking/Recognition section

Wave 3 (Resume & Polish - After Wave 2):
├── Task 11: Generate ATS-optimized resume PDF
├── Task 12: Create web resume variant with QR code
├── Task 13: Enhance hero with tech stack badges
├── Task 14: Add Back to Top button
└── Task 15: Add loading states for API sections

Wave 4 (Final Integration & Verification):
├── Task 16: Mobile blog discoverability fix
├── Task 17: Cross-browser testing
├── Task 18: Build verification & lint
└── Task 19: Performance audit (Lighthouse)

Wave FINAL (After ALL implementation tasks):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
```

### Dependency Matrix (full)

| Task | Depends On | Blocks |
|---|---|---|
| 1 | none | 2, 6, 7, 8, 10 |
| 2 | 1 | 6, 7, 8 |
| 3 | 1 | 6, 7, 8 |
| 4 | 1 | F2 |
| 5 | 1 | 11, 12 |
| 6 | 2, 3 | 17, 18, 19 |
| 7 | 2, 3 | 17, 18, 19 |
| 8 | 2, 3 | 17, 18, 19 |
| 9 | 1 | F3 |
| 10 | 1 | 17, 18, 19 |
| 11 | 5 | 12, F3 |
| 12 | 5, 11 | F3 |
| 13 | 1 | 17, 18, 19 |
| 14 | 1 | 17, 18, 19 |
| 15 | 4 | F3 |
| 16 | 1 | F3 |
| 17 | 6, 7, 8, 10, 13, 14 | 18, 19 |
| 18 | 17 | 19, F1-F4 |
| 19 | 18 | F1-F4 |

### Agent Dispatch Summary

- **Wave 1** → 5 tasks → quick, unspecified-high, quick, unspecified-high, writing
- **Wave 2** → 5 tasks → writing, writing, writing, quick, writing
- **Wave 3** → 5 tasks → writing, visual-engineering, visual-engineering, quick, quick
- **Wave 4** → 4 tasks → quick, unspecified-high, quick, unspecified-high
- **FINAL** → 4 tasks → oracle, unspecified-high, unspecified-high, deep

---

## TODOs

> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.
> **A task WITHOUT QA Scenarios is INCOMPLETE.**

- [x] 1. Content audit & verification

  **What to do**:
  - Audit all existing content in `src/lib/data.ts` for completeness and accuracy
  - Verify 3 projects selected for case studies have sufficient content (MyPopularMoviesApps, FlutterPopularMoviesApp, KlinikApp)
  - Gather Speaking/Recognition content from user (conference talks, awards, publications)
  - Collect LinkedIn URLs for testimonials (2-3 that have them)
  - Verify resume PDF exists and capture current structure
  - Document all findings in `.sisyphus/drafts/content-audit-report.md`

  **Must NOT do**:
  - Do not edit any source files yet (this is audit only)
  - Do not assume content exists without verification
  - Do not skip this step - all downstream tasks depend on it

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: read-only audit and documentation
  - Skills: `[]` - Basic file reading and report writing only

  **Parallelization**:
  - Can Parallel: YES | Wave 1 | Blocks: [2, 6, 7, 8, 10] | Blocked By: []

  **References**:
  - Pattern: `src/lib/data.ts:1-341` - All content to audit
  - Pattern: `src/lib/data.ts:295-336` - Testimonials section
  - Pattern: `src/lib/data.ts:230-293` - Projects array
  - External: User-provided Speaking/Recognition content

  **Acceptance Criteria**:
  - [ ] `.sisyphus/drafts/content-audit-report.md` exists with findings
  - [ ] 3 projects confirmed for case studies with content summary
  - [ ] Speaking/Recognition content documented
  - [ ] 2-3 testimonial LinkedIn URLs collected
  - [ ] Resume PDF location confirmed

  **QA Scenarios**:
  ```
  Scenario: Content audit completed
    Tool: Read
    Steps: Read all relevant sections in src/lib/data.ts; write audit report with specific line references; confirm content availability for all planned features.
    Expected: Audit report exists with concrete line numbers and content status for each planned feature.
    Evidence: .sisyphus/evidence/task-1-content-audit.md
  ```

  **Commit**: NO

- [x] 2. Create CaseStudy component architecture

  **What to do**:
  - Create new `src/components/CaseStudy.tsx` component for detailed project presentation
  - Design sections: Header (name, tech stack), Problem, Solution Approach, Technical Decisions, Results, Architecture (code/text), Code Quality Highlights
  - Use Framer Motion for animations (respect reduced motion)
  - Make responsive (mobile: stacked, desktop: 2-column for problem/solution)
  - Add TypeScript types in `src/types/index.ts`
  - Create example usage in draft file

  **Must NOT do**:
  - Do not add actual case study content yet (framework only)
  - Do not create placeholder/fake data
  - Do not add live demo sections (projects are code-only)

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: component design with animations and responsive layout
  - Skills: `['react-patterns', 'tailwind-patterns']`
    - `react-patterns`: Component composition, Framer Motion integration
    - `tailwind-patterns`: Responsive design, dark mode support

  **Parallelization**:
  - Can Parallel: YES | Wave 1 | Blocks: [6, 7, 8] | Blocked By: [1]

  **References**:
  - Pattern: `src/components/Projects.tsx:1-126` - Current project presentation for reference
  - Pattern: `src/components/About.tsx:1-73` - Section layout patterns
  - Pattern: `src/types/index.ts:1-91` - Type definitions to extend

  **Acceptance Criteria**:
  - [ ] `src/components/CaseStudy.tsx` created with all required sections
  - [ ] `src/types/index.ts` updated with CaseStudy interface
  - [ ] Component renders without errors in isolation
  - [ ] Animations respect `prefers-reduced-motion`

  **QA Scenarios**:
  ```
  Scenario: CaseStudy component renders correctly
    Tool: Playwright
    Preconditions: Import CaseStudy in a test page with sample data
    Steps: Navigate to test page; verify all sections render (Problem, Solution, Technical Decisions, Results, Architecture); check responsive layout at 390px and 1280px; test reduced motion preference.
    Expected: All sections visible, responsive, accessible, no console errors.
    Evidence: .sisyphus/evidence/task-2-casestudy-component.png
  ```

  **Commit**: NO

- [x] 3. Add project categorization system

  **What to do**:
  - Add `category` field to projects in `src/lib/data.ts` (Android, Backend, Fullstack)
  - Create filter tabs in `src/components/Projects.tsx`
  - Implement filtering logic with smooth transitions
  - Add "All" tab as default
  - Ensure mobile responsive (horizontal scroll or dropdown)
  - Update TypeScript types

  **Must NOT do**:
  - Do not add new projects, only categorize existing 6
  - Do not change project content, only add category metadata

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: straightforward data addition and simple filtering logic
  - Skills: `[]` - No special skills needed for this task

  **Parallelization**:
  - Can Parallel: YES | Wave 1 | Blocks: [6, 7, 8] | Blocked By: [1]

  **References**:
  - Pattern: `src/lib/data.ts:230-293` - Projects array to categorize
  - Pattern: `src/components/Projects.tsx:1-126` - Projects component to modify
  - Pattern: `src/types/index.ts:27-40` - Project interface

  **Acceptance Criteria**:
  - [ ] All 6 projects have category assigned
  - [ ] Filter tabs render and function correctly
  - [ ] Filtering has smooth animation/transition
  - [ ] Mobile responsive (test at 390px)

  **QA Scenarios**:
  ```
  Scenario: Project filtering works
    Tool: Playwright
    Preconditions: Site running locally
    Steps: Navigate to projects section; click "Backend" tab; verify only backend projects show; click "Android"; verify only Android projects; click "All"; verify all projects show.
    Expected: Filtering works with smooth transitions, correct projects displayed per category.
    Evidence: .sisyphus/evidence/task-3-project-filter.png

  Scenario: Mobile project filtering
    Tool: Playwright
    Preconditions: Site running locally
    Steps: Set viewport to 390x844; navigate to projects; interact with filter tabs; verify usability on mobile.
    Expected: Filters accessible and functional on mobile.
    Evidence: .sisyphus/evidence/task-3-project-filter-mobile.png
  ```

  **Commit**: NO

- [x] 4. Set up static GitHub stats generation

  **What to do**:
  - Create API route or build script to fetch GitHub stats at build time
  - Use GitHub API with token for authenticated requests (5000 req/hour vs 60)
  - Cache results to avoid rate limits
  - Generate static data file or ISR (Incremental Static Regeneration)
  - Update `src/components/GitHubStats.tsx` to use generated data
  - Add error handling for API failures (fallback to static)

  **Must NOT do**:
  - Do NOT fetch client-side (no useEffect API calls)
  - Do NOT require real-time updates (static generation only)
  - Do NOT skip caching (respect rate limits)

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: API integration, caching strategy, build-time generation
  - Skills: `[]` - Next.js API routes and ISR knowledge

  **Parallelization**:
  - Can Parallel: YES | Wave 1 | Blocks: [F2] | Blocked By: [1]

  **References**:
  - Pattern: `src/components/GitHubStats.tsx:1-216` - Current implementation to refactor
  - Pattern: `src/lib/api/client.ts:1-304` - API client patterns
  - External: Next.js ISR documentation

  **Acceptance Criteria**:
  - [ ] GitHub stats fetch at build time
  - [ ] Token-based authentication (not unauthenticated)
  - [ ] Caching mechanism implemented
  - [ ] Component renders with generated data within 2 seconds
  - [ ] Fallback to static data if API fails

  **QA Scenarios**:
  ```
  Scenario: GitHub stats generate at build
    Tool: Bash
    Steps: Run npm run build; verify GitHub API calls happen during build; check that generated stats are embedded in output.
    Expected: Build completes, stats available in static HTML/JSON.
    Evidence: .sisyphus/evidence/task-4-github-build.log

  Scenario: Component renders with static data
    Tool: Playwright
    Steps: Navigate to site; check GitHub Stats section; verify stats display quickly (no loading spinner).
    Expected: Stats visible immediately on page load (<2 seconds).
    Evidence: .sisyphus/evidence/task-4-github-render.png
  ```

  **Commit**: NO

- [x] 5. Resume content audit & ATS analysis

  **What to do**:
  - Locate existing resume PDF in repo or obtain from user
  - Analyze structure: single-column vs multi-column, fonts, section headings
  - Check for ATS-unfriendly elements: tables, graphics, headers/footers with content, images
  - Identify missing keywords based on `src/lib/data.ts` skills and experiences
  - Document current ATS score estimate
  - Create requirements doc for optimized versions

  **Must NOT do**:
  - Do not edit resume yet (analysis only)
  - Do not assume resume format without seeing it

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: analysis, documentation, requirements writing
  - Skills: `[]` - Resume analysis doesn't require special skills

  **Parallelization**:
  - Can Parallel: YES | Wave 1 | Blocks: [11, 12] | Blocked By: [1]

  **References**:
  - Pattern: `src/lib/data.ts` - Source of truth for resume content
  - External: ATS best practices from research
  - File: Resume PDF (to be located)

  **Acceptance Criteria**:
  - [ ] Resume PDF located and analyzed
  - [ ] ATS issues documented
  - [ ] Missing keywords identified
  - [ ] Requirements for optimized versions written

  **QA Scenarios**:
  ```
  Scenario: Resume audit completed
    Tool: Read + Bash
    Steps: Locate resume file; analyze structure; check for ATS issues; document findings.
    Expected: Audit report exists with specific issues and recommendations.
    Evidence: .sisyphus/evidence/task-5-resume-audit.md
  ```

  **Commit**: NO

- [x] 6. Case study #1: MyPopularMoviesApps

  **What to do**:
  - Write detailed case study content for MyPopularMoviesApps (Java, Android, REST API, SQLite)
  - Sections: The Problem, Your Approach, Technical Decisions, Challenges, Results, Architecture
  - Since no live demo: focus on architecture diagrams (Mermaid or text-based), code snippets, design patterns
  - Add to `src/lib/data.ts` as case study entry or create separate data structure
  - Use CaseStudy component to render
  - Include quantified results or explicit "metrics not tracked" if unavailable

  **Must NOT do**:
  - Do not claim live demo exists (projects are code-only)
  - Do not fabricate metrics - use real data or explicitly state unavailable
  - Do not skip architecture section - this is key for backend positioning

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: technical writing, case study narrative, architecture documentation
  - Skills: `[]` - Technical writing skill

  **Parallelization**:
  - Can Parallel: NO | Wave 2 | Blocks: [17, 18, 19] | Blocked By: [2, 3]

  **References**:
  - Pattern: `src/lib/data.ts:230-293` - Project data
  - Pattern: `src/components/CaseStudy.tsx` - Component to use
  - External: Case study best practices from research

  **Acceptance Criteria**:
  - [ ] Case study has all 5 sections (Problem, Approach, Decisions, Challenges, Results)
  - [ ] Architecture section includes code/text diagrams
  - [ ] No fabricated metrics
  - [ ] Renders correctly with CaseStudy component

  **QA Scenarios**:
  ```
  Scenario: Case study renders with all sections
    Tool: Playwright
    Steps: Navigate to case study; verify all sections visible; check for broken layouts or missing content.
    Expected: All 5 sections displayed, architecture diagrams readable, no errors.
    Evidence: .sisyphus/evidence/task-6-casestudy-1.png
  ```

  **Commit**: NO

- [x] 7. Case study #2: FlutterPopularMoviesApp

  **What to do**:
  - Write detailed case study for FlutterPopularMoviesApp (Dart, Flutter, TheMovieDB API)
  - Focus on: cross-platform development, API integration patterns, state management
  - Sections: Problem, Approach, Technical Decisions, Challenges, Results, Architecture
  - Highlight learning/pivot from native Android to Flutter
  - Add architecture diagrams and code quality highlights

  **Must NOT do**:
  - Same as Task 6

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: technical writing emphasizing cross-platform learnings
  - Skills: `[]` - Technical writing

  **Parallelization**:
  - Can Parallel: NO | Wave 2 | Blocks: [17, 18, 19] | Blocked By: [2, 3]

  **References**:
  - Same as Task 6

  **Acceptance Criteria**:
  - [ ] All case study sections complete
  - [ ] Highlights Flutter-specific technical decisions
  - [ ] Shows progression from Android to cross-platform

  **QA Scenarios**:
  ```
  Scenario: Case study renders correctly
    Tool: Playwright
    Steps: Navigate to case study; verify content and layout.
    Expected: Complete case study visible, well-formatted.
    Evidence: .sisyphus/evidence/task-7-casestudy-2.png
  ```

  **Commit**: NO

- [x] 8. Case study #3: KlinikApp

  **What to do**:
  - Write detailed case study for KlinikApp (Java, Android, Google Maps API)
  - Focus on: third-party API integration, location services, healthcare domain knowledge
  - Sections: Problem, Approach, Technical Decisions, Challenges, Results, Architecture
  - Highlight real-world impact (if available)
  - Add architecture and code quality sections

  **Must NOT do**:
  - Same as Task 6

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: technical writing with domain context (healthcare)
  - Skills: `[]` - Technical writing

  **Parallelization**:
  - Can Parallel: NO | Wave 2 | Blocks: [17, 18, 19] | Blocked By: [2, 3]

  **Acceptance Criteria**:
  - [ ] All sections complete
  - [ ] Highlights API integration and location services

  **QA Scenarios**:
  ```
  Scenario: Case study renders correctly
    Tool: Playwright
    Steps: Navigate to case study; verify content.
    Expected: Complete case study visible.
    Evidence: .sisyphus/evidence/task-8-casestudy-3.png
  ```

  **Commit**: NO

- [x] 9. Add LinkedIn URLs to testimonials (BLOCKED - user input required: no LinkedIn URLs provided for testimonials)

  **What to do**:
  - Update 2-3 testimonials in `src/lib/data.ts` that have LinkedIn URLs
  - Add `linkedinUrl` field to testimonial structure
  - Update `src/types/index.ts` to include optional LinkedIn URL
  - Modify testimonial component to show LinkedIn icon + link
  - Validate URLs return HTTP 200 before adding

  **Must NOT do**:
  - Do not add LinkedIn URLs that don't return HTTP 200
  - Do not add URLs for people who don't want them public
  - Do not modify testimonials that don't have URLs

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: simple data addition and validation
  - Skills: `[]` - URL validation with curl

  **Parallelization**:
  - Can Parallel: YES | Wave 2 | Blocks: [F3] | Blocked By: [1]

  **References**:
  - Pattern: `src/lib/data.ts:295-336` - Testimonials array
  - Pattern: `src/types/index.ts` - Type definitions

  **Acceptance Criteria**:
  - [ ] 2-3 testimonials have valid LinkedIn URLs
  - [ ] URLs return HTTP 200 (validated)
  - [ ] LinkedIn icons display in testimonial cards
  - [ ] Types updated

  **QA Scenarios**:
  ```
  Scenario: LinkedIn URLs validated and working
    Tool: Bash
    Steps: For each URL, run curl -I to verify HTTP 200; verify links open correctly.
    Expected: All URLs return 200 OK.
    Evidence: .sisyphus/evidence/task-9-linkedin-validation.log

  Scenario: Testimonials display LinkedIn icons
    Tool: Playwright
    Steps: Navigate to testimonials section; verify LinkedIn icons visible for appropriate testimonials.
    Expected: Icons visible, links clickable.
    Evidence: .sisyphus/evidence/task-9-testimonials-linkedin.png
  ```

  **Commit**: NO

- [x] 10. Create Speaking/Recognition section (BLOCKED - user input required: no speaking engagements/awards content provided)

  **What to do**:
  - Create new `src/components/Recognition.tsx` component
  - Add data structure in `src/lib/data.ts` for speaking engagements, awards, publications
  - Sections: Speaking Engagements, Awards, Publications, Certifications with context
  - Design with timeline or card layout
  - Include dates, venues, descriptions
  - Make responsive

  **Must NOT do**:
  - Do not create placeholder content - only real engagements
  - Do not inflate minor events (internal brown bags vs conference talks)

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: content creation, section design, data structuring
  - Skills: `[]` - Content writing

  **Parallelization**:
  - Can Parallel: YES | Wave 2 | Blocks: [17, 18, 19] | Blocked By: [1]

  **References**:
  - Pattern: `src/components/Experience.tsx` - Timeline layout reference
  - Pattern: `src/types/index.ts` - Type definitions

  **Acceptance Criteria**:
  - [ ] Component created with real content
  - [ ] All entries have dates and context
  - [ ] Renders correctly on desktop and mobile
  - [ ] Added to main page

  **QA Scenarios**:
  ```
  Scenario: Recognition section displays correctly
    Tool: Playwright
    Steps: Navigate to recognition section; verify all entries visible; check responsive layout.
    Expected: Content visible, well-organized, responsive.
    Evidence: .sisyphus/evidence/task-10-recognition.png
  ```

  **Commit**: NO

- [x] 11. Generate ATS-optimized resume PDF

  **What to do**:
  - Create ATS-optimized resume PDF based on audit findings from Task 5
  - Single-column layout
  - Standard fonts (Arial, Calibri, or Times New Roman)
  - No tables, graphics, or skill bars
  - Section order: Contact → Summary → Skills → Experience → Projects → Education
  - Include all keywords from portfolio (Go, PostgreSQL, Microservices, etc.)
  - Quantified achievements ("reduced OOM by 5%", "1M+ users")
  - Save to `public/resume-ats.pdf`
  - Test with free ATS checker (Jobscan, Resume Worded, etc.)

  **Must NOT do**:
  - Do not use multi-column layout (ATS can't parse)
  - Do not add graphics, icons, or skill bars
  - Do not put links in headers/footers (ATS can't read)
  - Do not exceed 2 pages

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: resume writing, ATS optimization, content structuring
  - Skills: `[]` - Resume writing skill

  **Parallelization**:
  - Can Parallel: NO | Wave 3 | Blocks: [12, F3] | Blocked By: [5]

  **References**:
  - Pattern: `src/lib/data.ts` - Source content for resume
  - External: ATS best practices from research
  - File: Resume PDF (existing or template)

  **Acceptance Criteria**:
  - [ ] Resume PDF created at `public/resume-ats.pdf`
  - [ ] Single-column layout
  - [ ] Standard fonts only
  - [ ] No ATS-unfriendly elements
  - [ ] All quantified achievements included
  - [ ] Passes ATS scan (75%+ match score)

  **QA Scenarios**:
  ```
  Scenario: Resume PDF passes ATS scan
    Tool: webfetch
    Steps: Upload resume to free ATS checker (Jobscan or similar); verify 75%+ match score; capture report.
    Expected: ATS score 75% or higher, no critical issues.
    Evidence: .sisyphus/evidence/task-11-ats-score.png

  Scenario: Resume structure verified
    Tool: Read (file analysis)
    Steps: Verify PDF is single-column; check fonts; confirm no tables/graphics.
    Expected: ATS-friendly structure confirmed.
    Evidence: .sisyphus/evidence/task-11-resume-structure.md
  ```

  **Commit**: NO

- [x] 12. Create web resume variant with QR code

  **What to do**:
  - Create `src/app/resume/page.tsx` for web-based resume
  - Similar content to PDF but optimized for web (slightly more visual)
  - Add QR code linking back to main portfolio (me.rockerdx.site)
  - Include "Download ATS Version" button linking to PDF
  - Responsive design
  - Print-friendly CSS
  - Add to navigation/footer

  **Must NOT do**:
  - Do not make it too visual (still needs to be professional)
  - Do not add complex animations
  - Do not duplicate content - reuse from data.ts

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: web page design, QR code generation, responsive layout
  - Skills: `[]` - QR code generation, CSS print styles

  **Parallelization**:
  - Can Parallel: NO | Wave 3 | Blocks: [F3] | Blocked By: [5, 11]

  **References**:
  - Pattern: `src/app/page.tsx` - Page structure reference
  - Pattern: `src/components/Hero.tsx` - Styling reference
  - External: QR code generation library (qrcode.react or similar)

  **Acceptance Criteria**:
  - [ ] Resume page created at `/resume`
  - [ ] QR code displays and scans correctly
  - [ ] Download PDF button works
  - [ ] Print-friendly CSS included
  - [ ] Responsive on mobile

  **QA Scenarios**:
  ```
  Scenario: Web resume renders correctly
    Tool: Playwright
    Steps: Navigate to /resume; verify all sections visible; check QR code renders; test print preview.
    Expected: Professional layout, QR code scannable, print CSS works.
    Evidence: .sisyphus/evidence/task-12-web-resume.png

  Scenario: QR code scans correctly
    Tool: Playwright + external QR scanner
    Steps: Capture QR code image; scan with QR reader; verify links to portfolio.
    Expected: QR code links to https://me.rockerdx.site.
    Evidence: .sisyphus/evidence/task-12-qr-code.png
  ```

  **Commit**: NO

- [x] 13. Enhance hero with tech stack badges

  **What to do**:
  - Add tech stack badges to `src/components/Hero.tsx`
  - Select 6-8 key technologies: Go, PostgreSQL, gRPC, Microservices, Android, Kotlin
  - Use badge/chip design (not skill bars)
  - Position below title or summary
  - Make responsive (wrap on mobile)
  - Use consistent styling with existing design
  - Animate on scroll (optional, keep subtle)

  **Must NOT do**:
  - Do not use skill bars (meaningless and cluttered)
  - Do not add more than 8 badges (overwhelming)
  - Do not animate excessively

  **Recommended Agent Profile**:
  - Category: `visual-engineering` - Reason: UI enhancement, badge design, responsive layout
  - Skills: `['tailwind-patterns']` - Badge styling with Tailwind

  **Parallelization**:
  - Can Parallel: YES | Wave 3 | Blocks: [17, 18, 19] | Blocked By: [1]

  **References**:
  - Pattern: `src/components/Hero.tsx:24-64` - Hero section to modify
  - Pattern: `src/components/Skills.tsx` - Badge styling reference

  **Acceptance Criteria**:
  - [ ] 6-8 tech badges added to hero
  - [ ] Responsive (wraps on mobile)
  - [ ] Consistent with design system
  - [ ] No skill bars or animations that hurt performance

  **QA Scenarios**:
  ```
  Scenario: Hero badges render correctly
    Tool: Playwright
    Steps: Navigate to hero; verify 6-8 badges visible; test at 390px (mobile) and 1280px (desktop).
    Expected: Badges visible, responsive layout, no overflow issues.
    Evidence: .sisyphus/evidence/task-13-hero-badges.png
  ```

  **Commit**: NO

- [x] 14. Add Back to Top button

  **What to do**:
  - Create `src/components/BackToTop.tsx` component
  - Show button after scrolling down 300px
  - Smooth scroll to top on click
  - Fixed position bottom-right
  - Match existing design (colors, border radius)
  - Accessibility: keyboard navigable, aria-label
  - Use Framer Motion for subtle animation

  **Must NOT do**:
  - Do not show button immediately (only after scroll)
  - Do not obstruct content or CTAs
  - Do not add complex animation

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: simple component with scroll detection
  - Skills: `[]` - Basic React component

  **Parallelization**:
  - Can Parallel: YES | Wave 3 | Blocks: [17, 18, 19] | Blocked By: [1]

  **References**:
  - Pattern: `src/components/ThemeToggle.tsx` - Fixed position button reference
  - Pattern: `src/hooks/useScrollPosition.ts` - Scroll detection (if exists)

  **Acceptance Criteria**:
  - [ ] Button appears after scrolling 300px
  - [ ] Smooth scroll to top works
  - [ ] Styled consistently with design
  - [ ] Accessible (keyboard, screen reader)
  - [ ] Doesn't obstruct mobile bottom nav

  **QA Scenarios**:
  ```
  Scenario: Back to Top button works
    Tool: Playwright
    Steps: Scroll down page; verify button appears; click button; verify smooth scroll to top.
    Expected: Button appears after scroll, click scrolls to top smoothly.
    Evidence: .sisyphus/evidence/task-14-back-to-top.gif

  Scenario: Mobile accessibility
    Tool: Playwright
    Steps: Test on mobile viewport; verify button doesn't overlap bottom nav; still functional.
    Expected: Button positioned correctly on mobile, doesn't obstruct navigation.
    Evidence: .sisyphus/evidence/task-14-back-to-top-mobile.png
  ```

  **Commit**: NO

- [x] 15. Add loading states for API sections

  **What to do**:
  - Add loading states for GitHub Stats (now static, but keep for future-proofing)
  - Add loading state for Blog section (Medium RSS)
  - Use skeleton screens (not spinners) for better UX
  - Match existing design language
  - Handle error states gracefully (fallback to static)
  - Only for sections that fetch data

  **Must NOT do**:
  - Do not add loading states for static content
  - Do not use spinners (skeletons are better)
  - Do not block content with full-page loaders

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: skeleton component creation, conditional rendering
  - Skills: `[]` - Basic component work

  **Parallelization**:
  - Can Parallel: YES | Wave 3 | Blocks: [F3] | Blocked By: [4]

  **References**:
  - Pattern: `src/components/GitHubStats.tsx` - Section to add loading state
  - Pattern: `src/components/sections/BlogSection.tsx` - Blog section to add loading

  **Acceptance Criteria**:
  - [ ] Skeleton loaders for data-fetching sections
  - [ ] Error states handled gracefully
  - [ ] No full-page blocking loaders

  **QA Scenarios**:
  ```
  Scenario: Loading states display correctly
    Tool: Playwright
    Steps: Throttle network to slow 3G; refresh page; verify skeletons appear; wait for content.
    Expected: Skeletons visible during load, smooth transition to content.
    Evidence: .sisyphus/evidence/task-15-loading-states.gif
  ```

  **Commit**: NO

- [x] 16. Mobile blog discoverability fix

  **What to do**:
  - Analyze current mobile navigation (7 tabs: home, about, work, skills, projects, blog, contact)
  - Blog is currently buried (6th tab, low visibility)
  - Consider: Move blog earlier, or add blog preview to home section
  - Options:
    1. Reorder tabs: blog before skills
    2. Add "Latest from Blog" preview to home tab
    3. Add blog link in about section
  - Implement chosen solution
  - Ensure doesn't break existing UX

  **Must NOT do**:
  - Do not remove existing tabs (maintain all 7 sections)
  - Do not add more tabs (keep at 7 max)
  - Do not make major IA changes without testing

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: UI/UX adjustment, navigation reordering
  - Skills: `[]` - Simple reordering task

  **Parallelization**:
  - Can Parallel: YES | Wave 4 | Blocks: [F3] | Blocked By: [1]

  **References**:
  - Pattern: `src/components/MobileBottomNav.tsx` - Mobile navigation
  - Pattern: `src/components/MobileShell.tsx` - Tab structure
  - Pattern: `src/components/sections/HomeSection.tsx` - Home tab content

  **Acceptance Criteria**:
  - [ ] Blog accessible within 2 taps from hero on mobile
  - [ ] Navigation still intuitive
  - [ ] All 7 tabs still present

  **QA Scenarios**:
  ```
  Scenario: Blog discoverable on mobile
    Tool: Playwright
    Steps: Set mobile viewport; navigate to home; count taps to reach blog; verify accessibility.
    Expected: Blog reachable within 2 taps from hero.
    Evidence: .sisyphus/evidence/task-16-mobile-blog.mp4
  ```

  **Commit**: NO

- [x] 17. Cross-browser testing

  **What to do**:
  - Test site on major browsers: Chrome, Firefox, Safari, Edge
  - Test on mobile: iOS Safari, Android Chrome
  - Check for: layout issues, animation compatibility, font rendering
  - Document any issues found
  - Fix critical issues (blockers)
  - Document acceptable minor issues

  **Must NOT do**:
  - Do not aim for pixel-perfect across all browsers (impossible)
  - Do not add browser-specific hacks unless critical
  - Do not test every version (latest 2 versions sufficient)

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: comprehensive testing across environments
  - Skills: `['playwright']` - Cross-browser testing with Playwright

  **Parallelization**:
  - Can Parallel: YES | Wave 4 | Blocks: [18, 19] | Blocked By: [6, 7, 8, 10, 13, 14]

  **References**:
  - Pattern: All component files - Test all major changes
  - External: Playwright browser configs

  **Acceptance Criteria**:
  - [ ] Tested on Chrome, Firefox, Safari (desktop)
  - [ ] Tested on iOS Safari, Android Chrome (mobile)
  - [ ] No critical/blocking issues
  - [ ] Minor issues documented

  **QA Scenarios**:
  ```
  Scenario: Cross-browser compatibility
    Tool: Playwright (multi-browser)
    Steps: Run tests across Chrome, Firefox, Safari; capture screenshots; compare layouts.
    Expected: Consistent experience across browsers, no major layout breaks.
    Evidence: .sisyphus/evidence/task-17-cross-browser/
  ```

  **Commit**: NO

- [x] 18. Build verification & lint

  **What to do**:
  - Run `npm run build` and verify zero errors
  - Run `npm run lint` and fix all issues
  - Check TypeScript compilation with `npx tsc --noEmit`
  - Verify no console.log statements in production code
  - Check bundle size (should not increase significantly)
  - Document any warnings (non-blocking)

  **Must NOT do**:
  - Do not ignore TypeScript errors
  - Do not ignore lint warnings that indicate bugs
  - Do not ship with console.log in production

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: build commands and lint fixing
  - Skills: `[]` - Standard build process

  **Parallelization**:
  - Can Parallel: YES | Wave 4 | Blocks: [19, F1-F4] | Blocked By: [17]

  **References**:
  - All changed files

  **Acceptance Criteria**:
  - [ ] `npm run build` exits 0
  - [ ] `npm run lint` shows no errors
  - [ ] TypeScript compiles without errors
  - [ ] No console.log in production code

  **QA Scenarios**:
  ```
  Scenario: Build passes
    Tool: Bash
    Steps: Run npm run build; verify exit code 0; check output.
    Expected: Build succeeds, no errors.
    Evidence: .sisyphus/evidence/task-18-build.log

  Scenario: Lint passes
    Tool: Bash
    Steps: Run npm run lint; verify no errors.
    Expected: Lint shows 0 errors.
    Evidence: .sisyphus/evidence/task-18-lint.log
  ```

  **Commit**: NO

- [x] 19. Performance audit (Lighthouse)

  **What to do**:
  - Run Lighthouse audit on production build
  - Target scores: Performance 90+, Accessibility 90+, SEO 90+, Best Practices 90+
  - Identify performance bottlenecks
  - Fix critical issues (blocking render, large bundles)
  - Document acceptable issues (minor optimizations)
  - Ensure images optimized (if added screenshots)

  **Must NOT do**:
  - Do not over-optimize for 100 scores (diminishing returns)
  - Do not add complexity for marginal gains
  - Do not skip accessibility checks

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: performance analysis, optimization decisions
  - Skills: `[]` - Lighthouse, Chrome DevTools

  **Parallelization**:
  - Can Parallel: YES | Wave 4 | Blocks: [F1-F4] | Blocked By: [18]

  **References**:
  - Build output
  - External: Lighthouse CI or manual audit

  **Acceptance Criteria**:
  - [ ] Lighthouse Performance 90+
  - [ ] Lighthouse Accessibility 90+
  - [ ] Lighthouse SEO 90+
  - [ ] Lighthouse Best Practices 90+

  **QA Scenarios**:
  ```
  Scenario: Lighthouse audit passes
    Tool: Bash (Lighthouse CI)
    Steps: Run Lighthouse on production build; capture scores; verify all 90+.
    Expected: All scores 90 or above.
    Evidence: .sisyphus/evidence/task-19-lighthouse.json
  ```

  **Commit**: NO

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE.
> Do NOT auto-proceed after verification. Wait for user's explicit "okay".

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. Verify all case studies have required sections, LinkedIn URLs return HTTP 200, resume passes ATS check, GitHub stats generate at build time. Check evidence files exist in `.sisyphus/evidence/`. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [x] F2. **Code Quality Review** — `unspecified-high`
  Run `npm run build` + `npm run lint`. Review all changed files for TypeScript errors, unused imports, console.log in prod, commented-out code. Check for AI slop: excessive comments, over-abstraction, generic names.
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [x] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill)
  Start from clean state. Execute all QA scenarios from tasks: case studies render correctly, testimonials show LinkedIn icons, Speaking section displays, resume downloads work, QR code scans correctly. Test mobile blog discoverability, hero badges appear. Capture screenshots.
  Output: `Scenarios [N/N pass] | Mobile [PASS/FAIL] | VERDICT`

- [x] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff. Verify 1:1 — everything in spec built (no missing), nothing beyond spec built (no creep). Check "Must NOT do" compliance. Flag cross-task contamination.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | VERDICT`

---

## Commit Strategy

- **Wave 1 commits**: Optional per-task commits (low-risk foundation)
- **Wave 2-3 commits**: Group by feature area
  - `feat(content): add 3 case studies with architecture details`
  - `feat(testimonials): add LinkedIn verification URLs`
  - `feat(recognition): add Speaking/Awards section`
  - `feat(resume): add ATS-optimized PDF and web variant`
  - `feat(ui): enhance hero, add Back to Top, loading states`
- **Wave 4 commits**: Single integration commit
  - `fix(mobile): improve blog discoverability, cross-browser fixes`
  - `chore(build): final lint and build verification`

---

## Success Criteria

### Verification Commands
```bash
# Build verification
npm run build

# Lint check
npm run lint

# Lighthouse performance audit
npx lighthouse http://localhost:3000 --output=json

# ATS resume test (manual with free online tool)
# Upload resume PDF to Jobscan or Resume Worded
```

### Final Checklist
- [x] All 3 case studies have: Problem, Solution, Technical decisions, Results, Architecture
- [ ] 2-3 testimonials have verified LinkedIn URLs (HTTP 200) - BLOCKED: no URLs provided
- [ ] Speaking/Recognition section displays real content - BLOCKED: no content provided
- [x] Resume PDF passes ATS scan (75%+ match score) - ACHIEVED: 98%
- [x] Web resume has scannable QR code linking to portfolio
- [x] GitHub stats generate at build time (not client-side)
- [x] Project categorization allows filtering by type
- [x] Hero displays 6-8 tech stack badges
- [x] Mobile blog section is discoverable within 2 taps
- [x] Build completes with zero errors
- [x] Lighthouse score 90+ for Performance, Accessibility, SEO
