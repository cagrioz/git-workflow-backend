//import the library
const { Pool } = require('pg');

//define connection string
const connectionString =
    
    "postgres://gitworkflowteacherapp:123456789@localhost:5432/gitdb";
//create connection pool
const pool = new Pool({
    connectionString: connectionString,
   
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
