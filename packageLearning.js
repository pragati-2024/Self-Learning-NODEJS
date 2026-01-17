// What is External Package?->external module,external package,third packet package
// nodemon,npm i colors
const color = require('colors')
// console.log(color.blue("this is Pragati Bansal"))

// why do we need nodemon package
// using nodemon ->application continue running state pr rhegi
// npm install -g nodemon->-g means global(Package poore system me install ho jaata hai, sirf ek project ke liye nahi)

// npx nodemon filename.js->run in terminal
const http =require('http')
const server = http.createServer((req,res)=>{
    res.write("<h1>Checking whether server is running </h1>")
    res.end("server is running continuosly")
})
server.listen(5000,()=>{
    console.log("server is running continusly")
})




