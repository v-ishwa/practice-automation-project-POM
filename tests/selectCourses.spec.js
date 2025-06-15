import { test, expect } from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";

test("Visit Selenium Course in Udemy", async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const coursesPage = new CoursesPage(page);

  await loginPage.goto();
  await expect(page).toHaveURL(/practice-test-login/);
  await loginPage.login("student", "Password123");
  await expect(page).toHaveURL(/logged-in-successfully/);
  await homePage.navigateToCourse();
  await expect(page).toHaveURL(/courses/);
  const newPage = await coursesPage.openSeleniumCourse(context);
  await newPage.waitForLoadState();
  await expect(newPage).toHaveURL(/udemy\.com/);
})