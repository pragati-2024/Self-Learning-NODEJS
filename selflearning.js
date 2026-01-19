const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const server = http.createServer((req, res) => {
  // res.end("server is running")
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("html/web.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-type": "text/html" });
        res.end("internal error");
        return;
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url.startsWith("/submit") && req.method === "POST") {
    let dataBody = [];
    req.on("data", (chunk) => {
      dataBody.push(chunk);
    });
    req.on("end", () => {
      let rawData = Buffer.concat(dataBody).toString();
      let readableData = queryString.parse(rawData);
      console.log(readableData);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("FORM SUBMIT SUCCESSFULLY");
      let dataString =
        "MY name is " +
        readableData.text +
        " and my password is " +
        readableData.password;
      console.log(dataString);
      fs.writeFile("text/" + readableData.text + ".txt", "utf-8", (err) => {
        if (err) {
          throw err;
        }
        console.log("file write succesfully");
      });
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 error");
  }
});
server.listen(3000, () => {
  console.log("server is running");
});
