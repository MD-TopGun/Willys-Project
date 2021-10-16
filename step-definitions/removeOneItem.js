const { $, $$ } = require('../helpers/element-selection.js');
let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
let productListLength;
let productText;

module.exports = function () {

  this.When(/^I regret the first product on the shopping cart$/, async function () {
    let itemsList = await $$('[class^="ProductListItemstyles__StyledWrapper"]');
    productListLength = itemsList.length;
    console.log('\nThe number of different products before deleting:\n', productListLength);
  });

  this.When(/^I decrease the number of same product until zero by clicking on minus button$/, async function () {
    let removeItem = await $('button[title="Minska antal"]');
    let valueAttr = await $('input[aria-label="Ändra produktantal"]').getAttribute('value');
    let numberOfSameProduct = +valueAttr.split(' ')[0];
    for (let i = 0; i <= numberOfSameProduct; i++) {
      await removeItem.click();
      driver.sleep(2000);
    }
    waitAWhile();
  });
  this.Then(/^the item should not be in the cart anymore$/, async function () {
    await driver.wait(until.elementsLocated(by.css('[class^="ProductListItemstyles__StyledWrapper"]')), 10000);
    let itemsList = await $$('[class^="ProductListItemstyles__StyledWrapper"]');
    let itemListLength = itemsList.length;
    console.log('\nThe number of different products after deleting:\n', itemListLength);
    expect(productListLength).to.equal(itemListLength + 1);
    waitAWhile();
  });

}