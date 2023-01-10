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

    if (Game.entities[0].question === Game.answer, Game.answer) {
      Game.expression = '';
      Game.entities.shift();
      Game.score += 100;
    }
  };

  return (
    <div className='mathOut v'>
      <img src={mathOut} className='mathOutImg' onClick={evaluate}></img>
      <div className='mathOutAnswer'>{Game.expression}</div>
    </div>
  )
};

export default Expression;