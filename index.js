const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()
const { checkConnection, syncModels } = require("./database/index")

async function connectDB() {
    await checkConnection()
    await syncModels()
}

connectDB()