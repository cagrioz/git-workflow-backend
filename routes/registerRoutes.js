const express = require('express');
const registerController = require('../controllers/registerController.js');

const router = express.Router();

router.get('/:username/:email/:password/:lastnaem/:firstname', registerController.registerUser);

module.exports = router;