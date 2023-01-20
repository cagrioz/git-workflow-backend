class Exercise {
    //protected variables
    _exerciseId;
    _exerciseName;
    _description;
    _answer;
    _feedback;
    //constructor
    constructor(exerciseId, exerciseName, description, answer, feedback) {
        this._exerciseId = exerciseId;
        this._exerciseName = exerciseName;
        this._description = description;
        this._answer = answer;
        this._feedback = feedback;
    }
    //getters and setters
    getExerciseId = () => {
        return this._exerciseId;
    };
    getExerciseName = () => {
        return this._exerciseName;
    };
    getDescription = () => {
        return this._description;
    };
    getAnswer = () => {
        return this._answer;
    };
    getFeedback = () => {
        return this._feedback;
    };
    setExerciseId = (exerciseId) => {
        this._exerciseId = exerciseId;
    };
    setExerciseName = (exerciseName) => {
        this._exerciseName = exerciseName;
    };
    setDescription = (description) => {
        this._description = description;
    };
    setAnswer = (answer) => {
        this._answer = answer;
    };
    setfeedback = (feedback) => {
        this._feedback = feedback;
    };
}

class WorkflowExercise extends Exercise {
    //private variables
    #workflowId;
    #explanation;
    #order;

    //constructor
    constructor(exerciseId, description, answer, feedback, workflowId, explanation, order) {
        //call parent constructor
        super(exerciseId, description, answer, feedback);
        this.#workflowId = workflowId;
        this.#explanation = explanation;
        this.#order = order;
    }

    //getters and setters
    getWorkflowId = () => {
        return this.#workflowId;
    };
    getExplanation = () => {
        return this.#explanation;
    };
    getOrder = () => {
        return this.#order;
    };
    setWorkflowId = (workflowId) => {
        this.#workflowId = workflowId;
    };
    setExplanation = (explanation) => {
        this.#explanation = explanation;
    };
    setOrder = (order) => {
        this.#order = order;
    };
}

module.exports = {
    Exercise,
    WorkflowExercise,
};
