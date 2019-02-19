const blackjackDeck = getDeck();

/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
const CardPlayer = function(name) {
  this.name = name;
  this.hand = [];

  this.drawCard = function() {
    this.hand.push(blackjackDeck[~~(blackjackDeck.length * Math.random())]) ;
  }
};

// CREATE TWO NEW CardPlayers
let dealer = new CardPlayer('Dealer');
let player = new CardPlayer('Player');

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} - Object containing Total points and whether hand isSoft
//  */
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

  const isSoft = (acesCount === 1) ? true : false;

  return {total: totalPoints, isSoft: isSoft};
}
//
// /**
//  * Determines whether the dealer should draw another card
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */


const dealerShouldDraw = function(dealerHand) {
  const dealerPoints = calcPoints(dealerHand).total;
  const isSoft = calcPoints(dealerHand).isSoft;

  if (dealerPoints < 17) {
    return true;
  } else if (dealerPoints > 17) {
    return false;
  } else if (dealerPoints === 17 && isSoft) {
    return true;
  }
}
//
// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} States the player's score, the dealer's score, and who wins
//  */
const determineWinner = function(playerScore, dealerScore) {
  // CREATE FUNCTION HERE
  console.log(`The player's score is ${playerScore}`);
  console.log(`The dealer's score is ${dealerScore}`);

  if ((playerScore > dealerScore) && playerScore < 22) {
    console.log('The player has won!');
  } else if ((dealerScore > playerScore) && dealerScore < 22) {
    console.log('The dealer has won!')
  } else if (dealerScore === playerScore){
    console.log('The game was a tie');
  }

}
//
// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
const getMessage = function(count, dealerCard) {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}
//
// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
const showHand = function(player) {
  let displayHand = player.hand.map(function(card) { return card.displayVal});
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  showHand(dealer);

  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  // IMPLEMENT DEALER LOGIC BELOW
    if (dealerShouldDraw(dealer.hand)) {
      dealer.drawCard();
      showHand(dealer);
    }

  playerScore = calcPoints(player.hand).total;
  dealerScore = calcPoints(dealer.hand).total;

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());
