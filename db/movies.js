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

async function get_loved_movies(id){
    const client = await pool.connect()
    try{
    const movies = await pool.query('select movie_id from loved movies where user_id=$1', [id])
    return movies.rows
    }
    catch(err){
        console.error("Error executing query", err.stack)
    }
    finally{
        client.release()
    }
}

async function add_loved(user_id,movie_id){
    const client = await pool.connect()
    try{
       await pool.query('insert into loved_movies(user_id ,movie_id) values($1,$2)', [user_id,movie_id])  
    }
    catch(err){console.error("Error executing query", err.stack)}
    finally{
        client.release()
    }

}

module.exports = {get_all_movies , get_loved_movies, add_loved}