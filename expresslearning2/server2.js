import express from 'express'
import fs from 'fs'
import {data as person} from './data.js'
import {config} from "dotenv"
config();
const app=express()
app.use(express.json())
const port = process.env.port || 3000

app.get('/user',(req,res)=>{
    res.status(200).json(person)
})
app.post("/user",(req,res)=>{
    const{username,password}=req.body
    if(!username || !password){
        res.status(400).json({
            message:"username and password required"
        })
    }
    if(password.length<6){
        res.status(400).json({
            message:"password length must be 6"
        })
    }
    const exist = person.find((user)=>user.username === username);
    if(exist){
        return res.status(409).json({
            message:"username already exist"
        })
    }
    let newdata = {
        id:person.length+1,
        username,
        password
    };
    person.push(newdata)
    res.status(201).json({
        message:"user created"
    })
})
app.put('/user',(req,res)=>{
    const id = parseInt(req.params.id);
    const {username} = req.body
    const index = person.find((user)=>user.id === id);
    if(index === -1){
        return res.status(404).json({
            message:"user not found"
        })
    }
    if(!username){
        return res.status(400).json({
            message:"username doesnot found"
        })
    }
    person[index]={
        ...person[index],
        username,
    };
    return res.status(200).json({
        message:"username updated",
        user:person[index]
    })
})
app.delete('/user',(req,res)=>{
    const id = req.params.id
    const index = person.find((user)=>user.id===id)
    if(index === -1){
        return res.status(400).json({
            message:"user not found"
        })
    }
    const deleteuser = person.slice(index,1)
    res.status(200).json({
        message:"user deleted successull",
        user:deleteuser[0]
    });
})
app.listen(port,()=>{
    console.log("server is running")
})