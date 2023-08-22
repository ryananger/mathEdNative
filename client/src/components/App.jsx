import React, {useEffect, useState} from 'react';
import images       from '../util/loadImages.js';
import cookieHandle from '../util/cookieHandle.js';

import Game     from '../Game/Game.js';
import GameOver from './GameOver.jsx';
import MenuUI   from './UI/MenuUI.jsx';
import PlayUI   from './UI/PlayUI.jsx';

const barNums = [];
const Br = ()=>{return <div class='br'/>;}

for (var i = 0; i < 5; i++) {
  var rand = Math.floor(Math.random()*25);

  barNums.push(rand + 55);
}

var isMobile = function() {
  var check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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

  if (isMobile() || window.innerWidth < 640) {
    return (
      <div style={{textAlign: 'center', color: '#ffc89d'}}>
        {makeBars(5)}
        please view on desktop,
        <Br/>
        mobile coming soon
        <Br/>
        <Br/>
        <small>
          or check out my art store at <a href='https://inkvessels.art'>ink.vessels</a>
        </small>
        <Br/><Br/>
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
        <Br/><Br/>
        it's still a work in progress, but the long term goal is to expand this into a suite of games that can supplement a complete K-12 curriculum,
        with individualized content generated in real time.
        <Br/><Br/>
        math seemed an easy enough subject to start with, and I'm trying to think through game concepts that could increase in difficulty as the learner progresses. I'm open to ideas and feedback.
      </div>
      <div id='play' className='play v'>
        <canvas id='canvas' className='canvas float' width='800' height='1420'/>

        {renderView()}
      </div>
      <div className='wing v'>
        <small>click on the buttons or use the (keyboard), then click on the expression (Enter).</small>
        <Br/><small>up to 3 numbers can be added to an expression.</small>
        <small>&emsp;(ex. (2 + 1) x 2 = 6)</small>
        <Br/>
        <small>click an empty square (Spacebar) to refill/refresh your numbers.</small>
        <Br/>
        <small>press M to mute, Escape to pause.</small>
        <Br/>
        <Br/>
        <Br/>
        <Br/>
        <div style={{textAlign: 'center'}}>
          --xx--
          <Br/><Br/>
          I made the art, too. Related projects below.
          <Br/><Br/>
          <a href='https://gen.inkvessels.art'>ink.gen</a><Br/>
          <a href='https://inkvessels.art'>ink.vessels</a>
        </div>
      </div>
    </div>

  )


}

export default App;

