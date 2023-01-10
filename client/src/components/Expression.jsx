import React from 'react';
import mathOut  from '../images/mathOut.png';

var Expression = function({Game}) {
  var evaluate = function() {
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

    if (Game.entities[0] && Game.entities[0].question === Game.answer) {
      Game.expression = '';
      Game.display = '';
      Game.entities.shift();
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
    } else {
      Game.expression = '';
      Game.display = '';
    }

    Game.buttonsPressed = [];
  };

  Game.evaluate = evaluate;

  return (
    <div className='mathOut v'>
      <img src={mathOut} className='mathOutImg' onClick={evaluate}></img>
      <div className='mathOutAnswer'>{Game.display}</div>
    </div>
  )
};

export default Expression;