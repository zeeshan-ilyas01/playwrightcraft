import { test, expect } from '@playwright/test'
import testdata from'../logintestdata.json'
//using import -- error was showing with below statement. usage of require as it doesn't supporst type module.
//const testdata = JSON.parse(JSON.stringify(require("../logintestdata.json")))

test.describe("Data driven login Test",function(){

    for(const data of testdata)
    {
       // test.describe('login with user ${data.id}',function(){
        test.describe(`login with user ${data.id}`, function() {

            test('login to application', async ({ page }) => {
                

                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.locator("//input[@id='email1']").fill(data.username)
                console.log('testdata'+data.username)
                await page.locator("//input[@id='password1']").fill(data.password)
               // await page.locator("//button[@class='submit-btn']").click()
              // await page.pause()        
            })  
        })
    }
})