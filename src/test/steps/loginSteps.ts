import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { LoginPage } from "../pages/LoginPage";
setDefaultTimeout(60000);

Given('User navigation to the application', async function () {
    const loginPage = new LoginPage(pageFixture.page);
    await loginPage.goto();
});

Given('User clicks on the login link', async function () {
    const loginPage = new LoginPage(pageFixture.page);
    await loginPage.clickLoginLink();
});

When('User enter the username as {string}', async function (username) {
    const loginPage = new LoginPage(pageFixture.page);
    await loginPage.enterUsername(username);
});

When('User enter the password as {string}', async function (password) {
    const loginPage = new LoginPage(pageFixture.page);
    await loginPage.enterPassword(password);
});

Given('User clicks on the login button', async function () {
    const loginPage = new LoginPage(pageFixture.page);
    await loginPage.clickLoginButton();
});

Then('Login should be successful', async function () {
    const loginPage = new LoginPage(pageFixture.page);
    const loginSuccess = await loginPage.isLoginSuccessful();
    expect(loginSuccess).toBeTruthy();
});
