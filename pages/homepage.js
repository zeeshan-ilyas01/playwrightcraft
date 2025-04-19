import { expect } from "@playwright/test"
export default class HomePageClass {

    constructor(page) {

        this.page = page
        this.menu = "//img[@alt='menu']"
        this.signout = "//button[normalize-space()='Sign out']"
        this.manage = "//span[normalize-space()='Manage']"
       
       
        ////button[@class="nav-menu-item"] and

    }

    async verifyManageOptions() {
        await expect(this.page.locator(this.manage)).toBeVisible()

    }

    async logoutfromApplication() {

        await this.page.click(this.menu)
        await this.page.click(this.signout)
    }

}