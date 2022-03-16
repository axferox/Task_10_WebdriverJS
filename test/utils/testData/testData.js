// eslint-disable-next-line import/no-extraneous-dependencies
const { generate } = require('randomstring');

class TestData {
  static textGenerator() {
    return generate({ length: 10, charset: 'alphabetic' });
  }

  static phoneNumberNl() {
    return `31886599${generate({ length: 3, charset: 'numeric' })}`;
  }

  static mailRandomizer() {
    return `${this.textGenerator()}@mailinator.com`;
  }

  static passwordGenerator() {
    return this.textGenerator().toUpperCase();
  }

  static bonusCardNumber() {
    return '2620698240281';
  }

  static postalCodeNld() {
    return '1421xm';
  }

  static houseNumber() {
    return '1';
  }

  static houseNumberExtra() {
    return '1';
  }

  static birthDay() {
    return '11-11-2000';
  }
}

module.exports = { TestData };
