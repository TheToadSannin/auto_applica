var jwt = require("jsonwebtoken");
const PRIVAT_KEY = "uvJPJek0Bb0ZwaSoDJ7TqcwqVZJfSNqN";

const Student = require("../../models/Students");

const student_mid_auth = async (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        let student = jwt.verify(token, PRIVAT_KEY);
        let studentX = await Student.findById(student._id).select("-password");
        req.student = studentX;
        next();
    }catch(error){
        console.log("auth error", error);
        res.status(401).json({msg: "authentication failed", error: error});
    }
};