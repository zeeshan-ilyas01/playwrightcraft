import {test, expect} from '@playwright/test'


test ('verify and uplaod test case', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/upload')
await page.locator('#file-upload').setInputFiles("./upload/While relogging with gmail1.png")

//await page.getByRole('id' ,{name:id="file-upload-button"}).setInputFiles("D:\RDZ\Image\While relogging with gmail1.png")

await page.locator("//input[@id='file-submit']").click()
expect(await page.locator("//h3")).tohavetext("File Uploaded!")
})