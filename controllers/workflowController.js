const { Workflow } = require('../models/Workflow.js');
const { Exercise, WorkflowExercise } = require('../models/Exercise.js');

const db = require('../db.js');

const SQL = require('sql-template-strings');


const updatetSolvedWorkflow = (user_id,wf_id,score,response) => {
    return new Promise((resolve, reject) => {
        db.query(SQL`UPDATE Solve SET score = ${score} 
        WHERE fk_user_id = ${user_id} AND fk_workflow_id = ${wf_id}`, (err,res) =>{
            if (err)
            {
                response.status(400).json(err);
                reject(err);
            }
            resolve("success");
        })
    })
} 

//helper promise to insert solved workflow
const insertSolvedWorkflow = (user_id,wf_id,score,response) => {
    return new Promise((resolve, reject) => {
        db.query(SQL`INSERT INTO Solve VALUES(${user_id},${wf_id},${score})`, (err,res) =>{
            if (err)
            {
                response.status(400).json(err);
                reject(err);
            }
            resolve("success");
        })
    })
} 

//helper promise to check whether wokflow score initialized or not
const isScoreExist = (user_id, wf_id) => {
    return new Promise((resolve, reject)=> {
       db.query(SQL`SELECT score FROM Solve WHERE fk_user_id = ${user_id}
       AND fk_workflow_id = ${wf_id}`, (err,res)=> {
        if (err)
        {
            response.status(400).json(err);
            reject(err);
        }
        let length = res.rows.length;
        if(length < 1)
        {
            resolve(0);
        }
        else resolve(1);
       }) 
    })
}

//helper promise to get workflow_id
const getWorkflowId = (wf_name, response) => {
    return new Promise((resolve, reject) => {
        db.query(SQL`SELECT workflow_id from workflow where workflow_name = ${wf_name}`, (err,res) =>{
            if (err)
            {
                response.status(400).json(err);
                reject(err);
            }
            let length = res.rows.length;
            if(length < 1)
            {
                resolve(0);
            }
            else
            {
                resolve(res.rows[0].workflow_id);
            }
        })
    })
}

//helper promise to get score
const getScore = (exercises, user_id, wf_id, length, response) => {
    return new Promise((resolve, reject) => {
        db.query(SQL`SELECT score FROM Solve WHERE fk_user_id = ${user_id}
        AND fk_workflow_id = ${wf_id}`, (err, res) => {
            if (err) {
                response.status(400).json(err);
                reject(err);
            }
            let l = res.rows.length;
            if (l < 1) {
                let text = exercises + 'score: 0/' + length;
                resolve(text);
            }
            else {
                let sc = res.rows[0].score;
                let text = exercises + ' score:' + sc + '/' + length;
                resolve(text);
            }
        })
    })
}


//workflow exercises
const getWorkflows = (request, response) => {
    db.query('SELECT * FROM WORKFLOW ORDER BY workflow_id', (err, res) => {
        if (err) {
            response.status(400).json(err.message);
            return
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

//workflows containing exercises
const getWorkflowByName = (request, response) => {
    const wf_name = request.query.workflowName;
    let user_id = request.query.userId;
    db.query(SQL`SELECT * FROM workflow_details WHERE workflow_name = ${wf_name}`, (error, results) => {
        if (error) {
            response.status(400).json(error);
            return;
        }
        length = results.rows.length;
        if (length < 1) {
            response.status(200).json("no workflows found");
            return;
        }
        let wf_id = results.rows[0].workflow_id;
        //create list of workflow exercise objects
        let workflowExerciseList = [];
        for (let i = 0; i < length; i++) {
            let newWorkflowExercise = new WorkflowExercise(
                results.rows[i].exercise_id,
                results.rows[i].description,
                results.rows[i].answer,
                results.rows[i].feedback,
                results.rows[i].workflow_id,
                results.rows[i].explanation,
                results.rows[i].order_
            )
            workflowExerciseList.push(newWorkflowExercise);
        }
        text = JSON.stringify(workflowExerciseList);

        getScore(text,user_id,wf_id,length,response).then((j_text) =>{
            response.status(200).json(j_text);
        })
    }
    )
};

//store workflow score for a particular user
const saveWorkflowProgress = (request,response) => {
    let wf_name = request.body.workflowName;
    let user_id = request.body.userId;
    let sc = request.body.score;

    getWorkflowId(wf_name,response).then((wf_id)=>{
        if (wf_id == 0)
        {
            response.status(200).json("error:no workflow found");
            return;
        }
        isScoreExist(user_id,wf_id).then((result)=>
        {
            if (result == 1)
            {
                updatetSolvedWorkflow(user_id,wf_id,sc,response).then((msg)=>{
                    response.status(200).json(msg);
                })
            }
            else
            {
                insertSolvedWorkflow(user_id,wf_id,sc,response).then((msg)=>
                {
                    response.status(200).json(msg);
                })
            }
        })
    })
}

module.exports = { getWorkflows, getWorkflowByName, saveWorkflowProgress };
