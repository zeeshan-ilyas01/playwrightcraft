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

playwrightcraft/
│
├── tests/                 # All test files
│   └── example.spec.js     # Sample test case
│
├── playwright.config.js   # Playwright test configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
``


###  websites used for testing
https://demo.applitools.com
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F

commands and their purposes
import {test, expect} from '@playwright/test'
this imports test and expect module from playwright library
await page.pause()
this will pause the project open the record a test.

await context.close();
It closes the entire browser context, which includes all the pages/tabs opened within it.
Close all tabs and clean up everything for this browser profile."



viewportSize() for screen size

retry can be used for sigle and group of tests.
✍️ Author:
Zeeshan
Passionate about modern, scalable test automation.