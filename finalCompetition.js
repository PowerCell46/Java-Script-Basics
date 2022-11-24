function finalCompetition(input) {
let numberOfDancers = Number(input[0]);
let numberOfPoints = Number(input[1]);
let season = input[2];
let place = input[3];

let moneyPrice = 0;
let spentMoneyPercentage = 0; 

switch(place) {
    case "Bulgaria":
    moneyPrice = (numberOfPoints * numberOfDancers); 
    switch(season) {
    case "summer": spentMoneyPercentage = 5; break;
    case "winter": spentMoneyPercentage = 8; break;
    } break;
    
    case "Abroad":
    moneyPrice = (numberOfDancers * numberOfPoints);
    moneyPrice = moneyPrice + ((moneyPrice/100) * 50);
    switch(season) {
        case "summer": spentMoneyPercentage = 10; break;
        case "winter": spentMoneyPercentage = 15; break;
        } break;
}

let almostFinalMoney = moneyPrice - ((moneyPrice / 100) * spentMoneyPercentage);
let charityMoney = (almostFinalMoney / 100) * 75;
let finalMoneyForOnePerson = (almostFinalMoney - charityMoney) / numberOfDancers;

console.log("Charity - " + charityMoney.toFixed(2));
console.log("Money per dancer - " + finalMoneyForOnePerson.toFixed(2));
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

