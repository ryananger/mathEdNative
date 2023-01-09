import Game from './Game.js';

var input = {
  mx: 0,
  my: 0,
  clicks: 0,

  keypress: null
};

var keypressListener = function() {
  window.addEventListener('keyup', function (event) {
    input.keypress = event.key;

    console.log(input.keypress);
  });
};

var mouseClickListener = function() {
  window.addEventListener('click', function (event) {
    getMousePosition(event);
    input.clicks++;

    console.log(event.target)

    console.log(input);
  });
};

var getMousePosition = function(event) {
  var canvas = document.getElementById('canvas');
  var rect = canvas.getBoundingClientRect();

  input.mx = event.clientX - rect.left;
  input.my = event.clientY - rect.top;
};

keypressListener();
mouseClickListener();

export default input;