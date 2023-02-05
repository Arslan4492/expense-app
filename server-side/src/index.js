const express = require('express')
const dotenv = require('dotenv')
const routes = require('./collections')
const bodyParser = require('body-parser')
const cors = require('cors')
const database = require('./database')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

const NodeJsServer = async () => {
    try {
        app.use(cors())
        app.use(bodyParser.json())
        app.use(routes())
        await database()
        app.listen(PORT, () => console.log(`server is live on http://localhost:${PORT}`))
    } catch (error) {
        console.log("🚀 ~ file: index.js:7 ~ NodeJsServer ~ error", error)
    }
}
NodeJsServer()