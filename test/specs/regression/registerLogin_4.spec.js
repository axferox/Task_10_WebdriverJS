const { expect } = require('chai');
const { PageFactory } = require('../../utils/pageFactory');
const { quit } = require('../../config/driverConfig');
const { TestData } = require('../../utils/testData/testData');
const { DriverUtils } = require('../../utils/pageObjects/driverUtils/driverUtils');

const homePage = PageFactory.getPage('Home');
const signUpPage = PageFactory.getPage('Sign up');
const logInPage = PageFactory.getPage('Log in');
const cookiePopup = PageFactory.getPage('Cookie Popup');

describe('Test performs the testing of the login and sign up forms', () => {
  after(async () => {
    await quit();
  });

  it('Verify that page is loaded and the title matches the expected', async () => {
    const title = 'Albert Heijn: boodschappen doen bij de grootste supermarkt';
    await homePage.open();
    await homePage.waitUntilTitleIsLoaded(title);
    expect(await DriverUtils.getTitle()).equal(title);
  });

  it('Verify that cookie modal is opened and Accept button contains the text ', async () => {
    const expectedButtonText = 'Accepteer';
    expect(await cookiePopup.acceptButton.getElementText()).equal(expectedButtonText);
  });

  it('Verify that modal can be closed', async () => {
    await cookiePopup.acceptButton.elementFindAndClickJavaScript();
  });

  it('Verify that menu login button name matches the expected', async () => {
    const buttonText = 'Inloggen';
    expect(await homePage.Header.menuLoginButton.getElementText()).equal(buttonText);
  });

  it('Verify that user is landed on login screen after click on login button', async () => {
    await homePage.Header.menuLoginButton.hoverAction();
    await homePage.Header.loginButton.clickAction();
    expect(await DriverUtils.getCurrentUrl()).equal(logInPage.getPageUrl());
  });

  it('Verify that page contains user sign up link text matches the expected', async () => {
    const linkText = 'Maak nu een profiel aan';
    expect(await logInPage.signUpLink.getElementText()).equal(linkText);
  });

  it('Verify that user is landed on sign up page after click', async () => {
    await logInPage.signUpLink.click();
    expect(await DriverUtils.getCurrentUrl()).equal(signUpPage.getPageUrl());
  });

  it('Verify that radiobuttons is present and unticked by default', async () => {
    expect(await signUpPage.maleButton.isSelected()).equal(false);
    expect(await signUpPage.femaleButton.isSelected()).equal(false);
  });

  it('Verify that female radiobutton changes status after click', async () => {
    await signUpPage.femaleButtonLabel.click();
    expect(await signUpPage.femaleButton.isSelected()).equal(true);
  });

  it('Verify that male radiobutton changes status after click and female radiobutton is not active', async () => {
    await signUpPage.maleButtonLabel.click();
    expect(await signUpPage.maleButton.isSelected()).equal(true);
    expect(await signUpPage.femaleButton.isSelected()).equal(false);
  });

  it('Verify that complete the fields with the test data', async () => {
    await signUpPage.firstName.textInput(TestData.textGenerator());
    await signUpPage.lastName.textInput(TestData.textGenerator());
    await signUpPage.postalCodeNld.textInput(TestData.postalCodeNld());
    await signUpPage.houseNumber.textInput(TestData.houseNumber());
    await signUpPage.houseNumberExtra.textInput(TestData.houseNumberExtra());
    await signUpPage.emailAddress.textInput(TestData.mailRandomizer());
    await signUpPage.password.textInput(TestData.passwordGenerator());
    await signUpPage.phoneNumberNl.textInput(TestData.phoneNumberNl());
    await signUpPage.birthDay.textInput(TestData.birthDay());
    await signUpPage.houseNumberExtra.textInput(TestData.houseNumberExtra());
  });

  it('Verify that Bonus card options are unticked by default', async () => {
    expect(await signUpPage.radioOptOut.isSelected()).equal(false);
    expect(await signUpPage.radioRequest.isSelected()).equal(false);
    expect(await signUpPage.radioInput.isSelected()).equal(false);
  });

  it('Verify that Bonus card radiobutton with optOut option can be ticked and other options are unticked', async () => {
    await signUpPage.radioOptOutLabel.click();
    expect(await signUpPage.radioRequest.isSelected()).equal(false);
    expect(await signUpPage.radioOptOut.isSelected()).equal(true);
    expect(await signUpPage.radioInput.isSelected()).equal(false);
  });

  it('Verify that Bonus card radiobutton with request option can be ticked and other options are unticked', async () => {
    await signUpPage.radioRequestLabel.click();
    expect(await signUpPage.radioRequest.isSelected()).equal(true);
    expect(await signUpPage.radioOptOut.isSelected()).equal(false);
    expect(await signUpPage.radioInput.isSelected()).equal(false);
  });

  it('Verify that Bonus card radiobutton with input option can be ticked and other options are unticked', async () => {
    await signUpPage.radioInputLabel.click();
    expect(await signUpPage.radioRequest.isSelected()).equal(false);
    expect(await signUpPage.radioOptOut.isSelected()).equal(false);
    expect(await signUpPage.radioInput.isSelected()).equal(true);
  });

  it('Verify that custom Bonus card field can be completed', async () => {
    await signUpPage.bonusCardNumberField.textInput(TestData.bonusCardNumber());
  });

  it('Verify that subscription checkboxes are unticked by default', async () => {
    expect(await signUpPage.checkboxMail.isSelected()).equal(false);
    expect(await signUpPage.checkboxServiceMail.isSelected()).equal(false);
  });

  it('Verify that subscription checkboxes can be ticked', async () => {
    await signUpPage.checkboxServiceMailLabel.click();
    await signUpPage.checkboxMailLabel.click();
    expect(await signUpPage.checkboxServiceMail.isSelected()).equal(true);
    expect(await signUpPage.checkboxMail.isSelected()).equal(true);
  });

  it('Verify that can be submitted', async () => {
    await signUpPage.registrationSubmitButton.click();
  });
});
