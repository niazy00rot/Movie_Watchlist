const router = require('express').Router()
const jwt = require('jsonwebtoken')
const {get_all_movies , get_loved_movies , add_loved} = require('../../db/movies')

router.get('/', async (req,res)=>{
    try{
        const movies =await get_all_movies()
        res.status(200).json(movies)
    }
    catch(err){
        res.status(500).json({error: err.message})
        console.error("Error fetching movies", err.stack)
    }
})
router.get('/loved', async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1] 
    try{
        const id = jwt.verify(token, process.env.JWT_SECRET).id
        const movie = await get_loved_movies(id)
        res.status(200).json(movie)
    }
    catch(err){
        res.status(500).json({error: err.message})
        console.error("Error fetching loved movies", err.stack)
    }
})
router.post('/loved',async(req,res)=>{
    const token = req.body.token
    const movie_id = req.body.movie_id
    try{
        const id = jwt.verify(token, process.env.JWT_SECRET).id
        await add_loved(id,movie_id)
        res.status(200).json({message: "Movie added to loved list"})
    }
    catch(err){
        res.status(500).json({error: err.message})
        console.error("Error adding loved movie", err.stack)
    }
} )
module.exports = router