const pool= require('./init_db')

async function c(){
    const client = await pool.connect()
    try{
        await pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(50) unique NOT NULL, password varchar(50) NOT NULL)')
        console.log("Table created successfully")
        await pool.query('CREATE TABLE IF NOT EXISTS movies (movie_id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, h INT not null, m int not null)')
        console.log("Table created successfully")
        await pool.query('CREATE TABLE IF NOT EXISTS loved_movies (user_id INT NOT NULL, movie_id INT NOT NULL, FOREIGN KEY (user_id) REFERENCES users(id), FOREIGN KEY (movie_id) REFERENCES movies(movie_id))')
        console.log("Table created successfully")
    }
    catch(err){
        console.error("Error executing query", err.stack)
    }
    finally{
        client.release()
    }
}


async function add_15_movies(){
    const client =await pool.connect()
    try{
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Shawshank Redemption', 2, 22])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Godfather', 2, 55])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Dark Knight', 2, 32])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['Pulp Fiction', 2, 34])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Lord of the Rings: The Return of the King', 3, 21])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['Forrest Gump', 2, 22])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['Inception', 2, 28])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['Fight Club', 2, 19])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Matrix', 2, 16])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['Goodfellas', 2, 26])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Silence of the Lambs', 1, 58])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['Se7en', 2, 7])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Usual Suspects', 1, 46])
        await pool.query('INSERT INTO movies (name, h, m) VALUES ($1, $2, $3)', ['The Lion King', 1, 28])
        console.log("Movies added successfully")
    }
    catch(err){
        console.error("Error executing query", err.stack)
    }
    finally{
        client.release()
    }
}
add_15_movies();