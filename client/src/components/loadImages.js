import menuBar  from '../images/menuBar.png';
import deadImage  from '../images/deadButton.png';
import mathOut  from '../images/mathOut.png';

import button1  from '../images/buttons/button1.png';
import button2  from '../images/buttons/button2.png';
import button3  from '../images/buttons/button3.png';
import button4  from '../images/buttons/button4.png';

import select1  from '../images/buttons/select1.png';
import select2  from '../images/buttons/select2.png';
import select3  from '../images/buttons/select3.png';
import select4  from '../images/buttons/select4.png';

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
import bg12     from '../images/mathgame_dying12.png';
import gameOver from '../images/game_over.png';

import p1   from '../images/mathgame_pulse1.png';
import p2   from '../images/mathgame_pulse2.png';
import p3   from '../images/mathgame_pulse3.png';
import p4   from '../images/mathgame_pulse4.png';
import p5   from '../images/mathgame_pulse5.png';
import p6   from '../images/mathgame_pulse6.png';
import p7   from '../images/mathgame_pulse7.png';
import p8   from '../images/mathgame_pulse8.png';
import p9   from '../images/mathgame_pulse9.png';

import jupiter  from '../images/jupiter.png';

var buttonImages = [button1, button2, button3, button4];
var selectImages = [select1, select2, select3, select4];
var mathImages   = [plus, minus, multiply, divide];
var bgImages     = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];
var pulseImages  = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

var urls = {
  buttonImages,
  selectImages,
  mathImages,
  bgImages,
  pulseImages,
  menuBar:   [menuBar],
  deadImage: [deadImage],
  mathOut:   [mathOut],
  gameOver:  [gameOver],
  jupiter:   [jupiter]
};

var count = 0;
var loadedCount = 0;
var loaded = {};

for (var set in urls) {
  loaded[set] = urls[set].map(function(url) {
    var img = new Image();
    var thisSet = set;

    count++;

    img.src = url;
    img.onload = function() {
      loadedCount++;

      if (loadedCount === count) {
        images.loadedAll = true;
      }

      console.log(`Loaded image for ${thisSet}`);
    }

    return img;
  })
}

console.log(loaded);

var images = {
  urls: urls,
  loaded: loaded,
  loadedAll: false
};

export default images;