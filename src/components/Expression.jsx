import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, Text, Pressable} from 'react-native';
import styles from '../styles.js';
import sources from '../util/sourceImages.js';

var expression = sources.mathOut[0];

const Expression = function({Game}) {
  return (
      <Pressable onPress={Game.evaluate} style={styles.play.expression}>
        <ImageBackground source={expression} style={styles.play.expressionImg}>
          <Text style={styles.play.expressionText}>{Game.display}</Text>
        </ImageBackground>
      </Pressable>
  )
};

export default Expression;



