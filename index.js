// Code your solutions in this file
function writeCards(names, event) {
    const cards = []
    for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    cards.push(message)
    }

    return cards 
}

function countdown(num) {
    let i = 0
    while (num >= 0) {
        console.log(num--)
    }
}