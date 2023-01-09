import input from './input.js';
import Entity from './Entity.js';

var renderTimeout;

var Game = {
  view: 'home',
  fps: 60,
  tick: 0,
  playing: false,

  entities: [],
  points:   [],

  togglePause: function() {
    Game.playing = !Game.playing;
  },
  update: function(ctx) {
    if (!Game.playing) {
      return;
    }

    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;

    ctx.clearRect(0, 0, cw, ch);

    Game.entities.map(function(entity) {
      entity.update(Game);
      entity.draw(Game, ctx);
    });
  },
  gameLoop: function() {
    var ctx = document.getElementById('canvas').getContext('2d');

    var animId;
    var render = function() {
      clearTimeout(renderTimeout);
      Game.tick++;
      Game.update(ctx);

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

export default Game;