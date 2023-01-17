import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, Pressable} from 'react-native';
import styles from '../styles.js';
import sources from '../util/sourceImages.js';

var menuBar = sources.menuBar[0];

const MenuButton = function({Game, onPress, text}) {
  return (
      <Pressable onPress={onPress} style={styles.menu.button}>
        <ImageBackground source={menuBar} style={styles.menu.buttonBg}>
          <Text style={styles.menu.buttonText}>{text}</Text>
        </ImageBackground>
      </Pressable>
  )
};

export default MenuButton;



