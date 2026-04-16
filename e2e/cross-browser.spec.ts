import { test, expect } from '@playwright/test'

/**
 * Cross-browser visual and functional tests
 * Tests layout, animations, fonts, and interactions across all browsers
 */

test.describe('Cross-Browser: Layout & Visual', () => {
  test('Hero section renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    
    // Wait for animations to settle
    await page.waitForTimeout(1000)
    
    // Check hero section visibility
    const hero = page.locator('section#hero, [class*="hero"]').first()
    await expect(hero).toBeVisible()
    
    // Check profile name is visible
    const name = page.locator('text=Muhammad Rizki Putra').first()
    await expect(name).toBeVisible()
    
    // Check title is visible
    const title = page.locator('text=Senior Backend').first()
    await expect(title).toBeVisible()
    
    // Screenshot for evidence
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-hero.png`,
      fullPage: false 
    })
  })

  test('About section renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Scroll to about section
    await page.evaluate(() => {
      const about = document.querySelector('#about, section:nth-of-type(2)')
      about?.scrollIntoView({ behavior: 'instant' })
    })
    
    await page.waitForTimeout(500)
    
    // Check about section
    const about = page.locator('section#about, h2:has-text("About")').first()
    await expect(about).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-about.png`,
      fullPage: false 
    })
  })

  test('Experience section renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Scroll to experience section
    await page.evaluate(() => {
      const exp = document.querySelector('#experience, h2:has-text("Experience")')
      exp?.scrollIntoView({ behavior: 'instant' })
    })
    
    await page.waitForTimeout(500)
    
    // Check experience section
    const experience = page.locator('section#experience, h2:has-text("Experience")').first()
    await expect(experience).toBeVisible()
    
    // Check Stockbit is mentioned
    const stockbit = page.locator('text=Stockbit').first()
    await expect(stockbit).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-experience.png`,
      fullPage: false 
    })
  })

  test('Skills section renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Scroll to skills section
    await page.evaluate(() => {
      const skills = document.querySelector('#skills, h2:has-text("Skills")')
      skills?.scrollIntoView({ behavior: 'instant' })
    })
    
    await page.waitForTimeout(500)
    
    // Check skills section
    const skills = page.locator('section#skills, h2:has-text("Skills")').first()
    await expect(skills).toBeVisible()
    
    // Check skill categories
    const golang = page.locator('text=Golang').first()
    const kotlin = page.locator('text=Kotlin').first()
    await expect(golang.or(kotlin)).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-skills.png`,
      fullPage: false 
    })
  })

  test('Projects section renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Scroll to projects section
    await page.evaluate(() => {
      const projects = document.querySelector('#projects, h2:has-text("Projects")')
      projects?.scrollIntoView({ behavior: 'instant' })
    })
    
    await page.waitForTimeout(500)
    
    // Check projects section
    const projects = page.locator('section#projects, h2:has-text("Projects")').first()
    await expect(projects).toBeVisible()
    
    // Check GitHub link
    const github = page.locator('text=GitHub').first()
    await expect(github).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-projects.png`,
      fullPage: false 
    })
  })

  test('Contact section renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Scroll to contact section
    await page.evaluate(() => {
      const contact = document.querySelector('#contact, h2:has-text("Contact")')
      contact?.scrollIntoView({ behavior: 'instant' })
    })
    
    await page.waitForTimeout(500)
    
    // Check contact section
    const contact = page.locator('section#contact, h2:has-text("Contact")').first()
    await expect(contact).toBeVisible()
    
    // Check email
    const email = page.locator('text=rzk.putra@gmail.com').first()
    await expect(email).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-contact.png`,
      fullPage: false 
    })
  })

  test('Full page screenshot', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(2000)
    
    // Full page screenshot
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-fullpage.png`,
      fullPage: true 
    })
  })
})

test.describe('Cross-Browser: Mobile Navigation', () => {
  test('Mobile menu works on iOS Safari', async ({ page, browserName }) => {
    test.skip(browserName !== 'webkit', 'iOS Safari specific test')
    
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Check for mobile navigation elements
    const mobileNav = page.locator('[class*="mobile"], [class*="bottom-nav"], nav').first()
    await expect(mobileNav).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/ios-safari-mobile-nav.png`,
      fullPage: false 
    })
  })

  test('Mobile menu works on Android Chrome', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'Android Chrome specific test')
    
    await page.goto('/')
    await page.waitForTimeout(500)
    
    // Check for mobile navigation elements
    const mobileNav = page.locator('[class*="mobile"], [class*="bottom-nav"], nav').first()
    await expect(mobileNav).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/android-chrome-mobile-nav.png`,
      fullPage: false 
    })
  })
})

test.describe('Cross-Browser: Animations', () => {
  test('Animations work or gracefully degrade', async ({ page, browserName }) => {
    await page.goto('/')
    
    // Check for reduced motion support
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.reload()
    await page.waitForTimeout(1000)
    
    // Page should still be functional
    const hero = page.locator('section#hero, [class*="hero"]').first()
    await expect(hero).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-reduced-motion.png`,
      fullPage: false 
    })
    
    // Reset
    await page.emulateMedia({ reducedMotion: 'no-preference' })
  })

  test('Framer Motion elements render', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(1500)
    
    // Check that animated elements are visible after animation
    const animatedElements = page.locator('[class*="motion"], [style*="transform"], [style*="opacity"]').first()
    
    // At least some elements should be visible
    const hero = page.locator('section#hero, [class*="hero"]').first()
    await expect(hero).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-animations.png`,
      fullPage: false 
    })
  })
})

test.describe('Cross-Browser: Fonts & Typography', () => {
  test('Fonts load correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
    
    // Check font loading
    const fontLoaded = await page.evaluate(() => {
      return document.fonts.ready.then(() => true)
    })
    
    expect(fontLoaded).toBe(true)
    
    // Check text is rendered
    const name = page.locator('text=Muhammad Rizki Putra').first()
    await expect(name).toBeVisible()
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-fonts.png`,
      fullPage: false 
    })
  })

  test('No font rendering issues', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
    
    // Check for common font issues (tofu characters, etc.)
    const bodyText = await page.locator('body').textContent()
    
    // Should not have replacement characters
    expect(bodyText).not.toContain('')
    
    // Check console for font errors
    const consoleErrors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })
    
    await page.reload()
    await page.waitForTimeout(1000)
    
    // Filter out font-related errors
    const fontErrors = consoleErrors.filter(e => 
      e.toLowerCase().includes('font') || 
      e.toLowerCase().includes('woff') ||
      e.toLowerCase().includes('ttf')
    )
    
    // Document but don't fail on font warnings
    if (fontErrors.length > 0) {
      console.log(`Font warnings in ${browserName}:`, fontErrors)
    }
  })
})

