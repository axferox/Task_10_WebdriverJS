const { BasePage } = require('./basePage');
const { BaseElement } = require('../baseElement/baseElement');

class CookiePopupPage extends BasePage {
  constructor() {
    super();
    this.cookiePopupModal = new BaseElement({ id: 'cookie-popup' });
    this.acceptButton = new BaseElement({ css: '#accept-cookies' });
  }
}

module.exports = { CookiePopupPage };
