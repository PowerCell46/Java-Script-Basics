function vacation(input) {
    let index = 0;
    let neededMoneyForVacation = Number(input[index]);
    index++;
    let moneyUntilNow = Number(input[index]);
    
    index++;
    let action = input[index];
    index++;
    let currentSum = input[index];
    
    let totalMoney = moneyUntilNow; 
    let spendCounter = 0;
    let daysCounter = 0;
    let failiure = false;
    let success = false;

    while(totalMoney < neededMoneyForVacation) {
    daysCounter++;
    if(action === "save") {
    spendCounter = 0;
    totalMoney += currentSum;
    } else if(action === "spend") {
    spendCounter++;
    totalMoney -= currentSum;
    if(totalMoney < 0) {
    totalMoney = 0;
    }
    if(spendCounter === 5) {
    failiure = true; break;
    }  
    }

    if(totalMoney >= neededMoneyForVacation) {
    success = true; break;
    }
    index++;
    action = input[index];
    index++;
    currentSum = Number(input[index]);
}

if(failiure === true) {
console.log("You can't save the money.");
console.log(daysCounter);
} else if(success === true) {
console.log("You saved the money for " + daysCounter + " days.");
}
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
