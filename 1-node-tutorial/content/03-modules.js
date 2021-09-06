// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./04-names');
// we can also destructure the names
// const {john , peter } = require('./04-names');

const sayHi = require('./05-utils');

sayHi(names.john);
sayHi(names.peter);

// testing alternative syntax
const data = require('./06-alternative-flavor');
console.log(data)

// we are invoking all the code in the following file
require('./07-mind-grenade');
