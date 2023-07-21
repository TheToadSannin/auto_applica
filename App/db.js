const mongoose = require("mongoose");
const mongoUri =
  `mongodb+srv://gauxrav:14aca70dc47e69g@cluster0.lctxgaw.mongodb.net/auto_applica`;
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
