const { until } = require('selenium-webdriver');
const { Header } = require('./header');
const { driver } = require('../../../config/driverConfig');
const { logger } = require('../../../config/loggerConfig');

class BasePage {
  constructor() {
    this.baseUrl = 'https://www.ah.nl';
    this.path = '';
    this.Header = new Header();
  }

  getPageUrl() {
    logger.info(`I'm checking the expected URL, expected URL is: [${this.baseUrl}${this.path}]`);
    return `${this.baseUrl}${this.path}`;
  }

  open() {
    logger.info(`I'm navigating to the page: [${this.baseUrl}${this.path}]`);
    driver.get(`${this.baseUrl}${this.path}`);
  }

  waitUntilTitleIsLoaded(title) {
    logger.info('I\'m waiting while the title is completely loaded');
    return driver.wait(until.titleIs(title));
  }
}

module.exports = { BasePage };
