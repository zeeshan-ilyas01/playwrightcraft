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


### 4. Run Tests in Headed Mode (visible browser window)
```

npx playwright test --headed
```

### .5 Allure reports
```
npm install -D allure-playwright
npx playwright test --reporter=line,allure-playwright
```


Allure Report with Playwright [Screenshots, Videos & Traces]
Step1: Install Allure Report command-line tool

npm install -g --save-dev allure-commandline
Step2: Install the Allure Playwright adapter.

npm install --save-dev allure-playwright
Step3: Add below config in playwright.config.js file.

reporter:[
['html'],
['allure-playwright']
],
Step4: Run Playwright tests.

npx playwright test
Step5: Generate Allure Report

npx allure serve allure-results
or

allure generate allure-results --clean
allure open



### .6 View the report
```
allure generate ./allure-results -o ./allure-report
```

### .Other

playwrightcraft/
│
├── tests/                 # All test files
│   └── example.spec.js     # Sample test case
│
├── playwright.config.js   # Playwright test configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation





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

How to update to playwright to the latest version
```
npm install -D @playwright/test@latest
```

Playwright Important Commands
npx playwright install

Install Browsers manually.
npx playwright test

Runs the end-to-end tests.
npx playwright test --ui

Starts the interactive UI mode.
npx playwright test --project=chromium

Runs the tests only on Desktop Chrome.
npx playwright test example

Runs the tests in a specific file.
npx playwright test --debug

Runs the tests in debug mode.
npx playwright codegen

Auto generate tests with Codegen.
We suggest that you begin by typing:
```
npx playwright test
```
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

### Git Commands

```
git init
git status
git add filename or git add .
git commit -m "commit message"
git log
git branch -M main
git branch 
git remote add origin githubURL
git push -u origin main
```

###  Websites used for testing

https://demo.applitools.com
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://freelance-learn-automation.vercel.app/login
https://the-internet.herokuapp.com/upload  
https://the-internet.herokuapp.com/
https://docs.oracle.com/javase/8/docs/api/


✍️ Author:
Zeeshan
Passionate about modern, scalable test automation.