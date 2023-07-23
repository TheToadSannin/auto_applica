var jwt = require("jsonwebtoken");
const PRIVAT_KEY = "uvJPJek0Bb0ZwaSoDJ7TqcwqVZJfSNqN";

const Student = require("../../models/Students");
const Teacher = require("../../models/Teachers");

const student_mid_auth = async (req, res, next) =>{
    try{
        const token = req.headers["x-access-token"].split(" ")[1];
        let student = jwt.verify(token, PRIVAT_KEY);
        let studentX = await Student.findById(student._id).select("-password");
        req.student = studentX;
        console.log("Authentication Successful");
        next();
    }catch(error){
        console.log("auth error", error, req.headers);
        res.status(401).json({msg: "authentication failed", error: error});
    }
};

const teacher_mid_auth = async (req, res, next) =>{
    try{
        console.log(req.headers["x-access-token"]);
        const token = req.headers["x-access-token"];
        let teacher = jwt.verify(token, PRIVAT_KEY);
        let teacherX = await Teacher.findById(teacher._id).select("-password");
        req.teacher = teacherX;
        res.send(teacher);
        next();
    }catch(error){
        console.log(req.headers);
        console.log("auth error", error);
        res.status(401).json({msg: "authentication failed", error: error});
    }
};

module.exports = {teacher_mid_auth, student_mid_auth};