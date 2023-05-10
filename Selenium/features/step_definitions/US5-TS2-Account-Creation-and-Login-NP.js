const { Given, When, Then } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Given('the user is on the home page of the Luma website', async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get("https://magento.softwaretestingboard.com/");
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When('I click on "Create an Account" link', async function () {
  await driver.findElement(By.css("ul.header:nth-child(2) > li:nth-child(3) > a:nth-child(1)")).click();
  await driver.wait(until.urlIs("https://magento.softwaretestingboard.com/customer/account/create/"), 5000);
});

When('I enter the last name {string}', async function (lastName) {
  await driver.findElement(By.id("lastname")).click();
  await driver.findElement(By.id("lastname")).sendKeys(lastName);
});
  
When('I enter the email address {string}', async function (emailAddress) {
  await driver.findElement(By.id("email_address")).click();
  await driver.findElement(By.id("email_address")).sendKeys(emailAddress);
});
  
When('I enter the password {string}', async function (password) {
  await driver.findElement(By.id("password")).click();
  await driver.findElement(By.id("password")).sendKeys(password);
});
  
When('I click on the "Create an Account" button', async function () {
  await driver.findElement(By.css(".submit > span")).click();
});
  
Then('I should not be redirected to the welcome page for the new registered customer', async function () {
  const currentUrl = await driver.getCurrentUrl();
  assert.notStrictEqual(currentUrl, "https://magento.softwaretestingboard.com/customer/account/");
});
  
After(async function() {
  await driver.quit();
});