// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.nordstrom.com/');
  await expect(page).toHaveTitle('Nordstrom Online & In Store: Shoes, Jewelry, Clothing, Makeup, Dresses');  
});
