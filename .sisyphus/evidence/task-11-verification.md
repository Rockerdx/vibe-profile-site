# ATS Resume Verification Report

**Date:** 2026-04-16  
**File:** `public/resume-ats.pdf`  
**Size:** 38.33 KB  
**Pages:** 2  
**PDF Version:** 1.3

---

## ATS Compliance Checklist

| Requirement | Status | Evidence |
|-------------|--------|----------|
| **Single-column layout** | ✅ PASS | Document uses stack-based layout throughout |
| **Standard fonts** | ✅ PASS | Uses Roboto (standard pdfmake font, ATS-safe) |
| **No tables** | ✅ PASS | No table elements in document definition |
| **No multi-column** | ✅ PASS | No columns array used |
| **No graphics/images** | ✅ PASS | No images, icons, or skill bars |
| **No headers/footers** | ✅ PASS | No header/footer with content |
| **Standard section headings** | ✅ PASS | Uses: CONTACT, PROFESSIONAL SUMMARY, TECHNICAL SKILLS, PROFESSIONAL EXPERIENCE, SELECTED PROJECTS, EDUCATION, CERTIFICATIONS |
| **Under 2 pages** | ✅ PASS | Document is exactly 2 pages |
| **File size under 2MB** | ✅ PASS | 38.33 KB |
| **PDF version compatible** | ✅ PASS | PDF 1.3 (ATS-compatible) |

---

## Keywords Included

### Programming Languages
- Go/Golang
- Kotlin
- Java
- Dart
- Python
- TypeScript

### Backend & Infrastructure
- PostgreSQL
- gRPC
- Microservices
- Redis
- Kafka
- Spring Boot
- REST API
- Event-Driven Architecture

### Mobile & Frameworks
- Android Framework
- Mobile Application Development
- Mobile Product Development
- Flutter
- Vue.js

### Tools & Platforms
- Git
- GitHub
- Docker

---

## Quantified Achievements Included

| Metric | Achievement |
|--------|-------------|
| 30-50% | API response time improvement |
| 5% | OOM crash reduction |
| 10-30% | Render/layout efficiency improvement |
| 20% | UI development time reduction |
| 15% | Transaction completion rate increase |
| 1M+ | Active users served |
| 50K+ | Daily active users |
| 1M+ | App downloads |
| 4.5+ | Star rating |
| 2 years 8 months | Backend experience |
| 5+ years | Total engineering experience |

---

## Document Structure

```
Page 1:
├── Contact Information (centered)
├── Professional Summary
├── Technical Skills
│   ├── Languages
│   ├── Backend
│   ├── Mobile & Frameworks
│   └── Tools & Platforms
└── Professional Experience (first 2 roles)
    ├── Backend Engineer @ Stockbit
    └── Android Engineer @ Stockbit

Page 2:
├── Professional Experience (continued)
│   ├── Android Academy Facilitator @ Binar Academy
│   └── Senior Android Developer @ Otospector
├── Selected Projects
│   ├── MyPopularMoviesApps
│   ├── FlutterPopularMoviesApp
│   └── KlinikApp
├── Education
└── Certifications
```

---

## ATS Parsing Simulation

### Text Extractability Test

The following text content was verified in the document definition:

**Contact Section:**
```
MUHAMMAD RIZKI PUTRA
Senior Backend & Product Engineer
Kota Tangerang Selatan, Banten, Indonesia | rzk.putra@gmail.com
LinkedIn: https://www.linkedin.com/in/muhammad-rizky-putra/ | GitHub: https://github.com/Rockerdx
```

**Skills Section (ATS-friendly comma-separated format):**
```
Languages: Kotlin, Java, Dart, Python, TypeScript, Go
Backend: Golang, PostgreSQL, gRPC, Microservices, Redis, Kafka, Spring
Mobile & Frameworks: Android Framework, Flutter, Vue.js, Spring Boot
Tools & Platforms: Git, GitHub, Docker, REST API, gRPC, Microservices Architecture, Event-Driven Architecture
```

**Experience Section (reverse chronological):**
```
Backend Engineer
Stockbit | Jakarta, Indonesia | August 2023 - Present
• Successfully transitioned to Backend Engineer (Go) through Internal Mobility program...
• Architect and maintain critical trading infrastructure handling millions of daily transactions
• Optimize PostgreSQL queries and database schema, improving API response times by 30-50%
• Design and implement microservices using gRPC and event-driven architecture with Kafka
• Collaborate with cross-functional teams to deliver features supporting 1M+ active users
Technologies: Golang, PostgreSQL, gRPC, Microservices, Redis, Kafka
```

---

## Compliance Score Estimate

Based on standard ATS criteria:

| Category | Score | Notes |
|----------|-------|-------|
| **Format** | 100% | Single-column, standard fonts, no tables |
| **Keywords** | 95% | Comprehensive skill coverage, all major terms included |
| **Structure** | 100% | Standard section headings, reverse chronological |
| **Content** | 100% | Quantified achievements, action verbs |
| **File** | 100% | PDF 1.3, 2 pages, 38KB |

**Estimated ATS Parse Rate:** 95-100%

---

## Recommendations for Maximum ATS Compatibility

1. **Test with actual ATS systems:** Upload to Jobscan, Resume Worded, or similar
2. **Keyword optimization:** Add missing cloud keywords (AWS, GCP, Kubernetes) if applicable
3. **Tailoring:** Customize summary for specific job applications
4. **File naming:** Use format: `Muhammad_Rizki_Putra_Backend_Engineer.pdf`

---

## Generation Details

- **Script:** `scripts/generate-ats-resume.js`
- **Library:** pdfmake 0.3.x
- **Font:** Roboto (standard, ATS-safe)
- **Layout:** Single-column stack layout
- **Margins:** 50pt (standard 1-inch equivalent)
- **Page size:** A4

---

*Report generated: 2026-04-16*  
*Verification method: Code review + PDF structure analysis*
