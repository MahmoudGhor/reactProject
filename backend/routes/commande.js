const express = require('express');
const router = express.Router();
const commandeController = require('../app/api/controllers/commandes');

router.get('/', commandeController.getAll);
router.post('/', commandeController.create);

router.get('/:commandeId', commandeController.getById);
router.put('/:commandeId', commandeController.updateById);
router.delete('/:commandeId', commandeController.deleteById);

module.exports = router;