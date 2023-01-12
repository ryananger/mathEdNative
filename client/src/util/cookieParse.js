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

export default cookieParse;