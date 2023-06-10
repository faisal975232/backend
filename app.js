const express = require("express");
const app = express();
const mongoose = require("mongoose");
const publicroutes = require("./routes/publicroutes");
const user = require("./models/user");
const db = require("./db/connect");
var cors = require("cors");
const validation = require("./validation/validation");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
db.connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user/", publicroutes);

app.listen(5000, console.log("App is Running"));
