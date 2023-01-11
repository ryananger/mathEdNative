import React, {useEffect} from 'react';
import images from './loadImages.js';

var GameOver = function({Game, user}) {
  if (user) {
    if (Game.score > user.highScore) {
      document.cookie = `highScore=${Game.score}`;
    }
  }

  setTimeout(function() {
    Game.init();
    Game.setView('menu');
  }, 5000);

  return (
    <div className='gameOver float v'>
      game over
      <br/>
      <h3>Score: {Game.score}</h3>
      <h3>keep at it!</h3>
    </div>
  )
}

export default GameOver;



