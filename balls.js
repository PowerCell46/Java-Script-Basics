function balls(input) {
let index = 0;
let numberOfBalls = input[index];
index++;
let currentBallColour = input[index];
let currentBallCounter = 0;

let points = 0;
let redCounter = 0;
let orangeCounter = 0;
let yellowCounter = 0;
let whiteCounter = 0;
let blackCounter = 0;
let othersCounter = 0;

while(currentBallCounter < numberOfBalls) {

    switch(currentBallColour) {
    case "red": points += 5; redCounter++; break;
    case "orange": points += 10; orangeCounter++; break;
    case "yellow": points += 15; yellowCounter++; break;
    case "white": points += 20; whiteCounter++; break;
    case "black": points = Math.floor(points / 2); blackCounter++; break;  
    default: points += 0; othersCounter++; break;
    }

    index++;
    currentBallColour = input[index];
    currentBallCounter++;
}

console.log("Total points: " + points);
console.log("Red balls: " + redCounter);
console.log("Orange balls: " + orangeCounter);
console.log("Yellow balls: " + yellowCounter);
console.log("White balls: " + whiteCounter);
console.log("Other colors picked: " + othersCounter);
console.log("Divides from black balls: " + blackCounter);
}
balls(["10",
"white",
"white",
"ee",
"red",
"orange",
"red",
"black",
"black",
"black",
"black"])