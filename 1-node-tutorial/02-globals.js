// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program if being executed

const global_variable = 2;

switch (global_variable) {
  case 0: 
    console.log(__dirname);
    break;
  case 1:
    console.log(__filename);
    break;
  case 2:
    console.log(process);
    break;
  default:
    console.log("This switch is to test each global variable");
}