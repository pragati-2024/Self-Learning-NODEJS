const arg = process.argv;
const port = arg[2]||3000;
// npx nodemon Command-Line-Input.js 5000->for default port
const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("testing input from cmd")
    res.end();
})
server.listen(port,()=>{
    console.log("server is running");
})