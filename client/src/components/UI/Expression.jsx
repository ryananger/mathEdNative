import React from 'react';
import images from '../loadImages.js';

var Expression = function({Game}) {
  return (
    <div className='mathOut v'>
      <img src={images.mathOut[0]} className='mathOutImg' onClick={Game.evaluate}></img>
      <div className='mathOutAnswer'>{Game.display}</div>
    </div>
  )
};

export default Expression;