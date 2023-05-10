const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('the user is on the Luma website', async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://magento.softwaretestingboard.com/');
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When('they enter "didi" in the search bar', async function () {
  await driver.findElement(By.id('search')).click();
  await driver.findElement(By.id('search')).sendKeys('didi', Key.RETURN);
});

Then('they should see accurate search results', async function () {
  let resultTitle = await driver.findElement(By.css('.page-title span')).getText();
  assert.strictEqual(resultTitle, 'Didi Sport Watch');
  let firstResult = await driver.findElement(By.css('.product-item:first-child .product-item-name a')).getText();
  assert.strictEqual(firstResult, 'Didi Sport Watch');
});

After(async function () {
  await driver.quit();
});