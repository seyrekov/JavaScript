const { Given, When, Then } = require('cucumber')
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('I am on the home page', async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://magento.softwaretestingboard.com/');
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When('I navigate to the Tops category', async function() {
  await driver.findElement(By.linkText("Women")).click();
  await driver.findElement(By.linkText("Tops")).click();
});

When('I add the Breathe-Easy Tank to the cart', async function() {
  await driver.findElement(By.linkText("Breathe-Easy Tank")).click();
  await driver.findElement(By.css("#product-addtocart-button > span")).click();
});

Then('I should see the error message for the required size selection', async function() {
  const errorMessage = await driver.findElement(By.css(".message.error"));
  const errorMessageText = await errorMessage.getText();
  assert.strictEqual(errorMessageText, "You need to choose options for your item.");
});

After(async function() {
  await driver.quit()
})