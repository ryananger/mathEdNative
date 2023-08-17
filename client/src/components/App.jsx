import React, {useEffect, useState} from 'react';
import images       from '../util/loadImages.js';
import cookieHandle from '../util/cookieHandle.js';

import Game     from '../Game/Game.js';
import GameOver from './GameOver.jsx';
import MenuUI   from './UI/MenuUI.jsx';
import PlayUI   from './UI/PlayUI.jsx';

const barNums = [];

for (var i = 0; i < 5; i++) {
  var rand = Math.floor(Math.random()*25);

  barNums.push(rand + 55);
}

const App = function() {
  const [updates, updateReact] = useState(0);
  const [view, setView] = useState('menu');

  const user = cookieHandle.user();
  const updateInterval = 50;

  const reactLoop = function() {
    if (!Game.playing) {
      return;
    }

    if (Game.over) {
      setView('gameover');
      return;
    }

    setTimeout(function() {
      updateReact(updates + 1);
    }, updateInterval);
  };

  const renderView = function() {
    switch (view) {
      case 'menu':
        return <MenuUI setView={setView} user={user}/>;
      case 'play':
        if (!Game.playing) {
          return;
        }

        return <PlayUI user={user}/>;
      case 'gameover':
        return <GameOver setView={setView} user={user}/>;
    }
  };

  const makeBars = function(num) {
    var bars = [];

    for (var i = 0; i < num; i++) {
      bars.push(<div className='bar' key={`bar0${i}`} style={{top: barNums[i] + 'px'}}/>);
    }

    bars.push(<div className='bar' key='barTop' style={{top: '80px'}}/>);
    bars.push(<div className='bar' key='barBot' style={{bottom: '80px'}}/>);

    return bars;
  };

  if (window.innerWidth < 640) {
    return (
      <div style={{textAlign: 'center', color: '#ffc89d'}}>
        {makeBars(5)}
        please view on desktop,
        <br/>
        mobile coming soon
        <br/>
        <br/>
        <small>
          or check out my art store at <a href='https://inkvessels.art'>ink.vessels</a>
        </small>
        <br/><br/>
        thx
      </div>
    )
  }

  useEffect(reactLoop, [updates, Game.playing]);
  useEffect(Game.gameLoop, []);

  return (
    <div className='main h'>
      {makeBars(5)}
      <div className='wing v'>
        this is jupiterFalls, an edutainment proof of concept for early math education (and beyond!)
        <br/><br/>
        it's still a work in progress, but the long term goal is to expand this into a suite of games that can supplement a complete K-12 curriculum,
        with individualized content generated in real time.
        <br/><br/>
        math seemed an easy enough subject to start with, and I'm trying to think through game concepts that could increase in difficulty as the learner progresses. I'm open to ideas and feedback.
      </div>
      <div id='play' className='play v'>
        <canvas id='canvas' className='canvas float' width='800' height='1420'/>

        {renderView()}
      </div>
      <div className='wing v'>
        click on the buttons or use (numpad), then click on the expression (Enter).
        <br/><br/>up to 3 numbers can be added to an expression.
        <br/><small>&emsp;(ex. (2 + 1) x 2 = 6)</small>
        <br/>
        <small>click an empty square (Spacebar) to refill/refresh your numbers.</small>
        <br/>
        <small>press M to mute, Escape to pause.</small>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{textAlign: 'center'}}>
          --xx--
          <br/><br/>
          I made the art, too. Related projects below.
          <br/><br/>
          <a href='https://gen.inkvessels.art'>ink.gen</a><br/>
          <a href='https://inkvessels.art'>ink.vessels</a>
        </div>
      </div>
    </div>

  )


}

export default App;

