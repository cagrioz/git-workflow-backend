//import classes
const UserInfo = require("./model/UserInfo.js");
const User = require("./model/User.js").User;
const WorkflowCreator = require("./model/User.js").WorkflowCreator;
const Exercise = require("./model/Exercise.js").Exercise;
const WorkflowExercise = require("./model/Exercise.js").WorkflowExercise;
const Workflow = require("./model/Workflow.js").Workflow;
const SolvedWorkflow = require("./model/Workflow.js").SolvedWorkflow;

function testDriverForClasses() {
    let User1 = new UserInfo("serguney", "e@xample.com", "Serguney", "Gumus");
    let WorkflowCreator1 = new WorkflowCreator(1, "Serguney", "e@xample.com", 1);
    let WorkflowExercise1 = new WorkflowExercise(
        1,
        "Name",
        "the first exercise",
        "answer",
        "doing well",
        1,
        "learn well",
        1
    );
    let SolvedWorkflow1 = new SolvedWorkflow(1, "new", "test", 1, 10);
    SolvedWorkflow1.addExercise(WorkflowExercise1);
    WorkflowCreator1.addWorkFLow(SolvedWorkflow1);
    console.log("Classes were created successfully");
    let list = [];
    list.push(WorkflowExercise1);
    const jsonString = JSON.stringify(list);
    console.log(jsonString);
}

testDriverForClasses();
