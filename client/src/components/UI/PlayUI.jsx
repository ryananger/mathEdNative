import React    from 'react';

import Button      from './Button.jsx';
import DeadButton  from './DeadButton.jsx';
import MathButtons from './MathButtons.jsx';
import Expression  from './Expression.jsx';

var PlayUI = function({Game, user}) {
  var renderButtons = function() {
    var buttons = [];

    Game.deadButtons = 0;

    for (var i = 0; i < 10; i++) {
      if (i < Game.numbers.length) {
        var button = (
          <Button key={'button' + i} Game={Game} value={Game.numbers[i].value} id={Game.numbers[i].id}/>
        );

        buttons.push(button);
      } else {
        Game.deadButtons++;

        var button = (
          <DeadButton key={'deadButton' + i} Game={Game}/>
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
      return Game.score;
    }
  };

  return (
    <div className='playUi float v'>
      <div className='score h'>
        <div>
          {Game.score}
        </div>
        <div>
          {renderHighscore()}
        </div>
      </div>
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

export default PlayUI;



