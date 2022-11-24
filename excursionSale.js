function excursionSale(input) {
let index = 0;
let seaExcursionsNumber = Number(input[index]);
index++;
let mountainExcursionsNumber = Number(input[index]);

let sumOfMoney = 0;
let sumOfExcursions = (seaExcursionsNumber + mountainExcursionsNumber);
let usedExcursions = 0;

index++;
let currentExcursion = input[index];

while(usedExcursions <= sumOfExcursions && currentExcursion !== "Stop") {

if(currentExcursion === "sea") {

if(seaExcursionsNumber > 0) {
sumOfMoney += 680;
usedExcursions++;
seaExcursionsNumber--;
} else if(seaExcursionsNumber <= 0) {
sumOfMoney += 0; 
}

} else if(currentExcursion === "mountain") {

if(mountainExcursionsNumber > 0) {
sumOfMoney += 499;
usedExcursions ++;
mountainExcursionsNumber--;
} else if(mountainExcursionsNumber <= 0) {
sumOfMoney += 0;
}
} else {break;}
index++;
currentExcursion = input[index];
}

if(seaExcursionsNumber === 0 && mountainExcursionsNumber === 0) {
console.log("Good job! Everything is sold.");
}

console.log("Profit: " + sumOfMoney + " leva.");
}
excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

