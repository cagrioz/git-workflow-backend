class Workflow {
    //protected variable
    workflowId;
    workflowName;
    workflowDescription;
    exerciseList;

    //constructor
    constructor(workflowId, workflowName, workflowDescription) {
        this.workflowId = workflowId;
        this.workflowName = workflowName;
        this.workflowDescription = workflowDescription;
        this.exerciseList = [];
    }

    //getters and setters
    getWorkflowId = () => {
        return this.workflowId;
    };
    workflowName = () => {
        return this.workflowName;
    };
    getWorkflowDescription = () => {
        return this.workflowDescription;
    };
    getExerciseList = () => {
        return this.exerciseList;
    };
    setWorkflowId = (workflowId) => {
        this.workflowId = workflowId;
    };
    setWorkflowName = (workflowName) => {
        this.workflowName = workflowName;
    };
    setWorkflowDescription = (description) => {
        this.workflowDescription = description;
    };
    setExerciseList = (exerciseList) => {
        this.exerciseList = exerciseList;
    };
    //methods
    addExercise = (exercise) => {
        this.exerciseList.push(exercise);
    };
}

class SolvedWorkflow extends Workflow {
    //variables
    userId;
    score;
    //constructor
    constructor(workflowId, workflowName, workflowDescription, userId, score) {
        //call parent constructor
        super(workflowId, workflowName, workflowDescription);
        this.userId = userId;
        this.score = score;
    }
    //getters and setters
    getUserId = () => {
        return this.userId;
    };
    getScore = () => {
        return this.score;
    };
    setUserId = (userID) => {
        this.userId = userID;
    };
    setScore = (score) => {
        this.score = score;
    };
}

module.exports = {
    Workflow,
    SolvedWorkflow,
};
