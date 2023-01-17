import {Asset} from 'expo-asset';
import Image from 'react-native-canvas';

import Entity from './Entity.js';
import Question from './Question.js';
import Pulse from './Pulse.js';
import Jupiter from './Jupiter.js';

var buttonId = 0;
var renderTimeout;
var Game = {
  init: function() {
    Game.fps = 60;
    Game.tick = 0;

    Game.playing = false;
    Game.paused  = false;
    Game.over    = false;

    Game.score = 0;
    Game.hp = 0;

    Game.expression = '';
    Game.display = '';
    Game.answer = null;
    Game.mod = '+';

    Game.buttonsPressed = [];
    Game.deadButtons = 0;

    Game.entities = [];
    Game.numbers = [];
    Game.in = false;

    Game.questionSpeed = 2;
    Game.spawnRate = 400;

    Game.pulse = Pulse();
    Game.jupiter = Jupiter(0, -1500);
    Game.jupiterFalling = false;

    Game.getNumbers();
    // Game.leaderBoard;

    // ax.getLeaderboard(Game);
  },
  togglePause: function() {
    Game.playing = !Game.playing;
  },
  update: function(ctx) {
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var bgs = Game.images.bgImages;

    var background = bgs[Game.hp] ? bgs[Game.hp].image : bgs[12].image;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(background, 0, 0, cw, ch);

    var text = '';

    ctx.fillText(text, 10, 100);

    if (Game.tick > 1000 && Game.tick % 50 === 0 && !Game.playing) {
      if (Game.in) {
        Game.hp--;
      } else {
        Game.hp++;
      }

      if (Game.hp > 15) {
        Game.in = true;
      }

      if (Game.hp === 0) {
        Game.in = false;
      }
    }

    if (Game.hp > 13 && Game.playing) {
      Game.jupiter.crash(Game);
      Game.jupiter.update(Game);
      Game.jupiter.draw(Game, ctx);
      Game.jupiterFalling = true;
    }

    if (!Game.playing || Game.paused || Game.over) {
      return;
    }

    if (Game.score >= 0) {
      Game.questionSpeed = 1 + (Game.score/5000);
    }

    var baseRate = 400;
    var mod = Math.floor(Game.score/1000);

    Game.spawnRate = baseRate - (mod*10);

    Game.pulse.update(Game);
    Game.pulse.draw(Game, ctx);

    if (Game.entities.length === 0) {
      var question = Question(100 + Math.floor(Math.random() * (cw - 200)), 0);

      Game.entities.unshift(question);

      Game.tick -= (Game.tick % Game.spawnRate) - 1;
    }

    if (Game.tick % Game.spawnRate === 0) {
      var question = Question(100 + Math.floor(Math.random() * (cw - 200)), 0);

      Game.entities.unshift(question);
    }

    Game.entities.map(function(entity) {
      entity.update(Game);
      entity.draw(Game, ctx);
    });
  },
  gameLoop: function(ctx, images) {
    if (!ctx || !images.bgImages) {
      return;
    }

    Game.images = images;

    ctx.font = '24px sans-serif';
    ctx.fillStyle = 'rgb(70, 32, 21)';

    var animId;
    var render = function() {
      clearTimeout(renderTimeout);
      Game.update(ctx);
      Game.tick++;

      requestAnimationFrame(render);

      renderTimeout = setTimeout(function() {
        // animId = ;
      }, 1000/Game.fps);
    };

    render();

    return function() {
      cancelAnimationFrame(animId);
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
    Game.pulse.pulsing = true;
    setTimeout(()=>{Game.entities.pop()}, 150);
    Game.score += 100;

    if (Game.buttonsPressed.length === 3) {
      Game.score += 100;
    }

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

Game.init();

export default Game;