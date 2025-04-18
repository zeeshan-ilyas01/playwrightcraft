import {test, expect} from '@playwright/test'
//const { test, expect } = require('@playwright/test');


test('working with load state', async ({page})=>{

await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.locator("//a[@class='subLink' and text()='New user? Signup']").click()
await page.waitForLoadState('networkidle')

//await page.locator("//button[@class='submit-btn' and @type='submit']").click()
//h2[@class='errorMessage' and contains(text(), 'Email and Password is required')]
//input[@id='password1' and @placeholder='Enter Password']
//h2[@class='errorMessage' and contains(text(), "USER Email Doesn't Exist")]
//a[@class='subLink' and text()='New user? Signup']


const count= await page.locator("//input[@type='checkbox']").count()
expect(count).toBe(7)

})