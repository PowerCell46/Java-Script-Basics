function summing(input) {
let firstContestant = Number(input[0]);
let secondContestant = Number(input[1]);
let thirdContestant = Number(input[2]);
let summedTime = Number(firstContestant + secondContestant + thirdContestant);

let minutes = Math.floor(summedTime / 60); //делим сбора на секундите на 60 и закръгляме получения резултат.    
let seconds = summedTime % 60; // делим секундите на 60 и получаваме остатъка.
if(seconds < 10) {
    console.log(minutes + ":0" + seconds);
}
else {
    console.log(minutes + ":" + seconds);
}
}
summing(["35", "45", "44"]);