import menuBar  from '../images/menuBar.png';
import deadImage  from '../images/deadButton.png';
import mathOut  from '../images/mathOut.png';

import button1  from '../images/button1.png';
import button2  from '../images/button2.png';
import button3  from '../images/button3.png';
import button4  from '../images/button4.png';

import select1  from '../images/select1.png';
import select2  from '../images/select2.png';
import select3  from '../images/select3.png';
import select4  from '../images/select4.png';

import plus     from '../images/plus.png';
import minus    from '../images/minus.png';
import multiply from '../images/multiply.png';
import divide   from '../images/divide.png';

import bg0      from '../images/mathgame.png';
import bg1      from '../images/mathgame_dying1.png';
import bg2      from '../images/mathgame_dying2.png';
import bg3      from '../images/mathgame_dying3.png';
import bg4      from '../images/mathgame_dying4.png';
import bg5      from '../images/mathgame_dying5.png';
import bg6      from '../images/mathgame_dying6.png';
import bg7      from '../images/mathgame_dying7.png';
import bg8      from '../images/mathgame_dying8.png';
import bg9      from '../images/mathgame_dying9.png';
import bg10     from '../images/mathgame_dying10.png';
import bg11     from '../images/mathgame_dying11.png';
import gameOver from '../images/game_over.png';

import jupiter  from '../images/jupiter.png';

var buttonImages = [button1, button2, button3, button4];
var selectImages = [select1, select2, select3, select4];
var mathImages   = [plus, minus, multiply, divide];
var bgImages     = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11];

var images = {
  buttonImages,
  selectImages,
  mathImages,
  bgImages,
  menuBar:   [menuBar],
  deadImage: [deadImage],
  mathOut:   [mathOut],
  gameOver:  [gameOver],
  jupiter:   [jupiter]
};

for (var set in images) {
  images[set].map(function(url) {
    var img = new Image();

    img.src = url;
    img.onload = function() {
      console.log(img);
    }
  })
}

export default images;