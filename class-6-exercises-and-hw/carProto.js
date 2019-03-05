/**
 * Creates a new Car object
 * @constructor
 * @param {String} model
 */
const Car = function(model) {
  this.currentSpeed = 0;
  this.model = model;
}

Car.prototype.accelerate = function () {
  this.currentSpeed +=1;
};

Car.prototype.brake = function() {
  this.currentSpeed -=1;
};

Car.prototype.toString = function() {
  return this.toString();
};
