const http = require("http");
const fs = require("fs");
// for became data readable querystring module import krrana pdta hae
const querystring = require("querystring");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("html/web.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end("internal server error");
        return;
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else if (req.url.startsWith("/submit")) {
    // data hume chunks ki form mae milta hae toh jo data hota hae use array mae dalna pdta hae
    let dataBody = [];
    req.on("data", (chunk) => {
      dataBody.push(chunk);
    });
    // chunks collect krnahota hae buffer class collect krti hae
    req.on("end", () => {
      // req.on("end") → event listener
      // Matlab: saara POST data receive ho chuka hai
      // Iske andar hi data ko process karna aur response bhejna sahi hai
      let rawData = Buffer.concat(dataBody).toString();
      //   console.log(rawData);
      let readableData = querystring.parse(rawData);
      console.log(readableData);

        let dataString = "MY name is "+readableData.text + " and my password is "+ readableData.password;
        console.log(dataString);
        // fs.writeFileSync("text/"+readableData.text+".txt",dataString);
        // console.log("file created successfully")

        // async tarike se
        fs.writeFile("text/"+readableData.text+".txt",'utf-8',(err)=>{
            if(err){
                throw err;
            }
            console.log("file write succesfully");
        })
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>form submit successfully</h1>");
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 error");
  }
});
server.listen(4000, () => {
  console.log("server is running");
});
// when we submit form we get data in the form of chunkd
// on('data') collects the chunks
// on('end') finalizes the data
// querystring.parse() makes the data easier to use
