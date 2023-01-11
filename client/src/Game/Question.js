import Entity from './Entity.js';

var Question = function(x, y) {
  var blob = Entity(x, y);

  blob.question = Math.floor(Math.random() * 7) + 1;

  blob.draw = function(Game, ctx) {
    ctx.fillText(blob.question, blob.x, blob.y);
  };

  blob.update = function(Game) {
    blob.y += Game.questionSpeed;

    if (blob.y > 900) {
      Game.entities.pop();
      Game.score -= 500;
      Game.hp++;
    }
  };

  return blob;
};

export default Question;

