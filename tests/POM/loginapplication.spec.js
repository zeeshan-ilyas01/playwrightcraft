import { test, expect } from '@playwright/test'
import LoginPageclass from '../../pages/loginpage.js'
import HomePageClass from '../../pages/homepage.js'




test('loging with POM', async ({ page }) => {
    const login = new LoginPageclass(page)
    const signout = new HomePageClass(page)
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await login.loginToAppliatio()
    await page.waitForTimeout(5000)
    await signout.logoutfromApplication()
})