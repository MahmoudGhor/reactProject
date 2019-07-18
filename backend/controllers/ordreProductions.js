const ordreProduction = require('../models/ordreProduction');
const OrdreMachine = require('../models/ordreMachine');
const machineModel = require('../models/machine');
const mongoose = require('mongoose');
//hedha na9ess fil update wil create

exports.create = (req, res, next) => {
  const ordreMachines = mongoose.model("OrdreMachine", OrdreMachine);
  console.log(req.body.machines);
  ordreProduction.create({
    id_stock: req.body.stock.id,
    poids: req.body.stock.poids,
    dateEntree: req.body.piece.dateEntree,
    dateSortie: req.body.piece.dateSortie,
    sousTraitance: req.body.piece.sousTraitance,
    elementStandards: req.body.piece.elementStandards,
    ordreMachine: req.body.machines
  }, function (err, result) {
    if (err)
      next(err);
    else{
      for(const machine in req.body.machines){
        console.log(machine);
        machineModel.findByIdAndUpdate(machine.id_machine, {nombre_hr_travail: {$inc:machine.nb_heures}}, function (err, machineInfo) {
        });
      }
      return res.json({status: "success", message: "enregistra"});
    }

  });
}


