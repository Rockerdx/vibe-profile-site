# Fix Vercel Deployment Error - globals.css

## Problem
Vercel build is failing with CSS processing errors in `src/app/globals.css` around lines 211-213.

## Root Cause
The `@apply` directive in `.btn-secondary` class has:
1. Multi-line formatting that's incompatible with Vercel's CSS processor
2. Complex Tailwind classes with arbitrary values (`hover:border-accent/30`)

## Current Code (Problematic)
```css
.btn-secondary {
  @apply px-6 py-3 bg-surface text-primary font-medium rounded-lg 
         border border-border transition-all duration-200 
         hover:bg-surface-elevated hover:border-accent/30
         active:scale-95;
}
```

## Solution
Split the `@apply` into separate lines and ensure all classes are properly recognized:

```css
.btn-secondary {
  @apply px-6 py-3 bg-surface text-primary font-medium rounded-lg border border-border transition-all duration-200;
  @apply hover:bg-surface-elevated;
  border-color: rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background-color: var(--surface-elevated);
  border-color: rgba(59, 130, 246, 0.3);
}

.btn-secondary:active {
  transform: scale(0.95);
}
```

## Alternative Solution
Convert all `@apply` directives to regular CSS properties to avoid Tailwind processing issues on Vercel.

## Files to Modify
- `src/app/globals.css` (lines 210-215)

## Verification Steps
1. Run `npm run build` locally
2. Check for CSS processing errors
3. Verify styles still apply correctly
4. Deploy to Vercel

## Success Criteria
- [ ] Build passes without CSS errors
- [ ] `.btn-secondary` styles render correctly
- [ ] Vercel deployment successful
