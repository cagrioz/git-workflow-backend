class Workflow {
    //protected variable
    _workflowId;
    _workflowName;
    _workflowDescription;
    _exerciseList;

    //constructor
    constructor(workflowId, workflowName, workflowDescription) {
        this._workflowId = workflowId;
        this._workflowName = workflowName;
        this._workflowDescription = workflowDescription;
        this._exerciseList = [];
    }

    //getters and setters
    getWorkflowId = () => {
        return this._workflowId;
    };
    workflowName = () => {
        return this._workflowName;
    };
    getWorkflowDescription = () => {
        return this._workflowDescription;
    };
    getExerciseList = () => {
        return this._exerciseList;
    };
    setWorkflowId = (workflowId) => {
        this._workflowId = workflowId;
    };
    setWorkflowName = (workflowName) => {
        this._workflowName = workflowName;
    };
    setWorkflowDescription = (description) => {
        this._workflowDescription = description;
    };
    setExerciseList = (exerciseList) => {
        this._exerciseList = exerciseList;
    };
    //methods
    addExercise = (exercise) => {
        this._exerciseList.push(exercise);
    };
}

class SolvedWorkflow extends Workflow {
    //private variables
    #userId;
    #score;
    //constructor
    constructor(workflowId, workflowName, workflowDescription, userId, score) {
        //call parent constructor
        super(workflowId, workflowName, workflowDescription);
        this.#userId = userId;
        this.#score = score;
    }
    //getters and setters
    getUserId = () => {
        return this.#userId;
    };
    getScore = () => {
        return this.#score;
    };
    setUserId = (userID) => {
        this.#userId = userID;
    };
    setScore = (score) => {
        this.#score = score;
    };
}

module.exports = {
    Workflow,
    SolvedWorkflow,
};
