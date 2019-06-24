const clientModel = require('../models/client');

exports.getById = (req, res, next) => {
  console.log('req.params = = ', req.params);
  clientModel.findOne({_id: req.params.clientId}, function (err, clientInfo) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "client found!!!", data: {clients: clientInfo}});
    }
  });
};

exports.getAll = function (req, res, next) {
  clientModel.find({}, function (err, clients) {
    if (err) {
      return res.json(err);
    } else {
      return res.json({status: "success", message: "clients list found!!!", data: {clients: clients}});

    }
  });
};
exports.updateById = function (req, res, next) {
  clientModel.findByIdAndUpdate(req.params.clientId, {name: req.body.name}, {new: true}, function (err, clientInfo) {
    if (err)
      return res.json(err);
    else {
      return res.json({status: "success", message: "client updated successfully!!!", data: clientInfo});
    }
  });
};
exports.deleteById = function (req, res, next) {
  clientModel.findByIdAndRemove(req.params.clientId, function (err, clientInfo) {
    if (err)
      return res.json(err);
    else {
      return res.json({status: "success", message: "client deleted successfully!!!", data: clientInfo});
    }
  });
};
exports.create = function (req, res, next) {
  clientModel.create({
    name: req.body.name,
    lastname: req.body.lastname,
    adresseEmail: req.body.adresseEmail,
    numero_de_telephone: req.body.numero_de_telephone,
    fax: req.body.fax,
    adresse: req.body.adresse,
    date_de_naissance: req.body.date_de_naissance
  }, function (err, result) {
    if (err)
      return res.json(err);
    else
      return res.json({status: "success", message: "client added successfully!!!", data: result});

  });

};
