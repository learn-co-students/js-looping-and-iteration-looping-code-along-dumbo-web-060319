function writeCards(cards, giftType) {
  for (var i = 0, a = []; i < cards.length; i++) {
    a.push(`Thank you, ${cards[i]}, for the wonderful ${giftType} gift!`)
  }

  return a;
}

function countdown(intToCount) {
  while (intToCount >= 0) {
    console.log(intToCount--);
  }
}
