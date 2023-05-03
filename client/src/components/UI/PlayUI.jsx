import React, {useState} from 'react';
import Game        from '../../Game/Game.js';

import Button      from './Button.jsx';
import DeadButton  from './DeadButton.jsx';
import MathButton  from './MathButton.jsx';
import Expression  from './Expression.jsx';

const PlayUI = function({user}) {
  const [infoOpen,  openInfo] = useState(true);

  var renderButtons = function() {
    var buttons = [];

    Game.deadButtons = 0;

    for (var i = 0; i < 10; i++) {
      if (i < Game.numbers.length) {
        var pressed = Game.buttonsPressed.indexOf(Game.numbers[i].id) !== -1;

        var button = (
          <Button key={'button' + i} pressed={pressed} value={Game.numbers[i].value} id={Game.numbers[i].id}/>
        );

        buttons.push(button);
      } else {
        Game.deadButtons++;

        var button = (
          <DeadButton key={'deadButton' + i}/>
        );

        buttons.push(button);
      }
    }

    if (Game.deadButtons === 9) {
      Game.getNumbers();
    }

    if (Game.deadButtons === 10) {
      Game.score += 100;
      setTimeout(Game.getNumbers, 500);
    }

    return buttons;
  };

  var renderHighscore = function() {
    if (user) {
      return user.highScore;
    } else {
      return '';
    }
  };

  var renderInfo = function() {
    if (!infoOpen) {
      return;
    }

    var info = (
      <div className='info v'>
        Do math to stop the numbers from falling!
        <br/><br/>
        Click on the buttons or use numpad, then click on the expression or press Enter to fire.
        <br/><br/>
        <small>Press Spacebar to refill your numbers.</small>
        <br/>
        <small>Press M to mute, Escape to pause.</small>
      </div>
    );

    setTimeout(function() {
      openInfo(false);
    }, 8000);

    return info;
  };

  return (
    <div className='playUi float v'>
      {renderInfo()}
      <div className='score h'>
        <div>
          {Game.score}
          {/* <br/>
          {Game.questionSpeed}, {Game.spawnRate} */}
        </div>
        <div>
          {renderHighscore()}
        </div>
      </div>
      <div className='uiHead h'>
        <div className='mathButtons h'>
          <MathButton Game={Game} type={0}/>
          <MathButton Game={Game} type={1}/>
          <MathButton Game={Game} type={2}/>
          <MathButton Game={Game} type={3}/>
        </div>
        <Expression  Game={Game}/>
      </div>
      <div className='buttons h'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default PlayUI;



