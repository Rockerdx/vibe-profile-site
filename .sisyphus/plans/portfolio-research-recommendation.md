# Portfolio Research & Recommendation Plan

## TL;DR
> **Summary**: Audit the current portfolio as it exists in this repo, research transferable developer-portfolio patterns on the web, and produce one tailored recommendation that improves clarity, proof, and conversion without drifting into speculative redesign work.
> **Deliverables**:
> - Current-state audit for repo, UX, IA, SEO/domain consistency, and proof assets
> - Scored external reference matrix with transferability notes
> - Tailored recommendation with one primary direction, two rejected alternatives, and a prioritized next-step backlog
> **Effort**: Medium
> **Parallel**: YES - 3 waves
> **Critical Path**: Task 1/2/3/4 → Task 5/6 → Task 7/8/9

## Context
### Original Request
User wants a plan to check the current portfolio/profile project, research strong portfolio sites on the web, analyze those references, and propose a recommendation for this site.

### Interview Summary
- Optimize for a **balanced** outcome: stronger credibility, personal brand, and conversion together.
- Allow **bold repositioning** if evidence supports it.
- Bias research toward **developer portfolios** rather than generic marketing or agency sites.

### Metis Review (gaps addressed)
- Treat **mobile and desktop as separate audit surfaces** because current IA diverges.
- Add a **content-readiness gate** before recommending blog/testimonials/case studies as trust assets.
- Force an **audience ranking and conversion model** before final recommendation.
- Keep the work bounded: audit + references + recommendation, not a full redesign or backend remediation project.
- Include a **Not Recommended / Not Now** section so bold repositioning does not become uncontrolled scope expansion.

## Work Objectives
### Core Objective
Produce a research-backed recommendation for how this portfolio should be positioned and structured next, using evidence from the repo, the current UX, and transferable best-in-class portfolio references.

### Deliverables
- `.sisyphus/drafts/portfolio-current-state-audit.md`
- `.sisyphus/drafts/portfolio-proof-inventory.md`
- `.sisyphus/drafts/portfolio-ux-audit.md`
- `.sisyphus/drafts/portfolio-reference-longlist.md`
- `.sisyphus/drafts/portfolio-reference-matrix.md`
- `.sisyphus/drafts/portfolio-audience-model.md`
- `.sisyphus/drafts/portfolio-site-recommendation.md`
- `.sisyphus/drafts/portfolio-priority-backlog.md`
- `.sisyphus/drafts/portfolio-executive-summary.md`

### Definition of Done (verifiable conditions with commands)
- All deliverable markdown files above exist and contain the planned sections.
- `npm run build` completes successfully from repo root.
- Current-state audit records verified file evidence for IA, proof assets, and metadata/domain configuration.
- UX audit records desktop and mobile evidence from Playwright runs against the local app.
- Reference matrix includes at least 5 portfolio references with audience fit, proof style, motion style, CTA style, and transferability note.
- Final recommendation names 1 primary direction, 2 rejected alternatives, explicit prerequisites, and a `Not Recommended / Not Now` list.

### Must Have
- Repo-grounded assessment of current positioning, structure, and trust signals
- External reference research filtered for transferability to an individual senior engineer portfolio
- Explicit audience ranking and desired conversion actions
- Separate findings for desktop and mobile
- Recommendation tied to existing strengths and constraints in this codebase

### Must NOT Have (guardrails, AI slop patterns, scope boundaries)
- No implementation of design/code changes in source files
- No generic “top portfolio trends” dump without a scoring rubric
- No assumption that blog/testimonials/case studies should be promoted unless content quality is validated
- No drift into backend/admin/test-infra cleanup beyond what affects recommendation credibility
- No vague acceptance criteria such as “looks better” or “feels more modern”

## Verification Strategy
> ZERO HUMAN INTERVENTION - all verification is agent-executed.
- Test decision: **none** for product tests; verification uses `npm run build`, Playwright evidence capture, and markdown artifact checks
- QA policy: Every task includes agent-executed verification and evidence capture
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave. <3 per wave (except final) = under-splitting.
> Extract shared dependencies as Wave-1 tasks for max parallelism.

