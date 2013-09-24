Function.prototype.inherits = function(parentClass) {
  function Surrogate() {};

  Surrogate.prototype = parentClass.prototype;

  this.prototype = new Surrogate();
}

function MovingObject(name) {
  this.name = name;
};

MovingObject.prototype.move = function() {
  console.log("vroooooom!")
}

function Ship (name) {
  MovingObject.call(this, name);
};
Ship.inherits(MovingObject);

function Asteroid (name) {
  MovingObject.call(this, name);
};
Asteroid.inherits(MovingObject);

var moving_thing = new Ship("millennium falcon");

moving_thing.move();

console.log(moving_thing.name)