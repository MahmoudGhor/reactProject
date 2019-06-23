const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
// var Number = require('mongoose-float').loadType(mongoose);

const deviSchema = new Schema({
    id_offreprix: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offreprix',
        required: true,
    },
    id_client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
        required: true,
    },
    id_commande: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commande',
        required: true,
    },
    prix_taxé: {
        type: Number,
        required: true,
    },
    droit_timbre: {
        type: Number,
        required: true,
    },
    pourcentage: {
        type: Number,
        required: true,
    },
    prix_unitaire: {
        type: Number,
        required: true,
    },
    prix_totale: {
        type: Number,
        required: true,
    },
    date_sortie: {
        type: Date,
        default: Date.now(),
       required: true
    },
});
module.exports = mongoose.model('devi', deviSchema)