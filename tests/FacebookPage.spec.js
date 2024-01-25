import { test, expect } from '@playwright/test';

test('Verify user can go to companys Facebook page', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('li').filter({ hasText: 'Facebook' }).getByLabel('Visit Facebook (opens in a')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Facebook');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'Facebook' }).getByLabel('Visit Facebook (opens in a').click();
    const page1 = await page1Promise;
});
