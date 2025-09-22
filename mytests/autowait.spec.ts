import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test.use({
    actionTimeout: 10000 // Set the timeout gobally for all the test for 10 sec
})

test('Autowait on element Test 1', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

   // page.setDefaultTimeout(15000); // this will override the default wait time that is 30 sec

    await page.goto('https://practicesoftwaretesting.com');

    //await page.getByRole('checkbox',{name:' Wrench '}).check();

    //await page.getByRole('checkbox',{name:' Wrench12 '}).check();

    //also set default time this way for specific action
    await page.getByRole('checkbox',{name:' Wrench12 '}).check({timeout: 5000}); // even if timeout is globally assigned the prefernece is give to specific element

    //if there is a failure playwright will give this error- it waited for 30 secs

     //Test timeout of 30000ms exceeded.

     //TimeoutError: locator.check: Timeout 15000ms exceeded. if setDefaultTimeout(15000)

    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

});

test('Autowait on element Test 2', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://practicesoftwaretesting.com');

    await page.getByRole('checkbox',{name:' Wrench12 '}).check();

    //Error - since globally set for 10 sec
    //TimeoutError: locator.check: Timeout 10000ms exceeded.

    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

});