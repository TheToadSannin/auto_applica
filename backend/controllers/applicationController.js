const ApplicationTemplate = require("../models/ApplicationTemplates");

const handleApplicationTemplate = async (req, res) => {
  try {
    await ApplicationTemplate.create({
      type: "migration_certificate",
      subject: "application to Migration Certificate",
      body: "<p> With due respect, I would like to state that I {name}, have been a student of this prestigious school. I have successfully passed {standard} from your school/college.</p> <br> \
       <p>Now, I need my migration certificate from you to continue my studies and to be admitted to the new school/college.Therefore, my humble request in your kind is, to issue me a migration certificate as soon as possible.</p> <br> \
       <p>I will be really grateful to you for this. <br>Thank you in advance. <br>\
       Yours Sincerely,</p>",
    });

    res.send("Okkk");
  } catch (error) {
    res.send("Not okk");
    console.log(error);
  }
};

module.exports = { handleApplicationTemplate };
