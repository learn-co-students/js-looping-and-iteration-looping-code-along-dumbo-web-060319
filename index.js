// Code your solutions in this file



function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

writeCards(["Ada", "Brendan", "Ali"],"birthday");


function countdown(num) {
    let i = num;
    while (i >= 0){
        console.log(i);
        i--;
    }
}


