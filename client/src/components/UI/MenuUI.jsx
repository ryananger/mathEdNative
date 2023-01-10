import React    from 'react';
import menuBar  from '../../images/menuBar.png';

var MenuUI = function({Game}) {
  var renderButtons = function() {
    var buttons = [];

    for (var i = 0; i < 3; i++) {
      var button = (
        <div key={'menuButton' + i} className='menuButton h'>
          <img className='menuButtonImg' src={menuBar}></img>
        </div>
      )

      buttons.push(button);
    }

    return buttons;
  };

  return (
    <div className='ui float v'>
      <div className='uiHead h'>
      </div>
      <div className='menuButtons v'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default MenuUI;



