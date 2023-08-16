import Entity from './Entity.js';
import images from '../util/loadImages.js';

var Chicken = function(offsetY) {
  var chicken = Entity();

  var img = images.loaded.chicken[0];
  var frameSize = 80;
  var drawSize  = 60;
  var frame = 0;
  var tick  = 0;

  var walking    = true;
  var walkSpeed  = 2 + Math.floor(Math.random() * 6);
  var frameSpeed = 12 - walkSpeed;

  // 1 = left, 0 = right
  var walkDir = 1;


  chicken.draw = function(Game, ctx) {
    var slice = [frame * frameSize, walkDir * frameSize, frameSize, frameSize];
    var paint = [chicken.x - drawSize/2, chicken.y - drawSize/2, drawSize, drawSize];

    ctx.drawImage(img, ...slice, ...paint);
  };

  chicken.update = function(Game) {
    if (!chicken.x) {
      chicken.x = Math.floor(Math.random() * (Game.width - 200)) + 100;
      chicken.y = (Game.height * 0.65) + offsetY;
    }

    if (Math.random() < 0.001) {
      walkDir = 1 - walkDir;
    }

    if (Math.random() < 0.00025) {
      Math.random() < 0.5 ? Game.playAudio(Game.audio.chicken2) : Game.playAudio(Game.audio.chicken1);
    }

    if (Math.random() < 0.005) {
      walking = false;

      setTimeout(function() {
        walkSpeed = 2 + Math.floor(Math.random() * 6) + (Game.hp/2);
        walking = true;
      }, 1500);
    }

    if (chicken.x < 50) {
      walkDir = 0;
    }

    if (chicken.x > Game.width - 50) {
      walkDir = 1;
    }

    tick++;

    if (tick % frameSpeed === 0 && walking) {
      frame++;

      if (walkDir === 1) {
        chicken.x -= walkSpeed;
      } else {
        chicken.x += walkSpeed;
      }

      if (frame > 3) {
        frame = 0;
      }
    }
  };

  return chicken;
};

export default Chicken;

