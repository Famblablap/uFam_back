const { sequelize } = require("../../database/index");
const { DataTypes } = require("sequelize")

const Like = sequelize.define("like", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    photoId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    videoId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    commentId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    messageId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Like
