import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('select based on drop down test', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    // Generic click
    //await page.getByRole('button').click();

    // Double click
    await page.getByText('Double-Click Me To See Alert').dblclick(); // will dislay a popup

    // Right click
    await page.getByText('right click me').click({ button: 'right' });

    await page.getByRole('listitem').filter({ hasText: 'Quit' }).click();

    // Shift + click
    await page.getByText('Insurance Project').click({ modifiers: ['Shift'] });

     // Ctrl + click on Windows and Linux
    // Meta + click on macOS
   // await page.getByText('Item').click({ modifiers: ['ControlOrMeta'] });

   /* // Hover over element
    await page.getByText('Item').hover();*/

    // Click the top left corner
  //  await page.getByText('Item').click({ position: { x: 0, y: 0 } }); 

    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

})