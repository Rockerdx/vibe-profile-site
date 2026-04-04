# Quick Reference

## One-Liners

```bash
# Start development
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## File Map

```
src/
├── app/
│   ├── layout.tsx      # Root layout + SEO metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles + Tailwind
├── components/
│   ├── Hero.tsx        # Header + CTAs
│   ├── About.tsx       # Bio + education
│   ├── Experience.tsx  # Work timeline
│   ├── Skills.tsx      # Skills grid
│   ├── Projects.tsx    # Project showcase
│   └── Contact.tsx     # Contact buttons
├── lib/
│   └── data.ts         # ALL profile data (edit this!)
└── types/
    └── index.ts        # TypeScript interfaces
```

## What to Edit

| Goal | File |
|------|------|
| Change name/title | `data.ts` - `profile` object |
| Update email | `data.ts` - `profile.email` |
| Add job | `data.ts` - `experiences[]` |
| Add skill | `data.ts` - `skills[]` |
| Add project | `data.ts` - `projects[]` |
| Change colors | `globals.css` - CSS variables |
| Update SEO | `layout.tsx` - metadata object |

## Tailwind Quick Tips

```typescript
// Responsive: mobile → desktop
className="text-sm md:text-base lg:text-lg"

// Dark mode (default)
className="bg-background text-foreground"

// Layout
className="flex flex-col md:flex-row gap-4"
```

## Framer Motion Quick Tips

```typescript
import { motion } from 'framer-motion'

// Fade in up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
/>

// Stagger children
<motion.div
  transition={{ staggerChildren: 0.1 }}
/>
```

## Pre-Commit Checklist

- [ ] `npm run build` passes (no TypeScript errors)
- [ ] `npm run lint` passes
- [ ] Tested responsive (mobile + desktop)
- [ ] All links work
- [ ] No console warnings

## Common Issues

| Problem | Solution |
|---------|----------|
| Build fails | Run `npm install`, check TypeScript |
| Styles not updating | Clear `.next`: `rm -rf .next` |
| Animation janky | Add `viewport={{ once: true }}` |
| Icons not showing | Import from `lucide-react` |

## Test Viewports

- Mobile: 320px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## Links

- [Next.js](https://nextjs.org/docs)
- [Tailwind](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev/icons/)
