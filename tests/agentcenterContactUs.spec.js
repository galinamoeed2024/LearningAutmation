import { test, expect } from '@playwright/test';
//import { ContactUsPage} from '../PageObjects/actions/ContactUsPage';
import { CommonPage} from '../PageObjects/actions/common';
const contactUsPage = require('../PageObjects/actions/ContactUsPage');
const commonPage = require('../PageObjects/actions/common');
//let contactPage: ContactUsPage; 

test('Verify user can click and visit Contact Us Page ', async ({ page }) => {
    let contactUsPageObj = new contactUsPage (page);
    let commonPageObj= new commonPage(page);
    await commonPageObj.visitHomePage();
    await commonPageObj.waitForScrollBody();
    await contactUsPageObj.verifyContactUslink();




});

