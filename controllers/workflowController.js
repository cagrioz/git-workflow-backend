const { Workflow } = require('../models/Workflow.js');
const { Exercise } = require('../models/Exercise.js');

const db = require('../db.js');

const SQL = require('sql-template-strings');

const getWorkflows = (request, response) => {
    db.query('SELECT * FROM WORKFLOW ORDER BY workflow_id', (err, res) => {
        if (err) {
            response.status(200).json(err.message);
            return        }

        // Create an empty list for workflows
        let workflowList = [];

        // Get number of workflows
        let length = res.rows.length;

        for (let i = 0; i < length; i++) {
            // Create a new workflow object
            let newWorkflow = new Workflow(
                res.rows[i].workflow_id,
                res.rows[i].workflow_name,
                res.rows[i].workflow_description
            );

            workflowList.push(newWorkflow);
        }

        response.status(200).json(workflowList);
    });
};

const getWorkflowByName = (request, response) => {
    const wf_name = request.params.id;
    db.query(SQL`SELECT * FROM workflow_details WHERE workflow_name = ${wf_name}`, (error, results) =>
    {
        if (error)
        {
            response.status(200).json(error);
            return;
        }
        response.status(200).json(results.rows);
    }
    )
};

module.exports = { getWorkflows, getWorkflowByName };
