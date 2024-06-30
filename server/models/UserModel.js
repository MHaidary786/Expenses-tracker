const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    name : String,
    lastname : String,
    username: String,
    password: String, 
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", loginSchema);

module.exports = userModel;
