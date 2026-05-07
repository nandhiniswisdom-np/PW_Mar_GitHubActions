import { test } from '@playwright/test'
test('Create lead and push code to GitHub', async ({ page }) => {
  //launching URL
  await page.goto("https://leaftaps.com/opentaps/control/main");
  await page.locator('#username').fill('democsr2')
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  //const Title = await page.title();
  //console.log(Title);
  console.log(page.url());

})