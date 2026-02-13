const router = require('express').Router();

const { create_user } = require('../../db/users.js')
const { Login } = require('../../db/users.js')
const jwt=require('jsonwebtoken')
router.post('/register', async (req, res)=>{
    const {username, password} = req.body
    try{
        await create_user(username, password)
        res.status(201).json({message: "User created successfully"})
    }
    catch(err){
        res.status(500).json({error: err.message})
        console.error("Error creating user", err.stack)
    }
})
router.post('/login', async (req,res)=>{
    const{username,password}=req.body
    try{
        const data = await Login(username,password)
        const token=jwt.sign({id:data[0].id,username:data[0].username},process.env.JWT_SECRET,'secretkey',{expiresIn:'1h'})
   res.status(200).json({token,username:data[0].username})
    }
    catch(err){
        res.status(500).json({error: err.message})
        console.error("Error logging in", err.stack)
    }
    
})

module.exports = router
