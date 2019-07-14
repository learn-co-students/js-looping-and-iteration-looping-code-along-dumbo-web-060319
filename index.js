// Code your solutions in this file
const writeCards = names => {
  let cards = [];

  for (let i = 0; i < names.length; i++) {
    let greeting = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    cards.push(greeting);
  }

  return cards;
};

const countdown = num => {
  let count = num;
  while (count >= 0) {
    console.log(count);
    count--;
  }
};
