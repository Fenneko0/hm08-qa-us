const page = require("../../page");
const helper = require("../../helper");

describe("Create an order", () => {
  it("should open phone number modal", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const phoneNumberButton = await $(page.phoneNumberButton);
    await phoneNumberButton.waitForDisplayed();
    await phoneNumberButton.click();
    const pnoneNumberModal = await $(page.phoneNumberModal);
    await expect(pnoneNumberModal).toBeExisting();
  });

  it("should save the phone", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
  });
  it(`should select "Supportive" type of car`, async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const supportiveTaxiButton = await $(page.supportiveTaxiButton);
    await supportiveTaxiButton.waitForDisplayed();
    await supportiveTaxiButton.click();
    const parentOfSuportiveTaxiButton = await supportiveTaxiButton.$("..");
    await expect(parentOfSuportiveTaxiButton).toHaveElementClass("active");
  });
  it('should add credit card via "Adding a card" modal', async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const paymentMethodButton = await $(page.paymentMethodButton);
    await paymentMethodButton.waitForDisplayed();
    await paymentMethodButton.click();
    const paymentMethodModal = await $(page.paymentMethodModal);
    await expect(paymentMethodModal).toBeExisting();
    // Within 'Payment method' modal
    const addCardButton = await $(page.addCardButton);
    await addCardButton.waitForDisplayed();
    await addCardButton.click();
    // Within 'Adding a card' modal
    const addingACardModal = await $(page.addingACardModal);
    await expect(addingACardModal).toBeExisting();
    // const cardNumber = helper.getCreditCardCode();
    await page.fillCardNumber("123400004321");
  });
  it("should write a message for the driver", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const commentForTheDriver = await $(page.commentForTheDriver);
    await commentForTheDriver.waitForDisplayed();
    await commentForTheDriver.setValue(`Please don't smoke if you're a smoker`);
  });
  it("should order a blanket and a handkerchiefs", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const supportiveTaxiButton = await $(page.supportiveTaxiButton);
    await supportiveTaxiButton.waitForDisplayed();
    await supportiveTaxiButton.click();
    const blanketsCheckbox = await $(page.blanketsCheckbox);
    await blanketsCheckbox.scrollIntoView();
    await blanketsCheckbox.click();
    const activeBlanketsCheckbox = $(page.activeBlanketsCheckbox);
    await expect(activeBlanketsCheckbox).toBeChecked();
  });
  it("should order 2 2ce creams", async () => {
    await browser.url(`/`);
    await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
    const supportiveTaxiButton = await $(page.supportiveTaxiButton);
    await supportiveTaxiButton.waitForDisplayed();
    await supportiveTaxiButton.click();
    const addIceCream = await $(page.addIceCream);
    await addIceCream.waitForDisplayed();
    await addIceCream.click();
    await addIceCream.click();
    const addedIceCream = await $(page.addedIceCream);
    await expect(addedIceCream).toHaveText('2');
  });
});
