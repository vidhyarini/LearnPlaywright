import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('Mouse hover over text test', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://spicejet.com/');

    await page.getByText('Add-ons').first().hover();
    //await page.getByText('Visa Services').first().click();

    await page.getByText('SpiceClub').first().hover();
    await page.getByText('Our Program').first().click();

    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();
})