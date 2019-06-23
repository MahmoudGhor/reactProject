const mongoose = require('mongoose');
// const email = require('mongoose-type-email');
//Define a schema
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    adresseEmail: {
        type: String,
        required: true,
    },
    numero_de_telephone: {
        type: String,
        trim: true,
        required: true,
    },
    fax: {
        type: String,
        trim: true,
        required: false,
    },
    adresse: {
        type: String,
        trim: true,
        required: true,
    },
    date_de_naissance: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('client', clientSchema)