const log4js = require('log4js');
// log4js.configure({
//   appenders: { app: { type: 'file', filename: 'app.log' } },
//   categories: { default: { appenders: ['app'], level: 'info' } }
// });
const logger = log4js.getLogger("app");
logger.level = 'info';

logger.debug('Starting the app in debug mode');
logger.info('User has been logged in');
logger.warn('Config file not found');
logger.error('Failed to save the data');
logger.fatal('Server crashed');

function sumar(x, y) {
    return x + y;
}

module.exports = sumar;