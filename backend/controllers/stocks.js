const stockModel = require('../models/stock');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  stockModel.findById(req.params.stockId, function(err, stockInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "stock found!!!", data:{stocks: stockInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let stocksList = [];
stockModel.find({}, function(err, stocks){
   if (err){
    next(err);
   } else{
    for (let stock of stocks) {
     stocksList.push({id: stock._id, nomP: stock.nomP, poids: stock.poids, prix_par_kg: stock.prix_par_kg ,
      quantité : stock.quantité , etat:stock.etat});
    }
    res.json({status:"success", message: "stocks list found!!!", data:{stocks: stocksList}});
       
   }
});
 },
updateById: function(req, res, next) {
  stockModel.findByIdAndUpdate(req.params.stockId,{nomP:req.body.nomP}, function(err, stockInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "stock updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  stockModel.findByIdAndRemove(req.params.stockId, function(err, stockInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "stock deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  stockModel.create({ nomP: req.body.nomP, poids: req.body.poids, prix_par_kg: req.body.prix_par_kg ,quantité:req.body.quantité, etat:req.body.etat, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "stock added successfully!!!", data: null});
      
    });
 },
}