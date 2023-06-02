//import the model and the libraries
const { UserInfo } = require('../models/UserInfo.js');
const db = require('../db.js');
const SQL = require('sql-template-strings');

//promise to check whether the username already exist or not
const checkUsername = (newUser, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`SELECT * FROM user_info WHERE username = ${newUser.username} 
        OR email = ${newUser.email}`,
            (error, results) => {
                if (error) {
                    response.status(400).json(error);
                    reject(error);
                }
                //return number of rows of query result
                let length = results.rows.length;
                resolve(length);
            }
        );
    });
};

//promise to record uset_info
const recordUserInfo = (newUser, response) => {
    return new Promise((resolve, reject) => {
        //record new user info into database
        db.query(
            SQL`insert into user_info (username, email, password, firstname, lastname)
        values (${newUser.username}, ${newUser.email}, 
            crypt(${newUser.password},gen_salt('md5')), ${newUser.firstname}, ${newUser.lastname});`,
            (error) => {
                if (error) {
                    response.status(400).json(error);
                    reject(error);
                }
                //return user details
                resolve(newUser);
            }
        );
    });
};

//function to register new user
const registerUser = (request, response) => {
    //get the parameters from the request
    const { username, email, password, firstname, lastname } = request.body;

    //create new user object
    let newUser = new UserInfo(username, email, password, firstname, lastname);

    //check if the username and password are unique
    checkUsername(newUser, response).then((length) => {
        if (length > 0) {
            //if the information is not unique, send an error msg
            response
                .status(400)
                .json({ error: 'Username or email already taken' });
            return;
        }
        //record new user
        recordUserInfo(newUser, response).then((user) => {
            response.status(200).json({
                //if the insertion is successful, send success msg
                message: 'Succesfully registered',
                username: user.username,
            });
            return;
        });
    });
};

//export the function
module.exports = { registerUser, checkUsername, recordUserInfo };
