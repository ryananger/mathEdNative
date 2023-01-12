import Game from './Game.js';

var input = {
  mx: 0,
  my: 0,
  clicks: 0,
  lastTarget: null,

  keypress: null
};

var keypressListener = function() {
  window.addEventListener('keyup', function (event) {
    input.keypress = event.key;

    switch (event.key) {
      case 'Escape':
        Game.paused = !Game.paused;
        break;

      default:
        if (Game.paused) {
          return;
        }
        break;
      case '+':
        Game.mod = '+';
        break;
      case '-':
        Game.mod = '-';
        break;
      case '*':
        Game.mod = '×';
        break;
      case '/':
        Game.mod = '÷';
        break;

      case 'Enter':
        Game.evaluate();
        break;
      case ' ':
        Game.getNumbers();
        break;
      case 'p':
        // Game.pulse.reset();
        // Game.pulse.pulsing = true;
        break;
      case 'm':
        var audio = document.getElementById('music');

        if (audio.volume === 0) {
          audio.volume = 0.15;
        } else {
          audio.volume = 0;
        }
        break;
    }


    if (Number(event.key) && !Game.paused) {
      for (var i = 0; i < Game.numbers.length; i++) {
        var num = Game.numbers[i];

        if (num.value === Number(event.key) && Game.buttonsPressed.indexOf(num.id) === -1) {
          Game.buttonsPressed.push(num.id);

          if (Game.buttonsPressed.length > 3) {
            Game.buttonsPressed.shift();
          }
          break;
        }
      }
    }
  });
};

var mouseClickListener = function() {
  window.addEventListener('click', function (event) {
    getMousePosition(event);
    input.lastTarget = event.target;
    input.clicks++;

    var audio = document.getElementById('music');

    if (audio.paused) {
	audio.volume = 0.15;
	audio.play();
    }

    //console.log(input);
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
