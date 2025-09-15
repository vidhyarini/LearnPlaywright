import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('select based on drop down test', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://practicesoftwaretesting.com/');

    await page.getByTestId('nav-contact').click();


    const selectSubject = 'select#subject'; // select method and id of the Subject locator
    //await page.selectOption(selectSubject, {value: 'warranty'}); // using value
    //await page.selectOption(selectSubject, {label: 'Status of my order'}); // using label thats text
    //await page.selectOption(selectSubject, {index: 1}); // using index thats first one

    //get all the options from this Subject field using css selector
    // this is our css sector -> select#subject > option
    const allOptions = await page.$$(selectSubject + ' > option'); // this method will return all the elements
    console.log(allOptions.length);

    for(const e of allOptions){
        const textval = await e.textContent(); // returns all the text from subject dropdown
        console.log(textval);
        if(textval === 'Payments'){
            await page.selectOption(selectSubject,{label: textval});
            break;
        }
    }


    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();
})