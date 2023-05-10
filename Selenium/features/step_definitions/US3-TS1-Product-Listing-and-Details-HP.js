const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given(/^the user is on the Luma website$/, async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://magento.softwaretestingboard.com/');
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When(/^they click on the "Gear" menu$/, async function () {
  await driver.findElement(By.css("#ui-id-6 > span:nth-child(2)")).click();
});

And(/^they click on the "Watches" link$/, async function () {
  await driver.findElement(By.css("#ui-id-27 > span:nth-child(2)")).click();
});

And(/^they click on the "Didi Sport Watch" link$/, async function () {
  await driver.findElement(By.css(".items:nth-child(2) > .item:nth-child(3) > a")).click();
});

And(/^they click on the "Details" tab$/, async function () {
  await driver.findElement(By.id("tab-label-additional-title")).click();
});

Then(/^they should see the description of the Didi Sport Watch$/, async function () {
  // Verify that the description of the Didi Sport Watch is displayed on the page
  const description = await driver.findElement(By.css('.product.attribute.description .value'));
  const expectedText = "The Didi Sport Watch helps you keep your workout plan down to the second. The vertical, digital face looks sleek and futuristic. This watch is programmed with tons of helpful features such as a timer, an alarm clock, a pedometer, and more to help make your exercise more productive.";
  assert(await description.getText() === expectedText, "Description of the Didi Sport Watch is not displayed");
});

After(async function () {
  await driver.quit();
})
