const Doctor = require('../models/doctor');



module.exports = {
  create,
  getAll
}

async function create(req, res) {
  console.log(req.body, 'req.body');
  try {
    const d = req.body;
    const doctor = await Doctor.create({
      user: req.user,
      name: d.name,
      phoneNum: d.phoneNum,
      hours: d.hours,
      notes: d.notes
    });
    res.status(201).json({ doctor: doctor })
  } catch (e) {
    console.log(e)
    res.status(400).json({ e })
  }

}

async function getAll(req, res) {

  try {
    const doctor = await Doctor.find({user: req.user._id});
    console.log(doctor, "doctor");
    res.status(200).json({ doctor: doctor });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err })
  }
}