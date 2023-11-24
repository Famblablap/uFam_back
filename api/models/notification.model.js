const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Notification = sequelize.define(
  "notification",
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    like_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Notification;
