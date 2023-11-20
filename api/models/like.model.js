const { sequelize } = require('../../database/index')

const Like = sequelize.define(
     'like', {
        
    },
    
{
     timestamps: false
})

module.exports = Like