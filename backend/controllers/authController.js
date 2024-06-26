//Student Authorization
require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { validationResult } = require("express-validator");

var jwt = require("jsonwebtoken")

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const student_collection = mongoose.model("students"); //import "students" collection
const teacher_collection = mongoose.model("teachers"); //import "teachers" collection




const handleStudentLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ msg: errors.array()[0].msg, success: false });
  }

  const { email, password } = req.body;

  try {
    const student_data = await student_collection.findOne({ email: email }); //fetch thd data with the entered email
    if (student_data === null) {
      return res.json({ msg: "Invalid Username/Password", success: false })
    }

    const isValidPass = await bcrypt.compare(password, student_data.password).then(res => { return res })
    console.log(isValidPass + " password")

    if (isValidPass) {

      let token = jwt.sign({ _id: student_data._id, email: student_data.email }, PRIVATE_KEY);
      student_data.token = token;

      await student_data.save({ validModifiedOnly: true });
      student_data.password = '';

      //password is correct
      return res.json({ msg: "Login Successful", success: true, user: student_data, token: token });
    }
    
    res.json({ msg: "Invalid Username/Password", success: false })
  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went Wrong!", success: false });
  }
}



//Teacher Authorization

const handleTeacherLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ msg: errors.array()[0].msg, success: false });
  }
  const { email, password } = req.body;

  try {
    const teacher_data = await teacher_collection.findOne({ email: email }); //fetch thd data with the entered email
    if (teacher_data === null) {
      return res.json({
        msg: "Invalid Username/Password",
        success: false
      });
    }

    const isValidPass = await bcrypt.compare(password, teacher_data.password).then(res => { return res });
    console.log(isValidPass + " password");
    // an entry already is present with the requested email
    //if entry is present check password
    if (isValidPass) {

      let token = jwt.sign({ _id: teacher_data._id, email: teacher_data.email }, PRIVATE_KEY);
      teacher_data.token = token;

      await teacher_data.save({ validModifiedOnly: true });
      teacher_data.password = '';

      return res.json({ msg: "Login Successful", success: true, user: teacher_data, token: token });
    }
    //password is correct
    res.json({ msg: "Invalid Username/Password", success: false });


  } catch (error) {
    console.log(error);
    res.json({ msg: "Something went Wrong!", success: false });
  }
}

module.exports = { handleStudentLogin, handleTeacherLogin };

