class UserInfo {
    //private variables
    #username;
    #email;
    #lastname;
    #firstname;

    //contructor
    constructor(username, email, firstname, lastname) {
        this.#username = username;
        this.#email = email;
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    //setters and getters
    getUserName = () => {
        return this.#username;
    };

    getEmail = () => {
        return this.#email;
    };

    getFirstName = () => {
        return this.#firstname;
    };
    getLastName = () => {
        return this.#lastname;
    };
    setUserName = (username) => {
        this.#username = username;
    };
    setEmail = (email) => {
        this.#email = email;
    };
    setFirstName = (firstname) => {
        this.#firstname = firstname;
    };
    setLastName = (lastname) => {
        this.#lastname = lastname;
    };
}
module.exports = UserInfo;
