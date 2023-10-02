const { playerHand, cardPair, handValue } = require('../src/playerDeck');
const { randomFace, cardNumber, drawCard, } = require('../src/cards');

describe("Player deck additions", () => {
    it('creates a players hand', () => {
        const emptyHand = playerHand();

        expect(emptyHand).toEqual([]);
    });

    it('should add the returned card to the player\'s hand', () => {
       
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5); 
        const startingHand = cardPair();
    
        expect(startingHand).toEqual('Dealt: ' + [drawCard() + ' ' + drawCard()]);
    
        jest.spyOn(global.Math, 'random').mockRestore();
      });
    });

    xit('should return the total of the players hand', () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5); 
        
        expect(handValue()).toEqual(cardPair());

        jest.spyOn(global.Math, 'random').mockRestore();
    });

