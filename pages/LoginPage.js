class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Submit" });
  }

  async goto() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

}

export default LoginPage;
