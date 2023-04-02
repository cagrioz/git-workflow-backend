//import libraries
const db = require('../db.js');
const SQL = require('sql-template-strings');

//function to verify user info for login
const getUserId = (request, response) => {
    //get the parameters from the request
    const { username, password } = request.body;

    //check if the entered user info is valid
    db.query(
        SQL`SELECT * FROM user_info WHERE username = ${username} 
    and password = ${password}`,
        (error, results) => {
            if (error) {
                response.status(400).json(error);
            }
            //send error message if user does not exist
            if (results.rows.length < 1) {
                response
                    .status(400)
                    .json({ error: 'invalid username or password' });
                return;
            }
            //send user details if the login is successful
            response.status(200).json({
                id: results.rows[0].user_id,
                username: results.rows[0].username,
            });
        }
    );
};

//export the function
module.exports = { getUserId };
