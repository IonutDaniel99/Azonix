import chalk from 'chalk';

export const weather_service_start = (service_name, port) =>
    `${chalk.greenBright(service_name)} service start succsesfuly on ${chalk.greenBright(port)} port.`;
