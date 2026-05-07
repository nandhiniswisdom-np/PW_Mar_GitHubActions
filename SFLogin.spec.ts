import {test} from '@playwright/test'
test("Login to SF and push the code to GitHub", async({page})=>
{
    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click();
    console.log(page.url());
})