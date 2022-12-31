//import classes
const UserInfo = require("./model/UserInfo.js");

//import libraries
const { Pool, Client } = require("pg");
const { rows } = require("pg/lib/defaults");

//define connection string
const connectionString = "postgresql://gitworkflowteacherapp:123456789@localhost:5433/WorkflowTeacher";

const pool = new Pool({
    connectionString: connectionString,
});

let user;
//create a connection
pool.connect();

//execute a query
const getName = () => {
    return new Promise((resolve, reject) => {
        pool.query('Select * from public."user_info"', (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res.rows);
            pool.end();
        });
    });
};

//create list of user_info objects
getName().then((user) => {
    console.log(user[0]);
});
