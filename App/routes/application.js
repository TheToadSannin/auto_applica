const express = require("express");
const Application = require("../models/Applications");
const applicationController = require("../controllers/applicationController");

const router = express.Router();



router.post("/storeApplicationTemp", applicationController.handleApplicationTemplate);



router.post(
  "/createApplication",


  async (req, res) => {
    try {
      
      await Application.create({
        student_id: '64b803711cf1edab206d2795'
      })

    } catch (error) {
      res.json(error);
    }
  }
);
module.exports = router;
