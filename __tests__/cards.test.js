const card = require('blackjack/src/cards.js'); 
const { randomFace, cardNumber, drawCard } = require('../src/cards');


describe("Card", () => {
    it('can be instantiated', () => {
        expect(card).toBeInstanceOf(Object);
    });

    it('should return a random card number between 1 and 10', () => {
        
        const result = card.cardNumber(); 
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
    });

    it('should return a random card face as a string when a card is called', () => {
        const cardFace = card.randomFace(); 

       
        expect(typeof cardFace).toBe('string');
    });

  it('should return a card with a number and face', () => {
  const newCard = card.drawCard();
  
  const regex = /^\d+ (of Clubs\.|of Spades\.|of Hearts\.|of Diamonds\.)$/;

  expect(newCard).toMatch(regex);
})
});