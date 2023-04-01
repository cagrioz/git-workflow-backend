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
                    response.status(200).json(error);
                    reject(error);
                }
                let length = results.rows.length;
                resolve(length);
            }
        );
    });
};
//promise to record uset_info
const recordUserInfo = (newUser, response) => {
    return new Promise((resolve, reject) => {
        db.query(
            SQL`insert into user_info (username, email, password, firstname, lastname)
        values (${newUser.username}, ${newUser.email}, 
            ${newUser.password}, ${newUser.firstname}, ${newUser.lastname});`,
            (error) => {
                if (error) {
                    response.status(200).json(error);
                    reject(error);
                }
                resolve(newUser);
            }
        );
    });
};

const registerUser = (request, response) => {
    const { username, email, password, firstname, lastname } = request.body;
    let newUser = new UserInfo(username, email, password, firstname, lastname);
    checkUsername(newUser, response).then((length) => {
        if (length > 0) {
            response.status(200).json('error:username or email already taken');
            return;
        }
        recordUserInfo(newUser, response).then((user) => {
            response.status(200).json({
                username: user.username,
            });
            return;
        });
    });
};

module.exports = { registerUser };
