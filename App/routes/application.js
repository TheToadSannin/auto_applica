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
        title: "Application for Leave",
        student_id: '64b803711cf1edab206d2795'
      })

      res.json({success:true});

    } catch (error) {
      res.json(error);
    }
  }
);


router.get("/getApplications", async(req, res)=>{
    try{
      const applications = await Application.find
    }
})
module.exports = router;
