const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Contents = sequelize.define(
  "content",
  {
    content_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Contents;