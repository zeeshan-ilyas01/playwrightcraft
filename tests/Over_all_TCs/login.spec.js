
import {test, expect} from '@playwright/test'

test.skip ('Demo login 1', async({page})=>{

await page.goto('https://demo.applitools.com/')
await page.pause()
await page.getByRole('textbox', { name: 'Enter your username' }).fill('TEst');
await page.getByRole('textbox', { name: 'Enter your password' }).fill('123123');
await page.getByRole('link', { name: 'Sign in' }).click();
await page.pause()

})

test.skip('Demo 2', async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.pause()
await page.getByRole('textbox', { name: 'Username' }).click();
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Username' }).press('Enter');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('listitem').filter({ hasText: 'John Doe' }).locator('i').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();
await page.getByRole('img', { name: 'company-branding' }).click();

// ---------------------
await context.close();
await browser.close();

})

test('Demo 3', async({page})=>{

    await page.pause()

})