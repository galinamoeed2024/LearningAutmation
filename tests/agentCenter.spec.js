import { test, expect } from '@playwright/test';
const CommonPage = require('../PageObjects/actions/common');
const RequestAQuotePage = require('../PageObjects/actions/requestAQuotePage');


let commonPage;
let requestAQuotePage;


test.describe('Insurance website for agent ', () => {
    

    test.beforeEach(async ({ page }) => {
        const commonPage = new CommonPage(page);
        await commonPage.visitHomePage();
        await commonPage.waitForScrollBody();

    });

    test('Verify user can click on request a quote and fill out 1st page of a form', async ({ page }) => {
        requestAQuotePage = new RequestAQuotePage(page);
        await requestAQuotePage.clickOnRequestAQuoteLink();
        await requestAQuotePage.verifyRequestAQuoteFirstPage();   
    });

    test('Verify user can see company logo for nationwide at payment and claim', async ({ page }) => {

        await page.getByRole('banner').getByRole('link', { name: 'Payments & Claims' }).click();
        await expect(page.locator('h1')).toContainText('Customer Payment and Claim Center');
        await expect(page.getByRole('heading', { name: 'Customer Payment and Claim' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'Allied' })).toBeVisible();
    });
    test.afterEach(async ({ page }) => {
        const FirstLink = await page.locator('#skrollr-body > div.header-wrapper.clearfix > header > div.container > div > div.col-md-4.header-links > a:nth-child(1)').first();
    });

});