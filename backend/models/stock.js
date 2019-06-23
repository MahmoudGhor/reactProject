const mongoose = require('mongoose');
// require('mongoose-type-email');
//Define a schema
const Schema = mongoose.Schema;


const stockSchema = new Schema({
    nomP: {
        type: String,
        trim: true,
        required: true,
    },
    quantité: {
        type: Number,
        required: true
    },
    poids: {
        type: Number,
        required: true
    },
    prix_par_kg: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('stock', stockSchema)