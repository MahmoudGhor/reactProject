const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');

router.get('/', clientController.getAll);
router.post('/', clientController.create);

router.get('/:clientId', clientController.getById);
router.put('/:clientId', clientController.updateById);
router.delete('/:clientId', clientController.deleteById);

module.exports = router;
