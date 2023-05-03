import Entity from './Entity.js';
import images from '../util/loadImages.js';

var img = images.loaded.jupiter[0];

var Jupiter = function(x, y) {
  var jupiter = Entity(x, y);

  jupiter.draw = function(Game, ctx) {
    ctx.drawImage(img, jupiter.x, jupiter.y, ctx.canvas.width, 1065);
  };

  jupiter.crash = function(Game) {
    if (jupiter.y < 0) {
      jupiter.y += 6;
    } else {
      Game.over = true;
    }
  };

  return jupiter;
};

export default Jupiter;

