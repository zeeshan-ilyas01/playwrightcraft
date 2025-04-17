import { test, expect } from '@playwright/test'

test("Keyboard activities", async ({ page }) => {


    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Playwright")
    await page.keyboard.press("Enter")
    await page.close()


})

test("Keyboard activities2", async ({ page }) => {


    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Playwright")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")
    await page.close()

})



test("Keyboard activities2", async ({ page }) => {


    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Playwright")
    await page.keyboard.press("Control+C")

    await page.close()

})

test("Keyboard activities3", async ({ page }) => {


    await page.goto("https://www.google.com")

    await page.keyboard.type("Testing w Dev")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for (let i = 0; i < 6; i++) {
        await page.keyboard.press("ArrowLeft")
    }

    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    await page.close()

})