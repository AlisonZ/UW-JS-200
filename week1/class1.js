// BINARY/DECIMAL CONVERSION
// Used the method in these videos:
// https://www.youtube.com/watch?v=tfKe8PPI2zs
// https://www.youtube.com/watch?v=3FA8yQ0cZyE
// https://www.youtube.com/watch?v=cQD3KRPOKNI
// 1. Binary 1001101 = 77 DECIMAL
// 2. Binary 1.011 = 1.375 DECIMAL
// 3. Decimal 99 = 1100011 BINARY
// 4. Decimal 0.1 = 0.0001100011 BINARY


// MATH PRACTICE:
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let cardOne = getRandomArbitrary(1, 14);
let cardTwo = getRandomArbitrary(1, 14);
let cardThree = getRandomArbitrary(1, 14);

console.log(`Your numbers are: ${cardOne}, ${cardTwo}, ${cardThree}`);

let myCards = [cardOne, cardTwo, cardThree];

console.log("Your highest card is:", Math.max(...myCards));

function findArea(diameter) {
  const radius = diameter/2;
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

const smallPizzaArea = findArea(13);
const largePizzaArea = findArea(17);

console.log("This is the small pizza surface area", smallPizzaArea);
console.log("This is the large pizza surface area", largePizzaArea);

const smallPizzaCost = 16.99/smallPizzaArea;
const largePizzaCost = 19.99/largePizzaArea;

console.log("This is the small cost per square inch", smallPizzaCost);
console.log("This is the large cost per square inch", largePizzaCost);

// ADDRESS LINE:
const firstName = "Alison";
const lastName = "Zerbe";
const streetAddress = "705 24th Ave. Apt. 1"
const city = "Seattle";
const state = "WA";
const zipCode = "98122";

console.log(`${firstName} ${lastName}\n${streetAddress}\n${city}, ${state} ${zipCode}`);

const myAddress = "Alison Zerbe\n705 24th Ave.\nSeattle, WA 98122";
const splitAddress = myAddress.split('\n');
const myName = splitAddress[0];
const street = splitAddress[1];
const cityState = splitAddress[2];

console.log('Split Address')
console.log(`${myName}\n${street}\n${cityState}`)

// MIDDLE DATE:
const firstDate = new Date(2019, 0, 1);
const secondDate = new Date(2019, 3, 1);
const middleDate = new Date((firstDate.getTime() + secondDate.getTime())/2);
console.log(`the middle date is: ${middleDate}`);
