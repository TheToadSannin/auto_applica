const mongoose = require("mongoose");

const { Schema } = mongoose;



const StudentSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  roll_number: {
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
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("student", StudentSchema);
