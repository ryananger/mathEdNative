import React, {useEffect} from 'react';
import images from './loadImages.js';

var GameOver = function({Game, user}) {
  if (!Game.over) {
    return;
  }

  setTimeout(Game.init, 5000);

  return (
    <div className='gameOver float v'>
      game over
      <br/>
      <h3>keep at it!</h3>
    </div>
  )
}

export default GameOver;



