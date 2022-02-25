const Medication = require('../models/medication');



module.exports = {
  create,
  index,
  getOne,
  updateFill,
  updateDoc
}

async function create(req, res) {
  const med = req.body;

  const numPerDay = parseInt(med.perDay);
  console.log(numPerDay, "num per day")
  const pills = med.numPillsLeft;
  console.log(pills, "pills left")

  function addDays(pills) {
    let days = pills * numPerDay;
    var result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }
  const refillDate = addDays(pills);
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

    const medication = await Medication.findById(req.params.id).populate('doctor')
    res.status(200).json({
      medication: medication
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
      function addDays() {
        let days = medication.qtyPerFill / medication.numPerDay;
        console.log(days, "days")
        var result = new Date(medication.refillDate);
        result.setDate(result.getDate() + days);
        console.log(result, "new date")
        return result;
      }
      const refillDate = addDays();
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

// async function updateDoc(req, res) {
//   console.log(req.params.id, "params")
//   try {
//     console.log(req.body, "bodddyd")
//     Medication.findById(req.params.id, function (err, medication) {
//       medication.doctor = req.body._id
//       console.log(medication)
//       medication.save(function (err) {
//         console.log(medication, "medication saved?");
//       });
//     });
//   } catch {
//     console.log(err, "updateDoc controller");
//     res.status(400).json({
//       err
//     })
//   }
// }