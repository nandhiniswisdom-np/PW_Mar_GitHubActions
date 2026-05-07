import { test } from '@playwright/test'
test('Login to LeafTap and push code to GitHub', async ({ page }) => {
  //launching URL
  await page.goto("https://leaftaps.com/opentaps/control/main");
  await page.locator('#username').fill('democsr')
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.locator('//a[contains(text(),"CRM")]').click();
})