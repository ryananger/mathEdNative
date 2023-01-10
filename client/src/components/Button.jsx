import React, {useState} from 'react';
import button1  from '../images/button1.png';
import button2  from '../images/button2.png';
import button3  from '../images/button3.png';
import button4  from '../images/button4.png';
import select1  from '../images/select1.png';
import select2  from '../images/select2.png';
import select3  from '../images/select3.png';
import select4  from '../images/select4.png';

var buttonImages = [button1, button2, button3, button4];
var selectImages = [select1, select2, select3, select4];

var index = Math.floor(Math.random() * 4);

var Button = function({Game, value, id}) {
  const [inExpression, setExpression] = useState(false);
  const [image, setImage] = useState(buttonImages[index]);

  if (!Game.expression && inExpression) {
    setExpression(false);
  }

  var addToExpression = function() {
    if (inExpression) {
      return;
    }

    if (Game.expression === '') {
      Game.expression += `${value}`;
    } else {
      Game.expression += ` ${Game.mod} ${value}`;

      if (Game.expression.length > 9) {
        Game.expression = Game.expression.slice(Game.expression.length - 9, Game.expression.length);
      }
    }

    if (Game.expression.length > 5) {
      Game.display = '(' + Game.expression.slice(0, 5) + ')' + Game.expression.slice(5);
    } else {
      Game.display = Game.expression;
    }

    setImage(selectImages[index]);
    setExpression(true);
    Game.buttonsPressed.push(id);
  };

  if (!inExpression && image !== buttonImages[index]) {
    setImage(buttonImages[index]);
  }

  if (inExpression && Game.buttonsPressed.length > 3) {
    console.log(id, Game.buttonsPressed[0]);

    if (Game.buttonsPressed[0] === id) {
      setExpression(false);
      setImage(buttonImages[index]);
      Game.buttonsPressed.shift();
    }
  }

  return (
    <div className='button v'>
      <img className='buttonImg' src={image} onClick={addToExpression}></img>
      <div className='buttonTxt'>{value}</div>
    </div>
  )
};

export default Button;