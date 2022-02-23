const Medication = require('../models/medication');



module.exports = {
	create,
	index,
	getOne
}

async function create(req, res) {
	console.log(req.body, 'req.body');
	const med = req.body;
	try {
		const parsed = {
			medName: med.medName,
			medDose: med.dosage,
			medGenericName: med.genericName,
			// numOfPills#
			// refillNumber#
			numPerDay: parseInt(med.perDay),
			cost: parseInt(med.cost),
			refillDate: new Date(med.lastFilled),
			qtyPerFill: parseInt(med.qtyPerFill),
			notes: med.notes,
			user: med.user,
		}
		console.log(parsed, "parsed data");
		const medication = await Medication.create(parsed);
		console.log(medication, "meds");

		res.status(201).json({
			medication: medication
		})
	} catch (e) {
		res.status(400).json({
			e
		})
	}
}

async function index(req, res) {
	// console.log('got to line 41 controller')

	try {
		// this populates the user when you find the posts
		// so you'll have access to the users information
		// when you fetch teh posts

		const medication = await Medication.find({});
		console.log(medication, "meds");
		res.status(200).json({
			medication: medication
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
			err
		})
	}
}

async function getOne(req, res) {
	// console.log('got to line 41 controller')
	console.log(req.params.id, "request")
	try {
		// this populates the user when you find the posts
		// so you'll have access to the users information
		// when you fetch teh posts

		const medication = await Medication.findById(req.params.id)
		console.log(medication, "one med");
		res.status(200).json({
			medication: medication
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
			err
		})
	}
}