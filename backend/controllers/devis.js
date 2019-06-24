const deviModel = require('../models/devi');


exports.getById = function (req, res, next) {
  console.log(req.body);
  deviModel.findById(req.params.deviId, function (err, deviInfo) {
    if (err) {
      next(err);
    } else {
      res.json({status: "success", message: "devi found!!!", data: {devis: deviInfo}});
    }
  });
};
  exports.getAll = function (req, res, next) {
    let devisList = [];
    deviModel.find({}, function (err, devis) {
      if (err) {
        next(err);
      } else {
        for (let devi of devis) {
          devisList.push({
            id: devi._id, prix_taxé: devi.prix_taxé, droit_timbre: devi.droit_timbre, pourcentage: devi.pourctentage,
            prix_unitaire: devi.prix_unitaire, prix_totale: devi.prix_totale, date_sortie: devi.date_sortie
          });
        }
        res.json({status: "success", message: "devis list found!!!", data: {devis: devisList}});

      }
    });
  };
  exports.updateById = function (req, res, next) {
    deviModel.findByIdAndUpdate(req.params.deviId, {name: req.body.name}, function (err, deviInfo) {
      if (err)
        next(err);
      else {
        res.json({status: "success", message: "devi updated successfully!!!", data: null});
      }
    });
  };
  exports.deleteById = function (req, res, next) {
    deviModel.findByIdAndRemove(req.params.deviId, function (err, deviInfo) {
      if (err)
        next(err);
      else {
        res.json({status: "success", message: "devi deleted successfully!!!", data: null});
      }
    });
  };
  exports.create = function (req, res, next) {
    deviModel.create({
        id_offreprix: req.body.offreprixs,
        id_client: req.body.id_client,
        prix_taxée: req.body.prix_taxée,
        droit_timbre: req.body.droit_timbre,
        pourcentage: req.body.pourctentage,
        prix_unitaire: req.body.prix_unitaire,
        prix_totale: req.body.prix_totale,
        date_sortie: req.body.date_sortie,
      },
      function (err, result) {
        if (err)
          next(err);
        else
          res.json({status: "success", message: "devi added successfully!!!", data: null});

      });

  };
