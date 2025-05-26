import {test, expect} from '@playwright/test'

test ('Demo multipe drop down locators', async({page})=>{

await page.goto('https://freelance-learn-automation.vercel.app/signup')
await page.locator('#hobbies').selectOption(['Reading','Singing'])

await page.waitForTimeout(3000)



})