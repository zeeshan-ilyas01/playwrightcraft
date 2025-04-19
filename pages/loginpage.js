// in this js file we have the locators and methods that will perform actions on patricual page.

export default class LoginPageclass {

    constructor(page) {

        this.page = page
       /* this.page = username.locator(//input[@id="email1"])
            this.password = locator["//input[@id="password1"]"]
            this.submit = locator //button[@type="submit"][normalize-space()='Sign in']
*/


this.username="#email1"
this.password="//input[@placeholder='Enter Password']"
this.loginbutton="//button[text()='Sign in']"


    }



    async loginToAppliatio() {

        await this.page.fill(this.username, "admin@email.com")
        await this.page.fill(this.password, "admin@123")
        await this.page.click(this.loginbutton)
    }

}

//module.exports=LoginPage;