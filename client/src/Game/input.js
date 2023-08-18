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
      case 'q':
        Game.mod = '+';
        break;
      case '-':
      case 'w':
        Game.mod = '-';
        break;
      case '*':
      case 'e':
        Game.mod = '×';
        break;
      case '/':
      case 'r':
        Game.mod = '÷';
        break;

      case 'Enter':
        Game.evaluate();
        break;
      case ' ':
        Game.getNumbers(true);
        break;
      case 'g':
        //console.log(Game);
        break;
      case 'm':
        var music = document.getElementById('music');

        if (music.volume === 0) {
          music.volume = 0.15;
        } else {
          music.volume = 0;
        }
        break;
    }

    if ((Number(event.key) || event.key === 'x') && !Game.paused) {
      for (var i = 0; i < Game.numbers.length; i++) {
        var num = Game.numbers[i];
        var value = Number(event.key) || 'x';

        if (num.value === value && Game.buttonsPressed.indexOf(num.id) === -1) {
          Game.playAudio(Game.audio.click);

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

    var music = document.getElementById('music');

    if (music.paused) {
      music.volume = 0.15;
      music.play();
    }
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
