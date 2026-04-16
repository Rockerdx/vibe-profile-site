const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600 });
  
  // Navigate to the resume page
  await page.goto('http://localhost:8888/resume.html', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });
  
  // Wait for content to load
  await page.waitForTimeout(2000);
  
  // Take screenshot
  const screenshotPath = path.join(__dirname, '.sisyphus/evidence/task-12-web-resume.png');
  await page.screenshot({
    path: screenshotPath,
    fullPage: true
  });
  
  console.log('Screenshot saved to:', screenshotPath);
  
  await browser.close();
})();
