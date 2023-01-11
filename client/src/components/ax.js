import axios from 'axios';

var urlBase = `http://localhost:4001/`;

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
        console.log(response);
      })
  }
};

export default ax;