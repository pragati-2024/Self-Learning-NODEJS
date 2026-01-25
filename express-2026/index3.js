const express = require('express')
const app = express()
const userData = require('./data.js')

app.get('/user',(req,res)=>{
    res.send("server is running")
})

// Static route ko dynamic route se upar rakho
app.get('/user/page',(req,res)=>{
    const page = req.query.page
    const limit=  req.query.limit
    const pagesize=req.query.pagesize
    const startindex=(page-1)*limit
    const endindex=page*limit

    const pagedata = userData.slice(startindex,endindex)
    res.json(pagedata)
})

app.get('/gendervalue',(req,res)=>{
    let genderdata = userData.map((user)=>{
        if(user.gender === "female")return "Ms "+user.name
        else{return "Mr "+user.name}
    })
    res.json(genderdata)
})
app.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    let iddata = userData.filter((user)=>user.id===id)
    res.json(iddata)

})

app.listen(5000,()=>{
    console.log("server is running")
})