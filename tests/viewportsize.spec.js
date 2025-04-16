import {test,expect} from '@playwright/test'

test.use({viewport:{width:1500, height:1000}})

// view port can be changed from playwright.config.js file - but that will apply to the whole porject for specifc
// test cases we can use test.use function and set the desired view port sizes
test('size of browser', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.pause()
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

})