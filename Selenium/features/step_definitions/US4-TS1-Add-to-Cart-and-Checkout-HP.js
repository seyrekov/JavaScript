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

When('they proceed to checkout', async function () {
  await driver.findElement(By.id("top-cart-btn-checkout")).click();
  await driver.findElement(By.css("strong > span:nth-child(2)")).click();
  await driver.findElement(By.css(".opc-block-summary")).click();
});

Then('they should see the product in the basket case', async function () {
// Verify that the product was added to the cart and visible on the checkout page
  const productName = await driver.findElement(By.css(".product-item-name > a")).getText();
  assert.strictEqual(productName, "Didi Sport Watch", "Product name did not match expected value");

  const numItems = await driver.findElement(By.css(".counter-number")).getText();
  assert.strictEqual(numItems, "1", "Number of items in cart did not match expected value");
});

After(async function () {
  await driver.quit();
})