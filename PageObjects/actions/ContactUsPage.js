import { test, expect } from '@playwright/test';
const { page } = require('@playwright/test')
const contactUsLocators = require('../locators/ContactUsPage');


export class ContactUsPage {

    constructor(page) {
        this.page = page;

    }

    async verifyContactUslink() {
    await this.page.getByRole('link', { name: 'Contact Us', exact: true }).click();
    await expect(this.page.getByRole(contactUsLocators.banner)).toContainText('Contact Us');
    await this.page.getByRole('link', { name: 'Contact Us', exact: true }).click();
    //await expect(this.page.getByRole(contactUsLocators.heading)).toBeVisible();
    await expect(this.page.locator(contactUsLocators.hi)).toContainText('Contact Information');
    await expect(this.page.getByText('Demo Insurance Agency301 N')).toBeVisible();
    await expect(this.page.getByRole('link', { name: '-578-0212' }).nth(2)).toBeVisible();
    await expect(this.page.getByText('Our Hours:Monday: 9:00 am - 5')).toBeVisible();
    await expect(this.page.locator(contactUsLocators.main)).toContainText('Our Hours:Monday: 9:00 am - 5:00 pmTuesday: 9:00 am - 5:00 pmWednesday: 9:00 am - 5:00 pmThursday: 9:00 am - 5:00 pmFriday: 9:00 am - 4:00 pmSaturday: ClosedSunday: ClosedLunch 12-1');

    }

}


module.exports = ContactUsPage;