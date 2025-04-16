import {test,expect} from '@playwright/test'

test ('select values from drop down', async ({ page }) => {

        await page.goto("https://freelance-learn-automation.vercel.app/signup")

        await page.locator("//select[@id='state']").selectOption({label:"Goa"})

//always go with label and than go with values and in last go with index
        await page.waitForTimeout(5000)
        await page.locator("//select[@id='state']").selectOption({value:"Assam"})

        await page.waitForTimeout(5000)
        await page.locator("//select[@id='state']").selectOption({index:5})

        await page.waitForTimeout(5000)

      const statevalue=  await page.locator("//select[@id='state']").textContent()
      console.log(' State names' +statevalue)
      await expect(statevalue.includes('BengalAndaman')).toBeTruthy()

    })

    test ('select values from drop down test 2', async ({ page }) => {

        await page.goto("https://freelance-learn-automation.vercel.app/signup")

        await page.locator("//select[@id='state']").selectOption({label:"Goa"})

//always go with label and than go with values and in last go with index
        await page.waitForTimeout(5000)
        await page.locator("//select[@id='state']").selectOption({value:"Assam"})

        await page.waitForTimeout(5000)
        await page.locator("//select[@id='state']").selectOption({index:5})

        await page.waitForTimeout(5000)

      const statevalue=  await page.locator("//select[@id='state']").textContent()
      console.log(' State names' +statevalue)
      await expect(statevalue.includes('BengalAndam3an')).toBeTruthy()

    })
