const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  // res.end("server is running")
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("html/web.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end("internal server error");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
    // res.writeHead(200, { "content-type": "text/html" });
  } else if (req.url.startsWith("/submit") && req.method === "POST") {
    let dataBody = [];
    req.on("data", (chunks) => {
      dataBody.push(chunks);
    });
    req.on("end", () => {
      let rawData = Buffer.concat(dataBody).toString();
      let readableData = queryString.parse(rawData);
      console.log(rawData);
      let myData =
        "My name is " +
        readableData.text +
        " and my password is " +
        readableData.password;
      console.log(myData);
      
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("form submit successfully")
    });
  }
  else{
    res.writeHead(404,{"content-type":"text/plain"})
    res.end("error in something");
  }
});
server.listen(3000, () => {
  console.log("server running conitnuosly");
});
