// Encapsulate all your step definition in a module exports like below
module.exports = function () {

    // Match a step definition against a line in Gherkin/the feature file
    // this.Given or this.When or this.Then + a regular expression
    // /^ = Start of regular expression
    // $/ = End of regular expression
    // "([^"]*)" = match anything inside quotation marks and also
    // pick it up the text inside the quotation as a parameter for test function
    this.When(/^I select a category "([^"]*)"$/, async function (searchQuery) {
        // Navigate to a URL (http://www.willys.se)
        await helpers.loadPage('http://www.willys.se');

        // Willys asks you to cahnge or confirm search cookie settings
        // They do this with buttons with css class .onetrust-accept-btn-handler
        // so grab these two elements, the second one is the Accept button
        let changeAndConfirmButtons = await driver.findElements(by.css('.onetrust-accept-btn-handler'));
        let confirmButton = changeAndConfirmButtons[1];
        // Click the Accept button
        await confirmButton.click();

        // Get the Menu First
        let searchInput = await driver.findElement(by.css('input[name="q"]'));
        // Send our search query as key strokes to it and then press enter
        await searchInput.sendKeys(searchQuery, selenium.Key.ENTER);
    });

    // See previous description of how to write a step definition function
    this.Then(/^I should see some results$/, async function () {
        await driver.wait(until.elementsLocated(by.css('div.g')), 10000);
        let elements = await driver.findElements(by.css('div.g'));
        // Note that we use expect syntax from Chai.js
        // https://www.chaijs.com/
        expect(elements.length).to.not.equal(0);
    });

};