Wave 1: baseline repo audit, proof inventory, live UX audit
Wave 2: external reference research, scoring matrix, audience/conversion model
Wave 3: tailored recommendation, prioritized backlog, executive summary

### Dependency Matrix (full, all tasks)
| Task | Depends On | Notes |
|---|---|---|
| 1 | none | Establish repo truth and build baseline |
| 2 | none | Validate promotable proof/trust assets |
| 3 | none | Capture current desktop/mobile UX evidence |
| 4 | none | Gather broad external reference pool |
| 5 | 1,2,3,4 | Score and reduce to transferable references |
| 6 | 1,2,3,5 | Define audience ranking and conversion model using repo + reference evidence |
| 7 | 5,6 | Produce primary recommendation and rejected alternatives |
| 8 | 7 | Turn recommendation into prioritized action backlog |
| 9 | 7,8 | Summarize findings and next-step options for user consumption |

### Agent Dispatch Summary (wave → task count → categories)
- Wave 1 → 3 tasks → unspecified-low, writing, unspecified-high
- Wave 2 → 3 tasks → deep, writing, writing
- Wave 3 → 3 tasks → writing, writing, writing

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

- [x] 1. Produce repo-grounded current-state audit

  **What to do**: Run the repo verification baseline, then create `.sisyphus/drafts/portfolio-current-state-audit.md` with five sections: architecture summary, mobile/desktop IA divergence, trust/proof surfaces, metadata/domain consistency, and recommendation-relevant constraints. Treat the repo as the source of truth. Explicitly record that the homepage composes mobile and desktop differently, that blog/testimonials are not equally surfaced, and that metadata currently points at GitHub Pages URLs.
  **Must NOT do**: Do not fix code, metadata, routing, or content. Do not speculate about business goals beyond evidence in the repo.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` - Reason: mostly static analysis and artifact writing
  - Skills: `[]` - No additional skill is required; this task is evidence gathering
  - Omitted: `['frontend-design']` - Avoid drifting into visual redesign before the audit is complete

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: [5, 6] | Blocked By: []

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `src/app/page.tsx:37-85` - Defines the split mobile/desktop homepage composition
  - Pattern: `src/components/MobileShell.tsx:9-18,42-45,73-119` - Confirms typed mobile sections, tab order, and viewport split behavior
  - Pattern: `src/components/MobileBottomNav.tsx:13-28` - Defines the exact mobile IA labels and omissions
  - Pattern: `src/app/layout.tsx:13-61` - Metadata, canonical, OG/Twitter configuration
  - Pattern: `src/app/robots.ts:3-12` - Robots host/sitemap domain
  - Pattern: `src/app/sitemap.ts:3-44` - Sitemap base URL and anchor coverage
  - API/Type: `src/lib/api-data.ts:33-109` - Data loading strategy and fallbacks
  - External: `README.md` - Public/live domain and deployment expectations

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-current-state-audit.md` exists and contains the sections `Architecture Summary`, `IA Divergence`, `Trust/Proof Surfaces`, `Metadata/Domain Consistency`, and `Constraints`
  - [ ] `npm run build` exits with code `0` and its log is saved to `.sisyphus/evidence/task-1-current-state-build.log`
  - [ ] The audit cites exact file:line references for mobile/desktop IA, blog/testimonial surfacing, and canonical domain configuration

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Baseline repo verification succeeds
    Tool: Bash
    Steps: Run `npm run build` from repo root; save stdout/stderr to `.sisyphus/evidence/task-1-current-state-build.log`; create `.sisyphus/drafts/portfolio-current-state-audit.md` with the required sections and exact citations.
    Expected: Build exits 0; audit file exists; audit includes the repo-backed findings and no uncited claims.
    Evidence: .sisyphus/evidence/task-1-current-state-build.log

  Scenario: Build fails or repo truth conflicts with docs
    Tool: Bash
    Steps: Run `npm run build`; if it fails, capture the failing output in `.sisyphus/evidence/task-1-current-state-build-error.log`; still complete the audit with a `Blockers` subsection naming the exact failing command and affected recommendation areas.
    Expected: Failure is documented precisely; the audit still ships with constrained conclusions instead of being skipped.
    Evidence: .sisyphus/evidence/task-1-current-state-build-error.log
  ```

  **Commit**: NO | Message: `docs(portfolio): capture current-state audit` | Files: [`.sisyphus/drafts/portfolio-current-state-audit.md`, `.sisyphus/evidence/task-1-current-state-build.log`]

- [x] 2. Inventory proof assets and content readiness

  **What to do**: Create `.sisyphus/drafts/portfolio-proof-inventory.md` that grades every promotable proof asset as `Promotable Now`, `Needs Rewrite/Verification`, or `Do Not Surface Yet`. Include projects, GitHub stats, blog, testimonials, contact form, resume download, experience timeline, and education/certifications. For each asset, record source path, audience value, current issue, verification status, and recommendation implication.
  **Must NOT do**: Do not invent missing metrics, fake case studies, or treat placeholder testimonials as trustworthy social proof.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: structured assessment and decision framing in markdown
  - Skills: `[]` - The task is evaluation, not implementation
  - Omitted: `['seo-audit']` - Keep this scoped to portfolio proof quality, not full SEO remediation

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: [5, 6, 7] | Blocked By: []

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `src/lib/data.ts:295-336` - Testimonials currently use placeholder LinkedIn URLs
  - Pattern: `src/lib/api-data.ts:96-109` - Testimonials are static-only; blog falls back to empty array on fetch failure
  - Pattern: `src/components/Projects.tsx:12-122` - Projects are presented as repo cards, not case studies
  - Pattern: `src/components/Hero.tsx:24-64` - Primary proof and CTA surfaces above the fold
  - Pattern: `src/components/Contact.tsx:13-35,46-116` - Resume download, contact, and social proof actions depend on current data/API behavior
  - Pattern: `src/app/page.tsx:58-77` - Which content blocks are currently surfaced on mobile vs desktop

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-proof-inventory.md` exists with a table containing `Asset`, `Source`, `Audience Value`, `Verification Status`, `Recommendation Status`, and `Notes`
  - [ ] Testimonials are explicitly downgraded unless attribution is verifiable beyond the placeholder URLs in `src/lib/data.ts:295-336`
  - [ ] Blog readiness explicitly accounts for the empty-array fallback in `src/lib/api-data.ts:101-109`
  - [ ] The inventory ends with a `Promote / Repair / Hold` summary that directly feeds Task 7

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Trust assets are valid and promotable
    Tool: Read
    Steps: Inspect the referenced files; for each asset with real and verifiable source data, mark it `Promotable Now` and cite the exact file path proving availability.
    Expected: Inventory distinguishes strong proof assets from weak ones with explicit evidence and no uncited promotions.
    Evidence: .sisyphus/evidence/task-2-proof-inventory.md

  Scenario: Trust assets are placeholder, unverifiable, or fragile
    Tool: Read
    Steps: Inspect `src/lib/data.ts`, `src/lib/api-data.ts`, and CTA components; if placeholders, empty fallbacks, or API-coupled flows are found, mark the asset `Needs Rewrite/Verification` or `Do Not Surface Yet` and explain the downgrade.
    Expected: Weak proof assets are downgraded instead of recommended; the inventory contains a clear remediation prerequisite.
    Evidence: .sisyphus/evidence/task-2-proof-inventory-risk.md
  ```

  **Commit**: NO | Message: `docs(portfolio): inventory proof assets` | Files: [`.sisyphus/drafts/portfolio-proof-inventory.md`]

- [x] 3. Capture live desktop and mobile UX evidence

  **What to do**: Start the local app, then use Playwright to create `.sisyphus/drafts/portfolio-ux-audit.md` plus screenshots for desktop (`1280x800`) and mobile (`390x844`). Verify what a real visitor can reach today, not just what exists in code. Record desktop heading order, mobile bottom-nav labels, scroll behavior, and whether Blog/Testimonials are reachable in the current information architecture.
  **Must NOT do**: Do not redesign components, patch selectors, or assume dormant content is reachable because a component exists.

  **Recommended Agent Profile**:
  - Category: `unspecified-high` - Reason: mixed runtime verification, browser automation, and evidence writing
  - Skills: `['playwright']` - Browser automation is required for agent-executed UX validation
  - Omitted: `['frontend-design']` - This task verifies reality; it does not propose UI changes yet

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: [5, 6, 7] | Blocked By: []

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `src/app/page.tsx:58-77` - Expected desktop block order and mobile block supply
  - Pattern: `src/components/MobileShell.tsx:42-119` - Mobile tab switching and viewport behavior
  - Pattern: `src/components/MobileBottomNav.tsx:21-28` - Exact mobile nav labels
  - Pattern: `src/components/About.tsx:22` - Desktop `About` heading
  - Pattern: `src/components/GitHubStats.tsx:31` - Desktop `GitHub Stats` heading
  - Pattern: `src/components/Experience.tsx:23` - Desktop `Experience` heading
  - Pattern: `src/components/sections/BlogSection.tsx:25` - `Blog` heading used on both surfaces
  - Pattern: `src/components/Skills.tsx:40` - Desktop `Skills` heading
  - Pattern: `src/components/Projects.tsx:25` - Desktop `Projects` heading
  - Pattern: `src/components/Contact.tsx:46` - Desktop `Get In Touch` heading
  - Pattern: `src/components/sections/TestimonialsSection.tsx:35` - `Testimonials` heading if it ever appears

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-ux-audit.md` exists with separate `Desktop` and `Mobile` sections
  - [ ] Desktop evidence proves the page contains, in order after the hero, `About`, `GitHub Stats`, `Experience`, `Blog`, `Skills`, `Projects`, `Get In Touch`
  - [ ] Mobile evidence proves the bottom-nav labels are exactly `Home`, `About`, `Work`, `Skills`, `Projects`, `Contact`
  - [ ] Mobile evidence explicitly records that `Blog` and `Testimonials` are not reachable unless the IA is changed later

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Current IA behaves as expected locally
    Tool: Playwright
    Steps: Start the site locally at `http://localhost:3000`; open desktop viewport `1280x800`; wait for the hero `h1`; collect `h2` text contents and confirm the ordered sequence `About`, `GitHub Stats`, `Experience`, `Blog`, `Skills`, `Projects`, `Get In Touch`; capture screenshots. Then switch to mobile viewport `390x844`, verify nav labels exactly `Home`, `About`, `Work`, `Skills`, `Projects`, `Contact`, tap each label, and confirm there is no `Blog` or `Testimonials` tab.
    Expected: Desktop and mobile behaviors match repo expectations; screenshots and notes are saved.
    Evidence: .sisyphus/evidence/task-3-ux-desktop.png

  Scenario: Runtime degradation or reachability mismatch appears
    Tool: Playwright
    Steps: If the local app fails to load, data falls back unexpectedly, or mobile exposes different tabs than code suggests, capture an error screenshot and record the exact mismatch in the UX audit.
    Expected: The UX audit documents the mismatch with screenshots instead of silently assuming success.
    Evidence: .sisyphus/evidence/task-3-ux-error.png
  ```

  **Commit**: NO | Message: `docs(portfolio): capture UX evidence` | Files: [`.sisyphus/drafts/portfolio-ux-audit.md`, `.sisyphus/evidence/task-3-ux-desktop.png`, `.sisyphus/evidence/task-3-ux-mobile.png`]

- [x] 4. Build a transferable portfolio reference longlist

  **What to do**: Create `.sisyphus/drafts/portfolio-reference-longlist.md` with 8-10 external references divided into three buckets: `Clarity-First`, `Evidence-Led`, and `Editorial/Personality-Led`. For each reference, record URL, primary audience, strongest pattern, weakest pattern, motion style, CTA style, and one sentence on whether the pattern transfers cleanly to this repo. Start from the already identified seed references, then expand only with references that teach a concrete lesson.
  **Must NOT do**: Do not produce an inspiration dump, award-gallery list, or purely aesthetic roundup with no transferability analysis.

  **Recommended Agent Profile**:
  - Category: `deep` - Reason: requires discriminating research, filtering, and synthesis rather than raw collection
  - Skills: `[]` - Use built-in web research tools directly; the value is in selection quality
  - Omitted: `['frontend-design']` - This is reference analysis, not moodboard generation

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: [5] | Blocked By: []

  **References** (executor has NO interview context - be exhaustive):
  - External: `https://abulkhoyer.com/case-studies/portfolio` - Editorial, reading-first, restrained-motion portfolio case study
  - External: `https://eleventy8.com/case-studies/eleventy8` - Evidence-led dual-audience engineer/consultant portfolio case study
  - External: `https://www.baslondigital.com/post/7-personal-website-examples-you-should-know` - Strategy-oriented roundup emphasizing clarity, proof, and user journey
  - External: `https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/` - Hiring-oriented guidance on project proof and simplicity
  - External: `https://curious.page/blog/how-to-build-developer-portfolio-gets-hired` - Recruiter-facing portfolio structure guidance
  - External: `https://asharkamran.netlify.app/blog/developer-portfolio-guide-2025` - Hero/CTA/case-study patterns from a developer-portfolio perspective

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-reference-longlist.md` exists and contains 8-10 references grouped into the three required buckets
  - [ ] Every reference entry includes `URL`, `Audience`, `Proof Style`, `Motion Style`, `CTA Style`, `Strongest Pattern`, `Weakest Pattern`, and `Transferability`
  - [ ] At least 5 references are individual developer/personal-brand sites rather than agency/blog commentary
  - [ ] Each kept reference has at least one explicit lesson that can map to this repo’s current strengths or gaps

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: High-quality reference set is assembled
    Tool: webfetch
    Steps: Research and fetch candidate portfolio references; keep only those with clear structure, identifiable audience, and transferable lessons; write the longlist grouped by archetype.
    Expected: Longlist contains 8-10 references with concrete analysis rather than generic praise.
    Evidence: .sisyphus/evidence/task-4-reference-longlist.md

  Scenario: Search results are noisy or too marketing-heavy
    Tool: webfetch
    Steps: If a candidate source is mostly template sales copy, award-gallery fluff, or lacks a transferable lesson, place it in an `Excluded References` subsection with the reason for rejection and replace it with a stronger source.
    Expected: The final longlist remains curated and defensible; low-signal sources are explicitly rejected.
    Evidence: .sisyphus/evidence/task-4-reference-exclusions.md
  ```

  **Commit**: NO | Message: `docs(portfolio): collect reference longlist` | Files: [`.sisyphus/drafts/portfolio-reference-longlist.md`]

