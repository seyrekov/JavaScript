const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('the user is on the Luma website', async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://magento.softwaretestingboard.com/');
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When('the user enters a non-existing "PRODUCT_NAME" in the search bar', async function () {
  await driver.findElement(By.id('search')).click();
  await driver.findElement(By.id('search')).sendKeys('didia', Key.RETURN);
});

Then('they should not be navigated to any product page', async function () {
  let currentUrl = await driver.getCurrentUrl();
  assert.strictEqual(currentUrl, 'https://magento.softwaretestingboard.com/catalogsearch/result/?q=didia');
});

And('they should be redirected to a separate page with an error message indicating that no matching products were found', async function () {
  let errorMessage = await driver.findElement(By.css('.page.messages > div')).getText();
  assert.strictEqual(errorMessage, 'Your search returned no results.');
});

After(async function () {
  await driver.quit();
});