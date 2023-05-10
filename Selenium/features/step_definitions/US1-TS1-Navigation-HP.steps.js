const { Given, When, Then } = require('cucumber')
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('I am on the home page', async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://magento.softwaretestingboard.com/');
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When('I click on the {string} menu item', async function (menuItem) {
  switch (menuItem) {
    case "What's New":
      await driver.findElement(By.css('#ui-id-3 > span')).click();
      break;
    case "Men":
      await driver.findElement(By.css('#ui-id-4 > span:nth-child(2)')).click();
      break;
    case "Women":
      await driver.findElement(By.css('#ui-id-5 > span:nth-child(2)')).click();
      break;
    case "Gear":
      await driver.findElement(By.css('#ui-id-6 > span:nth-child(2)')).click();
      break;
    case "Training":
      await driver.findElement(By.css('#ui-id-7 > span:nth-child(2)')).click();
      break;
    case "Sale":
      await driver.findElement(By.css('#ui-id-8 > span')).click();
      break;
    default:
      throw new Error(`Invalid menu item: ${menuItem}`);
  }
});

Then('I should see the {string} page', async function (expectedPageTitle) {
  const actualPageTitle = await driver.getTitle();
  assert.strictEqual(actualPageTitle, expectedPageTitle, `Expected page title "${expectedPageTitle}", but got "${actualPageTitle}"`);
});

After(async function() {
  await driver.quit()
})