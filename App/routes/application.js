const express = require("express");
const Application = require("../models/Applications");
const applicationTemplate = require("../models/ApplicationTemplates");
const applicationController = require("../controllers/applicationController");

const router = express.Router();

router.post(
  "/storeApplicationTemp",
  applicationController.handleApplicationTemplate
);

router.post(
  "/createApplication",

  async (req, res) => {
    try {
      await Application.create({
        title: req.body.appSubject,
        body: req.body.editorData,
        student_id: req.body.student_id,
        imgUrl: req.body.imgUrl,
        isAccepted: "Pending",
      });

      res.json({ success: true, message: "Application Submitted" });
    } catch (error) {
      res.json(error);
    }
  }
);

router.post("/updateApplication", async (req, res) => {
  try {
    const result = await Application.updateOne(
      {
        _id: req.body.applicationid,
      },
      {
        $set: {
          isAccepted: req.body.status,
        },
      }
    );
    console.log(result);
    res.json({
      success: true,
      message: `Application ` + req.body.status,
    });
  } catch (error) {
    console.log(error, "Cannot update the application status");
  }
});

router.get("/getApplications", async (req, res) => {
  try {
    const student_id = req.query.student_id;
    const applications = await Application.find({ student_id: student_id });
    res.json(applications);
  } catch (errors) {
    console.log(errors);
  }
});

router.get("/getApplicationWithStudent", async (req, res) => {
  try {
    const standard = req.query.standard;
    const applications = await Application.aggregate([
      {
        $lookup: {
          from: "students",
          localField: "student_id",
          foreignField: "_id",
          as: "student",
        },
      },
      { $unwind: "$student" },
      {
        $match: {
          "student.standard": standard,
        },
      },
    ]);

    applications.map((application) => {
      delete application.student.password;
      delete application.student.token;
    });

    res.json(applications);
  } catch (errors) {
    console.log(errors);
  }
});

router.get("/applicationTemplates", async (req, res) => {
  try {
    const alltemplates = await applicationTemplate.find();
    res.json(alltemplates);
  } catch (error) {
    console.log(error, "cannot fetch application templates");
  }
});

router.get("/getApplicationTemplate", async (req, res) => {
  try {
    const applicationID = req.query.id;
    const application = await applicationTemplate.find({ _id: applicationID });
    res.json(application[0]);
  } catch (error) {
    console.log(error, "cannot fetch application");
  }
});

router.get("/viewApplication", async (req, res) => {
  try {
    const applicationId = req.query.id;
    console.log(applicationId);
    const application = await Application.find({
      _id: applicationId,
    });
    res.json(application[0]);
  } catch (error) {
    console.log(error, "Cannot View Application");
  }
});

module.exports = router;
