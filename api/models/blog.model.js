const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Blog = sequelize.define(
  "blog",
  {
    blog: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Blog;
