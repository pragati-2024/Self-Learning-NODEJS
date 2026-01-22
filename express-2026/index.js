const express = require('express')
const app=express();
const userData = require("./data")

// why we domt directly use express
// basically it is a function

// function test(){

// }
// test()
// console.log(app);
app.get("/about",(req,res)=>{
    res.send("<h1>ABOUT page<h1>")
})
app.get("/home",(req,res)=>{
    res.send("<h1>HOME PAGE<h2>")
})

app.get("/userage",(req,res)=>{
    let userage =  userData.filter(user=>user.age>20);
    res.json(userage)
})
// map function new array create krdeta he

app.get("/findinggender",(req,res)=>{
    let gender = userData.map(user=>{
        if(user.gender === "female"){
            return "Ms " + user.name
        }
        else {
            return "mr " + user.name
        }
    })
    console.log(gender)
    res.json(gender)
})
app.listen(3400,()=>{
    console.log("server is running")
})
