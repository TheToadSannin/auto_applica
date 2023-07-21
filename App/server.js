const express = require("express");
const cors = require("cors");
const mongoDB = require("./db");

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", function (req, res) {
  res.send("hello");
});


mongoDB();


app.use("/api", require("./routes/student.js"));
app.use("/api", require("./routes/register.js"));
app.use("/api", require("./routes/auth.js"));
app.use("/api", require("./routes/application.js"));

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
