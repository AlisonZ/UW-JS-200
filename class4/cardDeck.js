/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const createNumberCards = function(suit) {
  let numberCards = [];

  for (let i = 2; i < 11; i ++) {
    const card = {
      val: i,
      displayVal: i.toString(),
      suit: suit,
    }
    numberCards.push(card);
  }

  return numberCards;
}

const createFaceCards = function(suit) {
  return [
    {
      val: 10,
      displayVal: 'Jack',
      suit: suit
    },
    {
      val: 11,
      displayVal: 'Queen',
      suit: suit
    },
    {
      val: 12,
      displayVal: 'King',
      suit: suit
    },
    {
      val: 11,
      displayVal: 'Ace',
      suit: suit
    },

  ];
}

const getDeck = function() {
  const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
  let deck = [];

  for(i = 0; i < suits.length; i++) {
    deck.push(createNumberCards(suits[i]));
    deck.push(createFaceCards(suits[i]));
  }

  let fullDeck = Array.prototype.concat(...deck);

  return fullDeck;
}



// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];
const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
    randomCard.displayVal &&
    typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);
