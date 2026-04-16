# Portfolio Site Recommendation

This recommendation provides a roadmap for evolving the current Next.js portfolio into a high-signal professional platform. It prioritizes the needs of hiring managers and recruiters while maintaining technical depth for peers.

## Primary Direction

The site should adopt a **clarity-first hero + evidence-led project storytelling + selectively surfaced thought leadership** model. This approach moves away from generic developer branding toward a senior backend and product engineer identity. It focuses on technical judgment and outcome-driven implementation rather than just listing tools.

## Why This Fits

This direction directly addresses the "recruiter-speed" requirement identified in the audience model. By compressing identity into a fast-scanning hero section, the site allows visitors to validate role fit in under 30 seconds. It leverages the repository's existing strengths in experience and GitHub activity while fixing the current gap in project narrative depth. The model is grounded in the high-scoring Lee Robinson reference for clarity and the Eleventy8 model for proof depth.

## Section-by-Section Guidance

### Hero Section
- **Identity Compression**: Adopt the Lee Robinson pattern of a compact, high-density summary.
- **Role Headline**: Use a specific headline like "Senior Backend & Product Engineer" to signal seniority immediately.
- **Primary CTAs**: Ensure "Download Resume" and "Get in Touch" are the most prominent actions above the fold.

### Projects Section
- **Decision-Led Narratives**: Transition from simple repository cards to short case studies.
- **Content Rubric**: For each project, narrate the problem, technical trade-offs, and business outcomes.
- **Judgment as Proof**: Show why specific architectures were chosen, which validates senior-level judgment for hiring managers.

### Blog Section
- **Mobile Reachability**: Add the Blog to the mobile bottom navigation or a secondary menu to fix the current IA gap.
- **Data Robustness**: Implement a static fallback for "Featured Articles" to prevent the section from disappearing if the API fails.
- **Editorial Tone**: Maintain a professional, technical voice that reinforces authority without becoming a tutorial site.

### Experience & GitHub Stats
- **Scannable Timeline**: Keep the detailed achievements but ensure the tech stack for each role is instantly visible.
- **Secondary Signal**: Maintain GitHub stats as a background signal of active development and ecosystem participation.

### Testimonials
- **Hold Status**: Keep this section hidden. Surfacing the current placeholder data would damage professional credibility.

## Rejected Alternatives

### 1. Spectacle-First / 3D Interaction
- **Evidence for Rejection**: The Bruno Simon reference analysis showed that while 3D interfaces are impressive, they slow down information retrieval.
- **Rationale**: A "recruiter-speed" goal requires zero friction. Forcing a hiring manager to navigate a 3D environment to find a resume is a conversion killer for senior backend roles.

### 2. Agency / Service-Platform Positioning
- **Evidence for Rejection**: The current proof inventory lacks the verifiable testimonials and service packages required for a credible agency brand.
- **Rationale**: Attempting an agency repositioning now would create IA sprawl and dilute the primary "Senior Engineer" placement goal. It is better to excel as an individual operator than to appear as a low-trust agency.

## Not Recommended / Not Now

- **Educational Content**: Do not pivot into a tutorial or course platform. It distracts from the professional placement objective.
- **Placeholder Social Proof**: Never surface testimonials until they are real, attributed, and verifiable.
- **Complex Motion**: Avoid animation-heavy transitions that distract from the technical content or slow down mobile performance.

## Prerequisites

1. **IA Parity**: Fix the mobile shell so the Blog is reachable.
2. **Domain Consistency**: Reconcile the metadata and canonical URLs to point to `me.rockerdx.site` instead of the GitHub Pages default.
3. **Data Safety**: Add static fallbacks for all API-driven sections to ensure the site remains a valid proof surface during downtime.
4. **Asset Quality**: Replace all placeholder links in the data files with live, professional destinations.
