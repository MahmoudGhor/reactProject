const mongoose = require("mongoose");

const ordreMachineSchema = mongoose.Schema({
  id_machine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'machine',
    required: true,
  },
  nb_heures: { type: Number, default: 0 },

});

module.exports = ordreMachineSchema;
