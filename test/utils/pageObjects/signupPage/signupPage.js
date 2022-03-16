const { BaseElement } = require('../baseElement/baseElement');
const { BasePage } = require('../basePage/basePage');

class SignUpPage extends BasePage {
  constructor() {
    super();
    this.path = '/mijn/inschrijven/bestellen?ref=%2F';
    this.maleButton = new BaseElement({ id: 'f-radio-button-gender-male' });
    this.maleButtonLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[2]/label' });
    this.femaleButton = new BaseElement({ id: 'f-radio-button-gender-female' });
    this.femaleButtonLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[1]/span[1]/label' });
    this.firstName = new BaseElement({ name: 'firstName' });
    this.lastName = new BaseElement({ name: 'lastName' });
    this.postalCodeNld = new BaseElement({ name: 'address.postalCodeNld' });
    this.houseNumber = new BaseElement({ name: 'address.houseNumber' });
    this.houseNumberExtra = new BaseElement({ name: 'address.houseNumberExtra' });
    this.emailAddress = new BaseElement({ name: 'emailAddress' });
    this.password = new BaseElement({ name: 'password' });
    this.phoneNumberNl = new BaseElement({ css: '#phoneNumberWebshop' });
    this.birthDay = new BaseElement({ css: '#dateOfBirthWebshop' });
    this.radioOptOut = new BaseElement({ id: 'f-radio-button-bonusCardChoice-optOut' });
    this.radioOptOutLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[8]/div[1]/div/span[3]/label' });
    this.radioRequest = new BaseElement({ id: 'f-radio-button-bonusCardChoice-request' });
    this.radioRequestLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[8]/div[1]/div/span[2]/label' });
    this.radioInput = new BaseElement({ id: 'f-radio-button-bonusCardChoice-input' });
    this.radioInputLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[8]/div[1]/div/span[1]/label' });
    this.bonusCardNumberField = new BaseElement({ xpath: '//*[@id="cards.BO"]' });
    this.checkboxServiceMail = new BaseElement({ id: 'f-checkbox-serviceMail' });
    this.checkboxServiceMailLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[9]/div/label' });
    this.checkboxMail = new BaseElement({ id: 'f-checkbox-newsLetter' });
    this.checkboxMailLabel = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/form/div[10]/div/label' });
    this.registrationSubmitButton = new BaseElement({ id: 'registration-form-submit' });
  }
}

module.exports = {
  SignUpPage,
};
