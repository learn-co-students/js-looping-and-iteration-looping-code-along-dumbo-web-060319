// Code your solutions in this file
function writeCards(arr){
  let a = [];
  for (let i=0; i <= (arr.length)-1 ; i++ ){
    
  a.push( (`Thank you, ${arr[i]}, for the wonderful surprise gift!`));
  }
  return a;
}
  
function countdown(num){
  while (num >= 0){
    console.log(num);
    num --;
  }
  
}

