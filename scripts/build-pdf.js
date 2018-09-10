const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  await page.pdf({ path: './src/assets/resume.pdf', format: 'A4' });
  await browser.close();
})();
