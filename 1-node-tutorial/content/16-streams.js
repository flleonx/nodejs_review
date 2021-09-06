// Use case --> when we're reading files

const { createReadStream } = require("fs");

const path = "./content/big.txt";

// default 64kb
// last buffer - remainder
// highWaterMark - control size
const stream = createReadStream(path);
// parameters
// const stream = createReadStream(path, { highWaterMark: 9000 });
// const stream = createReadStream(path, { encoding: 'utf-8' });

var i = 0;

stream.on("data", (result) => {
  console.log(`Show for: ${i} time`);
  i++;
  console.log(result);
});

stream.on('error', (err) => {
  console.log(err);
});