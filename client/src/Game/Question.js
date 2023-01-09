import Entity from './Entity.js';

var Question = function(x, y) {
  var blob = Entity(x, y);

  blob.question = Math.floor(Math.random() * 9) + 1;

  blob.draw = function(Game, ctx) {
    ctx.fillText(blob.question, blob.x, blob.y);
  };

  blob.update = function(Game) {
    blob.y += 1;
  };

  return blob;
};

export default Question;

