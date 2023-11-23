const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Comment_Photos = sequelize.define(
  "comment_photos",
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

module.exports = Comment_Photos;
