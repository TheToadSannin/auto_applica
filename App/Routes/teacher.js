const express = require("express");
const Teacher = require("../models/Teachers");

const router = express.Router();

const { body, validationResult } = require("express-validator");
const { json } = require("express");

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
      res.json({
        fullname: req.body.fullname,
        email: req.body.email,
        standard: req.body.standard,
        section: req.body.section,
        address: req.body.address,
        password: req.body.password,
      });
      // await Teacher.create({
      // fullname: req.body.fullname,
      // email: req.body.email,
      // standard: req.body.standard,
      // section: req.body.section,
      // address: req.body.address,
      // password: req.body.password
      // });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
