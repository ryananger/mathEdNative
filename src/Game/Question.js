import Entity from './Entity.js';

var Question = function(x, y) {
  var blob = Entity(x, y);

  blob.question = Math.floor(Math.random() * 7) + 1;

  blob.draw = function(Game, ctx) {
    ctx.fillText(blob.question, blob.x, blob.y);
  };

  blob.update = function(Game) {
    var units = Game.height/5000;

    blob.y += Game.questionSpeed * units;

    if (blob.y > Game.height*0.66) {
      Game.entities.pop();
      Game.hp++;
    }
  };

  return blob;
};

export default Question;

