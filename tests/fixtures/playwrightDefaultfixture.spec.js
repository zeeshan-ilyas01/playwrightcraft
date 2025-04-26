import { test, expect } from '@playwright/test'



test('Playwright default brwoser fixture and context control', async ({ browser }) => {
    const context = await browser.newContext({baseURL:"https:www.google.com"})
    const page = await context.newPage();
   await  page.goto("/search?q=test")

   //await page.pause()
})


test.only('Playwright default brwoser fixture and context control2', async ({ browser }) => {
    const context = await browser.newContext({baseURL:"https://playwright.dev", colorScheme:"dark"})
    const page = await context.newPage();
   await  page.goto("/")

   //await page.pause()
})



test.only('Playwright default brwoser fixture and context control3', async ({ browser }) => {
    const context = await browser.newContext({baseURL:"https://playwright.dev", colorScheme:"light"})
    const page = await context.newPage();
   await  page.goto("/")

   //await page.pause()
})

test('Playwright default page fixture', async ({ page }) => {
    
    await page.goto("https:www.google.com")
})