- [x] 5. Reduce the longlist to a scored reference matrix

  **What to do**: Create `.sisyphus/drafts/portfolio-reference-matrix.md` that scores the best 5 references using a weighted rubric: `Clarity of Positioning (25)`, `Proof Depth (25)`, `Mobile Ergonomics (15)`, `Motion Restraint (10)`, `CTA Quality (15)`, and `Transferability to This Repo (10)`. Include the weighted total, short rationale, and one “borrow this / avoid this” note per reference.
  **Must NOT do**: Do not let novelty outrank clarity or proof. Do not recommend spectacle-first references unless they outperform on transferability, which is unlikely for this repo.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: structured comparison and ranking are the core outputs
  - Skills: `[]` - A custom rubric is more important than a specialized skill
  - Omitted: `['seo-audit']` - SEO is a secondary factor here, not the scoring center

  **Parallelization**: Can Parallel: NO | Wave 2 | Blocks: [6, 7] | Blocked By: [1, 2, 3, 4]

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `.sisyphus/drafts/portfolio-reference-longlist.md` - Source pool to score and reduce
  - Pattern: `.sisyphus/drafts/portfolio-current-state-audit.md` - Current-site gaps that influence transferability scoring
  - Pattern: `.sisyphus/drafts/portfolio-proof-inventory.md` - Determines which reference patterns are realistic now vs later
  - Pattern: `.sisyphus/drafts/portfolio-ux-audit.md` - Current mobile/desktop realities that recommendation must respect

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-reference-matrix.md` exists with exactly 5 scored references
  - [ ] Each row includes `URL`, `Audience Fit`, `Proof Style`, `Motion Style`, `CTA Style`, `Transferability`, weighted scores, and `Borrow / Avoid`
  - [ ] The highest-ranked reference is justified in writing, not only by numeric total
  - [ ] At least 2 promising-but-rejected references are listed with explicit rejection reasons

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Matrix produces a defensible top five
    Tool: Read
    Steps: Read the longlist and supporting audit drafts; apply the weighted rubric consistently; write the top five with totals and short rationales.
    Expected: Matrix shows why each reference is useful for this repo, not just that it looks impressive.
    Evidence: .sisyphus/evidence/task-5-reference-matrix.md

  Scenario: A flashy but low-transferability reference scores high on novelty
    Tool: Read
    Steps: If a reference is visually striking but weak on clarity, proof, or repo transferability, record it under rejected references with the reason `Novelty exceeds utility`.
    Expected: The matrix favors useful patterns over spectacle.
    Evidence: .sisyphus/evidence/task-5-reference-matrix-rejections.md
  ```

  **Commit**: NO | Message: `docs(portfolio): score reference matrix` | Files: [`.sisyphus/drafts/portfolio-reference-matrix.md`]

