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
      User.find({}, function (err, users) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "clients list found!!!", data: {users: users}});

        }
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
  let fetchedUser;
  User.findOne({email: req.body.email}).then(user => {
    fetchedUser = user;
    return bcrypt.compareSync(req.body.password, fetchedUser.password)
  }).then(result => {
    console.log(result);
    if (!result) {
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    const token = jwt.sign({
      email: fetchedUser.email,
      userId: fetchedUser._id,
      name: fetchedUser.name,
      lastname: fetchedUser.Last_Name,
      permissionLevel: fetchedUser.permissionLevel,
    }, req.app.get('secretKey'), {expiresIn: '24h'});
    return res.status(200).json({
      success: true,
      token: "Bearer " + token
    });


  })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });


};

exports.getProfileForConnectedUser = (req, res, next) => {
  User.findOne({_id: req.userData.userId})
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "user not found"
        });
      }
      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(401).json({
        message: "Fetching profile failed!"
      });
    });
};


exports.getAllUsers = (req, res, next) => {
  User.find({}, function (err, users) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "clients list found!!!", data: {users: users}});

    }
  });
};


exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err)
      return res.json(err);
    else {
      User.find({}, function (err, users) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "clients list found!!!", data: {users: users}});

        }
      });
    }
  });
};


exports.updateById = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {name: req.body.name , email : req.body.email , Last_Name : req.body.lastname}, {new: true}, function (err, clientInfo) {
    if (err)
      return res.json(err);
    else {
      User.find({}, function (err, users) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "clients list found!!!", data: {users: users}});

        }
      });
    }
  });
}
