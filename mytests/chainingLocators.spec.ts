import {test, expect, type BrowserContext, type Page, Browser} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('locator test', async() =>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://practicesoftwaretesting.com/');

    await page.getByTestId('nav-contact').click();

    await page.locator('form >> id=first_name').fill('Edison');// if you have a form name ('form#formname >> id=first_name) i didnt have any name in this case

    await page.locator('form >> data-test=message').fill('test message');

    //matching inside a locator
    const form = page.locator('form');
    const lastname = page.getByTestId('last-name')
    await expect(form.locator(lastname)).toBeVisible(); //lastname is used inside a locator

    //OR use many number of methods like this:
    await expect(page.locator('form').getByTestId('last-name')).toBeVisible(); // same like above and chianable


    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();


})