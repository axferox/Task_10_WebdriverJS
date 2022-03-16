const winston = require('winston');
const { format } = require('winston');

const { combine, simple } = format;

const logger = winston.createLogger({
  exitOnError: false,
  level: 'info',
  format: combine(simple()),
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'test/logs/errorLogger.log', level: 'error' }),
    new winston.transports.File({ filename: 'test/logs/combinedLogger.log', level: 'debug' }),
  ],
});

module.exports = {
  logger,
};
