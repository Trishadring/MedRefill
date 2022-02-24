const Doctor = require('../models/doctor');



module.exports = {
  create,
  getAll
}

async function create(req, res) {
  console.log(req.body, 'req.body');
  // let form = req.body;
  // console.log(form);
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({doctor:doctor})
  }
  catch(e){
    res.status(400).json({e})
  }

}

async function getAll(req, res) {
  // console.log('got to line 41 controller')

  try {
    // this populates the user when you find the posts
    // so you'll have access to the users information
    // when you fetch teh posts

    const doctor = await Doctor.find({});
    console.log(doctor, "doctor");
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