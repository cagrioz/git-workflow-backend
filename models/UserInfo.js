class UserInfo {
    //variables
    username;
    email;
    lastname;
    firstname;
    password;
    //contructor
    constructor(username, email, password, firstname, lastname) {
        this.username = username;
        this.email = email;
        this.password = password
        this.firstname = firstname;
        this.lastname = lastname;
    }

    //setters and getters
    getUserName = () => {
        return this.username;
    };

    getEmail = () => {
        return this.email;
    };

    getFirstName = () => {
        return this.firstname;
    };
    getLastName = () => {
        return this.lastname;
    };
    getPassword = () => {
        return this.password;
    }
    setUserName = (username) => {
        this.username = username;
    };
    setEmail = (email) => {
        this.email = email;
    };
    setFirstName = (firstname) => {
        this.firstname = firstname;
    };
    setLastName = (lastname) => {
        this.lastname = lastname;
    };
    setPassword = (password) => {
        this.password = password;
    }
}
module.exports = { UserInfo };
