// in this js file we have the locators and methods that will perform actions on patricual page.
import { expect } from "@playwright/test"
export default class LoginPageclass {

    constructor(page) {

        this.page = page
        /* this.page = username.locator(//input[@id="email1"])
             this.password = locator["//input[@id="password1"]"]
             this.submit = locator //button[@type="submit"][normalize-space()='Sign in']
        */

        this.header = "//h2[contains(text(), 'Sign In')]"
        this.username = "#email1"
        this.password = "//input[@placeholder='Enter Password']"
        this.loginbutton = "//button[text()='Sign in']"
    }

    async verifySignInHeader() {

        await expect(this.page.locator(this.header)).toBeVisible()

    }

    async loginToAppliation() {

        await this.page.fill(this.username, "admin@email.com")
        await this.page.fill(this.password, "admin@123")
        await this.page.click(this.loginbutton)
    }

    async loginToAppliationWParamaterization(user,pass) {

        await this.page.fill(this.username, user)
        await this.page.fill(this.password, pass)
        await this.page.click(this.loginbutton)
    }

}