const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()
const { checkConnection, syncModels } = require("./database/index")
const { setRelations } = require("./database/models")
const { start } = require("repl")

async function connectDB() {
    await checkConnection()
    setRelations()
    await syncModels()
}

function launchServer() {
    const app = express()
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use('/api', require('./api/router/auth.router'))
        .listen(process.env.PORT, () => {
            console.log("Express server listening on port " + process.env.PORT)
        })
}

async function startAPI() {
    await connectDB()
    launchServer()
}

startAPI()