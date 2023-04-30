import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, Text, Pressable} from 'react-native';
import styles from '../styles.js';
import sources from '../util/sourceImages.js';

var buttons = sources.mathImages;

const MathButton = function({Game, type}) {
  const [selected, setSelect] = useState(false);

  var index = type;
  var src1 = buttons[type];
  var src2 = buttons[type + 4];

  var thisMod = function() {
    switch (type) {
      case 0:
        return '+';
      case 1:
        return '-';
      case 2:
        return '×';
      case 3:
        return '÷';
    };
  }();

  var toggle = function() {
    Game.mod = thisMod;
  };

  useEffect(function() {
    setSelect(Game.mod === thisMod);
  }, [Game.mod]);

  return (
    <Pressable onPress={toggle} style={styles.play.mathButton}>
      <Image source={src1} style={selected ? {height: '0%', width: '0%'} : styles.play.mathButtonImg}/>
      <Image source={src2} style={selected ? styles.play.mathSelectImg : {height: '0%', width: '0%'}}/>
    </Pressable>
  )
};

export default MathButton;



