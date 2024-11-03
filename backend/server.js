const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const dburl = 'mongodb+srv://kasthuriniharika32:plants@cluster2.kvksn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2'
const secret_key = "secretKey"
const User = require('./models/UserSchema')
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(dburl,{})
.then(() => {
    app.listen(3000,() => {
        console.log("MongoDB Connected")
    })
})
.catch((error) => {
    console.log(error,"Unable to connect to MongoDB")
})

app.post('/register',async(req,res) => {
    try{
        const {email,username,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({email,username,password:hashedPassword})
        await newUser.save()
        res.status(201).json({message:"Registration success"})
    }catch(error){
        res.status(500).json({message:"Error in SignIn"})
    }
})

app.get('/register',async(req,res) => {
    try{
        const users = await User.find()
        res.status(201).json(users)
    }catch(error){
        res.status(500).json({message:"Unable to get users"})
    }
})

app.post('/login',async(req,res)=>{
    try {
        const {username,password} = req.body 
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({error:"Invalid Credentials"})
        }
        const isPassword = await bcrypt.compare(password,user.password)
        if(!isPassword){
            return res.status(410).json({error:"Password Error"})
        }
        const token = jwt.sign({userId:user._id},secret_key,{expiresIn:'1hr'})
        res.json({message:"Login success"})
    } catch (error) {
        res.status(500).json({error:"Error login"})
    }
})