var imgType = '.webp';

const menuBar  = require(`../../assets/images/menuBar${imgType}`);
const blank    = require(`../../assets/images/buttons/blankButton${imgType}`);
const mathOut  = require(`../../assets/images/mathOut${imgType}`);
const formBg   = require(`../../assets/images/formBg${imgType}`);
const submit   = require(`../../assets/images/submit${imgType}`);

const button1  = require(`../../assets/images/buttons/button1${imgType}`);
const button2  = require(`../../assets/images/buttons/button2${imgType}`);
const button3  = require(`../../assets/images/buttons/button3${imgType}`);
const button4  = require(`../../assets/images/buttons/button4${imgType}`);

const select1  = require(`../../assets/images/buttons/select1${imgType}`);
const select2  = require(`../../assets/images/buttons/select2${imgType}`);
const select3  = require(`../../assets/images/buttons/select3${imgType}`);
const select4  = require(`../../assets/images/buttons/select4${imgType}`);

const plus     = require(`../../assets/images/mathButtons/plus${imgType}`);
const minus    = require(`../../assets/images/mathButtons/minus${imgType}`);
const multiply = require(`../../assets/images/mathButtons/multiply${imgType}`);
const divide   = require(`../../assets/images/mathButtons/divide${imgType}`);
const plus2     = require(`../../assets/images/mathButtons/plus_select${imgType}`);
const minus2    = require(`../../assets/images/mathButtons/minus_select${imgType}`);
const multiply2 = require(`../../assets/images/mathButtons/multiply_select${imgType}`);
const divide2   = require(`../../assets/images/mathButtons/divide_select${imgType}`);

const bg0      = require(`../../assets/images/bgs/mathgame${imgType}`);
const bg1      = require(`../../assets/images/bgs/mathgame_dying1${imgType}`);
const bg2      = require(`../../assets/images/bgs/mathgame_dying2${imgType}`);
const bg3      = require(`../../assets/images/bgs/mathgame_dying3${imgType}`);
const bg4      = require(`../../assets/images/bgs/mathgame_dying4${imgType}`);
const bg5      = require(`../../assets/images/bgs/mathgame_dying5${imgType}`);
const bg6      = require(`../../assets/images/bgs/mathgame_dying6${imgType}`);
const bg7      = require(`../../assets/images/bgs/mathgame_dying7${imgType}`);
const bg8      = require(`../../assets/images/bgs/mathgame_dying8${imgType}`);
const bg9      = require(`../../assets/images/bgs/mathgame_dying9${imgType}`);
const bg10     = require(`../../assets/images/bgs/mathgame_dying10${imgType}`);
const bg11     = require(`../../assets/images/bgs/mathgame_dying11${imgType}`);
const bg12     = require(`../../assets/images/bgs/mathgame_dying12${imgType}`);

const gameOver = require(`../../assets/images/game_over${imgType}`);

const p1   = require(`../../assets/images/pulse/mathgame_pulse1${imgType}`);
const p2   = require(`../../assets/images/pulse/mathgame_pulse2${imgType}`);
const p3   = require(`../../assets/images/pulse/mathgame_pulse3${imgType}`);
const p4   = require(`../../assets/images/pulse/mathgame_pulse4${imgType}`);
const p5   = require(`../../assets/images/pulse/mathgame_pulse5${imgType}`);
const p6   = require(`../../assets/images/pulse/mathgame_pulse6${imgType}`);
const p7   = require(`../../assets/images/pulse/mathgame_pulse7${imgType}`);
const p8   = require(`../../assets/images/pulse/mathgame_pulse8${imgType}`);
const p9   = require(`../../assets/images/pulse/mathgame_pulse9${imgType}`);

const jupiter  = require(`../../assets/images/jupiter${imgType}`);
const blob     = require(`../../assets/images/blob${imgType}`);
const robot    = require(`../../assets/images/robot${imgType}`);

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

export default assets;