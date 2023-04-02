//import the library
const { Pool } = require('pg');

//define connection string
const connectionString =
    'postgres://git_workflow_db_d6p9_user:96M45CgnBt6JUWkr9BykA18kmxAZ6zXW@dpg-cgfbpnceoogqfc4djge0-a.oregon-postgres.render.com/git_workflow_db_d6p9';

//create connection pool
const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
