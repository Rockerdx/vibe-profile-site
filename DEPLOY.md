# Deployment Guide

## Vercel Deployment

### Setup
1. Push code to GitHub
2. Import repository in [Vercel Dashboard](https://vercel.com)
3. Framework preset: Next.js (auto-detected)
4. Deploy

### Build Configuration
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Static Export
Configured in `next.config.js`:
```javascript
output: 'export',
distDir: 'dist',
images: { unoptimized: true }
```

### Environment Variables
None required for static deployment.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Pre-Deployment Checklist

- [ ] `npm run build` passes (no TypeScript errors)
- [ ] `npm run lint` passes (no ESLint errors)
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Responsive design tested (mobile + desktop)
- [ ] No console warnings in browser

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check TypeScript errors, run `npm install` |
| Styles not updating | Clear `.next` folder: `rm -rf .next` |
| ESLint peer dependency errors | Check `package.json` for compatible versions |
| Animation janky | Add `viewport={{ once: true }}` to motion components |

## Deployment URL
Production site: https://vibe-profile-site.vercel.app (auto-generated on first deploy)
