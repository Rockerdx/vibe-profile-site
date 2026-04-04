# Architecture - vibe-profile-site

## Overview

Static profile website built with Next.js 14 App Router, featuring a single-page layout with smooth scroll sections and Framer Motion animations.

## Component Hierarchy

```
app/page.tsx
├── Hero
├── About
├── Experience
├── Skills
├── Projects
└── Contact
```

## Data Flow

1. `types/index.ts` - Defines TypeScript interfaces
2. `lib/data.ts` - Exports profile data (single source of truth)
3. `components/` - Receives data via props
4. `app/page.tsx` - Composes all sections

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills grid
│   ├── Projects.tsx        # Projects showcase
│   └── Contact.tsx         # Contact section
├── lib/
│   └── data.ts             # Profile data
└── types/
    └── index.ts            # TypeScript definitions
```

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Deployment | Vercel (static) |

## Component Contracts

### Hero
- **Purpose:** Profile header with photo, name, title, CTAs
- **Data:** `profile` object from `data.ts`
- **Features:** Photo, name, title, location, social buttons
- **Animations:** Fade in + slide up

### About
- **Purpose:** Bio, education, certifications
- **Data:** `profile.summary`, `education`, `certifications`
- **Layout:** Two columns desktop, stacked mobile
- **Animations:** Stagger fade-in

### Experience
- **Purpose:** Work history timeline
- **Data:** `experiences[]` array
- **Layout:** Vertical timeline
- **Animations:** Slide in alternating

### Skills
- **Purpose:** Skills grid by category
- **Data:** `skills[]` array
- **Categories:** mobile, backend, other
- **Layout:** Responsive grid

### Projects
- **Purpose:** Project showcase
- **Data:** `projects[]` array
- **Layout:** Featured first, then grid
- **Features:** GitHub links, tech tags

### Contact
- **Purpose:** Contact CTA
- **Data:** `profile.email`, `profile.linkedin`
- **Animations:** Fade in + scale

## State Management

No global state. Static data from `data.ts` only.

## Styling Architecture

### Design Tokens (globals.css)
```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
  --primary: #0070f3;
  --secondary: #666666;
  --border: #333333;
}
```

### Tailwind Configuration
- Custom colors mapped to CSS variables
- Breakpoints: sm, md, lg, xl
- Dark mode default

## Performance Optimizations

1. Static generation at build time
2. Next.js Image optimization
3. Automatic code splitting
4. Tree shaking
5. Tailwind CSS purging

## Deployment

Static export to Vercel:
- `next.config.js`: `output: 'export'`
- Output directory: `dist`

## Security

- No backend (static site)
- No user input
- No database
- External links use `rel="noopener"`

## Accessibility

- Semantic HTML
- Keyboard navigation
- Focus states
- `prefers-reduced-motion` support

## Browser Support

Chrome, Firefox, Safari, Edge (latest)
Mobile: iOS Safari, Chrome Mobile
