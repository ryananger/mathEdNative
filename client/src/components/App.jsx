import React from 'react';
import {useEffect, useState} from 'react';

import Game from '../Game/Game.js';
import UI from './UI.jsx';
import './style.css';

var App = function() {
  const [updates, updateReact] = useState(0);
  const updateInterval = 100;

  const reactLoop = function() {
    setTimeout(function() {
      updateReact(updates + 1);
    }, updateInterval);
  };

  useEffect(reactLoop, [updates]);
  useEffect(Game.gameLoop, []);

  return (
    <div className='play v'>
      <UI Game={Game} />
      <canvas id='canvas' className='canvas float' width='800' height='1420'/>
    </div>
  )
}

export default App;

