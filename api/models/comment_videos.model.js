const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Comment_Videos = sequelize.define(
  "comment_videos",
  {
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Comment_Videos;
