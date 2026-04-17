import { defineConfig, devices } from '@playwright/test'

/**
 * Cross-browser testing configuration for vibe-profile-site
 * Tests on: Chrome, Firefox, Safari (desktop) + iOS Safari, Android Chrome (mobile)
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: '.sisyphus/evidence/task-17-cross-browser/playwright-report' }],
    ['json', { outputFile: '.sisyphus/evidence/task-17-cross-browser/test-results.json' }],
    ['list'],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    // Desktop browsers
    {
      name: 'chromium-desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'firefox-desktop',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'webkit-desktop',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 },
      },
    },

    // Mobile browsers
    {
      name: 'ios-safari',
      use: { 
        ...devices['iPhone 14 Pro Max'],
      },
    },
    {
      name: 'android-chrome',
      use: { 
        ...devices['Pixel 7'],
      },
    },

    // Tablet
    {
      name: 'ipad-safari',
      use: { 
        ...devices['iPad Pro 11'],
      },
    },
  ],

})
