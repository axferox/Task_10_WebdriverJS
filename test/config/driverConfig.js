const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const fs = require('fs');
const logger = require('./loggerConfig');

function switcher() {
  const config = JSON.parse(fs.readFileSync('./test/config/browserConfig.json', 'utf8'));

  if (config.browserName == 'chrome') {
    const chromeOptions = new chrome.Options()
      .setPageLoadStrategy('normal')
      .addArguments('--window-size=1920,1080')
      .addArguments('--incognito')
      .setBrowserVersion(`${config.browserVersion}`)
      .setPlatform(`${config.platformName}`);

    return new Builder().forBrowser(`${config.browserName}`).setChromeOptions(chromeOptions).usingServer(`http://${config.environment}:4444/`)
      .build();
  } if (config.browserName == 'firefox') {
    const firefoxOptions = new firefox.Options()
      .setPageLoadStrategy('normal')
      .addArguments('--width=1920') // without headless mode
      .addArguments('--height=1080') // without headless mode
      .addArguments('-private')
      .setBrowserVersion(`${config.browserVersion}`)
      .setPlatform(`${config.platformName}`);
    // .headless                                   //in headless mode
    // .windowSize({ width: 1920, height: 1080 }); //in headless mode

    return new Builder().forBrowser(`${config.browserName}`).setFirefoxOptions(firefoxOptions).usingServer(`http://${config.environment}:4444/`)
      .build();
  }
  console.error('Looks like something wrong with gathering/parsing the arguments from comand line');
}
const driver = switcher();

async function quit() {
  return driver.quit();
}

async function sleep() {
  logger.info(`I'm turning into a sleep for a [${10000}] milliseconds`);
  return driver.sleep(10000);
}

module.exports = {
  driver,
  quit,
  sleep,
};
