const express = require('express');
const cors = require('cors');
const mongoDB = require('./db');


const app = express();

app.use(cors());

app.use(express.json());
app.get('/', function(req, res){
    res.send("hello");
});


mongoDB();

app.use("/api", require('./Routes/student.js'));


app.listen(5000, ()=>{
    console.log("server is running at port 5000");
});