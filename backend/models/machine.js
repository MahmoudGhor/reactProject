const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;

const machineSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    reference: {
        type: Number,
        required: true,
    },
    prix_par_hr: {
        type: Number,
        required: true,
    },
    nombre_hr_travail: {
        type: Number,
        required: true,
    },
    etat: {
        type: Boolean,
        default: true,
        required: true
    },

});
module.exports = mongoose.model('machine', machineSchema)