const express = require("express");
const Teacher = require("../models/Teachers");
const mongoose = require("mongoose");

const router = express.Router();

const { body, validationResult } = require("express-validator");
const { json } = require("express");

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
        password: req.body.password,
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
      return res.status(400).json({ errors: errors.array() });
    }
    let teacher_email = req.body.email;

    try {
      const teacher_data = await teacher_collection.findOne({
        email: teacher_email,
      }); //fetch thd data with the entered email
      if (teacher_data === undefined) {
        return res.status(400).json({
          errors:
            "Email not registered! Try logging in with a registered email address",
        });
      }
      await console.log(teacher_data.email);
      // an entry already is present with the requested email
      //if entry is present check password
      if (req.body.password !== teacher_data.password) {
        return res
          .status(404)
          .json({ errors: "Email and password does not match" });
      }
      //password is correct
      return res.json({ success: true, teacher_data });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

//===============================================================================================================

module.exports = router;
