function writeCards(names, event){
    let storage = [];
    for (let i = 0; i < names.length; i++){
        storage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return storage;
}

function countdown(num){
    let count = 0;
    while (num >= count) {
        console.log(num);
        num--;
    }
}
