# 🎭 Playwrightcraft

Welcome to **Playwrightcraft** — an end-to-end testing project built with **Playwright (JavaScript)**. This project is a showcase of my expertise as a Playwright Engineer, focused on building robust, scalable, and maintainable automated test suites.

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev) – For browser automation
- JavaScript (Node.js)
- Cross-browser support: Chromium, Firefox, WebKit

---

## 📁 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/zeeshan-ilyas01/playwrightcraft.git
cd playwrightcraft
```
### 2. Install Dependencies
```bash
npm install

```
### 3. Install Playwright Browsers
```
npx playwright install


🚀 Running Tests
Run All Tests
bash

npx playwright test
``

Run Tests in a Specific Browser
```bash

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```


### .4 Run Tests in Headed Mode (visible browser window)
```bash

npx playwright test --headed
```
```
```
### .5 Allure reports
```
npm install -D allure-playwright
npx playwright test --reporter=line,allure-playwright
```
### .6 View the report
```
allure generate ./allure-results -o ./allure-report
```

### .Other
``
playwrightcraft/
│
├── tests/                 # All test files
│   └── example.spec.js     # Sample test case
│
├── playwright.config.js   # Playwright test configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
``


###  Websites used for testing
https://demo.applitools.com
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://freelance-learn-automation.vercel.app/login

https://the-internet.herokuapp.com/upload  
https://the-internet.herokuapp.com/
https://docs.oracle.com/javase/8/docs/api/

## commands and statements

To execute specific file 
```npx playwright test tests/codegen.spec.js
```
For headed mode
```
```npx playwright test tests/Filename.spec.js --headed
```
 import {test, expect} from '@playwright/test' 
this imports test and expect module from playwright library
await page.pause()
this will pause the project open the record a test.

await context.close();
It closes the entire browser context, which includes all the pages/tabs opened within it.
Close all tabs and clean up everything for this browser profile."



viewportSize() for screen size

retry can be used for sigle and group of tests.



### Page Object Model
 important concepts before implement POM 
 class
 constructors
 methods


### pages
```
export default login{
     constructor(page) {

        this.page = page
        this.username="#email1"
     }
     async loginToAppliatio() {

        await this.page.fill(this.username, "admin@email.com")
      
    }

}
```
export default makes importing cleaner and more intuitive:



### main
```
import { test, expect } from '@playwright/test'
import LoginPageclass from '../../pages/loginpage.js'
const login = new LoginPageclass(page)
test('loging with POM', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login')
    await login.loginToAppliatio()
    })

```


✍️ Author:
Zeeshan
Passionate about modern, scalable test automation.