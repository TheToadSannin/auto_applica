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
      return res.status(400).json({ errors: errors.array() });
    }
    let student_email = req.body.email;

    try {
      const student_data = await student_collection.findOne({
        email: student_email,
      }); //fetch thd data with the entered email
      if (student_data === null) {
        return res.status(400).json({
          errors:
            "Email not registered! Try logging in with a registered email address",
        });
      }
      // an entry already is present with the requested email
      //if entry is present check password
      const hash = await bcrypt.hash(req.body.password, saltRound).then(hash=>{return hash});
      const isValidPass = await bcrypt.compare(student_data.password, hash).then(res=>{return res})
      if (isValidPass) {
        return res
          .status(400)
          .json({ errors: "Email and password does not match" });
      }
      //password is correct
      console.log({success: true, student_data.email})
    //   return res.redirect("/student/dashboard");
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

//===============================================================================================================
module.exports = router;
