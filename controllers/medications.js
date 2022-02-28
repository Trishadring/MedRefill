const Medication = require('../models/medication');



module.exports = {
  create,
  index,
  getOne,
  updateFill,
  updateDoc,
  updateMed,
  updatePharmacy
}

function addDays(pills, numPerDay, result) {
  let PerDay = parseInt(numPerDay);
  let daysOfPills = pills / PerDay;
  let results = result.setDate(result.getDate() + daysOfPills);
  return results;
}

async function create(req, res) {
  const med = req.body;
  const today = new Date();
  const refillDate = addDays(med.numPillsLeft, numPerDay, today);
  console.log(refillDate, "refillDate")
  try {
    const medication = await Medication.create({
      medName: med.medName,
      medDose: med.dosage,
      medGenericName: med.genericName,
      numPerDay: parseInt(med.perDay),
      cost: parseInt(med.cost),
      refillDate: new Date(refillDate),
      qtyPerFill: parseInt(med.qtyPerFill),
      notes: med.notes,
      user: req.user
    });
    res.status(201).json({
      medication
    })
  } catch (e) {
    res.status(400).json({
      e
    })
  }
}

async function index(req, res) {

  try {
    const medication = await Medication.find({
      user: req.user._id
    });
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
  try {
    const medication = await Medication.findById(req.params.id).populate('doctor').populate('pharmacy')
    res.status(200).json({
      medication
    });
  } catch (err) {
    console.log(err, "get one controller");
    res.status(400).json({
      err
    })
  }
}

async function updateFill(req, res) {

  try {
    Medication.findById(req.params.id, function (err, medication) {
      console.log(medication)
      const dates = new Date(medication.refillDate);
      const refillDate = addDays(medication.qtyPerFill, medication.numPerDay, dates);
      medication.refillDate = new Date(refillDate)
      medication.save();
      res.status(200).json({
        err
      })
    });
  } catch {
    res.status(400).json({
      err
    })
  }
}

async function updateMed(req, res) {
  const med = req.body;
  console.log(med, "meds")
  const numPerDay = parseInt(med.numPerDay);
  const today = new Date();
  const refillDate = addDays(med.numPillsLeft, numPerDay, today);
  console.log(refillDate, "refillDate")
  try {
    Medication.findById(req.params.id, function (err, medication) {
      medication.medName = med.medName,
        medication.medDose = med.medDose,
        medication.medGenericName = med.medGenericName,
        medication.numPerDay = numPerDay,
        medication.refillDate = new Date(refillDate),
        medication.qtyPerFill = parseInt(med.qtyPerFill),
        medication.notes = med.notes,
        medication.user = req.user
      medication.save();
      res.status(201).json({
        medication
      })
    });
  } catch {
    res.status(400).json({
      err
    })
  }
}


async function updateDoc(req, res) {
  try {
    let medication = await Medication.findById(req.params.id)
    if (!medication) return "medication not found"
    medication.doctor = req.body.id
    medication.save();
    res.status(200).json({
      medication
    });
  } catch (err) {
    res.status(400).json({
      err
    })
  }
}


async function updatePharmacy(req, res) {
  try {
    let medication = await Medication.findById(req.params.id)
    if (!medication) return "medication not found"
    medication.pharmacy = req.body.id
    medication.save();
    res.status(200).json({
      medication
    });
  } catch (err) {
    console.log(err, "updatePharmacy controller");
    res.status(400).json({
      err
    })
  }
}