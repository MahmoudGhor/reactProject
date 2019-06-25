const ordreProduction = require('../models/ordreProduction');
//hedha na9ess fil update wil create


exports.getByI =function (req, res, next) {

        ordeProductionsModel.findOne({_id: req.params.ordeProductionId}, function (err, ordeProductionInfo) {
            if (err) {
                return res.json(err);
            } else {
                return res.json({status: "success", message: "commande found!!!", data: {ordeProductions: ordeProductionInfo}});
            }
        });
    },
  exports.getAll =function (req, res, next) {
        ordeProductionsModel.find({}, function (err, ordeProductions) {
            if (err) {
                return res.json(err);
            } else {
                return res.json({status: "success", message: "ordeProductions list found!!!", data: {ordeProductions: ordeProductions}});
            }
        });
    },
  exports.updateById =function (req, res, next) {
        ordeProductionsModel.findByIdAndUpdate(req.params.ordeProductionsId, {
          id_stock: req.body.id_stock ,
          ordreMachine : req.body.ordreMachine ,
          dateSortie : req.body.dateSortie,
          sousTraitance: req.body.sousTraitance ,
          elementStandards: req.body.sousTraitance
        }, {new: true}, function (err, ordeProductionInfo) {
            if (err)
                next(err);
            else {
                res.json({status: "success", message: "commande updated successfully!!!", data: ordeProductionInfo});
            }
        });
    },
  exports.deleteById= function (req, res, next) {
        ordeProductionsModel.findByIdAndRemove(req.params.ordeProductionsId, function (err, ordeProductionInfo) {
            if (err)
                return res.json(err);
            else {
                return res.json({status: "success", message: "commande deleted successfully!!!", data: null});
            }
        });
    },
  exports.create=function (req, res, next) {
        ordeProductionsModel.create({
          id_stock: req.body.id_stock,
          ordreMachine: req.body.ordreMachine,
          sousTraitance: req.body.sousTraitance,
          elementStandards: req.body.elementStandards,

        }, function (err, result) {
            if (err)
                return res.json(err);
            else
                return res.json({status: "success", message: "commande added successfully!!!", data: null});

        });

}
