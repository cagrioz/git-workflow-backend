const { Exercise } = require('../models/Exercise.js');
const db = require('../db.js');

//method to create list of exercise objects
const getExercises = (request, response) => {
    db.query('Select * from public."exercises"', (err, res) => {
        if (err) {
            response.status(200).json("no exercise list found");
            return;
        }
        //create an empty list for exercises
        let exerciseList = [];
        //get number of exercises
        let length = res.rows.length;
        if (!length){
            response.status(200).json("no exercise found");
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
            exerciseList.push(newExercise);
        }
        response.status(200).json(exerciseList);
    });
};

module.exports = { getExercises };
