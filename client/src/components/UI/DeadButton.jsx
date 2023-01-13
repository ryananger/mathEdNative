import React, {useState} from 'react';
import images from '../../util/loadImages.js';

var DeadButton = function({Game}) {
  return (
    <div className='button v'>
      <img className='buttonImg' src={images.urls.blank[0]} onClick={Game.getNumbers}></img>
    </div>
  )
};

export default DeadButton;