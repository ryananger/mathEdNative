import React from 'react';
import mathOut  from '../images/mathOut.png';

var Expression = function({Game}) {

  return (
    <div className='mathOut v'>
      <img src={mathOut} className='mathOutImg'></img>
      <div className='mathOutAnswer'>{Game.answer}</div>
    </div>
  )
};

export default Expression;