const express = require("express");
const Student = require("../models/Students");
const mongoose = require("mongoose");

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
        password: req.body.password,
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
      if (student_data === undefined) {
        return res.status(400).json({
          errors:
            "Email not registered! Try logging in with a registered email address",
        });
      }
      // an entry already is present with the requested email
      //if entry is present check password
      if (req.body.password !== student_data.password) {
        return res
          .status(404)
          .json({ errors: "Email and password does not match" });
      }
      //password is correct
      return res.json({ success: true, student_data });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

//===============================================================================================================
module.exports = router;
