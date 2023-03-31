const express = require('express');
const workflowController = require('../controllers/workflowController.js');

const router = express.Router();

router.get('/', workflowController.getWorkflows);

router.get('/:workflowName/:userId', workflowController.getWorkflowByName);

module.exports = router;
