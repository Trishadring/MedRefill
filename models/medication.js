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
	numOfPills: Number,
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
	pillsLeft: {
		type: Number,
	},
	notes: String,
	doctor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Doctor'
	},
	pharmacy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pharmacy'
	}
})


module.exports = mongoose.model('Medication', MedicationSchema);