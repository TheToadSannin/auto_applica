const express = require("express");
const Application = require("../models/Applications");

const router = express.Router();

router.post(
  "/createApplication",

  async (req, res) => {
    try {
      await Application.create({
        student_id: studentData,
      });
    } catch (error) {
      res.json(error);
    }
  }
);
module.exports = router;
