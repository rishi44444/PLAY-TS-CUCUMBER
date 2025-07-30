import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from "../../hooks/pageFixture";
import { AddToCartPage } from '../pages/AddToCartPage';
setDefaultTimeout(60000);

When('User search for a {string}', async function (book) {
    const addToCartPage = new AddToCartPage(pageFixture.page);
    await addToCartPage.searchBook(book);
});

When('User add the book to the cart', async function () {
    const addToCartPage = new AddToCartPage(pageFixture.page);
    await addToCartPage.addBookToCart();
});

Then('the cart bag should get updated', async function () {
    const addToCartPage = new AddToCartPage(pageFixture.page);
    const updated = await addToCartPage.isCartUpdated();
    // Optionally, add an assertion here if you want
});

When('User click on the cart icon', async function () {
    const addToCartPage = new AddToCartPage(pageFixture.page);
    await addToCartPage.clickCartIcon();
});
