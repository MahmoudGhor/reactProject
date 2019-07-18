const machineModel = require('../models/machine');

exports.getById = (req, res, next) => {
  console.log(req.body);
  machineModel.findById(req.params.machineId, function (err, machineInfo) {
    if (err) {
      next(err);
    } else {
      res.json({status: "success", message: "machine found!!!", data: {machines: machineInfo}});
    }
  });
};


exports.getAll = (req, res, next) => {
  machineModel.find({}, function (err, machines) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "machines list found!!!", data: {machines: machines}});

    }
  });
};

exports.getAllFunctionMachine = (req, res, next) => {
  machineModel.find({'etat':{$eq:true}}, function (err, machines) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "machines list found!!!", data: {machines: machines}});

    }
  });
};


exports.updateById =(req, res, next) => {
  machineModel.findByIdAndUpdate(req.params.machineId, {name: req.body.name , reference: req.body.reference,
    prix_par_hr: req.body.prix_par_hr, nombre_hr_travail: req.body.nombre_hr_travail, etat: req.body.etat}, function (err, machineInfo) {
    if (err)
      next(err);
    else {
      machineModel.find({}, function (err, machines) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "machines list found!!!", data: {machines: machines}});

        }
      });
    }
  });
};



exports.deleteById = (req, res, next) => {
  machineModel.findByIdAndRemove(req.params.machineId, function (err, machineInfo) {
    if (err)
      next(err);
    else {
      machineModel.find({}, function (err, machines) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "machines list found!!!", data: {machines: machines}});

        }
      });
    }
  });
};


exports.create =  (req, res, next)  => {
  machineModel.create({
    name: req.body.name, reference: req.body.reference,
    prix_par_hr: req.body.prix_par_hr, nombre_hr_travail: req.body.nombre_hr_travail, etat: req.body.etat
  }, function (err, result) {
    if (err)
      next(err);
    else
      machineModel.find({}, function (err, machines) {
        if (err) {
          return res.json(err);
        } else {
          return res.json({status: "success", message: "machines list found!!!", data: {machines: machines}});

        }
      });

  });
}
