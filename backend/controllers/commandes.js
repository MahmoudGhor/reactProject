const commandesModel = require('../models/ordreProduction');
//hedha na9ess fil update wil create
module.exports = {
    getById: function (req, res, next) {

        commandesModel.findOne({_id: req.params.commandeId}, function (err, commandeInfo) {
            if (err) {
                return res.json(err);
            } else {
                return res.json({status: "success", message: "commande found!!!", data: {commandes: commandeInfo}});
            }
        });
    },
    getAll: function (req, res, next) {
        commandesModel.find({}, function (err, commandes) {
            if (err) {
                return res.json(err);
            } else {
                return res.json({status: "success", message: "commandes list found!!!", data: {commandes: commandes}});
            }
        });
    },
    updateById: function (req, res, next) {
        commandesModel.findByIdAndUpdate(req.params.commandesId, {type: req.body.type}, {new: true}, function (err, commandeInfo) {
            if (err)
                next(err);
            else {
                res.json({status: "success", message: "commande updated successfully!!!", data: commandeInfo});
            }
        });
    },
    deleteById: function (req, res, next) {
        commandesModel.findByIdAndRemove(req.params.commandesId, function (err, commandeInfo) {
            if (err)
                return res.json(err);
            else {
                return res.json({status: "success", message: "commande deleted successfully!!!", data: null});
            }
        });
    },
    create: function (req, res, next) {
        commandesModel.create({
            type: req.body.type,
            date_saisie: req.body.date_saisie,
            date_prévue: req.body.date_prévue
        }, function (err, result) {
            if (err)
                return res.json(err);
            else
                return res.json({status: "success", message: "commande added successfully!!!", data: null});

        });
    },
}
