import {test, expect, type BrowserContext, type Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('No Cognitomode test', async()=>{

    // open browser in incognito mode
    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless: false,channel: 'chrome'});

    const page:Page = await browser.newPage();
        
    await page.goto('https://practicesoftwaretesting.com/');

    const title = await page.title();
    console.log('Page title: ', title);
})