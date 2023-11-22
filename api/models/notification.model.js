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
      allowNull: false,
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    like_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Notification;
