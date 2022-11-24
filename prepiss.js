function vacation(input) {
let index = 0;
let needMoney = Number(input[index]);
index++;
let currentMoney = Number(input[index]);
index++;
let spendCounter = 0;
let daysCounter = 0;

while(currentMoney < needMoney); {

let action = input[index];
index++;
let amount = Number(input[index]);
index++;
daysCounter++;

switch(action) {
case "spend":
spendCounter++;
currentMoney -= amount; 
if(currentMoney < 0) {
currentMoney = 0;} break;
case "save": 
currentMoney += amount;
spendCounter = 0; break; 
}

if(spendCounter === 5) {
console.log("You can't save the money.");
console.log(daysCounter); break; 
}
}
}