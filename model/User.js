class User {
    //protected variables
    _userId;
    _userName;
    _email;
    //constructor
    constructor(userId, userName, email) {
        this._userId = userId;
        this._userName = userName;
        this._email = email;
    }

    //getters and setters
    getUserId = () => {
        return this._userId;
    };
    getUserName = () => {
        return this._userName;
    };
    getEmail = () => {
        return this._email;
    };
    setUserId = (Id) => {
        this._userId = Id;
    };
    setUserName = (userName) => {
        this._userName = userName;
    };
    setEmail = (email) => {
        this._email = email;
    };
}

class WorkflowCreator extends User {
    //private variable
    #workflowId;
    #workflowList;

    //constructor
    constructor(userId, userName, email, workflowId) {
        //call parent constructor
        super(userId, userName, email);
        this.#workflowId = workflowId;
        this.#workflowList = [];
    }
    //getters and setters
    getWorkflowId = () => {
        return this.#workflowId;
    };
    getWorkflowList = () => {
        return this.#workflowList;
    };
    setWorkflowId = (workflowId) => {
        this.#workflowId = workflowId;
    };
    setWorkflowList = (workflowList) => {
        this.#workflowList = workflowList;
    };

    //methods
    addWorkFLow = (workflow) => {
        this.#workflowList.push(workflow);
    };
}

module.exports = { User, WorkflowCreator };
