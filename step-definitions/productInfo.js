const { $, $$, $$$ } = require('../helpers/element-selection.js');
let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}
module.exports = function () {

  // /^ = Start of regular expression
  // $/ = End of regular expression
  // "([^"]*)" = match anything inside quotation marks

  this.Given(/^that I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
  });
  this.Given(/^that we accepted the standard cookie policy$/, async function () {
    await driver.wait(until.elementsLocated(By.css('#onetrust-accept-btn-handler'), 10000));
    let confirmButton = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
    /*while (!(confirmButton.isDisplayed())) {
      await driver.sleep(1000);
    }*/
    // the isDisplayed doesn't work
    await driver.sleep(1000);
    await confirmButton.click();
    await waitAWhile();

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
    expect(isThereInfo).to.not.equal(null);

  });
}
