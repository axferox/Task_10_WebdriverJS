const yargs = require('yargs');
const { startNode } = require('./gridControllerConfig');

yargs
  .command({
    command: 'with [browserName] [browserVersion] [platformName] [launchType]',
    description:
      'Start node with a full command like: \'npm run node with chrome 99 mac/windows/linux sequental/parallel\'',
    builder: {
      browserName: {
        describe: 'chrome/firefox',
        demandOption: true,
        type: 'string',
      },
      browserVersion: {
        describe: 'Browser version is required, node will not start otherwise, will accept only natural numbers',
        demandOption: true,
        type: 'number',
      },
      platformName: {
        describe: 'windows/mac/linux',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      startNode(argv.browserName, argv.browserVersion, argv.platformName, argv.launchType);
    },
  })
  .help()
  .parse();
