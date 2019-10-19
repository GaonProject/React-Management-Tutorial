const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8090;

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({'message': 'hello'});
});

app.get('/api/customers', (req, res) => {
    connection.query(
        "SELECT * FROM customer", (err, rows, fields) => {
            console.log(rows);
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));