// Code your solutions in this file
function writeCards(arrayOfStringNames, eventName) {
  let array = [];

  for(let i = 0; i < arrayOfStringNames.length; i++) {
     array.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`)
  }
  return array;
};

function countdown(num) {
  let i = 0

  while(num >= i) {
    console.log(num);
    num--
  }
};