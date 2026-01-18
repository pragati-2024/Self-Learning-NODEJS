// define Static API data
const http = require('http')
// array of objects
const userData=[
    {
        name:"Panda",
        age:3,
        email:'pandaB@gmail.com'
    },
    {
        name:"Lily",
        age:3,
        email:'LilyB@gmail.com'
    },
    {
        name:"July",
        age:3,
        email:'JulyB@gmail.com'
    }
]
const server = http.createServer((req,res)=>{
    // for api
    res.setHeader("Content-type","application/json")
    res.write(JSON.stringify(userData));
    res.end("server is running")
})
server.listen(3000,()=>{
    console.log("server is running fluently")
})
// output
// [{"name":"Panda","age":3,"email":"pandaB@gmail.com"},{"name":"Lily","age":3,"email":"LilyB@gmail.com"},{"name":"July","age":3,"email":"JulyB@gmail.com"}]server is running

