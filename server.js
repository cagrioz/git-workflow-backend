const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 8000;

const cors = require("cors");

// enable cors
app.use(cors());

app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/exercises", db.getExercises);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
