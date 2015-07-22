var chalk = require("chalk");



var symbols = {
  pass: '\u221A', // '✓'
  fail: '\u00D7', // '✖'
  unknown: '-'
};

console.log(chalk.red(symbols.fail));
console.log(chalk.green(symbols.pass));
console.log(chalk.blue(symbols.unknown));