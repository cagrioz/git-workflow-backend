//import the library and the controller
const express = require('express');
const registerController = require('../controllers/registerController.js');

const router = express.Router();

//route the request to the corresponding function
router.post('', registerController.registerUser);

module.exports = router;
