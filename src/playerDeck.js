const cards = require('../src/cards')
const { drawCard } =  cards;

function playerHand() {
    const hand = []; // Use a different name for the variable

    return hand; // Return the variable, not a function call
}

function cardPair() {
    const newHand = ('Dealt: ') + [drawCard() + ' ' + drawCard()];
    const cardPair = newHand;

    return cardPair;
}


module.exports = { playerHand, cardPair, };
