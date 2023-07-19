const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: "student" },
});
module.exports = mongoose.model("application", ApplicationSchema);
