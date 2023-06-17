//import the models
const { Workflow } = require('../models/Workflow.js');
const { WorkflowExercise } = require('../models/Exercise.js');

//import the libraries
const db = require('../db.js');
const SQL = require('sql-template-strings');

//helper promise to update score of the course
const updatetSolvedWorkflow = (user_id, wf_id, score, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`UPDATE Solve SET score = ${score} 
        WHERE fk_user_id = ${user_id} AND fk_workflow_id = ${wf_id}`,
            (err) => {
                if (err) {
                    response.status(400).json(err);
                    reject(err);
                }
                //return success msg
                resolve({ message: 'Success' });
            }
        );
    });
};

//helper promise to insert solved workflow for the first time
const insertSolvedWorkflow = (user_id, wf_id, score, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`INSERT INTO Solve VALUES(${user_id},${wf_id},${score})`,
            (err) => {
                if (err) {
                    response.status(400).json(err);
                    reject(err);
                }
                //return success msg
                resolve({ message: 'Success' });
            }
        );
    });
};

//helper promise to check whether wokflow score initialized or not
const isScoreExist = (user_id, wf_id, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`SELECT score FROM Solve WHERE fk_user_id = ${user_id}
       AND fk_workflow_id = ${wf_id}`,
            (err, res) => {
                if (err) {
                    response.status(400).json(err);
                    reject(err);
                }
                let length = res.rows.length;
                //if the user already has progress in the workflow return 1 else 0
                if (length < 1) {
                    resolve(0);
                } else resolve(1);
            }
        );
    });
};

//helper promise to get workflow_id
const getWorkflowId = (wf_name, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`SELECT workflow_id from workflow where workflow_name = ${wf_name}`,
            (err, res) => {
                if (err) {
                    response.status(400).json(err);
                    reject(err);
                }
                let length = res.rows.length;
                //return workflow id if the workflow exists else 0
                if (length < 1) {
                    resolve(0);
                } else {
                    resolve(res.rows[0].workflow_id);
                }
            }
        );
    });
};

//helper promise to get score
const getScore = (exercises, user_id, wf_id, length, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`SELECT score FROM Solve WHERE fk_user_id = ${user_id}
        AND fk_workflow_id = ${wf_id}`,
            (err, res) => {
                if (err) {
                    response.status(400).json(err);
                    reject(err);
                }
                let l = res.rows.length;
                //if the score exists return score/total
                if (l < 1) {
                    let text = {
                        exercises,
                        score: {
                            completed: 0,
                            total: length,
                        },
                    };
                    resolve(text);
                    //return 0/total
                } else {
                    let sc = res.rows[0].score;
                    let text = {
                        exercises,
                        score: {
                            completed: sc,
                            total: length,
                        },
                    };
                    resolve(text);
                }
            }
        );
    });
};

//fonction to get workflow details
const getWorkflows = (request, response) => {
    db.query('SELECT * FROM WORKFLOW ORDER BY workflow_id', (err, res) => {
        if (err) {
            response.status(400).json(err.message);
            return;
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

            //add each workflow into the list
            workflowList.push(newWorkflow);
        }

        //send workflow list
        response.status(200).json(workflowList);
    });
};

//function to get workflow exercises
const getWorkflowByName = (request, response) => {
    //get the parameters from the request
    const wf_name = request.query.workflowName;
    let user_id = request.query.userId;
    db.query(
        SQL`SELECT * FROM workflow_details WHERE workflow_name = ${wf_name}`,
        (error, results) => {
            if (error) {
                response.status(400).json(error);
                return;
            }
            let length = results.rows.length;
            //send error msg if the details not found
            if (length < 1) {
                response.status(400).json({ error: 'No workflows found' });
                return;
            }
            //set the workflow id
            let wf_id = results.rows[0].workflow_id;

            //create list of workflow exercise objects
            let workflowExerciseList = [];

            //create workflow objects
            for (let i = 0; i < length; i++) {
                let newWorkflowExercise = new WorkflowExercise(
                    results.rows[i].exercise_id,
                    results.rows[i].exercise_name,
                    "",
                    results.rows[i].feedback,
                    results.rows[i].workflow_id,
                    results.rows[i].explanation,
                    results.rows[i].order_
                );
                //add an exercise into the list of workflow objects
                workflowExerciseList.push(newWorkflowExercise);
            }
            //get user score of the workflow and concatenate exercise list
            getScore(
                workflowExerciseList,
                user_id,
                wf_id,
                length,
                response
            ).then((j_text) => {
                //send score and the list
                response.status(200).json(j_text);
            });
        }
    );
};

//function to store workflow score for a particular user
const saveWorkflowProgress = (request, response) => {
    //set the variables from the request body
    let wf_name = request.body.workflowName;
    let user_id = request.body.userId;
    let sc = request.body.score;

    //get workflow id
    getWorkflowId(wf_name, response).then((wf_id) => {
        if (wf_id == 0) {
            //send error if no workflow
            response.status(400).json({ error: 'No workflow found' });
            return;
        }

        //check wether the user already has a score for the particular workflow course
        isScoreExist(user_id, wf_id).then((result) => {
            if (result == 1) {
                //update the score if it already exists
                updatetSolvedWorkflow(user_id, wf_id, sc, response).then(
                    (msg) => {
                        //send success msg
                        response.status(200).json(msg);
                    }
                );
            } else {
                //initilize the score for the first time
                insertSolvedWorkflow(user_id, wf_id, sc, response).then(
                    (msg) => {
                        //send success msg
                        response.status(200).json(msg);
                    }
                );
            }
        });
    });
};

//export the functions
module.exports = { getWorkflows, getWorkflowByName, saveWorkflowProgress };
