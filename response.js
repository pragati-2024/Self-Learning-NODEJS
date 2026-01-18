// understand server response
const http = require('http')
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    // res.write("<h1> hello this is  pragati bansal </h1> <h2>")
    res.write(`<html>
        <head>
        <title>code step by step</title>
        </head>
        <body>
        <h3>learning node js</h3>
        </body>
        </html>`)
    res.end("server is running")
    // process.exit()
})
server.listen(5600,()=>{
    console.log("server is running")
})


// how to exit req->res.end();
// how to exit process->process.exit()