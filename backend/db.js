require('dotenv').config();
const mongoose = require("mongoose");
const mongoUri = process.env.MONGO_URL;
const mongoDB = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.error(err);
    });
    
};

module.exports = mongoDB;
