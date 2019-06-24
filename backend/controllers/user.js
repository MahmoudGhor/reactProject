const mongoose = require("mongoose");
const User = require("../models/users");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


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
exports.authenticate = (req, res, next) => {
  User.findOne({email: req.body.email}, function (err, userInfo) {
    console.log(userInfo)
    if (err) {
      return res.json(err);
    } else {
      if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '24h'});
        return res.json({status: "success", message: "user found!!!", data: {user: userInfo, token: token}});
      } else {
        return res.json({status: "error", message: "Invalid email/password!!!", data: null});
      }
    }
  });
};
