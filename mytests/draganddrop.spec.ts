import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('select based on drag and drop test', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://demo.guru99.com/test/drag_drop.html');

    //single command
    //await page.locator('#credit2').dragTo(page.locator('#bank')); // using id

    //multiple command - manually using mouse movements
    await page.locator('#credit2').hover();
    await page.mouse.down();
    await page.locator('#bank').hover();
    await page.mouse.up();

    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

});