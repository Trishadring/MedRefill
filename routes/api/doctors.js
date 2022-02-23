const express = require('express');
const router = express.Router();
const doctorsCtrl = require('../../controllers/doctors');



router.post('/doctor', doctorsCtrl.create)

module.exports = router;