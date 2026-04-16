# Resume Audit Report

**Date:** 2026-04-16  
**Auditor:** Sisyphus-Junior  
**Task:** Task 5 - Resume content audit & ATS analysis

---

## Resume Location

| Attribute | Value |
|-----------|-------|
| **Status** | NOT FOUND |
| **Path** | N/A - No PDF exists in repository |
| **Format** | N/A |
| **Generation Code** | EXISTS at `src/lib/resume.ts` |

### Search Locations Checked
- [x] Root directory - No PDF files
- [x] `public/` directory - Contains only `images/` subdirectory
- [x] `docs/` directory - Does not exist
- [x] `assets/` directory - Does not exist
- [x] `src/lib/` - Contains `resume.ts` (generation code only)
- [x] Full repository `find` - No PDF files anywhere

---

## Current Resume Generation Analysis

### Existing Code: `src/lib/resume.ts`

The repository contains resume generation code using **pdfmake** library. This generates PDFs dynamically in the browser.

#### Technical Details
- **Library:** pdfmake (client-side PDF generation)
- **Font:** Roboto (custom font, not ATS-optimized)
- **Page Size:** A4
- **Color Scheme:** Dark theme (background: #0a0a0a, surface: #171717)

#### Current Layout Structure
```
HEADER
  - Name (centered, large)
  - Title (centered, accent color)
  - Location | Email (centered)

SECTIONS
  1. Professional Summary (paragraph)
  2. Experience (table-based layout)
  3. Skills (3-column layout)
  4. Projects (stack layout)
  5. Education (stack layout)
  6. Certifications (bullet list)
```

---

## ATS Issues Identified

### Critical Issues (Will Block ATS Parsing)

| Issue | Current Implementation | Impact |
|-------|----------------------|--------|
| **Tables for Layout** | Experience section uses `table: { widths: ['*', '*'], body: [...] }` | ATS cannot parse table-based layouts correctly; content may appear out of order |
| **Multi-column Skills** | Skills displayed in 3 columns using `columns: [...]` | ATS reads columns left-to-right across rows, creating jumbled output |
| **Custom Fonts** | Uses Roboto font | Some ATS systems cannot parse non-standard fonts; may default to system font or fail |
| **Dark Background** | Background color: #0a0a0a | May cause contrast issues; some ATS strip colors and leave unreadable text |
| **Color-dependent Structure** | Heavy reliance on accent colors for section separation | ATS ignores colors; structure becomes unclear |
| **No Plain Text Fallback** | PDF is the only output format | No ATS-optimized plain text version available |

### Moderate Issues

| Issue | Current Implementation | Impact |
|-------|----------------------|--------|
| **No Standard Section Headers** | Uses styled text with underlines | ATS prefers standard headers: "EXPERIENCE", "EDUCATION", "SKILLS" |
| **Graphics/Decorations** | Underline decorations on section titles | May be interpreted as content by some ATS |
| **Complex Formatting** | Nested stacks, margins, conditional rendering | Increases PDF complexity; may confuse simpler ATS parsers |

---

## Content Analysis

### Source: `src/lib/data.ts`

All resume content is centralized in the data file, making it easy to generate multiple resume variants.

### Keywords Extracted

#### Programming Languages
- Kotlin (primary mobile language)
- Java (Android, backend, teaching)
- Go/Golang (current backend focus)
- Dart (Flutter)
- Python (TensorFlow, deep learning)
- TypeScript (Vue.js, portfolio site)

#### Frameworks & Platforms
- Android Framework
- Android (versions across devices)
- Flutter (cross-platform)
- Spring / Spring Boot (backend)
- Vue.js (frontend)
- Gin (Go web framework - inferred from backend)

#### Backend & Infrastructure
- Golang
- PostgreSQL
- gRPC
- Microservices
- Redis
- Kafka
- REST API
- Event-driven architecture

#### Databases & Storage
- PostgreSQL (primary)
- SQLite (mobile)
- Redis (caching)

#### Mobile & UI
- Mobile Application Development
- Mobile Product Development
- Android Framework
- Custom View Components
- Performance Optimization
- Memory Management

#### Cloud & DevOps (Limited Coverage)
- Docker (inferred from deployment)
- Git/GitHub
- CI/CD (implied)

#### APIs & Integrations
- Google Maps API
- TheMovieDB API
- Logistics API
- TensorFlow Lite
- OVO Digital Wallet

#### Methodologies
- Internal Mobility
- Cross-functional Collaboration
- Performance Optimization
- Memory Management
- RESTful API Design
- Microservices Architecture
- Event-Driven Architecture

### Missing Keywords (Should Add)

Based on current role and industry standards:

| Category | Missing Keywords |
|----------|------------------|
| **Cloud** | AWS, GCP, Azure, Kubernetes, Terraform |
| **DevOps** | CI/CD, Jenkins, GitHub Actions, Docker Compose |
| **Monitoring** | Prometheus, Grafana, Datadog, New Relic |
| **Testing** | Unit Testing, Integration Testing, TDD, JUnit, Go Testing |
| **Version Control** | Git, GitHub, GitLab, Bitbucket |
| **Agile** | Scrum, Kanban, Agile, Sprint Planning |
| **Security** | OAuth, JWT, Authentication, Authorization |
| **Tools** | Jira, Confluence, Postman, Swagger |

---

## Quantified Achievements from data.ts

### High-Impact Metrics

| Metric | Context | Source |
|--------|---------|--------|
| **30-50%** | API response time improvement | PostgreSQL optimization at Stockbit |
| **5%** | OOM crash reduction | Android memory optimization at Stockbit |
| **10-30%** | Render/layout efficiency improvement | Android performance optimization |
| **20%** | UI development time reduction | Reusable custom view components |
| **15%** | Transaction completion rate increase | OVO payment integration at Do-It |
| **1M+** | Active users served | Multiple apps (Stockbit, Do-It) |
| **50K+** | Daily active users | Authentication system at Do-It |
| **1M+** | App downloads | Do-It apps |
| **4.5+** | Star rating | Do-It apps on Play Store |
| **2 years 8 months** | Backend experience | Stockbit (current role) |
| **5+ years** | Total engineering experience | Career span |

---

## Requirements for ATS-Optimized Version

### Layout Requirements

| Requirement | Specification | Rationale |
|-------------|---------------|-----------|
| **Structure** | Single-column, top-to-bottom flow | ATS reads linearly; multi-column causes parsing errors |
| **Margins** | Standard 1-inch margins | Ensures content is not cut off during parsing |
| **Page Size** | Standard US Letter or A4 | Universal compatibility |
| **Length** | 1-2 pages maximum | ATS and recruiters prefer concise resumes |

### Font Requirements

| Requirement | Specification | Rationale |
|-------------|---------------|-----------|
| **Font Family** | Arial, Calibri, or Times New Roman | Universally recognized by all ATS systems |
| **Font Size** | 10-12pt for body, 14-16pt for headers | Readable by ATS and humans |
| **Formatting** | No special characters, no icons | ATS may not parse symbols correctly |

### Section Order (ATS-Optimized)

```
1. CONTACT INFORMATION
   - Full Name
   - Phone Number
   - Email Address
   - LinkedIn URL
   - GitHub URL
   - Location (City, State)

2. PROFESSIONAL SUMMARY
   - 3-4 sentences
   - Include target role and years of experience
   - Mention 2-3 key skills

3. TECHNICAL SKILLS
   - Group by category (Languages, Frameworks, Databases, Tools)
   - Comma-separated list (not bullet points)
   - Include all relevant keywords

4. PROFESSIONAL EXPERIENCE
   - Reverse chronological order
   - Company Name, Location
   - Job Title
   - Dates (Month Year - Month Year)
   - 3-5 bullet points per role
   - Start with action verbs
   - Include quantified achievements

5. PROJECTS (Optional, for senior roles)
   - Project Name
   - Technologies Used
   - 1-2 bullet points describing impact

6. EDUCATION
   - Degree, Major
   - Institution Name
   - Graduation Date

7. CERTIFICATIONS (Optional)
   - Certification Name
   - Issuing Organization
   - Date (if recent)
```

### Content Requirements

| Element | Requirement |
|---------|-------------|
| **Bullet Points** | Start with strong action verbs: Architected, Optimized, Designed, Implemented, Reduced, Improved |
| **Quantification** | Every bullet should include a number, percentage, or scale |
| **Keywords** | Include job description keywords naturally throughout |
| **Acronyms** | Spell out first use, then use acronym: "Amazon Web Services (AWS)" |
| **Dates** | Consistent format: "Jan 2023 - Present" or "01/2023 - Current" |
| **File Name** | "Muhammad_Rizki_Putra_Resume.pdf" or "Rizki_Putra_Backend_Engineer.pdf" |

### Technical Requirements

| Requirement | Specification |
|-------------|---------------|
| **File Format** | PDF (preferred) or DOCX |
| **PDF Version** | PDF 1.4 or earlier (most compatible) |
| **File Size** | Under 2MB |
| **Graphics** | None - no photos, icons, charts, or skill bars |
| **Headers/Footers** | None - ATS may strip them |
| **Tables** | None - use standard text layout |
| **Text Encoding** | UTF-8 standard characters only |

---

## Requirements for Web Variant

### URL & Access

| Requirement | Specification |
|-------------|---------------|
| **URL** | `/resume` or `/resume.pdf` |
| **Navigation** | Link from main navigation menu |
| **SEO** | Meta tags for "Muhammad Rizki Putra Resume" |

### Features

| Feature | Implementation |
|---------|----------------|
| **QR Code** | Generate QR code linking to `/resume` page |
| **Download Button** | "Download PDF" button using existing `downloadResume()` function |
| **Print-Friendly** | CSS `@media print` styles for clean printing |
| **Responsive** | Mobile-optimized layout |
| **Dark/Light Toggle** | Respect user preference, default to dark |

### Content Strategy

| Element | Approach |
|---------|----------|
| **ATS Version** | Link to download ATS-optimized PDF |
| **Web Version** | Visually enhanced with icons, colors, animations |
| **QR Code Placement** | Bottom of page, links to live resume URL |
| **Contact CTA** | "Hire Me" or "Contact" button at bottom |

---

## Action Items

### Immediate (Task 11, 12 Prerequisites)

1. **Create ATS-Optimized Resume Generator**
   - New file: `src/lib/resume-ats.ts`
   - Single-column layout
   - Standard fonts (Arial/Calibri)
   - No tables, no multi-column
   - Plain text emphasis

2. **Create Web Resume Page**
   - New file: `src/app/resume/page.tsx`
   - Visual design matching portfolio
   - QR code generation
   - Download buttons for both variants

3. **Add Missing Keywords to data.ts**
   - Cloud platforms (AWS, GCP)
   - DevOps tools (Docker, CI/CD)
   - Testing methodologies
   - Version control emphasis

### Future Enhancements

4. **Resume Version Management**
   - Track versions: ATS, Web, Backend-focused, Mobile-focused
   - A/B test different summaries

5. **Automated Keyword Optimization**
   - Parse job descriptions
   - Suggest keyword additions to data.ts

---

## Conclusion

**Status:** Resume generation infrastructure exists but requires significant ATS optimization.

**Key Finding:** The current `src/lib/resume.ts` uses pdfmake with table-based layouts and multi-column designs that will cause ATS parsing failures. A new ATS-optimized generator is required.

**Recommendation:** 
1. Keep existing `resume.ts` for web visual appeal
2. Create new `resume-ats.ts` with single-column, standard-font, keyword-optimized layout
3. Both should source from `src/lib/data.ts` for consistency
4. Add missing cloud/DevOps keywords to data.ts to improve ATS matching

**Next Steps:** Tasks 11 and 12 can proceed with clear requirements documented above.

---

*Report generated by Sisyphus-Junior as part of portfolio-resume-optimization plan.*
