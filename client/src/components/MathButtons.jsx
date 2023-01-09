import React from 'react';

import plus     from '../images/plus.png';
import minus    from '../images/minus.png';
import multiply from '../images/multiply.png';
import divide   from '../images/divide.png';

var MathButtons = function({Game}) {

  var changeMod = function(e) {
    var mod = e.target.getAttribute('value');

    console.log(Game.mod, mod)
    switch (mod) {
      case 'plus':
        Game.mod = '+';
        break;
      case 'minus':
        Game.mod = '-';
        break;
      case 'multiply':
        Game.mod = '×';
        break;
      case 'divide':
        Game.mod = '÷';
        break;
    }
  };

  return (
    <div className='mathButtons h'>
      <img src={plus}     value='plus'     className='mathButton v' onClick={changeMod}></img>
      <img src={minus}    value='minus'    className='mathButton v' onClick={changeMod}></img>
      <img src={multiply} value='multiply' className='mathButton v' onClick={changeMod}></img>
      <img src={divide}   value='divide'   className='mathButton v' onClick={changeMod}></img>
    </div>
  )
};

export default MathButtons;