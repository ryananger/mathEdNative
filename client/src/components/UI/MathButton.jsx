import React, {useState, useEffect} from 'react';
import Game   from '../../Game/Game.js';
import images from '../../util/loadImages.js';

const MathButton = function({type}) {
  const [selected, setSelect] = useState(false);

  var src1 = images.urls.mathImages[type];
  var src2 = images.urls.mathImages[type + 4];

  var thisMod = function() {
    switch (type) {
      case 0:
        return '+';
      case 1:
        return '-';
      case 2:
        return '×';
      case 3:
        return '÷';
    };
  }();

  var setMod = function() {
    Game.mod = thisMod;
  };

  useEffect(function() {
    setSelect(Game.mod === thisMod);
  }, [Game.mod]);

  return (
    <div className='mathButton h' onClick={setMod}>
      <img src={selected ? src2 : src1} className={`mathButton ${selected ? 'mathSelect' : ''} v`}/>
    </div>
  )
};

export default MathButton;