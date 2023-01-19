const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries.js');
const port = 8000;

const cors = require('cors');

// enable cors
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/exercises', db.getExercises);

app.get('/workflows', db.getWorkflows);

app.get('/workflow/:id', db.getWorkflowById);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
