import input from './input.js';
import Entity from './Entity.js';
import Question from './Question.js';

var renderTimeout;
var buttonId = 0;

var Game = {
  view: 'home',
  fps: 60,
  tick: 0,
  playing: false,
  score: 0,
  expression: '',
  display: '',
  buttonsPressed: [],
  deadButtons: 0,
  answer: null,
  mod: '+',

  entities: [],
  numbers: [],

  togglePause: function() {
    Game.playing = !Game.playing;
  },
  update: function(ctx) {
    if (!Game.playing) {
      return;
    }

    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;

    if (Game.tick % 150 === 0) {
      var question = Question(100 + Math.floor(Math.random() * (cw - 200)), -50);

      Game.entities.unshift(question);
    }

    ctx.clearRect(0, 0, cw, ch);

    Game.entities.map(function(entity) {
      entity.update(Game);
      entity.draw(Game, ctx);
    });
  },
  gameLoop: function() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.font = "72px Jost";

    var animId;
    var render = function() {
      clearTimeout(renderTimeout);
      Game.update(ctx);
      Game.tick++;

      renderTimeout = setTimeout(function() {
        animId = window.requestAnimationFrame(render);
      }, 1000/Game.fps);
    };

    render();

    return function() {
      window.cancelAnimationFrame(animId);
    };
  },


  getNumbers: function() {
    var num = [];
    var n = 10 - Game.numbers.length;

    for (var i = 0; i < n; i++) {
      num.push({value: Math.floor(Math.random() * 3) + 1, id: buttonId++});
    }

    Game.numbers = Game.numbers.concat(num);
  },
  evaluate: function() {
    if (Game.entities.length === 0) {
      return;
    }

    var split = Game.expression.split(' ');

    if (split.length === 3) {
      var a = Number(split[0]);
      var b = Number(split[2]);
      var mod = split[1];

      switch (mod) {
        case '+':
          Game.answer = a + b;
          break;
        case '-':
          Game.answer = a - b;
          break;
        case '×':
          Game.answer = a * b;
          break;
        case '÷':
          Game.answer = a / b;
          break;
      }
    } else {
      var a = Number(split[0]);
      var b = Number(split[2]);
      var c = Number(split[4]);
      var mod1 = split[1];
      var mod2 = split[3];

      var result = null;

      switch (mod1) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '×':
          result = a * b;
          break;
        case '÷':
          result = a / b;
          break;
      }

      switch (mod2) {
        case '+':
          Game.answer = result + c;
          break;
        case '-':
          Game.answer = result - c;
          break;
        case '×':
          Game.answer = result * c;
          break;
        case '÷':
          Game.answer = result / c;
          break;
      }
    }

    var last = Game.entities[Game.entities.length - 1];

    if (last.question === Game.answer) {
      Game.correctAnswer();
    }

    Game.expression = '';
    Game.display = '';
    Game.buttonsPressed = [];
  },
  correctAnswer: function() {
    Game.entities.pop();
    Game.score += 50 * Game.buttonsPressed.length;

    if (Game.buttonsPressed.length >= Game.numbers.length) {
      Game.numbers = [];
    } else {
      Game.buttonsPressed.map(function(id) {
        var index;

        Game.numbers.map(function(entry, i) {
          if (entry.id === id) {
            index = i;
          }
        })

        var front = Game.numbers.slice(0, index);
        var back  = Game.numbers.slice(index + 1);

        Game.numbers = front.concat(back);
      });
    }
  }
};

Game.getNumbers();

window.Game = Game;

export default Game;