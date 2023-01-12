import axios from 'axios';

var urlBase = process.env.URL;

var ax = {
  newUser: function(user) {
    axios.post(urlBase + 'users', user)
      .then(function(response) {
        console.log(response);
      })
  },
  postScore: function(score, sessionId) {
    var url = urlBase + 'users/' + sessionId;

    axios.post(url, {highScore: score})
      .then(function(response) {
        console.log(response);
      })
  },
  getLeaderboard: function() {
    axios.get(urlBase + 'leaderboard')
      .then(function(response) {
        Game.leaderBoard = response.data;
      })
  }
};

export default ax;
