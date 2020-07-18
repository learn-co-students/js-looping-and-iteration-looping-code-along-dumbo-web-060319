// Code your solutions in this file
const messages = []

function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return messages 
}

function countdown(n) {
  while (n >= 0){
    console.log(n)
    --n
  }
}