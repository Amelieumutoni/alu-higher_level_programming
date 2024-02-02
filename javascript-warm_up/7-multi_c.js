#!/usr/bin/node
const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (num === undefined) {
  console.log('Missing number of occurrences');
} else {
  for (let rep = 1; rep <= num; rep++) {
    console.log('C is fun');
  }
}