- [x] 6. Define audience ranking and conversion model

  **What to do**: Create `.sisyphus/drafts/portfolio-audience-model.md` that locks the visitor priority order, primary site promise, and CTA hierarchy. Use the user’s chosen “balanced” goal, the repo’s current profile/title signals, and the proof inventory to set a concrete default model: **1) hiring managers/recruiters for senior backend/product-engineer roles, 2) peers/collaborators/community, 3) selective client/consulting leads**. Include visitor questions to answer above the fold, in the projects section, and in contact.
  **Must NOT do**: Do not pivot the site into an agency or creator-business brand unless the proof inventory strongly supports it. Do not leave the audience order undecided.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: this is a decision artifact that converts research into positioning
  - Skills: `[]` - The decision is strategic, not technical
  - Omitted: `['frontend-design']` - Positioning decisions come before layout exploration

  **Parallelization**: Can Parallel: NO | Wave 2 | Blocks: [7] | Blocked By: [1, 2, 3, 5]

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `src/app/layout.tsx:15-20` - Current title/description reveal current role emphasis
  - Pattern: `src/components/Hero.tsx:24-64` - Current above-the-fold value proposition and CTA mix
  - Pattern: `.sisyphus/drafts/portfolio-proof-inventory.md` - Limits which audiences can be credibly targeted now
  - Pattern: `.sisyphus/drafts/portfolio-reference-matrix.md` - Shows which audience models work best externally
  - External: `https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/` - Hiring-manager-oriented proof expectations
  - External: `https://eleventy8.com/case-studies/eleventy8` - Dual-audience positioning example and associated risks

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-audience-model.md` exists with sections `Audience Ranking`, `Primary Promise`, `Visitor Questions`, `CTA Hierarchy`, and `Out-of-Scope Audiences`
  - [ ] Audience ranking is explicit and ordered; there is no unresolved “balanced for everyone” ambiguity
  - [ ] The model includes 3 concrete conversion actions and ties each to an existing or future-proofable surface on the site
  - [ ] Any audience the current proof cannot support is explicitly downgraded or deferred

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Positioning model fits current proof and user goals
    Tool: Read
    Steps: Compare the hero/current metadata, proof inventory, and reference matrix; write the ordered audience model and CTA hierarchy that best matches a balanced but developer-first portfolio.
    Expected: The model is specific, internally consistent, and clearly supports the later recommendation.
    Evidence: .sisyphus/evidence/task-6-audience-model.md

  Scenario: Proof inventory cannot support the boldest positioning angle
    Tool: Read
    Steps: If consulting/client proof is weaker than recruiter/hiring proof, explicitly downgrade consulting to tertiary audience and record the prerequisite evidence needed before elevating it.
    Expected: Audience ambition is capped by evidence rather than wishful branding.
    Evidence: .sisyphus/evidence/task-6-audience-model-risk.md
  ```

  **Commit**: NO | Message: `docs(portfolio): define audience model` | Files: [`.sisyphus/drafts/portfolio-audience-model.md`]

