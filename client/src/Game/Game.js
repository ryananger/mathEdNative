import ax     from '../util/ax.js';
import images from '../util/loadImages.js';
import audio  from '../util/audio.js';
import input  from './input.js';

import Question from './Question.js';
import Pulse    from './Pulse.js';
import Jupiter  from './Jupiter.js';
import Robot    from './Robot.js';
import Chicken  from './Chicken.js';

var bgs = images.loaded.bgImages;

var renderTimeout;
var buttonId = 0;
var baseRate = 250;

var Game = {
  init: function() {
    Game.audio = audio;
    Game.tick = 0;

    Game.playing = false;
    Game.paused =  false;
    Game.over =    false;

    Game.score = 0;
    Game.hp = 0;

    Game.expression = '';
    Game.display = '';
    Game.answer = null;
    Game.mod = '+';

    Game.buttonsPressed = [];
    Game.deadButtons = 0;

    Game.questions = [];
    Game.numbers = [];

    Game.questionSpeed = 2;

    Game.pulse = Pulse();
    Game.robot = Robot();
    Game.jupiter = Jupiter(0, -1500);
    Game.jupiterFalling = false;

    Game.chickens = [];

    for (var i = 0; i < 4; i++) {
      Game.chickens.push(Chicken(i * 15));
    }

    Game.getNumbers();
    Game.leaderBoard;

    ax.getLeaderboard(Game);
  },
  togglePause: function() {
    Game.playing = !Game.playing;
  },
  update: function(ctx) {
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;

    Game.width  = cw;
    Game.height = ch;

    var background = bgs[Game.hp] || bgs[12];

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(background, 0, 0, cw, ch);

    bgEffect();

    Game.robot.update(Game);
    Game.robot.draw(Game, ctx);

    Game.chickens.map(function(chicken) {
      chicken.update(Game);
      chicken.draw(Game, ctx);
    });

    jupiterFalls(ctx);

    if (!Game.playing || Game.paused || Game.over) {
      return;
    }

    adjustDifficulty();

    Game.pulse.update(Game);
    Game.pulse.draw(Game, ctx);

    if (Game.questions.length === 0 || Game.tick % Game.spawnRate === 0) {
      if (!Game.questions[0]) {
        Game.tick = Game.spawnRate/2;
      }

      spawnQuestion(cw);
    }

    Game.questions.map(function(question) {
      question.update(Game);
      question.draw(Game, ctx);
    });
  },
  gameLoop: function() {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.font = "40px Jost";
    ctx.fillStyle = 'rgb(70, 32, 21)';

    var animId;
    var render = function() {
      window.cancelAnimationFrame(animId);

      Game.update(ctx);
      Game.tick++;

      animId = window.requestAnimationFrame(render);
    };

    render();
  },

  getNumbers: function(replace) {
    var num = [];
    var n = 10 - Game.numbers.length;

    if (replace && n === 0) {
      Game.numbers = [];
      n = 10;
    }

    for (var i = 0; i < n; i++) {
      num.push({value: Math.floor(Math.random() * 3) + 1, id: buttonId++});
    }

    Game.numbers = Game.numbers.concat(num);
  },
  evaluate: function() {
    if (Game.questions.length === 0) {
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

    var last = Game.questions[Game.questions.length - 1];

    if (last.question === Game.answer) {
      Game.correctAnswer();
      Game.playAudio(Game.audio.pulse);
    } else {
      Game.playAudio(Game.audio.droid2);
    }

    Game.expression = '';
    Game.display = '';
    Game.buttonsPressed = [];
  },
  correctAnswer: function() {
    Game.pulse.pulsing = true;
    setTimeout(()=>{Game.questions.pop()}, 100);
    Game.score += 100;

    if (Game.buttonsPressed.length === 3) {
      Game.score += 100;
    }

    if (Game.buttonsPressed.length >= Game.numbers.length) {
      Game.numbers = [];
      Game.playAudio(Game.audio.bigScore);
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
  },
  playAudio: function(audio) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
};

var bgEffect = function() {
  if (Game.tick > 250 && Game.tick % 10 === 0 && !Game.playing) {
    if (Game.in && Game.hp > 0) {
      Game.hp--;
    } else {
      Game.hp++;
    }

    if (Game.hp > 15) {
      Game.in = true;
    }

    if (Game.hp === 0) {
      Game.in = false;
      Game.tick = 0;
    }
  }
};

var jupiterFalls = function(ctx) {
  if (Game.hp > 13 && Game.playing) {
    Game.jupiterFalling = true;

    Game.jupiter.crash(Game);
    Game.jupiter.update(Game);
    Game.jupiter.draw(Game, ctx);
  }
};

var adjustDifficulty = function() {
  if (Game.score >= 0) {
    Game.questionSpeed = 4 + (Game.score/4000);
  }

  var mod = Math.floor(Game.score/175);

  Game.spawnRate = baseRate - mod;
};

var spawnQuestion = function(cw) {
  var question = Question(50 + Math.floor(Math.random() * (cw - 100)), -50);

  Game.questions.unshift(question);
};

Game.init();

export default Game;