const express = require('express');
const router = express.Router();
const medicationCtrl = require('../../controllers/medications');



router.post('/', medicationCtrl.create)
router.get('/', medicationCtrl.index)

module.exports = router;