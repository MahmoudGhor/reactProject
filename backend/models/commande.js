const mongoose = require('mongoose');
// require('mongoose-type-email');
//Define a schema
const Schema = mongoose.Schema;
// var Float = require('mongoose-float').loadType(mongoose);

const commandeSchema = new Schema({
    id_offreprix: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offreprix',
    },
    id_client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
        required: true,
    },
    id_devi: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'devi',
        required: true,
    },
    nuance: {
        type: String,
        trim: true,
        required: true,
    },
    date_saisie: {
        type: Date,
        default: Date.now()
    },
    date_prévue: {
        type: Date,
        trim: true,
        required: true,
    },
    prix_unitaire: {
        type: Number,
        trim: true,
        required: true,
    },
    prix_totale: {
        type: Number,
        trim: true,
        required: true,
    },


});
module.exports = mongoose.model('commande', commandeSchema)