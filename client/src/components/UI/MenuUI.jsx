import React    from 'react';
import menuBar  from '../../images/menuBar.png';

var MenuUI = function({Game}) {
  if (Game.playing) {
    return;
  }

  var renderButtons = function() {
    var buttons = [];

    var playButton = (
      <div key={'playButton'} className='menuButton v'>
        <img className='menuButtonImg' src={menuBar} onClick={()=>{Game.playing = true}}></img>
        <div className='menuButtonTxt'>PLAY!</div>
      </div>
    )

    var loginButton = (
      <div key={'loginButton'} className='menuButton v'>
        <img className='menuButtonImg' src={menuBar} onClick={()=>{}}></img>
        <div className='menuButtonTxt'>SIGN IN</div>
      </div>
    )

    var leaderboardButton = (
      <div key={'leaderboardButton'} className='menuButton v'>
        <img className='menuButtonImg' src={menuBar} onClick={()=>{}}></img>
        <div className='menuButtonTxt'>LEADERBOARD</div>
      </div>
    )

    buttons.push(playButton);
    buttons.push(loginButton);
    buttons.push(leaderboardButton);

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



