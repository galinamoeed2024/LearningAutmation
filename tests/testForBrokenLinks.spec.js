import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await page.locator('.get-a-quote');

    const linkElement = await page.$$('a');
    console.log(`total links on page are : ${linkElement.lenght}`);

    for (const linkElement of linkElement) {
        const href = await linkElement.getAttribute('href');
        if (href) {
            console.log(href);
        }
    }





});