import { test, expect } from '@playwright/test'


test('test iframes', async ({ page }) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
   const iframevname= await page.frameLocator("//frame[@name='packageListFrame']")
//frame[@name='packageListFrame']

await iframevname.locator("//a[text()='java.applet']").click()
await page.pause()



})