import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, Text, Pressable} from 'react-native';
import styles from '../styles.js';
import sources from '../util/sourceImages.js';

var buttons = sources.mathImages;

const MathButton = function({Game, type}) {
  const [selected, setSelect] = useState(false);

  var index = type;
  var source = selected ? buttons[type + 4] : buttons[type];
  var style  = selected ? styles.play.mathSelectImg : styles.play.mathButtonImg;

  var toggle = function() {
    switch (index) {
      case 0:
        Game.mod = '+';
        break;
      case 1:
        Game.mod = '-';
        break;
      case 2:
        Game.mod = '×';
        break;
      case 3:
        Game.mod = '÷';
        break;
    };
  };

  useEffect(function() {
    switch (index) {
      case 0:
        if (Game.mod === '+') {
          setSelect(true);
        } else {
          setSelect(false);
        }
        break;
      case 1:
        if (Game.mod === '-') {
          setSelect(true);
        } else {
          setSelect(false);
        }
        break;
      case 2:
        if (Game.mod === '×') {
          setSelect(true);
        } else {
          setSelect(false);
        }
        break;
      case 3:
        if (Game.mod === '÷') {
          setSelect(true);
        } else {
          setSelect(false);
        }
        break;
    }
  }, [Game.mod]);

  return (
      <Pressable onPress={toggle} style={styles.play.mathButton}>
        <Image source={source} style={style}/>
      </Pressable>
  )
};

export default MathButton;



