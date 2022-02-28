const Pharmacy = require('../models/pharmacy');

module.exports = {
  create,
  getAll,
  getOne,
  update
}

async function create(req, res) {
  try {
    const d = req.body;
    const pharmacy = await Pharmacy.create({
      user: req.user,
      name: d.name,
      phoneNum: d.phoneNum,
      hours: d.hours,
      notes: d.notes
    });
    res.status(200).json({
      pharmacy: pharmacy
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

    const pharmacy = await Pharmacy.find({
      user: req.user._id
    });
    res.status(200).json({
      pharmacy: pharmacy
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
    const pharmacy = await Pharmacy.findById(req.params.id)
    res.status(200).json({
      provider: pharmacy
    });
  } catch (err) {
    console.log(err, "get one controller");
    res.status(400).json({
      err
    })
  }
}

async function update(req, res) {
  const pharm = req.body;
  try {
    Pharmacy.findById(req.params.id, function (err, pharmacy) {
      pharmacy.hours = pharm.hours,
      pharmacy.name = pharm.name,
      pharmacy.notes = pharm.notes,
      pharmacy.phoneNum = pharm.phoneNum,
      pharmacy.save();
      res.status(201).json({
        pharmacy
      })
    });
  } catch {
    res.status(400).json({
      err
    })
  }
}