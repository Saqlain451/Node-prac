import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.bgGreen.red("hello world"));

const res = validator.isEmail("jobs.sakil@gmail.com");
console.log(res? chalk.green.inverse(res) : chalk.red.inverse(res))
