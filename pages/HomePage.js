class HomePage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.getByRole("link", { name: "Log Out" });
    this.coursesTab = page.getByRole('link', { name: 'Courses', exact: true });
  }

  async logout () {
    this.logout.click();
  }

  async navigateToCourse() {
    await this.coursesTab.click();
  }

}

export default HomePage;
