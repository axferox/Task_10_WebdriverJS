const fsextra = require('fs-extra');

fsextra.removeSync('test/logs/errorLogger.log');
fsextra.removeSync('test/logs/combinedLogger.log');
