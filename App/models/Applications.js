const mongoose = require("mongoose");
const Student = require("./Students.js");
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  student: [{ type: Schema.Types.ObjectId, ref: "student" }],
});
