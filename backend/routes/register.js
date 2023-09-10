const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const registerController = require("../controllers/registerController");


router.post("/createStudent",
 [
    body("fullname", "Invalid Name").isString().isLength({ min:5 }),
    body("email", "invalid email").isEmail(),
    body("roll_no", "Invalid Name").isString(),
    body("standard", "Invalid Name").isString(),
    body("section", "Invalid Name").isString(),
    body("address", "Invalid Name").isString(),
    body("password", "invalid password"),
 ],

 registerController.handleStudentRegistration
)

router.post("/createTeacher", 
 [
    body("fullname", "Invalid Name").isString().isLength({ min: 5 }),
    body("email", "invalid email").isEmail(),
    body("standard", "Invalid Name").isString(),
    body("section", "Invalid Name").isString(),
    body("address", "Invalid Name").isString(),
    body("password", "invalid password"),
 ],

 registerController.handleTeacherRegistration
)

module.exports = router;