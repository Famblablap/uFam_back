const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Comment_Contents = sequelize.define(
  "comment_contents",
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

module.exports = Comment_Contents;