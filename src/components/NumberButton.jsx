import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, Text, Pressable} from 'react-native';
import styles from '../styles.js';
import sources from '../util/sourceImages.js';

var buttons = sources.buttonImages;
var select  = sources.selectImages;

const NumberButton = function({Game, value, id}) {
  const [inExpression, setExpression] = useState(false);
  const [selected, setSelect] = useState(false);
  const [index, setIndex ] = useState(Math.floor(Math.random() * 4));

  var source = selected ? select[index] : buttons[index];

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

    console.log(Game.display);

    setSelect(true);
    setExpression(true);

    if (Game.buttonsPressed.indexOf(id) === -1) {
      Game.buttonsPressed.push(id);
    }
  };

  if (!inExpression && selected) {
    setSelect(false);
  }

  if (inExpression && Game.buttonsPressed.length > 3) {
    if (Game.buttonsPressed[0] === id) {
      setExpression(false);
      setSelect(false);
      Game.buttonsPressed.shift();
    }
  }

  // var toggle = function() {
  //   Game.expression += JSON.stringify(value);
  //   console.log(Game.expression)
  //   setSelect(!selected);
  // };

  return (
      <Pressable onPress={addToExpression} style={styles.play.button}>
        <ImageBackground source={source} style={styles.play.buttonBg}>
          <Text style={styles.play.buttonText}>{value}</Text>
        </ImageBackground>
      </Pressable>
  )
};

export default NumberButton;



