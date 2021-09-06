// synchronously --> blocking

// we want destructure it and only get the require modules
const { readFileSync, writeFileSync } = require("fs");
console.log('start');

// read a file passing the path and the encoding method
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// write a file (path, payload, { properties })
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  // if i wanna append the payload it is necesary to add the flag property,
  // otherwise the file will be overwritten
  { flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

// always think with task that takes longer time
// ex: multiple users using the application simultaneously