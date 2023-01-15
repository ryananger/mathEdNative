import Entity from './Entity.js';

var Question = function(x, y) {
  var blob = Entity(x, y);

  blob.question = Math.floor(Math.random() * 7) + 1;

  blob.draw = function(Game, ctx) {
    ctx.fillText(blob.question, blob.x, blob.y);
  };

  blob.update = function(Game) {
    blob.y += Game.questionSpeed;

    if (blob.y > 950) {
      Game.entities.pop();
      Game.hp++;

      if (!Game.jupiterFalling) {
        Game.score -= 250;
      }
    }
  };

  return blob;
};

export default Question;

