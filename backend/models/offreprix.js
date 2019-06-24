const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
// var Number = require('mongoose-float').loadType(mongoose);

const offreprixSchema = new Schema({
    id_ordreProduction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ordreProduction',
    },
    id_devis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'devi',
    },
    prix_traitement: {
        type: Number,
        required: true,
    },
    prix_peinture: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('offreprix', offreprixSchema)
