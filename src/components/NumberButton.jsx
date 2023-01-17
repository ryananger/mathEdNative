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

    Game.handleExpression(value);

    setSelect(true);
    setExpression(true);

    if (Game.buttonsPressed.indexOf(id) === -1) {
      Game.buttonsPressed.push(id);
    }
  };

  if (!inExpression && selected) {
    setSelect(false);
  }

  if (inExpression &&
      Game.buttonsPressed.length > 3 &&
      Game.buttonsPressed[0] === id) {

        setExpression(false);
        setSelect(false);
        Game.buttonsPressed.shift();
  }

  return (
      <Pressable onPress={addToExpression} style={styles.play.button}>
        <ImageBackground source={source} style={styles.play.buttonBg}>
          <Text style={styles.play.buttonText}>{value}</Text>
        </ImageBackground>
      </Pressable>
  )
};

export default NumberButton;



