import {Asset} from 'expo-asset';
import {Image} from 'react-native';
import {Image as CanvasImage} from 'react-native-canvas';

var imgType = '.webp';

const menuBar  = Asset.fromModule(require(`../../assets/images/menuBar${imgType}`));
const blank    = Asset.fromModule(require(`../../assets/images/buttons/blankButton${imgType}`));
const mathOut  = Asset.fromModule(require(`../../assets/images/mathOut${imgType}`));
const formBg   = Asset.fromModule(require(`../../assets/images/formBg${imgType}`));
const submit   = Asset.fromModule(require(`../../assets/images/submit${imgType}`));

const button1  = Asset.fromModule(require(`../../assets/images/buttons/button1${imgType}`));
const button2  = Asset.fromModule(require(`../../assets/images/buttons/button2${imgType}`));
const button3  = Asset.fromModule(require(`../../assets/images/buttons/button3${imgType}`));
const button4  = Asset.fromModule(require(`../../assets/images/buttons/button4${imgType}`));

const select1  = Asset.fromModule(require(`../../assets/images/buttons/select1${imgType}`));
const select2  = Asset.fromModule(require(`../../assets/images/buttons/select2${imgType}`));
const select3  = Asset.fromModule(require(`../../assets/images/buttons/select3${imgType}`));
const select4  = Asset.fromModule(require(`../../assets/images/buttons/select4${imgType}`));

const plus     = Asset.fromModule(require(`../../assets/images/mathButtons/plus${imgType}`));
const minus    = Asset.fromModule(require(`../../assets/images/mathButtons/minus${imgType}`));
const multiply = Asset.fromModule(require(`../../assets/images/mathButtons/multiply${imgType}`));
const divide   = Asset.fromModule(require(`../../assets/images/mathButtons/divide${imgType}`));

const plus2     = Asset.fromModule(require(`../../assets/images/mathButtons/plus${imgType}`));
const minus2    = Asset.fromModule(require(`../../assets/images/mathButtons/minus${imgType}`));
const multiply2 = Asset.fromModule(require(`../../assets/images/mathButtons/multiply${imgType}`));
const divide2   = Asset.fromModule(require(`../../assets/images/mathButtons/divide${imgType}`));

const bg0      = Asset.fromModule(require(`../../assets/images/bgs/mathgame${imgType}`));
const bg1      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying1${imgType}`));
const bg2      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying2${imgType}`));
const bg3      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying3${imgType}`));
const bg4      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying4${imgType}`));
const bg5      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying5${imgType}`));
const bg6      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying6${imgType}`));
const bg7      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying7${imgType}`));
const bg8      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying8${imgType}`));
const bg9      = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying9${imgType}`));
const bg10     = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying10${imgType}`));
const bg11     = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying11${imgType}`));
const bg12     = Asset.fromModule(require(`../../assets/images/bgs/mathgame_dying12${imgType}`));

const gameOver = Asset.fromModule(require(`../../assets/images/game_over${imgType}`));

const p1   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse1${imgType}`));
const p2   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse2${imgType}`));
const p3   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse3${imgType}`));
const p4   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse4${imgType}`));
const p5   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse5${imgType}`));
const p6   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse6${imgType}`));
const p7   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse7${imgType}`));
const p8   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse8${imgType}`));
const p9   = Asset.fromModule(require(`../../assets/images/pulse/mathgame_pulse9${imgType}`));

const jupiter  = Asset.fromModule(require(`../../assets/images/jupiter${imgType}`));
const blob     = Asset.fromModule(require(`../../assets/images/blob${imgType}`));
const robot    = Asset.fromModule(require(`../../assets/images/robot${imgType}`));

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
  submit:    [submit],
  blob:      [blob],
  robot:     [robot]
};

var canvasImages = {};
var count = 0;
var loadedCount = 0;
var loadedAll = false;

var loadAll = function(canvas, setReady) {
  var promises = [];

  for (var set in assets) {
    canvasImages[set] = assets[set].map(function(asset) {
      promises.push(asset.downloadAsync());

      var image = new CanvasImage(canvas);
      image.src = asset.uri;

      return {image: image, source: asset.uri};
    });
  };

  Promise.all(promises)
    .then(function(r) {
      setReady(true);
    })
    .catch(function(err) {
      console.log(err);
    })

  var images = {
    canvasImages,
    loadedAll
  };

  return images;
};

export default loadAll;