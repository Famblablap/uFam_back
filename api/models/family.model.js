const { sequelize } = require('../../database/index')
const { DataTypes } = require('sequelize')

const Family = sequelize.define(
     'family', {
     family_name: {
          type: DataTypes.STRING,
          allowNull: false,
     },
},
     {
          timestamps: false
     })

module.exports = Family