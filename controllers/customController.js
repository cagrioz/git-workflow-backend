const { User } = require('../models/User.js');
const { WorkflowCreator } = require('../models/User.js');
const db = require('../db.js');
const SQL = require('sql-template-strings');


//helper promise to get workflow id
const getWorkflowId = (wf_name, response) => {
    return new Promise((resolve,reject)=>{
        db.query(SQL`SELECT workflow_id FROM workflow WHERE workflow_name = ${wf_name}`, (err,res) =>{
            if(err)
            {
                response.status(400).json(err);
                reject(err)
            }
            resolve(res.rows[0].workflow_id);
        })
    })
}

const createWorkflow = (request, response) => {
    //get the parameters from the request
    let wf_name = request.body.workflowName;
    let user_id = request.body.userId;
    let description = request.body.description
    let exercises = request.body.exercises;
    let keys = Object.keys(exercises);
    let length = keys.length;

    //check if exercise ids entered
    if(length < 1)
    {
        response.status(400).json({error:'no exercise selected'})
    }
    //record new workflow details
    db.query(SQL`INSERT INTO workflow (workflow_name,workflow_description) 
    VALUES (${wf_name}, ${description})`, (err,res)=>{
        if (err)
        {
            response.status(400).json(err);
            return;
        }
        //get workflow id from the db
        getWorkflowId(wf_name,response).then((wf_id) =>{
        
        //insert workflow creator entry
        db.query(SQL`INSERT INTO workflow_creator VALUES (${user_id}, ${wf_id})`, (err,res)=>{
            if(err)
            {
                response.status(400).json(err);
                return;
            }
            for(let i=0; i<length; i++)
            {
                let explanation 
                db.query(SQL`INSERT INTO workflow_exercise VALUES (${keys[i]}, ${wf_id}, ${exercises[keys[i]]}, ${i+1})`,
                (err,res)=>{
                    if(err)
                    {
                        response.status(400).json(err);
                        return;
                    }
                })
            }
            response.status(200).json({msg:'successful'});        
        })
        })
    })
}

module.exports = { createWorkflow };