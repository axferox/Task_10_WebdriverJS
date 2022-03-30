const { BasePage } = require('../basePage/basePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this.baseUrl = 'https://www.ah.nl';
    this.path = '';
  }
}

module.exports = { HomePage };
