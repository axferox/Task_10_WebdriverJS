const { driver } = require('../../../config/driverConfig');
const { DriverUtils } = require('../driverUtils/driverUtils');
const { logger } = require('../../../config/loggerConfig');

class BaseElement {
  constructor(locator) {
    this.locator = locator;
  }

  findElement() {
    logger.info(`I'm trying to find the element by: [${this.locator[Object.keys(this.locator)[0]]}]`);
    return driver.findElement(this.locator);
  }

  textInput(inputData) {
    logger.info(`I'm completing this element [${this.locator[Object.keys(this.locator)[0]]}] with the following input data: "${inputData}"`);
    this.findElement().sendKeys(inputData);
  }

  isSelected() {
    logger.info(`I'm checking whether the element: element: [${this.locator[Object.keys(this.locator)[0]]}]:  is selected`);
    return this.findElement().isSelected();
  }

  getElementText() {
    logger.info(`I'm trying to get the element: [${this.locator[Object.keys(this.locator)[0]]}] text`);
    return this.findElement().getText();
  }

  click() {
    logger.info(`I'm waiting for the element to be clickable and trying to click: [${this.locator[Object.keys(this.locator)[0]]}] via simple webdriver click`);
    DriverUtils.wait(this.locator);
    return this.findElement(this.locator).click();
  }

  clickAction() {
    logger.info(`I'm waiting for the element to be clickable and trying to click: [${this.locator[Object.keys(this.locator)[0]]}]  via webdriver actions`);
    DriverUtils.wait(this.locator);
    return driver.actions().click(this.findElement()).perform();
  }

  hoverAction() {
    logger.info(`I'm waiting for the element and trying to perform the element: [${this.locator[Object.keys(this.locator)[0]]}] webdriver hover action`);
    DriverUtils.wait(this.locator);
    return driver.actions().move({ duration: 5000, origin: this.findElement() }).perform();
  }

  elementFindAndClickJavaScript() {
    logger.info(`I'm waiting for the element to be clickable and trying to click the element: [${this.locator[Object.keys(this.locator)[0]]}] via JavaScript`);
    DriverUtils.wait(this.locator);
    return driver.executeScript(`document.querySelector("${this.locator[Object.keys(this.locator)[0]]}").click()`);
  }
}

module.exports = { BaseElement };
