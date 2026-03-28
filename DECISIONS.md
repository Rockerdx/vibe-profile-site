# Architecture Decision Records (ADRs)

This document tracks significant architectural decisions made for the vibe-profile-site project.

---

## ADR-001: Use Next.js 14 with App Router

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Need a modern React framework for building a static profile website with:
- Server-side rendering for SEO
- Simple deployment
- Good performance out of the box
- TypeScript support

### Decision
Use Next.js 14 with the App Router (not Pages Router).

### Rationale
- **App Router** is the future of Next.js (Pages Router is legacy)
- Built-in optimizations (image, font, script)
- Server Components by default (better performance)
- Easier file-based routing
- Better TypeScript integration

### Consequences
**Positive:**
- ✅ Excellent performance scores
- ✅ SEO-friendly
- ✅ Easy Vercel/Docker deployment
- ✅ Great developer experience

**Negative:**
- ❌ Learning curve for team unfamiliar with App Router
- ❌ Some third-party libraries not yet App Router compatible

### Compliance
- All new components use App Router patterns
- No `getStaticProps` or `getServerSideProps` (use Server Components instead)

---

## ADR-002: Single Data Source in src/lib/data.ts

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Profile data (name, experience, skills, projects) needs to be:
- Easy to update
- Type-safe
- Centralized (no duplication)
- Editable without touching components

### Decision
Store ALL profile data in a single TypeScript file: `src/lib/data.ts`

### Rationale
- **Simplicity:** No database, no CMS, no API calls
- **Type Safety:** TypeScript interfaces ensure data consistency
- **Easy Updates:** Change one file to update all content
- **Agent-Friendly:** AI agents can easily find and modify data

### Consequences
**Positive:**
- ✅ No database setup required
- ✅ No API layer needed
- ✅ Instant updates (no cache invalidation)
- ✅ Easy for AI agents to understand and modify

**Negative:**
- ❌ Requires rebuild to update content (not dynamic)
- ❌ Not suitable for frequently changing content
- ❌ All data in one file (could become large)

### Mitigation
- Keep data file organized with clear sections
- Use TypeScript to catch errors early
- For dynamic content in future, consider headless CMS

---

## ADR-003: Dark Mode Default

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Profile website should have a modern, professional appearance. Target audience is tech industry (recruiters, hiring managers, peers).

### Decision
Use dark mode as the default (and only) theme.

### Rationale
- **Developer Preference:** Dark mode preferred by most developers
- **Modern Aesthetic:** Dark themes are trendy in tech
- **Simplicity:** No theme toggle needed (reduces complexity)
- **Battery:** OLED screens save battery with dark mode

### Consequences
**Positive:**
- ✅ Consistent branding
- ✅ Simpler codebase (no theme state)
- ✅ Appeals to target audience

**Negative:**
- ❌ Less accessible for users with light sensitivity
- ❌ Some users prefer light mode

### Future Consideration
Add light mode toggle if user feedback indicates demand.

---

## ADR-004: Use Tailwind CSS for Styling

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Need a CSS solution that is:
- Easy to maintain
- Consistent across components
- Agent-friendly (AI can understand patterns)
- Performant (small bundle size)

### Decision
Use Tailwind CSS with utility-first approach.

### Rationale
- **Consistency:** Design tokens via config
- **Speed:** Rapid prototyping
- **Bundle Size:** PurgeCSS removes unused styles
- **AI-Friendly:** Clear, predictable patterns

### Consequences
**Positive:**
- ✅ Fast development
- ✅ Consistent design system
- ✅ Small production bundle
- ✅ Easy for AI agents to modify

**Negative:**
- ❌ Verbose class names
- ❌ Learning curve for non-Tailwind developers

### Guidelines
- Use Tailwind utilities for 95% of styling
- Only use custom CSS in `globals.css` for design tokens
- Follow mobile-first responsive pattern

---

## ADR-005: Use Framer Motion for Animations

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Website should have smooth, professional animations that:
- Work on all devices
- Respect user preferences
- Are easy to implement
- Don't hurt performance

### Decision
Use Framer Motion library for all animations.

### Rationale
- **React-Native:** Built for React, declarative API
- **Performance:** GPU-accelerated animations
- **Accessibility:** Built-in `prefers-reduced-motion` support
- **Simplicity:** Easy to add subtle animations

### Consequences
**Positive:**
- ✅ Smooth 60fps animations
- ✅ Easy to implement
- ✅ Accessibility built-in
- ✅ Consistent animation patterns

**Negative:**
- ❌ Additional bundle size (~15KB gzipped)
- ❌ Learning curve for complex animations

