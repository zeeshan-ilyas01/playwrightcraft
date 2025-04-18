import { test } from '@playwright/test'

//button[text()='Click for JS Alert']

//button[text()='Click for JS Confirm']

//button[text()=''Click for JS Prompt]

//p[@id='result']


test.skip('alert handling ', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        
    page.on('dialog', async (d) => {

        expect(d.message()).toContain("I am a JS Alert")
        expect(d.type()).toContain("alert")
        await d.accept()
    })
    await page.locator("//button[text()='Click for JS Alert']").click()
   })

test.skip('alert handling 2', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.locator("//button[text()='Click for JS Confirm']").click()
        
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        // await dialogWindow.accept()
        await dialogWindow.dismiss()
    }) 
})


test('alert handling 3', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   // await page.locator("//button[text()='Click for JS Prompt']").click()
   await page.waitForTimeout(5000)
    await page.locator("//button[normalize-space()='Click for JS Prompt']")
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain("I am a JS prompt")
        // await dialogWindow.accept()
      //  await dialogWindow.dismiss()

      await dialogWindow.accept('test')
    }) 


    await page.waitForTimeout(5000)
})

