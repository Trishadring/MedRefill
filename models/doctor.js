const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
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
	}
})


module.exports = mongoose.model('Doctor', DoctorSchema);