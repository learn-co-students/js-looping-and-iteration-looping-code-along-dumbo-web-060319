function writeCards(names, eventName) {
    const thankYou = []

    for (let i = 0; i < names.length; i++) {
        let thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        thankYou.push(thankYouMessage)
    }

    return thankYou
}


function countdown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer -= 1
    }
}
