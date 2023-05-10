const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const assert = require('assert');

let driver;
 
Given(/^the user is on the Luma website$/, async function () {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://magento.softwaretestingboard.com/');
  await driver.manage().window().setRect({ width: 1721, height: 927 });
});

When(/^they click on the "Men" menu$/, async function () {
  await driver.findElement(By.css("#ui-id-5 > span:nth-child(2)")).click()
}) 
 
When(/^they click on the "Bottoms" link$/, async function () {
  await driver.findElement(By.linkText("Bottoms")).click();
});
  
When(/^they click on the "Directory" filter$/, async function () {
  await driver.findElement(By.css(".filter-options-item:nth-child(1) > .filter-options-title")).click();
});

When(/^they click on the "Pants" menu$/, async function () {
  await driver.findElement(By.css(".allow .item:nth-child(1) > a")).click();
});

When(/^they click on the "Sale" filter$/, async function () {
  await driver.findElement(By.css(".filter-options-item:nth-child(10) > .filter-options-title")).click();
});

Then(/^they should see that no related products are displayed in the Sale menu$/, async function () {
  const relatedProducts = await driver.findElements(By.css(".block-related .products-grid li"));
  assert.strictEqual(relatedProducts.length, 0, "Expected no related products to be displayed in the Sale menu");
});

After(async function() {
  await driver.quit();
});