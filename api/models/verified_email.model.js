const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const VerifiedEmail = sequelize.define(
  "verified_email",

  {
    timestamps: false,
  }
);

module.exports = VerifiedEmail;
