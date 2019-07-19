const express = require('express');
const router = express.Router();
const offreprixController = require('../controllers/offreprixs');
router.get('/', offreprixController.getAll);
router.post('/', offreprixController.create);
router.get('/getbyid/:id', offreprixController.getById);
router.put('/:offreprixId', offreprixController.updateById);
router.delete('/:offreprixId', offreprixController.deleteById);
module.exports = router;
