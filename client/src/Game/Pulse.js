import Entity from './Entity.js';
import images from '../util/loadImages.js';

var imgs = images.loaded.pulseImages;

var Pulse = function() {
  var pulse = Entity(0, 0);

  pulse.imgs = imgs;
  pulse.img  = 0;

  pulse.ticks = 0;
  pulse.pulsing = false;

  pulse.draw = function(Game, ctx) {
    if (pulse.pulsing) {
      ctx.drawImage(imgs[pulse.img], 0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  };

  pulse.update = function(Game) {
    if (pulse.pulsing) {
      pulse.ticks++;

      if (pulse.ticks % 2 === 0) {
        if (pulse.img < 4) {
          pulse.img++;
        } else if (pulse.ticks % 6 === 0) {
          pulse.img++;
        }

        if (pulse.img > 8) {
          pulse.reset();
        }
      }
    }
  };

  pulse.reset = function() {
    pulse.pulsing = false;
    pulse.ticks = 0;
    pulse.img = 0;
  };

  return pulse;
};

export default Pulse;

