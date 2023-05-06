import Entity from './Entity.js';
import images from '../util/loadImages.js';

var Question = function(x, y) {
  var blob = Entity(x, y);

  blob.question = Math.floor(Math.random() * 7) + 1;
  blob.width = 160 + Math.floor(Math.random() * 80);
  blob.height = blob.width;

  var img = images.loaded.blob[0];

  var sq = 200;
  var frame = 0;
  var frameSpeed = 6 + Math.floor(Math.random() * 8);
  var tick = 0;

  blob.draw = function(Game, ctx) {
    var slice = [frame * sq, 0, sq, sq];
    var paint = [blob.x - blob.width/2, blob.y - blob.height/2, blob.width, blob.height];

    ctx.drawImage(img, ...slice, ...paint);

    if (!Game.jupiterFalling) {
      ctx.fillStyle = '#e2bab5';
      ctx.fillText(blob.question, blob.x - 14, blob.y + 24);
    }
  };

  blob.update = function(Game) {
    var units = Game.height/5000;

    blob.y += Game.questionSpeed * units;

    if (blob.y > Game.height*0.64) {
      Game.questions.pop();
      Game.hp++;
      Game.playAudio(Game.audio.bkaw);
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

