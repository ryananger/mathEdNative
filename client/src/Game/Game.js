import input from './input.js';
import Entity from './Entity.js';
import Question from './Question.js';

var renderTimeout;
var buttonId = 0;

var Game = {
  view: 'home',
  fps: 60,
  tick: 0,
  playing: true,
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

    if (Game.tick % 250 === 0) {
      var question = Question(100 + Math.floor(Math.random() * (cw - 200)), -50);

      Game.entities.push(question);
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
  }
};

Game.getNumbers();

window.Game = Game;

export default Game;