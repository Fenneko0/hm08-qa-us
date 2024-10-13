module.exports = {
  // Inputs
  fromField: "#from",
  toField: "#to",
  phoneNumberField: "#phone",
  codeField: "#code",
  cardNumberField: "#number",
  // Buttons
  callATaxiButton: "button=Call a taxi",
  phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
  nextButton: "button=Next",
  confirmButton: "button=Confirm",

  supportiveTaxiButton: '//div[starts-with(text(), "Supportive")]',

  paymentMethodButton: ".pp-text",
  addCardButton: "div=Add card",
  linkButton: '//button[starts-with(text(), "Link")]',
  codeCVCCard: "#code.card-input",
  randomDivBlock: "div.pp-buttons",

  commentForTheDriver: '#comment',

  blanketsCheckbox: '//div[@class="r-sw"]',
  activeBlanketsCheckbox: '.switch-input',
  // Modals
  phoneNumberModal: ".modal",
  paymentMethodModal: ".modal",
  addingACardModal: ".modal",
  // Functions
  fillAddresses: async function (from, to) {
    const fromField = await $(this.fromField);
    await fromField.setValue(from);
    const toField = await $(this.toField);
    await toField.setValue(to);
    const callATaxiButton = await $(this.callATaxiButton);
    await callATaxiButton.waitForDisplayed();
    await callATaxiButton.click();
  },
  fillPhoneNumber: async function (phoneNumber) {
    const phoneNumberButton = await $(this.phoneNumberButton);
    await phoneNumberButton.waitForDisplayed();
    await phoneNumberButton.click();
    const phoneNumberModal = await $(this.phoneNumberModal);
    await phoneNumberModal.waitForDisplayed();
    const phoneNumberField = await $(this.phoneNumberField);
    await phoneNumberField.waitForDisplayed();
    await phoneNumberField.setValue(phoneNumber);
  },
  submitPhoneNumber: async function (phoneNumber) {
    await this.fillPhoneNumber(phoneNumber);
    // we are starting interception of request from the moment of method call
    await browser.setupInterceptor();
    await $(this.nextButton).click();
    // we should wait for response
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(2000);
    const codeField = await $(this.codeField);
    // collect all responses
    const requests = await browser.getRequests();
    // use first response
    await expect(requests.length).toBe(1);
    const code = await requests[0].response.body.code;
    await codeField.setValue(code);
    await $(this.confirmButton).click();
  },
  fillCardNumber: async function (cardNumber) {
    const cardNumberField = await $(this.cardNumberField);
    await cardNumberField.setValue(cardNumber);
    const codeOfCard = await $(this.codeCVCCard);
    await codeOfCard.setValue(123);
    const aRandomDivBlock = await $(this.randomDivBlock);
    await aRandomDivBlock.click();
    const linkButton = await $(this.linkButton);
    await expect(linkButton).toBeClickable();
    await linkButton.click();
  },
};
