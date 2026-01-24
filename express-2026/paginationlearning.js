// Pagination is a crucial feature in web development allowing us to split large sets of data into smaller, more manageable chunks for display.
const express = require('express')
const app=express()
const userData = require('./data')
app.get('/home',(req,res)=>{
    res.send("this is home page")
})
app.get("/user/page",(req,res)=>{
    // let name = req.query.name
    // let size = req.query.size
    const page = req.query.page
    const pagesize=req.query.pagesize
    const limit = req.query.limit
    const startindex = (page-1)*limit
    const endindex = page*limit

    // http://localhost:5000/user/page?page=1&limit=2
    const pagedata = userData.slice(startindex,endindex)
    res.json({pagedata})

    // res.json({name,size})
})
app.listen(5000,()=>{
    console.log("server is running")
})