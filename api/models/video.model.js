const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Videos = sequelize.define(
  "videos",
  {
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Videos;
