const fetch = require('node-fetch');
const { logger } = require('./loggerConfig');

const hubUrl = 'http://localhost:4444/';
const hubStatusUrl = 'http://localhost:4444/status';
const {
  exec
} = require('child_process');

function startHub() {
  exec(
    'java -jar test/grid/selenium-server-4.1.1.jar hub',
    (error, stdout, stderr) => {
      if (error) {
        logger.error(`exec error: ${error}`);
        return;
      }
      logger.info(`stdout: ${stdout}`);
      logger.error(`stderr: ${stderr}`);
    }
  );
}

async function getGridStatus() {
  try {
    const request = await fetch(hubStatusUrl);
    const response = await request.json();
    const activeNodes = await response.value.nodes;
    return activeNodes;
  } catch (err) {
    logger.error(`Unable to get response from node ${err}`);
  }
}

async function startNode(browserName, browserVersion, operatingSystem, launchType) {
  const port = await portSelector();
  if (browserName !== 'undefined') {
    exec(
      `java -jar test/grid/selenium-server-4.1.1.jar node --port ${port} --session-timeout 90 --config test/grid/nodeConfig${browserName}_${browserVersion}_${operatingSystem}${launchType}.toml`,
      (error, stdout, stderr) => {
        if (error) {
          logger.error(`exec error: ${error}`);
        }
        logger.log(`stdout: ${stdout}`);
        logger.error(`stderr: ${stderr}`);
      }
    );
  } else {
    logger.error('one of the expected input arguments is not defined');
  }
  return port;
}

async function portSelector() {
  const newPort = Math.round(Math.random() * (5999 - 5555) + 5555);
  const activeNodes = await getGridStatus();
  const servedPorts = await activeNodes.map((nodes) => nodes.uri.slice(-4));
  const newPortChecker = servedPorts.filter((port) => port == newPort);
  if (newPortChecker !== newPort && servedPorts.length < 444) {
    return newPort;
  } if (newPortChecker == newPort && servedPorts.length < 444) {
    return portSelector();
  }
  logger.error('Cannot launch the node: there is no available ports');
}

module.exports = {
  startNode,
  getGridStatus,
  portSelector,
  startHub,
};
