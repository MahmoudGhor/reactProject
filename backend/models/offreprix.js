const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
// var Number = require('mongoose-float').loadType(mongoose);

const offreprixSchema = new Schema({
    id_machine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'machine',
        required: true,
    },
    id_client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
        required: true,
    },
    id_devis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'devi',
        required: true,
    },
    id_stock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stock',
        required: true,
    },
    prix_traitement: {
        type: Number,
        required: true,
    },
    prix_peinture: {
        type: Number,
        required: true,
    },
    //soutaitance
    
    prix_soutretence: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('offreprix', offreprixSchema)