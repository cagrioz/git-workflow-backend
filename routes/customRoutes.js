const express = require('express');
const customController = require('../controllers/customController.js');

const router = express.Router();

router.post('', customController.createWorkflow);

module.exports = router;
