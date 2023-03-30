class User {
    //protected variables
    userId;
    userName;
    email;
    //constructor
    constructor(userId, userName, email) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
    }

    //getters and setters
    getUserId = () => {
        return this.userId;
    };
    getUserName = () => {
        return this.userName;
    };
    getEmail = () => {
        return this.email;
    };
    setUserId = (Id) => {
        this.userId = Id;
    };
    setUserName = (userName) => {
        this.userName = userName;
    };
    setEmail = (email) => {
        this.email = email;
    };
}

class WorkflowCreator extends User {
    //private variable
    workflowId;
    workflowList;

    //constructor
    constructor(userId, userName, email, workflowId) {
        //call parent constructor
        super(userId, userName, email);
        this.workflowId = workflowId;
        this.workflowList = [];
    }
    //getters and setters
    getWorkflowId = () => {
        return this.workflowId;
    };
    getWorkflowList = () => {
        return this.workflowList;
    };
    setWorkflowId = (workflowId) => {
        this.workflowId = workflowId;
    };
    setWorkflowList = (workflowList) => {
        this.workflowList = workflowList;
    };

    //methods
    addWorkFLow = (workflow) => {
        this.workflowList.push(workflow);
    };
}

module.exports = { User, WorkflowCreator };
