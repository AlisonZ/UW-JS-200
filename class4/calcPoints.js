const calcPoints = function(hand) {
  let totalPoints = 0;
  let pointsWithoutAce = 0;
  let acesCount = 0;

  hand.forEach(function(card){
    totalPoints += card.val;
  });

//is this where the 17 check comes in? or is that at another spot when ifSoft && 17?
//in the shouldDealerDraw f(n)?

  if (totalPoints >= 17) {
    hand.forEach(function(card) {
      if (card.displayVal === 'Ace') {
        acesCount +=1;
      } else {
        pointsWithoutAce += card.val;
      }
    });
  }


//determining whether to use ace as 1 or 11 and what the final points will be
while (acesCount > 0 && totalPoints > 21) {
    totalPoints -=10;
    acesCount -=1;
}

console.log('totalpoints', totalPoints);
console.log('acesCount', acesCount);

const isSoft = (acesCount === 1) ? true : false;
console.log('isSoft', isSoft);

  return {total: totalPoints, isSoft: isSoft};
}


const useOnlyAceAsOne = [{val: 12, displayVal: "King", suit: "Hearts"}, {val: 7, displayVal: "7", suit: "Hearts"}, {val: 11, displayVal: "Ace", suit: "Hearts"}];
// const useTwoAcesAsOneOtherAsThree = [{val: 11, displayVal: "Ace", suit: "Hearts"}, {val: 11, displayVal: "Ace", suit: "Hearts"}, {val: 11, displayVal: "Ace", suit: "Hearts"}];
// const allOneAces = [{val: 10, displayVal: "10", suit: "Hearts"}, {val: 8, displayVal: "8", suit: "Hearts"}, {val: 11, displayVal: "Ace", suit: "Hearts"}, {val: 11, displayVal: "Ace", suit: "Hearts"}, {val: 11, displayVal: "Ace", suit: "Hearts"}]

calcPoints(useOnlyAceAsOne);
