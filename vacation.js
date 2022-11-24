function vacation(input) {
    let index = 0;
    neededMoneyForVacation = Number(input[index]);
    index++;
    currentMoney = Number(input[index]);
    index++;
    let savedMoney = 0;
    let spentMoney = 0;
    let spendCounter = 0;
    let daysCounter = 0;
    let failiure = false;
    let success = false;
    let finalMoney = currentMoney + savedMoney - spentMoney;
    
    while(finalMoney > 0) {
    let typeOfReaction = input[index];
    index++;
    let money = Number(input[index]);
    daysCounter++;

    if(typeOfReaction === "save") {
    savedMoney+= money;
    spendCounter--;
    } else if(typeOfReaction === "spend") {
    spendCounter++;
    }
    spentMoney+= money;
    if(spendCounter === 5) {
    failiure = true;
    break;
    }}

    finalMoney = currentMoney + savedMoney - spentMoney;
    if(finalMoney >= neededMoneyForVacation) {
    success = true; break;

    }}

    if(failiure === true) {
        console.log("You can't save the money.");
        console.log(daysCounter);
    } else if(success === true) {
        console.log("You saved the money for " + daysCounter + " days.")
    }
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
