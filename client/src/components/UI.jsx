import React    from 'react';

import Button      from './Button.jsx';
import MathButtons from './MathButtons.jsx';
import Expression  from './Expression.jsx';

var UI = function({Game}) {
  var renderButtons = function() {
    var buttons = [];

    for (var i = 0; i < 10; i++) {
      var button = (
        <Button key={'button' + i} Game={Game} value={Game.numbers[i]}/>
      );

      buttons.push(button);
    }

    return buttons;
  };

  return (
    <div className='ui float v'>
      <div className='uiHead h'>
        <MathButtons Game={Game}/>
        <Expression  Game={Game}/>
      </div>
      <div className='buttons h'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default UI;



