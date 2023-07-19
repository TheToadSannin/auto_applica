const express = require("express");
const Application = require("../models/Applications");

const router = express.Router();

const student1 = {
  fullname: "sdf;lk",
  roll_no: "alsfk",
  email: "aslfjasl@gmail.com",
  standard: "a",
  section: " a",
  address: " asd;lfkjasd;lfjsd;lfjdslj",
  password: "as;lfjslfjldfj",
};

router.post(
  "/createApplication",

  async (req, res) => {
    try {
      await Application.create({
        student: {
          fullname: "sdf;lk",
          roll_no: "alsfk",
          email: "aslfjasl@gmail.com",
          standard: "a",
          section: " a",
          address: " asd;lfkjasd;lfjsd;lfjdslj",
          password: "as;lfjslfjldfj",
        }
      });
    } catch (error) {
      res.json(error);
    }
  }
);
module.exports = router;
