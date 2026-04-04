# Architecture Decisions

## ADR-001: Next.js 14 with App Router

**Status:** Accepted

Use Next.js 14 App Router for static generation, TypeScript, and modern React patterns.

## ADR-002: Single Data Source

**Status:** Accepted

Store ALL profile data in `src/lib/data.ts`. No database, simple TypeScript file for easy updates.

## ADR-003: Dark Mode Default

**Status:** Accepted

Dark mode as default theme. No toggle currently (can be added later if needed).

## ADR-004: Tailwind CSS

**Status:** Accepted

Utility-first CSS with Tailwind. Design tokens in `globals.css`.

## ADR-005: Framer Motion

**Status:** Accepted

Use Framer Motion for animations. Respect `prefers-reduced-motion`.

## ADR-006: Vercel Static Deployment

**Status:** Accepted

Static export to Vercel via `output: 'export'` in `next.config.js`.

## ADR-007: TypeScript Strict

**Status:** Accepted

Strict mode enabled. No `any` types, all props typed.

## ADR-008: One Component Per File

**Status:** Accepted

Components in `src/components/` named by section (Hero.tsx, About.tsx, etc.)

## ADR-009: No Backend

**Status:** Accepted

Static site only. No database, no API, no server-side logic.

## ADR-010: AI-Friendly Documentation

**Status:** Accepted

AGENTS.md and QUICKREF.md for efficient AI agent onboarding.
