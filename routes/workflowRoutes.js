//import the library and the controller
const express = require('express');
const workflowController = require('../controllers/workflowController.js');
const { authenticateToken } = require('../middleware/authorization.js');

const router = express.Router();

//route the requests to the corresponding functions
router.get('/', authenticateToken, workflowController.getWorkflows);
router.get('/course', authenticateToken, workflowController.getWorkflowByName);
router.post('/', authenticateToken, workflowController.saveWorkflowProgress);

module.exports = router;
