const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { body } = require("express-validator");
const { json } = require("express");

const authMiddlerWare = require("../middleware/auth/auth");

router.post(
  "/loginStudent",
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
  ],
  authController.handleStudentLogin
);

router.post(
  "/loginTeacher",
  [
    body("email", "invalid email").isEmail(),
    body("password", "invalid password"),
  ],
  authController.handleTeacherLogin
);

router.get("/isAuth", authMiddlerWare.mid_auth, (req, res) => {
  res.json({ userData: req.userData, role: req.role });
});

module.exports = router;
