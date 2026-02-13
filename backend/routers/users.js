const router = require('express').Router();

const { create_user } = require('../../db/users.js')

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
module.exports = router
