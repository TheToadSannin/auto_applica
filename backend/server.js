const express = require("express");
const cors = require("cors");
const mongoDB = require("./db");

const app = express();

app.use(cors());

app.use(express.json());

mongoDB();

app.use("/api", require("./routes/register.js"));
app.use("/api", require("./routes/auth.js"));
app.use("/api", require("./routes/application.js"));

const path = require("path");
app.use(express.static(path.join(__dirname + "/public")));

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
