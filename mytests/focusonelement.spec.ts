import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('Focus on element Test', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://practicesoftwaretesting.com');

    const search = await page.getByPlaceholder('Search'); // types letter by letter with delay
    await search.focus();// used to focus on element eg: if a pop is coming or cookies text like "Accept"
    await search.fill('Pliers');

    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

});