const { UserInfo } = require('../models/UserInfo.js');
const db = require('../db.js');
const SQL = require('sql-template-strings');

const registerUser = (request, response) => {
    let newUser = new UserInfo(
        request.params.username,
        request.params.email,
        request.params.password,
        request.params.firstname,
        request.params.lastname
    );
    db.query(SQL`SELECT * FROM user_info WHERE username = ${newUser.username}`, (error, results) =>
    {
        if (error)
        {
            response.status(200).json(error);
            return;
        }
        else if (results.rows.length > 0)
        {
            response.status(200).json("error:username already exist");
            return;
        }
    }
    )
}

module.exports = {registerUser};