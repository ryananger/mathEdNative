import menuBar  from '../images/webp/menuBar.webp';
import blank    from '../images/buttons/webp/blankButton.webp';
import mathOut  from '../images/webp/mathOut.webp';
import formBg   from '../images/webp/formBg.webp';
import submit   from '../images/webp/submit.webp';

import button1  from '../images/buttons/webp/button1.webp';
import button2  from '../images/buttons/webp/button2.webp';
import button3  from '../images/buttons/webp/button3.webp';
import button4  from '../images/buttons/webp/button4.webp';

import select1  from '../images/buttons/webp/select1.webp';
import select2  from '../images/buttons/webp/select2.webp';
import select3  from '../images/buttons/webp/select3.webp';
import select4  from '../images/buttons/webp/select4.webp';

import plus     from '../images/mathButtons/webp/plus.webp';
import minus    from '../images/mathButtons/webp/minus.webp';
import multiply from '../images/mathButtons/webp/multiply.webp';
import divide   from '../images/mathButtons/webp/divide.webp';

import plus2     from '../images/mathButtons/webp/plus_select.webp';
import minus2    from '../images/mathButtons/webp/minus_select.webp';
import multiply2 from '../images/mathButtons/webp/multiply_select.webp';
import divide2   from '../images/mathButtons/webp/divide_select.webp';

import bg0      from '../images/bgs/webp/mathgame.webp';
import bg1      from '../images/bgs/webp/mathgame_dying1.webp';
import bg2      from '../images/bgs/webp/mathgame_dying2.webp';
import bg3      from '../images/bgs/webp/mathgame_dying3.webp';
import bg4      from '../images/bgs/webp/mathgame_dying4.webp';
import bg5      from '../images/bgs/webp/mathgame_dying5.webp';
import bg6      from '../images/bgs/webp/mathgame_dying6.webp';
import bg7      from '../images/bgs/webp/mathgame_dying7.webp';
import bg8      from '../images/bgs/webp/mathgame_dying8.webp';
import bg9      from '../images/bgs/webp/mathgame_dying9.webp';
import bg10     from '../images/bgs/webp/mathgame_dying10.webp';
import bg11     from '../images/bgs/webp/mathgame_dying11.webp';
import bg12     from '../images/bgs/webp/mathgame_dying12.webp';

import gameOver from '../images/webp/game_over.webp';

import p1   from '../images/pulse/webp/mathgame_pulse1.webp';
import p2   from '../images/pulse/webp/mathgame_pulse2.webp';
import p3   from '../images/pulse/webp/mathgame_pulse3.webp';
import p4   from '../images/pulse/webp/mathgame_pulse4.webp';
import p5   from '../images/pulse/webp/mathgame_pulse5.webp';
import p6   from '../images/pulse/webp/mathgame_pulse6.webp';
import p7   from '../images/pulse/webp/mathgame_pulse7.webp';
import p8   from '../images/pulse/webp/mathgame_pulse8.webp';
import p9   from '../images/pulse/webp/mathgame_pulse9.webp';

import jupiter  from '../images/webp/jupiter.webp';
import robot    from '../images/webp/robot.webp';
import blob     from '../images/webp/blob.webp';

var buttonImages = [button1, button2, button3, button4];
var selectImages = [select1, select2, select3, select4];
var mathImages   = [plus, minus, multiply, divide, plus2, minus2, multiply2, divide2];
var bgImages     = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];
var pulseImages  = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

var urls = {
  buttonImages,
  selectImages,
  mathImages,
  bgImages,
  pulseImages,
  menuBar:   [menuBar],
  blank:     [blank],
  mathOut:   [mathOut],
  gameOver:  [gameOver],
  jupiter:   [jupiter],
  formBg:    [formBg],
  submit:    [submit],
  robot:     [robot],
  blob:      [blob]
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