const { playerHand, cardPair } = require('../src/playerDeck');
const { randomFace, cardNumber, drawCard } = require('../src/cards');

describe("Player deck additions", () => {
    it('creates a players hand', () => {
        const emptyHand = playerHand();

        expect(emptyHand).toEqual([]);
    });

    xit('should add the returned card to the players hand', () => {
        const startingHand = cardPair();

        expect(startingHand).toEqual('Dealt: ' + [drawCard() + ' ' + drawCard()])
    });
});


console.log(cardPair())
