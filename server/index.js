const express = require('express');
const cors = require('cors');
const path = require('path');
//const controller = require('./controller.js');
const app = express();
const User = require('./db.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/users', function(req, res) {

});

app.get('/leaderboard', function(req, res) {

});

const PORT = 4001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
