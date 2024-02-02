#!/usr/bin/node
const args = process.argv.slice(2);

const num = parseInt(args[0]);
let factRes = 1;

if (isNaN(num) === true) {
  console.log(factRes);
} else {
  function fact (n) {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  factRes = fact(num);
  console.log(factRes);
}
