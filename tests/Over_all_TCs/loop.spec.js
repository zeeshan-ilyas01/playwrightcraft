import { test, expect } from '@playwright/test'

test('loop in drop down list', async ({ page }) => {


    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    //await page.locator("//select[@id='state']").selectOption({ label: "Goa" })

    await page.locator("//select[@id='state']").selectOption({ label: "Goa" })

    //always go with label and than go with values and in last go with index
    await page.waitForTimeout(5000)
    await page.locator("//select[@id='state']").selectOption({ value: "Assam" })

    await page.waitForTimeout(5000)
    await page.locator("//select[@id='state']").selectOption({ index: 5 })



    let state = await page.$('#state')
    let allElements = await state.$$("option")


    let ddStatus = false
    // $$ array of elements

    for (let i = 0; i < allElements.length; i++) {

        let elements = allElements[i]
        let value = await elements.textContent()

        console.log("Value from drop down status  " + value)

        if (value.includes("Rajasthan")) {

            ddStatus = true
            break
        }
        console.log(" Value from drop down using loop" + value)
    }

    await expect(ddStatus).toBeTruthy()

})