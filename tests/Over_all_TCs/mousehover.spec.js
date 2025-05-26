import { test, expect } from "@playwright/test"


test('mouse hover', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    //await page.getByPlaceholder("Enter Email").fill('admin@email.com')
    await page.locator("//input[@id='email1']").fill('admin@email.com');
    //await page.getByPlaceholder("Enter password").fill('123456');
    await page.locator("//input[@id='password1']").fill('admin@123');
    //await page.pause()
    await page.getByRole("button",{name:"Sign in"}).click()
    //await page.pause()
   // await page.waitForURL('https://freelance-learn-automation.vercel.app/')
    await page.locator("//span[normalize-space()='Manage']").hover()
    await page.locator("//a[normalize-space()='Manage Courses']").click()
    //await page.locator("/button[normalize-space()='Sign in ']").click();
})