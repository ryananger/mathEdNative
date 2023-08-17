const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const https  = require('https');
const http   = require('http');
const fs     = require('fs');
const cors   = require('cors');
const path   = require('path');
const router = express.Router();
const app    = express();

const User = require('./db.js');
const dist = path.join(__dirname, '../client/dist');

// var options = {
//   key:  fs.readFileSync(process.env.HTTPS_KEY),
//   cert: fs.readFileSync(process.env.HTTPS_CERT)
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(dist));
app.use(router);

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
        if (entry.highScore > 0 && sendBody.length < 6) {
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
http.createServer(app).listen(PORT);
// https.createServer(options, app).listen(443);
console.log(`Server listening at http://localhost:${PORT}`);
