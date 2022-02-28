const express = require('express');
const router = express.Router();
const pharmaciesCtrl = require('../../controllers/pharmacies');



router.post('/', pharmaciesCtrl.create)
router.get('/', pharmaciesCtrl.getAll)
router.get('/:id', pharmaciesCtrl.getOne)
router.put('/:id/update', pharmaciesCtrl.update)

module.exports = router;