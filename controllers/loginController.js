const db = require('../db.js');
const SQL = require('sql-template-strings');

const getUserId = (request,response) =>  {
    db.query(SQL`SELECT * FROM user_info WHERE username = ${request.params.username} 
    and password = ${request.params.password}`, (error, results) => {
        if (error) {
            response.status(200).json(error);
            reject(error);
        }
        if (results.rows.length < 1)
        {
            response.status(200).json("error:invalid username or password");
            return;
        }
        response.status(200).json(results.rows[0].user_id);
    })
}

module.exports = { getUserId };