import {test} from '@playwright/test'
test("Login to SF and push the code to GitHub", async({page})=>
{
    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill("nandhiniswisdom.af1b41b45784@agentforce.com");
    await page.locator("#password").fill("Taara@2022");
    await page.locator("#Login").click();
    await page.waitForTimeout(4000);
    console.log(page.url());
    const Title = await page.title();
    console.log(Title);
})