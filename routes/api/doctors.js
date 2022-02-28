const express = require('express');
const router = express.Router();
const doctorsCtrl = require('../../controllers/doctors');



router.post('/', doctorsCtrl.create)
router.get('/', doctorsCtrl.getAll)
router.get('/:id', doctorsCtrl.getOne)

module.exports = router;