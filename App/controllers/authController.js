//Student Authorization
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const student_collection = mongoose.model("students"); //import "students" collection
const teacher_collection = mongoose.model("teachers"); //import "teachers" collection


const handleStudentLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ msg: errors.array(), success: false });
    }

    const {email, password} = req.body;

    try {
      const student_data = await student_collection.findOne({ email: email }); //fetch thd data with the entered email
      if (student_data === null) {
        return res.json({msg: "Email is Not Registered", success: false})
      }

      const isValidPass = await bcrypt.compare(password, student_data.password).then(res=>{return res})
      console.log(isValidPass+" password")

      if (isValidPass) {
        return res.json({msg: "Login Successful", success: true})
      }
      //password is correct
      res.json({msg: "Invalid Username/Password", success: false})
    } catch (error) {
      console.log(error);
      res.json({ msg: "Something went Wrong!", success: false });
    }
  }



//Teacher Authorization

const handleTeacherLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ msg: errors.array(), success: false });
    }
    const {email, password} = req.body;

    try {
      const teacher_data = await teacher_collection.findOne({ email: email}); //fetch thd data with the entered email
      if (teacher_data === null) {
        return res.status(400).json({
          msg: "Email is not Registered",
          success: false
        });
      }

      const isValidPass = await bcrypt.compare(password, teacher_data.password).then(res=>{return res});
      console.log(isValidPass+" password");
      // an entry already is present with the requested email
      //if entry is present check password
      if (isValidPass) {
        return res.json({msg: "Login Successful", success: true});
      }
      //password is correct
      res.json({msg: "Invalid Username/Password", success: false});


    } catch (error) {
      console.log(error);
      res.json({ msg: "Something went Wrong!", success: false });
    }
  }

  module.exports = {handleStudentLogin, handleTeacherLogin};