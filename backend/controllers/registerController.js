//Student Registration
const bcrypt = require("bcrypt");
const Student = require("../models/Students");
const Teacher = require("../models/Teachers");
const { body, validationResult } = require("express-validator");



const handleStudentRegistration = async (req, res) => {
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
        password: await bcrypt.hash(req.body.password, 10).then(hash => {return hash}),
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }


  //Teacher Registration

  const handleTeacherRegistration = async (req, res) => {
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
        password: await bcrypt.hash(req.body.password, 10).then(hash => {return hash}),
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }

module.exports = {handleTeacherRegistration, handleStudentRegistration}