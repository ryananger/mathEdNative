import Entity from './Entity.js';
import images from '../util/loadImages.js';

var Robot = function(x, y) {
  var robot = Entity(x, y);

  var sq = 400;
  var frame = 0;
  var frameSpeed = 30;
  var tick = 0;

  robot.draw = function(Game, ctx) {
    var img = Game.images.robot[0].image;
    var slice = [frame * sq, 0, sq, sq];
    var paint = [robot.x - sq/2, robot.y - sq/2, 200, 200];

    ctx.drawImage(img, ...slice, ...paint);
  };

  robot.update = function(Game) {
    tick++;

    if (tick % frameSpeed === 0) {
      if (Math.random() < 0.5) {
        frame++;
      }

      if (frame > 6) {
        frame = 0;
      }
    }
  };

  return robot;
};

export default Robot;

