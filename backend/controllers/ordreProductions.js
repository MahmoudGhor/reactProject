const ordreProduction = require('../models/ordreProduction');
const OrdreMachine = require('../models/ordreMachine');
const machineModel = require('../models/machine');
const mongoose = require('mongoose');
//hedha na9ess fil update wil create

exports.create = (req, res, next) => {
  const ordreMachines = mongoose.model("OrdreMachine", OrdreMachine);
  console.log(req.body.machines);
  ordreProduction.create({
    id_stock: req.body.stock.id_stock,
    poids: req.body.stock.poids,
    dateEntree: req.body.piece.dateEntree,
    dateSortie: req.body.piece.dateSortie,
    sousTraitance: req.body.piece.sousTraitance,
    elementStandards: req.body.piece.elementStandards,
    ordreMachine: req.body.machines,
    name:req.body.piece.name,
  }, async function (err, result) {
    if (err)
      next(err);
    else {
      await updateNombreMachine(req.body.machines);
      return res.json({status: "success", message: "enregistra"});
    }

  });
};


exports.getAll = function (req, res, next) {
  ordreProduction.find({}, function (err, ordres) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "clients list found!!!", data: {ordre: ordres}});

    }
  });
};



async function updateNombreMachine(listeMachine) {
  return new Promise(resolve => {
    for(let i=0 ; i<listeMachine.length ; i++){
      machineModel.findByIdAndUpdate(listeMachine[i].id_machine, {$inc: {nombre_hr_travail:listeMachine[i].nb_heures}}, function (err, machineInfo) {
      });
    }
    return resolve();
  });
}


