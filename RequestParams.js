// what is client Request and request Params?
const http = require('http')
const server = http.createServer((req,res)=>{
    // req ko console krne se server(client side) pr nai dikhega kuch terminal pr dikhega
    // console.log(req.url);
    // console.log(req.headers.host);
    res.setHeader("Content-type","text/html")
    console.log(req.method)
    if(req.url=="/"){
        res.write("<h1>home</h1>")
    }
    else if(req.url=="/login"){
        res.write("<h1>login</h1>")
    }
    else{
        res.write("<h1>other page</h1>")
    }
    
    // res.write("<h1>HomePage</h1>")
    res.end("server is running")
})
server.listen(3600,()=>{
    console.log("server is running")
})