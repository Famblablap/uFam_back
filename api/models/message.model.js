const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database/index')

const Message = sequelize.define(
     'message', {
        sender_id: { 
            type: DataTypes.INTEGER, allowNull: false
         },
        receiver_id: {
            type: DataTypes.INTEGER, allowNull: false
          },
        message: {
            type: DataTypes.STRING, allowNull: false
        }
    },
{
     timestamps: false
})

module.exports = Message