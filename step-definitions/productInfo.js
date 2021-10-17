const { $, $$, $$$ } = require('../helpers/element-selection.js');
let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {

  this.Given(/^that I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
    await driver.sleep(50000);
  });


  //Take the  element selector from the feature and find the 
  //product and click on it
  this.Given(/^I click on a "([^"]*)"$/, async function (product) {
    await driver.sleep(1000);
    let productPicture = await $(product);
    await productPicture.click();
    await driver.sleep(1000);
  });

  //As a result check if the table of information is not empty(null)
  this.Then(/^There is information on the table$/, async function () {
    let isThereInfo = await $$("[class^= ProductTableOfInformation]");
    //console.log(isThereInfo.length);
    if (isThereInfo.length === 0) {
      expect(console.log('\n\n ERROR: Information for this product is missing\n'))
    }
    expect(isThereInfo).to.not.equal(null)

  });
}
