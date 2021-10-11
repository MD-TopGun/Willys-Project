const { $, $$, $$$ } = require('../helpers/element-selection.js');
let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 1000 : 0);
}

module.exports = function () {

  this.Given(/^I have three items in my shopping cart$/, async function () {
    await driver.wait(until.elementsLocated(by.css('a[href="/sortiment/dryck"]')), 10000);
    let openCategory = await $('a[href="/sortiment/dryck"]');
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/dryck"]\').scrollIntoView()');
    await openCategory.click();
    await waitAWhile();
    //Get a list of drinks and choose 3 of them to add to cart one each
    let products = await driver.findElements(By.css('[itemtype="https://schema.org/Product"]'));
    await products[0].findElement(By.css('button[title="Öka antal"]')).click();
    await products[5].findElement(By.css('button[title="Öka antal"]')).click();
    await products[9].findElement(By.css('button[title="Öka antal"]')).click();
    await driver.sleep(100);

  });

  this.When(/^I click on “Empty shopping cart” button$/, async function () {
    await driver.wait(until.elementsLocated(by.css('[href*="varukorg"]')), 10000);
    let shoppingCart = await $('[href*="varukorg"]');
    await shoppingCart.click();
    let trash = await $('svg[data-src="/icons/DELETE-24px.svg"]');
    await trash.click();
    await driver.wait(until.elementsLocated(by.css('button[data-testid="modal-confirm-button"]')), 10000);
    let emptyConfirmation = await $('button[data-testid="modal-confirm-button"]');
    emptyConfirmation.click();
  });

  this.Then(/^It should delete all items in the shopping cart$/, async function () {

    let emptyMiniCart =
      await $('[class^="MiniCartstyles__StyledCounter"]')
        .then(found => !found.length);
    expect(emptyMiniCart).to.equal(true);
    await driver.sleep(100);


  });
}