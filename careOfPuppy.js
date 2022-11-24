function careOfPuppy(input) {
let index = 0;
let boughtFoodInKG = Number(input[index]);
let boughtFood = boughtFoodInKG * 1000;

index++;

let dailyFoodIntake = (input[index]); 
let eatenFood = 0;

while(dailyFoodIntake !== "Adopted") {
    dailyFoodIntake = Number(input[index]);
    eatenFood += dailyFoodIntake;
    index++;
    dailyFoodIntake = input[index];
}

if(eatenFood <= boughtFood) {
    let leftovers = boughtFood - eatenFood; 
console.log("Food is enough! Leftovers: " + leftovers + " grams.");
} else if(eatenFood > boughtFood) {
    let neededFood = eatenFood - boughtFood;
console.log("Food is not enough. You need " + neededFood + " grams more.");
}
}
careOfPuppy(["2",

"999",

"456",

"999",

"999", "123", "456", "Adopted"])