import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from '../styles.js';

import MenuButton from './MenuButton.jsx';

const MenuUI = function({Game, images, hidden}) {
  var playGame = function() {
    Game.setView('play');
    Game.init();
    Game.playing = true;
  };

  if (hidden) {
    return;
  }

  return (
    <View style={styles.menu.view}>
      <View style={styles.vCenter(undefined, '33%')}>
        <MenuButton Game={Game} onPress={playGame} text={'PLAY'}/>
      </View>
    </View>
  )
}

export default MenuUI;



