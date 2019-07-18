const express = require('express');
const router = express.Router();
const ordeProductions = require('../controllers/ordreProductions');
router.post('/', ordeProductions.create);
module.exports = router;
