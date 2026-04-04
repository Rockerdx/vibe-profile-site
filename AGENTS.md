# Agent Instructions - vibe-profile-site

## Quick Context
- **Project:** Professional profile website for Muhammad Rizki Putra (@Rockerdx)
- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, Go/Gin Backend, PostgreSQL
- **Frontend:** React components with animations, mobile-first responsive design
- **Backend:** Go API server with PostgreSQL database
- **Deployment:** Docker (self-hosted on homelab at http://192.168.0.106:3002)

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── Hero.tsx            # Profile header with CTAs
│   ├── About.tsx           # Bio + education + certifications
│   ├── Experience.tsx      # Work timeline
│   ├── Skills.tsx          # Skills grid by category
│   ├── Projects.tsx        # Project showcase
│   ├── Contact.tsx         # Contact section
│   ├── ContactForm.tsx     # Contact form with validation
│   ├── GitHubStats.tsx     # GitHub stats widget
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── sections/           # Mobile section wrappers
├── lib/
│   ├── data.ts             # Static data (fallback)
│   ├── api-data.ts         # API data fetching with fallback
│   ├── api/                # API client
│   └── resume.ts           # Resume PDF generation
├── types/
│   └── index.ts            # TypeScript interfaces
└── hooks/
    └── useReducedMotion.ts # Accessibility hook
```

## Data Sources

**Primary:** Go/Gin API (`http://localhost:8080`)
- `/api/profile` - Profile information
- `/api/experiences` - Work experiences
- `/api/skills` - Skills by category
- `/api/projects` - Projects
- `/api/education` - Education history
- `/api/certifications` - Certifications
- `/api/resume/download` - Download resume PDF
- `/health` - Health check

**Fallback:** Static data in `src/lib/data.ts` when API unavailable

## Common Tasks

### Update Profile Information
1. **Via API (Recommended):** Update seed data in backend, restart server
2. **Via Static Data (Fallback):** Edit `src/lib/data.ts` profile object, run `npm run build`

### Add New Experience
1. Add to backend database via API or seed data
2. Or edit `src/lib/data.ts` experiences array
3. Run `npm run build` to verify

### Add New Skill
1. Edit `src/lib/data.ts` skills array: `{ id: n, name: 'Skill', category: 'mobile'|'backend'|'other' }`
2. Run `npm run build`

### Add New Project
1. Edit `src/lib/data.ts` projects array following existing pattern
2. Set `highlighted: true` for featured projects
3. Run `npm run build`

### Modify Styling
1. Edit component in `src/components/*.tsx`
2. Use Tailwind classes (mobile-first with `md:`, `lg:` prefixes)
3. Maintain dark mode as default
4. Test responsive at 320px, 768px, 1280px

## Component Patterns

### Standard Component Structure
```typescript
'use client'  // If using Framer Motion animations

import { motion } from 'framer-motion'
import { IconName } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

interface ComponentProps {
  // Define props here
}

export default function ComponentName({ props }: ComponentProps) {
  const reducedMotion = useReducedMotion()
  
  return (
    <section id="section-name" className="section-container">
      <motion.div
        initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Content */}
      </motion.div>
    </section>
  )
}
```

### Animation with Stagger
```typescript
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: reducedMotion ? 0 : index * 0.1,
    }}
  >
    {/* Item content */}
  </motion.div>
))}
```

### API Data Fetching Pattern
```typescript
import { getProfileData } from '@/lib/api-data'

export default async function Page() {
  const profile = await getProfileData() // Auto-fallback to static data
  return <Hero profile={profile} />
}
```

## Validation Commands

```bash
# ALWAYS run before committing
npm run build    # Verify TypeScript compilation (must pass)
npm run lint     # Check code quality
npm test         # Run unit tests

# Development
npm run dev      # Development server at localhost:3000

# Docker deployment
./deploy.sh              # Deploy to production
./deploy.sh restart      # Restart container
./deploy.sh logs         # View logs
./deploy.sh status       # Check status
```

## Constraints

- ✅ KEEP TypeScript strict mode enabled
- ✅ MAINTAIN responsive design (mobile-first)
- ✅ PRESERVE dark mode as default (with light mode toggle)
- ✅ KEEP Framer Motion animations (respect `prefers-reduced-motion`)
- ✅ ALWAYS use API data with fallback to static data
- ✅ Test API connectivity before assuming static data

## Environment Variables

Frontend (`.env.local`):
```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Key TypeScript Interfaces

```typescript
// src/types/index.ts
interface ProfileData {
  id: number
  name: string
  title: string
  location: string
  email: string
  linkedin: string
  github: string
  summary: string
  avatarUrl: string
}

interface Experience {
  id: number
  company: string
  position: string
  period: string
  duration: string
  location: string
  achievements: string[]
  techStack?: string[]
}

interface Skill {
  id: number
  name: string
  category: 'mobile' | 'backend' | 'other'
}

interface Project {
  id: number
  name: string
  description: string
  url: string
  tech: string[]
  highlighted?: boolean
}
```

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

Test files in `src/__tests__/`:
- Component tests: `components/*.test.tsx`
- Hook tests: `hooks/*.test.tsx`

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check TypeScript errors, run `npm install` |
| API connection refused | Backend not running, will fallback to static data |
| Styles not updating | Clear cache: `rm -rf .next && npm run build` |
| Docker won't start | Check port 3002 not in use |
| Animation janky | Add `viewport={{ once: true }}` to motion components |
| ESLint errors | Run `npm run lint` to see specific errors |

## Deployment URLs

- **Local:** http://localhost:3002
- **Homelab:** http://192.168.0.106:3002
- **Public:** https://me.rockerdx.site

## Feature Summary

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode toggle
- ✅ Smooth Framer Motion animations with reduced motion support
- ✅ Go/Gin REST API with PostgreSQL
- ✅ Contact form with validation
- ✅ Resume PDF download
- ✅ GitHub stats widget
- ✅ Docker containerization
- ✅ SEO optimized with Open Graph tags
- ✅ Unit tests with Jest + React Testing Library
