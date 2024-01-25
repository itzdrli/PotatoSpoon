import chalk from 'chalk';
import winston from 'winston';
import prompts from 'prompts';
import cliProgress  from 'cli-progress';
import mineflayer from 'mineflayer';

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

// const startServer = await prompts({
//   type: 'confirm',
//   name: 'value',
//   message: 'Start server?',
//   initial: true,
// });
