const http = require("http");

// built-in http module
const server = http.createServer((req, res) => {
  // for each url there should be a response
  // The URLs are checked by .url parameter
  if (req.url === "/") {
    // final response to the request
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

// server listening on (port)
server.listen(5000);
