import React, {useEffect, useState} from 'react';
import images       from '../util/loadImages.js';
import cookieHandle from '../util/cookieHandle.js';

import Game     from '../Game/Game.js';
import GameOver from './GameOver.jsx';
import MenuUI   from './UI/MenuUI.jsx';
import PlayUI   from './UI/PlayUI.jsx';

const App = function() {
  const [updates, updateReact] = useState(0);
  const [view, setView] = useState('menu');

  const user = cookieHandle.user();
  const updateInterval = 50;

  Game.setView = setView;

  const reactLoop = function() {
    if (!Game.playing) {
      return;
    }

    setTimeout(function() {
      updateReact(updates + 1);
    }, updateInterval);
  };

  const renderView = function() {
    switch (view) {
      case 'menu':
        return <MenuUI Game={Game} user={user}/>;
      case 'play':
        if (!Game.playing) {
          return;
        }

        return <PlayUI Game={Game} user={user}/>;
      case 'gameover':
        return <GameOver Game={Game} user={user}/>;
    }
  };

  useEffect(reactLoop, [updates, Game.playing]);
  useEffect(Game.gameLoop, []);

  return (
    <div id='play' className='play v'>
      <canvas id='canvas' className='canvas float' width='800' height='1420'/>

      {renderView()}
    </div>
  )
}

export default App;

