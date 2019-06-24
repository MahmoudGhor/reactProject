const machineModel = require('../models/machine');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  machineModel.findById(req.params.machineId, function(err, machineInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "machine found!!!", data:{machines: machineInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let machinesList = [];
machineModel.find({}, function(err, machines){
   if (err){
    next(err);
   } else{
    for (let machine of machines) {
     machinesList.push({id: machine._id, name: machine.name, reference: machine.reference,
        prix_par_hr:machine.prix_par_hr, nombre_hr_travail:machine.nombre_hr_travail, etat:machine.etat
  });
    }
    res.json({status:"success", message: "machines list found!!!", data:{machines: machinesList}});
       
   }
});
 },
updateById: function(req, res, next) {
  machineModel.findByIdAndUpdate(req.params.machineId,{name:req.body.name}, function(err, machineInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "machine updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  machineModel.findByIdAndRemove(req.params.machineId, function(err, machineInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "machine deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  machineModel.create({ name: req.body.name, reference: req.body.reference ,
    prix_par_hr:req.body.prix_par_hr, nombre_hr_travail:req.body.nombre_hr_travail,etat:req.body.etat}, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "machine added successfully!!!", data: null});
      
    });
 },
}