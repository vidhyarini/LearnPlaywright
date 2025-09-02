import {test, expect, type Browser, type Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('toolshop test', async()=>{
    const browser:Browser = await firefox.launch({headless: false}); //type of browser is Browser
    const page:Page = await browser.newPage(); // Use quick fix to import Browser and Page
    
    await page.goto('https://practicesoftwaretesting.com/');

    //search hammer
    const search = await page.locator('#search-query');
    search
})