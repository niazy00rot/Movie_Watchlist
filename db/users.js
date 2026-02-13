const pool = require('./init_db')

async function create_user(username, password){
    const client = await pool.connect()
    try{
        await pool.query('insert into users (username, password) values ($1, $2)', [username, password])
        console.log("User created successfully")
    }
    catch(err){
        console.error("Error executing query", err.stack)
    }   
    finally{
        client.release()
    }
}
module.exports = {
    create_user
}
