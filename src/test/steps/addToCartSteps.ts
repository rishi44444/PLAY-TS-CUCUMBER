import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60000);

When('User search for a {string}', async function (book) {
    await pageFixture.page.locator("//input[@placeholder='Search books or authors']").fill(book); 
    await pageFixture.page.waitForTimeout(2000);
    await pageFixture.page.locator("mat-option[role='option']").click();
    await pageFixture.page.waitForTimeout(2000);
});

When('User add the book to the cart', async function () {
    await pageFixture.page.locator("//span[normalize-space()='Add to Cart']").click();
    await pageFixture.page.waitForTimeout(2000);
});

Then('the cart bag should get updated', async function () {
    await pageFixture.page.locator("//a[normalize-space()='Slayer']").isVisible();  
});

When('User click on the cart icon', async function () {
    await pageFixture.page.locator("//button[2]/mat-icon").click();
    await pageFixture.page.waitForTimeout(2000);
})
