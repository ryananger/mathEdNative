import React, {useState, useEffect} from 'react';
import Game   from '../../Game/Game.js';
import ax     from '../../util/ax.js';
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

    var leaderboardButton = (
      <div key={'leaderboardButton'} className='menuButton v'>
        <img className='menuButtonImg' src={menuBar} onClick={boardToggle}/>
        <div className='menuButtonTxt'>LEADERBOARD</div>
      </div>
    );

    buttons.push(playButton);
    buttons.push(loginButton);
    buttons.push(leaderboardButton);

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

    ax.newUser(user);

    document.cookie = `user=${username};`;
    document.cookie = `sessionId=${sessionId};`;
    document.cookie = `highScore=0`;
  };

  var renderForm = function() {
    var style = {opacity: (formOpen ? 1 : 0)};

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

  var renderLeaderboard = function() {
    var style = {opacity: (boardOpen ? 1 : 0)};
    var entries = [];

    if (!Game.leaderBoard) {
      return;
    }

    Game.leaderBoard.map(function(entry, i) {
      entries.push(
        <div key={'hs' + i} className='highScore h'>
          <div>{entry.username}</div>
          <div>{entry.highScore}</div>
        </div>
      )
    })

    var board = (
      <div className='leaderBoard v' style={style}>
        <h1>HIGH SCORES</h1>
        {entries}
      </div>
    )

    return board;
  };

  return (
    <div className='menuUi float v'>
      <Loading />
      {renderForm()}
      {renderLeaderboard()}
      <div></div>
      <div className='menuButtons v'>
        {renderButtons()}
      </div>
    </div>
  )
}

export default MenuUI;



