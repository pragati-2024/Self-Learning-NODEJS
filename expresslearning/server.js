const express = require('express')
const app=express();
const userData=require('./data')
app.get('/',(req,res)=>{
    // res.send("server is runnning")
    res.send(JSON.stringify(userData))

})
app.listen(3000,()=>{
    console.log("server is running")
})
