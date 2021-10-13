const { $, $$, $$$ } = require('../helpers/element-selection.js');
let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 3000 : 1000);
}
let productListLength;

module.exports = function () {
  this.When(/^I regret the first one, I remove the product by cleare in the input field$ /, async function () {

    let itemsList = await $$('[class^="ProductListItemstyles__StyledWrapper"]');
    productListLength = itemsList.length;
    console.log('\nThe number of different products before deleting:\n', productListLength);

  });
  this.Then(/^the item should not be in the cart any more$/, async function () {
    let itemsList = await $$('[class^="ProductListItemstyles__StyledWrapper"]');
    let itemListLength = itemsList.length;
    console.log('\nThe number of different products after deleting:\n', itemListLength);
    expect(productListLength).to.equal(itemListLength + 1);

  });

}