const express = require('express');
const registerController = require('../controllers/registerController.js');

const router = express.Router();

router.get('/:username/:email/:password/:firstname/:lastname', registerController.registerUser);

module.exports = router;