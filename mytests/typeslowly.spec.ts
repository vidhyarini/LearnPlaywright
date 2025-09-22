import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('type characters sequentially with delay', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://practicesoftwaretesting.com');

    await page.getByPlaceholder('Search').pressSequentially('Hammer',{delay: 500}); // types letter by letter with delay

    
    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

});