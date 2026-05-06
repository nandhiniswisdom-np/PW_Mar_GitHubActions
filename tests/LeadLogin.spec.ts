import {test} from '@playwright/test'
test('Create lead and push code to GitHub', async({page})=>
{
    //launching URL
 await page.goto("http://leaftaps.com/opentaps/control/main");
 //Entering username
 await page.locator('//input[@id="username"]').fill("Demosalesmanager");
 //entering password
 await page.locator('//input[@id="password"]').fill("crmsfa");
 //clcicking on login button
 await page.locator('//input[@class="decorativeSubmit"]').click();
 //await page.click('//input[@class="decorativeSubmit"]');
 //clicking on CRM/SFA button
 await page.locator('//a[contains(text(),"CRM")]').click();
 //clicking on Lead button
 await page.locator('//a[text()="Leads"]').click();

})