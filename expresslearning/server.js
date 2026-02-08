const express = require('express')
const app=express();
const userData=require('./data')
app.get('/',(req,res)=>{
    // res.send("server is runnning")
    res.send(userData)

})
app.get('/findinggender',(req,res)=>{
    let gender = userData.map((user)=>{
        if(user.gender === 'female'){
            return "Ms"+user.name
        }
        else{
            return "Mr"+user.name
            
        }
    })
    res.json(gender)
})

app.get('/user/page',(req,res)=>{
    // || yeh use isiliyr kra hae if user url mae kuch deta nai hae toh default values a and 5 lelega
    // Number use kra hae if koi banda limit mae aa na likhde
    // best for production purpose
    const page=Number(req.query.page) ||1
    const limit=Number(req.query.limit) || 5
    const pagesize=req.query.pagesize
    const startindex=(page-1)*limit
    const endindex=page*limit
    const pagedata = userData.slice(startindex,endindex)
    res.json(pagedata)
})
app.get('/user/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    let userid = userData.filter((user)=>user.id===id)
    res.json(userid)
})
app.listen(3000,()=>{
    console.log("server is running")
})
