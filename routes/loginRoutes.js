const express = require('express');
const loginController = require('../controllers/loginController.js');

const router = express.Router();

router.get('/:username/:password', loginController.getUserId);

module.exports = router;