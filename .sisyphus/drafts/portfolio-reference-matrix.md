# Portfolio Reference Matrix

This matrix reduces the longlist to five high-signal references scored against the specific needs of this repository. The goal is to identify patterns that solve current IA divergence, mobile reachability, and proof-packaging gaps.

## Scored Reference Matrix

| Reference | URL | Audience Fit | Proof Style | Motion Style | CTA Style | Transferability | Scores (C/P/M/Mo/CTA/T) | Total | Borrow / Avoid |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Lee Robinson** | https://leerob.com/ | Developers, Hiring Managers | Compact career lineage + direct code/writing links | Minimal, profile-like | Soft but explicit exploration paths | High (Hero/Contact) | 24 / 18 / 14 / 10 / 14 / 10 | **90** | **Borrow:** Identity compression, fast-scan hero. **Avoid:** Sparse project detail. |
| **Eleventy8** | https://eleventy8.com/ | Clients, Hiring Managers | Decision-led case studies (Problem/Outcome) | Restrained, structural | Direct "Get in Touch" | High (Project Narrative) | 22 / 25 / 12 / 9 / 13 / 8 | **89** | **Borrow:** Trade-off narration, senior voice. **Avoid:** Service-platform sprawl. |
| **Josh W. Comeau** | https://www.joshwcomeau.com/ | Engineers, Learners | Educational authority + interactive writing | Polished but restrained | Clear exploration/follow paths | Medium-High (Editorial) | 21 / 23 / 14 / 9 / 14 / 8 | **89** | **Borrow:** Content-led credibility, motion polish. **Avoid:** Course-business focus. |
| **Abul Khoyer** | https://abulkhoyer.com/ | Design-conscious peers | Implementation-as-proof (Tokens/UX) | Deliberate, low-volume | Soft, publication-like | High (Technical Judgment) | 20 / 24 / 13 / 10 / 12 / 9 | **88** | **Borrow:** Showing judgment/decisions. **Avoid:** Low-urgency posture. |
| **Jack Morgan** | https://jackmorgan.com/ | Recruiters, Collaborators | High-status brand halo + highlight reel | Minimal, imagery-led | Simple top-level paths | Medium (Role Clarity) | 25 / 22 / 13 / 9 / 12 / 7 | **88** | **Borrow:** Immediate role clarity. **Avoid:** Brand-name dependence. |

**Scoring Rubric (Weighted):**
- **Clarity of Positioning (25):** How fast can a visitor understand the role and level?
- **Proof Depth (25):** Does the evidence show decisions and outcomes, not just titles?
- **Mobile Ergonomics (15):** How well does the IA and content translate to small screens?
- **Motion Restraint (10):** Does motion support the content or distract from it?
- **CTA Quality (15):** Are the next steps obvious and low-friction?
- **Transferability to This Repo (10):** How directly does it solve current audit issues?

## Top-Ranked Reference Justification

**Lee Robinson (90/100)** is the top-ranked reference because it provides the most direct solution to the repository's primary friction points: hero section clarity and contact path visibility. While Eleventy8 and Abul Khoyer offer deeper project-narrative models, Lee’s site demonstrates how to compress identity and credibility into a fast-scanning profile that works at recruiter speed. This "profile-as-portfolio" pattern is highly transferable to the current Next.js structure without requiring a total content overhaul.

## Promising-But-Rejected References

| Reference | URL | Rejection Reason |
| :--- | :--- | :--- |
| **Bruno Simon** | https://bruno-simon.com/ | **Spectacle Over Speed:** While technically impressive, the 3D driving interface is a novelty that slows down information retrieval. The core lesson (product-as-proof) is valuable, but the interaction model is the opposite of the "recruiter-speed" goal required for this repo. |
| **Simon Pan** | https://simonpan.com/ | **Unverifiable:** The live site returned a `401 Unauthorized` error during the audit phase. A reference that cannot be reliably accessed or verified cannot serve as a defensible model for implementation. |

## Key Takeaways for Synthesis

1. **Clarity Beats Spectacle:** The highest-scoring references (Lee Robinson, Jack Morgan) prioritize immediate role understanding over visual effects.
2. **Decisions are Proof:** Abul Khoyer and Eleventy8 prove seniority by narrating *why* things were built, which is the missing link for this repo's current "repo-card" project style.
3. **IA Parity:** The best references maintain a consistent experience across viewports, highlighting the need to fix the current mobile/desktop divergence in this repo.