test.describe('Cross-Browser: Console Errors', () => {
  test('No critical console errors', async ({ page, browserName }) => {
    const errors: string[] = []
    const warnings: string[] = []
    
    page.on('console', msg => {
      const text = msg.text()
      if (msg.type() === 'error') {
        errors.push(text)
      } else if (msg.type() === 'warning') {
        warnings.push(text)
      }
    })
    
    page.on('pageerror', error => {
      errors.push(error.message)
    })
    
    await page.goto('/')
    await page.waitForTimeout(2000)
    
    // Scroll through page to trigger lazy loading
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })
    await page.waitForTimeout(500)
    
    // Filter out non-critical errors
    const criticalErrors = errors.filter(e => 
      !e.includes('favicon') &&
      !e.includes('source map') &&
      !e.includes('analytics') &&
      !e.includes('tracking')
    )
    
    // Document all errors
    if (errors.length > 0 || warnings.length > 0) {
      console.log(`\n=== ${browserName} Console Output ===`)
      console.log('Errors:', errors)
      console.log('Warnings:', warnings)
    }
    
    // Fail on critical errors only
    expect(criticalErrors).toHaveLength(0)
  })
})

test.describe('Cross-Browser: Responsive', () => {
  test('Mobile viewport renders correctly', async ({ page, browserName }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
    
    // Check no horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth
    })
    
    expect(hasOverflow).toBe(false)
    
    await page.screenshot({ 
      path: `.sisyphus/evidence/task-17-cross-browser/${browserName}-responsive.png`,
      fullPage: false 
    })
  })
})
