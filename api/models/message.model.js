const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Message = sequelize.define(
  "message",
  {
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Message;
