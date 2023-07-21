const ApplicationTemplate = require("../models/ApplicationTemplates");


const handleApplicationTemplate = async (req, res) => {
    try{
        await ApplicationTemplate.create({
            type: "going_out_leave",
            subject: "Leave for going out of station",
            body: "<p>With due respect, it is stated that My whole family is going to visit {Place}. I am going to visit with her.</p>\
            <p>Due to this, I will not be able to come to school for {time} days. For this, please give me three days’ leave.</p>\
            <p>Yours Obediently,</p>"
        })


        res.send("Okkk");
    }catch(error){
        res.send("Not okk");
        console.log(error)
    }
}

module.exports = {handleApplicationTemplate}