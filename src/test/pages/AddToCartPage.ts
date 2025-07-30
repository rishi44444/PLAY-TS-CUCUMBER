import { BasePage } from './BasePage';

export class AddToCartPage extends BasePage {
  async searchBook(book: string) {
    await this.page.locator("//input[@placeholder='Search books or authors']").fill(book);
    await this.page.waitForTimeout(2000);
    await this.page.locator("mat-option[role='option']").click();
    await this.page.waitForTimeout(2000);
  }

  async addBookToCart() {
    await this.page.locator("//span[normalize-space()='Add to Cart']").click();
    await this.page.waitForTimeout(2000);
  }

  async isCartUpdated(): Promise<boolean> {
    return this.page.locator("//a[normalize-space()='Slayer']").isVisible();
  }

  async clickCartIcon() {
    await this.page.locator("//button[2]/mat-icon").click();
    await this.page.waitForTimeout(2000);
  }
} 