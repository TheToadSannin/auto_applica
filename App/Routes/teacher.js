const express = require("express");
const Teacher = require("../models/Teachers");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRound = 10;

const router = express.Router();

const { body, validationResult } = require("express-validator");
const { json } = require("express");
const { toHaveFormValues } = require("@testing-library/jest-dom/dist/matchers");

//signup ====================================================================================================================
router.post(
  "/createTeacher",
  [
    body("fullname", "Invalid Name").isString().isLength({ min: 5 }),
    body("email", "invalid email").isEmail(),
    body("standard", "Invalid Name").isString(),
    body("section", "Invalid Name").isString(),
    body("address", "Invalid Name").isString(),
    body("password", "invalid password"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await Teacher.create({
        fullname: req.body.fullname,
        email: req.body.email,
        standard: req.body.standard,
        section: req.body.section,
        address: req.body.address,
        password: await bcrypt.hash(req.body.password, saltRound).then(hash => {return hash}),
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

//========================================================================================================================

//login==========================================================================================================
const teacher_collection = mongoose.model("teachers"); //import "teacher" collection

router.post(
  "/loginTeacher",
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
  ],
  async (req, res) => {
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
);

//===============================================================================================================

module.exports = router;
