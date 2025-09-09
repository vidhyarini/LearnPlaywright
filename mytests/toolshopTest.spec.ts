import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('toolshop test', async()=>{
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'}); //type of browser is Browser
    //const browser:Browser = await chromium.launch({headless: false , channel: 'chrome'}); //type of browser is Chrome, Chrome is different from Chromium
    const page:Page = await browser.newPage(); // Use quick fix to import Browser and Page
    
    await page.goto('https://practicesoftwaretesting.com/');

    ////////USE await WHERE ACIONS ARE PERFORMED////////

    //search hammer and check title

    const title = await page.title();
    console.log('Page title: ', title);
//different types of locator
    //1. id
   // const search = await page.locator('#search-query');
    const search = page.locator('id=search-query').describe("search tools"); // only id can be used like this id=idvalue not anyother locater
    await search.fill("Hammer");

    //2. class name
    const logo = page.locator('.navbar-brand');  // use class name with a dot(.)
    const logoExist = await logo.isEnabled();
    console.log("logoExist: "+logoExist);

    //3. text
    // button with link(use unique button)

    const homebtn:Locator = page.locator('text=Home');
    const homebtnExist = await homebtn.isEnabled();
    console.log(homebtnExist);

    // tool text 
    const tooltext:Locator = await page.locator('text=Bolt Cutters');
    const tooltextExist = await tooltext.isEnabled();
    console.log("tooltextExist: " + tooltextExist);

    //4. css - no need to give css in locator like this css=input#search-query , you can use but not needed
    const searchbox:Locator = page.locator('input#search-query') // this is using id
    const searchboxExist = await searchbox.isEnabled();
    console.log("searchboxExist: "+searchboxExist);

    //example with name,type,datatest - do not use many locators with same name=category_id
    //check in the Elements console in F12 to verify number of elements found. If onlt 1 of 1 then use
    const sortdropbox:Locator = page.locator('select[data-test="sort"]') // this is using name
    const sortdropboxExist = await sortdropbox.isEnabled();
    console.log("sortdropboxExist: "+sortdropboxExist);
    

    //5. xpath
    const searchfield = page.locator('//input[@id="search-query"]'); // xpath=//input[@id="search-query"] also correct
    const searchfieldExist = await searchfield.isEnabled();
    console.log("searchfieldExist: "+searchfieldExist);
    
    //6. data-test
    const searchbtn:Locator = page.locator('[data-test="search-submit"]').describe("submit button");
    const searchbtnExist = await searchbtn.isEnabled();
    console.log("searchbtnExist: "+searchbtnExist);
    await searchbtn.click();

    await page.screenshot({path: 'search.png'})

    expect(title).toContain('Practice Software Testing - Toolshop');

    await browser.close
})