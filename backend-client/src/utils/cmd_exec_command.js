import chalk from 'chalk';
import { SERVICE_NAMES } from '../common/constants.js';

export const execErrorHandler = (serviceName, error) => {
    if (!error) return;
    console.log(`Error occured at initialization of service ${chalk.redBright(SERVICE_NAMES[serviceName])} with error code:`);
    console.error(chalk.red(error));
};
