//import classes
const { UserInfo } = require("./model/UserInfo.js");
const { User, WorkflowCreator } = require("./model/User.js");
const { Exercise, WorkflowExercise } = require("./model/Exercise.js");
const { Workflow, SolvedWorkflow } = require("./model/Workflow.js");

//import libraries
const { Pool, Client } = require("pg");
const { rows } = require("pg/lib/defaults");

//define connection string
const connectionString = "postgresql://gitworkflowteacherapp:123456789@localhost:5433/WorkflowTeacher";

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

const getWorkflowById = (request,respons) =>
{
    const id = request.params.id
    pool.query("SELECT * FROM workflow_details WHERE workflow_name = $1", [id], (err,res) => {
        if (err) {
            throw Error;
        }
        wf_id = res.rows[0].workflow_id;
        wf_name = res.rows[0].workflow_name;
        wf_description = res.rows[0].explanation;
        //create workflow object
        let newWorkflow = new Workflow (
            wf_id,
            wf_name,
            wf_description,
        )
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
            newWorkflow._exerciseList.push(newExercise);
        }
        respons.status(200).json(newWorkflow);
    });
};

module.exports = { getExercises, getWorkflowById };
