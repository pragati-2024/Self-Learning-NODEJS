const http = require('http');
const server = http.createServer((req,res)=>{
    // res.write("<h1> LEARNING BASICS </h1>" )
    res.end("server is running");
})
server.listen(3000,()=>{
    console.log("server is running");
})
// client send request and server send response
// http package used for creating server
// can we make 2 server at same time->lets try it
 const server2 = http.createServer((req,res)=>{
    res.end("second server is also working")
 })
 server2.listen(4800,()=>{
    console.log("server2 is also running")

 })
//  we can make 2 server at same time