- [x] 7. Produce the tailored site recommendation

  **What to do**: Create `.sisyphus/drafts/portfolio-site-recommendation.md` with one primary recommendation direction and two explicit rejected alternatives. The default primary direction for this repo should be: **clarity-first hero + evidence-led project storytelling + selectively surfaced thought leadership**, not spectacle-first interactivity. Translate that into section-level guidance for hero, about, projects, blog, testimonials, contact, metadata, and mobile IA. Include prerequisites from the proof inventory and a `Not Recommended / Not Now` section.
  **Must NOT do**: Do not leave the recommendation as a vague blend of styles. Do not propose a full agency repositioning, game-like portfolio, or testimonial-heavy trust strategy unless evidence clearly supports it.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: this is the core synthesis artifact
  - Skills: `[]` - The task is judgment and articulation, not a specialized workflow
  - Omitted: `['frontend-design']` - Final recommendation should describe direction and priorities, not visual mockups

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: [8, 9] | Blocked By: [5, 6]

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `.sisyphus/drafts/portfolio-current-state-audit.md` - Current constraints and structure
  - Pattern: `.sisyphus/drafts/portfolio-proof-inventory.md` - Determines which trust assets are safe to elevate
  - Pattern: `.sisyphus/drafts/portfolio-ux-audit.md` - Captures real mobile/desktop experience and IA reachability
  - Pattern: `.sisyphus/drafts/portfolio-reference-matrix.md` - Best external patterns to borrow or reject
  - Pattern: `.sisyphus/drafts/portfolio-audience-model.md` - Locked audience and CTA hierarchy
  - External: `https://abulkhoyer.com/case-studies/portfolio` - Editorial restraint and reading-first lesson
  - External: `https://eleventy8.com/case-studies/eleventy8` - Proof-led, dual-audience lesson and caution
  - External: `https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/` - Simplicity and project-proof lesson

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-site-recommendation.md` exists with sections `Primary Direction`, `Why This Fits`, `Section-by-Section Guidance`, `Rejected Alternatives`, `Not Recommended / Not Now`, and `Prerequisites`
  - [ ] The primary direction clearly names the intended portfolio archetype and its rationale
  - [ ] Exactly 2 rejected alternatives are documented with evidence-based rejection reasons
  - [ ] Recommendation explicitly addresses mobile blog/testimonial reachability, proof asset quality, and metadata/domain consistency

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Recommendation is evidence-backed and specific
    Tool: Read
    Steps: Read all prior drafts; write one recommendation that ties each major suggestion to repo evidence, UX evidence, or ranked references; include section-by-section guidance and explicit exclusions.
    Expected: Recommendation is decisive, traceable, and does not require the implementer to guess the intended direction.
    Evidence: .sisyphus/evidence/task-7-site-recommendation.md

  Scenario: Desired direction exceeds current proof readiness
    Tool: Read
    Steps: If the boldest narrative requires unavailable case studies, unverifiable testimonials, or unsupported client proof, convert that idea into a prerequisite or future state rather than the immediate recommendation.
    Expected: The recommendation remains ambitious but credible.
    Evidence: .sisyphus/evidence/task-7-site-recommendation-risk.md
  ```

  **Commit**: NO | Message: `docs(portfolio): recommend site direction` | Files: [`.sisyphus/drafts/portfolio-site-recommendation.md`]

