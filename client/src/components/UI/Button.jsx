import React, {useState} from 'react';
import images from '../../util/loadImages.js';

var buttonImages = images.urls.buttonImages;
var selectImages = images.urls.selectImages;

var Button = function({Game, value, id}) {
  const [inExpression, setExpression] = useState(false);

  const [index, setIndex] = useState(Math.floor(Math.random() * 4));
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

    if (Game.buttonsPressed.indexOf(id) === -1) {
      Game.buttonsPressed.push(id);
    }
  };

  if (!inExpression && image !== buttonImages[index]) {
    setImage(buttonImages[index]);
  }

  if (inExpression && Game.buttonsPressed.length > 3) {
    if (Game.buttonsPressed[0] === id) {
      setExpression(false);
      setImage(buttonImages[index]);
      Game.buttonsPressed.shift();
    }
  }

  if (!inExpression && Game.buttonsPressed.indexOf(id) !== -1) {
    addToExpression();
  }

  return (
    <div className='button v'>
      <img className='buttonImg' src={image} onClick={addToExpression}></img>
      <div className='buttonTxt'>{value}</div>
    </div>
  )
};

export default Button;