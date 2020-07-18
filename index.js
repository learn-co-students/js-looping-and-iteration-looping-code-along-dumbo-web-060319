// Code your solutions in this file
function writeCards(arrOfStrNames, eventName) {
  let cards = []
  for(let i = 0; i < arrOfStrNames.length; i++) {
    cards.push(`Thank you, ${arrOfStrNames[i]}, for the wonderful ${eventName} gift!`);
  }
  return cards;
}

function countdown(start) {
	while (start >= 0) {
		console.log(start--)
	}
}