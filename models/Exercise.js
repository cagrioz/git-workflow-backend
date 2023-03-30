class Exercise {
    //variables
    exerciseId;
    exerciseName;
    description;
    answer;
    feedback;
    //constructor
    constructor(exerciseId, exerciseName, description, answer, feedback) {
        this.exerciseId = exerciseId;
        this.exerciseName = exerciseName;
        this.description = description;
        this.answer = answer;
        this.feedback = feedback;
    }
    //getters and setters
    getExerciseId = () => {
        return this.exerciseId;
    };
    getExerciseName = () => {
        return this.exerciseName;
    };
    getDescription = () => {
        return this.description;
    };
    getAnswer = () => {
        return this.answer;
    };
    getFeedback = () => {
        return this.feedback;
    };
    setExerciseId = (exerciseId) => {
        this.exerciseId = exerciseId;
    };
    setExerciseName = (exerciseName) => {
        this.exerciseName = exerciseName;
    };
    setDescription = (description) => {
        this.description = description;
    };
    setAnswer = (answer) => {
        this.answer = answer;
    };
    setfeedback = (feedback) => {
        this.feedback = feedback;
    };
}

class WorkflowExercise extends Exercise {
    //variables
    workflowId;
    explanation;
    order;

    //constructor
    constructor(
        exerciseId,
        description,
        answer,
        feedback,
        workflowId,
        explanation,
        order
    ) {
        //call parent constructor
        super(exerciseId, description, answer, feedback);
        this.workflowId = workflowId;
        this.explanation = explanation;
        this.order = order;
    }

    //getters and setters
    getWorkflowId = () => {
        return this.workflowId;
    };
    getExplanation = () => {
        return this.explanation;
    };
    getOrder = () => {
        return this.order;
    };
    setWorkflowId = (workflowId) => {
        this.workflowId = workflowId;
    };
    setExplanation = (explanation) => {
        this.explanation = explanation;
    };
    setOrder = (order) => {
        this.order = order;
    };
}

module.exports = {
    Exercise,
    WorkflowExercise,
};
