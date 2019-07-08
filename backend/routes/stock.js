const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stocks');
router.get('/', stockController.getAll);
router.post('/', stockController.create);
router.get('/:stockId', stockController.getById);
router.put('/:stockId', stockController.updateById);
router.delete('/:stockId', stockController.deleteById);
module.exports = router;
