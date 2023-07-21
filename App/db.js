const mongoose = require("mongoose");

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
