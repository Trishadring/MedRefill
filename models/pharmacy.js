const mongoose = require('mongoose');

const PharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  notes: String,
  hours: {
    type: String,
  }
})


module.exports = mongoose.model('Pharmacy', PharmacySchema);