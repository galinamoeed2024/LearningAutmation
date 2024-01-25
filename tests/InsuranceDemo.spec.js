/*import { test, expect } from '@playwright/test';
const baseUrl = ('https://insurancewebsitedemo.com/');

test('Verify user can click on request a quote page   ', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.getByText('Your IndependentInsurance')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Your IndependentInsurance Agency');
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


test('Verify user can fill out a form', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
        await page.getByRole('link', { name: 'Request A Quote', exact: true }).click();
        await expect(page.getByRole('link', { name: 'Auto Insurance Auto Insurance' })).toBeVisible();
        await page.getByRole('link', { name: 'Auto Insurance Auto Insurance' }).click();
        await expect(page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
    await page.getByLabel('First Name').fill('galina');
    await page.getByLabel('First Name').press('Tab');
    await page.getByLabel('Last Name').fill('moeed');
    await page.getByLabel('Last Name').press('Tab');
    await page.getByLabel('Email Address:').fill('galm@outlook.com');
    await page.getByLabel('Email Address:').press('Tab');
    await page.getByLabel('Phone Number:').fill('9176788988');
    await page.getByLabel('Phone Number:').press('Tab');
    await page.getByLabel('Digit Zip:').fill('11234');
    await page.getByLabel('Referring Agent?\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\tNo Agent Selected\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJane Smith').selectOption('Jane Smith');
    await expect(page.getByRole('button', { name: 'Continue to Step 2... ' })).toBeVisible();
});


test('Verify user can go to companys Facebook page', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('li').filter({ hasText: 'Facebook' }).getByLabel('Visit Facebook (opens in a')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Facebook');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'Facebook' }).getByLabel('Visit Facebook (opens in a').click();
    const page1 = await page1Promise;
});



test('Verify user can fill out Contact Us Page ', async ({ page }) => {
  await page.goto('https://insurancewebsitedemo.com/');
  await expect(page.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Contact Us');
  await page.getByRole('link', { name: 'Contact Us', exact: true }).click();
});
test('test00', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Twitter');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new').click();
    const page1 = await page1Promise;
  });
  test('test0', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Twitter');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new').click();
    const page1 = await page1Promise;
    await expect(page.getByRole('banner').getByRole('link', { name: 'Payments & Claims' })).toBeVisible();
    await expect(page.getByRole('banner')).toContainText('Payments & Claims');
    await page.getByRole('banner').getByRole('link', { name: 'Payments & Claims' }).click();
    await expect(page.locator('h1')).toContainText('Customer Payment and Claim Center');
  });

  test('test9', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new')).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Twitter');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('li').filter({ hasText: 'Twitter' }).getByLabel('Visit Twitter (opens in a new').click();
    const page1 = await page1Promise;
    await expect(page.getByRole('banner').getByRole('link', { name: 'Payments & Claims' })).toBeVisible();
    await expect(page.getByRole('banner')).toContainText('Payments & Claims');
    await page.getByRole('banner').getByRole('link', { name: 'Payments & Claims' }).click();
    await expect(page.locator('h1')).toContainText('Customer Payment and Claim Center');
    //await expect(page.getByRole('link', { name: 'associates shaking hands in a business meeting Home Insurance Protect your home' })).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('Home Insurance');
   // await page.getByRole('link', { name: 'associates shaking hands in a business meeting Home Insurance Protect your home' }).click();
  });
  test('testp', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.getByRole('link', { name: 'CONTACT US', exact: true })).toBeVisible();
    await expect(page.locator('#skrollr-body')).toContainText('CONTACT US');
    await page.getByRole('link', { name: 'CONTACT US', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Contact Information' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Contact Information');
  });

  test('testreview', async ({ page }) => {
    await page.goto('https://insurancewebsitedemo.com/');
    await expect(page.getByLabel('About')).toBeVisible();
    await expect(page.getByLabel('About')).toContainText('About');
    //await page.getByLabel('Write a Review').click();
   // await expect(page.getByRole('heading', { name: 'Write a Review' })).toBeVisible();
    //await expect(page.locator('h1')).toContainText('Write a Review');
  });

  */