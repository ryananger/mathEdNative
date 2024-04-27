import React, {useEffect} from 'react';
import Game   from '../Game/Game.js';

const GameOver = function({setView, user}) {
  var mod = '';

  if (user) {
    if (Game.score > user.highScore) {
      mod = 'New HIGH ';

      document.cookie = `highScore=${Game.score}`;
    }
  }

  setTimeout(function() {
    setView('menu');
    Game.init();
  }, 5000);

  return (
    <div className='gameOver float v'>
      game over
      <br/>
      <h3>{mod}Score: {Game.score}</h3>
      <h3>keep at it!</h3>
    </div>
  )
}

export default GameOver;



