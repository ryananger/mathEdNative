import Entity from './Entity.js';
import images from '../util/loadImages.js';

var Question = function(x, y) {
  var blob = Entity(x, y);

  blob.question = Math.floor(Math.random() * 7) + 1;
  blob.width = 80 + Math.floor(Math.random() * 40);
  blob.height = blob.width;

  var sq = 200;
  var frame = 0;
  var frameSpeed = 10 + Math.floor((blob.width - 80));
  var tick = 0;

  blob.draw = function(Game, ctx) {
    if (Game.jupiterFalling) {
      return;
    }

    var img = Game.images.blob[0].image;
    var slice = [frame * sq, 0, sq, sq];
    var paint = [blob.x - blob.width/2, blob.y - blob.height/2, blob.width, blob.height];

    ctx.drawImage(img, ...slice, ...paint);

    ctx.fillStyle = '#e2bab5';
    ctx.fillText(blob.question, blob.x - 8, blob.y + 14);
  };

  blob.update = function(Game) {
    var units = Game.height/5000;

    blob.y += Game.questionSpeed * units;

    if (blob.y > Game.height*0.64) {
      Game.entities.pop();
      Game.hp++;
    }

    tick++;

    if (tick % frameSpeed === 0) {
      frame++;

      if (frame > 4) {
        frame = 0;
      }
    }
  };

  return blob;
};

export default Question;

