import React, {useState, useEffect} from 'react';
import Game        from '../../Game/Game.js';

const GameAlert = function() {
  const message = Game.alert;
  const [style, setStyle] = useState({});

  useEffect(()=>{
    setTimeout(()=>{
      setStyle({top: '-400px'});
    }, 3000);

    setTimeout(()=>{
      Game.alert = null;
    }, 4000);
  }, []);

  return (
    <div className='alert float v' style={style}>
      {message}
    </div>
  )
}

export default GameAlert;



