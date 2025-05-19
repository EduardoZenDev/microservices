const express = require('express');
const router = express.Router();
const ineController = require('../controllers/ine.controller');

router.post('/guardar', ineController.guardarDatosINE);
module.exports = router;
