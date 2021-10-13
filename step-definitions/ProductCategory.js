

module.exports = function () {

    this.Given(/^In the menu section of "([^"]*)"$/, async function (url) {
        // Navigate to a URL (https://www.willys.se)
        await helpers.loadPage(url);
        await driver.sleep(3000);
    });
    this.Given(/^I have selected the accept button$/, async function () {
        //await driver.wait(until.elementsLocated(by.css('#onetrust-accept-btn-handler')), 10000)

        let acceptit = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
        //let confirmButton = acceptit[1];
        while (!(await acceptit.isDisplayed())) {
            await driver.sleep(100);
        }

        await acceptit.click();
        // Click the Accept button

    });

    this.When(/^I select a category$/, async function () {
        //await driver.wait(until.elementsLocated(by.css('#onetrust-accept-btn-handler')), 10000)
        await driver.sleep(5000);

        let buttons = await driver.findElements(By.css('div.navigation-title'));
        let loadmorebutton;
        for (let button of buttons) {
            let textofbutton = await button.getText();
            if (textofbutton === 'Kött, chark & fågel') {
                loadmorebutton = button;
            }
            break;
        }
        await loadmorebutton.click();


    });


    this.Then(/^I should see items within that category$/, async function () {
        let product = await driver.wait(until.elementsLocated(by.css('.Product_product-header__3sHfy')))
        await driver.wait(until.elementsLocated(by.css('.Product_product-header__3sHfy')), 10000);

        let elements = await driver.findElements(by.css('.Product_product-header__3sHfy'));

        expect(elements.length).to.not.equal(0);
    });
}