const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res)=>{
    fs.readFile('html/web.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":'text/plain'})
            res.write("internal server error")
            req.end()
            return
        }
        res.writeHead(200,{"content-type":'text/html'})
        res.write(data);
        res.end("server is running")
    })
    
})
server.listen(3000,()=>{
    console.log("server is running")
})