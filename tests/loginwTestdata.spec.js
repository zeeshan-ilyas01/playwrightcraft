import { test, expect } from '@playwright/test'

const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test('login with test data', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill(testdata.username)
    await page.locator("//input[@id='password1']").fill(testdata.password)
    await page.locator("//button[@class='submit-btn']").click()
   // await page.pause()

})