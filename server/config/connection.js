const mongoose = require("mongoose");
const dotenv = require('dotenv').config()

main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  // replace "mongodb://127.0.0.1:27017/test" with your mongodb atlas URI
  await mongoose.connect(process.env.MONGO_URL);
}

module.exports = main;
