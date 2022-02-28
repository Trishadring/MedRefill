const Pharmacy = require('../models/pharmacy');

module.exports = {
  create,
  getAll,
  getOne
}

async function create(req, res) {
  console.log(req.body, 'req.body');
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
    console.log(pharmacy, "pharmacy");
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
    console.log(pharmacy, "pharmacy")
    console.log(req.params, "pharmacy")
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