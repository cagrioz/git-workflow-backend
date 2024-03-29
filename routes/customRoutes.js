//import the library and the controller
const express = require('express');
const customController = require('../controllers/customController.js');
const { authenticateToken } = require('../middleware/authorization.js');

const router = express.Router();
//route the request to the corresponding function
router.post('/', authenticateToken, customController.createWorkflow);

module.exports = router;
