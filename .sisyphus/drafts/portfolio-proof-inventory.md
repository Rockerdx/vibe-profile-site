# Portfolio Proof Inventory

This document inventories and grades the major proof and trust assets available in the current repository. Each asset is evaluated for its readiness to be surfaced or promoted to visitors.

## Asset Inventory

| Asset | Source | Audience Value | Verification Status | Recommendation Status | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Experience Timeline** | `src/lib/data.ts` | High | Verifiable (LinkedIn) | **Promotable Now** | Detailed achievements and tech stack for 5+ years of experience. |
| **Projects** | `src/lib/data.ts` | High | Verifiable (GitHub) | **Promotable Now** | Strong technical proof; currently presented as repo cards. Could be elevated to case studies. |
| **GitHub Stats** | `src/lib/api-data.ts` | Medium-High | Verifiable (GitHub) | **Promotable Now** | Real-time activity signals (contributions, stars, languages). |
| **Resume Download** | `src/components/Hero.tsx` | High | Functional | **Promotable Now** | Essential for hiring managers; API-coupled download flow. |
| **Contact Form** | `src/components/Contact.tsx` | High | Functional | **Promotable Now** | Primary conversion path; includes social links. |
| **Education** | `src/lib/data.ts` | Medium | Verifiable | **Promotable Now** | Bachelor's in Computer Science. |
| **Certifications** | `src/lib/data.ts` | Medium | Verifiable | **Promotable Now** | Facilitator and Mentor roles at Binar/Bangkit Academy. |
| **Blog** | `src/lib/api-data.ts` | Medium | Fragile | **Needs Rewrite/Verification** | Reachability issues on mobile IA; empty-array fallback removes signal on API failure. |
| **Testimonials** | `src/lib/data.ts` | High | **Unverifiable** | **Do Not Surface Yet** | Currently uses placeholder LinkedIn URLs (`example1`, etc.). Not rendered in current IA. |

## Grading Definitions

- **Promotable Now**: Asset is high-quality, verifiable, and ready for primary surfacing.
- **Needs Rewrite/Verification**: Asset has potential but requires content updates, reachability fixes, or technical robustness.
- **Do Not Surface Yet**: Asset is placeholder, unverifiable, or lacks sufficient quality to act as a trust signal.

## Detailed Findings

### 1. Projects (Promotable Now)
The projects are currently surfaced as GitHub repository cards. While they provide good technical proof, they lack the narrative depth of case studies. The tech stack is well-defined, and links are functional.
- **Source Path**: `src/lib/data.ts:153-200`
- **Implication**: Keep as primary proof, but consider adding "Problem/Solution" context to the descriptions.

### 2. GitHub Stats (Promotable Now)
The site uses an API-first approach to fetch real-time GitHub statistics. This is a strong signal for a developer portfolio.
- **Source Path**: `src/lib/api-data.ts:87-94`
- **Implication**: Maintain as a secondary proof surface to validate active development.

### 3. Blog (Needs Rewrite/Verification)
The blog fetches articles from Medium. However, the current mobile IA excludes the blog from the bottom navigation, making it unreachable for mobile users. Additionally, the fetch failure fallback is an empty array, which silently removes the proof surface.
- **Source Path**: `src/lib/api-data.ts:101-109`, `src/components/MobileBottomNav.tsx:21-28`
- **Implication**: Fix mobile reachability and consider a static fallback for "Featured Articles" to ensure the signal is always present.

### 4. Testimonials (Do Not Surface Yet)
The testimonials in `src/lib/data.ts` use placeholder LinkedIn URLs (e.g., `https://www.linkedin.com/in/example1`). Surfacing these would damage credibility. They are currently imported but not rendered in the homepage composition.
- **Source Path**: `src/lib/data.ts:295-336`, `src/app/page.tsx:58-78`
- **Implication**: **Hold**. Do not surface until real, verifiable testimonials are collected and attributed.

## Summary: Promote / Repair / Hold

### Promote
- **Experience Timeline**: Strongest proof of seniority and transition from Android to Backend.
- **GitHub Stats**: Validates current activity and technical breadth.
- **Projects**: Verifiable technical proof via GitHub repository cards.
- **Resume/Contact**: Functional and essential for conversion.

### Repair
- **Blog**: Fix mobile reachability and data robustness (static fallback).

### Hold
- **Testimonials**: Keep unsurfaced until placeholder data is replaced with verifiable social proof.
- **Mobile IA**: The current tab-based model prevents discovery of "secondary" proof like the blog.
