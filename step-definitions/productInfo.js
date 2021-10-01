// Encapsulate all your step definition in a module exports like below
module.exports = function () {

  this.When(/^that I am on  "([^"]*)"$/, async function (category) {
    // Write code here that turns the phrase above into concrete actions
    await helpers.loadPage('http://www.willys.se');
    let changeAndConfirmButtons = await driver.findElements(by.css('.gszgQM'));
    let confirmButton = changeAndConfirmButtons[1];
    // Click the Accept button
    await confirmButton.click();



  });

  this.Then(/^I should see some results$/, async function () {
    await driver.wait(until.elementsLocated(by.css('div.g')), 10000);
    let elements = await driver.findElements(by.css('div.g'));
    // Note that we use expect syntax from Chai.js
    // https://www.chaijs.com/
    expect(elements.length).to.not.equal(0);
  });
};