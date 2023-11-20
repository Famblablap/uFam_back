const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const User = sequelize.define(
     'user', {
        name: { 
            type: DataTypes.STRING, allowNull: false,
         },
        email: {
            type: DataTypes.STRING, allowNull: false, unique: true
          },
        dob: {
            type: DataTypes.DATE, allowNull: false
        },
        password: {
            type: DataTypes.STRING, allowNull: false,
          },
        repeat_password: {
            type: DataTypes.STRING, allowNull: false,
          },
        role: {
            type: DataTypes.STRING, defaultValue:"user", allowNull: false,
          },
        profile_picture: {
            type: DataTypes.STRING, allowNull: false,
        }
    },
    
{
     timestamps: false
})

module.exports = User