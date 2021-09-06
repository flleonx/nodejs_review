const path = require('path');

// it shows the separator of the actual platform
console.log(path.sep);

// join --> join the sequence of path segments using the specific 
// platform separator and return a normilized resulting path
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// basename gets the last portion of the path
const base = path.basename(filePath);
console.log(base);

// returns and absolute path --> It accepts sequence of path or path
// segments
const absolute = path.resolve(__dirname, 'content/', 'subfolder', 'test.txt');
console.log(absolute);