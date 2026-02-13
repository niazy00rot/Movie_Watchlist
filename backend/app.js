const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./frontend'))
const userRoutes = require('./routers/users.js')
const rootRoutes = require('./routers/root.js')
app.use('/', rootRoutes)
app.use('/user', userRoutes)
const port = 3001
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})