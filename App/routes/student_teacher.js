const express = require("express");
const router = express.Router();
const Student = require("../models/Students");
const Teacher = require("../models/Teachers");
const Application = require("../models/Applications")
const mongoose = require("mongoose");
const student_collection = mongoose.model("students"); 



router.get("/getStudents", async(req, res)=>{
    try{
        const standard = "2nd Year";
        // const students = await Student.find({standard: standard}).select("_id");
        // student_collection.aggregate
        const applications = await Application.aggregate([
            {
                $lookup:{
                    from: "students",
                    localField: "student_id",
                    foreignField: "_id",
                    as: "user"
                }
            },
            { $unwind : "$user"},
            {
                $match:{
                    "user.standard": standard
                }
            }
        ])

        applications.map((application)=>{
            // const application = await Appl
            // application.user = {};
            console.log(application);
        });

        res.json(applications);
        // console.log(students);
    }catch(errors){
        console.log(errors);
    }
})

module.exports = router;