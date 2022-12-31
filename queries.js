//import classes
const UserInfo = require('./UserInfo.js');
const User = require('./User.js').User;
const WorkflowCreator = require('./User.js').WorkflowCreator;
const Exercise = require('./Exercise.js').Exercise;
const WorkflowExercise = require('./Exercise.js').WorkflowExercise;
const Workflow = require('./Workflow.js').Workflow;
const SolvedWorkflow = require('./Workflow.js').SolvedWorkflow;

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
        pool.end();
        response.status(200).json(exerciseList);
    });
};

module.exports = { getExercises };
