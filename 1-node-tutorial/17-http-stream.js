var http = require("http");
var fs = require("fs");

const file_path = "./content/big.txt";
const port = 5000;

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync(file_path, "utf-8");
    // res.end(text);

    const fileStream = fs.createReadStream(file_path, "utf-8");
    fileStream.on("open", () => {
      // pushing from the readStream into the writeStream
      // read data in chunks but also write data in chunks
      // respose object can be set up as a writable stream
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(port);
