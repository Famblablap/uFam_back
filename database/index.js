const { Sequelize } = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false,
})

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log("Connection to DB has been established successfully.")
    } catch (error) {
        throw error
    }
}

async function syncModels() {
    try {
        await sequelize.sync()
        console.log('Models Synchronized!')
    } catch (error) {
        throw error
    }
}

module.exports = { sequelize, checkConnection, syncModels}