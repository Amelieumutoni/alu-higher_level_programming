#!/usr/bin/node
const args = process.argv.slice(2);
let secondlargest;

if (args.length === 1 || args.length === 0) {
  console.log('0');
} else {
  secondlargest = args.sort((a, b) => a - b).reverse();
  console.log(secondlargest[1]);
}
