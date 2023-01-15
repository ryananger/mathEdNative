import {Asset} from 'expo-asset';
import {Image} from 'react-native-canvas';

const menuBar  = Asset.fromModule(require('../Game/images/webp/menuBar.webp'));
const blank    = Asset.fromModule(require('../Game/images/buttons/webp/blankButton.webp'));
const mathOut  = Asset.fromModule(require('../Game/images/webp/mathOut.webp'));
const formBg   = Asset.fromModule(require('../Game/images/webp/formBg.webp'));
const submit   = Asset.fromModule(require('../Game/images/webp/submit.webp'));

const button1  = Asset.fromModule(require('../Game/images/buttons/webp/button1.webp'));
const button2  = Asset.fromModule(require('../Game/images/buttons/webp/button2.webp'));
const button3  = Asset.fromModule(require('../Game/images/buttons/webp/button3.webp'));
const button4  = Asset.fromModule(require('../Game/images/buttons/webp/button4.webp'));

const select1  = Asset.fromModule(require('../Game/images/buttons/webp/select1.webp'));
const select2  = Asset.fromModule(require('../Game/images/buttons/webp/select2.webp'));
const select3  = Asset.fromModule(require('../Game/images/buttons/webp/select3.webp'));
const select4  = Asset.fromModule(require('../Game/images/buttons/webp/select4.webp'));

const plus     = Asset.fromModule(require('../Game/images/mathButtons/webp/plus.webp'));
const minus    = Asset.fromModule(require('../Game/images/mathButtons/webp/minus.webp'));
const multiply = Asset.fromModule(require('../Game/images/mathButtons/webp/multiply.webp'));
const divide   = Asset.fromModule(require('../Game/images/mathButtons/webp/divide.webp'));

const bg0      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame.webp'));
const bg1      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying1.webp'));
const bg2      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying2.webp'));
const bg3      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying3.webp'));
const bg4      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying4.webp'));
const bg5      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying5.webp'));
const bg6      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying6.webp'));
const bg7      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying7.webp'));
const bg8      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying8.webp'));
const bg9      = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying9.webp'));
const bg10     = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying10.webp'));
const bg11     = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying11.webp'));
const bg12     = Asset.fromModule(require('../Game/images/bgs/webp/mathgame_dying12.webp'));

const gameOver = Asset.fromModule(require('../Game/images/webp/game_over.webp'));

const p1   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse1.webp'));
const p2   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse2.webp'));
const p3   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse3.webp'));
const p4   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse4.webp'));
const p5   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse5.webp'));
const p6   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse6.webp'));
const p7   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse7.webp'));
const p8   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse8.webp'));
const p9   = Asset.fromModule(require('../Game/images/pulse/webp/mathgame_pulse9.webp'));

const jupiter  = Asset.fromModule(require('../Game/images/webp/jupiter.webp'));

var buttonImages = [button1, button2, button3, button4];
var selectImages = [select1, select2, select3, select4];
var mathImages   = [plus, minus, multiply, divide];
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

var canvasImages = {};
var loadedAll = false;
var count = 0;
var loadedCount = 0;

var loadAll = function(canvas, setReady) {
  var loaded = [];

  for (var set in assets) {
    loaded = loaded.concat(assets[set].map(function(asset) {
      count++;

      return asset.downloadAsync();
    }))

    canvasImages[set] = assets[set].map(function(asset) {
      var image = new Image(canvas);
      image.src = asset.uri;

      image.addEventListener('load', function() {
        loadedCount++;

        if (loadedCount === count) {
          setReady(true);
        }
      });

      return image;
    })
  }

  var images = {
    assets: assets,
    loaded: loaded,
    canvasImages: canvasImages,
    loadedAll: false
  };

  return images;
};

export default loadAll;