import Entity from './Entity.js';
import images from '../util/loadImages.js';

var Robot = function() {
  var robot = Entity();

  var sq = 400;
  var frame = 0;
  var frameSpeed = 10;
  var tick = 0;

  var img = images.loaded.robot[0];

  robot.draw = function(Game, ctx) {
    var slice = [frame * sq, 0, sq, sq];
    var paint = [robot.x - sq/2, robot.y - sq/2, 400, 400];

    ctx.drawImage(img, ...slice, ...paint);
  };

  robot.update = function(Game) {
    if (!robot.x) {
      robot.x = Game.width * 0.45;
      robot.y = Game.height * 0.534;
    }

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

