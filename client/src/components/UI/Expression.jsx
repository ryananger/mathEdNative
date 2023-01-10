import React from 'react';
import mathOut  from '../../images/mathOut.png';

var Expression = function({Game}) {
  return (
    <div className='mathOut v'>
      <img src={mathOut} className='mathOutImg' onClick={Game.evaluate}></img>
      <div className='mathOutAnswer'>{Game.display}</div>
    </div>
  )
};

export default Expression;