import React, {useState} from 'react';
import menuBar  from '../../images/menuBar.png';

var MenuUI = function({Game, user}) {
  if (Game.playing) {
    return;
  }

  const [formOpen, openForm] = useState(false);

  var renderButtons = function() {
    var buttons = [];

    var playButton = (
      <div key={'playButton'} className='menuButton v'>
        <img className='menuButtonImg' src={menuBar} onClick={()=>{Game.playing = true}}></img>
        <div className='menuButtonTxt'>PLAY!</div>
      </div>
    )

    if (!user) {
      var loginButton = (
        <div key={'loginButton'} className='menuButton v'>
          <img className='menuButtonImg' src={menuBar} onClick={()=>{openForm(true)}}></img>
          <div className='menuButtonTxt'>SIGN IN</div>
        </div>
      )
    }

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

  var handleSubmit = function(e) {
    e.preventDefault();

    var form = document.getElementById('userForm');
    var username  = form.username.value;
    var sessionId = `${username}_session${(new Date()).valueOf()}`

    openForm(false);

    if (!username) {
      return;
    }

    document.cookie = `username=${username};`;
    document.cookie = `sessionId=${sessionId};`;
  };

  var renderForm = function() {
    if (!formOpen) {
      return;
    }

    var form = (
      <form className='form v' id='userForm'>
        <label className='formLabel v'>
          <h1>Username:</h1>
          <input type='text'   name='username' className='formInput'></input>
          <input type='submit' className='formSubmit' onClick={handleSubmit}/>
        </label>
      </form>
    )

    return form;
  };

  return (
    <div className='menuUi float v'>
      {renderForm()}
      <div></div>
      <div className='menuButtons v'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default MenuUI;



