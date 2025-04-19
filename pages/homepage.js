export default class HomePageClass{

    constructor(page){

        this.page=page
        this.menu="//img[@alt='menu']"
        this.signout="//button[normalize-space()='Sign out']"
         ////button[@class="nav-menu-item"] and
        
    }



async logoutfromApplication(){

    await this.page.click(this.menu)
    await this.page.click(this.signout)
}

}