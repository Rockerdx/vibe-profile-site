# Agent Instructions - vibe-profile-site

## Quick Context
- **Project:** Professional profile website for Muhammad Rizki Putra (@Rockerdx)
- **Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion
- **Data:** All profile data in `src/lib/data.ts`
- **Components:** `src/components/` - Hero, About, Experience, Skills, Projects, Contact
- **Deployment:** Vercel (static export)

## File Locations
| What to Change | File |
|----------------|------|
| Profile info (name, email, summary) | `src/lib/data.ts` |
| Work experience | `src/lib/data.ts` (experiences array) |
| Skills | `src/lib/data.ts` (skills array) |
| Projects | `src/lib/data.ts` (projects array) |
| Types/interfaces | `src/types/index.ts` |
| Component styling | `src/components/*.tsx` (Tailwind classes) |
| Global styles | `src/app/globals.css` |
| Site metadata | `src/app/layout.tsx` |

## Common Tasks

### Update Profile Information
1. Open `src/lib/data.ts`
2. Modify the `profile` object
3. Run `npm run build` to verify no TypeScript errors
4. Test locally with `npm run dev`

### Add New Experience
1. Open `src/lib/data.ts`
2. Add new object to `experiences` array following existing pattern
3. Ensure all required fields: company, position, period, duration, location, achievements
4. Run `npm run build` to verify

### Add New Skill
1. Open `src/lib/data.ts`
2. Add to `skills` array: `{ name: 'Skill Name', category: 'mobile' | 'backend' | 'other' }`
3. Run `npm run build`

### Add New Project
1. Open `src/lib/data.ts`
2. Add to `projects` array following existing pattern
3. Set `highlighted: true` for featured projects
4. Run `npm run build`

### Modify Component Styling
1. Open target component in `src/components/`
2. Adjust Tailwind CSS classes
3. Keep responsive design: mobile-first, use `md:`, `lg:` prefixes
4. Maintain dark mode (default)

## Constraints
- ❌ NO backend changes (static site only)
- ❌ NO database additions
- ✅ KEEP TypeScript strict mode enabled
- ✅ MAINTAIN responsive design (test 320px, 768px, 1280px)
- ✅ PRESERVE dark mode as default
- ✅ KEEP Framer Motion animations (respect `prefers-reduced-motion`)

## Validation Commands
```bash
# ALWAYS run before committing
npm run build    # Verify TypeScript compilation
npm run lint     # Check code quality

# Test locally
npm run dev      # Development server at localhost:3000
```

## Component Pattern Template
```typescript
'use client'

import { motion } from 'framer-motion'
import { IconName } from 'lucide-react'
import useReducedMotion from '@/hooks/useReducedMotion'

export default function ComponentName() {
  const reducedMotion = useReducedMotion()
  
  return (
    <section id="section-name" className="...">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5 }}
      >
        {/* Content */}
      </motion.div>
    </section>
  )
}
```

## Animation Pattern with Stagger
```typescript
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    animate={reducedMotion ? { opacity: 1, y: 0 } : undefined}
    transition={{
      duration: 0.5,
      delay: reducedMotion ? 0 : index * 0.1,
    }}
  >
    {/* Item content */}
  </motion.div>
))}
```

## Hook Pattern
```typescript
// src/hooks/useX.ts
import { useEffect, useState } from 'react'

export const useX = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    // Setup logic
    const cleanup = () => {
      // Cleanup logic
    }
    return cleanup
  }, [])

  return state
}

export default useX
```

## Deployment

### Local Development
```bash
npm install
npm run dev
```

### Vercel Deployment
1. Connect GitHub repo to Vercel
2. Build settings are automatic (Next.js preset)
3. Static export configured in `next.config.js`

## Troubleshooting

### TypeScript Errors
1. Read error message carefully
2. Check `src/types/index.ts` for type definitions
3. Ensure `src/lib/data.ts` matches type interfaces
4. Run `npm run build` to verify fix

### Build Fails
1. Check for missing dependencies: `npm install`
2. Clear cache: `rm -rf .next && npm run build`
3. Check Node.js version (should be 18+)

### Styling Issues
1. Check Tailwind class names (no typos)
2. Verify responsive breakpoints
3. Test in browser DevTools responsive mode

## Key Files Reference
- `README.md` - Project overview and setup
- `package.json` - Dependencies and scripts
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration (static export)
