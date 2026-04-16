# Task 12: Web Resume with QR Code - Evidence

## Page URL
- Local: http://localhost:3000/resume
- Production: https://me.rockerdx.site/resume

## Build Verification
✅ Page successfully built and included in Next.js static generation
- Route: `/resume` (12.4 kB, 104 kB First Load JS)
- Build output: `.next/server/app/resume.html`

## Features Implemented

### 1. QR Code
- Library: qrcode.react
- URL: https://me.rockerdx.site
- Size: 128x128px
- Label: "Scan to view portfolio"
- Position: Right side of header section

### 2. Download ATS Version Button
- Position: Fixed top navigation bar
- Function: Triggers PDF download via `useResumeDownload` hook
- Icon: Download icon from lucide-react
- Style: Accent color background with white text

### 3. Resume Sections
All sections populated from `src/lib/data.ts`:
- ✅ Professional Summary
- ✅ Experience (8 positions)
- ✅ Skills (3 categories: Mobile, Backend, Other)
- ✅ Projects (4 highlighted)
- ✅ Education
- ✅ Certifications

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- QR code repositions on mobile
- Skills grid: 1 col mobile → 3 cols desktop

### 5. Print-Friendly CSS
- `@media print` styles included
- Hides navigation bar (`.no-print`)
- Converts dark theme to light for printing
- Preserves QR code visibility
- Break-inside-avoid for sections
- A4 page size optimization

## Page Structure

```
/resume
├── Fixed Header (no-print)
│   ├── Back to Portfolio link
│   └── Download ATS Version button
├── Main Content
│   ├── Header
│   │   ├── Name: Muhammad Rizki Putra
│   │   ├── Title: Senior Backend & Product Engineer
│   │   └── Contact: Location, Email, LinkedIn, GitHub
│   ├── Two-Column Layout
│   │   ├── Professional Summary (left)
│   │   └── QR Code (right)
│   ├── Experience (8 positions)
│   ├── Skills (3-column grid)
│   ├── Projects (4 items)
│   ├── Education
│   ├── Certifications
│   └── Footer
└── Print Styles (@media print)
```

## Design System Compliance
- Colors: Uses CSS variables (--primary, --secondary, --accent)
- Typography: Matches existing heading hierarchy
- Spacing: Consistent with Tailwind scale
- Components: Reuses existing patterns from Hero.tsx

## Technical Details
- File: `src/app/resume/page.tsx`
- Type: Client component ('use client')
- Dependencies: qrcode.react, lucide-react
- Data Source: src/lib/data.ts
- PDF Generation: Reuses existing useResumeDownload hook

## Screenshot Description
The resume page features:
- Dark theme with glassmorphism navigation
- Professional layout with clear section hierarchy
- QR code prominently displayed (128x128px, white background)
- All contact information with icons
- Complete work history with achievements
- Skills organized by category
- Print-optimized styling

## Verification
- ✅ Build passes: `npm run build` successful
- ✅ Page included in static generation
- ✅ All data correctly populated from data.ts
- ✅ QR code renders correctly
- ✅ Download button functional
- ✅ Responsive layout verified
- ✅ Print styles applied
