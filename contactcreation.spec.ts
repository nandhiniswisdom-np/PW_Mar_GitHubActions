import { test } from '@playwright/test'
test('Create Contact and push code to GitHub', async ({ page }) => {
  //launching URL
  await page.goto("https://leaftaps.com/opentaps/control/main");
  await page.locator('#username').fill('democsr')
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  console.log(page.url());
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[text()="Create Lead"]').click();
  await page.locator('#createLeadForm_companyName').fill("CTS");
  await page.locator('#createLeadForm_firstName').fill("Amudha");
  await page.locator('#createLeadForm_lastName').fill("Guna");
  await page.locator('.smallSubmit').click();
  const LName = await page.locator('#viewLead_lastName_sp').innerText();
  console.log(LName);
  console.log(page.url());
  console.log(page.title());
})