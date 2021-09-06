// sync approach
// const { readFile, writeFile } = require("fs").promises;

// USING THE util MODULE to promisify functions
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// native promises 
const { readFile, writeFile } = require("fs").promises;


// Create the promise from scratch
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const approach = 0;

switch (approach) {
  case 0:
    const start = async () => {
      try {
        const first = await readFile("../content/first.txt", `utf-8`);
        const second = await readFile("../content/second.txt", "utf-8");
        await writeFile(
          "../content/mind-grenade.txt",
          `THIS IS AWESOME : ${first} ${second}`,
          { flag: "a" }
        );
        console.log(first, second);
      } catch (error) {
        console.log(error);
      }
    };

    start();
    break;
  case 1:
    getText("../content/first.txt")
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    break;
}
