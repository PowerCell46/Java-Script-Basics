function pcStore(input) {
let priceForTheCPU = Number(input[0]);
let priceForTheGPU = Number(input[1]);
let priceForOneRAM = Number(input[2]);
let numberOfRAMs = Number(input[3]);
let discountPercentage = (Number(input[4]) * 100);

let finalPriceInDollars = (priceForTheCPU + priceForTheGPU - (((priceForTheCPU + priceForTheGPU) / 100) * discountPercentage)) + (priceForOneRAM * numberOfRAMs);
let finalPriceInLevs = (finalPriceInDollars * 1.57);  

console.log("Money needed - " + finalPriceInLevs.toFixed(2) + " leva.");
}
pcStore(["200",
"100",
"80",
"1","0.01"])

