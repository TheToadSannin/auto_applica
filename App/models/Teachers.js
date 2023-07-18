const mongoose = require("mongoose");

const { Schema } = mongoose;

const address = new Schema({
  area: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const TeacherSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  standard: {
    type: Number,
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
    type: address,
    required: true,
  },
});

module.exports = mongoose.model("teacher", TeacherSchema);
