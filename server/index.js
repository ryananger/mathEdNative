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
  User.create(req.body)
    .then(function(response) {
      console.log(response);

      res.status(201);
      res.send('User created.');
    })
});

app.post('/users/:sessionId', function(req, res) {
  var filter = {sessionId: req.params.sessionId};
  var update = req.body;

  User.findOneAndUpdate(filter, update)
    .then(function(response) {
      res.status(200);
      res.send();
    })
});

app.get('/leaderboard', function(req, res) {
  User.find({})
    .sort({highScore: -1})
    .then(function(response) {
      var sendBody = [];

      response.map(function(entry) {
        if (entry.highScore > 0) {
          sendBody.push({
            username: entry.username,
            highScore: entry.highScore
          })
        }
      })

      res.json(sendBody);
    })
});

const PORT = 4001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
