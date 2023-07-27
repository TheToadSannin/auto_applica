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
        title: "Application for Holiday",
        student_id: '64ba89590edc22b22f7e705c',
        isAccepted: false
      })

      res.json({success:true});

    } catch (error) {
      res.json(error);
    }
  }
);


router.get("/getApplications", async(req, res)=>{
    try{
      const student_id = req.query.student_id;
      const applications = await Application.find({student_id: student_id});
      res.json(applications);
      console.log(applications);
    }
    catch(errors){
      console.log(errors);
    }
})
module.exports = router;
