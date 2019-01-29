// OBJECT REPRESENTATION OF SELF
// const me = {
//   firstName: 'Alison',
//   lastName: 'Zerbe',
//   faveFood: 'tempeh',
//   dad: {
//     firstName: 'Bob',
//     lastName: 'Zerbe',
//     faveFood: 'meatloaf',
//   },
//   mom: {
//     firstName: 'Janice',
//     lastName: 'Bullard',
//     faveFood: 'cheese',
//   },
// };
//
// let { dad, mom } = me;
// console.log(`My dad's name is ${dad.firstName}`);
// console.log(`My mom's favorite food is ${mom.faveFood}`);

// TIC TAC TOE REPRESENTATION
// const row1 = ['-', 'O', '-'];
// const row2 = ['-', 'X', 'O'];
// const row3 = ['X', '-', 'X'];
//
// // console.log(row1);
// // console.log(row2);
// // console.log(row3);
//
// const ticTacArray = [row1, row2, row3];
//
// // ticTacArray.forEach(function(element){
// //   console.log(element);
// // });
//
// ticTacArray[0][2] = 'O';
//
// ticTacArray.forEach(function(element){
//   console.log(element);
// });


// ASSIGNMENT DATE
//this feels excessive and like there should be functions in the Date library to do this work.
// i didn't find anything to do this work in Date, so did it here. Excited to see what the optimal solution is and best way to integrate the Date library
function createAssignmentDate(str) {
  const date = new Date(str);
  date.setDate(date.getDate() + 7);
  date.setSeconds(0,0);
  const dateString = date.toISOString();

  const splitDates = dateString.split('-');
  const year = splitDates[0];
  const month = splitDates[1];
  let day = splitDates[2].substr(0,2);

  const dueDateStr = new Date(year, month, day);
  const splitDueDate = dueDateStr.toDateString().split(' ');

  const strDueDate = `${splitDueDate[1]} ${day}, ${year}`;
  const datetime = `"${year}-${month}-${day}"`;
  return `<time datetime=${datetime}>${strDueDate}</time>`
}


console.log(createAssignmentDate('1/21/2019'));
