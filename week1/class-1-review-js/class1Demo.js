let myName;

let myAge = 21;

myAge = 22;
myAge -= 1;
myAge += 5;
myAge++;
console.log(myAge);

const BEDTIME = 10;

const firstName = 'Matt';
const lastName = 'Schneider';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const combinedName = firstName + ' B ' + lastName;
console.log(combinedName);

const quote = 'Can\'t \n\"Stop Me';
console.log(quote);

const weirdNum = 0.2 + 0.1;
console.log(weirdNum.toFixed(2));

// Generate a random number between 1 and 13
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math.ceil(Math.random() * 13));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let rightNow = new Date();
console.log(rightNow);

let tomorrow = new Date(2019, 0, 23);
console.log(tomorrow);

// getTime to find differences, etc.
console.log(tomorrow.getTime());