import React from 'react';
import Game   from '../../Game/Game.js';
import images from '../../util/loadImages.js';

const Expression = function() {
  return (
    <div className='mathOut v'>
      <img src={images.urls.mathOut[0]} className='mathOutImg' onClick={Game.evaluate}></img>
      <div className='mathOutAnswer'>{Game.display}</div>
    </div>
  )
};

export default Expression;