import React, {useState, useEffect} from 'react';
import Game   from '../../Game/Game.js';
import images from '../../util/loadImages.js';

import Loading     from './Loading.jsx';

const menuBar = images.urls.menuBar[0];

const MenuUI = function({setView, user}) {
  const [formOpen,  openForm]  = useState(false);
  const [boardOpen, openBoard] = useState(false);

  var playGame = function() {
    setView('play');

    Game.playing = true;
    Game.hp = 0;
  };

  var renderButtons = function() {
    var buttons = [];

    var playButton = (
      <div key={'playButton'} className='menuButton v'>
        <img className='menuButtonImg' src={menuBar} onClick={playGame}></img>
        <div className='menuButtonTxt'>PLAY!</div>
      </div>
    )

    if (!user) {
      var loginButton = (
        <div key={'loginButton'} className='menuButton v'>
          <img className='menuButtonImg' src={menuBar} onClick={formToggle}/>
          <div className='menuButtonTxt'>SIGN IN</div>
        </div>
      )
    }

    buttons.push(playButton);
    buttons.push(loginButton);

    return buttons;
  };

  var boardToggle = function() {
    openBoard(!boardOpen);
    openForm(false);
  };

  var formToggle = function() {
    openForm(!formOpen);
    openBoard(false);
  };

  var handleSubmit = function(e) {
    e.preventDefault();

    var form = document.getElementById('userForm');
    var username  = form.username.value.replaceAll(/[\W_.]+/g, '');
    var sessionId = `${username}_session${(new Date()).valueOf()}`;

    openForm(false);

    if (!username) {
      return;
    }

    var user = {
      username,
      sessionId,
      highScore: 0
    };

    document.cookie = `user=${username};`;
    document.cookie = `sessionId=${sessionId};`;
    document.cookie = `highScore=0`;
  };

  var renderForm = function() {
    var style = formOpen ? {opacity: 1, zIndex: 10} : {opacity: 0, zIndex: -10};

    var form = (
      <form className='form v' id='userForm' style={style}>
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
      <Loading />
      {renderForm()}
      <div/>
      <div className='menuButtons v'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default MenuUI;