### Guidelines
- All section entrances use fade-in + slide-up
- Respect `prefers-reduced-motion` media query
- Keep animations subtle (300-500ms duration)
- Use `viewport={{ once: true }}` to avoid re-animating

---

## ADR-006: Docker-First Deployment

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Website needs to be deployed to:
- Homelab server (self-hosted)
- Potentially other environments
- With consistent behavior across environments

### Decision
Use Docker containerization for all deployments.

### Rationale
- **Consistency:** Same container everywhere
- **Isolation:** No dependency conflicts
- **Simplicity:** One command to deploy
- **Portability:** Easy to move between hosts

### Consequences
**Positive:**
- ✅ Deploy anywhere Docker runs
- ✅ No "works on my machine" issues
- ✅ Easy rollback (previous image)
- ✅ Resource isolation

**Negative:**
- ❌ Slightly longer build times
- ❌ Docker knowledge required

### Deployment Pattern
```bash
docker-compose up -d --build
```

---

## ADR-007: TypeScript Strict Mode

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Codebase should be:
- Type-safe
- Easy to refactor
- Self-documenting
- Catch errors early

### Decision
Enable TypeScript strict mode with no exceptions.

### Rationale
- **Safety:** Catch errors at compile time
- **Documentation:** Types serve as documentation
- **Refactoring:** Confident code changes
- **AI-Friendly:** Clear type contracts for agents

### Consequences
**Positive:**
- ✅ Fewer runtime errors
- ✅ Better IDE autocomplete
- ✅ Easier onboarding for new developers
- ✅ AI agents understand data structures

**Negative:**
- ❌ More verbose code
- ❌ Initial setup time for types

### Guidelines
- No `any` type (use proper interfaces)
- All props must be typed
- Return types on functions
- Strict null checks enabled

---

## ADR-008: Component-per-File Structure

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Components should be:
- Easy to find
- Easy to understand
- Easy to modify
- Logically organized

### Decision
One component per file, named after the component.

### Rationale
- **Simplicity:** Clear file structure
- **Discoverability:** Easy to find components
- **Maintainability:** Small, focused files
- **AI-Friendly:** Predictable patterns

### File Naming
```
src/components/
├── Hero.tsx
├── About.tsx
├── Experience.tsx
├── Skills.tsx
├── Projects.tsx
└── Contact.tsx
```

### Consequences
**Positive:**
- ✅ Clear organization
- ✅ Easy to navigate
- ✅ Simple merge conflicts

**Negative:**
- ❌ More files to manage
- ❌ Some code duplication possible

---

## ADR-009: No Backend Required

**Date:** 2024-02-01  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Profile website is primarily informational with:
- Static content (bio, experience, projects)
- External links (GitHub, LinkedIn, Email)
- No user accounts
- No dynamic content

### Decision
Build as a static site with no backend.

### Rationale
- **Simplicity:** Less to maintain
- **Cost:** No server costs (static hosting)
- **Security:** No attack surface
- **Performance:** Pre-rendered content

### Consequences
**Positive:**
- ✅ No database to manage
- ✅ No API to maintain
- ✅ No security vulnerabilities
- ✅ Fast page loads

**Negative:**
- ❌ No dynamic features (contact form, analytics)
- ❌ Requires rebuild for content updates

### Future Consideration
Add serverless functions (Vercel/AWS Lambda) if dynamic features needed.

---

## ADR-010: AI Agent Optimization

**Date:** 2026-03-28  
**Status:** Accepted  
**Deciders:** Muhammad Rizki Putra

### Context
Project should be workable by AI coding agents (Claude Code, Cursor, etc.) including cheaper models with limited context windows.

### Decision
Add comprehensive documentation specifically for AI agents:
- AGENTS.md (primary instructions)
- QUICKREF.md (quick reference)
- ARCHITECTURE.md (visual diagrams)
- DECISIONS.md (decision history)

### Rationale
- **Accessibility:** Cheaper models can work on project
- **Efficiency:** Less context needed = lower costs
- **Consistency:** Agents follow same patterns
- **Future-Proof:** Any AI can understand the project

### Consequences
**Positive:**
- ✅ Lower AI usage costs
- ✅ Faster agent onboarding
- ✅ Consistent code quality
- ✅ Easier human onboarding too

**Negative:**
- ❌ Documentation maintenance overhead
- ❌ Initial time investment

### Guidelines
- Keep documentation concise (under 500 lines each)
- Use tables and code blocks for clarity
- Include copy-paste examples
- Update when patterns change

---

## Review Schedule

All ADRs should be reviewed:
- When adding major new features
- When technology stack changes
- Quarterly for relevance

## Change Process

To propose an ADR change:
1. Create new ADR with next sequential number
2. Document context, decision, consequences
3. Get approval from project maintainer
4. Update this document
5. Implement changes per ADR
