const offreprixsModel = require('../models/offreprix');
exports.getById = function (req, res, next) {
  console.log(req.body);
  offreprixsModel.findById(req.params.offreprixsId, function (err, offreprixInfo) {
    if (err) {
      next(err);
    } else {
      res.json({status: "success", message: "offreprix found!!!", data: {offreprixs: offreprixInfo}});
    }
  });
};
exports.getAll = function (req, res, next) {
  let offreprixsList = [];
  offreprixsModel.find({}, function (err, offreprixs) {
    if (err) {
      next(err);
    } else {
      for (let offreprix of offreprixs) {
        offreprixsList.push({
          id: offreprix._id, prix_traitement: offreprix.prix_traitement, prix_peinture: offreprix.prix_peinture,
          prix_peinture: offreprix.prix_peinture, date: offreprix.date

        });
      }
      res.json({status: "success", message: "offreprixs list found!!!", data: {offreprixs: offreprixsList}});

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
    type: req.body.type, prix_peinture: req.body.prix_peinture, prix_peinture: req.body.prix_peinture,
  }, function (err, result) {
    if (err)
      next(err);
    else
      res.json({status: "success", message: "offreprix added successfully!!!", data: null});

  });
};
