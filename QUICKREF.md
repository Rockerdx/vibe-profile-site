# Quick Reference - vibe-profile-site

## ⚡ One-Liners

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run production
npm start

# Lint code
npm run lint

# Docker deploy
docker-compose up -d --build && docker-compose logs -f
```

## 📁 File Map

```
src/
├── app/
│   ├── layout.tsx      # Root layout + SEO metadata
│   ├── page.tsx        # Main page (imports all components)
│   └── globals.css     # Global styles + Tailwind
├── components/
│   ├── Hero.tsx        # Header with photo + CTAs
│   ├── About.tsx       # Bio + education + certifications
│   ├── Experience.tsx  # Work timeline
│   ├── Skills.tsx      # Skills grid (mobile/backend/other)
│   ├── Projects.tsx    # Project showcase
│   └── Contact.tsx     # Contact buttons
├── lib/
│   └── data.ts         # ALL profile data (edit this!)
└── types/
    └── index.ts        # TypeScript interfaces
```

## 🎯 What to Edit For...

| Goal | File | Section |
|------|------|---------|
| Change name/title | `data.ts` | `profile.name`, `profile.title` |
| Update email | `data.ts` | `profile.email` |
| Add job | `data.ts` | `experiences[]` array |
| Add skill | `data.ts` | `skills[]` array |
| Add project | `data.ts` | `projects[]` array |
| Change colors | `globals.css` | CSS variables |
| Adjust animations | Component files | `motion.div` props |
| Update SEO | `layout.tsx` | `metadata` object |

## 🔧 Tailwind Quick Tips

```typescript
// Responsive breakpoints
className="text-sm md:text-base lg:text-lg"  // Mobile → Desktop

// Dark mode (default)
className="bg-background dark:bg-foreground"

// Spacing
className="p-4 md:p-8 lg:p-12"  // Padding

// Layout
className="flex flex-col md:flex-row gap-4"  // Stack → Row
```

## 🎨 Framer Motion Quick Tips

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
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ staggerChildren: 0.1 }}
/>
```

## 📦 Docker Commands

```bash
# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f app

# Stop
docker-compose down

# Rebuild from scratch
docker-compose down && docker-compose up -d --build --force-recreate
```

## ✅ Pre-Commit Checklist

- [ ] `npm run build` passes (no TypeScript errors)
- [ ] `npm run lint` passes (no ESLint errors)
- [ ] Tested responsive (mobile + desktop)
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] No console warnings in browser

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Build fails | Run `npm install`, check TypeScript errors |
| Styles not updating | Clear `.next` folder: `rm -rf .next` |
| Docker won't start | Check port 3001 not in use |
| Animation janky | Add `viewport={{ once: true }}` |
| Icons not showing | Import from `lucide-react` correctly |

## 📱 Test Viewports

- Mobile: 320px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)
- [TypeScript](https://www.typescriptlang.org/docs/)
