const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  //   student_id: { type: Schema.Types.ObjectId, ref: "student" },
  title: {
    type: String,
  },
  body:{
    type: String
  },
  student_id: {
    type: Schema.Types.ObjectId,
  },
  isAccepted: {
    type: Boolean,
  },
});
module.exports = mongoose.model("application", ApplicationSchema);
