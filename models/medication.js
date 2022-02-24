const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
  medName: {
    type: String,
    required: true
  },
  medDose: {
    type: String,
    required: true
  },
  medGenericName: String,
  numOfPillsLeft: {
    type: Number,
    required: true
  },
  refillNumber: Number,
  numPerDay: {
    type: Number,
    required: true
  },
  cost: Number,
  refillDate: {
    type: Date,
    required: true
  },
  qtyPerFill: {
    type: Number,
    required: true
  },

  notes: String,
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pharmacy'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})


module.exports = mongoose.model('Medication', MedicationSchema);