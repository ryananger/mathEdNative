import React from 'react';
import {useEffect, useState} from 'react';

import images from './loadImages.js';

import Game from '../Game/Game.js';
import GameOver from './GameOver.jsx';
import MenuUI from './UI/MenuUI.jsx';
import PlayUI from './UI/PlayUI.jsx';
import cookieParse from './cookieParse.js';

import './style.css';

var App = function() {
  const [updates, updateReact] = useState(0);
  const updateInterval = 50;

  const [view, setView] = useState('menu');
  Game.setView = setView;

  const cookie = cookieParse();
  const user   = function() {
    if (cookie.user) {
      return {
        name: cookie.user,
        highScore: cookie.highScore
      }
    } else {
      return null;
    }
  }();

  const reactLoop = function() {
    if (!Game.playing) {
      return;
    }

    setTimeout(function() {
      updateReact(updates + 1);
    }, updateInterval);
  };

  const renderView = function() {
    if (view === 'menu') {
      return <MenuUI Game={Game} user={user}/>;
    }

    if (view === 'play' && Game.playing) {
      return <PlayUI Game={Game} user={user}/>;
    }

    if (view === 'gameover') {
      return <GameOver Game={Game} user={user}/>;
    }
  };

  useEffect(reactLoop, [updates, Game.playing]);
  useEffect(Game.gameLoop, []);

  return (
    <div className='play v'>
      {renderView()}
      <canvas id='canvas' className='canvas float' width='800' height='1420'/>
    </div>
  )
}

export default App;

