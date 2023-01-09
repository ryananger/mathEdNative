import React    from 'react';
import button1  from '../images/button1.png';
import button2  from '../images/button2.png';
import button3  from '../images/button3.png';
import button4  from '../images/button4.png';
import plus     from '../images/plus.png';
import minus    from '../images/minus.png';
import multiply from '../images/multiply.png';
import divide   from '../images/divide.png';
import mathOut  from '../images/mathOut.png';

var buttonImages = [button1, button2, button3, button4];

var UI = function({Game}) {
  var renderButtons = function() {
    var buttons = [];

    for (var i = 0; i < 10; i++) {
      // get values from Game

      var button = (
        <div key={'button' + i} className='button v'>
          <img className='buttonImg' src={button1}></img>
          <div className='buttonTxt'>{Game.numbers[i]}</div>
        </div>
      );

      buttons.push(button);
    }

    return buttons;
  };

  return (
    <div className='ui float v'>
      <div className='uiHead h'>
        <div className='mathButtons h'>
          <img src={plus}     className='mathButton v'></img>
          <img src={minus}    className='mathButton v'></img>
          <img src={multiply} className='mathButton v'></img>
          <img src={divide}   className='mathButton v'></img>
        </div>
        <div className='mathOut'>
          <img src={mathOut}  className='mathOutImg'></img>
        </div>
      </div>
      <div className='buttons h'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default UI;



