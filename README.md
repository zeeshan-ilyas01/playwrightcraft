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


playwrightcraft/
│
├── tests/                 # All test files
│   └── example.spec.js     # Sample test case
│
├── playwright.config.js   # Playwright test configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation



✍️ Author:
Zeeshan
Passionate about modern, scalable test automation.