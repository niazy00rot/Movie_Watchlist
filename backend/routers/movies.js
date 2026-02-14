const router = require('express').Router()
const {get_all_movies} = require('../../db/movies')

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

module.exports = router