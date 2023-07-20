const mongoose = require("mongoose");

const { Schema } = mongoose;

const StudentSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    roll_no: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("students", StudentSchema);
