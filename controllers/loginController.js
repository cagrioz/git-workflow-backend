const db = require('../db.js');
const SQL = require('sql-template-strings');

const getUserId = (request, response) => {
    const { username, password } = request.body;

    db.query(
        SQL`SELECT * FROM user_info WHERE username = ${username} 
    and password = ${password}`,
        (error, results) => {
            if (error) {
                response.status(200).json(error);
            }
            if (results.rows.length < 1) {
                response.status(200).json('error:invalid username or password');
                return;
            }
            response
                .status(200)
                .json(
                    'id: ' +
                        results.rows[0].user_id +
                        ' username:' +
                        results.rows[0].username
                );
        }
    );
};

module.exports = { getUserId };
