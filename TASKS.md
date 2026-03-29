# Task List - vibe-profile-site

## ✅ Completed (Phase 1-4)

- [x] Project initialization with Next.js 14 + TypeScript + Tailwind
- [x] Project structure setup
- [x] Type definitions created
- [x] Profile data populated (src/lib/data.ts)
- [x] Core components built:
  - Hero section with profile photo and CTAs
  - About section with education & certifications
  - Experience timeline
  - Skills grid by category
  - Projects showcase (featured + more)
  - Contact section
- [x] Dark mode default styling
- [x] Animations with Framer Motion
- [x] Dockerfile for production build
- [x] docker-compose.yml for homelab
- [x] README documentation
- [x] **TASK 3.4:** Create downloadable resume PDF (Issue #12)
  - Client-side PDF generation using pdfmake
  - Download button in Hero section
  - Dark-themed PDF matching website
- [x] **TASK 4.3:** Improve animations (Issue #15)
  - Stagger animations for Experience, Skills, Projects
  - Hover animations on cards and buttons
  - Respects prefers-reduced-motion media query
  - Created useReducedMotion hook

## 📋 TODO - Junior Engineer Tasks

### Phase 3: Testing & Polish (Priority: HIGH)

- [ ] **TASK 3.1:** Install dependencies and verify build
  ```bash
  npm install
  npm run build
  npm run start
  ```
  - Fix any TypeScript errors
  - Ensure no console warnings

- [ ] **TASK 3.2:** Test responsive design
  - Test on mobile (320px, 375px, 414px)
  - Test on tablet (768px, 1024px)
  - Test on desktop (1280px, 1920px)
  - Fix any layout issues

- [ ] **TASK 3.3:** Add profile photo
  - Download GitHub avatar or use provided photo
  - Save to `/public/images/profile.jpg`
  - Update `src/lib/data.ts` avatarUrl to use local image
  - Optimize image (convert to WebP, max 200KB)

- [ ] **TASK 3.4:** Create downloadable resume PDF
  - Generate PDF from LinkedIn profile
  - Save to `/public/resume.pdf`
  - Add download button in Hero section

### Phase 4: Enhancements (Priority: MEDIUM)

- [ ] **TASK 4.1:** Add navigation header
  - Sticky header with logo/name
  - Smooth scroll to sections
  - Mobile hamburger menu
  - Active section highlighting

- [ ] **TASK 4.2:** Add footer
  - Copyright notice
  - Social links
  - "Built with Next.js" badge

- [ ] **TASK 4.3:** Improve animations
  - Add stagger animations for lists
  - Add parallax effects (optional)
  - Ensure animations respect `prefers-reduced-motion`

- [ ] **TASK 4.4:** Add loading states
  - Skeleton loader for profile photo
  - Fade-in animation on page load

### Phase 5: Deployment (Priority: HIGH)

- [ ] **TASK 5.1:** Test Docker build locally
  ```bash
  docker-compose up -d --build
  docker-compose logs -f
  ```
  - Verify site accessible at localhost:3001
  - Check all links work
  - Test on different browsers

- [ ] **TASK 5.2:** Deploy to homelab
  - Copy to homelab server
  - Add to existing docker-compose or run separately
  - Configure reverse proxy if needed
  - Set up domain/subdomain (optional)

- [ ] **TASK 5.3:** Performance optimization
  - Run Lighthouse audit
  - Optimize images (next/image)
  - Minimize bundle size
  - Target: Performance score > 90

### Phase 6: SEO & Analytics (Priority: LOW)

- [ ] **TASK 6.1:** Generate sitemap.xml
  - Install next-sitemap or create manually
  - Add to public folder
  - Submit to search consoles (optional)

- [ ] **TASK 6.2:** Add analytics (optional)
  - Umami (self-hosted, privacy-friendly)
  - Or skip for privacy

- [ ] **TASK 6.3:** Add robots.txt
  - Allow all crawlers
  - Reference sitemap

## 📝 Notes

- **Commit frequently** with clear messages
- **Test locally** before pushing to homelab
- **Ask questions** if requirements are unclear
- **Reference:** Existing components for patterns

## 🎯 Acceptance Criteria

1. ✅ Site builds without errors
2. ✅ All sections display correctly
3. ✅ Responsive on all screen sizes
4. ✅ Dark mode looks professional
5. ✅ Docker container runs on homelab
6. ✅ All links (GitHub, LinkedIn, Email) work
7. ✅ Lighthouse score > 90
8. ✅ No TypeScript errors

## 🔗 Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/icons/
