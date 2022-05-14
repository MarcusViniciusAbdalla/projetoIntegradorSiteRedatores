const express = require('express');
const router = express.Router();

const RedatoresController = require('../controllers/RedatoresController');

router.get('/', RedatoresController.index);

module.exports = router;