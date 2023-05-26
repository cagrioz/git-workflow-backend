//import the library and the controller
const express = require('express');
const workflowController = require('../controllers/workflowController.js');

const router = express.Router();

//route the requests to the corresponding functions
router.get('/', workflowController.getWorkflows);
router.get('/course', workflowController.getWorkflowByName);
router.post('/', workflowController.saveWorkflowProgress);

module.exports = router;
