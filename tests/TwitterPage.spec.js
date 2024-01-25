import { test, expect } from '@playwright/test';


test('test00', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Twitter');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new').click();
    const page1 = await page1Promise;
  });