function braceletStand(input) {
let pocketMoneyForADay = Number(input[0]);
let wonMoneyFromSalesForADay = Number(input[1]);
let allLostMoney = Number(input[2]);
let priceOfTheGift = Number(input[3]);

let collectedMoney = (pocketMoneyForADay * 5) + (wonMoneyFromSalesForADay * 5);
let finalColletedMoney = collectedMoney - allLostMoney;

if(finalColletedMoney >= priceOfTheGift) {
    console.log("Profit: " + finalColletedMoney.toFixed(2) + " BGN, the gift has been purchased.");
} else if(priceOfTheGift > finalColletedMoney) {
    let neededMoney = priceOfTheGift - finalColletedMoney;
    console.log("Insufficient money: " + neededMoney.toFixed(2) + " BGN.");
}
}
braceletStand(["15.20",
"200.00",
"7.30",
"1500.12"])



