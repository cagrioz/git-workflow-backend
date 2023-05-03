//import the library and the controller
const express = require('express');
const exerciseController = require('../controllers/exerciseController.js');
const { authenticateToken } = require('../middleware/authorization.js');

const router = express.Router();

//route the request to the corresponding function
router.get('/', authenticateToken, exerciseController.getExercises);

module.exports = router;
