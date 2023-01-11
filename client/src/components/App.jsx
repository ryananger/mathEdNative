import React from 'react';
import {useEffect, useState} from 'react';

import images from './loadImages.js';

import Game from '../Game/Game.js';
import GameOver from './GameOver.jsx';
import MenuUI from './UI/MenuUI.jsx';
import PlayUI from './UI/PlayUI.jsx';

import './style.css';

var user;

if (!document.cookie) {
  user = null;
} else {
  user = document.cookie.split()[0].slice(8);
  console.log(user);
}

var App = function() {
  const [updates, updateReact] = useState(0);
  const updateInterval = 25;

  const reactLoop = function() {
    setTimeout(function() {
      updateReact(updates + 1);
    }, updateInterval);
  };

  useEffect(reactLoop, [updates]);
  useEffect(Game.gameLoop, []);

  return (
    <div className='play v'>
      <MenuUI   Game={Game} user={user}/>
      <PlayUI   Game={Game} user={user}/>
      <GameOver Game={Game} user={user}/>
      <canvas id='canvas' className='canvas float' width='800' height='1420'/>
    </div>
  )
}

export default App;

