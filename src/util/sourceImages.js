import {Asset} from 'expo-asset';
import FastImage from 'react-native-fast-image';

const menuBar  = require('../Game/images/webp/menuBar.webp');
const blank    = require('../Game/images/buttons/webp/blankButton.webp');
const mathOut  = require('../Game/images/webp/mathOut.webp');
const formBg   = require('../Game/images/webp/formBg.webp');
const submit   = require('../Game/images/webp/submit.webp');

const button1  = require('../Game/images/buttons/webp/button1.webp');
const button2  = require('../Game/images/buttons/webp/button2.webp');
const button3  = require('../Game/images/buttons/webp/button3.webp');
const button4  = require('../Game/images/buttons/webp/button4.webp');

const select1  = require('../Game/images/buttons/webp/select1.webp');
const select2  = require('../Game/images/buttons/webp/select2.webp');
const select3  = require('../Game/images/buttons/webp/select3.webp');
const select4  = require('../Game/images/buttons/webp/select4.webp');

const plus     = require('../Game/images/mathButtons/webp/plus.webp');
const minus    = require('../Game/images/mathButtons/webp/minus.webp');
const multiply = require('../Game/images/mathButtons/webp/multiply.webp');
const divide   = require('../Game/images/mathButtons/webp/divide.webp');
const plus2     = require('../Game/images/mathButtons/webp/plus_select.webp');
const minus2    = require('../Game/images/mathButtons/webp/minus_select.webp');
const multiply2 = require('../Game/images/mathButtons/webp/multiply_select.webp');
const divide2   = require('../Game/images/mathButtons/webp/divide_select.webp');

const bg0      = require('../Game/images/bgs/webp/mathgame.webp');
const bg1      = require('../Game/images/bgs/webp/mathgame_dying1.webp');
const bg2      = require('../Game/images/bgs/webp/mathgame_dying2.webp');
const bg3      = require('../Game/images/bgs/webp/mathgame_dying3.webp');
const bg4      = require('../Game/images/bgs/webp/mathgame_dying4.webp');
const bg5      = require('../Game/images/bgs/webp/mathgame_dying5.webp');
const bg6      = require('../Game/images/bgs/webp/mathgame_dying6.webp');
const bg7      = require('../Game/images/bgs/webp/mathgame_dying7.webp');
const bg8      = require('../Game/images/bgs/webp/mathgame_dying8.webp');
const bg9      = require('../Game/images/bgs/webp/mathgame_dying9.webp');
const bg10     = require('../Game/images/bgs/webp/mathgame_dying10.webp');
const bg11     = require('../Game/images/bgs/webp/mathgame_dying11.webp');
const bg12     = require('../Game/images/bgs/webp/mathgame_dying12.webp');

const gameOver = require('../Game/images/webp/game_over.webp');

const p1   = require('../Game/images/pulse/webp/mathgame_pulse1.webp');
const p2   = require('../Game/images/pulse/webp/mathgame_pulse2.webp');
const p3   = require('../Game/images/pulse/webp/mathgame_pulse3.webp');
const p4   = require('../Game/images/pulse/webp/mathgame_pulse4.webp');
const p5   = require('../Game/images/pulse/webp/mathgame_pulse5.webp');
const p6   = require('../Game/images/pulse/webp/mathgame_pulse6.webp');
const p7   = require('../Game/images/pulse/webp/mathgame_pulse7.webp');
const p8   = require('../Game/images/pulse/webp/mathgame_pulse8.webp');
const p9   = require('../Game/images/pulse/webp/mathgame_pulse9.webp');

const jupiter  = require('../Game/images/webp/jupiter.webp');

var buttonImages = [button1, button2, button3, button4];
var selectImages = [select1, select2, select3, select4];
var mathImages   = [plus, minus, multiply, divide, plus2, minus2, multiply2, divide2];
var bgImages     = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];
var pulseImages  = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

var assets = {
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
  submit:    [submit]
};

const loadImage = async (filePath) => {
  const [{ localUri }] = await Asset.loadAsync(filePath);
  return localUri;
};

const preloadImages = async function() {
  for (var set in assets) {
    const sources = await Promise.all(
      assets[set].map(async (uri) => ({
        uri: await loadImage(uri)
      }))
    );

    FastImage.preload(sources)

    console.log(set);
  }
};

// preloadImages();

export default assets;