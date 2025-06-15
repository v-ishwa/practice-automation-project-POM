import { test, expect } from "@playwright/test";

import LoginPage from "../pages/LoginPage";

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("student", "Password123");
  await expect(page).toHaveURL(/logged-in-successfully/);
});
