const cards = require('../src/cards')
const { drawCard } =  cards;

function playerHand() {
    const hand = []; 

    return hand; 
}

function cardPair() {
    const newHand = ('Dealt: ') + [drawCard() + ' ' + drawCard()];
    const cardPair = newHand;

    return cardPair;
}

console.log(drawCard());

module.exports = { playerHand, cardPair, };
