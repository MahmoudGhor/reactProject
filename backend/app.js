const path = require("path");
const express = require("express");
var db = require("./db/Db");
var cors = require("cors");

const userRoutes = require('./routes/user');
const clientRoutes = require('./routes/client');
const offrePrixRoutes = require('./routes/offreprix');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('secretKey', 'nodeRestApi');


app.use("/application/user",userRoutes);
app.use("/application/clients",clientRoutes);
app.use("/application/offrePrix",offrePrixRoutes);


module.exports = app;
