import { test, expect } from '@playwright/test'
import LoginPageclass from '../../pages/loginpage.js'





test('loging with POM', async ({ page }) => {


    const login = new LoginPageclass(page)
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await login.loginToAppliatio()


})