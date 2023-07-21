const mongoose = require("mongoose");
const {Schema} = mongoose;


const TemplatesSchema = new Schema({
    type:{
        type: String
    },
    subject:{
        type: String
    },
    body: {
        type: String
    }
})

module.exports = mongoose.model("applcation_template", TemplatesSchema);