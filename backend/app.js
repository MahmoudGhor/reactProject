const path = require("path");
const express = require("express");
var db = require("./db/Db");

const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/application/user",userRoutes);

module.exports = app;
