import { test, expect } from '@playwright/test';
const CommonPage =require('../PageObjects/actions/common');


test('Verify that a user can add a new vehicle to excisting policy', async ({ page }) => {
   // await page.goto('https://insurancewebsitedemo.com/');-----base url can take from common
   const commonPage= new CommonPage(page) ;
   await commonPage.visitHomePage();
   
    await page.locator('[aria-label="Support"]').waitFor();
    await page.locator('[aria-label="Support"]').hover();

    await page.locator('text=Add a Vehicle Form').waitFor();
    await page.locator('text=Add a Vehicle Form').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('#title_div')).toContainText('Secure Add a Vehicle Request Form');



    await page.locator('#fname').fill('galina');
    await page.locator('#lname').fill('moeed');
    await page.locator('#lname').press('Tab');
    await page.locator('#email').fill('galina.moeed@outlook.com');
    await page.locator('#phone').fill('9174788993');
    await page.locator('#zip').fill('11725');
    await page.locator('input[name="form_data\\[policy_info\\]\\[policy_number\\]"]').click();


});