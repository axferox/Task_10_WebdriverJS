const { BasePage } = require('../basePage/basePage');
const { BaseElement } = require('../baseElement/baseElement');

class LogInPage extends BasePage {
  constructor() {
    super();
    this.path = '/mijn/inloggen?ref=%2F';
    this.signUpLink = new BaseElement({ xpath: '//*[@id="app"]/div/main/div/div/div/div[2]/div[3]/div/footer/p[1]/a/span' });
  }
}

module.exports = { LogInPage };
