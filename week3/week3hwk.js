// 1. In-class Exercises
// https://github.com/AlisonZ/UW-JS-200/blob/master/week3/class3.js

// 2.Get the phone number
//not sure why the \d is not working - works in regex checkers, but not when running this file
//replaced with [0-9] as a workaround
const testPhoneNumber = function(phoneNum) {
  // const regex1 = RegExp('^[(]\d{3}[)][ ]\d{3}[-]\d{4}');
  // const regex2 = RegExp('^\d{3}[-]\d{3}[-]\d{4}');
  // const regex3 = RegExp('\d{3}[ ]\d{3}[ ]\d{4}');

  const regex1 = RegExp('^[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}');
  const regex2 = RegExp('^[0-9]{3}[-][0-9]{3}[-][0-9]{4}');
  const regex3 = RegExp('[0-9]{3}[ ][0-9]{3}[ ][0-9]{4}');

  console.log(regex1.test(phoneNum) || regex2.test(phoneNum) || regex3.test(phoneNum));
}

testPhoneNumber('(206) 333-4444');
testPhoneNumber('206-333-4444');
testPhoneNumber('206 333 4444');
testPhoneNumber('not a number')


//3. SOCCER STANDINGS
// const getTotalPoints = function(str) {
//   let points = 0;
//   for (let i = 0; i < str.length; i++) {
//     points += getPointsFromResult(str[i]);
//   }
//   return points;
// }
//
// const RESULT_VALUES = {
//   w: 3,
//   d: 1,
//   l: 0
// }

// This function accepts one argument, the result, which should be a string
// Acceptable values are 'w', 'l', or 'd'
// const getPointsFromResult = function getPointsFromResult(result) {
//   return RESULT_VALUES[result];
// }

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won


// Check getTotalPoints
// console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired,
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

// const orderTeams = function() {
//   for (var i = 0; i < arguments.length; i++) {
//     const results = getTotalPoints(arguments[i].results);
//     console.log(`${arguments[i].name}: ${results}`);
//   }
// }

// Check orderTeams
// orderTeams(
//   {name: 'Sounders', results: 'wwdl'},
//   {name: 'Galaxy', results: 'wlld'}
// );
// should log the following to the console:
// Sounders: 7
// Galaxy: 4
