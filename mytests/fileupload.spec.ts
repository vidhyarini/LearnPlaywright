import {test, expect, type Browser, type Page, type Locator} from '@playwright/test'
import * as path from 'path';
import {webkit, chromium, firefox} from 'playwright'

test('upload a file', async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();

    await page.goto('https://demo.guru99.com/test/upload/');

    //single upload
    await page.locator("input[name='uploadfile_0']").setInputFiles('/Users/VRT003/Pictures/logo.png'); // use / in the file path
    
    await page.waitForTimeout(1500); 
    //deselect the files from uploading
    await page.locator("input[name='uploadfile_0']").setInputFiles([]); // unselect the uploaded file

    await page.waitForTimeout(1500); 

    //upload file from buffer memory
    await page.locator("input[name='uploadfile_0']").setInputFiles({
        name: 'test.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is test')
    });

    
    //multiple upload
    /* await page.locator("input[name='uploadfile_0']")
    .setInputFiles([
        path.join('/Users/VRT003/Pictures/logo.png'),
        path.join('/Users/VRT003/Pictures/logo1.png')]); // this application doesn't support the multiple files upload
 */
    await page.waitForTimeout(3000); // added to check the testrun

    await browser.close();

});