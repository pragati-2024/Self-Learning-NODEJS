const http = require("http");
// const userData = require("./data");
const data ="This is my data file"
const fs = require("fs");
const server = http.createServer((req, res) => {
  // res.end("server is running")
  if (req.url === "/readfile" && req.method === "GET") {
    fs.readFile("./news.txt", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("internal server error");
      }
      res.writeHead(200, "utf8", { "content-type": "text/plain" });
      res.end(data);
    });
  }
});
server.listen(3000, () => {
  console.log("server running smoothly");
});
