import {test,expect} from '@playwright/test'


await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByRole('listitem').filter({ hasText: 'Sanuri Sarath' }).locator('i').click();
await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
await page.getByRole('listitem').filter({ hasText: 'Sanuri Sarath' }).locator('i').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();