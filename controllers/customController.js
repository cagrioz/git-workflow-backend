//import libraries
const db = require('../db.js');
const SQL = require('sql-template-strings');

//helper promise to get workflow id
const getWorkflowId = (wf_name, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`SELECT workflow_id FROM workflow WHERE workflow_name = ${wf_name}`,
            (err, res) => {
                if (err) {
                    response.status(400).json(err);
                    reject(err);
                }
                resolve(res.rows[0].workflow_id);
            }
        );
    });
};

//function to create workflow
const createWorkflow = (request, response) => {
    //get the parameters from the request
    let wf_name = request.body.workflowName;
    let user_id = request.body.userId;
    let description = request.body.description;
    let exercises = request.body.exercises;
    let keys = Object.keys(exercises);
    let length = keys.length;

    // TODO:
    /*
        RQUEST BODY FORMAT:
        {
            "workflowName": "test",
            "userId": 1,
            "workflowDescription": "test",
            "exercises": [
                {
                "exerciseId": 1,
                "workflowId": 1,
                "explanation": "test",
                }
            ]
        }
    */

    //check if exercise ids entered
    if (length < 1) {
        response.status(400).json({ error: 'no exercise selected' });
    }
    //record new workflow details
    db.query(
        SQL`INSERT INTO workflow (workflow_name,workflow_description) 
    VALUES (${wf_name}, ${description})`,
        (err) => {
            if (err) {
                response.status(400).json({error:'workflow id must be unique'});
                return;
            }
            //get workflow id from the db
            getWorkflowId(wf_name, response).then((wf_id) => {
                //insert workflow creator entry
                db.query(
                    SQL`INSERT INTO workflow_creator VALUES (${user_id}, ${wf_id})`,
                    (err) => {
                        if (err) {
                            response.status(400).json({error: 'a user cannot create workflow with duplicate workflow_id'});
                            return;
                        }
                        //insert exercises to workflow_exercise table one by one
                        for (let i = 0; i < length; i++) {
                            db.query(
                                SQL`INSERT INTO workflow_exercise VALUES (${
                                    keys[i]
                                }, ${wf_id}, ${exercises[keys[i]]}, ${i + 1})`,
                                (err) => {
                                    if (err) {
                                        response.status(400).json({error:'a workflow cannot contain duplicate exercises'});
                                        return;
                                    }
                                }
                            );
                        }
                        //send success message if custom workflow added successfuly
                        response.status(200).json({ msg: 'successful' });
                    }
                );
            });
        }
    );
};

//export the function
module.exports = { createWorkflow };
