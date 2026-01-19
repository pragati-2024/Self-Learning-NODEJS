const http = require('http')
const userForm = require('./UserForm')
const userDataSubmit = require('./userDataSubmit')
const server = http.createServer((req,res)=>{
    // res.end("server is running");
    res.writeHead(200,{"content-type":"text/html"})
    if(req.url =="/"){
        userForm(req,res)
    }
    else if(req.url == "/submit"){
        userDataSubmit(req,res)
    }
    
    res.end();
})
server.listen(3000,()=>{
    console.log("server is running continuosly")
})