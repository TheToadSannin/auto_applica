const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { body } = require("express-validator");
const { json } = require("express");

router.post("/loginStudent", 
 [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
 ],
  authController.handleStudentLogin
)

router.post("/loginTeacher", 
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
  ],
  authController.handleTeacherLogin
);

module.exports = router;