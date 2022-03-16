const yargs = require('yargs');
const { startHub } = require('./gridControllerConfig');

yargs
  .command({
    command: 'hub',
    description: 'Start Selenium grid 4 hub with a full command like: \'npm run selenium hub\'',
    handler() {
      startHub();
    }
  })
  .help()
  .parse();
