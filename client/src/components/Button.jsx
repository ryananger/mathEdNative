import React from 'react';
import button1  from '../images/button1.png';
import button2  from '../images/button2.png';
import button3  from '../images/button3.png';
import button4  from '../images/button4.png';

var buttonImages = [button1, button2, button3, button4];
var image = buttonImages[Math.floor(Math.random() * 4)];

var Button = function({Game, value}) {

  var addToExpression = function() {
    if (Game.answer === '') {
      Game.answer += `${value}`;
    } else {
      Game.answer += ` ${Game.mod} ${value}`;

      if (Game.answer.length > 9) {
        Game.answer = Game.answer.slice(Game.answer.length - 9, Game.answer.length);
      }
    }
  };

  return (
    <div className='button v'>
      <img className='buttonImg' src={image} onClick={addToExpression}></img>
      <div className='buttonTxt'>{value}</div>
    </div>
  )
};

export default Button;