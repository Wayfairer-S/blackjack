function cardNumber() {
  const randomNumber = Math.random();
  const cardNumber = Math.floor(randomNumber * 10) + 1;
  
  return cardNumber;
}

function randomFace() {
  const faces = ["of Clubs.", "of Spades.", "of Hearts.", "of Diamonds."];
  

  const randomIndex = Math.floor(Math.random() * faces.length);
  const randomFace = faces[randomIndex];

  return randomFace;
}

function drawCard() {
  const newCard = cardNumber() + ' ' + randomFace();
  
  return newCard;
}



module.exports = {
  cardNumber: cardNumber,
  randomFace: randomFace,
  drawCard: drawCard
};
