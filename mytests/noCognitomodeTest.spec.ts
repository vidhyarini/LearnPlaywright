import {test, expect, type BrowserContext, type Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('No Cognitomode test', async()=>{

    // open browser in incognito mode
    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless: false,channel: 'chrome'});
    const page:Page = await browser.newPage();
    /* const pages = await browser.pages(); 
    // In no cognito mode there will be a default balnk page and the actual page so we are avoiding the blank page 2-1 = 1
    const page:Page = pages[0]; //this is giving error*/

        
    await page.goto('https://practicesoftwaretesting.com/');

    const title = await page.title();
    console.log('Page title: ', title);

    await browser.close();
})