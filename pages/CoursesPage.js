class CoursesPage {
  constructor(page) {
    this.page = page;
    this.seleniumLink = page
      .getByText("Selenium WebDriver: Selenium Automation Testing with Java");
  }

  async openSeleniumCourse(context) {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      this.seleniumLink.click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}

export default CoursesPage;
