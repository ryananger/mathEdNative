import React from 'react';
import button1  from '../images/button1.png';
import button2  from '../images/button2.png';
import button3  from '../images/button3.png';
import button4  from '../images/button4.png';

var buttonImages = [button1, button2, button3, button4];
var image = buttonImages[Math.floor(Math.random() * 4)];

var Button = function({Game, value}) {

  var addToExpression = function() {
    if (Game.expression === '') {
      Game.expression += `${value}`;
    } else {
      Game.expression += ` ${Game.mod} ${value}`;

      if (Game.expression.length > 9) {
        Game.expression = Game.expression.slice(Game.expression.length - 9, Game.expression.length);
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