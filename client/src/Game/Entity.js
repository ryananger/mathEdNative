var idCount = 0;

var Entity = function(x, y, actions) {
  const entity = {
    id: idCount++,
    isEntity: true,

    x: x,
    y: y,

    draw: function(Game, ctx) {
      // handle entity render here
    },
    update: function(Game) {
      // entity updates go here

    }
  }

  return entity;
};

export default Entity;

