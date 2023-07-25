const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
//   student_id: { type: Schema.Types.ObjectId, ref: "student" },
    student_id: {
        type: Schema.Types.ObjectId
    }
});
module.exports = mongoose.model("application", ApplicationSchema);
