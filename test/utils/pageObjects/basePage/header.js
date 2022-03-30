const { BaseElement } = require('../baseElement/baseElement');

class Header {
  constructor() {
    this.menuLoginButton = new BaseElement({ xpath: '//*[@id="menu_personal"]/li[2]/a/span' });
    this.loginButton = new BaseElement({ css: '#menu_mijn > li:nth-child(7) > a' });
  }
}

module.exports = { Header };