- [x] 8. Convert the recommendation into a prioritized action backlog

  **What to do**: Create `.sisyphus/drafts/portfolio-priority-backlog.md` with a maximum of 10 actions split into `Now`, `Next`, and `Later`. Each item must name the target surface (for example hero copy, project presentation, blog exposure, testimonial policy, metadata domain cleanup, contact CTA, mobile nav), the reason it matters, the dependency/prerequisite, and the expected user-value outcome. This is a strategy backlog, not implementation pseudocode.
  **Must NOT do**: Do not turn the backlog into raw UI tasks with no strategic reason. Do not include backend/admin tasks unless they directly unblock the portfolio recommendation.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: prioritization and sequencing are the deliverables
  - Skills: `[]` - No special skill is required beyond disciplined prioritization
  - Omitted: `['kaizen']` - Continuous-improvement theory is unnecessary; this needs concrete backlog ordering

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: [9] | Blocked By: [7]

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `.sisyphus/drafts/portfolio-site-recommendation.md` - Source of the chosen direction
  - Pattern: `.sisyphus/drafts/portfolio-proof-inventory.md` - Gating dependencies and content readiness
  - Pattern: `.sisyphus/drafts/portfolio-current-state-audit.md` - Existing technical and IA constraints

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-priority-backlog.md` exists with `Now`, `Next`, and `Later` sections
  - [ ] The backlog contains no more than 10 items total
  - [ ] Every backlog item contains `Surface`, `Why`, `Dependency`, and `Expected Outcome`
  - [ ] At least 3 `Now` items are fully aligned with the primary recommendation and current proof readiness

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Backlog is realistic and sequencing-aware
    Tool: Read
    Steps: Read the recommendation and proof inventory; order actions so prerequisite content/trust fixes come before higher-level positioning or IA changes.
    Expected: Backlog sequencing is logical and immediately actionable.
    Evidence: .sisyphus/evidence/task-8-priority-backlog.md

  Scenario: A tempting action depends on missing proof or unresolved metadata/domain truth
    Tool: Read
    Steps: If an action requires content or platform decisions not yet ready, move it to `Next` or `Later` and note the gating dependency explicitly.
    Expected: The backlog never instructs immediate work on blocked items.
    Evidence: .sisyphus/evidence/task-8-priority-backlog-risk.md
  ```

  **Commit**: NO | Message: `docs(portfolio): prioritize recommendation backlog` | Files: [`.sisyphus/drafts/portfolio-priority-backlog.md`]

