import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60000);

Given('User navigation to the application', async function () {
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/'); 
});

Given('User clicks on the login link', async function () {
  await pageFixture.page.locator("//button[@mattooltip='Login']").click();
});

When('User enter the username as {string}', async function (username) {
    await pageFixture.page.locator("input[formcontrolname='username']").fill(username);
});

When('User enter the password as {string}', async function (password) {
    await pageFixture.page.locator("input[formcontrolname='password']").fill(password);
});

Given('User clicks on the login button', async function () {
    await pageFixture.page.locator("//span[text()='Login']").click();
    await pageFixture.page.waitForTimeout(2000);
});

Then('Login should be successful', async function () {
    const loginSuccess = await pageFixture.page.locator("//span[text()=' ortoni']").isVisible();
    expect(loginSuccess).toBeTruthy();
});
