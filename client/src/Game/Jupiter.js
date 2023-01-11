import Entity from './Entity.js';
import images from '../components/loadImages.js';

var img = new Image();
img.src = images.jupiter;

var Jupiter = function(x, y) {
  var jupiter = Entity(x, y);

  jupiter.draw = function(Game, ctx) {
    ctx.drawImage(img, jupiter.x, jupiter.y, ctx.canvas.width, 1065);
  };

  jupiter.crash = function(Game) {
    if (jupiter.y < 0) {
      jupiter.y += 4;
    } else {
      Game.over = true;
    }
  };

  return jupiter;
};

export default Jupiter;

