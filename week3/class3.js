// VALIDATE AN EMAIL
// function isValidEmail(str) {
// ^\w+@\w+\.\w+
// }
//
// isValidEmail('ali@gmail.com');
// isValidEmail('ali.com');
// isValidEmail('ali@gmail');
// isValidEmail('ali');


// BATTLE GAME
// not clear from instructions what baseDamage is so I just set it to 0
//I'm assuming we will be using this function throughout to build a functional game
//and baseDamage will be more integrated at that point?

// function Player(name, health) {
//   this.name = name;
//   this.health = health;
// }
//
// var player1 = new Player('Alison', 10);
// var player2 = new Player('Robert', 10);
//
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// const variableDamage = getRandomInt(11);
//
// function attack(attackingPlayer, defendingPlayer, baseDamage, variableDamage) {
//   console.log('varibaleDam', variableDamage);
//   const calculatedDamage = baseDamage + variableDamage;
//   return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${calculatedDamage} damage`;
// }
//
// console.log(attack(player1, player2, 0, variableDamage));
// ITEMIZED RECEIPT
// function logReceipt() {
//   let subtotal = 0;
//   for (var i=1; i<arguments.length; i++) {
//     subtotal += arguments[i].price;
//     console.log(`${arguments[i].descr} - $${arguments[i].price}`)
//   }
//
//   const tax = (subtotal * arguments[0]).toFixed(2);
//   const total = subtotal + parseFloat(tax);
//   console.log(`Subtotal - $${subtotal}`);
//   console.log(`Tax - $${tax}`);
//   console.log(`Total - $${total}`);
//
// }
//
// function Item(descr, price) {
//   this.descr = descr;
//   this.price = price;
// }
//
// const item1 = new Item('Bud Light', 3.99);
// const item2 = new Item('Hamburger', 6.99);
// // const item3 = new Item('Fries', 2.99);
// // const item4 = new Item('House Salad', 4.99);
//
// // logReceipt(0.1, item1, item2, item3, item4);
// logReceipt(0.1, item1, item2);

// NEW SPACESHIP

function Spaceship(name, topSpeed) {
  var name = name;
  var topSpeed = topSpeed;
  this.accelerate = function() {
      console.log(`${name} moving to ${topSpeed}!!!`);
    };
  this.changeSpeed = function(newSpeed) {
    topSpeed = newSpeed;
  }
}

const mySpaceship = new Spaceship('Falcon', 'speed of light');
const otherSpaceship = new Spaceship('FastFast Spaceship', '1000000000 mph');
const oldSpaceship = new Spaceship('Yugo', 'slooooow');
mySpaceship.accelerate();
mySpaceship.changeSpeed('slow');
mySpaceship.accelerate();
otherSpaceship.accelerate();
otherSpaceship.changeSpeed('99999 mph');
otherSpaceship.accelerate();
