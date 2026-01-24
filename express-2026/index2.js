const express = require('express')
const app = express()
const userData = require('./data')
const { use } = require('react')
app.get('/',(req,res)=>{
    res.send("server is running smoothly")
})
app.get('/home',(req,res)=>{
    res.send("this is home page")
})
app.get('/Aboutpage',(req,res)=>{
    res.send("this is an about page")
})
app.get('/settings',(req,res)=>{
    res.send("this is an setting page")
})
app.get('/profilepage',(req,res)=>{
    res.send("profile page is on the floor")
})

app.get('/userdata',(req,res)=>{
    res.json(userData)
})
app.get('/user/:id',(req,res)=>{
    // string mae aayega integer mae convert krne kae liye parseint
    const id =  parseInt(req.params.id)
    let userid = userData.filter((user)=>user.id===id)
    res.json(userid)
})
app.get('/gender',(req,res)=>{
    let usergender = userData.map((user)=>{
        if(user.gender === "female"){
            return "Ms " +user.name
        }
        else{
            return "Mr "+user.name
        }
    })
    res.json(usergender)
})

app.listen(9000,()=>{
    console.log("server is running smoothly")
})