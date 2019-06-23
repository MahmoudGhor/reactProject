const mongoose = require("mongoose");
const User = require("../models/users");


exports.createUser = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    Last_Name: req.body.lastname,
    password: req.body.password
  });
  user
    .save()
    .then(result => {
      console.log("ok");
      res.status(201).json({
        message: "User created!",
        result: result
      });
    })

    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
