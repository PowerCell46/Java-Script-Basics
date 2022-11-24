function vacation(input) {
let index = 0;
let destination = input[index];
index++
let minimumBudget = Number(input[index]);
index++;
let currentSavedMoney = input[index];
let allSavedMoney = 0;

while(currentSavedMoney !== "End" && destination !== "End" && minimumBudget !== "End") {
currentSavedMoney = Number(input[index]);
allSavedMoney+= currentSavedMoney;

if(allSavedMoney >= minimumBudget) {
console.log("Going to " + destination + "!");
allSavedMoney = (allSavedMoney - minimumBudget);
index++;
destination = input[index];
index++;
minimumBudget = Number(input[index]);
}

index++;
currentSavedMoney = input[index];
}
}
vacation(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
