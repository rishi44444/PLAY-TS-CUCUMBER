import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async goto() {
    await this.page.goto('https://bookcart.azurewebsites.net/');
  }

  async clickLoginLink() {
    await this.page.locator("//button[@mattooltip='Login']").click();
  }

  async enterUsername(username: string) {
    await this.page.locator("input[formcontrolname='username']").fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator("input[formcontrolname='password']").fill(password);
  }

  async clickLoginButton() {
    await this.page.locator("//span[text()='Login']").click();
    await this.page.waitForTimeout(2000);
  }

  async isLoginSuccessful(): Promise<boolean> {
    return this.page.locator("//span[text()=' ortoni']").isVisible();
  }
} 