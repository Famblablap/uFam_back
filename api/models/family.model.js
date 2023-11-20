const { sequelize } = require('../../database/index')

const Family = sequelize.define(
     'family', {
        
    },
    
{
     timestamps: false
})

module.exports = Family