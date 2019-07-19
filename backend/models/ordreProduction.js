const mongoose = require('mongoose');
const OrdreMachine = require ('./ordreMachine');
// require('mongoose-type-email');
//Define a schema
const Schema = mongoose.Schema;
// var Float = require('mongoose-float').loadType(mongoose);

const ordreProductionSchema = new Schema({
  id_stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'stock',
  },
  poids: {
    type: String,
    trim: true
  },
  ordreMachine: [OrdreMachine],
  name: {
    type: String,
    trim: true
  },
  dateEntree: {
    type: String,
    trim: true
  },
  dateSortie: {
    type: String,
    trim: true
  },
  sousTraitance: {
    type: String,
    trim: true,
    required: true,
  },
  elementStandards: {
    type: String,
    trim: true,
    required: true,
  },


});
module.exports = mongoose.model('ordreProduction', ordreProductionSchema)
