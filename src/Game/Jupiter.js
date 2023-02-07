import Entity from './Entity.js';

var Jupiter = function(x, y) {
  var jupiter = Entity(x, y);

  jupiter.draw = function(Game, ctx) {
    var img = Game.images.jupiter[0].image;

    ctx.drawImage(img, jupiter.x, jupiter.y, ctx.canvas.width, 1065);
  };

  jupiter.crash = function(Game) {
    var units = Game.height/500;

    if (jupiter.y < 0) {
      Game.jupiterFalling = true;
      jupiter.y += 2*units;
    } else {
      Game.init();

      setTimeout(function() {
        Game.setView('menu');
      }, 50)
    }
  };

  return jupiter;
};

export default Jupiter;

