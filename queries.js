//import classes
const { UserInfo } = require('./model/UserInfo.js');
const { User, WorkflowCreator } = require('./model/User.js');
const { Exercise, WorkflowExercise } = require('./model/Exercise.js');
const { Workflow, SolvedWorkflow } = require('./model/Workflow.js');

//import libraries
const { Pool, Client } = require('pg');
const { rows } = require('pg/lib/defaults');

//define connection string
const connectionString = 'postgresql://gitworkflowteacherapp:123456789@localhost:5432/WorkflowTeacher';

//create connection pool
const pool = new Pool({
    connectionString: connectionString,
});

//method to create list of exercise objects
const getExercises = (request, response) => {
    pool.query('Select * from public."exercises"', (err, res) => {
        if (err) {
            throw Error;
        }
        //create an empty list for exercises
        let exerciseList = [];
        //get number of exercises
        let length = res.rows.length;
        for (i = 0; i < length; i++) {
            //create a new exercise object
            let newExercise = new Exercise(
                res.rows[i].exercise_id,
                res.rows[i].exercise_name,
                res.rows[i].description,
                res.rows[i].answer,
                res.rows[i].feedback
            );
            exerciseList.push(newExercise);
        }

        response.status(200).json(exerciseList);
    });
};

const getWorkflows = (request, response) => {
    pool.query('SELECT * FROM WORKFLOW ORDER BY workflow_id', (err, res) => {
        if (err) {
            throw Error;
        }

        // Create an empty list for workflows
        let workflowList = [];

        // Get number of workflows
        let length = res.rows.length;

        for (i = 0; i < length; i++) {
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

    pool.query('SELECT * FROM workflow_details WHERE workflow_id = $1', [id], (err, res) => {
        if (err) {
            console.log(err);
            throw Error;
        }

        wf_id = res.rows[0].workflow_id;
        wf_name = res.rows[0].workflow_name;
        wf_description = res.rows[0].workflow_description;

        //create workflow object
        let newWorkflow = new Workflow(wf_id, wf_name, wf_description);
        //get number of exercises
        let length = res.rows.length;
        for (i = 0; i < length; i++) {
            //create a new exercise object

            let newExercise = new Exercise(
                res.rows[i].exercise_id,
                res.rows[i].exercise_name,
                res.rows[i].description,
                res.rows[i].answer,
                res.rows[i].feedback
            );

            /*
            let newWorkflowExercise = new WorkflowExercise(
                res.rows[i].exercise_id,
                res.rows[i].description,
                res.rows[i].answer,
                res.rows[i].feedback,
                res.rows[i].workflow_id,
                res.rows[i].explanation,
                res.rows[i].order
            );
            */

            newWorkflow._exerciseList.push(newExercise);
        }
        response.status(200).json(newWorkflow);
    });
};

module.exports = { getExercises, getWorkflows, getWorkflowById };
