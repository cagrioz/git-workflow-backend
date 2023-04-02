const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');

const workflowRoutes = require('./routes/workflowRoutes.js');
const exerciseRoutes = require('./routes/exerciseRoutes.js');
const registerRoutes = require('./routes/registerRoutes.js');
const loginRoutes = require('./routes/loginRoutes.js');
const customRoutes = require('./routes/customRoutes.js');

app.use(express.json());

// enable cors
app.use(cors());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/exercises', exerciseRoutes);

app.use('/workflows', workflowRoutes);

app.use('/register', registerRoutes);

app.use('/login', loginRoutes);

app.use('/custom', customRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
