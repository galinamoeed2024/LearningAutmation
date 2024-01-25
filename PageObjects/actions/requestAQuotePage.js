const { Page } = require('playwright');
import { expect } from '@playwright/test';
const requestAQuotePageLocators = require('../locators/requestAQuotePage');


class requestAQuotePage {

    constructor(page) {
        this.page = page;
    }
    async clickOnRequestAQuoteLink() {

        await this.page.getByRole('link', { name: requestAQuotePageLocators.requestAQuoteLink, exact: true }).click();
    }


    async verifyRequestAQuoteFirstPage() {
        await expect(this.page.getByRole('link', { name: 'Auto Insurance Auto Insurance' })).toBeVisible();
        await this.page.getByRole('link', { name: 'Auto Insurance Auto Insurance' }).click();
        await expect(this.page.locator('h1')).toContainText('Secure Auto Insurance Quote Request Form');
        await this.page.getByLabel('First Name').fill('galina');
        await this.page.getByLabel('First Name').press('Tab');
        await this.page.getByLabel('Last Name').fill('moeed');
        await this.page.getByLabel('Last Name').press('Tab');
        await this.page.getByLabel('Email Address:').fill('galm@outlook.com');
        await this.page.getByLabel('Email Address:').press('Tab');
        await this.page.getByLabel('Phone Number:').fill('9176788988');
        await this.page.getByLabel('Phone Number:').press('Tab');
        await this.page.getByLabel('Digit Zip:').fill('11234');
        await this.page.getByLabel('Referring Agent?\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\tNo Agent Selected\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJane Smith').selectOption('Jane Smith');
        await expect(this.page.getByRole('button', { name: 'Continue to Step 2... ' })).toBeVisible();



    }
}


module.exports = requestAQuotePage;

