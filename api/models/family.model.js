const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Family = sequelize.define(
     'family', {
          family_name: {
              type: DataTypes.STRING,
              allowNull: false
          },
          user_id: {
              type: DataTypes.INTEGER,
              allowNull: false
          }
      },
    
{
     timestamps: false
})

module.exports = Family