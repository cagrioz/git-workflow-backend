const { Workflow } = require('../model/Workflow.js');
const { Exercise } = require('../model/Exercise.js');

const db = require('../db.js');

const getWorkflows = (request, response) => {
    db.query('SELECT * FROM WORKFLOW ORDER BY workflow_id', (err, res) => {
        if (err) {
            throw Error;
        }

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

const getWorkflowById = (request, response) => {
    const id = request.params.id;

    db.query(
        'SELECT * FROM workflow_details WHERE workflow_id = $1',
        [id],
        (err, res) => {
            if (err) {
                console.log(err);
                throw Error;
            }

            let wf_id = res.rows[0].workflow_id;
            let wf_name = res.rows[0].workflow_name;
            let wf_description = res.rows[0].workflow_description;

            //create workflow object
            let newWorkflow = new Workflow(wf_id, wf_name, wf_description);
            //get number of exercises
            let length = res.rows.length;
            for (let i = 0; i < length; i++) {
                let newExercise = new Exercise(
                    res.rows[i].exercise_id,
                    res.rows[i].exercise_name,
                    res.rows[i].description,
                    res.rows[i].answer,
                    res.rows[i].feedback
                );

                newWorkflow._exerciseList.push(newExercise);
            }
            response.status(200).json(newWorkflow);
        }
    );
};

module.exports = { getWorkflows, getWorkflowById };
