const { $, $$ } = require('../helpers/element-selection.js');
let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 1000 : 0);
}

module.exports = function () {

  this.Given(/^that I am in category Fryst fågel$/, async function () {
    //once it exists grab the button and click on it
    await driver.wait(until.elementsLocated(by.css('a[href*="chark-och-fagel"]')), 10000);
    let openCategory = $('a[href*="chark-och-fagel"]');
    await openCategory.click();
    await waitAWhile();
    //click on fågel and wait
    await driver.wait(until.elementsLocated(by.css('a[href*="chark-och-fagel/fagel"]')), 10000);
    let openSubCategory = $('a[href*="chark-och-fagel/fagel"]');
    await openSubCategory.click();
    await waitAWhile();
    //find the frysta fågel sub category scroll down and click and wait
    await driver.wait(until.elementsLocated(by.css('a[href*="fagel/fryst-fagel"]')), 10000);
    let openLastSubCategory = await $('a[href*="fagel/fryst-fagel"]');
    while (!(await openLastSubCategory.isDisplayed())) {
      //await driver.sleep(100);
      await driver.executeScript('document.querySelector(\'a[href*="fagel/fryst-fagel"]\').scrollIntoView()');
    }
    await openLastSubCategory.click();
    await waitAWhile();
  });

  this.When(/^I choose Chicken Tom Yum Bits to buy$/, async function () {
    driver.sleep(5000);
    await driver.wait(until.elementsLocated(by.css('button[class*="LoadMore"]')), 10000);
    let loadMoreButton = $('button[class*="LoadMore"]');
    await loadMoreButton.click();
    driver.sleep(300);
    await loadMoreButton.click();
    //await driver.executeScript('window.scrollTo(0,0)');
    driver.sleep(500);
    await driver.wait(until.elementsLocated(by.css('a[href*="Chicken-Tom-Yum-Bits"]')), 10000);
    let product = await $('a[href*="Chicken-Tom-Yum-Bits"]');
    product.click();
    await waitAWhile();
  });
  this.When(/^I click (\d+) times on plus button$/, async function (numberOfProduct) {
    await driver.wait(until.elementsLocated(by.css('button[title="Öka antal"]')), 10000);
    let addItem = await $('button[title="Öka antal"]');
    for (let i = 0; i < +numberOfProduct; i++) {
      await addItem.click();
    }
    await waitAWhile();

  });
  this.When(/^I write (\d+) in the input field of the product$/, async function (numberOfProduct) {
    await driver.wait(until.elementsLocated(by.css('[aria-label="Ändra produktantal"]')), 10000);
    let addItem = await $('[aria-label="Ändra produktantal"]');
    addItem.clear();
    waitAWhile();
    await addItem.sendKeys(numberOfProduct, selenium.Key.ENTER);
    await waitAWhile();
  });

  this.When(/^I click (\d+) times on minus button$/, async function (numberOfProduct) {
    await driver.wait(until.elementsLocated(by.css('button[title="Minska antal"]')), 10000);
    let removeItem = await $('button[title="Minska antal"]');
    for (let i = 0; i < +numberOfProduct; i++) {
      await removeItem.click();
      driver.sleep(300);
    }
    await waitAWhile();
  });

  this.Then(/^the quantity of the item should be (\d+)$/, async function (inputNumber) {
    let found = await $$('[class*="ProductListItemstyles__StyledWrapper"]');
    if (found.length === 0) {
      quantity = 0
    } else {
      quantity = +(await (await $('[class^="MiniCartstyles__StyledCounter"]')).getText());
    }
    expect(quantity).to.equal(+inputNumber)
  });

}