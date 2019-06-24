const express = require('express');
const router = express.Router();
const machineController = require('../app/api/controllers/machines');
router.get('/', machineController.getAll);
router.post('/', machineController.create);
router.get('/:machineId', machineController.getById);
router.put('/:machineId', machineController.updateById);
router.delete('/:machineId', machineController.deleteById);
module.exports = router;