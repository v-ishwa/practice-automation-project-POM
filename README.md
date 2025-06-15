# Practice Test Automation - Playwright POM Project

This is a beginner-friendly automation project using **Playwright (JavaScript)** with **Page Object Model (POM)** structure.  
The test cases are based on flows from [Practice Test Automation](https://practicetestautomation.com/practice-test-login/).

---

## ✅ Features Covered

- Login functionality (valid & invalid)
- Page Object Model (POM) structure
- Assertions using `expect`
- Multi-tab check using `context`

---

## 📁 Project Structure

┣ 📂pages/
┃ ┣ 📄 LoginPage.js
┃ ┗ 📄 HomePage.js
┃ ┗ 📄 CoursesPage.js
┣ 📂tests/
┃ ┗ 📄 login.js
┃ ┗ 📄 logout.js
┃ ┗ 📄 negativeLogin.js
┃ ┗ 📄 selectCourses.js
📄 playwright.config.js
📄 README.md

---

🛠 Tech Stack
Playwright (JavaScript)

Node.js

POM structure

Git & GitHub

---

## 🚀 How to Run
```bash

# 1. Install dependencies
npm install

# 2. Run all tests
npx playwright test

# 3. Run with trace viewer enabled
npx playwright test --trace on

# 4. Open Playwright HTML report
npx playwright show-report




