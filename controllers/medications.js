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
  try {
    const medication = await Medication.create({
      medName: med.medName,
      medDose: med.dosage,
      medGenericName: med.genericName,
      numPerDay: parseInt(med.perDay),
      cost: parseInt(med.cost),
      refillDate: new Date(med.lastFilled),
      qtyPerFill: parseInt(med.qtyPerFill),
      notes: med.notes,
      user: req.user
    });
    // medication = await medication.populate('user')
    console.log(medication, "meds");
    res.status(201).json({
      medication
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      e
    })
  }
}

async function index(req, res) {
  console.log(req.user, "user")

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
  console.log('get one got to controller')
  // console.log(req.params.id, "request")
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
    console.log(err, "get one controller");
    res.status(400).json({
      err
    })
  }
}

async function updateFill(req, res) {
  console.log(req.params.id, "params")
  try {
    Medication.findById(req.params.id, function (err, medication) {
      medication.refillDate = new Date(req.body.lastFilled)
      console.log(medication)
      medication.save(function (err) {
        console.log(medication, "medication saved?");
      });
    });
  } catch {
    console.log(err, "updateFill controller");
    res.status(400).json({
      err
    })
  }

  console.log(req.body, 'req.body');

}

async function updateDoc(req, res) {
  console.log(req.params.id, "params")
  try {
    Medication.findById(req.params.id, function (err, medication) {
      medication.refillDate = new Date(req.body.lastFilled)
      console.log(medication)
      medication.save(function (err) {
        console.log(medication, "medication saved?");
      });
    });
  } catch {
    console.log(err, "updateFill controller");
    res.status(400).json({
      err
    })
  }

  console.log(req.body, 'req.body');

}