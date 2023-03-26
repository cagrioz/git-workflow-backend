const express = require('express');
const exerciseController = require('../controllers/exerciseController.js');

const router = express.Router();

router.get('/', exerciseController.getExercises);

module.exports = router;
