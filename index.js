function writeCards(names, word) {
  let arrayOfThanks =[]
  for (let i = 0; i < names.length; i++) {
    let thanks = `Thank you, ${names[i]}, for the wonderful ${word} gift!`;
    arrayOfThanks.push(thanks);
  }
  return arrayOfThanks;
}

function countdown (num) {
  let i = num
  while (num >= 0) {
    console.log(num--);
  }
}
