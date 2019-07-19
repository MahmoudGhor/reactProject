const stockModel = require('../models/stock');
var nodemailer = require('nodemailer');

/////////// NODE MAILER SETUP START ////////////////

/////////// NODE MAILER SETUP ////////////////

exports.getById = (req, res, next) => {
  console.log(req.body);
  stockModel.findById(req.params.stockId, function (err, stockInfo) {
    if (err) {
      next(err);
    } else {
      res.json({status: "success", message: "stock found!!!", data: {stocks: stockInfo}});
    }
  });
};
exports.getAll = (req, res, next) => {
  stockModel.find({}, function (err, stocks) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "machines list found!!!", data: {stocks: stocks}});
    }
  });
};
exports.updateById = (req, res, next) => {
  stockModel.findByIdAndUpdate(req.params.stockId, {nomP: req.body.nomP}, function (err, stockInfo) {
    if (err)
      next(err);
    else {
      res.json({status: "success", message: "stock updated successfully!!!", data: null});
    }
  });
};
exports.deleteById = (req, res, next) => {
  stockModel.findByIdAndRemove(req.params.stockId, function (err, stockInfo) {
    if (err)
      next(err);
    else {
      stockModel.find({}, function (err, stocks) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "machines list found!!!", data: {stocks: stocks}});
        }
      });
    }
  });
};
exports.create = (req, res, next) => {
  stockModel.create({
    nomP: req.body.nomP,
    poids: req.body.poids,
    prix_par_kg: req.body.prix_par_kg,
    quantité: req.body.quantité,
    etat: req.body.etat
    },
    function(err, result) {
      if (err)
        next(err);
      else
        stockModel.find({}, function (err, stocks) {
          if (err) {
            return res.json(err);
          } else {
            return res.json({status: "success", message: "machines list found!!!", data: {stocks: stocks}});
          }
        });
     


})
};
