var jwt = require("jsonwebtoken");
const PRIVAT_KEY = "uvJPJek0Bb0ZwaSoDJ7TqcwqVZJfSNqN";

const Student = require("../../models/Students");
const Teacher = require("../../models/Teachers");

const mid_auth = async (req, res, next) =>{
    
    const role = req.headers["x-access-token"].split(" ")[0];

    if(role === "BearerStudent"){
        try{
            const token = req.headers["x-access-token"].split(" ")[1];
            let student = jwt.verify(token, PRIVAT_KEY);
            let studentX = await Student.findById(student._id).select("-password");
            req.userData = studentX;
            req.role = "student";
            console.log("Authentication Successful");
            next();
        }catch(error){
            console.log("auth error", error, req.headers);
            res.status(401).json({msg: "authentication failed", error: error});
        }
    }
    else if(role === "BearerTeacher"){
        
        try{
            const token = req.headers["x-access-token"].split(" ")[1];
            let teacher = jwt.verify(token, PRIVAT_KEY);
            let teacherX = await Teacher.findById(teacher._id).select("-password");
            req.userData = teacherX;
            req.role = "teacher";
            console.log("Authentication Successful");
            next();
        }catch(error){
            console.log(req.headers);
            console.log("auth error", error);
            res.status(401).json({msg: "authentication failed", error: error});
        }
    }
    else{
        res.status(401).json({msg: "Invalid Request"});
    }
};

module.exports = {mid_auth};