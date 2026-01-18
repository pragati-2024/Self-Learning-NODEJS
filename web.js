// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   fs.readFile("html/web.html", "utf-8", (err, data) => {
//     if (err) {
//       res.writeHead(500, { "content-type": "text/plain" });
//       res.write("internal server error");
//       req.end();
//       return;
//     }
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(data);
//     res.end("server is running");
//   });
// //   fs.writeFile("outputdata.txt", "new generated output", (err) => {
// //     if (err) throw err;
// //     console.log("file write successfully");
// //   });
//   fs.appendFile(
//     "./output.txt",
//     "I am trying to append my data in new file",
//     (err) => {
//       if (err) throw err;
//       console.log("file append successfully");
//       return;
    
//     },
//   );
// //   delete function
// //   fs.unlinkSync('./outputdata.txt')
// //     console.log("end");
   
// });
// server.listen(3000, () => {
//   console.log("server is running");
// });
