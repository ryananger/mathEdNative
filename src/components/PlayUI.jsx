import React, {useState, useEffect} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import styles from '../styles.js';

import NumberButton from './NumberButton.jsx';
import DeadButton   from './DeadButton.jsx';
import MathButton   from './MathButton.jsx';
import Expression   from './Expression.jsx';

const PlayUI = function({Game, images, hidden}) {
  const {height, width} = useWindowDimensions();

  var renderButtons = function() {
    var buttons = [];
    var deadButtons = 0;

    for (var i = 0; i < 10; i++) {
      if (i < Game.numbers.length) {
        var button = (
          <NumberButton key={'button' + i} Game={Game} value={Game.numbers[i].value} id={Game.numbers[i].id}/>
        );

        buttons.push(button);
      } else {
        deadButtons++;

        var button = (
          <DeadButton key={'button' + i} Game={Game}/>
        );

        buttons.push(button);
      }
    }

    if (deadButtons === 9) {
      Game.getNumbers();
    }

    if (deadButtons === 10) {
      Game.score += 100;
      setTimeout(Game.getNumbers, 500);
    }

    return buttons;
  };

  if (hidden || Game.jupiterFalling) {
    return;
  }

  return (
    <View style={styles.play.view}>
      <Text style={{top: '-58%', left: 10, fontSize: 20, fontWeight: 'bold', color: 'rgb(70, 32, 21)'}}>
        {Game.score}
        {/*....{Game.spawnRate}....
        {Game.questionSpeed} */}
      </Text>

      <View style={styles.play.buttonContainer}>
        <View style={styles.play.mathButtons}>
          <MathButton Game={Game} type={0}/>
          <MathButton Game={Game} type={1}/>
          <MathButton Game={Game} type={2}/>
          <MathButton Game={Game} type={3}/>
          <Expression Game={Game}/>
        </View>
        <View style={styles.play.playButtons}>
          {renderButtons()}
        </View>
      </View>
    </View>
  )
}

export default PlayUI;



