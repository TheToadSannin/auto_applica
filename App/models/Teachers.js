const mongoose = require("mongoose");

const { Schema } = mongoose;

const TeacherSchema = new Schema({
  fullname: {
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
});

module.exports = mongoose.model("teacher", TeacherSchema);
