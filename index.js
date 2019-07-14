function writeCards(arr, event) {
    let thankYouCards = []
    for (let i = 0; i <= arr.length - 1; i++){
        thankYouCards.push("Thank you, " + arr[i] + ", for the wonderful surprise gift!")
    }
    return thankYouCards;
} 

function countdown(num){
    while (num >= 0) {
        console.log(num)
        num = num - 1;
    }
}