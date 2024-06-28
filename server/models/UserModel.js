const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("login", loginSchema);

module.exports = userModel;
