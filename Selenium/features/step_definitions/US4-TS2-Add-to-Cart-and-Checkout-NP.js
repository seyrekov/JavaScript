const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('the user is on the home page of the Luma website', async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get("https://magento.softwaretestingboard.com/");
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When(/^they click on the "Gear" menu$/, async function () {
  await driver.findElement(By.css("#ui-id-6 > span:nth-child(2)")).click();
});

When(/^they click on the "Watches" menu$/, async function () {
  await driver.findElement(By.linkText("Watches")).click();
});

When(/^they click on the "Didi Sport Watch" product$/, async function () {
  await driver.findElement(By.linkText("Didi Sport Watch")).click();
});

When('they add a product to the cart', async function () {
  await driver.findElement(By.css("#product-addtocart-button > span")).click();
});

When('they navigate to the cart', async function () {
  await driver.findElement(By.css(".showcart")).click();
});

When(/^they click on the cart quantity$/, async function () {
  await driver.findElement(By.css(".counter-number")).click();
});

When(/^they click on the "Remove" button$/, async function () {
  await driver.findElement(By.linkText("Remove")).click();
});

Then(/^I should not be able to checkout with an empty basket$/, async function () {
  const emptyCartMessage = await driver.findElement(By.css(".cart-empty"));
  const isDisplayed = await emptyCartMessage.isDisplayed();
  assert.ok(isDisplayed, "Expected empty cart message to be displayed, but it was not");
});

After(async function () {
  await driver.quit();
})