const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const api = express();

api.use(express.static(__dirname + '/public'));

api.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BNFKAWF2019!',
    database: 'todo'
});

api.listen(3000, () => {
    console.log('API up and running on port 3000!');
});

api.post('/add', (req, res) => {
    console.log(req.body);
    
    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
     if (error) return res.json({ error: error });
   connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
      if (error) return res.json({ error: error });
   console.log(results);
     });
    });
   });