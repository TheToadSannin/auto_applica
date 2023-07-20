const express = require("express");
const Student = require("../models/Students");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRound = 10;

const router = express.Router();

const { body, validationResult } = require("express-validator");
const { json } = require("express");

//signup ========================================================================================================================

router.post(
  "/createStudent",
  [
    body("fullname", "Invalid Name").isString().isLength({ min: 5 }),
    body("email", "invalid email").isEmail(),
    body("roll_no", "Invalid Name").isString(),
    body("standard", "Invalid Name").isString(),
    body("section", "Invalid Name").isString(),
    body("address", "Invalid Name").isString(),
    body("password", "invalid password"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    console.log(validationResult(req));

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Student.create({
        fullname: req.body.fullname,
        email: req.body.email,
        roll_no: req.body.roll_no,
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
// /========================================================================================================================

//login==========================================================================================================
const student_collection = mongoose.model("students"); //import "students" collection

router.post(
  "/loginStudent",
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
);

//===============================================================================================================
module.exports = router;
