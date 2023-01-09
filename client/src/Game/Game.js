import input from './input.js';
import Entity from './Entity.js';
import Question from './Question.js';

var renderTimeout;

var Game = {
  view: 'home',
  fps: 60,
  tick: 0,
  playing: true,

  entities: [],
  numbers: function() {
    var num = [];

    for (var i = 0; i < 10; i++) {
      num.push(Math.floor(Math.random() * 3) + 1);
    }

    return num;
  }(),

  togglePause: function() {
    Game.playing = !Game.playing;
  },
  update: function(ctx) {
    if (!Game.playing) {
      return;
    }

    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;

    if (Game.tick % 500 === 0) {
      var question = Question(100 + Math.floor(Math.random() * (cw - 200)), 50);

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
  }
};

window.Game = Game;

export default Game;