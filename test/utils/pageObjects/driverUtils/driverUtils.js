const { until } = require('selenium-webdriver');
const { driver } = require('../../../config/driverConfig');
const { logger } = require('../../../config/loggerConfig');

class DriverUtils {
  static wait(locator) {
    return driver.wait(until.elementIsVisible(locator), 10000);
  }

  static getCurrentUrl() {
    logger.info('I\'m trying to get the URL of this page');
    return driver.getCurrentUrl();
  }

  static getTitle() {
    logger.info('I\'m trying to get the title of this page');
    return driver.getTitle();
  }
}

module.exports = {
  DriverUtils,
};
