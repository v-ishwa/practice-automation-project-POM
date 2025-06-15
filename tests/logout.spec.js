import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Logout", async ({ page }) => {

  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login("student", "Password123");
  await page.getByRole("link", { name: "Log Out" }).click();
  await expect(page).toHaveURL(/practice-test-login/);
  await expect(page.locator("#username")).toBeVisible();
});
