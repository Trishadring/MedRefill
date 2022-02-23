const Doctor = require('../models/doctor');



module.exports = {
  create
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