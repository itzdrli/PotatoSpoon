import chalk from 'chalk';
import winston from 'winston';
import prompts from 'prompts';
import cliProgress  from 'cli-progress';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'MM-DD HH:mm:ss' }),
    winston.format.printf(info => `[${info.level}][${info.timestamp}]: ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ]
});

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

(async () => {
  const response = await prompts({
    type: 'number',
    name: 'age',
    message: 'How old are you?',
    initial: 114,
  });
  if (response.age <= 18 && response.age > 0) {
    logger.info(chalk.cyan('你好，小登'));
  } else if (response.age <= 65 && response.age >= 13) {
    logger.info(chalk.yellow('你好，中登'));
  } else if (response.age <= 100 && response.age >= 65) {
    logger.info(chalk.green('你好，老登'));
  } else if (response.age <= 0) {
    logger.info(chalk.bgRedBright('你好，细胞登'));
  } else {
    logger.info(chalk.bgRedBright('你好，老毕登'));
  }
  if (response.age <= 100 && response.age >= 0) {
    bar.start(100, response.age);
  } else {
    bar.start(100, 100);
  }
  bar.stop();
})();
