import { test, expect } from '@playwright/test'


test('verify error messages', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.pause()
    
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    await page.getByRole('button', { name: 'Login' }).click();
    const errormessage = await page.getByText('Invalid credentials').textContent()

    expect(errormessage.includes("Invalid")).toBeTruthy();
    //expect(errormessage=='Invalid error').toBeTruthy()

    console.log('Error message ' + errormessage)
    // ---------------------
    try {
        await context.close();
    } catch (e) {
        console.error('Failed to close context:', e);
    }
    //await browser.close();
})