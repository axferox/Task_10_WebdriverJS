const { BasePage } = require('./pageObjects/basePage/basePage');
const { CookiePopupPage } = require('./pageObjects/basePage/cookiePopup');
const { HomePage } = require('./pageObjects/homePage/homePage');
const { LogInPage } = require('./pageObjects/loginPage/loginPage');
const { SignUpPage } = require('./pageObjects/signupPage/signupPage');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case 'Base':
        return new BasePage();
      case 'Home':
        return new HomePage();
      case 'Sign up':
        return new SignUpPage();
      case 'Log in':
        return new LogInPage();
      case 'Cookie Popup':
        return new CookiePopupPage();
      default:
        throw Error(`Page ${[pageName]} is not defined ot not found`);
    }
  }
}

module.exports = { PageFactory };
