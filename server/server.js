const express = require('express')
const connect = require('./config/db')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
app.use(express.json())

const user_route = require('./resources/routes/user.route')

const PORT = process.env.PORT

const start = async () => {
    await connect()
    app.listen(PORT, () => {
        console.log("listening to port " + PORT)
    })
}

start()

app.use('/api/user', user_route)