- [x] 9. Package an executive summary for user review

  **What to do**: Create `.sisyphus/drafts/portfolio-executive-summary.md` as the user-facing handoff. Keep it concise and decisive: current strengths, biggest gaps, chosen recommendation, rejected directions, and the first 3 actions to take. This document should be readable without opening the other drafts.
  **Must NOT do**: Do not restate every research detail or repeat full tables from prior deliverables. Do not introduce new strategic decisions here.

  **Recommended Agent Profile**:
  - Category: `writing` - Reason: executive summarization and stakeholder communication
  - Skills: `[]` - No special skill required; clarity is the goal
  - Omitted: `['requesting-code-review']` - This is a stakeholder brief, not a code-review request

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: [] | Blocked By: [7, 8]

  **References** (executor has NO interview context - be exhaustive):
  - Pattern: `.sisyphus/drafts/portfolio-site-recommendation.md` - Primary source of recommendation language
  - Pattern: `.sisyphus/drafts/portfolio-priority-backlog.md` - Source of the first actions
  - Pattern: `.sisyphus/drafts/portfolio-reference-matrix.md` - Supports the recommendation rationale

  **Acceptance Criteria** (agent-executable only):
  - [ ] `.sisyphus/drafts/portfolio-executive-summary.md` exists and fits within roughly one page of markdown
  - [ ] Summary includes `What Works`, `What Holds the Site Back`, `Recommended Direction`, `Do Not Do Yet`, and `First 3 Actions`
  - [ ] The recommendation language matches Task 7 and does not introduce contradictions

  **QA Scenarios** (MANDATORY - task incomplete without these):
  ```
  Scenario: Executive summary aligns with the deeper recommendation
    Tool: Read
    Steps: Read the recommendation and backlog; compress them into a one-page brief without changing the chosen direction or the first-priority actions.
    Expected: User-facing summary is concise, consistent, and decision-ready.
    Evidence: .sisyphus/evidence/task-9-executive-summary.md

  Scenario: Summary becomes too vague or drifts from the recommendation
    Tool: Read
    Steps: If the summary drops key constraints, rejected alternatives, or first actions, revise it until it remains short but still decision-complete.
    Expected: Brevity does not remove the actionable recommendation.
    Evidence: .sisyphus/evidence/task-9-executive-summary-revision.md
  ```

  **Commit**: NO | Message: `docs(portfolio): package executive summary` | Files: [`.sisyphus/drafts/portfolio-executive-summary.md`]

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback -> fix -> re-run -> present again -> wait for okay.
- [x] F1. Plan Compliance Audit — oracle
- [x] F2. Code Quality Review — unspecified-high
- [x] F3. Real Manual QA — unspecified-high (+ playwright if UI)
- [x] F4. Scope Fidelity Check — deep

## Commit Strategy
- Default: **NO commit**. This plan produces research and recommendation artifacts first.
- If the user later wants the research artifacts versioned, create a single docs-style commit covering `.sisyphus/drafts/*` outputs only.

## Success Criteria
- The executor can complete the research without making further strategy decisions.
- Every recommendation is traceable to repo evidence, UX evidence, or scored external references.
- The final recommendation clearly states what to change, what not to change, and why.
- The user can choose to either act on the recommendation or request a follow-up implementation plan with no ambiguity.
