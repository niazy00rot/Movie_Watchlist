const pool = require('./init_db')

async function get_all_movies(){
    const client = await pool.connect()
    try{
        const movies = await pool.query('select * from movies')
        return movies.rows
    }
    catch(err){
        console.error("Error executing query", err.stack)
    }
    finally{
        client.release()
    }
}


module.exports = {get_all_movies}