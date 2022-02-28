const express = require('express');
const router = express.Router();
const medicationCtrl = require('../../controllers/medications');



router.post('/', medicationCtrl.create)
router.get('/', medicationCtrl.index)
router.get('/:id', medicationCtrl.getOne)
router.put('/:id/updateFill', medicationCtrl.updateFill)
router.put('/:id/updateMed', medicationCtrl.updateMed)
router.put('/:id/updateDoc', medicationCtrl.updateDoc)
router.put('/:id/updatePharmacy', medicationCtrl.updatePharmacy)


module.exports = router;