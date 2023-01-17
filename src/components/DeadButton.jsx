import React, {useState, useEffect} from 'react';
import {Image, ImageBackground, Text, Pressable} from 'react-native';
import styles from '../styles.js';
import sources from '../util/sourceImages.js';

var source = sources.blank[0];

const DeadButton = function({Game}) {
  return (
      <Pressable onPress={Game.getNumbers} style={styles.play.button}>
        <Image source={source} style={styles.play.buttonBg}/>
      </Pressable>
  )
};

export default DeadButton;



