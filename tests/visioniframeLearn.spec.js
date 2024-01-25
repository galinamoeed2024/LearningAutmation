const { test, expect}= require('@playwright/test');

test('Verify user can locate iFrame within a page',async ({ page}) => {
await page.goto('https://ui.vision/demo/webtest/frames/');
await expect(page).toHaveTitle('Frames - Web Automation Test');





test101
});