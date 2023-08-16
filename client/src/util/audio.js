import click       from '../../dist/public/click.mp3';
import pulse       from '../../dist/public/pulse.mp3';
import bigScore    from '../../dist/public/bigScore.mp3';
import chicken1    from '../../dist/public/chicken1.mp3';
import chicken2    from '../../dist/public/chicken2.mp3';
import bkaw        from '../../dist/public/bkaw.mp3';
import droid1      from '../../dist/public/droid1.mp3';
import droid2      from '../../dist/public/droid2.mp3';

var audio = {
  click: new Audio(click),
  pulse: new Audio(pulse),
  bigScore: new Audio(bigScore),
  chicken1: new Audio(chicken1),
  chicken2: new Audio(chicken2),
  bkaw: new Audio(bkaw),
  droid1: new Audio(droid1),
  droid2: new Audio(droid2)
};

audio.click.volume = 0.4;
audio.pulse.volume = 0.15;
audio.bigScore.volume = 0.4;
audio.chicken1.volume = 0.15;
audio.chicken2.volume = 0.15;
audio.bkaw.volume = 0.1;
audio.droid1.volume = 0.3;
audio.droid2.volume = 0.4;

export default audio;