const { exec } = require('child_process');
const yargs = require('yargs');
const fs = require('fs');

yargs
  .command({
    command: 'test [testType] [browserName] [browserVersion] [platformName] [environment]',
    description: 'Start test with a full command like: \'npm start test smoke chrome 98 win localhost\'',
    builder: {
      testType: {
        describe: 'smoke/regression/sanity',
        demandOption: true,
        type: 'string',
      },
      browserName: {
        describe: 'chrome/firefox',
        demandOption: true,
        type: 'string',
      },
      browserVersion: {
        describe: 'Browser version is required, session will not start otherwise, will accept only natural numbers',
        demandOption: true,
        type: 'number',
      },
      platformName: {
        describe: 'windows/mac/linux',
        demandOption: true,
        type: 'string',
      },
      environment: {
        describe: 'localhost/tst/stg/prd',
        demandOption: true,
        type: 'string',
      },
    },
    handler(argv) {
      fs.writeFile('./test/config/browserConfig.json', `${JSON.stringify(argv)}`, 'utf8', (err) => {
        if (err) throw err;
      });
      exec(`npm run ${argv.testType}`, (stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    },
  })
  .help()
  .parse();
