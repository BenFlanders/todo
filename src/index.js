const express = require('express');

const api = express();
api.listen(3000, () => {
    console.log('API up and running on port 3000!');
});

api.get('/', (req, res) => {
    res.send('Hello World!');
});