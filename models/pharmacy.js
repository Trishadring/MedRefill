const mongoose = require('mongoose');

const PharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  notes: String,
  hours: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
})


module.exports = mongoose.model('Pharmacy', PharmacySchema);