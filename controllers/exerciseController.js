//import libraries and models
const { Exercise } = require('../models/Exercise.js');
const db = require('../db.js');

//function to create list of exercise objects
const getExercises = (request, response) => {
    db.query('Select * from public."exercises"', (err, res) => {
        if (err) {
            response.status(400).json({ error: 'No exercise list found' });
            return;
        }
        //create an empty list for exercises
        let exerciseList = [];
        //get number of exercises
        let length = res.rows.length;
        //send error msg if there is no exercise in the database
        if (!length) {
            response.status(400).json({ error: 'No exercise found' });
            return;
        }
        for (let i = 0; i < length; i++) {
            //create a new exercise object
            let newExercise = new Exercise(
                res.rows[i].exercise_id,
                res.rows[i].exercise_name,
                res.rows[i].description,
                res.rows[i].answer,
                res.rows[i].feedback
            );
            //add each exercise to the exercise list
            exerciseList.push(newExercise);
        }
        //send the exercise list
        response.status(200).json(exerciseList);
    });
};

//export the function
module.exports = { getExercises };
