const express = require('express');
const router = express.Router();
const deviController = require('../app/api/controllers/devis');
router.get('/', deviController.getAll);
router.post('/', deviController.create);
router.get('/:deviId', deviController.getById);
router.put('/:deviId', deviController.updateById);
router.delete('/:deviId', deviController.deleteById);
module.exports = router;