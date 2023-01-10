import React, {useState} from 'react';
import deadImage  from '../../images/deadButton.png';

var DeadButton = function({Game}) {
  return (
    <div className='button v'>
      <img className='buttonImg' src={deadImage} onClick={Game.getNumbers}></img>
    </div>
  )
};

export default DeadButton;