import { test, expect } from '@playwright/test';
const baseUrl = 'https://insurancewebsitedemo.com/';

test('Verify user can click on request a quote page   ', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page.getByText('Your IndependentInsurance')).toBeVisible();
    const scrollBody = await page.locator('#skrollr-body');
    scrollBody.waitFor();
    await expect (scrollBody).toContainText('Your IndependentInsurance Agency');
    
    await expect(page.getByRole('link', { name: 'Request A Quote', exact: true })).toBeVisible();
    await expect(page.getByRole('banner')).toContainText('Request A Quote');
    await expect(page.getByRole('link', { name: 'Request A Quote', exact: true })).toBeVisible();
    await page.getByRole('link', { name: 'Request A Quote', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Free No-Obligation Quote Forms' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Free No-Obligation Quote Forms');
    await expect(page.getByRole('link', { name: 'Auto Insurance Auto Insurance' })).toBeVisible();
    await page.getByRole('link', { name: 'Auto Insurance Auto Insurance' }).click();
    await expect(page.getByRole('heading', { name: 'Secure Auto Insurance Quote' })).toBeVisible();
});