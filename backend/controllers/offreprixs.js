const offreprixsModel = require('../models/offreprix');
const clientModel = require('../models/client');
const ordreProduction = require('../models/ordreProduction');
const stockModel = require('../models/stock');
exports.getById = function (req, res, next) {
  console.log(req.params.id);
  offreprixsModel.findById(req.params.id, function (err, offreprixInfo) {
    console.log(offreprixInfo);
    if (err) {
      next(err);
    } else {
      clientModel.findById(offreprixInfo.id_client, function (err, clientInfo) {
        if (err) {
          next(err);
        } else {
          ordreProduction.findById(offreprixInfo.id_ordreProduction, function (err, ordreInfo) {
            if (err) {
              next(err);
            } else {
              stockModel.findById(ordreInfo.id_stock, function (err, stockInfo) {
                if (err) {
                  next(err);
                } else {
                  res.json({
                    status: "success",
                    message: "offreprix found!!!",
                    data: {offreprixs: offreprixInfo, client: clientInfo, ordre: ordreInfo , stock : stockInfo}
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
exports.getAll = function (req, res, next) {
  offreprixsModel.find({}, function (err, offres) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "offre list found!!!", data: {offreprixs: offres}});
    }
  });
};
exports.updateById = function (req, res, next) {
  offreprixsModel.findByIdAndUpdate(req.params.offreprixsId, {type: req.body.type}, function (err, offreprixInfo) {
    if (err)
      next(err);
    else {
      res.json({status: "success", message: "offreprix updated successfully!!!", data: null});
    }
  });
};

exports.deleteById = function (req, res, next) {
  offreprixsModel.findByIdAndRemove(req.params.offreprixsId, function (err, offreprixInfo) {
    if (err)
      next(err);
    else {
      res.json({status: "success", message: "offreprix deleted successfully!!!", data: null});
    }
  });
};
exports.create = function (req, res, next) {
  offreprixsModel.create({
    id_ordreProduction: req.body.id_ordreProduction, id_client: req.body.id_client,
    prix_peinture: req.body.prix_peinture, prix_traitement: req.body.prix_traitement,
  }, function (err, result) {
    if (err)
      next(err);
    else
      offreprixsModel.find({}, function (err, offres) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "offre list found!!!", data: {offreprixs: offres}});

        }
      });

  });
};
