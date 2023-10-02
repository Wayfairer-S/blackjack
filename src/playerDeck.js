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

function handValue() {
    const faceValues = { "King": 10, "Queen": 10, "Jack": 10, "Ace": 11 }; // Assuming Ace is 11, adjust as needed
    const numberValues = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10 };
    
    const numbers = cardPair().match(/\d+/g);
    const total = numbers.reduce((acc, numString) => acc + parseInt(numString, 10), 0);

    return total;




}

module.exports = { playerHand, cardPair, handValue };
