const Doctor = require('../models/doctor');



module.exports = {
  create,
  getAll,
  getOne,
  update,
  deleteProvider
}

async function create(req, res) {
  try {
    const d = req.body;
    const doctor = await Doctor.create({
      user: req.user,
      name: d.name,
      phoneNum: d.phoneNum,
      hours: d.hours,
      notes: d.notes
    });
    res.status(201).json({
      doctor: doctor
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({
      e
    })
  }

}

async function getAll(req, res) {

  try {
    const doctor = await Doctor.find({
      user: req.user._id
    });
    res.status(200).json({
      doctor: doctor
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
    const doctor = await Doctor.findById(req.params.id)
    res.status(200).json({
      provider: doctor
    });
  } catch (err) {
    console.log(err, "get one controller");
    res.status(400).json({
      err
    })
  }
}

async function update(req, res) {
  const doc = req.body;
  try {
    const doctor = await Doctor.findById(req.params.id);
    doctor.hours = doc.hours,
      doctor.name = doc.name,
      doctor.notes = doc.notes,
      doctor.phoneNum = doc.phoneNum,
      doctor.save();

    res.status(201).json({
      doctor
    });

  } catch (err) {
    res.status(400).json({
      err
    })
  }
}

async function deleteProvider(req, res) {
  try {
    await Doctor.deleteOne({
      _id: req.params.id
    });
    res.status(200).json({});
  } catch (err) {
    console.log(err, "get one controller");
    res.status(400).json({
      err
    })
  }
}