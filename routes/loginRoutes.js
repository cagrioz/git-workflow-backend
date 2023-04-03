//import the library and the controller
const express = require('express');
const loginController = require('../controllers/loginController.js');

const router = express.Router();

//route the request to the corresponding function
router.post('', loginController.getUserId);

module.exports = router;
