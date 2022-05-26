
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());
mongoose.connect("mongodb://localhost:27017/auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("connected to DB")
})


const auth = require("./routers/auth");
app.use("/", auth);

app.listen(5000,()=>{
    console.log("started")
})