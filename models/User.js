class User {
    //variables
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
    //variables
    workflowId;
    workflowList;

    //constructor
    constructor(userId, userName, email, workflowId) {
        //call parent constructor
        super(userId, userName, email);
        this.workflowList = [];
    }
    //getters and setters
    getWorkflowList = () => {
        return this.workflowList;
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
