var cookieParse = function() {
  var split = document.cookie.replaceAll(' ', '').split(';');
  var cookie = {};

  if (!split[0]) {
    cookie = 'No cookie.'
  } else {
    split.map(function(entry) {
      var pair = entry.split('=');

      cookie[pair[0]] = pair[1];
    })
  }

  return cookie;
};

var user = function() {
  var cookie = cookieParse();

  if (cookie.user) {
    return {
      name: cookie.user,
      highScore: cookie.highScore,
      sessionId: cookie.sessionId
    }
  } else {
    return null;
  }
};

var cookieHandle = {
  cookieParse,
  user
};

export default cookieHandle;