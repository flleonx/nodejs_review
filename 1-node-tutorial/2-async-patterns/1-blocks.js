const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // BLOCKING CODE !!!
    for (let i = 0; i < 100; i++) {
      for (let j=0; j < 1000; j++) {
        console.log(i)
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
