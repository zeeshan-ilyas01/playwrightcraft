import { test, expect } from '@playwright/test'

test(' handle the auto suggestion ', async ({ page }) => {


    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Testing")

    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")

    await page.close()
})

test(' handle the auto suggestion - find the specific elelment and than select', async ({ page }) => {


    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("test")

    await page.waitForSelector("//li[@role='presentation']")

    const elements = await page.$$("//li[@role='presentation']")

    //$$ this method finds all elements matching specified selctor within page. if no element match the selctor, return value
    //resolve.
    for (let i = 0; i < elements.length; i++) {

        const text = await elements[i].textContent()

        if (text.includes('point')) {

            await elements[i].click()
            break
        }
    }
  
})