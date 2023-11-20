const { DataTypes } = require('sequelize')
const { sequelize } = require("../../database/index")

const Photos = sequelize.define(
     'photos', {
        photo_url: { 
            type: DataTypes.STRING, allowNull: false,
         },
    },
{
     timestamps: false
})

module.exports = Photos